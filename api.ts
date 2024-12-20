// src/services/api.ts
import { User } from '../types/user';
import { ERRORS, API } from '../lib/constants';

export class APIError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

interface APIResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

interface LoginResponse {
  token: string;
  user: User;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

class ApiService {
  private baseURL: string;
  private defaultHeaders: HeadersInit;

  constructor() {
    this.baseURL = API.BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async fetchWithTimeout(
    input: RequestInfo,
    init?: RequestInit,
    timeout: number = API.TIMEOUT
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(input, {
        ...init,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new APIError(408, ERRORS.API.TIMEOUT);
      }
      throw error;
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<APIResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      ...this.defaultHeaders,
      ...options.headers,
    };

    try {
      const response = await this.fetchWithTimeout(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        let errorMessage = ERRORS.API.SERVER_ERROR;
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {}

        throw new APIError(response.status, errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError(500, ERRORS.API.NETWORK_ERROR);
    }
  }

  // Auth endpoints
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>(API.ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return response.data;
  }

  async register(data: RegisterData): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>(API.ENDPOINTS.AUTH.REGISTER, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response.data;
  }

  async resetPassword(email: string): Promise<void> {
    await this.request(API.ENDPOINTS.AUTH.RESET_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // User endpoints
  async getUserProfile(token: string): Promise<User> {
    const response = await this.request<User>(API.ENDPOINTS.USER.PROFILE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  async updateProfile(token: string, data: Partial<User>): Promise<User> {
    const response = await this.request<User>(API.ENDPOINTS.USER.UPDATE_PROFILE, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.data;
  }

  // Exam endpoints
  async getExamSections(token: string) {
    const response = await this.request(API.ENDPOINTS.EXAM.SECTIONS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  async startExam(token: string, sectionId: string) {
    const response = await this.request(`${API.ENDPOINTS.EXAM.SECTIONS}/${sectionId}/start`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  async submitAnswer(
    token: string, 
    examId: string, 
    questionId: string, 
    answer: string
  ) {
    const response = await this.request(API.ENDPOINTS.EXAM.SUBMIT_ANSWER, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        examId,
        questionId,
        answer,
      }),
    });
    return response.data;
  }

  // Dashboard endpoints
  async getDashboardStats(token: string) {
    const response = await this.request(API.ENDPOINTS.DASHBOARD.STATS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  async getProgress(token: string) {
    const response = await this.request(API.ENDPOINTS.DASHBOARD.PROGRESS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  // Study materials endpoints
  async getStudyMaterials(token: string, sectionId: string) {
    const response = await this.request(`/study-materials/${sectionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  // Premium features
  async upgradeToPremium(token: string, paymentInfo: any) {
    const response = await this.request('/premium/upgrade', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentInfo),
    });
    return response.data;
  }
}

export const api = new ApiService();

import { Jurisdiction } from '../types/jurisdiction';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

export const getJurisdictions = async (): Promise<Jurisdiction[]> => {
  try {
    const fullUrl = `${API_BASE_URL}/jurisdictions`;
    console.log('Fetching jurisdictions from URL:', fullUrl);
    
    const response = await fetch(fullUrl);
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response text:', errorText);
      throw new Error(`Failed to fetch jurisdictions. Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Fetched jurisdictions:', data);
    return data;
  } catch (error) {
    console.error('Detailed error fetching jurisdictions:', error);
    throw error;
  }
}
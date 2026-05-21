export interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

import axios from 'axios';

export const apiAxiosInstance = axios.create();

export class RefreshTokenService {
  static initialize() {
    return new RefreshTokenService();
  }
  static getInstance() {
    return null;
  }
  interceptReq() {}
  interceptRes() {}
  destroy() {}
}

export class InvalidRefreshTokenError extends Error {
  constructor(message?: string) {
    super(message ?? 'Invalid refresh token');
    this.name = 'InvalidRefreshTokenError';
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  me(): Promise<any> {
    return firstValueFrom(
      this.http.get('/api/auth/me', { withCredentials: true })
    );
  }

  login(email: string, password: string): Promise<any> {
    return firstValueFrom(
      this.http.post('/api/auth/login', { email, password }, { withCredentials: true })
    );
  }

  logout(): Promise<any> {
    return firstValueFrom(
      this.http.post('/api/auth/logout', {}, { withCredentials: true })
    );
  }
}

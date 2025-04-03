import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Activity } from '../models/activity.model';
import { environment } from '../../../environments/environment';

// Define the API response interfaces
interface ApiResponse<T> {
  success: boolean;
  count?: number;
  data: T;
  message?: string;
}

interface PendingActivitiesResponse {
  success: boolean;
  count: number;
  stats: {
    pending: number;
    approved: number;
    rejected: number;
  };
  data: Activity[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'http://localhost:5000/api/activities';

  constructor(private http: HttpClient) { }

  submitActivity(activityData: FormData): Observable<ApiResponse<Activity>> {
    return this.http.post<ApiResponse<Activity>>(this.apiUrl, activityData)
      .pipe(
        catchError(this.handleError)
      );
  }

  getMyActivities(): Observable<ApiResponse<Activity[]>> {
    return this.http.get<ApiResponse<Activity[]>>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPendingActivities(): Observable<PendingActivitiesResponse> {
    return this.http.get<PendingActivitiesResponse>(`${this.apiUrl}/pending`)
      .pipe(
        catchError(this.handleError)
      );
  }

  reviewActivity(id: string, reviewData: { status: 'approved' | 'rejected', feedback?: string, pointsAwarded?: number }): Observable<ApiResponse<Activity>> {
    return this.http.put<ApiResponse<Activity>>(`${this.apiUrl}/${id}/review`, reviewData)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllActivities(): Observable<ApiResponse<Activity[]>> {
    return this.http.get<ApiResponse<Activity[]>>(`${this.apiUrl}/all`)
      .pipe(
        catchError(this.handleError)
      );
  }

  generateReport(params: { 
    teacherId?: string;
    studentIds?: string;
    department?: string; 
    class?: string;
    semester?: string; 
    status?: string 
  } = {}): Observable<any> {
    const queryParams = new URLSearchParams();
    
    if (params.teacherId) queryParams.append('teacherId', params.teacherId);
    if (params.studentIds) queryParams.append('studentIds', params.studentIds);
    if (params.department) queryParams.append('department', params.department);
    if (params.class) queryParams.append('class', params.class);
    if (params.semester) queryParams.append('semester', params.semester);
    if (params.status) queryParams.append('status', params.status);
    
    const url = `${this.apiUrl}/report?${queryParams.toString()}`;
    return this.http.get<any>(url);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}, Message: ${error.message}`;
      }
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
} 
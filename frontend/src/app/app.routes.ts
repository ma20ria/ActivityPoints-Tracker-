import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/auth/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'reset-password/:token',
    loadComponent: () => import('./features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
  },
  {
    path: 'dashboard/student',
    loadComponent: () => import('./features/dashboard/student-dashboard/student-dashboard.component').then(m => m.StudentDashboardComponent)
  },
  {
    path: 'dashboard/teacher',
    loadComponent: () => import('./features/dashboard/teacher-dashboard/teacher-dashboard.component').then(m => m.TeacherDashboardComponent)
  },
  {
    path: 'activities',
    loadComponent: () => import('./features/activities/activity-list/activity-list.component').then(m => m.ActivityListComponent)
  },
  {
    path: 'activities/submit',
    loadComponent: () => import('./features/activities/activity-submit/activity-submit.component').then(m => m.ActivitySubmitComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile-view/profile-view.component').then(m => m.ProfileViewComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
]; 
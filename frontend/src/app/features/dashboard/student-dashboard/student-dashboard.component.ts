import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { AuthService } from '../../../core/services/auth.service';
import { ActivityService } from '../../../core/services/activity.service';
import { NavbarComponent } from '../../../ui/navbar/navbar.component';
import { User } from '../../../core/models/user.model';
import { Activity } from '../../../core/models/activity.model';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NgChartsModule, NavbarComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  currentUser: User | null = null;
  activities: Activity[] = [];
  isLoading: boolean = true;
  
  // Activity stats
  totalActivities: number = 0;
  pendingActivities: number = 0;
  approvedActivities: number = 0;
  rejectedActivities: number = 0;
  totalPoints: number = 0;
  
  // Doughnut chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545']
      }
    ]
  };
  
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  };
  
  // Bar chart for activity types
  public barChartData: ChartData<'bar'> = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        label: 'Points Earned',
        backgroundColor: '#007bff'
      }
    ]
  };
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  constructor(
    private authService: AuthService,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadActivities();
  }

  loadActivities(): void {
    this.isLoading = true;
    
    this.activityService.getMyActivities().subscribe({
      next: (response) => {
        if (response && response.data) {
          this.activities = response.data;
          this.calculateStats();
          this.updateCharts();
        } else {
          this.activities = [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading activities:', error);
        this.isLoading = false;
      }
    });
  }

  calculateStats(): void {
    this.totalActivities = this.activities.length;
    this.pendingActivities = this.activities.filter(a => a.status === 'pending').length;
    this.approvedActivities = this.activities.filter(a => a.status === 'approved').length;
    this.rejectedActivities = this.activities.filter(a => a.status === 'rejected').length;
    
    this.totalPoints = this.activities
      .filter(a => a.status === 'approved')
      .reduce((sum, activity) => sum + activity.pointsAwarded, 0);
  }

  updateCharts(): void {
    // Update doughnut chart
    this.doughnutChartData.datasets[0].data = [
      this.approvedActivities,
      this.pendingActivities,
      this.rejectedActivities
    ];
    
    // Update bar chart with points by semester
    const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
    const pointsBySemester = semesters.map(semester => {
      // For this demo, we'll assign activities to semesters based on a simple algorithm
      // In a real app, you might have a semester field in the activity model
      return this.activities
        .filter(a => a.status === 'approved' && this.getSemesterFromDate(a.date) === semester)
        .reduce((sum, activity) => sum + activity.pointsAwarded, 0);
    });
    
    this.barChartData.datasets[0].data = pointsBySemester;
  }
  
  // Helper method to determine semester from activity date
  getSemesterFromDate(date: Date): number {
    const activityDate = new Date(date);
    const currentYear = new Date().getFullYear();
    const activityYear = activityDate.getFullYear();
    const yearDiff = currentYear - activityYear;
    
    // Determine if it's first or second half of the year (semester 1 or 2 within a year)
    const isSecondHalf = activityDate.getMonth() >= 6; // July onwards is second semester
    
    // Calculate semester based on year difference and half of year
    // Assuming student is currently in 8th semester at most
    const maxSemesters = 8;
    const currentSemester = Math.min(maxSemesters, (yearDiff * 2) + (isSecondHalf ? 2 : 1));
    
    // Return a semester between 1 and 8
    return Math.max(1, currentSemester);
  }
} 
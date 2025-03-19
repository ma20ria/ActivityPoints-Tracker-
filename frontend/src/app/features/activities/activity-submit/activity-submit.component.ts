import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../../ui/navbar/navbar.component';
import { ActivityService } from '../../../core/services/activity.service';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-activity-submit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavbarComponent],
  templateUrl: './activity-submit.component.html',
  styleUrls: ['./activity-submit.component.scss']
})
export class ActivitySubmitComponent implements OnInit {
  activityForm: FormGroup;
  currentUser: User | null = null;
  isLoading = false;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  selectedFile: File | null = null;
  calculatedPoints = 0;
  
  activityTypes = ['sports', 'mooc', 'workshops', 'internships'];
  levels = [1, 2, 3, 4, 5];

  private sportsPointsMap: Record<number, number> = {
    1: 8,
    2: 15,
    3: 25,
    4: 40,
    5: 50
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private activityService: ActivityService,
    private router: Router,
    private http: HttpClient
  ) {
    this.activityForm = this.fb.group({
      title: ['', Validators.required],
      activityType: ['', Validators.required],
      description: ['', Validators.required],
      eventOrganizer: ['', Validators.required],
      date: ['', Validators.required],
      level: [''],
      points: [0, Validators.required]
    });

    // Calculate points when activity type or level changes
    this.activityForm.get('activityType')?.valueChanges.subscribe(() => {
      this.calculatePoints();
      this.updateLevelValidation();
    });

    this.activityForm.get('level')?.valueChanges.subscribe(() => {
      this.calculatePoints();
    });
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  updateLevelValidation(): void {
    const activityType = this.activityForm.get('activityType')?.value;
    const levelControl = this.activityForm.get('level');

    if (activityType === 'sports') {
      levelControl?.setValidators([Validators.required]);
    } else {
      levelControl?.clearValidators();
    }
    levelControl?.updateValueAndValidity();
  }

  calculatePoints(): void {
    const activityType = this.activityForm.get('activityType')?.value;
    const level = Number(this.activityForm.get('level')?.value);

    if (!activityType) {
      this.calculatedPoints = 0;
      return;
    }

    switch (activityType) {
      case 'sports':
        this.calculatedPoints = this.sportsPointsMap[level] || 0;
        break;
      case 'mooc':
        this.calculatedPoints = 50;
        break;
      case 'workshops':
        this.calculatedPoints = 6;
        break;
      case 'internships':
        this.calculatedPoints = 20;
        break;
      default:
        this.calculatedPoints = 0;
    }
    
    this.activityForm.patchValue({ points: this.calculatedPoints });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        this.errorMessage = 'File size exceeds 5MB limit';
        event.target.value = '';
        this.selectedFile = null;
        return;
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        this.errorMessage = 'Invalid file type. Please upload PDF, JPG, JPEG, or PNG files only';
        event.target.value = '';
        this.selectedFile = null;
        return;
      }

      this.selectedFile = file;
      this.errorMessage = '';
    }
  }

  onSubmit(): void {
    if (this.activityForm.invalid || !this.selectedFile) {
      this.errorMessage = 'Please fill in all required fields and upload a certificate.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formData = new FormData();
    formData.append('certificate', this.selectedFile);
    formData.append('status', 'pending');
    
    // Add all form values to formData
    Object.keys(this.activityForm.value).forEach(key => {
      formData.append(key, this.activityForm.value[key]);
    });

    this.activityService.submitActivity(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Activity submitted successfully!';
        this.activityForm.reset();
        this.selectedFile = null;
        
        // Reset file input
        const fileInput = document.getElementById('certificateFile') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
        
        setTimeout(() => {
          this.router.navigate(['/activities']);
        }, 2000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.message || 'Failed to submit activity. Please try again.';
      }
    });
  }
} 
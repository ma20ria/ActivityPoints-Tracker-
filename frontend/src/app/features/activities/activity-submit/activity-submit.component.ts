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
  extractedData: any = null;
  
  activityTypes = [
    'Sports', 
    'Cultural', 
    'Technical', 
    'Professional Development', 
    'Community Service',
    'Other'
  ];
  
  levels = [1, 2, 3, 4, 5];

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
      level: ['', Validators.required],
      certificateFile: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.activityForm.get('certificateFile')?.setValue(file.name);
      
      // Extract data from PDF
      this.extractDataFromPDF(file);
    }
  }
  
  extractDataFromPDF(file: File): void {
    this.isLoading = true;
    
    // Create FormData
    const formData = new FormData();
    formData.append('file', file);
    
    // In a real application, you would send this to a backend API for PDF text extraction
    // For demo purposes, we'll simulate extraction with a timeout
    setTimeout(() => {
      // Simulated extracted data
      this.extractedData = {
        title: 'Certificate of Achievement',
        eventOrganizer: 'Tech Conference 2023',
        date: '2023-06-15',
        description: 'Participated in the annual tech conference and completed all workshops.'
      };
      
      // Populate form with extracted data
      this.activityForm.patchValue({
        title: this.extractedData.title,
        eventOrganizer: this.extractedData.eventOrganizer,
        date: this.extractedData.date,
        description: this.extractedData.description
      });
      
      this.isLoading = false;
    }, 2000);
  }

  onSubmit(): void {
    if (this.activityForm.invalid || !this.selectedFile) {
      // Mark all form controls as touched to trigger validation messages
      Object.keys(this.activityForm.controls).forEach(key => {
        const control = this.activityForm.get(key);
        control?.markAsTouched();
      });
      
      this.errorMessage = 'Please fill in all required fields and upload a certificate.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Create FormData
    const formData = new FormData();
    formData.append('certificate', this.selectedFile);
    
    // Add other form values
    Object.keys(this.activityForm.value).forEach(key => {
      if (key !== 'certificateFile') {
        formData.append(key, this.activityForm.value[key]);
      }
    });

    // Submit the activity using the ActivityService
    this.activityService.submitActivity(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = response.message || 'Activity submitted successfully! Your certificate will be reviewed by your teacher.';
        
        // Reset form after successful submission
        this.activityForm.reset();
        this.selectedFile = null;
        
        // Navigate to dashboard after a delay
        setTimeout(() => {
          this.router.navigate(['/activities']);
        }, 2000);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Error submitting activity:', error);
        this.errorMessage = error.message || 'Failed to submit activity. Please try again.';
        
        // If it's an authorization error, suggest logging in again
        if (error.message && (error.message.includes('Not authorized') || error.message.includes('token'))) {
          this.errorMessage += ' You may need to log in again.';
          // Add a button or link to log out and redirect to login
        }
      }
    });
  }
} 
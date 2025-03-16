import { User } from './user.model';

export interface Activity {
  _id: string;
  student: User | string;
  activityType: 'Sports' | 'Cultural' | 'Technical' | 'Professional Development' | 'Community Service' | 'Other';
  title: string;
  description: string;
  date: Date;
  certificateFile: string;
  pointsAwarded: number;
  status: 'pending' | 'approved' | 'rejected';
  feedback?: string;
  reviewedBy?: User | string;
  reviewedAt?: Date;
  createdAt: Date;
} 
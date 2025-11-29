export type ReportReason = 'spam' | 'harassment' | 'inappropriate' | 'scam' | 'other';
export type ReportStatus = 'pending' | 'reviewed' | 'resolved' | 'dismissed';

export interface ContentReport {
  id: string;
  targetId: string; // ID of product, comment, or user
  targetType: 'product' | 'comment' | 'user' | 'review';
  reporterId: string;
  reason: ReportReason;
  description?: string;
  status: ReportStatus;
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
}
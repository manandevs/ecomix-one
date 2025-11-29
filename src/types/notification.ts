export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export type NotificationCategory = 'order' | 'system' | 'message' | 'account';

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  category: NotificationCategory;
  isRead: boolean;
  link?: string;
  createdAt: string;
}
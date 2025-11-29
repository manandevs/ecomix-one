export interface SystemSetting {
  key: string;
  value: string | number | boolean;
  category: 'general' | 'security' | 'payment' | 'email';
  description?: string;
  isEncrypted: boolean;
}

export interface AuditLog {
  id: string;
  action: string;
  userId: string;
  userName: string;
  resourceType: string;
  resourceId?: string;
  details?: string;
  ipAddress: string;
  timestamp: string;
}
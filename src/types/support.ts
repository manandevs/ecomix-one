export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TicketStatus = 'open' | 'in_progress' | 'waiting_customer' | 'closed';

export interface SupportTicket {
  id: string;
  subject: string;
  description: string;
  userId: string;
  assignedTo?: string;
  priority: TicketPriority;
  status: TicketStatus;
  category: 'order' | 'product' | 'technical' | 'billing';
  createdAt: string;
  updatedAt: string;
}
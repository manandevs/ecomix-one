export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  attachments?: string[];
  readAt?: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  participants: { id: string; name: string; image: string }[];
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: string;
}
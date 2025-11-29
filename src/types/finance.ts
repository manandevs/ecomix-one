export type TransactionStatus = 'completed' | 'pending' | 'failed' | 'refunded';

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  type: 'payment' | 'refund' | 'payout';
  method: 'credit_card' | 'paypal' | 'bank_transfer';
  date: string;
  referenceId: string; // Order ID or Payout ID
  customerName?: string;
}
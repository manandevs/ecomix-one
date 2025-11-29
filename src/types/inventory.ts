export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface InventoryItem {
  productId: string;
  productName: string;
  sku: string;
  currentStock: number;
  reservedStock: number;
  reorderLevel: number;
  status: StockStatus;
  lastUpdated: string;
  warehouseLocation?: string;
}

export interface StockAdjustment {
  id: string;
  productId: string;
  quantity: number;
  type: 'restock' | 'damage' | 'sale' | 'return' | 'correction';
  reason?: string;
  adjustedBy: string;
  date: string;
}
export interface ChartDataPoint {
  name: string;
  value: number;
  secondaryValue?: number;
}

export interface DashboardMetric {
  label: string;
  value: string | number;
  change: number; // percentage
  trend: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export interface SalesAnalytics {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  conversionRate: number;
  salesByPeriod: ChartDataPoint[];
}
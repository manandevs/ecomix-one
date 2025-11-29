import React from "react";

// For Tables
export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  className?: string;
  cell?: (item: T) => React.ReactNode;
}

// For shared UI elements
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BadgeProps extends BaseProps {
  text?: string;
  variant?: 'default' | 'outline' | 'ghost';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
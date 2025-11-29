// src/components/shared/Table.tsx
'use client'

import React from 'react'

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  className?: string;
  cell?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string | number;
  emptyMessage?: string;
}

export default function Table<T>({
  data,
  columns,
  keyExtractor,
  emptyMessage = "No data available."
}: TableProps<T>) {
  return (
    <div className="w-full bg-white border border-[#3D3D3D1A] rounded-[24px] overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-xs uppercase tracking-wider text-gray-500 border-b border-[#3D3D3D1A]">
              {columns.map((col, index) => (
                <th key={index} className={`px-6 py-4 font-semibold ${col.className || ''}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3D3D3D1A]">
            {data.length > 0 ? (
              data.map((item) => (
                <tr
                  key={keyExtractor(item)}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  {columns.map((col, index) => (
                    <td key={index} className={`px-6 py-4 ${col.className || ''}`}>
                      {col.cell
                        ? col.cell(item)
                        : (col.accessorKey ? String(item[col.accessorKey]) : null)
                      }
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
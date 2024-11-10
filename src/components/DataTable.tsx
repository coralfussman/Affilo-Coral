import React, { useMemo } from 'react';
export * from '@tanstack/table-core';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { columns } from '@/utils/columns';
import users from '../databases/users.json';
import {
  Table,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
// import {

// } from '@/components/ui';
function DataTable() {
  const data = useMemo(() => users, []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headGroup) => (
            <TableRow key={headGroup.id}>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          ))}
        </TableHeader>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default DataTable;

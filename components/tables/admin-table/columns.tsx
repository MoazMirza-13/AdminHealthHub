'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Admin } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Admin>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorFn: (row) => `${row.profiles.first_name} ${row.profiles.last_name}`,
    header: 'NAME'
  },
  {
    accessorFn: (row) => `${row.profiles.email}`,
    header: 'Email'
  },
  {
    accessorFn: (row) => `${row.profiles.phone_number}`,
    header: 'PHONE NUMBER'
  },
  {
    accessorKey: 'admin_type',
    header: 'Admin Type'
  },
  {
    accessorKey: 'city',
    header: 'City'
  },
  {
    accessorKey: 'country',
    header: 'Country'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];

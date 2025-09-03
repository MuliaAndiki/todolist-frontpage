import { createColumnHelper } from '@tanstack/react-table';
import { TodolistType } from '../types/components';
import { formatDate } from '../utils/string.format';
import { Button } from './ui/button';
import { Input } from './ui/input';
import View from './ui/view';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Label } from '@radix-ui/react-dropdown-menu';

const columnHelper = createColumnHelper<TodolistType>();

export const todoColumns = (onEdit: (id: string) => void, onDelete: (id: string) => void) => [
  columnHelper.accessor('Todos', {
    header: 'Todos',
    cell: ({ row }) => (
      <View className="flex justify-center items-center gap-2 w-full max-w-80">
        <Label className="font-extrabold">{row.original.Todos}</Label>
      </View>
    ),
  }),
  columnHelper.accessor('created_at', {
    header: 'Created At',
    cell: (info) => <Label className="font-extrabold">{formatDate(info.getValue())}</Label>,
  }),
  columnHelper.accessor('UpdatedAt', {
    header: 'Updated At',
    cell: (info) => <Label className="font-extrabold">{formatDate(info.getValue())}</Label>,
  }),
  columnHelper.accessor('Status', {
    header: 'Status',
    cell: (info) => <Label className="font-extrabold">{info.getValue()}</Label>,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <View className="flex justify-center items-center gap-2">
        <Button variant="outline" onClick={() => onEdit(row.original.id)}>
          <IconEdit />
        </Button>
        <Button variant="destructive" onClick={() => onDelete(row.original.id)}>
          <IconTrash />
        </Button>
      </View>
    ),
  }),
];

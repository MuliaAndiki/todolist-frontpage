import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from './ui/input';
import View from './ui/view';
import { IconEdit } from '@tabler/icons-react';
import { Button } from './ui/button';
import { IconTrash } from '@tabler/icons-react';
import { TodolistProps } from '../types/props';
import { formatDate } from '../utils/string.format';
import useDeleteTodo from '../hooks/mutation/todo/useDeleteTodo';
import { useEditTodo } from '../hooks/mutation/todo/useEditTodo';
import { useState } from 'react';
import { FormCreateTodoType } from '../types/form';
import PopUp from '../core/components/popup';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import Fallback from '../core/components/Fallback';

const TodoListComponents: React.FC<TodolistProps> = ({ data }) => {
  const Remove = useDeleteTodo(data.id);
  const [formEditTodo, setFormEditTodo] = useState<FormCreateTodoType>({
    CreatedAt: data.created_at,
    status: data.Status,
    todos: data.Todos,
  });
  const [isPopup, setIsPopUp] = useState<'edit' | null>(null);

  const Edit = useEditTodo(data.id, {
    onAfterSuccess: () => {
      setIsPopUp(null);
    },
  });

  const handleEdit = () => {
    return Edit.mutate(formEditTodo);
  };

  const handleDelete = () => Remove.mutate(data.id);
  return (
    <View className="w-full flex justify-between items-center border rounded-lg border-[var(--foreground)]  p-4 mt-2 ">
      <View className="flex justify-center items-center gap-2   w-full max-w-80 ">
        <Input type="radio" />
        <Label className=" font-extrabold">{data.Todos}</Label>
      </View>
      <Label className="font-extrabold">{formatDate(data.created_at)}</Label>
      <Label className="font-extrabold">{formatDate(data.UpdatedAt)}</Label>
      <Label className="font-extrabold">{data.Status}</Label>
      <View className="flex justify-center items-center gap-2">
        <Button variant="outline" onClick={() => setIsPopUp('edit')}>
          <IconEdit />
        </Button>
        <Button variant="destructive" onClick={() => handleDelete()}>
          <IconTrash />
        </Button>
      </View>
      <PopUp isOpen={isPopup === 'edit'} onClose={() => setIsPopUp(null)}>
        <View className="flex justify-center items-center flex-col">
          <View className="flex justify-start items-start flex-col w-full">
            <Label className="text-lg">Todos :</Label>
            <Input
              value={formEditTodo.todos}
              onChange={(e) =>
                setFormEditTodo((prev) => {
                  const newObj = { ...prev, todos: e.target.value };
                  return newObj;
                })
              }
            />
          </View>
          <View className="flex justify-start items-start flex-col w-full">
            <Label className="text-lg">Status :</Label>
            <Select
              onValueChange={(value) =>
                setFormEditTodo((prev) => ({
                  ...prev,
                  status: value,
                }))
              }
              value={formEditTodo.status ?? ''}
            >
              <SelectTrigger className="w-full mb-6">
                <SelectValue placeholder="*Contoh: Pilih Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
          </View>
          <Button
            className="text-lg"
            variant="gradient"
            onClick={() => handleEdit()}
            disabled={Edit.isPending}
          >
            {Edit.isPending ? <Fallback title="Tunggu Sebentar" /> : 'Edit'}
          </Button>
        </View>
      </PopUp>
    </View>
  );
};

export default TodoListComponents;

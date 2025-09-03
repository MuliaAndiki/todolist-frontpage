'use client';
import View from '@/app/components/ui/view';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';
import Spreed from '../../components/spreed';
import useCreateTodo from '@/app/hooks/mutation/todo/useCreateTodo';
import { FormCreateTodoType } from '@/app/types/form';
import { useAlert } from '@/app/hooks/use-alert';
import PopUp from '../../components/popup';
import { Label } from '@radix-ui/react-dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import useGetTodoByUser from '@/app/hooks/mutation/todo/useGetTodoByUser';
import { TodolistType } from '@/app/types/components';
import useGetProfile from '@/app/hooks/mutation/auth/useGetProfile';
import { IconX } from '@tabler/icons-react';
import TodoTable from '../../components/todo-Table';
import useDeleteTodo from '@/app/hooks/mutation/todo/useDeleteTodo';
import { useEditTodo } from '@/app/hooks/mutation/todo/useEditTodo';
import Fallback from '../../components/Fallback';

const TodolistCard = () => {
  const Todo = useCreateTodo({
    onAfterSuccess: () => {
      setIsPopUp(null);
    },
  });
  const alert = useAlert();
  const profile = useGetProfile();
  const isId = profile.data?.data.id;
  const todos = useGetTodoByUser(isId);
  const dataTodo = todos.data?.data ?? [];
  const [filterDataByTitle, setFilterDataByTitle] = useState('');
  const [idTodo, setIdTodo] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<'Active' | 'Pending' | 'Close' | null>('Active');
  const [isPopup, setIsPopUp] = useState<'Add' | 'edit' | null>(null);
  const filteredTodos = dataTodo.filter((item: TodolistType) => {
    if (isActive === 'Active' && item.Status !== 'progress') return false;
    if (isActive === 'Pending' && item.Status !== 'pending') return false;
    if (isActive === 'Close' && item.Status !== 'done') return false;
    if (!item.Todos.toLowerCase().includes(filterDataByTitle.toLowerCase())) {
      return false;
    }
    return true;
  });
  const [formCreateTodo, setFormCreateTodo] = useState<FormCreateTodoType>({
    status: '',
    todos: '',
    CreatedAt: '',
  });

  const [formEditTodo, setFormEditTodo] = useState<FormCreateTodoType>({
    CreatedAt: '',
    status: '',
    todos: '',
  });

  const handleCreateTodo = () => {
    if (!formCreateTodo.status || !formCreateTodo.todos) {
      alert.toast({
        title: 'Perhatian',
        message: 'Mohon Isi Colum',
        icon: 'warning',
      });
      return;
    }
    return Todo.mutate(formCreateTodo);
  };
  const setButton = [
    { title: 'Active', Params: 'Active' },
    { title: 'Pending', Params: 'Pending' },
    { title: 'Close', Params: 'Close' },
  ] as const;

  const Remove = useDeleteTodo();
  const handleDelete = (id: string) => {
    return Remove.mutate({ id });
  };
  const Edit = useEditTodo({
    onAfterSuccess: () => {
      setIsPopUp(null);
    },
  });
  const handleEdit = (id: string, payload: FormCreateTodoType) => {
    if (!idTodo) return;
    Edit.mutate({ id, payload });
  };

  return (
    <section>
      <View className="flex h-full justify-center items-center relative z-0 flex-col p-4">
        <View className="flex justify-center items-center  w-full my-2">
          <View className="grid  lg:grid-cols-5 grid-rows-1 items-center w-full gap-2 ">
            <Input onChange={(e) => setFilterDataByTitle(e.target.value)} />
            {setButton.map((items, key) => (
              <View className="flex justify-center items-center" key={key}>
                <Button
                  variant="gradient"
                  onClick={() => setIsActive(items.Params)}
                  className="font-semibold w-full"
                >
                  {items.title}
                </Button>
              </View>
            ))}
            <Button variant="gradient" onClick={() => setIsPopUp('Add')} className="font-semibold">
              add
            </Button>
          </View>
        </View>
        <Spreed orientation="horizontal" />

        <View className="w-full">
          <TodoTable
            data={filteredTodos}
            onEdit={(id) => {
              setIdTodo(id);
              setIsPopUp('edit');
            }}
            onDelete={(id) => handleDelete(id)}
          />
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
              onClick={() => handleEdit(idTodo!, formCreateTodo)}
              disabled={Edit.isPending}
            >
              {Edit.isPending ? <Fallback title="Tunggu Sebentar" /> : 'Edit'}
            </Button>
          </View>
        </PopUp>

        <PopUp isOpen={isPopup === 'Add'} onClose={() => setIsActive(null)}>
          <View className="flex justify-center items-center flex-col gap-2">
            <View className="w-full flex justify-between p-2">
              <Label className="text-lg font-semibold">Bikin Todo</Label>
              <Button variant="link" onClick={() => setIsPopUp(null)}>
                <IconX />
              </Button>
            </View>
            <View className="flex justify-start items-start flex-col w-full">
              <Label className="text-lg font-semibold">Todos :</Label>
              <Input
                type="text"
                value={formCreateTodo.todos}
                onChange={(e) =>
                  setFormCreateTodo((prev) => {
                    const newObj = { ...prev, todos: e.target.value };
                    return newObj;
                  })
                }
              />
            </View>
            <View className="flex justify-start items-start flex-col w-full">
              <Label className="text-lg font-semibold">Status :</Label>
              <Select
                onValueChange={(value) =>
                  setFormCreateTodo((prev) => ({
                    ...prev,
                    status: value,
                  }))
                }
                value={formCreateTodo.status ?? ''}
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
            <Button variant="gradient" className="font-semibold" onClick={() => handleCreateTodo()}>
              Create
            </Button>
          </View>
        </PopUp>
      </View>
    </section>
  );
};

export default TodolistCard;

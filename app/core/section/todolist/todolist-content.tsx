'use client';
import View from '@/app/components/ui/view';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';
import Spreed from '../../components/spreed';
import useCreateTodo from '@/app/hooks/mutation/todo/useCreateTodo';
import TodoListComponents from '@/app/components/todo-list';
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
  const [isActive, setIsActive] = useState<'Active' | 'Pending' | 'Close' | null>('Active');
  const [isPopup, setIsPopUp] = useState<'Add' | null>(null);
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

  return (
    <section>
      <View className="flex h-full justify-center items-center relative z-0 flex-col p-4">
        <View className="flex justify-center items-center  w-full my-2">
          <View className="grid grid-cols-5 grid-rows-1 items-center w-full  ">
            <Input onChange={(e) => setFilterDataByTitle(e.target.value)} />
            {setButton.map((items, key) => (
              <View className="flex justify-center items-center" key={key}>
                <Button
                  variant="gradient"
                  onClick={() => setIsActive(items.Params)}
                  className="font-semibold"
                >
                  {items.title}
                </Button>
              </View>
            ))}
            <Button variant="gradient" onClick={() => setIsPopUp('Add')}>
              add
            </Button>
          </View>
        </View>
        <Spreed orientation="horizontal" />

        <View className="w-full">
          {filteredTodos.map((items: TodolistType, key: number) => (
            <TodoListComponents data={items} key={key} />
          ))}
        </View>

        <PopUp isOpen={isPopup === 'Add'} onClose={() => setIsActive(null)}>
          <View className="flex justify-center items-center flex-col gap-2">
            <View className="flex justify-start items-start flex-col w-full">
              <Label>Todos :</Label>
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
              <Label>Status :</Label>
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

import { useQuery } from '@tanstack/react-query';
import TodoApi from '@/app/service/todos/todo.service';
export default function useGetTodoByUser(id: string) {
  return useQuery({
    queryFn: () => TodoApi.GetTodoUser(id),
    queryKey: ['todos', 'user', id],
    staleTime: 1000 * 60 * 5,
  });
}

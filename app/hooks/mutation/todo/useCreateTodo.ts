import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { FormCreateTodoType } from '@/app/types/form';
import { useAlert } from '../../use-alert';
import TodoApi from '@/app/service/todos/todo.service';

export default function useCreateTodo(options?: { onAfterSuccess?: () => void }) {
  const alert = useAlert();
  const queryClient = useQueryClient();
  return useMutation<TResponse<any>, Error, FormCreateTodoType>({
    mutationFn: TodoApi.CreateTodo,
    onSuccess: (res) => {
      alert.toast({
        title: 'Berhasil',
        message: 'Todo Berhasil Dibuat',
        icon: 'success',
        onVoid: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'], exact: false });
          options?.onAfterSuccess?.();
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Gagal',
        message: 'Todo Gagal Dibuat',
        icon: 'error',
      });
    },
  });
}

import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from '@/app/service/todos/todo.service';
import { useAlert } from '../../use-alert';
import { FormCreateTodoType } from '@/app/types/form';

export const useEditTodo = (id: string, options?: { onAfterSuccess?: () => void }) => {
  const alert = useAlert();
  const queryClient = useQueryClient();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: (payload: FormCreateTodoType) => TodoApi.EditTodo(id, payload),
    onSuccess: () => {
      alert.toast({
        title: 'Berhasil',
        message: 'Edit Todo Berhasil',
        icon: 'success',
        onVoid: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'], exact: false });
          options?.onAfterSuccess?.();
        },
      });
    },
    onError: () => {
      alert.toast({
        title: 'Gagal',
        message: 'Edit Todo Gagal',
        icon: 'error',
      });
    },
  });
};

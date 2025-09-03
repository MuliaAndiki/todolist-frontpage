import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from '@/app/service/todos/todo.service';
import { useAlert } from '../../use-alert';

export default function useDeleteTodo() {
  const alert = useAlert();
  const queryClient = useQueryClient();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: ({ id }) => TodoApi.DeleteToto(id),
    onSuccess: (res) => {
      alert.toast({
        title: 'Berhasil',
        message: 'Todo Berhasil Dihapus',
        icon: 'success',
        onVoid: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'], exact: false });
        },
      });
    },
    onError: (err) => {
      console.error(err),
        alert.toast({
          title: 'Gagal',
          message: 'Todo Gagal Dihapus',
          icon: 'error',
        });
    },
  });
}

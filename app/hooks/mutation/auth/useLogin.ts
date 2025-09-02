import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { FormLoginType } from '@/app/types/form';
import { useMutation } from '@tanstack/react-query';
import AuthApi from '@/app/service/auth/auth.service';
import { useRouter } from 'next/navigation';
import { useAlert } from '../../use-alert';
import { userSchema } from '@/app/types/api';
import { useAppDispatch } from '../../dispatch/dispatch';
import { setCurrentUser } from '@/app/stores/authSlice/authSlice';

export default function useLogin() {
  const alert = useAlert();
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation<TResponse<any>, Error, FormLoginType>({
    mutationFn: AuthApi.LoginUser,
    onSuccess: (res) => {
      const userPayload: userSchema = {
        token: res.data.token,
        user: res.data.user,
      };

      dispatch(setCurrentUser(userPayload));
      alert.toast({
        title: 'Berhasil',
        message: 'Selamat Datang Di TodoList',
        icon: 'success',
        onVoid: () => {
          router.push('/user/todolist');
        },
      });
    },
    onError: (err) => {
      console.log(err);
      alert.toast({
        title: 'Gagal',
        message: 'Gagal Login',
        icon: 'error',
      });
    },
  });
}

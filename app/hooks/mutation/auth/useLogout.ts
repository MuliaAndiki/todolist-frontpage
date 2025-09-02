'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAlert } from '../../use-alert';
import AuthApi from '@/app/service/auth/auth.service';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/stores/authSlice/authSlice';
import { useAppDispatch } from '../../dispatch/dispatch';

export default function useLogout() {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const alert = useAlert();
  const router = useRouter();

  return useMutation<any, Error, void>({
    mutationFn: AuthApi.Logout,
    onSuccess: () => {
      alert.toast({
        title: 'Berhasil',
        message: 'Logout Berhasil',
        icon: 'success',
        onVoid: () => {
          dispatch(logout());
          queryClient.clear();
          router.push('/');
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Gagal',
        message: 'Logout Gagal',
        icon: 'error',
      });
    },
  });
}

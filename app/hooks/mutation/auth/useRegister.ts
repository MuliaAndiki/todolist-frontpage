import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { FormRegisterType } from '@/app/types/form';
import { useMutation } from '@tanstack/react-query';
import AuthApi from '@/app/service/auth/auth.service';
import { useAlert } from '../../use-alert';
import { useRouter } from 'next/navigation';
export default function useRegister() {
  const alert = useAlert();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, FormRegisterType>({
    mutationFn: AuthApi.Register,
    onSuccess: (res) => {
      alert.toast({
        title: 'Berhasil ',
        message: 'Register Berhasil',
        icon: 'success',
        onVoid: () => {
          router.push('/login');
        },
      });
    },
    onError: (err) => {
      console.log(err),
        alert.toast({
          title: 'Gagal ',
          message: 'Register Gagal',
          icon: 'error',
        });
    },
  });
}

import { useQuery } from '@tanstack/react-query';
import AuthApi from '@/app/service/auth/auth.service';
export default function useGetProfile() {
  return useQuery({
    queryFn: () => AuthApi.GetProfile(),
    queryKey: ['profile', 'id'],
    staleTime: 1000 * 60 * 5,
  });
}

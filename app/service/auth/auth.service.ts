import AxiosClient from '@/app/utils/axios.client';
import { FormLoginType, FormRegisterType } from '@/app/types/form';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
class AuthApi {
  async LoginUser(payload: FormLoginType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/auth/login', payload);
    return res.data;
  }
  async Register(payload: FormRegisterType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/auth/register', payload);
    return res.data;
  }
  async Logout(): Promise<any> {
    const res = await AxiosClient.post('/auth/logout');
    return res.data;
  }
  async GetProfile(): Promise<TResponse<any>> {
    const res = await AxiosClient.get(`/auth/getProfile`);
    return res.data;
  }
}

export default new AuthApi();

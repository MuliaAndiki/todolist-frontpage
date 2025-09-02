import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { FormCreateTodoType } from '@/app/types/form';
import AxiosClient from '@/app/utils/axios.client';
class TodosApi {
  async CreateTodo(payload: FormCreateTodoType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/todo/create', payload);
    return res.data;
  }
  async GetTodoUser(id: string): Promise<TResponse<any>> {
    const res = await AxiosClient.get(`/todo/getByUser/${id}`);
    return res.data;
  }
  async DeleteToto(id: string): Promise<TResponse<any>> {
    const res = await AxiosClient.delete(`/todo/delete/${id}`);
    return res.data;
  }
  async EditTodo(id: string, payload: FormCreateTodoType): Promise<TResponse<any>> {
    const res = await AxiosClient.put(`/todo/edit/${id}`, payload);
    return res.data;
  }
}

export default new TodosApi();

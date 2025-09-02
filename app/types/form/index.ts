export interface FormLoginType {
  email: string;
  password: string;
}

export interface FormRegisterType {
  email: string;
  password: string;
  fullname: string;
}

export interface FormCreateTodoType {
  todos: string;
  status: string;
  CreatedAt: Date | string;
}

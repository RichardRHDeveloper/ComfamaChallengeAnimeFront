interface ResponseApiInterface<T>{
    status: number;
  message: string;
  data: T;
}

export type {ResponseApiInterface}
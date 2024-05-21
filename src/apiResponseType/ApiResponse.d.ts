type ApiResponse<T> = {
  message: string;
  data: T;
  status: string;
  code: string;
};

type CommonResponse = {
  id: string;
};

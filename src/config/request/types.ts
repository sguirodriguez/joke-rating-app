export interface Request {
  method: string;
  path: string;
  body?: any;
  headers?: any;
  params?: any;
}

export interface SendResponse {
  status: any;
  message: string;
  data?: any;
}

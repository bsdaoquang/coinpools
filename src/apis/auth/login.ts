import axiosClient from "../axiosClient";


class AuthenApi {
  getAuthenApi = async (
    url: string,
    data?: any,
    method?: 'post' | 'put' | 'delete' | 'get',
    isFile?: boolean,
    onProgress?: (val: any) => void,
  ) => {

    return await axiosClient(`https://xxxx.coinpools.me${url}`, {
      headers: {
        "Cookie": 'pwd=R1111710r; s185daeae=l9scm5rpv336cohapdmgher36d; tel=0509413413; user_id=131218',
        ...data.getHeaders()
      },
      method: method ?? 'get',
      data: data,
      onUploadProgress: onProgress ? onProgress : () => {},
    });
  };
}

const getAuthenApi = new AuthenApi();
export default getAuthenApi;

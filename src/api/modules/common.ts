import axios from '../axios'
import { ILoginInfo } from '../types/common'

// eslint-disable-next-line @typescript-eslint/promise-function-async
export const getLoginInfo = (): Promise<ILoginInfo> => {
  return axios<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}

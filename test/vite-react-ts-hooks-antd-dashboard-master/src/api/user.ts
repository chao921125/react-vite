// import request from '@/utils/request'
import { user } from '@/api/mock'

export default {
  // getCurrentUser: () => request.get<any, NSP.User>('/admin/user/info'),
  getCurrentUser: () => {
    return user
    // return request.get<any, NSP.User>('/current/user')
  }
}


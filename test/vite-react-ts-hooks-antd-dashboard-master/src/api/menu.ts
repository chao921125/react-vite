// import request from '@/utils/request'
import { menus } from '@/api/mock'

export default {
  // getCurrentMenu: () => request.get<any, NSP.Menu[]>('/admin/menu')
  getCurrentMenu: () => {
    return menus
    // return request.get<any, NSP.Menu[]>('/current/menu')
  }
}

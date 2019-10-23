import api from './api'
import { MockRequest } from '@delon/mock';
const list = []
for (let i = 1; i <= 100; i++) {
  list.push({
    no: '0010' + i,
    supplyName: `supply0${i}`,
    cellphone: `150442365${i}`,
    email: `138${i}44043@139.com`,
    contacts: `${i}supperList`,
    category: `中铁第${i}集团`,
    description: 'description'
  })
}

export const PROJECT = {
  '/project/list': (res:MockRequest) => api.page(list)
}

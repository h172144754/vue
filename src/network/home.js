import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: 'api/wh/home/multidata'
  })
}

export function getHomeData(type, page) {
  return axios({
    url: 'api/wh/home/data',
    params: {
      type,
      page
    }
  })
}

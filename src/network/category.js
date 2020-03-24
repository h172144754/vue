import axios from './axios'


export function getCategory() {
  return axios({
    url: 'api/wh/category'
  })
}

export function getSubcategory(maitKey) {
  return axios({
    url: 'api/wh/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: 'api/wh/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

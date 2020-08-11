import request from '@/utils/request'

export function loadImg() {
  return request.get('/homepageApi/getBannerList')
}

export function loadMenu() {
  return request.get('/homepageApi/getHomepageMenu')
}

export function loadCardList() {
  return request.get('/homepageApi/getSysConfigList')
}
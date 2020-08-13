import request from '@/utils/request'

export function loadImg() {
  return request.get('/getBannerList')
}

export function loadMenu() {
  return request.get('/getHomepageMenu')
}

export function loadCardList() {
  return request.get('/getSysConfigList')
}
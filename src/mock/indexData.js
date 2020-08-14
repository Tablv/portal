const menuList = [
  { code:'HOMEPAGE', url:'index', name: '首页', children: null },
  { code:'product', url:'1', name: '产品服务', children: [
    { code:'41041', url:'1', name: '11解决方案', children: null },
    { code:'41042', url:'1', name: '11云市场', children: null },
    { code:'41043', url:'1', name: '11公司动态', children: null }
  ] },
  { code:'4041', url:'1', name: '解决方案', children: null },
  { code:'4042', url:'1', name: '云市场', children: null },
  { code:'4043', url:'1', name: '公司动态', children: null },
  { code:'4045', url:'1', name: '招贤纳士', children: null },
  { code:'4046', url:'1', name: '关于我们', children: null }
]

const menu = {
  menuList
}
export default menu;
import Mock from 'mockjs'
import Data from './menuData'

Mock.mock('/admin/homepageApi/getHomepageMenu', 'get', Data.mockList);

Mock.mock('/admin/homepageApi/getBannerList', 'get', () => {
  return {
    success: true,
    result: [
      { url: '/banner.jpg', key: "img1" },
      { url: Mock.Random.image(), key: "img2" }
    ]
  }
})
Mock.mock('/admin/homepageApi/getSysConfigList', 'get', () => {
  return {
    success: true,
    result: [
      { iconClass: "el-icon-s-data", name: "BI 分析", content: "<h3><span style='font-weight: bold;'>Glaway SCE</span></h3><div><p><span style='font-size: large;'>精益供应链，助力企业打破外协过程黑箱</span></p><h3><p><span style='font-weight: bold;'>闭环计划控制</span></p></h3></div><div><p><span style='font-size: large;'>实现事前规划，事中监控，事后追溯</span></p><h3><span style='font-weight: bold;'>数字化辅助决策</span></h3></div><div><p><span style='font-size: large;'>供应商的计划达成、质量达成、产能情况多维度、高效评估</span></p></div>"    },
      { iconClass: "el-icon-s-order", name: "工单管理", content: "全流程管理您的工单" },
      { iconClass: "el-icon-s-order", name: "工单管理", content: "全流程管理您的工单" },
      { iconClass: "el-icon-s-check", name: "签章处理", content: "全流程管理您的工单" },
      { iconClass: "el-icon-camera-solid", name: "生产监控", content: "全流程管理您的工单" },
      { iconClass: "el-icon-camera-solid", name: "生产监d控", content: "全流程管理您的工单" },
      { iconClass: "el-icon-camera-solid", name: "生产监dd控", content: "全流程管理您的工单" }
    ]
  };
})
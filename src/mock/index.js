import Mock from 'mockjs'
import Data from './indexData'

Mock.mock('/admin/homepageApi/getHomepageMenu', 'get', () => {
  return {
    success: true,
    result: Data.menuList
  }
})

Mock.mock('/admin/homepageApi/getBannerList', 'get', () => {
  return {
    success: true,
    result: [
      { url: "/banner.png", key: "img1" },
      { url: "/banner2.png", key: "img2" }
    ]
  }
})
Mock.mock('/admin/homepageApi/getSysConfigList', 'get', () => {
  return {
    success: true,
    result: [
      { iconClass: "el-icon-s-data", name: "BI 分析", contentList: [
          {title: "BI 1分析", content: "完美的数据分析的数据分析的数据分析的数据分析的数据分析的数据分析的数据分析的数据分析工fdfdfdfdfdfdfdafafasfasfasfdsfdsfdfdfdfdfdf具"},
          {title: "BI 32分析", content: "完美的数据分析工具"},
          {title: "BI 2分析", content: "完美的数据分析工具"},
          {title: "BI 21分析", content: "完美的数据分析工具"},
          {title: "BI12 分析", content: "完美的数据分析工具"}
        ]
      },
      { iconClass: "el-icon-s-order", name: "工单管理", contentList: [
          {title: "BI 分析", content: "全流程管理您的工单"}
        ]
      },
      { iconClass: "el-icon-s-check", name: "签章处理", contentList: [
          { title: "签章处理", content: "全流程管理您的签章" }
        ]
      },
      { iconClass: "el-icon-camera-solid", name: "生产监控", contentList: [
          { title: "生产监控", content: "实现全流程安全生产" }
        ]
      },
      { iconClass: "el-icon-camera-solid", name: "生产监d控", contentList: [
          { title: "生产监控", content: "实现全流程安全生产" }
        ]
      },
      { iconClass: "el-icon-camera-solid", name: "生产监dd控", contentList: [
          { title: "生产监控", content: "实现全流程安全生产" }
        ]
      }
    ]
  };
})
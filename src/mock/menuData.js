import Mock from "mockjs";
const mockList = Mock.mock({
  success: true,
  'result|6': [
    {
      'code|+1': 4000,
      url: Mock.Random.url(),
      popout: "N",
      name: "@cname",
      'children|0-10': [
        {
          'code|+1': 40000,
          url: Mock.Random.url(),
          popout: "N",
          name: "@cname@city",
          'children|0-10': [
            {
              'code|+1': 40000,
              url: Mock.Random.url(),
              popout: "N",
              name: "@cname@city@cname",
              children: '@children|2'
            }
          ]
        }
      ] 
    }
  ]
})

const menu = {
  mockList
}
export default menu;
export default defineAppConfig({
  pages: [
    // 'pages/orderDeal/index',
    'pages/index/index',
    'pages/order/index',
    'pages/approve/index',
    'pages/orderDetail/index',
    'pages/orderDeal/index',
    'pages/approveDetail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#3a86ce',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#3a86ce",
    backgroundColor: "#fff",
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '我的',
        iconPath: './assets/images/home.png',
        selectedIconPath: './assets/images/home-active.png',
      },
      {
        pagePath: 'pages/order/index',
        text: '任务中心',
        iconPath: './assets/images/cart.png',
        selectedIconPath: './assets/images/cart-active.png',
      },
      {
        pagePath: 'pages/approve/index',
        text: '审批中心',
        iconPath: './assets/images/user.png',
        selectedIconPath: './assets/images/user-active.png',
      },
    ],
  }
})

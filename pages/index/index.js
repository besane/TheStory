// index.js
Page({
  data: {
  cnt: 0
  },
  onTapButton: function (options) {
    wx.navigateTo({
      url: '../add_article/add_article',
    })
  }
  });

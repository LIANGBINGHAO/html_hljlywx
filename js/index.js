var index = {
  init: function () {
    this.bind();
  },
  bind: function () {
    //圆梦殿堂tab切换
    $(".dream-palace .tab .tab-title span").each(function (index) {
      $(this).click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".dream-palace .tab .tab-content").removeClass("active");
        $(".dream-palace .tab .tab-content").eq(index).addClass("active");
      });
    });
    //优秀毕业生tab切换
    $(".good-honours .tab .tab-title span").each(function (index) {
      $(this).click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".good-honours .tab .tab-content").removeClass("active");
        $(".good-honours .tab .tab-content").eq(index).addClass("active");
      });
    });
  },
};
index.init();

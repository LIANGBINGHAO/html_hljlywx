var Index = {
  init: function () {
    this.bind();
  },
  bind: function () {
    Index.swiperInit();
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
  swiperInit: function () {
    var swiper = new Swiper(".banner-swiper", {
      direction: "horizontal",
      loop: false,
      slidesPerView: 1,
      autoplay: false,
      pagination: ".banner-pagination",
      paginationClickable: true,
    });
    var swiper1 = new Swiper(".event-swiper", {
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      autoplay: false,
      spaceBetween: 20,
      pagination: ".event-pagination",
      paginationClickable: true,
      nextButton: ".next",
      prevButton: ".prev",
    });
  },
};
Index.init();

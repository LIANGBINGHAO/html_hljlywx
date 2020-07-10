var App = {
  init: function () {
    this.bind();
    this.showSubmenu();
    this.scrollToTop();
    this.scrollAnimation();
  },
  bind: function () {
    //页面向下滚是头部菜单的变化
    var _this = this;
    $(window).scroll(function (e) {
      _this.scrollAnimation();
      if (window.scrollY > 200) {
        $("#back-top").addClass("active");
      } else {
        $("#back-top").removeClass("active");
      }
    });

    //ie9以下提示
    var isClose = false;
    //ie8
    var DEFAULT_VERSION = 8.0;
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie") > -1;
    var safariVersion;
    if (isIE) {
      safariVersion = ua.match(/msie ([\d.]+)/)[1];
      if (safariVersion <= DEFAULT_VERSION) {
        $("body").prepend(
          "<div class='ie_low_version' ><div><span>关闭</span>你所用的浏览器版本过低,可能有安全风险，360、Sogou 等浏览器请切换到急速模式，或升级您的浏览器到<a href='http://browsehappy.osfipin.com/' target='_blank' style='text-decoration:underline'>更高的版本</a>！以获得更好的观看效果。</div></div>"
        );
        $(".header.pcArea").css("top", "70px").addClass("ie8");
        $(".ie_low_version span").click(function () {
          $(".ie_low_version").css("display", "none");
          $(".header.pcArea").css("top", "0").removeClass("ie8");
          $(".ie_low_version+div").css("margin-top", "0");
          isClose = true;
        });
        $("#wrapper").addClass("ie8");
      } else {
        $("#wrapper").removeClass("ie8");
      }
    }
    //copyright获取当前年份
    var myDate = new Date();
    var year = myDate.getFullYear();
    $("#year").text(year);
  },
  showSubmenu: function () {
    $(".header .nav .container > ul > li").hover(
      function () {
        console.log(66);
        var _this = $(this);
        _this.find("ul").stop(true, false).slideDown();
      },
      function () {
        var _this = $(this);
        _this.find("ul").stop(true, false).slideUp();
      }
    );
  },
  changeFontSize: function () {
    var window_width = $(window).width();
    var fontSize = (window_width / 1920) * 100;
    $("html,body").css("font-size", fontSize + "px");
  },
  scrollToTop: function () {
    var isScroll = false;
    $("#back-top").on("click", function () {
      if (isScroll) {
        return false;
      }
      isScroll = true;
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      setTimeout(function () {
        isScroll = false;
      }, 500);
    });
  },
  scrollAnimation: function () {
    var scroll_H =
      document.body.scrollTop || document.documentElement.scrollTop;
    $(".transitionLable").each(function () {
      var label_offset_top = $(this).offset().top - $(window).height() + 100;
      if (label_offset_top < scroll_H) {
        $(this).addClass("active");
      } else if (label_offset_top > scroll_H) {
        $(this).removeClass("active");
      }
    });
  },
};
$(window).resize(function () {
  //App.changeFontSize();
});
$(window).on("load", function () {
  //App.changeFontSize();
});
App.init();
//App.changeFontSize();

/**
 * Created by Tong on 2018/7/9.
 */
var PictureProcessing;
{
  //cutting(鍥剧墖閫夋嫨鍣紝鍥剧墖鐨勭埗鏍囩锛屽浘鐗囧尯鍩熷湪椤甸潰涓婃樉绀虹殑瀹斤紝鍥剧墖鍖哄煙鍦ㄩ〉闈笂鏄剧ず鐨勯珮)
  var cutting = function (selector, container, originalw, originalh) {
    $(window).resize(function () {
      //    $(".picture img").attr('style','width:auto;height:auto');
      doCutting(selector, container, originalw, originalh);
    });
    doCutting(selector, container, originalw, originalh);
  };

  var doCutting = function (selector, container, originalw, originalh) {
    var page_proportion = originalw / originalh;
    var container_w = $(container).width();
    var container_h = container_w / page_proportion;
    $(container).height(container_h);

    $(selector).each(function () {
      var img_w = $(this).width();
      var img_h = $(this).height();

      if (container_w > img_w && container_h > img_h) {
        var margin_t1 = (container_h - img_h) / 2;

        var style1 =
          "width:auto;height:auto;display:block;margin:" +
          margin_t1 +
          "px auto";
        $(this).attr("style", style1);
      } else if (container_w < img_w && container_h < img_h) {
        var img_proportion = img_w / img_h;
        var difference = img_proportion - page_proportion;
        if (difference > 0) {
          $(this).height(container_h).css("width", "auto");
          var cutting_w = container_h * img_proportion;
          var margin_w = 0 - (cutting_w - container_w) / 2;
          $(this).css("margin-left", margin_w + "px");
        } else if (difference == 0) {
          $(this).css("width", "100%").css("margin-top", "0");
        } else {
          $(this).width(container_w).css("height", "auto");
          var cutting_h = container_w / img_proportion;
          var margin_h = 0 - (cutting_h - container_h) / 2;
          $(this).css("margin-top", margin_h + "px");
        }
      } else if (container_w > img_w && container_h < img_h) {
        var style2 = "width:auto;height:100%;display:block;margin:0 auto";
        $(this).parent().css("background-color", "#f8f8f8");
        $(this).attr("style", style2);
      } else {
        var margin_t2 = (container_h - img_h) / 2;
        var style3 =
          "display:block;width:100%;height:auto;margin-top:" + margin_t2 + "px";
        $(this).attr("style", style3);
      }
    });
  };
  PictureProcessing = {
    cutting: cutting,
  };
}

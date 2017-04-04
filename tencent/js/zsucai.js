///* 代码整理：找素材 www.zsucai.com */
//var _focus_num = 18;
//var _focus_direction = true;
//var _focus_pos = 0;
//var _focus_max_length = _focus_num * 168;
//var _focus_li_length = 168;
//var _focus_dsq = null;
//var _focus_lock = true;
//function autoExecAnimate() {
//    $("#mypic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
//    var moveLen = _focus_pos * _focus_li_length;
//    $("#bigSlideUl").animate({
//        left: "-" + moveLen + "px"
//    },
//    600);
//    if (_focus_pos == _focus_num-6) {
//        _focus_direction = false
//    }
//    if (_focus_pos == 0) {
//        _focus_direction = true
//    }
//    if (_focus_direction) {
//        _focus_pos += 6;
//    } else {
//        _focus_pos -= 6;
//    }
//}
//_focus_dsq = setInterval("autoExecAnimate()",2000);
//$("#smallSlideUl > li").hover(function() {
//    _focus_pos = parseInt($(this).attr("sid"));
//    if (_focus_lock) {
//        clearInterval(_focus_dsq);
//        _focus_lock = false
//    }
//    $("#mypic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
//    var moveLen = _focus_pos * _focus_li_length;
//    $("#bigSlideUl").stop(true, true).animate({
//        left: "-" + moveLen + "px"
//    },
//    600)
//},
//function() {
//    if (_focus_lock == false) {
//        _focus_dsq = setInterval("autoExecAnimate()", 6000);
//        _focus_lock = true
//    }
//});
//
//
//
//
//
//
///* 代码整理：找素材网 www.zsucai.com */
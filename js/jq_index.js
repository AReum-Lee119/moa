$(function () {
  // 카운트 업
  var cnt0 = 5000;
  counterFn();

  function counterFn() {
    id0 = setInterval(count0Fn, 10);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 5595) {
        clearInterval(id0);
      } else {
        $(".num_personnel").text(cnt0);
      }
    }
  }

  var cnt0 = 614;
  counterFn();

  function counterFn() {
    id0 = setInterval(count0Fn, 10);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 941) {
        clearInterval(id0);
      } else {
        $(".main_hope_personnel").text(cnt0);
      }
    }
  }

  var cnt0 = 1759;
  counterFn();

  function counterFn() {
    id0 = setInterval(count0Fn, 10);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 4584) {
        clearInterval(id0);
      } else {
        $(".main_review_personnel").text(cnt0);
      }
    }
  }

  //top 버튼

  $("#top_top").on("click", function (event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0 }, 1000);
  });

  //요소 숨겼다가 보이게 하기

  const additional = $("#additional");

  $("#third").hide();
  additional.on("click", function (e) {
    e.preventDefault();

    $("#third").show();
  });
});

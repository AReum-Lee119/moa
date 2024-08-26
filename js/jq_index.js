$(function () {
  //top 버튼
  $("#top").on("click", function (event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0 }, 1000);
  });
});

// 카운트 다운

$(function () {
  var cnt0 = 5000;

  counterFn();

  function counterFn() {
    id0 = setInterval(count0Fn, 10);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 5595) {
        clearInterval(id0);
      } else {
        $(".personnel").text(cnt0);
      }
    }
  }
});

$(function () {
  var cnt0 = 614;

  counterFn();

  function counterFn() {
    id0 = setInterval(count0Fn, 10);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 941) {
        clearInterval(id0);
      } else {
        $(".hope_personnel").text(cnt0);
      }
    }
  }
});

$(function () {
  var cnt0 = 1759;

  counterFn();

  function counterFn() {
    id0 = setInterval(count0Fn, 10);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 4584) {
        clearInterval(id0);
      } else {
        $(".review_personnel").text(cnt0);
      }
    }
  }
});

window.addEventListener("load", function () {
  //获取元素
  var swiper = document.querySelector(".swiper");
  var lunbo = swiper.querySelectorAll(".lunbo li");
  var btns = swiper.querySelector(".btns");
  var cricle = swiper.querySelector(".cricle");
  var leftbtn = swiper.querySelector(".leftbtn");
  var rightbtn = swiper.querySelector(".rightbtn");
  var leftBox = swiper.querySelector(".leftBox");
  var rightBox = swiper.querySelector(".rightBox");

  //清除图片类名
  function clearlunboName() {
    // lunbo.forEach(function (ele) {
    //   ele.className = "";
    // });
    for (var i = 0; i < lunbo.length; i++) {
      lunbo[i].className = "";
    }
  }
  function leave() {
    btns.style.display = "none";
    timer = setInterval(function () {
      rightbtn.click();
    }, 2000);
  }

  var timer = setInterval(function () {
    rightbtn.click();
  }, 2000);
  swiper.addEventListener("mouseenter", function () {
    btns.style.display = "block";
    clearInterval(timer);
    swiper.removeEventListener("mouseleave", leave);
    swiper.addEventListener("mouseleave", leave);
  });
  //动态生成小圆点
  var lili = "";
  // lunbo.forEach(function () {
  //   lis += "<li></li>";
  // });
  for (var j = 0; j < lunbo.length; j++) {
    lili += "<li></li>";
  }
  cricle.innerHTML = lili;
  //获取动态生成的小圆点
  var lis = cricle.querySelectorAll("li");
  lis[0].className = "_bg";
  //清楚小圆点类名
  function clearCricleName() {
    // lis.forEach(function (ele) {
    //   ele.className = "";
    // });
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = "";
    }
  }
  var lunbo_index = 0;
  //满足ie的特殊癖好
  var lisArr = [];
  for (var i = 0; i < lis.length; i++) {
    lisArr.push(lis[i]);
  }

  lisArr.forEach(function (ele, i) {
    ele.addEventListener("mouseenter", function () {
      clearCricleName();
      ele.className = "_bg";
      //记住索引值
      var index = i;
      clearlunboName();

      //上一张
      i = i == 0 ? lisArr.length : i;
      lunbo[i - 1].className = "prev";
      //恢复索引
      i = index;

      //当前
      lunbo[i].className = "now";

      //下一张
      i = i == lisArr.length - 1 ? -1 : i;
      lunbo[i + 1].className = "next";
      //恢复索引
      i = index;
      lunbo_index = i;
    });
  });

  //左按钮
  leftbtn.addEventListener("click", function () {
    lunbo_index--;
    lunbo_index = lunbo_index < 0 ? lunbo.length - 1 : lunbo_index;

    var index = lunbo_index;
    clearlunboName();

    //上一张;
    lunbo_index = lunbo_index == 0 ? lunbo.length : lunbo_index;
    lunbo[lunbo_index - 1].className = "prev";
    lunbo_index = index;

    //当前
    lunbo[lunbo_index].className = "now";
    clearCricleName();
    lis[lunbo_index].className = "_bg";

    //下一张
    lunbo_index = lunbo_index == lunbo.length - 1 ? -1 : lunbo_index;
    lunbo[lunbo_index + 1].className = "next";
    lunbo_index = index;
  });

  //右按钮
  rightbtn.addEventListener("click", function () {
    lunbo_index++;
    lunbo_index = lunbo_index == lunbo.length ? 0 : lunbo_index;
    var index = lunbo_index;
    clearlunboName();
    //上一张
    lunbo_index = lunbo_index == 0 ? lunbo.length : lunbo_index;
    lunbo[lunbo_index - 1].className = "prev";
    lunbo_index = index;
    //当前
    lunbo[lunbo_index].className = "now";
    clearCricleName();
    lis[lunbo_index].className = "_bg";

    //下一张
    lunbo_index = lunbo_index == lunbo.length - 1 ? -1 : lunbo_index;
    lunbo[lunbo_index + 1].className = "next";
  });
  //点击图片轮播
  leftBox.addEventListener("click", function () {
    leftbtn.click();
  });
  rightBox.addEventListener("click", function () {
    rightbtn.click();
  });
});

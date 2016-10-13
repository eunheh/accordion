function dropDown (event) {
  var target = $(event.target);
  console.log(target[0].id);
    if (target[0].id == ("header1")) {
      $(".detail1").removeClass("detailRemove");
      $(".detail2").addClass("detailRemove");
      $(".detail3").addClass("detailRemove");
  } else if (target[0].id == "header2") {
      $(".detail1").addClass("detailRemove");
      $(".detail2").removeClass("detailRemove");
      $(".detail3").addClass("detailRemove");
  } else if (target[0].id == "header3") {
      $(".detail1").addClass("detailRemove");
      $(".detail2").addClass("detailRemove");
      $(".detail3").removeClass("detailRemove");
  } else {
      $(".detail1").addClass("detailRemove");
      $(".detail2").addClass("detailRemove");
      $(".detail3").addClass("detailRemove");
  }
}

$(".header").click(dropDown);

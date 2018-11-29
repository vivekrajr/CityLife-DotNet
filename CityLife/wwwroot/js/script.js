$(window).scroll(function(e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $(".background").css("top", -(scrolled * 0.15) + "px");
}

$("#formModal").on("shown.bs.modal", function() {
  $("#inputName").trigger("focus");
});

$("#datepicker").datepicker({
  format: "yyyy-mm-dd"
});

$("#timepicker").timepicker();

function highlightCard() {
  $(".card").removeClass("highlight");
  let targetId;
  if (event.target.tagName === "g") {
    targetId = event.target.id + "_card";
  } else {
    targetId =
      $(event.target)
        .parents("g")
        .attr("id") + "_card";
  }
  scrollId = "#" + targetId;
  document.getElementById(targetId).classList.add("highlight");

  // document.getElementById(targetId).scrollIntoView();

  $("html, body").animate(
    {
      scrollTop: $(scrollId).offset().top - 150
    },
    500
  );
}

// $(function() {
//   $(document).scroll(function() {
//     var $nav = $(".fixed-top");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });

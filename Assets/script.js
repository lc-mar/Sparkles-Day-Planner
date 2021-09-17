$(init);

function init() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    colorTimeBlocks();
    setInterval(colorTimeBlocks, 60000);

    $(".time-block").each(function () {
        var blockid = $(this).attr("id");
        $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });


  $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
      var currentHour = parseInt(moment().format("H"));
      $(this).removeClass("past present future");
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
}
 
  function handleSave(event) {
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
  }
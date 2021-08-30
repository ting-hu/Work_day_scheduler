$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
var inputSlot = [
  "#userinput_1",
  "#userinput_2",
  "#userinput_3",
  "#userinput_4",
  "#userinput_5",
  "#userinput_6",
  "#userinput_7",
  "#userinput_8",
  "#userinput_9",
];

var colorCode = function () {
  for (let i = 9; i < 18; i++) {
    if (parseInt(moment().format("H")) > i) {
      $(inputSlot[i - 9]).addClass("past");
    } else if (parseInt(moment().format("H")) < i) {
      $(inputSlot[i - 9]).addClass("future");
    } else {
      $(inputSlot[i - 9]).addClass("present");
    }
  }
};

// Using Class instead of ID cause ID only can be used once.
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var record = $(this).siblings(".userinput").val();
  var listItem = $(this).parent().data("hour");
  localStorage.setItem(listItem, record);
});

var loadPage = function () {
  colorCode();
  for (var i = 9; i < 18; i++) {
    var dataHour = localStorage.getItem(i);
    $(inputSlot[i - 9]).val(dataHour);
  }
};

loadPage();

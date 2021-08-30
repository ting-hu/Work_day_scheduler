$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
//var currentTime = moment().;
var timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17];
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
  for (let i = 0; i < timeSlot.length; i++) {
    if (moment().isAfter(timeSlot[i])) {
      $(inputSlot[i]).addClass("past");
    } else if (moment().isBefore(timeSlot[i])) {
      $(inputSlot[i]).addClass("future");
    } else if (moment().isSame(timeSlot[i])) {
      $(inputSlot[i]).addClass("present");
    }
  }
};

colorCode();

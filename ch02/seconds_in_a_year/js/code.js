// Программа считает количество секунд в году
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;
var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;

console.log(secondsInAYear);
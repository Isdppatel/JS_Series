//4 calender functions  arguments(date) find th ???
var currentDate = require('current-day-number');
//current date
// console.log(currentDate(''));

//27 march 2023
// console.log(currentDate('March 23 , 2023'));


const n = 10
function nthDay(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //getday 0-6 between
  // const today = new Date(date).getDay();
  const today = new Date(date);
  today.setDate(today.getDate() + 10);
  console.log(today);
  const startDay = days[today.getDay()];
  console.log(startDay);

}


const input_date = '2023-03-31';
nthDay(input_date); // 10th day from today


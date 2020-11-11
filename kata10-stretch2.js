const talkingCalendar = function(date) {
  let readableDate = "";
  let newDate = date.split("/")
  let day = newDate[2];
  let month = newDate[1];
  let year = newDate[0];

  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  };


  if (day === "01") {
    day = "1st, "
  } else if (day === "02") {
    day = " 2nd, "
  } else if (day === "03") {
    day = " 3rd, "
  } else if (day === "04") {
    day = " 4th, "
  } else if (day === "05") {
    day = " 5th, "
  } else if (day === "06") {
    day = " 6th, "
  } else if (day === "07") {
    day = " 7th, "
  } else if (day === "08") {
    day = " 8th, "
  } else if (day === "09") {
    day = " 9th, "
  } else if (day >= "10" && day <= "31") {
    day = " " + day + "th, "
  }
  readableDate = month + day + year;
  return readableDate
};




  

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
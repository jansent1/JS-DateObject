// implement the variables for the html elements:
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

// new Date object, notice the capital letter, this is a constructor:
const date = new Date();

// "import" the day, month, year, hours and minutes:
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

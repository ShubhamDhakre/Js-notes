let date = new Date()
console.log(date) //.. it will give current date and time

console.log(date.toString()) //.. it will give date in string format
console.log(date.toDateString()) //.. it will give date in readable format
console.log(date.toISOString()) //.. it will give date in ISO format
console.log(date.toUTCString()) //.. it will give date in UTC format
console.log(date.toLocaleString()) //.. it will give date in local format

console.log(date.getFullYear()) //.. it will give the year
console.log(date.getMonth()) //.. it will give the month (0-11)
console.log(date.getDate()) //.. it will give the date (1-31)   
console.log(date.getDay()) //.. it will give the day of the week (0-6)
console.log(date.getHours()) //.. it will give the hours (0-23)
console.log(date.getMinutes()) //.. it will give the minutes (0-59)
console.log(date.getSeconds()) //.. it will give the seconds (0-59)
console.log(date.getMilliseconds()) //.. it will give the milliseconds (0-999)
console.log(date.getTime()) //.. it will give the time in milliseconds since January 1, 1970

const mydate = new Date('2022-01-01')
console.log(mydate) //.. it will give the date object for the given date string

const mydate2 = new Date(2022, 0, 1, 10, 30, 0) //.. year, month (0-11), date, hours, minutes, seconds
console.log(mydate2) //.. it will give the date object for the given parameters
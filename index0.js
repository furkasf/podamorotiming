// display current time using with constructer function

const today = new Date();
let day = today.getDay();
const dayList = ['sunday','monday','tuesday','wenstday','thursday','friday','saturday'];
//console.log(dayList[day]);
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let sep = (hour >= 12 )? 'am': 'pm';
hour = (hour >= 12)? hour-12: hour;
if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log(`today:${dayList[day]}  ${hour}:${min};${sec}`);
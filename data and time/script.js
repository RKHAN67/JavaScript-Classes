const currentDate = new Date();
const strDate = currentDate.toString();

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let day = currentDate.getDay();
let date = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const formattedDate = `
${days[day]}
${date}
${months[month]}
${year} ${hours}:${minutes}:${seconds}
`;

console.log(formattedDate);

console.log(
  days[currentDate.getDay()],
  currentDate.getDate(),
  months[currentDate.getMonth()],
  currentDate.getFullYear(),
  currentDate.getHours(), ':',
  currentDate.getMinutes(), ':',
  currentDate.getSeconds()
);
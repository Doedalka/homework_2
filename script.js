const student = "Малеечев Максим Ильич"; 
document.getElementById("student").innerHTML = student;
const firstWeek = Array(16).fill([4, 1, 2, 5, 2, 2, 0,]);
const firstexam = Array(1).fill([0, 2, 0, 2, 0, 0, 0,]);
const holiday = Array(2).fill([0, 0, 0, 0, 0, 0, 0,]);
const secondWeek = Array(23).fill([1, 4, 4, 2, 5, 0, 0,]);
const secondexam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]); // Постоянные переменные + массивы. В скобках кол-во недель, через запятую кол-во пар по дням
const array = [firstWeek, firstexam, holiday, secondWeek, secondexam];
let vor = 0
let cash = 0 
let kopilka = 0 
let days = 0; 
let weeks = 0; 
let doroga = 150 
let pisha = 250 
let proezdblch = 120 
let pristavka = 23500 
let doroga2 = doroga - proezdblch // Сколько остается после проезда 
for (let i = 0; i < array.length; i++) { // Начало цикла (каждый раз +1) 
  for (let j = 0; j < array[i].length; j++) {
    weeks = weeks + 1; 
    console.log(`Неделя номер ${weeks}`);
    for (let k = 0; k < array[i][j].length; k++) {
      days = days + 1; 
      console.log(`день номер ${days}, количество пар: ${array[i][j][k]}`)
      if (array[i][j][k] > 0) {
        vor = vor + doroga2; // накопление (30руб)
      }
      if ((array[i][j][k] <= 3) && (array[i][j][k] > 0)) {
        kopilka = kopilka + pisha // сколько копится с еды(250руб)
      }
      if (array[i][j][k] > 0) {
        cash = vor + kopilka // денег каждый день в копилке (каждый день +30+250=280 от предыдушего дня,то бишь с учетом прошлой суммы)
        console.log(`в копилочке: ${cash} руб.`)
      }
      if (cash >= pristavka) { //если денег в копилке больше стоимости приставки,то получилось накопить 
        console.log(`Получилось накопить валюту`)
        break; // Конец цикла
      }
      else {
        console.log(`Пока не получилось накопить валюту`)
      }
    }
  }
}  
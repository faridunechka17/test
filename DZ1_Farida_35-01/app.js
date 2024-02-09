var month = prompt('Введите месяц вашего рождения, От 1 до 12');
var date = prompt('Введите дату вашего рождения, Например: 17');

if ((month === '3' && date >= 21) || (month === '4' && date <= 19)) {
    alert("Овен")
} else if ((month === '4' && date >= 20) || (month === '5' && date <= 20)) {
    alert("Телец")
} else if ((month === '5' && date >= 21) || (month === '6' && date <= 20)) {
    alert("Близнецы")
} else if ((month === '6' && date >= 21) || (month === '7' && date <= 22)) {
    alert("Рак")
} else if ((month === '7' && date >= 23) || (month === '8' && date <= 22)) {
    alert("Лев")
} else if ((month === '8' && date >= 23) || (month === '9' && date <= 22)) {
    alert("Дева")
} else if ((month === '9' && date >= 23) || (month === '10' && date <= 22)) {
    alert("Весы")
} else if ((month === '10' && date >= 23) || (month === '11' && date <= 21)) {
    alert("Скорпион")
} else if ((month === '11' && date >= 22) || (month === '12' && date <= 21)) {
    alert("Стрелец")
} else if ((month === '12' && date >= 22) || (month === '1' && date <= 19)) {
    alert("Козерог")
} else if ((month === '1' && date >= 20) || (month === '2' && date <= 18)) {
    alert("Водолей")
} else if ((month === '2' && date <= 29) || (month === '3' && date <= 20)) {
    alert("Рыбы")
} else if (month < 0 && date > 31 ) {
    alert('Ошибка введите правильную дату')
}



var imya = prompt('Введите своё имя');
var age = +prompt('Введите свой возраст');
var summa = 'Далее введите 3 числа чтобы найти их среднее значение'
var first = +prompt('Введите первую цифру')
var two = +prompt('Введите вторую цифру')
var three = +prompt('Введите третью цифру')

var number_1 = +prompt('Введите ответ: 9+4=?')
var number_2 = +prompt('Введите ответ: 22:2=?')
var number_3 = +prompt('Введите ответ: 2*5=?')
var number_4 = +prompt('Найдите остаток: 52:10=?')
var number_5 = +prompt('Введите @^$+@#%&*@!#$* чисел: (64!@#^8!+^&$57^24)/(*!@#^&34*98%#@^2)=?')
var res = ((first + two + three)/3)

console.log('Ваше имя: ' + imya);
console.log('Ваш возраст: ' + age);
console.log('Правильный ответ: ' + (9+4) + ' Ваш ответ: ' + number_1 );
console.log('Правильный ответ: ' + 22/2 + ' Ваш ответ: ' + number_2 );
console.log('Правильный ответ: ' + 2*5 + ' Ваш ответ: ' + number_3 );
console.log('Правильный ответ: ' + 52%10  + ' Ваш ответ: ' + number_4 );
console.log('Правильный ответ: ' + '?:%"№%?;*"№: ' + 'Ваш ответ: ' + number_5 );
console.log('Среднее значение: ' + res);
alert('Среднее значение: ' + res)
alert('Зайдите в консоль для проверки');
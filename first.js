// Объект - нужен для описания какого либо объекта (человек, машина, здание)
// Структура создания объекта let название объекта = {ключ:значение}
// оператор in делает проверку если есть указанный ключ вернет true иначе false
// typeof - делает проверку на тип данных

// let car = {
//     name: 'bmw',
//     year: 2022,
//     active: false
// }
// car.color = 'black'
// car['price'] = '35000$'


// console.log(typeof car);


// let user = {
//     name: 'Alex',
//     age: 30,
//     city: 'Tashkent',
//     working: true
// }

// for(let key in user) {
//    // console.log(key); выводит все ключи в вашем объекте
//    // console.log(user[key]); выводит значение всех ваших ключей
//     // console.log('Ключ ' + key + ' значение ключа ' + user[key]);
   
//    console.log(`Ключ ${key} значение ключа ${user[key]}`);
// }


// Функция созданая внутри объекта назся методом

for(i = 0;i <11;i++) {
    let user = {
    name: prompt('Введите своё имя: '),
    age: +prompt('Введите свой возраст: '),
  }
  console.log('Пользователь ' + i + ':' + 'Имя : ' + user.name + ',' + 'Возраст: ' + user.age)
}







  
'use strict';
/*
В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
Пример: Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.
        amountOfPages(5) => 5
        amountOfPages(25) => 17
        amountOfPages(1095) => 401   
        amountOfPages(185) => 97

function amountOfPages(n){
  let res,
      str = '';

    for(let i = 1; i < n; i++) {
      str+=i;
      if(str.length == n) {
        return res = i;
      }
    }
    return res
  let a = [],
      b = 1;
  function f(){
    a.push(b);
    b++;
    if (b > n) return;
    f()
  };
  f();
  let v = 0,
      l = 0;
  for(let i = 0; i < a.length; i++) {
    v += a[i].toString().length;
    if(v == n)  return l += a[i];
  }
  return l 
};
console.log(amountOfPages(25));

/*Задание:

Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

Пример:
isPangram(«The quick brown fox jumps over the lazy dog») => true
isPangram(«Hello world») => false

function isPangram(string) {
  string = string.split('');
  let a = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return a.every((leter) => string.includes(leter))
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'))
*/
/*
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
deepCount([1, 5, 3]) => 3
deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([]) => 0
deepCount([[[[[[[[[]]]]]]]]]) => 8
*/
function deepCount(a){

}
console.log(deepCount([1,2,3,[4]]));
/*function factorial(f) {
  if ( typeof(f) !== 'number' || !Number.isInteger(f)) {
      return 'Wrong data'
  }
  else if ( f >= 1 )
  {return f * factorial(f -1)}
else return 1
}
factorial(5)
*/
/* const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '17$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};



/*3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.

Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.


function isOpen(prop) {
  let answer;
  !prop ? answer = 'Закрыто' : answer = 'Открыто';
  return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if ((+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
  const copy = Object.assign({}, data);
  copy.waitors = [{name: 'Mike', age: 32}];
  return copy
}
console.log(transferWaitors(restorantData));


/* 
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let sorted = arr.sort();
    let result = [];
    let floor = sorted.length % 3;
      for(let i = 0; i < sorted.length; i+=3){
          result.push(sorted.slice(i, i+3))
      }
      console.log(result[result.length -1])
        if (floor === 0){
          result.push('Оставшиеся студенты: -')
        } else {
            result[result.length -1] = 'Оставшиеся студенты: ' + result[result.length -1].join(', ')
        }
    return result
}
console.log(sortStudentsByGroups(students))
/* Shops heating -------------------------------
const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let {shops} = data;
  let allVolume = shops.reduce((a = 0, b) =>
  a += b = shops.width * shops.length * data.height, 0
  )
  return console.log(allVolume)
}
isBudgetEnough(shoppingMallData);

/*
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function(){
    for(let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
      if(a != null && b != null && a != '' && b != '' && a.length < 50){ 
        personalMovieDB.movies[a] = b;
      } else {
        i--
      }
    }
  },
  detectPesonalLevel: function() {
    if(personalMovieDB.count < 10) { alert("Просмотрено довольно мало фильмов")}
    else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {  alert("Вы классический зритель")}
    else if(personalMovieDB.count > 30) {  alert("Вы киноман")}
    else {  alert("Произошла ошибка")}
  },
  showMyDB: function(hidden){
    if(!hidden) {
      console.log(personalMovieDB)
    }
  },
  writeYourGenres: function() {
    for(let i = 0; i < 1; i++){
      let genres = prompt(`Введи через кому жанри`, '');
      if(genres == null || genres.trim() == '' ) {
        i--
      } else {
    personalMovieDB.genres = genres.split(',');
      }
      personalMovieDB.genres.forEach((it, idx) => console.log(`Любимый жанр ${idx+1} - это ${it}`))
      /*let genres = prompt(`Ваш любимый жанр под номером ${i+1}`);
      if(genres == null || genres.trim() == '' ) {
        i--
      } else {
    personalMovieDB.genres[i] = genres;
      }
    }
    personalMovieDB.genres.forEach((item, idx) => console.log(`Любимый жанр ${idx+1} - это ${item}`))
    //------------------
  }
  },
  toggleVisibleMyDB: function(){
    if(personalMovieDB.privat){
      this.privat = false
    } else{
      this.privat = true
    }
  }
}
  console.log(personalMovieDB);
  personalMovieDB.toggleVisibleMyDB();
  //personalMovieDB.toggleVisibleMyDB;
  console.log(personalMovieDB.genres);


/* Array ==============

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str == 'string'){
        return str.split('').reverse().join('')
    }
}
console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if(arr.length){
    return `Семья состоит из: ${arr.join(' ')}`
  } else {return 'Сем*я пуста'}
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    return console.log(arr.map(el => el.toLowerCase()).join('\n'));
}

/* Objects =========================
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function (plan){
    return `Мне ${plan.age} и я владею языками: ${plan.skills.languages.map(i => i.toLocaleUpperCase()).join(' ')}`
  }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))

function showExperience(plan) {
  let {skills} = plan;
  let {exp} = skills;
    return exp;
};
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
  let {skills} = plan;
  let {programmingLangs} = skills;
  let str ='';
  for(let lang in programmingLangs){
    if(!lang) return str;
    str += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
  }
  return str;
}
showProgrammingLangs(personalPlanPeter);

/* Замикання--------------

function f1() {
  let count = 0;
  return function (){
    count++;
    console.log(count)
  }
}

let b = f1();
let c = f1();
b();
b();
c();
b();
c();


/*function fib(num) {
  if(typeof num !== 'number') return '';
  let fib = [];
  let a = 0, b = 1, c = 0;
  for(let i = 0; i < num-1; i++){
      fib.push(c);
      a = b;
      console.log('a = ' + a);
      b = c;
      c = a + b
      console.log('b = ' + b);
      }
  return fib.join(',')
}

console.log(fib(10))

/*function findMaxNumber(a,b,c,d){
  let args = Array.from(arguments);
  console.log('args = ' + args);
  if (args.length < 4) return 0;
  for(let arg of args){
    if (typeof arg !== 'number' ){
    return 0;
    }
  }
  return args.reduce((a,b) => b < a ? a : b);
}

console.log(findMaxNumber(5, 6.6, 11,2));
//findMaxNumber(1, 5, '6', '10');

/*let val = 7
 function createAdder() {
   function addNumbers(a, b) {
     let ret = a + b
     return ret
   }
   return addNumbers
 }
 let adder = createAdder()
 let sum = adder(val, 8)
 console.log('example of function returning a function: ', sum)
*/
/*const person1 = {name:"Oleg", old:14};
const person2 = {name:"Kolia", old:18};

function bind(a){
  return function newBind(b){
    return console.log(`${this.name}, ${this.old}+${b.old} + ${a}`)
  }
}

const as = bind(person2);
const sd = as(person1);
console.log(sd()())
/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    let a = prompt('Один з переглянутих фільмів?', '');
    let b = +prompt('Оціни переглянутий фільм', '');

    if ( a!=null && b != null && a != '' & b != '' && a.length <= 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
      console.log('error');
      i--;
    }
}
debugger
 if (personalMovieDB.count < 10) {
   alert("Просмотрено довольно мало фильмов");
 } else if (personalMovieDB.count < 30){
   alert("Вы классический зритель");
 } else if (personalMovieDB.count > 30) {
   alert("Вы киноман");
 } 
   alert("Произошла ошибка");

console.log(personalMovieDB)


/*let max = 5,
    start = '',
    result = '',
    i = 0,
    j = 0;

  for (i = 0; i <=max; i++) {
    for (j = 0; j <=max - i; j++) {
      result+=' '
    };
    for(j = 0; j < i*2 +1; j++){
      result+='*'
    }
    result+='\n'
  }

  console.log(result)

/*const lines = 6;
let result = '';
let i = 0,
    j = 0,
    a = '',
    b = '';

while (i < lines) {
    a = '';
    b = '';
    for (j = 0; j < lines - i; j++) a+=' ';
    for (j = 0; j < i * 2 +1; j++) b+='*';
    result+=a+b+'\n';
    i++
}
console.log(result);




/*
debugger
var i = 0,
  j = 0;
// Желаемое количество строк
var max = 3;
var space = "",
  star = "";

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}

/*const lines = 5;
let result = '';
let a = '-';
let b = '*'
// Проверяется именно переменная result, формируйте строку в ней
for(let i = 0; i<=5; i++){
    for(let j=lines; j>0; j--){
      result+=a
    }
    result+='\n'
}

console.log(result);


/*for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
      continue;
  } else {
      console.log(i);
  }
}


const a = '#';
let b = '';
for (let i = 10; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    b+=a
  }
  b+=a + '\n';
}

console.log(b)


document.body.innerHTML = '<h1> Hello from JS </h1>'

const items = [
    { price: 40},
    { price : 120},
    { price: '505'},
    { price: 350}];
  
  for (const item of items){
  console.log(`Price: ${item.price}`);
  }*/
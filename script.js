'use strict';

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
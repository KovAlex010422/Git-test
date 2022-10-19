'use strict'

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
  }
};

function showExperience(plan) {
  let {skills} = plan;
  let {exp} = skills;
    return console.log(exp);
};
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
  let {skills} = plan;
  let {programmingLangs} = skills;
  for(let lang in programmingLangs){
    //if(!programmingLangs) return '';
    `Язык ${lang} изучен на `//${lang}`
  }
}
showProgrammingLangs(personalPlanPeter)
/*Язык js изучен на 20% Язык php изучен на 10%"

let numberOfFilms;

/*function start(){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
};

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

/*function rememberMyFilms(){
  for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');
    if(a != null && b != null && a != '' && b != '' && a.length < 50){ 
      personalMovieDB.movies[a] = b;
    } else {
      i--
    }
  }
};

//rememberMyFilms();

function detectPesonalLevel() {
  if(personalMovieDB.count < 10) { alert("Просмотрено довольно мало фильмов")}
  else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {  alert("Вы классический зритель")}
  else if(personalMovieDB.count > 30) {  alert("Вы киноман")}
  else {  alert("Произошла ошибка")}
};
//detectPesonalLevel()

function showMyDB(){
  if(!numberOfFilms.privat) {
    console.log(personalMovieDB)
  }
}

//showMyDB();

function writeYourGenres() {
  for(let i = 0; i < 3; i++){
    let q = prompt(`Ваш любимый жанр под номером ${i+1}`);
  personalMovieDB.genres[i] = q;
  }
}
//writeYourGenres()
*/
//console.log(Object.keys(personalMovieDB))
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
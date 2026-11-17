// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// alert(ms);

// /b, tab 


// alert('Interface' .toUpperCase()); //INTERFACE
// alert('interface' .toLowerCase()); //interface  



// let str = 'Widget with id'; 
// alert(str.indexOf('Widget')) // 0, потому -что подстрока 'Widget' найден в начале 
// alert(str.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру 
// alert(str.indexOf("id")) // подстрока "id" найдена на позиции 1 (.. idget with id )

// let str = 'Widget with id';
// //         012345678910111213
// alert(str.indexOf('id' , 2)) //12





// includes, startswitch, endsWith - Наличии подстроки 

// includes() - ищет элемент, если находит true игаче false
// let str2 = "Добро пожаловать Мага Добро "

// console.log(str2.includes("мага")); //false 
// console.log(str2.includes("Мага")); //true 
// console.log(str2.includes("Добро", 4)); // поиск- после 4 идекса 


// startWith() - ищет подстроку в начале строки 
// let str3 = "Widget id" 
// console.log(str3.startsWith("id")); //true 
// console.log(str3.endsWith("id")); // false 



// substring()- str.substring(start [, end]) 

// Возврошает часть строки между start и end (не включачя) end.

let str4 = " Maga  id Widget " 

console.log(str4.substring(0, 3)); // Mag  отрицательные числа не подерживает 


// slice() - возвращает часть строки между start и end (не включая) end 
// + возможность отрицательных чисел 

let  str6 = "Maga id Widget"
console.log(str6.slice(0, 3)); // Mag 


console.log(str6.slice(5 , -3)); //  id Wid  

// str.substr(start [, length]) (старт, [длина ])

let str7 = "Maga id Widget" 

console.log(str7.substr(3, 4)); // a id 

//contact(str, str2 ...) - Объеденние строк 
let str8 = "Maga" 
let str9 = "Чанга"
let str10 = "Монга "

console.log("Hello".concat(str8, str9)); //HelloMagaЧанга 
console.log(str10.concat(str8, str9)); //МонгаMagaЧанга 



//split(delim) - Разделить  строку на побстроку 

let str11 = "Мага добро пожаловать  "
console.log(str11.split("")); // ['Мага', 'Добро', 'пожаловать']

// report - Повторить строку 

let str12 = "Мага Добро пожаловть "
console.log(str12.repeat(3)); // Мага добро пожаловать Мага добро пожаловать Мага добро пожаловать 

// replace(substr, substr2), replaceAll(substr, substr2) - заменить подстроку 



let str13 = "Мага добро пожаловать "
console.log(str13.replace("Мага", "Alex")); // Alex Добро пожаловать  

// заменяет все совпадение replaceAll()
console.log(str13.replaceAll("Мага", "Alex")); // Alex Добро пожаловать Alex 



// padEnd() - добовляет в конце строки элементы 
let str15 = "Мага Добро пожаловать Мага "
// "Hello Triger*********"
console.log("HelloTroger".padEnd(20, "*"))

"Hello Troger".padStart(20, "*") // "**********Hello Troger"


//trim(), trimEnd(), trimStart() - удалить  пробелы в строке 

let str16 = "   Мага добро пожаловать   "

console.log(str16.trimEnd()); // "Мага добро пожаловать "
console.log(str16.trimStart); // "Мага добро пожаловать "
console.log(str16.trim());



 





















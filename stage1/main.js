import {WorkWithStr} from "./module1.js";
import {opWithNumbers} from "./module2.js";
import {Product} from "./module3.js";

let workWithStr = new WorkWithStr;
let str1 = "aBScD, Asd DsA";
let str2 = "Вот  пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы  ,   а перед знаками их быть не должно .";
let str3 = "Текст, в котором слово текст несколько раз встречается и слово тоже";

console.log(workWithStr.toLowerCaseWithFirstLetter(str1));
console.log(workWithStr.removeExtraSpaces(str2));
console.log(`Слов в строке: ${workWithStr.countWords(str3)}`);
console.log(workWithStr.counterOfUnique(str3));

let op = new opWithNumbers();
let firstForSum = "191111111111";
let secondForSum = "9023487132";

let firstForMinus = "123456789";
let secondForMinus = "987654321";

let firstForMul = "1000000000000";
let secondForMul = "584";

let firstForDiv = "125";
let secondForDiv = "5"

console.log(`Сложение: ${op.sum(firstForSum, secondForSum)}`);
console.log(`Вычетание: ${op.minus(firstForMinus, secondForMinus)}`);
console.log(`Умножение: ${op.mul(firstForMul, secondForMul)}`);
console.log(`Деление: ${op.div(firstForDiv, secondForDiv)}`);



let bigStrForFilter = "name-contains-fd&price-=2&quantity->5&description-ends-abc";
let smallStrForFilter = "name-starts-fd&quantity-=5";

let filter = new Product();
let product = [new Product("fdFood", 2, 5, "dada abc"), new Product("BCd", 2, 6, "net net abc"),
                new Product("fd", 3, 6, "abc"), new Product("fd", 2, 6, "net")];

console.log(filter.filter(smallStrForFilter, product));
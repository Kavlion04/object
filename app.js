// 1 masala

// const k = 3 ; 
// const obj = {
//     a : 2,
//     b : 3,
//     c : 4   
// }
// obj.mag = function(){
//     return this.a*k +  " " + this.b*k + " " + this.c*k 
// }

// console.log(obj.mag())

// 3 masala

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const res = animals.reduce(
//     (acc, item) => (acc[item] = (acc[item] || 0) + 1, acc), {}
// );
// console.log(res);

// 4 masala


// const odamlar = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];
// const yoshlar = odamlar.map(odam => odam.age);
// const farqi = Math.max(...yoshlar) - Math.min(...yoshlar);

// console.log(farqi , " -  orasidagi yosh farqi!");


// 5 masala

// function  minManWord() {
//     let soz = "Men dasturlash kursida o’qiyman";
//     let sozlar = soz.split(" ");    
//     let min = sozlar[0];
//     let max = sozlar[0];
//     for (let i = 0; i < sozlar.length; i++) {
//         if (min.length > sozlar[i].length) {
//             min = sozlar[i];
//         }
//     }
//     for (let i = 0; i <  sozlar.length; i++) {
//         if (max.length < sozlar[i].length) {
//             max = sozlar[i];
//         }
//     }
//     console.log("minWord:"   ,min , );
//     console.log("maxWord:"   ,max , );

    
// }
// minManWord()




// 6 masala


// function arrow() {
//     let arr = [33 , 12 , 4] ;
//     let arr2 = arr.reduce((acc , item) => acc + item);
//     let arr1 = arr2 % 10;
//     let arr3 = Math.floor(arr2 / 10);
//     let arr4 = [] ;
//     let res = arr3 + " " + arr1;
//     arr4.push(res);
//     console.log(arr4);

// }
// arrow()

//7 masala
// function arr(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value.toString());
// }
// let obj = {a: 2, b: 5, c: 7};
// console.log(arr(obj));



// 8 masala
// function arrow() {
//     let arr = [33 , 12 , 4] ;
//     let arr2 = arr.reduce((acc , item) => acc + item);
//     let arr1 = arr2 % 10;
//     let arr3 = Math.floor(arr2 / 10);
//     let arr4 = [] ;
//     let res = arr3 + "" + arr1;
//     let res2 = arr3  + arr1;
//     console.log(res , ": yig'indisi");
//     console.log(res2 , ": yig'indining yig'indisi");
// }
// arrow()


// 9 masala
// function xonalarSoni(son) {
//     return Math.abs(son).toString().length;
// }

// let son = 4052006;
// console.log(xonalarSoni(son));

// 10 masala
// let son = 4052006;
// let teskari = son.toString().split("").reverse().join("");
// console.log(teskari);



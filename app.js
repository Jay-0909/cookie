import 'font-awesome/css/font-awesome.css'


// String
var test = "    123"

console.log(test.trim())
console.log(test)

var myNumb = 4444222
console.log(myNumb)

var myFunc2 = function () {
    console.log('would')
}

var myFunc = function () {
    console.log('hello')
    myFunc2()
}
myFunc()

var myReturnFunc = function () {
    return 'jimmy'
}

var myName = myReturnFunc()

var myArray = [1, 2, 3, 5]
// array 操作
// 新增
// myArray.push(6)

// 刪除
// myArray.pop()

// splice (start,deleteCount,item)
// myArray.splice(2,0,2)

// 遍例
myArray.map((item, index) => {
    var myNumb = 22 + item
    console.log(index)
})

// map / filter / sort / reduce


// Object 
// 屬性 (變數)
// 方法 (函式)
// var myObj = {
//     "test":"123",
//     myFunc:function(){
//         console.log('heeeeeloooooooo')
//     }
// }
// myObj.myFunc()

// console.log(myObj.test)


var People = {
    age: 20,
    name: 'jimmy'
}


// 建構函示 (es5 Class)
var superPeople = function (name = 'defaultMyName', atack) {
    this.atack = atack;
    this.init = function(){
      
        // arrow function 箭頭函示
        // bind / call / apply  綁定this
        // hoisting 提升
        
        document.getElementById('testDIV').addEventListener('click',function(){
            console.log(this.atack)
            console.log('now click')
        }.bind(this))
    }
}

// es5 繼承
superPeople.prototype = People

// es6 class
class Child {
    constructor(){
        this.age = 20;
        this.name = 'jimmy'
    }
}

// es6 繼承
class SuperChild extends Child{
    constructor(atack){
        super()
        this.atack = atack
    }
}

var myChild = new SuperChild(777)
console.log(myChild)

// null
// undefined

// 實例化
var SuperPeople2 = new superPeople('jack', 30)
var SuperPeople3 = new superPeople(undefined, 50)

SuperPeople2.init()
// console.log(SuperPeople3)

// console.log(People)
// console.log(superPeople)



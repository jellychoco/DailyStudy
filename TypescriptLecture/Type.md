# **타입**


### 타입정리


 - 원시타입(Primitive Type) : number, string, boolean, bigint, symbol, null, undefiend

 - 참조타입(Reference Type) : functio, array, object, 

 > 원시타입은 원본, 참조타입은 사본



 ### 타입적용

 1. 원시타입
 ```ts
 //number
 const num:number = 1

 //string
 const str:string = "hello"

 //boolean
 const bool:boolean = true

 //undefined : 비어있는지 아닌지도 모르는 개념, 이름 그대로 정의조차 되지 않은 것
 let age:number|undefiend
 age = undefined | 1

 //null : 값이 비어있는 경우
 let person:null|string
 person = null | "world"
  
 ```
 > null 과 undefined 는 비슷해보이지만
 데이터 타입이 있거나 아직 결정되지 않았거나 하는 경우,
 보편적으로는 undefined가 많이 사용되고,
 값이 있거나 없거나 하는 것을 나타낼때는 null이 맞다


```ts
 //unknown 무쓸모
 //any는 가능한 한 쓰지말자

 //void : return값이 없는 경우
 function print():void{
     console.log('hello world')
 }

//never : 발생한 에러를 서버로 보내 로그를 남기고, 그 다음 에러를 던지고 어플리케이션이 죽게 되니 함수를 리턴하는 값이 없는 경우 사용될수 있다, 함수 안에 return 자체가 없다
function throwError(message:string):never{
     //message ->log-> server 
     throw new Error(message)
}



//object : 어떤 타입도 들어갈수 있으니 좋지 않은 타입이다 (배열도 가능)
function someObj(obj:object){

}
someObj({name:"hello",age:31})
const obj:object = ['1',2]
```
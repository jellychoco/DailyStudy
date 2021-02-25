# 함수타입 사용방법



```ts

function promiseTypeExample(id:string):Promise<number>{


  return new Promise((resolve,reject)=>{
      resolve(100)
  })
}


function optionalParamsExample(firstName:string,lastName?:string){}

// ? 를 붙이게되면 지정한 타입 | undefined 



function restParamsExample(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b)
}
restParamsExample(1,2)
restParamsExample(1,2,3,4,5)

```
---


# 배열타입

```ts
 //Array


 const fruits:string[] =['apple','banana']
 const fruits:Array<string> = ['1','2']

//Readonly

function readOnly(fruits:readonly string[]){
    //이땐 Array<string>안됌
}


//Tuple -> interface, type alias, class 로 대체해서 사용한다

let student:[string,number]

student = ['name',123]

//엘리선생님은 이 방법을 추천하지 않는다 

```  
---







# Type Alias

타입을 커스터마이징

```ts

 type Text = string;

 const name:Text = 'elle'
 const address:Text = 'korea'

 type Num = number

 type Student = {
     name:string
     age:number
 }
const student:Student = {
    name:"jaemin", //ok
    age:12,  //ok
}

```


# String Literal Types

 ```ts
  type Name = "name"
  let jaemin:Name
  jaemin = "name" //ok
  jaemin = "hello" //fail

  

 ```
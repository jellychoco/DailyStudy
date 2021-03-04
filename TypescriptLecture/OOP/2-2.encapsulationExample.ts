
  //객체지향 oop
  
  {
    type CoffeeCup = {
      shots: number
      hasMilk: boolean
    }

    //public
    //private
    //protected 등을 활용해서 정보를 은닉 등을 할수 있다
    class CoffeeMaker {
      // BEANS_GRAMM_PER_SHOT:number = 7
      // coffeeBeans:number = 0
      // 멤버변수, 기본데이터, 메모리 낭비될수 있다
  
      
     //private 붙이면 CoffeeMaker.BEANS_GRAMM_PER_SHOT 접근불가

     private static BEANS_GRAMM_PER_SHOT: number = 7 //==>class level
      //class level 이란 클래스와 연결이 되어있기 때문에 객체마다 만들어지지 않는다.
      //따라서 사용할땐 this.BEANS_GRAMM_PER_SHOT 가 아니라
      // CoffeeMaker.BEANS_GRAMM_PER_SHOT 이렇게 사용한다
  
     private coffeeBeans: number = 0 //==>instance(object) level
      //객체마다 만들어지는 것
  
     private constructor(beans: number) {
        this.coffeeBeans = beans
      }
  
      filleCoffeeBeans(beans:number){
          if(beans < 0){
              throw new Error('value for beans should be greater then 0')
          }
          this.coffeeBeans += beans
      }

    static makeMachine(coffeeBeans:number):CoffeeMaker {
        return new CoffeeMaker(coffeeBeans)
    }
      makeCoffee(shots: number): CoffeeCup {
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
          throw new Error("Not Enough Coffee Beans!")
        }
  
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
  
        return {
          shots,
          hasMilk: false,
        }
      }
    }
  
    const maker = CoffeeMaker.makeMachine(32)
    // maker.filleCoffeeBeans(-1)
  
  
    //예시
  
    Math.abs
    Math.PI
  }

  {
      


    class User {
        firstName:string
        lastName:string
        fullName:string
        constructor(firstName:string,lastName:string){
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = `${firstName} ${lastName}`
        }
    }


    const user = new User('steve','jobs')

    console.log(user.fullName) //steve jobs
    user.firstName = 'jaemin'
    console.log(user.fullName) // steve jobs

    
    class User2 {
        firstName:string
        lastName:string
        get fullName():string{
            return `${this.firstName} ${this.lastName}`
        }
        constructor(firstName:string,lastName:string){
            this.firstName = firstName
            this.lastName = lastName
        }
    }


    const user2 = new User2('steve','jobs')

    console.log(user2.fullName) //steve jobs
    user2.firstName = 'jaemin'
    console.log(user2.fullName) // jaemin jobs

    

    class User3 {
         get fullName():string{
             return `${this.firstName} ${this.lastName}`
         }
         private internalAge = 4
         get age():number {
             return this.internalAge
         }
         set age(num:number){
             if(num < 0){
                  throw new Error('error')
             }
             this.internalAge = num
         }
         constructor(private firstName:string, private lastName:string){
         }
     }
 
 
     const user3 = new User3('steve','jobs')
 
     user3.age = 6
     console.log(user3.fullName) //steve jobs
     console.log(user3.fullName) // jaemin jobs
 


  }
  
{
    //복잡한것을 간단한것으로 바꾸는 것
    type CoffeeCup = {
      shots: number
      hasMilk?: boolean
      hasSugar?:boolean
    }
  
    interface CoffeeMaker {
      makeCoffee(shot: number): CoffeeCup
    }
  




    class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7
  
      private coffeeBeans: number = 0
  
      public constructor(beans: number) {
        this.coffeeBeans = beans
      }
  
      filleCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error("value for beans should be greater then 0")
        }
        this.coffeeBeans += beans
      }
  
      clean(){
        console.log('cleaning the machine')
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans)
      }
  
      private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`)
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error("not enough coffee beans")
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
      }
      private preheat(): void {
        console.log("heating up")
      }
      private extract(shots: number): CoffeeCup {
        console.log(`pulling ${shots}`)
        return {
          hasMilk: false,
          shots,
        }
      }
  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots)
        this.preheat()
        return this.extract(shots)
      }
    }
  
    class CaffeLatterMachine extends CoffeeMachine {
        constructor(beans:number,serialNum:string){
            super(beans)
        }
        private steamMilk():void {
            console.log('setma milk')
        }
       makeCoffee(shots:number):CoffeeCup{
        const coffee = super.makeCoffee(shots)   
        return {
               shots,
               hasMilk:true
           }
       }
    }
  
    class SwetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots:number):CoffeeCup{
           const coffee = super.makeCoffee(shots)
           return {
               ...coffee,
               hasSugar:true
               
           }
        }
    }
    
    const machine = new CoffeeMachine(23)
    const latterMachine = new CaffeLatterMachine(23,"ssss")
    
    const machines:CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatterMachine(16,"1")
    ]
  }


//   다형성이란 하나의 인터페이스나 또는 부모의 클래스를 상속한 자식 클래스들이 인터페이스와 부모클래스에 있는 함수들을 다른 방식으로 다양하게 구성함으로써 조금더 다형성을 만들어 볼수 있는 것을 말한다.
//   그리고 이처럼 인터페이스와 부모클래스에 있는 동일한 함수 api를통해서 각각의 구현된 자식클래스의 내부 구현사항을 신경쓰지않고 약속된 한가지의 api를 호출함으로써 사용함으로써 
//   사용자가 간편하게 기능들을 활용할수 있게 도와준다.

  
  
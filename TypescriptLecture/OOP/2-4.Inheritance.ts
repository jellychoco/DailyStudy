{
    //복잡한것을 간단한것으로 바꾸는 것
    type CoffeeCup = {
      shots: number
      hasMilk: boolean
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
  
    
    const machine = new CoffeeMachine(23)
const latterMachine = new CaffeLatterMachine(23,"ssss")

  }


  //상속은 extends를 사용하는 것 자체를 말하며 자식클래스에서 constructor 를 사용하려면 super를 실행해주고 인자로 부모 constructor 의 인자를 넣어주어야 한다

  
  
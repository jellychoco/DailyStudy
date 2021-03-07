{
  //복잡한것을 간단한것으로 바꾸는 것
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup
  }
  interface CommercialCoffeeMaker {
    filleCoffeeBeans(beans:number):void
    clean():void
    makeCoffee(shot: number): CoffeeCup
  }

  class CoffeeMachine implements CoffeeMaker,CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7

    private coffeeBeans: number = 0

    private constructor(beans: number) {
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

  const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32)
  maker2.filleCoffeeBeans(32)
  maker2.clean()

  
   class AmateurUSer {
     constructor(private machine:CoffeeMaker){}
     
     makeCoffee(){
       const coffee = this.machine.makeCoffee(2)
       console.log(coffee)
     }
   }

   class ProBarista {
     constructor(private machine:CommercialCoffeeMaker){}

     makeCoffee(){

       const coffee = this.machine.makeCoffee(2)
       console.log(coffee)
       this.machine.filleCoffeeBeans(45)
       this.machine.clean()
     }
   }
  
   const maker:CoffeeMachine = CoffeeMachine.makeMachine(32)
   const amateur = new AmateurUSer(maker)
   const pro = new ProBarista(maker)
   
   pro.makeCoffee()

  
  //추상화는 보일필요가 없는 함수들을 숨겨서 사용하기 편하게 하는것




}

// FAvor composition over inheritance
//상속보다 컴포지션을 더 써라라는 말이 있다, 다만 상속이 무조건 나쁘다는 말은 아니다
//너무 상속만 이용해서 깊이가 깊어진다면 관계가 복잡해질수 있다
{
  type CoffeeCup = {
    shots: number
    hasMilk?: boolean
    hasSugar?: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shot: number): CoffeeCup
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7

    private coffeeBeans: number = 0

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans
    }

    filleCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater then 0")
      }
      this.coffeeBeans += beans
    }

    clean() {
      console.log("cleaning the machine")
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
      const coffee = this.extract(shots)

      return this.milk.makeMilk(this.sugar.addSugar(coffee))
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("setma milk")
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("setma milk")
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("setma milk")
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  //설탕제조기
  class CandySugar implements SugarProvider {
    private getSugar() {
      console.log("getting some sugar from jar")
      return true
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar()
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("getting some sugar from jar")
      return true
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar()
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  //
  const cheapMilkMaker = new CheapMilkSteamer()
  const fancyMilkMaker = new FancyMilkSteamer()
  const coldMilkMaker = new ColdMilkSteamer()
  const noMilk = new NoMilk()
  //
  //
  const candySugar = new CandySugar()
  const sugar = new SugarMixer()
  const noSugar = new NoSugar()
}
 
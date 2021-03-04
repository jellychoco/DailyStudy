//절차지향프로그래밍 feat without oop
{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }
  const BEANS_GRAMM_PER_SHOT: number = 7
  let coffeeBeans: number = 0

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not Enough Coffee Beans!")
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT

    return {
      shots,
      hasMilk: false,
    }
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT
  const coffee = makeCoffee(2)
  // console.log(coffee)
}

//객체지향 oop

{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }
  class CoffeeMaker {
    // BEANS_GRAMM_PER_SHOT:number = 7
    // coffeeBeans:number = 0
    // 멤버변수, 기본데이터, 메모리 낭비될수 있다

    //따라서

    static BEANS_GRAMM_PER_SHOT: number = 7 //==>class level
    //class level 이란 클래스와 연결이 되어있기 때문에 객체마다 만들어지지 않는다.
    //따라서 사용할땐 this.BEANS_GRAMM_PER_SHOT 가 아니라
    // CoffeeMaker.BEANS_GRAMM_PER_SHOT 이렇게 사용한다

    coffeeBeans: number = 0 //==>instance(object) level
    //객체마다 만들어지는 것

    constructor(beans: number) {
      this.coffeeBeans = beans
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

  const maker = new CoffeeMaker(32)

  console.log(maker)

  //예시

  Math.abs
  Math.PI
}

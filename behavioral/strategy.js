/**
 * 전략 패턴 (Strategy Pattern)
 *
 * 개요
 * 각 객체마다 행위를 전략으로 정의하고 유사한 행위들을 인터페이스로 캡슐화함으로써, 동작을 바꾸고 싶을 때 객체를 수정하지 않고 전략을 바꿔주기만 하면 되게끔 하는 디자인 패턴.
 *
 * 장점
 * - 런타임에 한 객체에서 사용되는 알고리즘을 교환할 수 있게 만든다.
 *   - 예를 들어, 네비게이션 앱에서 길찾기 알고리즘을 사용할 때, 도보/자전거/자동차/대중교통 등등의 알고리즘으로 교환할 수 있는 경우.
 * - 알고리즘을 사용하는 코드로부터 알고리즘 구현 정보를 분리시킬 수 있다,
 *
 * 용도
 * - 한 객체 내에서 사용되는 알고리즘을 자주 바꾸고 싶을 경우.
 * - 일부 행동을 실행하는 방식에서만 차이나는, 서로 유사한 클래스들이 많은 경우.
 *
 * 설계 방법 (유사 코드)
 * // 한 알고리즘의 모든 변형을 위한 전략 인터페이스 선언
 * interface Strategy {
 *   public value execute(value a, value b);
 * }
 *
 * // 한 알고리즘의 각 변형을 클래스로 정의한다
 * class ConcreteAddStrategy implements Strategy {
 *   public value execute(value a, value b) {
 *     return a + b;
 *   }
 * }
 *
 * class ConcreteSubStrategy implements Strategy {
 *   public value execute(value a, value b) {
 *     return a - b;
 *   }
 * }
 *
 * class ConcreteMultStrategy implements Strategy {
 *   public value execute(value a, value b) {
 *     return a * b;
 *   }
 * }
 *
 * // 컨텍스트는 클라이언트가 관심을 갖는 인터페이스를 말한다
 * // 컨텍스트가 자체적으로 해당 알고리즘을 구현하기보단 전략 클래스에 위임하도록 만든다.
 * class CalculateContext {
 *   private Strategy strategy;
 *
 *   constructor() {
 *     ...;
 *   }
 *
 *   public void setStrategy(Strategy newStrategy) {
 *     this.strategy = newStrategy;
 *   }
 *
 *   public value executeStrategy(value a, value b) {
 *     return this.strategy.execute(a, b);
 *   }
 * }
 */

class Strategy {
  constructor() {
    if (this.constructor === Strategy) {
      throw new Error('This is abstract class.');
    }
  }

  execute(a, b) {
    throw new Error('This has to be implemented.');
  }
}

class ConcreteAddStrategy extends Strategy {
  constructor() {
    super();
  }

  execute(a, b) {
    return a + b;
  }
}

class ConcreteSubStrategy extends Strategy {
  constructor() {
    super();
  }

  execute(a, b) {
    return a - b;
  }
}

class ConcreteMultStrategy extends Strategy {
  constructor() {
    super();
  }

  execute(a, b) {
    return a * b;
  }
}

class CalculateContext {
  constructor() {
    this.strategy = null;
  }

  setStrategy(newStrategy) {
    this.strategy = newStrategy;
  }

  executeStrategy(a, b) {
    if (!this.strategy) {
      throw new Error('The strategy has not been set.');
    }
    return this.strategy.execute(a, b);
  }
}

const context = new CalculateContext();
context.setStrategy(new ConcreteAddStrategy());
console.log(context.executeStrategy(500, 14));
context.setStrategy(new ConcreteSubStrategy());
console.log(context.executeStrategy(1024, 21));
context.setStrategy(new ConcreteMultStrategy());
console.log(context.executeStrategy(33, 10));

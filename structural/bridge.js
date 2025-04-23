/**
 * 브릿지 패턴 (Bridge Pattern)
 *
 * 개요
 * 거대한 클래스 또는 밀접하게 연관된 두 클래스의 집합을 별개의 두 가지 개별 계층으로 나누어 독립적으로 개발할 수 있게 만드는 디자인 패턴.
 * 기능을 처리하는 클래스와 구현을 담당하는 클래스로 나뉘어진다.
 *
 * 장점
 * - 플랫폼 독립적인 클래스와 앱을 만들 수 있다.
 * - 새로운 추상화와 구현을 상호 독립적으로 도입할 수 있다.
 *
 * 용도
 * - 어떤 기능의 다양한 변형을 가진 모놀리식 클래스를 나누고 정돈하고자 할 경우.
 * - 런타임에 구현을 전환하고자 할 경우. 즉, 새 값을 할당하는 것만으로 추상화 내부 객체의 구현을 런타임에 바꾸고자 할 경우.
 *   - 이 때문에, 전략 패턴과 혼동할 가능성이 있다.
 *
 * 설계 방법 (유사 코드)
 * // 기능 계층의 최상위 클래스
 * // 구현 부분에 해당하는 클래스의 인스턴스를 통해 구현 부분의 메소드를 호출한다
 * class Abstraction {
 *   protected Implementor implementor;
 *
 *   public constructor(Implementor implementor) {
 *     this.implementor = implementor;
 *   }
 *
 *   public void method1(...) {
 *     ...;
 *     this.implementor...;
 *     ...;
 *   }
 *
 *   public void method2(...) {
 *     ...;
 *     this.implementor...;
 *     ...;
 *   }
 *
 *   ...;
 * }
 *
 * // (선택사항) 기능 계층의 최상위 클래스로부터 새로운 부분이 확장된 클래스
 * class RefinedAbstraction extends Abstraction {
 *   public constructor(Implementor implementor) {
 *     super(implementor);
 *   }
 *
 *   public void method1(...) {
 *     ...;
 *   }
 *
 *   public void method2(...) {
 *     ...;
 *   }
 *
 *   ...;
 * }
 *
 * // 기능 계층의 최상위 클래스의 동작을 구현하기 위한 인터페이스
 * interface Implementor {
 *   public void implementation1(...);
 *   public void implementation2(...);
 *   ...;
 * }
 *
 * // 기능 계층의 최상위 클래스의 실제 동작을 구현할 클래스
 * class ConcreteImplementor implements Implementor {
 *   public void implementation1(...) {
 *     ...;
 *   }
 *
 *   public void implementation2(...) {
 *     ...;
 *   }
 * }
 */

class CharacterAbstraction {
  constructor(implementor, pronoun) {
    this.implementor = implementor;
    this.pronoun = pronoun;
  }

  sayQuote1() {
    this.implementor.quote1();
  }

  sayQuote2() {
    this.implementor.quote2();
  }
}

class KoishiAbstraction extends CharacterAbstraction {
  constructor(implementor) {
    super(implementor, '메리');
  }

  sayQuote1() {
    this.implementor.quote1(this.pronoun);
  }

  sayQuote2() {
    this.implementor.quote2('당신의 뒤');
  }
}

class HoshinoAbstraction extends CharacterAbstraction {
  constructor(implementor) {
    super(implementor, '아저씨');
  }

  sayQuote1() {
    this.implementor.quote1(this.pronoun);
  }

  sayQuote2() {
    this.implementor.quote2('아쯔이요');
  }
}

class QuoteImplementor {
  constructor() {
    if (this.constructor === QuoteImplementor) {
      throw new Error('This is abstract class.');
    }
  }

  quote1(pronoun) {
    throw new Error('This has to be implemented.');
  }

  quote2(where) {
    throw new Error('This has to be implemented.');
  }
}

class KoishiQuoteImplementor extends QuoteImplementor {
  constructor() {
    super();
  }

  quote1(pronoun) {
    console.log(`헤에~ 나 ${pronoun}야~`);
  }

  quote2(where) {
    console.log(`나 지금 ${where}에 있어`);
  }
}

class HoshinoQuoteImplementor extends QuoteImplementor {
  constructor() {
    super();
  }

  quote1(pronoun) {
    console.log(`으헤~ ${pronoun} 등장했어~`);
  }

  quote2(where) {
    console.log(`여름날에 ${where}`);
  }
}

const koishi = new KoishiAbstraction(new KoishiQuoteImplementor());
const hoshino = new HoshinoAbstraction(new HoshinoQuoteImplementor());

koishi.sayQuote1();
koishi.sayQuote2();

hoshino.sayQuote1();
hoshino.sayQuote2();

const koishi2 = new KoishiAbstraction(new HoshinoQuoteImplementor());
const hoshino2 = new HoshinoAbstraction(new KoishiQuoteImplementor());

koishi2.sayQuote1();
koishi2.sayQuote2();

hoshino2.sayQuote1();
hoshino2.sayQuote2();

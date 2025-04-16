/**
 * 빌더 패턴 (Builder Pattern)
 *
 * 개요
 * 복잡한 객체들을 단계별로 생성하는 디자인 패턴.
 * 구성 요소 중 디렉터(Director)는 빌더 호출 순서를 정하여 객체를 반환한다.
 * (디렉터가 필수는 아니지만, 재사용성이 높고 객체 생성 정보를 완전히 숨기며 클라이언트는 그저 디렉터에게서 객체를 받기만 하면 되는 장점이 있다.)
 *
 * 장점
 * - 객체의 모든 설정을 불러올 필요 없이, 꼭 필요한 특성에 해당하는 메소드만 호출하면 된다.
 * - 객체가 생성되는 동안 다른 객체들이 해당 객체에 접근​​하는 것을 허용하지 않는다.
 *
 * 용도
 * - 사용되지 않을 수도 있는 여러 복잡한 파라미터로 인해 생성자 호출 코드가 복잡해질 경우.
 *   - 다양한 형태를 가진 건축물에 대한 객체 등등
 *   - 점층적 생성자가 생기려 할 경우, 즉 생성자 파라미터가 늘어나 여러개의 생성자 오버로딩이 생길 경우.
 *
 * 설계 방법 (의사 코드)
 * class Car {
 *   // 각종 데이터 정의
 *   ...;
 * }
 *
 * interface Builder<T> {
 *   public Builder reset();
 *   public Builder setSeats(...);
 *   public Builder setEngine(...);
 *   public Builder setComputer(...);
 *   public Builder setGps(...);
 *   public T getResult();
 * }
 *
 * class CarBuilder implements Builder<Car> {
 *   private Car car;
 *
 *   public constructor() {
 *     this.reset();
 *   }
 *
 *   public Builder reset() {
 *     car = new Car();
 *     return this;
 *   }
 *
 *   public Builder setSeats(...) {
 *     // 좌석 관련 설정
 *     ...;
 *   }
 *
 *   public Builder setEngine(...) {
 *     // 엔진 관련 설정
 *     ...;
 *   }
 *
 *   public Builder setComputer(...) {
 *     // 내부 컴퓨터 관련 설정
 *     ...;
 *   }
 *
 *   public Builder setGps(...) {
 *     // GPS 관련 설정
 *     ...;
 *   }
 *
 *   public Car getResult() {
 *     Car product = car;
 *     this.reset();
 *     return product;
 *   }
 * }
 *
 * // 차 빌더의 디렉터 클래스. 디렉터 클래스는 빌더의 호출 순서를 결정한다.
 * class CarBuildDirector {
 *   public buildCoupe(Builder builder) {
 *     builder
 *       .setSeats(2)
 *       .setEngine(...)
 *       .setComputer(...)
 *       .setGps(...);
 *   }
 *
 *   public buildSuv(Builder builder) {
 *     builder
 *       .setSeats(4)
 *       .setEngine(...)
 *       .setComputer(...)
 *       .setGps(...);
 *   }
 *
 *   ...;
 * }
 */

class Car {
  constructor() {
    this.seats = 4;
    this.engine = 'YasuoEngine';
    this.computer = 'Koishi OS';
    this.gps = 'FineDriveGPS';
  }
}

class Builder {
  constructor() {
    if (this.constructor === Builder) {
      throw new Error('This is abstract class.');
    }
  }

  reset() {
    throw new Error('This has to be implemented.');
  }

  setSeats(seats) {
    throw new Error('This has to be implemented.');
  }

  setEngine(engine) {
    throw new Error('This has to be implemented.');
  }

  setComputer(computer) {
    throw new Error('This has to be implemented.');
  }

  setGps(gps) {
    throw new Error('This has to be implemented.');
  }

  getResult() {
    throw new Error('This has to be implemented.');
  }
}

class CarBuilder extends Builder {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.car = new Car();
    return this;
  }

  setSeats(seats) {
    this.car.seats = seats;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setComputer(computer) {
    this.car.computer = computer;
    return this;
  }

  setGps(gps) {
    this.car.gps = gps;
    return this;
  }

  getResult() {
    const product = this.car;
    this.reset();
    return product;
  }
}

const carBuilder = new CarBuilder();
const coupe = carBuilder
  .setSeats(2)
  .setComputer('Star CPU')
  .setEngine('Thrust Engine')
  .setGps('Tune GPS')
  .getResult();
const suv = carBuilder
  .setComputer('Greg CPU')
  .setEngine('Berra Engines')
  .getResult();
console.log(coupe, suv);

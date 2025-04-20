/**
 * 데코레이터 패턴 (Decorator Pattern)
 *
 * 개요
 * 객체를 새로운 메소드가 포함된 래퍼(Wrapper) 객체로 감싸 객체의 행동을 확장하는 방식의 디자인 패턴.
 * (마트료시카같은 패턴이라고 생각하면 이해가 쉽다.)
 *
 * 장점
 * - 새로운 자식 클래스를 만들지 않고도 객체의 행동을 확장할 수 있다.
 * - 데코레이터 패턴을 적용한 객체를 여러 겹으로 감싸 객체의 행동을 합성할 수 있다.
 * - 런타임에 객체의 행동을 추가하거나 삭제할 수 있다.
 *
 * 용도
 * - 코드를 훼손하지 않고 런타임에 추가적인 행동을 객체에 할당해야 할 경우.
 * - 상속을 이용한 객체의 확장이 불가능할 경우.
 *   - 예: SMS와 Slack Facebook을 이용한 알림 클래스가 있을 때, 두가지 이상 수단을 동시에 이용한 알림 클래스를 생성하는 것 등등.
 *
 * 설계 방법 (유사 코드)
 * // 컴포넌트 클래스와 데코레이터 클래스를 아우르는 인터페이스 생성 (다형성 이용)
 * interface Component {
 *   public void operate();
 * }
 *
 * // 래핑 대상이 되는 컴포넌트 클래스 생성
 * class ConcreteComponent implements Component {
 *   public void operate() {
 *     ...;
 *   }
 * }
 *
 * // 기초 데코레이터 클래스 생성
 * // 이 클래스의 목적은 구상 데코레이터 클래스에 래핑된 컴포넌트 클래스에 대한 인터페이스를 제공하는 것이다
 * abstract class Decorator implements Component {
 *   // 래핑 대상의 인터페이스
 *   private Component component;
 *
 *   public constructor(Component component) {
 *     this.component = component;
 *   }
 *
 *   // 기초 데코레이터 클래스는 직접 구현하는게 아닌, 래핑의 대상인 컴포넌트 클래스에 행동을 위임한다
 *   // 구상 데코레이터 클래스는 추가적인 행동을 할 수 있다
 *   public void operate() {
 *     this.component.operate();
 *   }
 * }
 *
 * // 구상 데코레이터 클래스 생성
 * class ConcreteDecorator1 extends Decorator {
 *   public constructor(Component component) {
 *     super(component);
 *     ...;
 *   }
 *
 *   // 래핑된 객체를 상위 클래스의 위임을 통해 실행하고 추가적인 실행을 할 수 있다
 *   public void operate() {
 *     super.operate();
 *     ...;
 *   }
 * }
 *
 * class ConcreteDecorator2 extends Decorator {
 *   public constructor(Component component) {
 *     super(component);
 *     ...;
 *   }
 *
 *   // 래핑된 객체를 상위 클래스의 위임을 통해 실행하고 추가적인 실행을 할 수 있다
 *   public void operate() {
 *     super.operate();
 *     ...;
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

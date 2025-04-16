/**
 * 추상 팩토리 패턴 (Abstract Factory Pattern)
 *
 * 개요
 * 관련 있는 여러 객체들을 구상 클래스에 의존하지 않고 생성할 수 있게 해주는 디자인 패턴.
 * 팩토리 메소드 패턴과의 차이점은, 팩토리 메소드 패턴은 어떤 단일 객체를 생성할지를 자식 클래스에 위임하는 것이고, 추상 메소드 패턴은 서로 연관된 여러 객체를 하나의 제품군 단위로 생성한다는 차이가 있다.
 *
 * 장점
 * - 관련성 있는 여러 종류의 객체를 일관된 방식으로 생성하여 제품군끼리의 호환성을 보장한다.
 * - 클라이언트는 구상 클래스에 의존하지 않으므로, 어떤 구상 클래스를 사용하는지 알 필요도 없다.
 * - 제품군 교체 시 클라이언트 코드를 변경할 필요가 없다.
 *
 * 용도
 * - UI 테마 구성 요소같이, 제품군끼리 서로 호환되어야 하는 경우.
 * - macOS 전용 UI 컴포넌트와 Windows 전용 UI 컴포넌트처럼, 제품군이 통째로 바뀌어야 하는 경우.
 * - 객체 생성 코드를 클라이언트로부터 분리하고 싶을 경우.
 *
 * 설계 방법 (유사 코드)
 * // 구성 요소: AbstractFactory, AbstractProducts, ConcreteFactory, ConcreteProducts
 *
 * // 특정 그룹에 속하는 제품들을 통합된 제품군 인터페이스에 선언
 * interface AbstractUIButtonProduct { ...; }
 * interface AbstractUIAlarmProduct { ...; }
 *
 * // 추상 팩토리에 특정 그룹의 요소 객체들을 생성할 수 있는 메소드를 선언한다.
 * interface AbstractUIFactory {
 *   public AbstractUIButtonProduct createButton();
 *   public AbstractUIAlarmProduct createAlarm();
 * }
 *
 * class ConcreteWindowsUIButtonProduct implements AbstractUIButtonProduct { ...; }
 * class ConcreteWindowsAlarmProduct implements AbstractUIAlarmProduct { ...; }
 * class ConcreteMacOSUIButtonProduct implements AbstractUIButtonProduct { ...; }
 * class ConcreteMacOSAlarmProduct implements AbstractUIAlarmProduct { ...; }
 *
 * // 특정 그룹에 속하는 제품을 생성하는 구상 팩토리 클래스를 만든다.
 * class ConcreteWindowsUIFactory implements AbstractUIFactory {
 *   public AbstractUIButtonProduct createButton() {
 *     return new ConcreteWindowsUIButtonProduct();
 *   }
 *
 *   public AbstractUIAlarmProduct createAlarm() {
 *     return new ConcreteWindowsAlarmProduct();
 *   }
 * }
 *
 * class ConcreteMacOSUIFactory implements AbstractUIFactory {
 *   public AbstractUIButtonProduct createButton() {
 *     return new ConcreteMacOSUIButtonProduct();
 *   }
 *
 *   public AbstractUIAlarmProduct createAlarm() {
 *     return new ConcreteMacOSAlarmProduct();
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

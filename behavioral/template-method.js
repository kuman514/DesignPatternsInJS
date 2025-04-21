/**
 * 템플릿 메소드 패턴 (Template Method Pattern)
 *
 * 개요
 * 부모 클래스에서 알고리즘의 골격을 정의하지만, 해당 알고리즘의 골격을 변경하지 않고 자식 클래스가 알고리즘의 특정 단계를 재정의(오버라이드)할 수 있게 만드는 디자인 패턴.
 *
 * 장점
 * - 중복된 코드를 부모 클래스로부터 가져올 수 있다. 즉, 코드의 중복을 줄이고 코드의 재사용성을 확보할 수 있다.
 * - 핵심 알고리즘의 관리가 쉽다.
 * - 부모 클래스의 메소드만 보더라도 전체 동작 과정을 이해하기 쉽다.
 * - 클라이언트들이 대규모 알고리즘의 특정 단계만 오버라이드하여, 그들이 알고리즘의 다른 부분에 발생하는 변경의 영향을 덜 받게 할 수 있다.
 *
 * 용도
 * - 알고리즘의 특정 단계들만 확장시키고, 전체 알고리즘이나 알고리즘의 구조를 확장하는건 금지하고 싶을 경우.
 * - 약간의 차이가 있지만 결과적으로 거의 비슷한 알고리즘을 가진 여러 클래스가 존재할 경우.
 *
 * 설계 방법 (유사 코드)
 * abstract class TemplateHotBeverage {
 *   // 템플릿 메소드는 알고리즘의 골격을 정의한다
 *   public void prepare() {
 *     boilWater();
 *     brew();
 *     pourIntoCup();
 *     if (isCustomerWantsCondiments()) {
 *       addCondiments();
 *     }
 *   }
 *
 *   // 알고리즘의 일부 단계는 부모 클래스에서 바로 정의된다 (이를 기본 구현이라고 한다)
 *   public void boilWater() {
 *     console.log('Boiling water for beverage...');
 *     ...;
 *   }
 *   public void pourIntoCup() {
 *     console.log('Pouring beverage into cup...');
 *     ...;
 *   }
 *
 *   // 일부 단계는 추상 메소드로 남겨놓아 자식 클래스에서 정의하도록 만들 수도 있다
 *   public abstract void brew();
 *   public abstract void addCondiments();
 *
 *   // 훅(Hook) 메소드는 추상 부모 클래스에서 구현되긴 하지만, 기본적인 내용만 구현되어 있거나 아무 코드도 들어있지 않은 메소드이다
 *   // 특정 부분이 선택적으로 채용될 경우에 사용된다. 즉, 템플릿 메소드에서 발생한 조건에 반응할 기회를 자식 클래스에게 주어지는 것
 *   public boolean isCustomerWantsCondiments() {
 *     return true;
 *   }
 * }
 *
 * // 자식 클래스는 알고리즘의 모든 단계를 구현해야 하지만, 템플릿 메소드 자체를 오버라이딩해서는 안 된다
 * // 자식 클래스들은 기본 구현을 가진 일부 작업을 오버라이드할 수 있다
 * class Coffee extends TemplateHotBeverage {
 *   public void brew() {
 *     console.log('Dripping coffee with filter...');
 *     ...;
 *   }
 *
 *   public void addCondiments() {
 *     console.log('Adding milk and sugar...');
 *     ...;
 *   }
 *
 *   public boolean isCustomerWantsCondiments() {
 *     return false;
 *   }
 * }
 *
 * class Tea extends TemplateHotBeverage {
 *   public void brew() {
 *     console.log('Stipping tea...');
 *     ...;
 *   }
 *
 *   public void addCondiments() {
 *     console.log('Adding peach...');
 *     ...;
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

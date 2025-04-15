/**
 * 팩토리 메소드 패턴 (Factory Method Pattern)
 *
 * 개요
 * 부모 클래스에 아직 알려지지 않은 구체 클래스를 생성하며, 이를 이용해 자식 클래스가 어떤 객체를 생성할지 선택할 수 있게 만드는 패턴이다.
 * 팩토리 메소드에서 반환된 객체는 주로 제품(product)이라고 부른다.
 * 팩토리 메소드를 사용하는 코드를 클라이언트 코드라고 부른다.
 *
 * 장점
 * - 수많은 종류의 객체를 만들거나 추가할 때, 기존 코드의 수정 없이 확장이 가능하다.
 *
 * 용도
 * - 일반 고블린, 정예 고블린, 황금 고블린 등등의 고블린과 같이, 동일한 동작을 하는 다양한 종류의 객체를 생성해야 하는 경우.
 *   - 이런 경우, 심플 팩토리 패턴을 사용하거나 클라이언트 코드가 직접 객체를 생성하고 있었다면, 기존 코드를 대량 수정해야 했을 것이다.
 *
 * 설계 방법 (유사 코드)
 * // 원래 있었던 코이시 인형과 코이시 인형 팩토리
 * interface DollProduct {
 *   void quote();
 * }
 *
 * class KoishiDollProduct implements DollProduct {
 *   override public void quote() {
 *     speak('애기코이시 등장! 여보세요~ 나 메리에요~');
 *   }
 * }
 *
 * // 제품을 생성하는 부분은 추상 메소드로 선언하여, 자기만의 고유한 동작을 자식 팩토리 클래스가 수행하도록 만든다.
 * abstract class DollFactory {
 *   public DollProduct getDoll() {
 *     DollProduct doll = createDoll();
 *     doll.quote();
 *     return doll;
 *   }
 *
 *   protected abstract DollProduct createDoll();
 * }
 *
 * class KoishiDollFactory extends DollFactory {
 *   override protected DollProduct createDoll() {
 *     return new KoishiDollProduct();
 *   }
 * }
 *
 * // 이후 호시노 인형과 호시노 인형 팩토리가 필요할 때 기존 제품 생성 코드를 수정하지 않고 추가만 하여 필요를 충족시킬 수 있다.
 * class HoshinoDollProduct implements DollProduct {
 *   override public void quote() {
 *     speak('애기호시노 등장! 으헤~ 이 아저씨는 잠이 온다구~');
 *   }
 * }
 *
 * class HoshinoDollFactory extends DollFactory {
 *   override public DollProduct getDoll() {
 *     return new HoshinoDollProduct();
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

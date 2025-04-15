/**
 * 프로토타입 패턴 (Prototype Pattern)
 *
 * 개요
 * 실제로 복제되는 객체들에게 복제 동작을 위임하는 디자인 패턴.
 *
 * 장점
 * - 클래스의 내부 메소드나 멤버 변수를 알 수 없어도 그 클래스에 해당하는 객체를 복사할 수 있게 만든다.
 *
 * 용도
 * - 객체를 생성하는 고유의 비용이 불가피하게 큰 경우(예를 들어, DB에서 가져온 데이터 등등), 이 비용을 감내하지 않게 만들 수 있다.
 *
 * 설계 방법 (유사 코드)
 * interface Prototype {
 *   // 프로토타입 패턴을 따르는 객체가 스스로를 복제할 수 있도록 하는 메소드를 선언한다.
 *   public Prototype clone();
 * }
 *
 * class Data implements Prototype {
 *   ...;
 *   public Prototype clone() {
 *     // 객체의 멤버 데이터를 복제하는 로직을 clone에 작성한다.
 *     return new Data(this);
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

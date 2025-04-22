/**
 * 플라이웨이트 패턴 (Flyweight Pattern)
 *
 * 개요
 * 각 객체에 모든 데이터를 저장하는 대신, 여러 객체들 간 공통된 부분들을 공유하여 사용할 수 있는 RAM에 더 많은 객체를 포함할 수 있게 만드는 디자인 패턴.
 *
 * 장점
 * - 유사한 객체가 많을수록 RAM 용량을 절약할 수 있다.
 *   - 특히, 게임 내 파티클같은 부분에 활용하기 좋다.
 *
 * 용도
 * - 사용할 수 있는 RAM이 없어 RAM을 아껴야 할 경우.
 *   - 수많은 유사한 객체를 생성해야 할 경우.
 *   - 객체들이 사용할 수 있는 모든 RAM을 소모할 경우.
 *   - 객체들에게 여러가지 중복 상태가 포함되어 있으며, 이 상태들이 객체에서 추출되어 공유될 수 있을 경우.
 *
 * 설계 방법 (유사 코드)
 * // 플라이웨이트 클래스는 객체가 공유할 수 있는 원래 상태의 부분을 포함한다.
 * // 플라이웨이트 클래스 내에 저장된 상태는 고유한(Intrinsic) 상태이고, 플라이웨이트의 메소드로 전달된 상태는 공유한(Extrinsic) 상태라고 한다.
 * class Flyweight {
 *   private value repeatingState;
 *
 *   constructor(value state) {
 *     this.repeatingState = state;
 *   }
 *
 *   public void operate(value uniqueState) {
 *     ...;
 *   }
 * }
 *
 * // 플라이웨이트 팩토리는 기존에 존재하는 플라이웨이트의 풀을 관리한다.
 * // 클라이언트들이 플라이웨이트를 직접 만들지 않는 대신 플라이웨이트 팩토리를 이용하여 플라이웨이트 객체를 불러오거나 만들 수 있다.
 * class FlyweightFactory {
 *   private static Flyweight[] cache;
 *
 *   constructor() {
 *     this.cache = [];
 *   }
 *
 *   // 기존에 플라이웨이트 객체가 존재했다면 그걸 반환하고, 없을 경우 새로 만들어 캐시에 저장한다.
 *   public static Flyweight getFlyweight(value repeatingState) {
 *     if (this.cache[repeatingState] === null) {
 *       this.cache[repeatingState] = new Flyweight(repeatingState);
 *     }
 *     return this.cache[repeatingState];
 *   }
 * }
 *
 * class FlyweightContext {
 *   private value uniqueState;
 *   private Flyweight flyweight;
 *
 *   public constructor(value repeatingState, value uniqueState) {
 *     this.uniqueState = uniqueState;
 *     this.flyweight = FlyweightFactory.getFlyweight(repeatingState);
 *   }
 *
 *   public void operate() {
 *     this.flyweight.operate(this.uniqueState);
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

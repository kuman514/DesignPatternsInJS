/**
 * 어댑터 패턴 (Adapter Pattern)
 *
 * 개요
 * 호환되지 않는 두 인터페이스끼리 상호 연결되어 동작할 수 있도록 둘 사이에 변환기(어댑터) 역할을 부여하는 패턴.
 * 즉, 클라이언트가 기대하고 있는 인터페이스와 실제 사용하고자 하는 클래스의 인터페이스가 다를 때, 서로 연결시키는 역할을 하는 클래스의 패턴이다.
 *
 * 장점
 * - 클라이언트 코드를 수정하지 않고 재사용이 가능하다.
 * - 서로 다른 인터페이스 간 호환성을 지킨다.
 * - 변환 책임을 분리하므로, 단일 책임 원칙을 지킬 수 있다.
 *
 * 용도
 * - 기존 클라이언트 코드를 수정하지 않고 새로운 클래스를 사용하고 싶을 경우.
 * - 레거시 시스템과 최신 시스템을 호환시켜야 할 경우.
 *   - 예: XML만 반환시키는 레거시 API를 JSON을 사용하는 시스템에 적용시켜야 할 경우.
 * - 외부 라이브러리 또는 API가 기존 클라이언트 코드와 맞지 않을 경우.
 *
 * 설계 방법 (유사 코드)
 * // 기존 클라이언트 코드와 호환되는 클래스
 * class DefaultTarget {
 *   public operate(...) {
 *     ...;
 *   }
 *   ...;
 * }
 *
 * // 어댑터 대상 클래스
 * // 이 클래스를 사용하고 싶지만, 기존 클라이언트와 호환되지 않는다
 * class AdaptingTarget {
 *   public doSomethingLegacy(...) {
 *     ...;
 *   }
 *   ...;
 * }
 *
 * // 어댑터 대상 클래스가 기존 클라이언트 코드와 호환되도록 하는 어댑터 클래스
 * // 어댑터 클래스는 어댑터 대상을 감싸고 기존 클라이언트 코드와 호환되는 클래스처럼 동작하게 만듦
 * class Adapter extends DefaultTarget {
 *   private AdaptingTarget adaptingTarget;
 *
 *   public constructor(newAdaptingTarget: AdaptingTarget) {
 *     this.adaptingTarget = newAdaptingTarget;
 *   }
 *
 *   public operate(...) {
 *     ...;
 *     ... -> ,,,;
 *     ...;
 *     this.adaptingTarget.doSomethingLegacy(,,,);
 *   }
 *   ...;
 * }
 *
 * // 기존 클라이언트 코드
 * function runClient(target: DefaultTarget) {
 *   ...;
 *   target.operate(...);
 *   ...;
 * }
 *
 * // 기존 방식으로 동작
 * const target = new DefaultTarget();
 * runClient(target);
 *
 * // 호환되지 않는 클래스는 이를 감싸는 어댑터를 통해 동작시킨다
 * const adaptingTarget = new AdaptingTarget();
 * const adapter = new Adapter(adaptingTarget);
 * runClient(adapter);
 *
 * // 참고: 어댑터 클래스를 만들 땐, 어댑터가 너무 많아져 구조가 복잡해지거나, 성능 이슈가 발생하거나, 디버깅이 어려워짐에 주의해야 한다
 */

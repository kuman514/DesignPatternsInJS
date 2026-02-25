/**
 * 상태 패턴 (State Pattern)
 *
 * 개요
 * 어떤 객체(컨텍스트)의 각 상태를 클래스화하여 상태별로 다른 대응을 할 수 있게 만든 디자인 패턴.
 *
 * 장점
 * - 컨텍스트의 상태에 따른 행동을 그 메소드의 내부에 if-else나 switch문으로 분기를 세울 필요 없이 상태에 따라 그에 알맞는 대응을 할 수 있게 해준다.
 * - 상태를 추가하기 편리해진다.
 *   - 상태가 다양하지 않으면 이 디자인 패턴은 오히려 구조가 복잡하다.
 *
 * 용도
 * - 오디오 플레이어의 재생 상태나 문서의 승인 상태 등, 상태에 따라 객체의 행동을 변화시켜야 할 경우 등등.
 *
 * 설계 방법 (유사 코드)
 * // 상태의 공통적인 행동들을 인터페이스로 정의
 * interface State {
 *   protected Context context;
 *
 *   public constructor(Context context) {
 *     this.context = context;
 *   }
 *
 *   public abstract void doSomething1(...);
 *   public abstract void doSomething2(...);
 *   public abstract void doSomething3(...);
 *   ...;
 * }
 *
 * // 각 상태에 해당하는 클래스와 이에 알맞는 각종 행동을 정의
 * class PendingState extends State {
 *   ...;
 *   public void doSomething1(...) {
 *     ...;
 *     this.context.doPendingAction1(...);
 *   }
 *   public void doSomething2(...) {
 *     ...;
 *     this.context.doPendingAction2(...);
 *   }
 *   public void doSomething3(...) {
 *     ...;
 *     this.context.doPendingAction3(...);
 *   }
 *   ...;
 * }
 * class AcceptedState extends State {
 *   ...;
 *   public void doSomething1(...) {
 *     ...;
 *     this.context.doAcceptedAction1(...);
 *   }
 *   public void doSomething2(...) {
 *     ...;
 *     this.context.doAcceptedAction2(...);
 *   }
 *   public void doSomething3(...) {
 *     ...;
 *     this.context.doAcceptedAction3(...);
 *   }
 *   ...;
 * }
 * class RejectedState extends State {
 *   ...;
 *   public void doSomething1(...) {
 *     ...;
 *     this.context.doRejectedAction1(...);
 *   }
 *   public void doSomething2(...) {
 *     ...;
 *     this.context.doRejectedAction2(...);
 *   }
 *   public void doSomething3(...) {
 *     ...;
 *     this.context.doRejectedAction3(...);
 *   }
 *   ...;
 * }
 * ...;
 *
 * // 다양한 상태를 가지고 있는 컨텍스트 클래스 정의
 * class Context {
 *   private State state;
 *   ...;
 *
 *   public constructor(State state, ...) {
 *     this.state = state;
 *     ...;
 *   }
 *
 *   // 컨텍스트는 상태를 변경할 수 있어야 한다
 *   public void changeState(State newState) {
 *     this.state = newState;
 *   }
 *
 *   // 어떤 행동을 할지는 각 상태에 위임한다
 *   public void doSomething1(...) {
 *     this.state.doSomething1(...);
 *   }
 *   public void doSomething2(...) {
 *     this.state.doSomething2(...);
 *   }
 *   public void doSomething3(...) {
 *     this.state.doSomething3(...);
 *   }
 *   ...;
 *
 *   // 상태가 컨텍스트의 일부 메소드에 접근할 필요가 있다면 그렇게 할 수 있도록 한다
 *   public void doPendingAction1(...) { ...; }
 *   public void doPendingAction2(...) { ...; }
 *   public void doPendingAction3(...) { ...; }
 *   public void doAcceptedAction1(...) { ...; }
 *   public void doAcceptedAction2(...) { ...; }
 *   public void doAcceptedAction3(...) { ...; }
 *   public void doRejectedAction1(...) { ...; }
 *   public void doRejectedAction2(...) { ...; }
 *   public void doRejectedAction3(...) { ...; }
 *   ...;
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

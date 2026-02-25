/**
 * 메멘토 패턴 (Memento Pattern)
 *
 * 개요
 * 객체의 구현 세부사항을 공개하지 않으면서 객체의 이전 상태를 스냅샷 형태로 저장하고 복원할 수 있게 해주는 디자인 패턴.
 *
 * 장점
 * - 핵심이 되는 객체가 아닌 별도의 객체에 상태의 스냅샷을 저장할 수 있다.
 * - 캡슐화를 유지하면서 상태를 복구할 수 있다.
 *   - 상태를 너무 자주 저장하거나 저장된 상태 하나하나의 용량이 너무 크면 메모리 낭비가 심할 수 있음에 주의.
 *
 * 용도
 * - 실행 취소나 다시 실행같이 객체를 이전 상태로 복구할 수 있어야 하는 경우
 * - 게임 등등에서 세이브 포인트가 필요할 경우
 *
 * 설계 방법 (유사 코드)
 * // 상태 스냅샷 저장 및 복구의 대상이 되는 핵심 객체, 즉 오리지네이터를 정의.
 * // 오리지네이터는 현재 상태를 가지고 메멘토 객체로 저장하거나 메멘토 객체로부터 상태를 바꾼다.
 * class Originator {
 *   private value state;
 *
 *   public void setState(value newState) {
 *     this.state = newState;
 *   }
 *
 *   public Memento saveStateToMemento() {
 *     return new Memento(this.state);
 *   }
 *
 *   public void setStateFromMemento(Memento memento) {
 *     this.state = memento.getState();
 *   }
 * }
 *
 * // 오리지네이터의 상태를 저장하는 객체를 정의
 * class Memento {
 *   private value state;
 *
 *   public constructor(value newState) {
 *     this.state = newState;
 *   }
 *
 *   public value getState() {
 *     return this.state;
 *   }
 * }
 *
 * // 객체 상태(즉, 메멘토)의 순서를 저장하는 케어테이커 객체를 정의
 * class CareTaker {
 *   private Memento[] mementoList = [];
 *
 *   public void add(Memento memento) {
 *     this.mementoList.push(memento);
 *   }
 *
 *   public Memento get(int index) {
 *     return this.mementoList[index];
 *   }
 * }
 *
 * const careTaker = new CareTaker();
 * const originator = new Originator();
 *
 * // 오리지네이터의 상태를 저장하고 싶을 땐 케어테이커에 현재 상태를 저장하도록 한다.
 * careTaker.add(origiantor.saveStateToMemento());
 *
 * // 오리지네이터의 상태를 복구하고 싶을 땐 케어테이커에서 원하는 상태를 골라 가져와 상태를 설정하면 된다.
 * originator.setStateFromMemento(careTaker.get(...));
 */

// JavaScript 구현부는 추후 업데이트 예정

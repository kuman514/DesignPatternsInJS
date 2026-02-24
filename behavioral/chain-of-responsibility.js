/**
 * 책임 연쇄 패턴 (Chain Of Responsibility Pattern)
 *
 * 개요
 * 어떤 요청을 하나의 객체가 처리하는 것이 아닌, 서로 연결된 객체들끼리 자기가 처리할 수 없으면 체인으로 연결된 다른 객체에게 요청하는 방식의 디자인 패턴.
 * 즉, 어떤 요청을 처리하는 로직 자체를 객체화한 것이다.
 *
 * 장점
 * - 클라이언트는 처리 객체의 내부 구조를 알 필요가 없다.
 * - 각 체인 객체는 자신의 책임만 다 하면 되기 때문에, 새로운 요청에 대한 처리 객체 생성이 편리해진다.
 * - 클라이언트 코드를 변경하지 않고 동적으로 처리 순서를 정할 수 있어 유연성이 좋다.
 *
 * 용도
 * - 특정한 요청을 하나의 객체가 아닌 여러 객체가 확인해야 할 때
 * - 특정한 순서로 여러 객체가 요청을 처리해야할 경우
 * - 프로그램이 다양한 요청을 처리할 것으로 보이지만, 정확히 무엇을 어떤 순서로 처리할지 모를 경우
 * - 요청을 처리할 수 있는 집합이 동적으로 정의되어야 할 때 (즉, 체인 순서를 런타임에 결정해야 할 경우)
 *
 * 설계 방법 (유사 코드)
 * // 요청을 처리하는 객체를 생성
 * class Handler {
 *   // 다음 체인에 해당하는 요청 처리 객체
 *   protected Handler nextHandler;
 *
 *   // 다음 요청에 대한 처리 객체를 연결 및 체이닝을 위해 다음 핸들러 반환
 *   public Handler setNextHandler(Handler newNextHandler) {
 *     this.nextHandler = newNextHandler;
 *     return newNextHandler;
 *   }
 *
 *   // 자식 요청 처리 객체에서 구현될 메소드 추가
 *   protected void process(value data);
 *
 *   // 클라이언트에게 요청을 받을 수 있는 엔트리 메소드 추가
 *   public void request(value data) {
 *     this.process(data);
 *     if (this.nextHandler !== null) {
 *       // 다음 체인으로 연결된 요청 처리 객체가 있을 경우 해당 객체로 요청을 보냄
 *       this.nextHandler.request(data);
 *     }
 *   }
 * }
 *
 * class ConcreteHandler1 extends Handler { ... }
 * class ConcreteHandler2 extends Handler { ... }
 * class ConcreteHandler3 extends Handler { ... }
 *
 * const handler1 = new ConcreteHandler1();
 * const handler2 = new ConcreteHandler2();
 * const handler3 = new ConcreteHandler3();
 *
 * // 인스턴스로 만들어진 객체를 순서대로 연결 후 요청 실행
 * handler1.setNextHandler(handler2).setNextHandler(handler3)...;
 * handler1.request(...);
 */

// JavaScript 구현부는 추후 업데이트 예정

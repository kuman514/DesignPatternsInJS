/**
 * 프록시 패턴 (Proxy Pattern)
 *
 * 개요
 * 실제 객체의 역할을 대신 수행함으로써 실제 객체가 나타나기 전에도 객체를 참조할 수 있게 해주는 (즉, 어떤 객체의 대리자 역할을 하는) 객체에 대한 디자인 패턴.
 *
 * 장점
 * - 실제 객체가 메모리상에 올라가기 전에도 대리인 격 객체를 통해 참조할 수 있게 만든다.
 * - 원격 객체(로컬 환경이 아닌 다른 원격 저장소에 있는 객체)를 참조할 수 있다.
 * - 실제 객체의 메소드를 숨기고 인터페이스 노출로 접근 방법을 대체할 수 있다.
 * - 실제 객체에 대한 사전 처리를 할 수 있다.
 *
 * 용도
 * - 실제 객체가 정말 필요할 때까지 생성을 연기하면서, 해당 객체가 생성된 것처럼 동작하도록 만들고 싶을 경우. (이를 가상프록시라고 부른다.)
 * - 원격 객체에 대한 접근을 로컬 환경에서 제어함으로써, 마치 원격 객체가 동일한 로컬 환경에 있는 것처럼 만들고 싶을 경우. (이를 원격프록시라고 부른다.)
 * - 실제 객체에 접근하고자 하는 객체들의 접근을 제어하거나, 접근하는 객체마다 권한을 달리하고 싶을 경우. (이를 보호프록시라고 부른다.)
 *
 * 설계 방법 (유사 코드)
 * // 프록시 클래스가 실제 서비스인 것처럼 위장하기 위한 인터페이스
 * interface ServiceInterface {
 *   public void operate();
 * }
 *
 * // 어떤 유용한 비즈니스 로직을 제공하는 실제 서비스
 * class Service implements ServiceInterface {
 *   ...;
 *
 *   public void operate() {
 *     ...;
 *   }
 * }
 *
 * // 실제로 작동하는 서비스를 참조하는 프록시 객체
 * // 프록시 객체는 들어오는 요청을 초기화 지연, 로깅, 액세스 제어, 캐싱 등등으로 처리한 뒤, 실제 서비스에 처리된 요청을 보낸다
 * class Proxy implements ServiceInterface {
 *   private realService;
 *
 *   public constructor(Service service) {
 *     this.realService = service;
 *   }
 *
 *   public boolean isAccessable() {
 *     ...;
 *   }
 *
 *   public void operate() {
 *     if (!isAccessable()) {
 *       return;
 *     }
 *     this.realService.operate();
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

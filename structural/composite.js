/**
 * 컴포지트 패턴 (Composite Pattern)
 *
 * 개요
 * 트리처럼 계층적인 구조로 구성된 디자인 패턴. 단일 객체와 복함적인 객체를 동일하게 다룰 수 있게 해준다.
 *
 * 장점
 * - 재귀 구조 덕분에 트리 구조를 간결하게 표현할 수 있다.
 * - 클라이언트 입장에서 단일 객체든 복합적으로 이루어진 객체든 동일하게 다룰 수 있다.
 * - 개방/폐쇄 원칙을 준수한다.
 *
 * 용도
 * - 파일과 폴더로 이루어진 파일 시스템.
 * - 버튼, 뷰, 그룹 등등으로 이루어진 UI 컴포넌트.
 * - 선, 원, 그룹 등등으로 이루어진 그래픽 요소.
 *
 * 설계 방법 (유사 코드)
 * // 컴포넌트 인터페이스 작성
 * interface Component {
 *   public void operate(...);
 * }
 *
 * // 단일 개체 클래스 작성
 * class Single implements Component {
 *   public constructor(...) {
 *     super(...)
 *     ...;
 *   }
 *
 *   public void operate(...) {
 *     ...;
 *   }
 * }
 *
 * // 복합 객체 클래스 작성 (컴포지트)
 * class Composite implements Component {
 *   private Component[] children;
 *
 *   public constructor(...) {
 *     super(...);
 *     this.children = [];
 *     ...;
 *   }
 *
 *   public void add(Component newChild) {
 *     this.children.push(newChild);
 *   }
 *
 *   public void operate(...) {
 *     ...;
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

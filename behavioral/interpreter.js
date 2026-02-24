/**
 * 인터프리터 패턴 (Interpreter Pattern)
 *
 * 개요
 * 문법 규칙을 클래스로 표현한 디자인 패턴.
 * 즉, 반복되는 문제를 문장으로 정의하여, 정의된 문법에 따라 문장을 해석한다.
 *
 * 장점
 * - 문법을 클래스로 표현하기 때문에 쉽게 언어를 구현할 수 있다.
 * - 문법의 추가 및 구현이 쉽다.
 *   - 다만, 문법이 많고 복잡해질수록 관리할 클래스가 많아진다는 점에 주의해야 한다.
 *
 * 용도
 * - 정규식 또는 코드 등등의 어떤 표현에 대한 컴파일러나 파서(parser)를 만들고 싶을 경우 등등
 *
 * 설계 방법 (유사 코드)
 * // 문법을 해석하는데 쓰이는 공통적인 인터페이스를 작성
 * interface Expression {
 *   public abstract value interpret(Context context);
 * }
 *
 * // 해석 후 종결되는 말단 표현식
 * interface TerminalExpression extends Expression {
 *   ...;
 *   public value interpret(Context context) {
 *     ...;
 *   }
 * }
 *
 * // 해석 후 추가적으로 더 깊게 해석하는 표현식
 * interface NonterminalExpression extends Expression {
 *   private Expression childExpression1;
 *   private Expression childExpression2;
 *   private Expression childExpression3;
 *   ...;
 *
 *   public value interpret(Context context) {
 *     ...;
 *     // 해석한 표현들을 기반으로 결과를 내놓는다. 계산은 직접 구현할 수 있다.
 *     return operate(
 *       childExpression1.interpret(context),
 *       childExpression2.interpret(context),
 *       childExpression3.interpret(context)
 *     );
 *   }
 * }
 */

// JavaScript 구현부는 추후 업데이트 예정

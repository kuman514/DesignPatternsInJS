/**
 * 싱글톤 패턴 (Singleton Pattern)
 *
 * 개요
 * 생성자가 여러 번 호출되어도 객체는 단 한 개만 생성되며, 최초 객체 생성 이후 호출되는 생성자로부터는 최초로 생성된 객체를 리턴받게 되는 디자인 패턴이다.
 *
 * 장점
 * - 한 개의 인스턴스만을 메모리에 올리게 되므로, 메모리상의 이점이 크다.
 * - 이미 생성된 인스턴스를 사용하므로, 새 인스턴스 생성에 시간을 할애할 필요가 없어 시간상으로도 경제적이다.
 * - 전역에서 사용하는 인스턴스이므로, 다른 여러 클래스에서 데이터를 공유하기 쉽다.
 *   - 다만 이 경우, 동시성 문제가 발생할 수 있어, 이를 고려하며 설계해야 한다.
 *
 * 용도
 * - 프로그램 내에서 단 한 개의 인스턴스만 존재해야 할 경우
 * - 프로그램 내에서 여러 객체가 공유받아 사용해야 하는 인스턴스인 경우
 *
 * 설계 방법 (유사 코드)
 * class Singleton {
 *   // 객체의 인스턴스는 단 한 개만 존재해야 하므로 static으로 선언
 *   private static Singleton instance = null;
 *
 *   // 생성자를 외부에서 접근할 수 없도록 (객체를 외부에서 생성할 수 없도록) private로 만든다.
 *   private constructor(...) {
 *     ...;
 *   }
 *
 *   // 외부에서는 getInstance를 통해 instance를 받도록 한다.
 *   // instance가 null일 때만 새로운 인스턴스를 생성하고, 이후에는 기존에 있던 인스턴스를 리턴한다.
 *   public static Singleton getInstance(...) {
 *     if (instance === null) {
 *       instance = new Singleton(...);
 *     }
 *     return instance;
 *   }
 * }
 */

const Singleton = (() => {
  let instance = null;

  function SingletonClass(initialData = null) {
    if (instance) {
      return instance;
    }

    this.data = initialData;
    instance = this;
    return instance;
  }

  SingletonClass.prototype.getData = function () {
    return this.data;
  };

  SingletonClass.prototype.setData = function (newData) {
    this.data = newData;
  };

  return SingletonClass;
})();

const singleton = new Singleton('yasuo'); // 최초로 생성된 객체
const anotherSingleton = new Singleton('maverick'); // 최초로 생성된 객체가 이미 있으므로, 넘겨받은 파라미터는 무시된다.
console.log(singleton.getData(), anotherSingleton.getData()); // 둘 다 'yasuo'

singleton.setData('koishi'); // 데이터 변경
console.log(singleton.getData(), anotherSingleton.getData()); // 둘 다 'koishi'

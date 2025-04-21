/**
 * 이터레이터 패턴 (Iterator Pattern)
 *
 * 개요
 * 컬렉션의 형태(리스트, 스택, 트리 등등)를 노출시키지 않고 컬렉션의 엘리먼트들을 순차적으로 접근할 수 있게 해주는 디자인 패턴.
 * 즉, 형태에 상관없이 모든 엘리먼트들을 순회할 수 있게 만들어준다.
 *
 * 장점
 * - 클라이언트가 컬렉션의 형태를 알지 않아도 컬렉션 내 모든 엘리먼트들을 하나씩 순회하여 작업할 수 있다.
 * - 이터레이터 객체는 각자마다의 반복 상태가 있기 때문에, 컬렉션을 병렬적으로 순회할 수 있다. 즉, 클라이언트 마음대로 순회를 지연하거나 재개할 수 있다.
 *
 * 용도
 * - 컬렉션 내부에 복잡한 구현이 있으나, 이를 보안상 또는 편의상 클라이언트에 숨기고 싶을 경우.
 * - 앱 전체에서 컬렉션 순회 코드의 중복을 줄이고 싶을 경우.
 *
 * 설계 방법 (유사 코드)
 * // 모든 이터레이터에 대한 인터페이스
 * interface Iterator<T> {
 *   public T getNext();
 *   public boolean isHaveNext();
 * }
 *
 * // 이터레이터를 사용할 수 있는 (줄여서 순회 가능) 인터페이스
 * interface Iterable<T> {
 *   public Iterator<T> createIterator();
 * }
 *
 * // 순회 가능 콜렉션 구상 클래스
 * class IterableCollection<T> implements Iterable<T> {
 *   private Collection<T> collection;
 *
 *   public constructor() {
 *     this.collection = new Collection<T>();
 *   }
 *
 *   public T getCollectionNode(int index) {
 *     return this.collection[index];
 *   }
 *
 *   public int getLength() {
 *     return this.collection.length;
 *   }
 *
 *   public void appendCollectionNode(T newNode) {
 *     this.collection.add(newNode);
 *   }
 *
 *   public Iterator<T> createIterator() {
 *     return new CollectionIterator<T>(this);
 *   }
 * }
 *
 * // 구상 이터레이터 클래스
 * class CollectionIterator<T> implements Iterator<T> {
 *   private IterableCollection<T> iterableCollection;
 *
 *   // 이터레이터는 다른 이터레이터들과 별도로 순회하므로 각 이터레이터는 자신의 상태가 저장되어야 한다
 *   private int currentPosition;
 *
 *   public constructor(IterableCollection<T> targetCollection) {
 *     this.iterableCollection = targetCollection;
 *     this.currentPosition = 0;
 *   }
 *
 *   public T getNext() {
 *     T currentNode = this.iterableCollection.getNode(this.currentPosition);
 *     this.currentPosition++;
 *     return currentNode;
 *   }
 *
 *   public boolean isHaveNext() {
 *     return this.currentPosition < this.iterableCollection.getLength();
 *   }
 * }
 */

class Iterator {
  constructor() {
    if (this.constructor === Iterator) {
      throw new Error('This is abstract class.');
    }
  }

  getNext() {
    throw new Error('This has to be implemented.');
  }

  isHaveNext() {
    throw new Error('This has to be implemented.');
  }
}

class Iterable {
  constructor() {
    if (this.constructor === Iterable) {
      throw new Error('This is abstract class.');
    }
  }

  createIterator() {
    throw new Error('This has to be implemented.');
  }
}

class IterableCollection extends Iterable {
  constructor() {
    super();
    this.collection = [];
  }

  getCollectionNode(index) {
    return this.collection[index];
  }

  getLength() {
    return this.collection.length;
  }

  appendCollectionNode(newNode) {
    this.collection.push(newNode);
  }

  createIterator() {
    return new CollectionIterator(this);
  }
}

class CollectionIterator extends Iterator {
  constructor(collection) {
    super();
    this.iterableCollection = collection;
    this.currentPosition = 0;
  }

  getNext() {
    const currentNode = this.iterableCollection.getCollectionNode(
      this.currentPosition
    );
    this.currentPosition++;
    return currentNode;
  }

  isHaveNext() {
    return this.currentPosition < this.iterableCollection.getLength();
  }
}

const stringCollection = new IterableCollection();

stringCollection.appendCollectionNode('John Cena');
stringCollection.appendCollectionNode('Alberto Del Rio');
stringCollection.appendCollectionNode('Yasuo');
stringCollection.appendCollectionNode('Cody Rhodes, not Cody Rose');
stringCollection.appendCollectionNode('Koishi Komeiji');

const stringCollectionIterator1 = stringCollection.createIterator();
const stringCollectionIterator2 = stringCollection.createIterator();

while (stringCollectionIterator1.isHaveNext()) {
  console.log(stringCollectionIterator1.getNext());
}

while (stringCollectionIterator2.isHaveNext()) {
  console.log(stringCollectionIterator2.getNext());
}

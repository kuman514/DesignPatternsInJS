/**
 * 옵저버 패턴 (Observer Pattern)
 *
 * 개요
 * 객체의 상태 변화를 관찰할 수 있게 만드는 디자인 패턴.
 * 객체의 상태가 변화할 때 연관된 다른 객체들에게 알림을 보낼 수 있게 한다.
 * 상태 변화를 알리는 측이 배포자(Publisher)이고, 상태 변화를 알림받는 측이 구독자(Subscriber)이다.
 *
 * 장점
 * - (개방/폐쇄 원칙을 준수한다.)
 * - 배포자의 코드를 건들지 않고도 새로운 구독자 클래스를 형성할 수 있게 해준다.
 * - 반대로, 배포자 인터페이스가 있을 경우, 구독자의 코드를 건들지 않고도 새로운 배포자 클래스를 형성할 수 있게 해준다.
 *
 * 용도
 * - 한 객체의 상태가 변경되어 다른 객체를 갱신해야 할 필요성이 발생할 경우.
 *   - 예를 들어, React의 useState 등등.
 * - 앱의 일부 객체들이 특정 시간이나 조건 하에서 다른 객체들을 관찰해야 할 경우.
 *
 * 설계 방법 (유사 코드)
 * // 구독 관계를 관리하는 클래스 선언
 * class EventManager {
 *   private HashMap<string, HashMap<id extends string | number, Subscriber>> subscribers;
 *
 *   public void subscribe(string eventType, Subscriber newSubscriber) {
 *     subscribers[eventType].add(newSubscriber.id, newSubscriber);
 *   }
 *
 *   public void unsubscribe(string eventType, Subscriber subscriber) {
 *     subscribers[eventType].remove(subscriber.id);
 *   }
 *
 *   public void notify(string eventType, value data) {
 *     subscribers[eventType].forEach((subscriber) => {
 *       subscriber.update(data);
 *     })
 *   }
 * }
 *
 * // 출판사 클래스
 * class Publisher {
 *   public EventManager eventManager;
 *
 *   public constructor() {
 *     this.eventManager = new EventManager();
 *   }
 *
 *   // 신규 비디오나 커뮤니티 게시물 등, 새로운 변경 사항에 대해 구독자들에게 알리는 비즈니스 로직을 수행
 *   public notifyNewVideo(Video newVideo) {
 *     this.eventManager.notify('new-video', newVideo);
 *   }
 *
 *   public notifyCommunityPost(CommunityPost newPost) {
 *     this.eventManager.notify('community-post', newPost);
 *   }
 * }
 *
 * // 구독자 인터페이스 선언
 * interface Subscriber {
 *   // update같은 구독자가 알림을 받는 메소드가 존재해야 한다
 *   public void update(value data);
 * }
 *
 * // 구상된 구독자들은 연결된 출판사가 발행한 알림에, 각자의 비즈니스 로직에 따라 반응합니다.
 * class VideoSubscriber implements Subscriber {
 *   private NotificationStorage notificationStorage;
 *
 *   public constructor() {
 *     this.notificationStorage = new NotificationStorage();
 *   }
 *
 *   public void update(value data) {
 *     this.notificationStorage.add({
 *       title: '${data.videoBy.name}님의 새로운 비디오가 등록되었어요!',
 *       open: 'YouTube',
 *       openAt: data.openAt,
 *       ...,
 *     });
 *   }
 * }
 *
 * class CommunityPostSubscriber implements Subscriber {
 *   private NotificationStorage notificationStorage;
 *
 *   public constructor() {
 *     this.notificationStorage = new NotificationStorage();
 *   }
 *
 *   public void update(value data) {
 *     this.notificationStorage.add({
 *       title: '${data.writtenBy.name}님의 새로운 커뮤니티 포스트!',
 *       open: 'YouTube',
 *       openAt: data.postUrl,
 *       ...,
 *     });
 *   }
 * }
 */

class EventManager {
  constructor() {
    this.eventManager = new Map();
  }

  subscribe(eventType, newSubscriber) {
    if (!this.eventManager.has(eventType)) {
      this.eventManager.set(eventType, new Map());
    }
    this.eventManager.get(eventType).set(newSubscriber.id, newSubscriber);
  }

  unsubscribe(eventType, subscriber) {
    if (!this.eventManager.has(eventType)) {
      return;
    }
    this.eventManager.get(eventType).delete(subscriber.id);
  }

  notify(eventType, data) {
    if (!this.eventManager.has(eventType)) {
      return;
    }
    this.eventManager.get(eventType).forEach((subscriber) => {
      subscriber.update(data);
    });
  }
}

class Publisher {
  constructor() {
    this.eventManager = new EventManager();
  }

  notifyNewVideo(newVideo) {
    this.eventManager.notify('new-video', newVideo);
  }

  notifyCommunityPost(newPost) {
    this.eventManager.notify('community-post', newPost);
  }
}

class Subscriber {
  constructor() {
    if (this.constructor === Subscriber) {
      throw new Error('This is abstract class.');
    }
  }

  update(data) {
    throw new Error('This has to be implemented.');
  }
}

class VideoSubscriber extends Subscriber {
  constructor(id) {
    super();
    this.id = id;
    this.message = console.log;
  }

  update(data) {
    this.message(
      `Video - To subscriber ${this.id}: ${data.uploadedBy} has uploaded a new video ${data.title}!`
    );
  }
}

class CommunityPostSubscriber extends Subscriber {
  constructor(id) {
    super();
    this.id = id;
    this.message = console.log;
  }

  update(data) {
    this.message(
      `Post - To subscriber ${this.id}: ${data.writtenBy} has written a new community post ${data.title}!`
    );
  }
}

// 클라이언트 코드
const publisher = new Publisher();
publisher.eventManager.subscribe(
  'new-video',
  new VideoSubscriber('Koishi Komeiji')
);
publisher.eventManager.subscribe(
  'new-video',
  new VideoSubscriber('Hoshino Takanashi')
);
publisher.eventManager.subscribe(
  'community-post',
  new CommunityPostSubscriber('Hoshino Takanashi')
);
publisher.eventManager.subscribe(
  'community-post',
  new CommunityPostSubscriber('Yasuo Maverick')
);
publisher.notifyNewVideo({
  title: '탑건 매버릭',
  uploadedBy: '야스오매버릭',
});
publisher.notifyCommunityPost({
  title: '야스오는 과학이다!',
  writtenBy: '야스오의 과학교실',
});

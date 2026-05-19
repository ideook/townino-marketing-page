import type { ReactNode } from "react";

const positioningCards = [
  {
    icon: "manual",
    title: "매장 설명서에서 시작합니다.",
    text: "광고, 게시글, 해시태그 전에 우리 매장의 장점, 메뉴의 이유, 가격 기준, 자주 받는 질문을 먼저 정리합니다.",
  },
  {
    icon: "cycle",
    title: "가게 변화에 맞춰 계속 정리합니다.",
    text: "메뉴가 바뀌고 리뷰가 쌓이고 계절이 달라질 때마다 설명서와 채널별 문구를 업데이트합니다.",
  },
  {
    icon: "task",
    title: "작은 실행 과제로 이어지게 합니다.",
    text: "정리된 이야기를 월간 콘텐츠 주제, 공지와 이벤트 문구, 리뷰 답글 초안, 검색과 AI가 이해하기 좋은 정보로 바꿉니다.",
  },
] as const;

const icons: Record<(typeof positioningCards)[number]["icon"], ReactNode> = {
  manual: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 4h9l3 3v13H6z" />
      <path d="M15 4v4h4" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
    </svg>
  ),
  cycle: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 8a6 6 0 0 1 10-1" />
      <path d="M17 7V3h4" />
      <path d="M17 16a6 6 0 0 1-10 1" />
      <path d="M7 17v4H3" />
    </svg>
  ),
  task: (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 19 19 5" />
      <path d="M12 5h7v7" />
      <path d="M5 8h5" />
      <path d="M5 12h3" />
    </svg>
  ),
};

export function TowninoPositioningSection() {
  return (
    <section className="section positioning-section" aria-labelledby="positioning-title">
      <div className="container positioning-layout">
        <h2 id="positioning-title">Townino는 광고 대행사가 아니라, 매장을 위한 구독형 마케팅 코치입니다.</h2>

        <p className="positioning-lead">
          올린 콘텐츠를 꾸미기 전에, 올릴 수 있는 이야기가 생기도록 돕습니다.
        </p>

        <div className="icon-grid positioning-card-grid" aria-label="Townino의 역할">
          {positioningCards.map((card) => (
            <article className="icon-card positioning-card" key={card.title}>
              <span className="line-icon">{icons[card.icon]}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

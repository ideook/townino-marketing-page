import {
  Footer,
  TopBar,
} from "@/components/daybreak-system";
import { TowninoFinalCta } from "@/components/townino-final-cta";
import { TowninoIndustryExamples } from "@/components/townino-industry-examples";
import { TowninoPositioningSection } from "@/components/townino-positioning-section";
import { TowninoUseCaseShowcase } from "@/components/townino-use-case-showcase";

const openaiHeroTitle = (
  <>
    사장님이 매일 하는 일을,
    <br />
    고객이 이해하는
    <br />
    마케팅으로.
  </>
);

const problemQuotes = [
  "사진은 찍어놨는데, 뭐라고 설명해야 할지 모르겠어요.",
  "메뉴는 많은데, 왜 이걸 먹어야 하는지 말로 잘 못 쓰겠어요.",
  "리뷰는 계속 쌓이는데, 어디를 고쳐야 할지 정리가 안 돼요.",
  "공지나 이벤트는 할 때마다 처음부터 새로 쓰는 느낌이에요.",
  "네이버, 구글, 카카오, 인스타에 올린 정보가 서로 다 달라요.",
  "컨설팅은 받아봤는데, 시간이 지나면 다시 막혀요.",
] as const;

const manualItems = [
  "매장 소개",
  "대표 메뉴와 서비스 설명",
  "가격과 구성의 이유",
  "고객이 자주 묻는 질문",
  "사장님의 운영 철학",
  "리뷰에서 발견한 장점과 불편",
  "공지와 이벤트 템플릿",
  "네이버·구글·카카오·인스타용 소개 문구",
] as const;

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <section className="hero-version hero-openai">
          <div className="hero-openai-frame">
            <div className="hero-openai-copy">
              <p className="openai-eyebrow">Townino for Local Business</p>
              <h1>{openaiHeroTitle}</h1>
              <p className="openai-description">
                Townino는 매장의 장점, 메뉴, 가격, 공지, 리뷰, 운영 이야기를
                ‘매장 설명서’로 정리하고, 검색과 SNS에 쓸 수 있는 콘텐츠로
                바꿔주는 소상공인 구독형 마케팅 코치입니다.
              </p>
              <a className="button button-dark" href="#callout">
                상담 문의
              </a>
            </div>

            <img
              className="hero-openai-image"
              src="/townino-openai-hero.png"
              alt="여러 소상공인 매장이 나란히 있는 동네 거리"
              width="941"
              height="941"
            />
          </div>
        </section>

        <section
          className="section problem-quote-card-section"
          aria-labelledby="problem-quote-card-title"
        >
          <div className="container problem-quote-card-layout">
              <div className="problem-quote-card-copy">
                <h2 id="problem-quote-card-title">
                  마케팅 서비스는 많지만, 사장님은 여전히 뭘 올려야 할지 모릅니다.
                </h2>
              <div className="problem-quote-card-body">
                <p>
                  해시태그 추천, 자동 발행, 노출 최적화.
                  <br />
                  좋은 기능은 많습니다.
                </p>
                <p>하지만 많은 소상공인은 그 이전 단계에서 막힙니다.</p>
                <p>
                  오늘 어떤 이야기를 올려야 할지,
                  <br />
                  메뉴를 어떻게 설명해야 할지,
                  <br />
                  우리 가게의 장점을 어떤 말로 써야 할지,
                  <br />
                  네이버와 인스타에는 각각 뭐라고 써야 할지 모릅니다.
                </p>
              </div>
            </div>

            <div className="problem-quote-card-grid" aria-label="인용 카드 문제 리스트">
              {problemQuotes.map((quote) => (
                <figure className="problem-quote-card" key={quote}>
                  <blockquote>{quote}</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section philosophy-section" aria-labelledby="philosophy-title">
          <div className="container philosophy-layout">
            <h2 id="philosophy-title">
              마케팅은 한 번 만드는 것이 아니라, 계속 설명하는 일입니다.
            </h2>

            <div className="philosophy-copy">
              <p>가게는 매일 바뀝니다.</p>
              <p>
                새로운 메뉴, 가격, 고객 질문, 리뷰, 공지도 계속 달라집니다.
                <br />
                하지만 대부분의 매장 소개는 한 번 적고 멈춰 있습니다.
              </p>
              <p className="philosophy-pivot">
                Townino는 이 변화를 ‘매장 설명서’로 정리합니다.
              </p>
              <p>
                매장 설명서는 가게의 장점, 메뉴의 이유, 가격 기준,
                고객 응대 방식,
                <br />
                자주 받는 질문과 리뷰 반응을 모은 우리 매장의 마케팅
                원본입니다.
              </p>
              <p>
                한 번 정리한 설명서는 검색 노출, SNS 콘텐츠, 공지, 리뷰 답변,
                상담 문구로 계속 활용됩니다.
              </p>
            </div>

            <div className="manual-items" aria-label="매장 설명서에 들어가는 항목">
              {manualItems.map((item) => (
                <div className="manual-item" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TowninoUseCaseShowcase />

        <TowninoIndustryExamples />

        <TowninoPositioningSection />

        <TowninoFinalCta />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 5000;
const TICK_MS = 100;

type UseCase = {
  title: string;
  description: string;
  input: string;
  outputTitle: string;
  outputs: readonly string[];
  channel: string;
};

const useCases: readonly UseCase[] = [
  {
    title: "매장 정보 정리",
    description:
      "네이버, 구글, 카카오, 인스타에 필요한 매장 소개, 영업시간, 메뉴, 가격, 안내 문구를 정리합니다.",
    input: "영업시간이 바뀌었고 예약 안내도 같이 고쳐야 해요.",
    outputTitle: "채널별 매장 정보",
    outputs: ["네이버 플레이스 소개", "구글 비즈니스 문구", "카카오 채널 안내", "인스타 프로필 설명"],
    channel: "Store profile",
  },
  {
    title: "콘텐츠 초안 생성",
    description:
      "사장님의 짧은 입력을 바탕으로 인스타 게시글, 블로그 글, 플레이스 새소식, 카카오채널 공지를 만듭니다.",
    input: "이번 주부터 봄 한정 메뉴를 시작해요.",
    outputTitle: "이번 주 콘텐츠 초안",
    outputs: ["인스타 게시글", "블로그 도입 문장", "플레이스 새소식", "카카오채널 공지"],
    channel: "Content draft",
  },
  {
    title: "메뉴·서비스 설명 개선",
    description:
      "단순한 메뉴명과 가격표를 고객이 이해할 수 있는 설명으로 바꿉니다.",
    input: "대표 메뉴는 있는데 손님이 차이를 잘 몰라요.",
    outputTitle: "고객이 이해하는 메뉴 설명",
    outputs: ["대표 메뉴 한 줄 설명", "추천 대상", "가격 구성의 이유", "주문 전 안내"],
    channel: "Menu story",
  },
  {
    title: "리뷰 답글과 반응 분석",
    description:
      "고객 리뷰에 대한 답글 초안을 만들고, 반복되는 칭찬과 불편을 매장 개선 포인트로 정리합니다.",
    input: "최근 리뷰에서 대기 시간이 자주 언급돼요.",
    outputTitle: "리뷰 반응 정리",
    outputs: ["답글 초안", "반복 칭찬", "반복 불편", "개선 메시지"],
    channel: "Review insight",
  },
  {
    title: "월간 마케팅 코칭",
    description:
      "이번 달 올릴 콘텐츠, 바꿔야 할 설명, 정리해야 할 공지, 고객에게 더 잘 전달할 메시지를 제안합니다.",
    input: "이번 달에는 어떤 이야기를 올리면 좋을까요?",
    outputTitle: "월간 실행 제안",
    outputs: ["이번 달 콘텐츠 주제", "수정할 소개 문구", "필요한 공지", "강조할 고객 메시지"],
    channel: "Monthly coaching",
  },
  {
    title: "지역·업종별 채널 연결",
    description:
      "@townino_송파_네일샵 같은 지역·업종별 채널을 통해 매장 정보를 더 쉽게 발견되도록 돕습니다.",
    input: "우리 동네에서 찾는 고객에게 더 잘 보이고 싶어요.",
    outputTitle: "발견 채널 연결",
    outputs: ["지역·업종 채널", "매장 핵심 정보", "대표 서비스 요약", "검색용 소개 문구"],
    channel: "Local channel",
  },
] as const;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

export function TowninoUseCaseShowcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const activeUseCase = useMemo(() => useCases[activeIndex], [activeIndex]);
  const shouldAdvance = isVisible && !prefersReducedMotion;

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAdvance) return;

    const timerId = window.setInterval(() => {
      const nextProgress = progressRef.current + (TICK_MS / AUTO_ADVANCE_MS) * 100;

      if (nextProgress >= 100) {
        progressRef.current = 0;
        setProgress(0);
        setActiveIndex((currentIndex) => (currentIndex + 1) % useCases.length);
        return;
      }

      progressRef.current = nextProgress;
      setProgress(nextProgress);
    }, TICK_MS);

    return () => window.clearInterval(timerId);
  }, [shouldAdvance]);

  const handleSelect = (index: number) => {
    progressRef.current = 0;
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section
      ref={rootRef}
      className="section usecase-section"
      aria-labelledby="usecase-title"
    >
      <div className="container usecase-layout">
        <h2 id="usecase-title">Townino가 매장의 말을 마케팅으로 바꿉니다.</h2>

        <div className="usecase-showcase">
          <div className="usecase-list" aria-label="Townino 활용 기능">
            {useCases.map((useCase, index) => {
              const isActive = index === activeIndex;
              const isPreview = index === previewIndex;
              const isDimmed =
                previewIndex !== null && index !== previewIndex && index !== activeIndex;
              const panelId = `usecase-panel-${index}`;
              const triggerId = `usecase-trigger-${index}`;

              return (
                <div
                  className={`usecase-item${isActive ? " is-active" : ""}${
                    isPreview ? " is-preview" : ""
                  }${isDimmed ? " is-dimmed" : ""}`}
                  key={useCase.title}
                  onBlur={(event) => {
                    const nextTarget = event.relatedTarget;
                    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                      setPreviewIndex(null);
                    }
                  }}
                  onFocus={() => setPreviewIndex(index)}
                  onMouseEnter={() => setPreviewIndex(index)}
                  onMouseLeave={() => setPreviewIndex(null)}
                >
                  <button
                    aria-controls={panelId}
                    aria-expanded={isActive}
                    className="usecase-trigger"
                    disabled={isActive}
                    id={triggerId}
                    onClick={() => handleSelect(index)}
                    type="button"
                  >
                    <span>{useCase.title}</span>
                  </button>
                  <div
                    aria-hidden={!isActive}
                    aria-labelledby={triggerId}
                    className={`usecase-content${isActive ? " is-open" : ""}`}
                    id={panelId}
                  >
                    <p>{useCase.description}</p>
                  </div>
                  <div className="usecase-indicator" aria-hidden="true">
                    <span className="usecase-indicator-track" />
                    <span
                      className="usecase-indicator-progress"
                      style={{ transform: `scaleX(${isActive ? progress / 100 : 0})` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="usecase-visual" aria-live="polite">
            <div className="usecase-visual-surface">
              <div className="usecase-window-bar">
                <span />
                <span />
                <span />
                <p>{activeUseCase.channel}</p>
              </div>

              <div className="usecase-visual-grid">
                <div className="usecase-input-card">
                  <p className="usecase-card-label">사장님 입력</p>
                  <p>{activeUseCase.input}</p>
                </div>

                <div className="usecase-output-card">
                  <p className="usecase-card-label">Townino 결과</p>
                  <h3>{activeUseCase.outputTitle}</h3>
                  <div className="usecase-output-list">
                    {activeUseCase.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                </div>

                <div className="usecase-preview-card">
                  <p className="usecase-card-label">활용 채널</p>
                  <div className="usecase-channel-row">
                    <span>네이버</span>
                    <span>인스타</span>
                    <span>카카오</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

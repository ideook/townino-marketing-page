const industryExamples = [
  {
    industry: "카센터",
    input: "브레이크 패드 교체. 소리 나면 점검 필요.",
    output:
      "브레이크를 밟을 때 끼익 소리가 나거나 제동감이 약해졌다면 브레이크 패드 마모를 점검해야 할 수 있습니다. Townino는 이 내용을 네이버 소개, 인스타 게시글, 고객 안내 FAQ로 바꿉니다.",
  },
  {
    industry: "네일샵",
    input: "유지력 좋은 젤네일. 손톱 상태 보고 시술.",
    output:
      "손톱이 얇거나 들뜸이 잦은 고객에게는 손톱 상태를 먼저 확인한 뒤 유지력에 맞는 베이스와 디자인을 제안합니다. 단순히 예쁜 디자인보다 오래 유지되는 시술을 중요하게 생각합니다.",
  },
  {
    industry: "학원",
    input: "중등 수학. 개별 진도. 테스트 후 반 배정.",
    output:
      "학생마다 부족한 단원과 속도가 다르기 때문에 입학 전 진단 테스트를 통해 현재 실력을 확인하고, 개별 진도에 맞춰 수업을 설계합니다. 학부모에게는 학습 진행 상황을 정기적으로 안내합니다.",
  },
  {
    industry: "음식점",
    input: "직접 끓인 육수. 점심 메뉴.",
    output:
      "매일 매장에서 직접 끓인 육수를 사용해 점심시간에도 부담 없이 든든하게 먹을 수 있는 메뉴를 준비합니다. 혼밥 고객과 직장인 점심 고객에게 특히 추천합니다.",
  },
] as const;

const industryTitle = "음식점뿐 아니라, 설명이 필요한 모든 동네 가게를 위해.";

export function TowninoIndustryExamples() {
  return (
    <section
      className="section industry-compact-center-section"
      aria-labelledby="industry-compact-center-title"
    >
      <div className="container industry-layout">
        <h2 id="industry-compact-center-title">{industryTitle}</h2>

        <div className="industry-compact-center-grid">
          {industryExamples.map((example) => (
            <article className="industry-compact-center-card" key={example.industry}>
              <h3>{example.industry}</h3>
              <p className="industry-compact-input">{example.input}</p>
              <p className="industry-compact-output">{example.output}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

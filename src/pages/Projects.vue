<template>
  <section class="project">
    <h1>주요 프로젝트</h1>

    <div class="project__tabs">
      <button
        type="button"
        :class="['project__tab-btn', { active: activeTab === 'career' }]"
        @click="activeTab = 'career'"
      >프로젝트</button>
      <button
        type="button"
        :class="['project__tab-btn', { active: activeTab === 'ai' }]"
        @click="activeTab = 'ai'"
      >AI 협업 방식</button>
    </div>

    <template v-if="activeTab === 'career'">
    <!-- project 1 -->
    <div class="project__item">
      <h3 class="project__name">CJ 온스타일</h3>
      <ul class="project__meta">
        <li>- 25.05 ~ ing</li>
        <li>- Vue.js / Nuxt.js / Typescript</li>
      </ul>
      <div class="project__details">
        <ul>
          <li class="sub_con">
            <div class="sub_txt">
            <div class="tit">오픈예정상품 알림 기능 개발 — 상품상세</div>
              <ul>
                <li>
                ▶ 핵심 컴포넌트 확장 설계
                <p>
                    - 기존에 있는 구매하기 버튼 컴포넌트에 오픈 전 상품 분기를 추가해 <em>'오픈예정상품' 알림 신청</em>기능 추가해 로직 확장
                </p>
                <p>
                    - 운영 중인 핵심 컴포넌트인 만큼 <em>기존 동작을 기본 경로(else)로 보존</em>하는 분기 설계로 구매 플로우 영향도 최소화
                </p>
                </li>
                <li>
                ▶ 엣지 케이스 대응
                  <p>
                      - 오픈 시각 심야 여부 판별(야간 알림 정책), 하위 버전 앱 분기 등 <em>엣지 케이스 포함 구현</em>
                  </p>
                </li>
                <li>
                ▶ 웹-앱 연동
                  <p>
                    - 알림 신청/취소 <em>앱 네이티브 인터페이스를 신규 정의</em>하고 웹-앱 연동 구현
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li class="dgm-item">
            <div class="dgm">
              <div class="dgm-source">
                <strong>쿠폰 다운로드 공통 컴포넌트</strong>
                <span>독립 설계 · 쿠폰 다운로드 + 브랜드찜 연동</span>
              </div>
              <div class="dgm-trunk"></div>
              <div class="dgm-branch"></div>
              <div class="dgm-modules">
                <div class="dgm-mod">
                  <div class="dgm-drop"></div><div class="dgm-head"></div>
                  <div class="dgm-card">
                    <div class="bar"></div><div class="img"></div>
                    <div class="line"></div><div class="line short"></div>
                    <div class="dgm-slot">쿠폰 컴포넌트</div>
                  </div>
                  <div class="dgm-mod-name">모듈 A</div>
                </div>
                <div class="dgm-mod">
                  <div class="dgm-drop"></div><div class="dgm-head"></div>
                  <div class="dgm-card">
                    <div class="bar"></div>
                    <div class="line"></div><div class="line"></div><div class="line short"></div>
                    <div class="img"></div>
                    <div class="dgm-slot">쿠폰 컴포넌트</div>
                  </div>
                  <div class="dgm-mod-name">모듈 B</div>
                </div>
                <div class="dgm-mod is-variant">
                  <div class="dgm-drop"></div><div class="dgm-head"></div>
                  <div class="dgm-card">
                    <div class="bar"></div><div class="img"></div>
                    <div class="line short"></div><div class="line"></div>
                    <div class="dgm-slot">쿠폰 컴포넌트<span class="dgm-badge">분기</span></div>
                  </div>
                  <div class="dgm-mod-name">모듈 C</div>
                  <div class="dgm-mod-note">상이한 API → 분기 처리로 수용</div>
                </div>
              </div>
              <p class="dgm-caption">하나의 독립 컴포넌트를 여러 모듈에서 재사용 — 상이한 API는 분기로 확장</p>
            </div>
          </li>
          <li class="sub_con">
            <div class="sub_txt">
            <div class="tit">쿠폰 다운로드 공통 컴포넌트 개발 (AI 협업)</div>
              <ul>
                <li>
                ▶ 공통 컴포넌트 설계
                <p>
                    - 쿠폰 다운로드 시 브랜드찜이 연동되는 기능을 <em>독립 컴포넌트로 설계</em>, 이후 쿠폰이 필요한 여러 모듈에서 재사용
                </p>
                <p>
                    - 상이한 API를 쓰는 모듈은 <em>분기 처리로 수용</em>하며 확장
                </p>
                </li>
                <li>
                ▶ AI 협업 프로세스
                  <p>
                      - 작업 전 API 사용 위치 분석 → 작업개요·마크업 참조 파일·영역별 노출 조건(폴백 규칙 포함)·API 명세를 구조화한 <em>프롬프트로 위임</em>
                  </p>
                  <p>
                      - 기획/API 변경 시 수정 범위를 지정해 반영
                  </p>
                  <p>
                      - 기존 모듈 <em>영향도·데드코드·린트 검증</em> 후 머지
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li class="dgm-item">
            <div class="dgm">
              <div class="dgm-flow">
                <div>
                  <div class="dgm-frag-group">
                    <div class="dgm-frag">툴팁 A안</div>
                    <div class="dgm-frag">툴팁 B안</div>
                    <div class="dgm-frag">툴팁 C안</div>
                  </div>
                  <div class="dgm-flow-label">지면별 상이한 구현 (AI 비교 분석으로 식별)</div>
                </div>
                <div class="dgm-arrow"><div class="shaft"></div><div class="tip"></div></div>
                <div>
                  <div class="dgm-unified">
                    <strong>공통 툴팁 구현</strong>
                    <span>통일 → 일관성 확보</span>
                  </div>
                </div>
              </div>
              <p class="dgm-caption">마이그레이션 과정에서 파편화된 공통 기능을 단일 구현으로 통일</p>
            </div>
          </li>
          <li class="sub_con">
            <div class="sub_txt">
            <div class="tit">Vue2 → Vue3(Nuxt) 마이그레이션 정합성 검증 및 코드 통일</div>
              <ul>
                <li>
                ▶ AI 활용 정합성 검증
                <p>
                    - 1차 전면 이관 이후, <em>AI를 활용해 이관 전후 파일을 비교 분석</em>하여 누락된 기능을 식별하고 코드 정리
                </p>
                </li>
                <li>
                ▶ 공통 기능 통일
                  <p>
                      - 순차 이관 과정에서 파편화된 공통 기능(툴팁이 모듈별로 상이하게 구현) 발견, <em>공통 구현으로 통일</em>해 일관성 확보
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <!-- <li class="sub_con img_box">
            <div class="sub_img">
              <img src="../images/project-01.jpg" alt="">
            </div>
            <div class="sub_txt">
            <div class="tit">리뷰모듈</div>
              <ul>
                <li>
                ▶ 주도적인 문제 해결
                <p>
                    - 신규 모듈 개발 시 API 형식 및 조건이 기존과 달라 <em>주도적으로 의견을 제시해</em> 통일된 구조로 조율하여 유지보수성과 일관성 확보
                </p>
                </li>
                <li>
                  ▶ 코드 정적 분석 및 리팩토링
                  <p>
                      - 기존 자바스크립트 <em>코드를 정적 분석</em>하여 기능 흐름을 파악
                  </p>
                  <p>
                      - 분석 과정에서 기존 로직의 <em>결함을 발견해 리팩토링</em>
                  </p>
                  <p>
                      - 단순 null 체크에서 객체 타입 및 키 유무까지 확장해 유효성 검증 로직 강화
                  </p>
                </li>
                <li>
                ▶ 코드 재사용성 향상 및 성능 최적화
                  <p>
                    - 반복되는 UI 요소를 재사용 가능한 컴포넌트로 리팩토링하여 <em>중복 코드 제거 및 유지보수성 강화</em>
                  </p>
                  <p>
                    - 상품 및 리뷰 데이터를 비동기로 동시에 요청하여 <em>초기 로딩 시간 약 2초 단축</em>
                  </p>
                  <div>
                    <img src="../images/project-02.jpg" alt="">
                  </div>
                </li>                 
              </ul>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- project 2 -->
    <div class="project__item">
      <h3 class="project__name celebshop">셀렙샵 구축 및 운영</h3>
      <ul class="project__meta">
        <li>- 10만회 이상 다운로드된 CJ ENM의 패션 전문 플랫폼 구축 및 운영</li>
        <li>- 구축 23.01 ~ 24.08   /  운영 24.09 ~ 25.04</li> 
        <!-- <li>기존 모듈에 기능을 안정적으로 확장하며 리팩토링을 통해 중복 로직 제거 및 코드 품질 개선을 수행</li> -->
        <!-- <li>기간이 정해진 이벤트 신청 기능 개발 시, 회원 정보와 참가여부 API를 연동하여 사용자 등급에 따라 UI 및 신청 조건을 동적으로 제어</li> -->
      </ul>
      <div class="project__details">
        <ul>
          <li class="sub_con">
            <div class="sub_txt">
            <div class="tit">운영 및 유지보수</div>
              <ul>
                <li>
                ▶ 1년간의 운영 및 유지보수
                  <p>
                      - 빠르게 변화하는 패션 사업에 대응해 이벤트·기획전 이슈를 <em>실시간으로 처리</em>
                  </p>
                  <p>
                      - <em>직접 이벤트에 응모</em>해 이벤트 초반 <em>오류를 발견</em>하여 피해 발생 전 문제 해결셀렙샵 구축 및 운영

                  </p>
                </li>
                <li>
                ▶ 셀렙샵 구축
                  <p>
                      - 구축시 여러 모듈을 조합하여 구성하는 기획전 페이지 전담
                  </p>
                  <p>
                      - 기획자, 디자이너, 운영자와 <em>지속적으로 소통</em>하며 실제 사용 환경을 고려하여 개발
                  </p>
                </li>                
              </ul>
            </div>
          </li>
          <!-- <li class="sub_con img_box">
            <div class="sub_img">
              <img class="sub_img_content" src="../images/project-celebshop.gif" alt="">
              <img class="sub_img_frame" src="../images/iphone_frame.png" alt="">
            </div>
            <div class="sub_txt">
            <div class="tit">인클루드 배너</div>
              <ul>
                <li>
                  ▶ 모듈간의 호환성 중시
                  <p>- 매번 다르게 적용되는 이벤트 페이지에 호환성을 고려하여 작업</p>
                  <p>스크롤 위치에 따라 진입 시 페이지 최상단에 배너 고정</p>
                  <p>상단 제목과 안내영역은 유지되며 배너만 아래 고정 위치로 전환</p>
                  <p>스크롤 업 시 제목은 숨겨지고 배너는 계속 고정된 상태로 유지</p>
                  <p>안내영역 닫힘을 감지해 배너 고정 위치를 자동 재조정</p>
                  <p>배너 클릭 시 해당 모듈로 부드럽게 이동</p>
                </li>               
              </ul>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="project__item">
      <h3 class="project__retrospect-title">회고</h3>
      <p class="project__retrospect">
        운영 중인 서비스를 다루며 얻은 가장 큰 습관은 <strong>"작업 전에 분석하고, 반영 전에 의심하는 것"</strong>입니다. 구매하기 버튼처럼 매출과 직결된 컴포넌트에 기능을 추가할 때는 기존 동작을 기본 경로로 보존하는 분기 설계로 영향도를 최소화했고, 신규 모듈의 API 구조가 기존과 다를 때는 문제가 코드에 쌓이기 전에 통일안을 제안해 조율했습니다. 단순히 주어진 과제를 구현하는 것보다, 먼저 분석하고 의견을 내는 쪽이 결과적으로 더 빠르고 정확하다는 것을 반복해서 경험했습니다. <br />
        <br />
        이 습관은 AI와 협업하는 방식으로도 이어졌습니다. AI에게 위임하기 전에 API 사용 위치를 분석하고 폴백 규칙까지 명세하는 것, 생성된 코드를 영향도·데드코드·린트로 검증한 뒤에만 반영하는 것, 결국 사람의 코드든 AI의 코드든, 신뢰는 검증에서 나온다는 같은 원칙이라고 생각합니다.
      </p>
    </div>
    </template>

    <template v-if="activeTab === 'ai'">
    <div class="project__item ai-collab">
      <h3 class="project__name">AI 협업 워크플로우</h3>
      <p class="ai-collab__principle">
        원칙: <em>위임하기 전에 맥락을 완성하고, 결과물을 반드시 의심한다.</em>
      </p>
      <div class="ai-collab__steps">
        <div class="ai-collab__step">
          <span class="num">1</span>
          <div class="tit">사전 분석</div>
          <p>API 사용 위치, 기존 코드 구조를 먼저 파악</p>
        </div>
        <div class="ai-collab__step">
          <span class="num">2</span>
          <div class="tit">구조화 위임</div>
          <p>개요·참조 파일·조건·명세를 명문화해 위임</p>
        </div>
        <div class="ai-collab__step">
          <span class="num">3</span>
          <div class="tit">범위 지정 수정</div>
          <p>변경분만 지정해 재생성 최소화</p>
        </div>
        <div class="ai-collab__step">
          <span class="num">4</span>
          <div class="tit">검증 후 반영</div>
          <p>영향도 / 데드코드 / 린트 통과 시 머지</p>
        </div>
      </div>
      <ul>
        <li>▶ <b>사전 분석</b> — AI에게 요청하기 전, 관련 API의 사용 위치와 기존 코드 구조를 먼저 파악합니다. <em>내가 모르는 코드는 AI에게 정확히 시킬 수 없기 때문</em>입니다.</li>
        <li>▶ <b>구조화 위임</b> — 작업 개요 / 참조 마크업 / 영역별 노출 조건(폴백 포함) / API 명세의 4블록 프롬프트로 위임합니다.</li>
        <li>▶ <b>범위 지정 수정</b> — 기획·API 변경 시 수정 위치를 지정해 위임합니다. <em>전체 재생성으로 인한 회귀와 토큰 낭비를 막습니다.</em></li>
        <li>▶ <b>검증 후 반영</b> — 아래 체크리스트를 통과한 코드만 반영합니다.</li>
      </ul>
    </div>

    <div class="project__item ai-collab">
      <h3 class="project__name">실제 위임 프롬프트 구조</h3>
      <p>실무에서 신규 모듈(쿠폰 다운로드 공통 컴포넌트) 개발 시 사용한 초안 프롬프트의 구조입니다. (API 주소·파라미터·기획 내용은 일반화했습니다)</p>
      <pre class="ai-collab__prompt">1. 작업 개요
   모듈을 신설한다. 쿠폰을 다운로드하면 브랜드찜이 함께 처리되는 기능이다.

2. 마크업 참조
   [마크업 파일 경로 첨부] 이 파일의 구조를 따를 것.

3. 영역별 기능 및 노출 조건
   3-1. 소팅탭: 데이터가 유효할 때만 노출. 이미지가 없으면 기본이미지 노출(폴백)
   3-2. 쿠폰 영역: 기존 쿠폰 영역과 동일한 방식으로 노출.
        쿠폰 API는 미확정이므로 영역만 스텁으로 구현할 것
   3-3. 상품 영역: [상품 노출 조건 명세]
   3-4. 더보기 버튼: API 데이터가 있을 때만 노출. 문구·링크는 응답값 사용,
        문구가 없으면 기본 문구 '더보기' 노출(폴백)
        데이터: contentList.moreBtn.useYn (String, Y/N)

4. API 명세
   쿠폰 발행 API
   - Method: POST
   - Host: api.example.com
   - Path: /module/coupon (로그인 필수)
   - Params:
     - productCode: 상품코드 / Integer / 필수
     - couponCodes: 쿠폰코드 목록 / List / 필수 / 최대 10건(중복 가능)</pre>
      <table class="ai-collab__table">
        <thead>
          <tr><th>블록</th><th>막으려는 문제</th></tr>
        </thead>
        <tbody>
          <tr><td>참조 마크업 지정</td><td>AI가 임의의 구조·스타일로 생성하는 것</td></tr>
          <tr><td>폴백 규칙 명세</td><td>데이터 부재 시 AI가 임의 처리 → 운영 장애로 이어지는 것</td></tr>
          <tr><td>미확정 API의 스텁 지시</td><td>스펙 확정을 기다리느라 일정이 밀리는 것</td></tr>
          <tr><td>타입·필수 여부·최대 건수 명세</td><td>유효성 검증 누락, 잘못된 타입 처리</td></tr>
        </tbody>
      </table>
    </div>

    <div class="project__item ai-collab">
      <h3 class="project__name">검증 체크리스트</h3>
      <p>AI가 생성한 코드는 아래를 통과해야만 반영합니다.</p>
      <div class="ai-collab__checklist">
        <div class="tit">실무에서 사용하는 기본 3종</div>
        <ul>
          <li>기존 모듈 영향도: 기존 동작이 변하지 않았는가 (신규 로직은 분기로, 기존 로직은 기본 경로로 보존)</li>
          <li>데드코드: 사용되지 않는 코드가 생성되지 않았는가</li>
          <li>린트: 정적 검사 통과</li>
        </ul>
        <div class="tit">연습 프로젝트에서 확장한 항목</div>
        <ul>
          <li>엣지 케이스 강제 재현: 실데이터에 없는 상태(품절 등)를 임시 코드로 만들어 미검증 UI를 확인</li>
          <li>실동작 검증: 디바운스 등은 코드가 아니라 Network 탭의 실제 호출로 확인</li>
          <li>렌더링 경계 검사: 'use client' 사용 파일을 전수 확인, 상호작용 없는 컴포넌트의 클라이언트화 여부 점검</li>
          <li>SSR 확인: 초기 HTML에 데이터가 포함되는지 페이지 소스로 확인</li>
        </ul>
      </div>
    </div>

    <div class="project__item">
      <h3 class="project__name">연습 프로젝트 — AI 협업 사이클 기록</h3>
      <ul class="project__meta">
        <li>- Next.js(App Router) + TypeScript 커머스 화면 연습 프로젝트</li>
      </ul>
      <div class="project__details">
        <ul>
          <li class="sub_con">
            <div class="sub_txt">
              <ul>
                <li>
                ▶ 프로젝트 룰 직접 설계
                  <p>
                      - AI에게 줄 프로젝트 룰(CLAUDE.md)을 백지에서 직접 설계: 폴더 구조, 서버/클라이언트 컴포넌트 기준, 타입·에러 처리 컨벤션, <em>"요구하지 않은 기능을 임의로 추가하지 말 것"</em> 등의 출력 규칙 포함
                  </p>
                </li>
                <li>
                ▶ 위임 → 검증 → 수정 지시 사이클
                  <p>
                      - 실데이터에 품절(stock 0) 상품이 없어 검증 불가 → <em>특정 상품의 재고를 강제로 0으로 만드는 임시 코드</em>를 지시해 품절 UI를 재현·확인 후 제거
                  </p>
                  <p>
                      - 디바운스 요구(300ms) → <em>Network 탭으로 실제 호출 횟수를 검증</em>
                  </p>
                </li>
                <li>
                ▶ AI 가설 반증 사례
                  <p>
                      - 올리브영 오늘드림 태그가 목록과 상세에서 다르게 보이는 현상에 대해 AI가 제시한 '캐시 시간차' 가설을 서비스 재관찰로 반증 — 실제로는 <em>옵션(색상) 단위의 가능 여부를 목록에서 상품 단위로 집계(OR)해 표시</em>하는 구조임을 확인
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="project__item">
      <h3 class="project__name">도메인 분석 — 지원 전 서비스 역설계</h3>
      <ul class="project__meta">
        <li>- 지원 전, 올리브영 모바일 웹/앱을 프론트엔드 개발자 관점에서 분석</li>
      </ul>
      <div class="project__details">
        <ul>
          <li class="sub_con">
            <div class="sub_txt">
              <ul>
                <li>
                ▶ 밸류체인 지도
                  <p>
                      - 데이터 소스(사용자/상품/온라인 재고/오프라인 재고) ↔ 화면 흐름(홈 → 검색 → 상품상세 → 장바구니 → 주문)의 연결 관계를 도식화
                  </p>
                </li>
                <li>
                ▶ 주요 관찰
                  <p>
                      - 오늘드림 가능 여부는 <em>옵션 단위 속성</em>이며, 목록은 이를 상품 단위로 집계해 태그 표시
                  </p>
                  <p>
                      - 오프라인 재고는 오늘드림(상세·장바구니)과 매장 픽업(결제)이 <em>서로 다른 시점에 다른 목적으로 조회</em>
                  </p>
                  <p>
                      - 비로그인 장바구니는 <em>로그인 게이트로 병합 문제를 정책적으로 회피</em>
                  </p>
                  <p>
                      - 상품상세의 쿠폰받기 → 로그인 복귀 시 <em>404 결함 발견</em>, 새 창 컨텍스트로 인한 히스토리 유실로 원인 추정
                  </p>
                </li>
                <li>
                ▶ 기술 스택 확인
                  <p>
                      - 콘솔·네트워크 분석으로 <em>React 기반 렌더링과 초기 HTML의 데이터 포함(SSR)</em> 확인
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </template>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('career')
</script>

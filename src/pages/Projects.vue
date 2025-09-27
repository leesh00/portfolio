<template>
  <section class="project">
    <h1>주요 프로젝트</h1>
    <!-- project 1 -->
    <div class="project__item">
      <h3 class="project__name">CJ 온스타일</h3>
      <ul class="project__meta">
        <li>- 25.05 ~ ing</li>
        <li>- Vue.js / Nuxt.js / Typescript</li>
      </ul>
      <div class="project__details">
        <ul>
          <li class="sub_con img_box">
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
          </li>
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
          <li class="sub_con img_box">
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
          </li>
        </ul>
      </div>
    </div>
    <div class="project__item">
      <h3 class="project__retrospect-title">회고</h3>
      <p class="project__retrospect">
          이번 프로젝트를 통해 코드 안정성과 성능을 높이기 위해 사전 코드분석과 예외 상황을 고려하는 습관을 갖게 되었습니다. 단순히 주어진 과제만 하는 것이 아니라, 주도적으로 의견을 내어 소통하니 더 빠르고 정확한 작업이 가능했습니다. 이를 통해 팀 내 조율의 중요성을 체감했습니다. 또한 유효성 검증을 강화하며 데이터 신뢰성과 오류 대응력에 대한 중요성을 배웠습니다.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

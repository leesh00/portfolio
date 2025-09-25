<template>
  <section class="project">
    <h1>주요 프로젝트</h1>
    <!-- project 1 -->
    <div class="project__item">
      <h3 class="project__name">
        <p>CJ 온스타일</p>
      </h3>
      <ul class="project__meta">
        <li>- 2025.05 ~ ing</li>
        <li>- Vue.js / Nuxt.js / Typescript</li>
        <!-- <li>기존 모듈에 기능을 안정적으로 확장하며 리팩토링을 통해 중복 로직 제거 및 코드 품질 개선을 수행</li> -->
        <!-- <li>기간이 정해진 이벤트 신청 기능 개발 시, 회원 정보와 참가여부 API를 연동하여 사용자 등급에 따라 UI 및 신청 조건을 동적으로 제어</li> -->
      </ul>
      <div class="project__details">
        <ul>
          <li class="sub_con">
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
    <!-- <div class="project__item">
      <div class="project__thumb">
        <img src="../images/project-01.jpg" alt="CJ ENM의 '셀렙샵' 유지보수">
      </div>
      <h3 class="project__name">CJ ENM의 '셀렙샵' 구축 및 유지보수</h3>
      <ul class="project__meta">
        <li>기간: 2023.01 ~ 2024.08 : 구축</li>
        <li>기간: 2024.08 ~ 2025.05 : 운영 유지보수</li>
        <li>기술: Vue.js, Vuex, SCSS</li>
      </ul>
      <div class="project__details">
        <ul>
          <li>
            <strong>인클루드 배너</strong>
            <ul>
              <li>스크롤 위치에 따라 진입 시 페이지 최상단에 배너 고정</li>
              <li>상단 제목과 안내영역은 유지되며 배너만 아래 고정 위치로 전환</li>
              <li>스크롤 업 시 제목은 숨겨지고 배너는 계속 고정된 상태로 유지</li>
              <li>안내영역 닫힘을 감지해 배너 고정 위치를 자동 재조정</li>
              <li>배너 클릭 시 해당 모듈로 부드럽게 이동</li>
            </ul>
          </li>
          <li>
            <strong>댓글 기능 (기여도: 40%)</strong>
            <ul>
              <li>로그인 상태에 따라 프로필 닉네임이 자동 적용된 작성 폼 토글</li>
              <li>답글 버튼 클릭 시 대댓글 입력폼을 노출하고 상위 댓글 ID와 함께 전송해 트리 구조로 렌더링</li>
              <li>본인 댓글에만 수정·삭제 아이콘을 표시하고, 확인 모달 후 즉시 제거</li>
              <li>댓글 깊이에 따라 들여쓰기 및 구분선 적용</li>
            </ul>
          </li>
          <li>
            <strong>유지보수</strong>
             <ul>
              <li>빠르게 변화하는 패션사업에 대응하여 단기 이벤트/기획전 페이지 생성 및 유지보수</li>
              <li>로딩 속도 개선을 위해 API 요청 및 컴포넌트 렌더링을 비동기 처리하여 사용자 체감 속도 향상</li>
              <li>이벤트 신청을 위한 회원정보</li>
            </ul>
          </li>
        </ul>
      </div>
    </div> -->
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

<template>
  <section class="project">
    <h1>주요 프로젝트</h1>

    <!-- project 1 -->
    <div class="project__item">
      <div class="project__thumb">
        <img src="../images/project_cj.png" alt="CJ ENM 온스타일 유지보수">
      </div>
      <h3 class="project__name">CJ ENM 온스타일 유지보수</h3>
      <ul class="project__meta">
        <li>기간 : 2025.05 ~ ing</li>
        <li>기술 : Vue.js, Nuxt.js, Typescript</li>
        <!-- <li>기존 모듈에 기능을 안정적으로 확장하며 리팩토링을 통해 중복 로직 제거 및 코드 품질 개선을 수행</li> -->
        <!-- <li>기간이 정해진 이벤트 신청 기능 개발 시, 회원 정보와 참가여부 API를 연동하여 사용자 등급에 따라 UI 및 신청 조건을 동적으로 제어</li> -->
      </ul>
      <div class="project__details">
        <ul>
          <li class="sub_con">
            <div class="sub_img">
              <img src="../images/project_cj_module.png" alt="">
            </div>
            <strong>숏츠 상품 모듈</strong>
            <ul>
              <li>서버에서 숏츠 영상과 연관 상품 데이터를 함께 초기 로드하여 모든 UI를 미리 렌더링</li>
              <li>첫 번째 숏츠 영역에 영상 메타정보를 표시하고 연관 상품 리스트를 옆으로 슬라이드 가능한 구조로 배치</li>
              <li>자동재생 동의 여부를 확인해 동의한 사용자에게만 페이지 진입 시 숏츠 자동재생 활성화</li>
            </ul>
          </li>
          <li class="sub_con">
            <div class="sub_img">
              <img src="../images/project_cj_module.png" alt="">
            </div>
            <strong>리뷰 상품 모듈</strong>
            <ul>
              <li>상품 및 리뷰 데이터를 비동기로 동시에 요청해 초기 로딩 시간을 단축</li>
              <li>제목과 리뷰가 한 쌍인 각 세트 상태를 개별 검사해 일부 데이터 누락 시 모듈 전체를 미표시</li>
              <li>각 세트의 로딩 및 오류 상태를 분리 관리해 명확한 사용자 피드백 제공</li>
              <li>반복되는 리뷰 UI 블록을 재사용 컴포넌트로 추출해 코드 중복 제거 및 유지보수성 강화</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- project 2 -->
    <div class="project__item">
      <div class="project__thumb">
        <img src="../images/project_celeb.png" alt="CJ ENM의 '셀렙샵' 유지보수">
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
    </div>
    <div class="project__item">
      <h3 class="project__retrospect-title">회고</h3>
      <p class="project__retrospect">
          커머스 특성상 상품 재고 및 상태를 실시간 반영해야 하므로 모듈별 상태 점검과 데이터 유효성 검사가 중요했습니다. 회원 등급별 할인율 적용 로직을 고려해 로그인 상태에 따라 뷰를 다르게 처리했고, 각 모듈의 결합도를 낮춰 타 모듈에 영향을 주지 않는 구조로 유지보수성을 높였습니다.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

// ***Badge***
// 화면 오른쪽 배찌를 스크롤 내릴 때 일정 영역이 지나면 없어지는 효과
// 페이지 스크롤에 따른 요소 제어

// 페이지 스크롤에 영향을 받는 요소들 검색!
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// lodash cdn 라이브러리 추가 후 사용
// window 객체=화면자체
// 화면 스크롤 할 때마다 함수 실행
// _.throttle(함수, 시간(몇초에 한번씩 실행 될 지))
// 300 = 0.3초 -> 만큼 함수 제어
// 페이지 스크롤 이벤트 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) { // 페이지 스크롤 위치가 500px 넘으면
    // Badge 숨기기!
    // 문제점! Badge 시각적으로만 없어진 것이지 그 위치에는 있는 상태
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' // 문제점 해결! 실제로 안보이면 위치에서도 없애는 것
    })
    // 마지막 Scroll 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    })

  } else { // 페이지 스크롤 위치가 500px이 넘지 않으면
    // Badge 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 마지막 Scroll 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    })

  }
}, 300))

// 마지막 Scroll Badge 기능
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, { // window는 화면자체를 의미 
    scrollTo: 0 // 화면의 위치를 최상단(0px 지점)으로 0.7초 동안 이동시켜주겠다 (Index.html에 plugin 있어야한다)
  })
})

// 순서대로 나타나는 기능
// [index.html] VISUAL 애니메이션 효과 fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 각 요소들을 순서대로(delay) 보여지게 함!
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 -> 순차적으로 애니메이션 효과
    opacity: 1
  })
})

// 슬라이드 요소 관리
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true //반복 재생 여부
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// PROMOTION 슬라이드 토글 기능
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역을 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false;
// 토글 버튼 클릭하면,
promotionToggleBtn.addEventListener('click', function() {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// 부유하는 요소 관리
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `.parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2)) 
}
// 부유하는 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작시간
    { // 옵션
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 무한 반복
      yoyo: true, // 한번 재상한 애니메이션을 다시 뒤로 재생해서 떠 있는 느낌
      ease: Power1.easeInOut, // 움직임 제어
      delay: random(0, delay) // 얼마나 늦게 애니메이션을 시작할 것인지 지연시간 설정
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic
// 요소가 화면에 보여짐 여부에 따른 요소 관리
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
// 사용할 요소 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  // searchInputEl에 HTML속성 지정할 때 = setAttribute
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// focus <-> blur
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// ***Badge***
// 화면 오른쪽 배찌를 스크롤 내릴 때 일정 영역이 지나면 없어지는 효과
const badgeEl = document.querySelector('header .badges');

// lodash cdn 라이브러리 추가 후 사용
// window 객체=화면자체
// 화면 스크롤 할 때마다 함수 실행
// _.throttle(함수, 시간(몇초에 한번씩 실행 될 지))
// 300 = 0.3초 -> 만큼 함수 제어
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // Badge 숨기기
    // 문제점! Badge 시각적으로만 없어진 것이지 그 위치에는 있는 상태
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' // 문제점 해결! 실제로 안보이면 위치에서도 없애는 것
    });
  } else {
    // Badge 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'blcok'
    });
  }
}, 300));


// [index.html] VISUAL 애니메이션 효과 fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 -> 순차적으로 애니메이션 효과
    opacity: 1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
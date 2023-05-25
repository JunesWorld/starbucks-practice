// 검색창 제어
// 검색할 요소(.search) 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
//검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});
// 검색할 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  // searchInputEl에 HTML속성 지정할 때 = setAttribute
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행
// focus <-> blur
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 올해 자동계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
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
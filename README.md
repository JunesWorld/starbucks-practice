# starbucks-practice

## Reset.css

각 브라우저의 기본 스타일을 초기화

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## 뷰포트(Viewport) 렌더링 방식 설정

웹 페이지가 화면(Viewport)에 표현되는 방식을 설정<br>
모바일 환경에서 적용됩니다.

```html
<meta name="viewport" content="width-device-width, initial-scale=1.0" />
```

- `width-device-width`: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0`: 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no`: 사용자가 디바이스 화면을 확대(`yes`) / 축소(`no`)할 수 있는지 설정
- `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## Favicon(파비콘, Favorites Icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.<br>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />`를 작성할 필요가 없다.
`favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성.

> 파비콘 이미지는 루트 경로에 있어야 한다!

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href:"./favicon.png" />
```
- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px) : 더 높은 해상도!

## Google Fonts

페에지에서 사용할 '나눔고딕' 폰트를 지정 (400, 700)

> 폰트 라이센스 꼭 확인!!(구글은 대부분 무료)

[Google Fonts](https://fonts.google.com/)
```html
<!-- Font : 나눔고딕 400, 700 -->
<!-- main.css 보다 먼저 와야 한다 -->
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

페이지에 폰트를 적용(css 상속)한다.

```css
body {
  font-family: 'Nanum Gothic', sans-serif;
}
```
## Google Material Icons

[Google에서 제공하는 Icons](https://fonts.google.com/icons)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
다음과 같이 사용.

```html
<div class="material-icons">upload</div>
```

## 오픈 그래프(The Open Graph Protocol)

웹 페이지가 소셜미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

```html
<!-- SEO(Search Engine Optimization, 검색 엔진 최적화)
 구글이나 네이버 등에 자신의 웹 사이트/페이지를 노출할 수 있도록 정보를 최적화하는 작업-->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/Starbucks_seo.jpg" />
<meta property="og:url" content="https://Starbucks.co.kr" />
```

- `og:type`: 페이지의 유형(EX. `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## 트위터 카드(Twitter Cards)

웹 페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정.

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/Starbucks_seo.jpg" />
<meta property="twitter:url" content="https://Starbucks.co.kr" />
```

- `twitter:card`: 페이지(카드)의 유형(EX. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://cdnjs.com/libraries/gsap)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다.
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" integrity="sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js" integrity="sha512-WFeBxQtM/n6U8/Nd0Hz/Hq7n75NImbzM7Kc0y/4kE0kHnH1Be+nzm32RwbGoDsW1D9fjjPvI8LIWxLrZhxew/w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
```js
gsap.to(요소, 시간, 옵션)
// 또는
TweenMzs.to(요소, 시간, 옵션)
```
```js
gsap.to(window, .7, {
  scrollTo: 0
});  
```

## Swiper
[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.

> Version6사용

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https//unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

[Swiper API](https://swiperjs.com/swiper-api)(옵션)을 확인하세요!

```js
new Swiper(요소, 옵션);
```

```js
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```
## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?h1=ko)를 
통해 YouTube 동영상을 제어할 수 있습니다.

유튜브 영상이 출력될 위치에 요소를 지정(생성)합니다.

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

`onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!<br>그리고 함수는 전역(Global) 등록해야 합니다!

[플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersiion=HTML5&h1=ko#Parameters)에서 더 많은 옵션을 확인할 수 있습니다.

```js
      // Youtube IFrame API를 비동기로 로드합니다.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // onYouTubeIframeAPIReady 
      // = 외부에서 가지고 온 youtube를 제어하는 JS Library가 자체적으로 이 함수의 이름을 찾는 것이기 때문에 변경해서는 안된다.
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          // 실제 삽입할 영상에 가서 소스코드 복사하여 사용할 수 있지만 제어가 안된다.
          // v=(videoID) 
          videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
          playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
          },
          events: {
            // 영상이 준비되었을 때,
            onReady: function (event) {
              event.target.mute() // 음소거
            }
          }
        });
      }
```

## 랜덤한 숫자를 생성하는 함수

```js
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `.parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2)) 
}
```

## Netify(사이트 배포)
- Github Login
- New site from Git
- Continuous Deplyment
  - Github
  - permission -> Authorize Netify
- Install Netify
  - All Repository
  - Install
- 만들고자 하는 저장소 선택
  - Branch : master
- Deply site
- 주소 접속! 

## Sign In Branch
- Terminal!
  - master 
- git branch
  - branch 목록 확인
  - 나가기 = q
  - git branch -a : 원격에 있는 branch 확인
- git branch signin
  - singin branch 생성
- git checkout sing in
  - branch 변경
  - 













      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
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
            onReady: function (event) {
              event.target.mute() // 음소거
            }
          }
        });
      }
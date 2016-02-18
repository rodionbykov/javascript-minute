'use strict';

angular.module('angularjs3VideoplayerApp')
  .controller('MainCtrl', ["videosources", "$timeout", function (videosources, $timeout) {
    
    var controller = this;
        controller.state = null;
        controller.API = null;
          
        controller.videos = videosources.getVideos();      
        controller.sources = videosources.getSources();      
      
        controller.current = videosources.getCurrentVideoID();
        controller.currentVideo = videosources.getCurrentVideo();
      
        controller.onPlayerReady = function(API) {
            controller.API = API;
        };

        controller.onCompleteVideo = function() {
            controller.isCompleted = true;

            controller.current++;

            if (controller.current >= controller.sources.length) controller.current = 0;

            controller.setVideo();
        };
      
        controller.setVideo = function(index) {
            controller.API.stop();            
            controller.config.sources = controller.sources[ index ];
            $timeout(controller.API.play.bind(controller.API), 100);
        };
        
        controller.changeSource = function () {
            controller.current = controller.currentVideo.id;
            videosources.setCurrentVideoID( controller.current );
            
            controller.setVideo(controller.current);
        };
              
        controller.config = {
            sources: controller.sources[ controller.current ],
            tracks: [],
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {},
            loop: false,
            preload: true
        };
      
  }]);

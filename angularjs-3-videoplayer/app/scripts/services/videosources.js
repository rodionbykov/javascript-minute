'use strict';

/**
 * @ngdoc service
 * @name angularjs3VideoplayerApp.videosources
 * @description
 * # videosources
 * Service in the angularjs3VideoplayerApp.
 */
angular.module('angularjs3VideoplayerApp')
  .service('videosources', function () {
    
    var videos = [
      {"id": 1, "label": "Video 1", "url": ""}
    ];
    
    var currentVideo = videos[0];

    return {
        getCurrentVideo: function () {
            return currentVideo;
        },
        setCurrentVideo: function (value) {
            currentVideo = value;
        },
        getVideos: function () {
            return videos;
        },
        setVideos: function (value) {
            videos = value;
        }
    };
  });

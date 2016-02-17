'use strict';

/**
 * @ngdoc function
 * @name angularjs3VideoplayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjs3VideoplayerApp
 */
angular.module('angularjs3VideoplayerApp')
  .controller('MainCtrl', ["$sce", "$scope", "videosources", function ($sce, $scope, videosources) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
    this.data = {};
    this.data.currentVideo = videosources.getCurrentVideo();
    this.data.videos = videosources.getVideos();      
          
    this.getSources = function() {        
        return [{src: $sce.trustAsResourceUrl( this.data.currentVideo.url ), type: "video/mp4"}];
    }
    
    this.changeSource = function () {
        videosources.setCurrentVideo(this.data.currentVideo);        
        this.config.sources = this.getSources();
    }
      
    this.config = {
            sources: this.getSources(),
            tracks: [],
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {},
            loop: false,
            preload: true
        };
  }]);

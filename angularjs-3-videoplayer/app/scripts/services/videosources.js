'use strict';

/**
 * @ngdoc service
 * @name angularjs3VideoplayerApp.videosources
 * @description
 * # videosources
 * Service in the angularjs3VideoplayerApp.
 */
angular.module('angularjs3VideoplayerApp')
       .service("videosources", ["$sce", function ($sce) {
    
    var data = {
        videos : [
            { "id": 0, "label": "Video 1" },
            { "id": 1, "label": "Video 2" },
            { "id": 2, "label": "Video 3" }
        ],        
        sources : [
            [{src: $sce.trustAsResourceUrl( "video1.mp4" ), type: "video/mp4"}],
            [{src: $sce.trustAsResourceUrl( "video2.mp4" ), type: "video/mp4"}],            
            [{src: $sce.trustAsResourceUrl( "video3.mp4" ), type: "video/mp4"}]            
        ]
    };
           
    var currentVideoID = 0;

    return {
        getVideos: function() {
            return data.videos;
        },   
        getSources: function() {
            return data.sources;
        }, 
        getCurrentVideo: function(){
            return data.videos[currentVideoID];
        },
        getCurrentSource: function(){
            return data.sources[currentVideoID];
        },
        getCurrentVideoID: function(){
            return currentVideoID; 
        },
        setCurrentVideoID: function(value){
            currentVideoID = value; 
        }
    };
  }]);

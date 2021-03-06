(function() {
    'use strict';

   angular
      .module('app')
      .controller('TriviaController', TriviaController);

   TriviaController.$inject = ['QuestionFactory'];

   /* @ngInject */
    function TriviaController(QuestionFactory) {
      var triviaCtrl = this;
      triviaCtrl.questions = "";
      triviaCtrl.youtubeID = "";
      triviaCtrl.results=[];

     triviaCtrl.retrieve = function() {
        QuestionFactory
          .questionCreate()
          .then(function(data) {
              triviaCtrl.results = data;
              console.log(data);

           });

         } , 

    triviaCtrl.searchYou = function() {
       QuestionFactory
         .playVideo()
         .then(function(response){

         });
    
  }
      }
    })();
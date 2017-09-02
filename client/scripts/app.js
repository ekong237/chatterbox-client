


//window.fetch = window.getAllData;
var App = function (){


  var appInstance = {};

  appInstance.server = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages';

  

  appInstance.init = function() {

    //$(document).ready(function() {

       console.log('initialized!');  

      $('.username').on('click', 
        //console.log('main find main click');
        appInstance.handleUsernameClick );

      $('#send .submit').on('submit', appInstance.handleSubmit );
    //});

  };

  appInstance.send = function(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  };


  appInstance.clearMessages = function() {
    $('#chats').empty();
  };

  appInstance.renderMessage = function(message) {
    $('#chats').append('<p class="username">' + message + '</p>');
  };

  appInstance.renderRoom = function(roomName) {
    $('#roomSelect').append('<option>' + roomName + '</option>');
  };

  //console.log('app.js load:',$('#main').find('.username'));

  //app.data;

  appInstance.fetch = function() {
    //this.data = 
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      //data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Messages retrieved');
        console.log(data);
        return data;
      }//,
  // error: function (data) {
  //   // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //   console.error('chatterbox: Failed to send message');
    // }
    });
  };


  appInstance.handleUsernameClick = function() {
    console.log('handleUsernameClick');
    return true;
  };

  // appInstance.handleUsernameClick.restore = function () {

  // };



  appInstance.handleSubmit = function () {
    console.log("handled submit!");
  };

  return appInstance;


};

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

var app = App();

// $(document).ready(function() {
//   console.log("document ready!");
//   var myapp = App();
//   // myapp.fetch();
//   // return myapp;


// });





  
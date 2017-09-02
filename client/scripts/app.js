


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
      data: JSON.stringify(message),
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

  appInstance.roomList = new Set();

  appInstance.renderRoom = function() {
    //console.log('I get access to resp:',resp);
    $('#roomSelect').empty();    
    console.log(appInstance.roomList);
    for (var room of appInstance.roomList) {
      //console.log('SET ROOMS:', room);
      //appInstance.renderRoom(room);
      $('#roomSelect').append('<option>' + room + '</option>');
    }
  };

  //console.log('app.js load:',$('#main').find('.username'));

  //app.data;
  
  appInstance.afterFetch = function (resp) {
    console.log('chatterbox: Messages retrieved');
    console.log(resp);
    for (var i = resp.results.length - 1; i > 0; i--) {
      if (resp.results[i].text) {
        $('#chats').append('<div><p>' + JSON.stringify(resp.results[i].username) + '</p><p>' + JSON.stringify(resp.results[i].text) + '</p></div>');

        appInstance.roomList.add(resp.results[i]['roomname']);
        appInstance.renderRoom();
      }
      // get the roomname from the message
      // renderRoom on that roomname
    }
    //return data;
  };

  appInstance.fetch = function() {
    //this.data = 
    var filterObj = { where: {limit: 50} };//{roomname: 'is 4chan'}};

      //createdAt: {$gte: JSON.stringify({__type: Date, iso:2017-08-01T18:02:52.249Z}), order: -createdAt} };
      //, createdAt: {$gte: {_type: Date, iso:2011-08-15T18:02:52.249Z}}})
      
    
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      //data: filterObj,//'where={"roomname":"lobby"}',// JSON.stringify({createdAt: {$gte: {__type: Date, iso:2017-08-21T18:02:52.249Z}), limit: 10, order: -createdAt}}',
      contentType: 'application/json',
      success: this.afterFetch,//,
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to get message');
      }
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
  username: 'liz',
  text: 'whatwhat',
  roomname: 'is 4chan'
};

var app = App();
app.fetch();
app.send(message);

// $(document).ready(function() {
//   console.log("document ready!");
//   var myapp = App();
//   // myapp.fetch();
//   // return myapp;


// });





  
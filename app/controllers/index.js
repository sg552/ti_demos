/*
function clickImage(e) {
  //Ti.UI.createAlertDialog({title: 'hi hi hi', message: 'you clicked me'}).show();
  var url = "http://siwei.me";
  var client = Ti.Network.createHTTPClient({
     onload : function(e) {
         Ti.API.info("Received text: " + this.responseText);
         alert('success');
     },
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
  });
  client.open("GET", url);
  client.send();
}
*/
function clickImage(e) {
  //url = 'http://siwei.me'
  url = 'http://askdjf;alskdfjsdjfj.me'
  get_remote_url(url).
    then(function(response_text) {
      alert('success in clickImage, response_text.length:' + response_text.length)
    }, function(response_text){
      alert('failed in clickImage')
    }).
    done();
}
function get_remote_url(url) {
  deferred = Q.defer();
  client = Ti.Network.createHTTPClient(
      {
        onload: function(e) {
          alert('success in get_remote_url');
          Ti.API.info(this.responseText);
          deferred.resolve(this.responseText);
        },
        onerror: function(e) {
          Ti.API.error(e);
          alert('faled');
          deferred.reject( new Error('lalala'));
        },
        timeout: 5000
      })
  client.open('GET', url);
  client.send();
  return deferred.promise;
}

$.index.open();

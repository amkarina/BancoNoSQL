var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'VqSkPBVPQtSSSUeSd6F5Bztdu',
  consumer_secret: 'RuLNhkJRhJjcYeVIV9GrinsqNL9DsI458KaGoaCjlUIS5jnCRM',
  access_token_key: '229050848-oS40x5NbJpvRqrFk0o1iKiWb5zWxpcG2lCAy8Hk1',
  access_token_secret: 'tQVWwE0Z7GAEBv3TUEEohpzh15j6LDsanxam6HOTfC0Ml'
});
 
var params = { track: ['food', 'hungry', 'comida', 'gourmet']};

//var fs = require('fs');

/*client.stream('statuses/filter', params, function (stream) {
    stream.on('data', function (tweet) {
      fs.appendFile('C:/Users/Amanda/Documents/GitHub/Projeto/QueroComer/Projeto/twetts.txt', tweet.text, function (err) {
		    console.log( err );
	     });
    });*/


  var OAuth = require('oauth');
 console.log("teste");
 /*
  it('tests trends Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'your application consumer key',
      'your application secret',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      'your user token for this app', //test user token 
      'your user secret for this app', //test user secret             
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
  });
});
/*
var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});
 
// You can also get the stream in a callback if you prefer. 
client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});*/
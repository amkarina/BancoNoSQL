var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'VqSkPBVPQtSSSUeSd6F5Bztdu',
  consumer_secret: 'RuLNhkJRhJjcYeVIV9GrinsqNL9DsI458KaGoaCjlUIS5jnCRM',
  access_token_key: '229050848-oS40x5NbJpvRqrFk0o1iKiWb5zWxpcG2lCAy8Hk1',
  access_token_secret: 'tQVWwE0Z7GAEBv3TUEEohpzh15j6LDsanxam6HOTfC0Ml'
});
var fs = require('fs');
 /*
var params = { track: ['food', 'hungry', 'comida', 'gourmet']};
console.log("teste");


client.stream('statuses/filter', params, function (stream) {
    stream.on('data', function (tweet) {
      
  });
  

  stream.on('error', function(error) {
    throw error;
  });
});*/
var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;



  // Only run the rest of the code if we have a mongodb server with version >= 1.9.1
var track = "netflix,got,twd,seriado,série,himym,how i meet your mother,3porcento,gilmore,breakinbad,house,suits,";
track+= "black mirror,friends,vikings,gray,flash,arrow,gotham,the100,american horror history,blacklist,stranger things,crown,";
track+="htgawm,how to get away with murder,marvel,criminal minds, mr robot,vampire diaries,orange is the new black,";
track+="oitnb,homeland,the big bang theory,tbbt,luke cage,demolidor,dare devil,jessica jones,narcos,the originals,sense8,";
track+="bones,the fall,prision brake,gossip girls,csi,scandal,the good wife,dexter,house of cards, hoc,teen wolf";
track+="game of thrones,supernatural,pretty little liars,pll,westworld,blindspot,once upom a time,legends of tomorrow,shield";

var stream = client.stream('statuses/filter', {track:track ,location:'Brazil',language:'pt'});
stream.on('data', function(event) {
  MongoClient.connect('mongodb://127.0.0.1:27017/trabalho_pratico', function(err, db) {
    if(err) throw err;
     
     db.collection('tweets').save(event,{w: 1}, function(err, records) {
        if (err) console.log("erro ao salvar tweet - " + event.text);
        console.log("record added "+ records);
        //  db.collection.update({_id : records[0]._id}, {"created_at": new Date(data[5]+"-"+data[2]+"-"+data[2] + " " + data[3]) });
        db.close();
      });
  });
 
});
 
stream.on('error', function(error) {
  throw error;
});

var map = function() {
	                       emit(this.text, 1);
	                   };
var reduce = function(key, value) {                          
                          return Array.sum(value);
                      };
db.Vocabulary.mapReduce( map,
	                   	   reduce,
                      {query:{  $or :[
                                  {"text": /ar$/},
                                  {"text":/er$/},
                                  {"text":/ir$/},
                                  {"text":/or$/},
                                  {"text":/ur$/}] 
                        	}      
                      ,out:"contagem_texto"}
	);
db.contagem_texto.find();

var map = function() {  
    var summary = this.text;
    if (summary) { 
        // quick lowercase to normalize per your requirements
        summary = summary.toLowerCase().split(""); 
        for (var i = summary.length - 1; i >= 0; i--) {
            // might want to remove punctuation, etc. here
            if (summary[i])  {      // make sure there's something
               emit(summary[i], 1); // store a 1 for each word
            }
        }
    }
};
var reduce = function( key, values ) {    
    var count = 0;    
    values.forEach(function(v) {            
        count +=v;    
    });
    return count;
}
db.Vocabulary.mapReduce( map,
                         reduce,
                      {query:{  }      
                      ,out:"contagem_letras"}
  );
db.contagem_letras.find();


db.Vocabulary.aggregate( [
                         { $match: { "total": {$gt : 1000  } }},
                         { $group: { _id: "$type", total: { $sum: 1} } },
                         { $sort: { _id: 1 } }                     
                       ]
  );



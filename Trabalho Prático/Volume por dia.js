var map = function() {  
    var summary = this.created_at;
    var montarData = function(){
      var data = summary.split(" ");
      var mes;

      return new Date(data[5]+"-"+getMonthFromString(data[1])+"-"+data[2]);

    };  
    function getMonthFromString(mon){
     return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1;
    }
    if (summary) {       
      
        emit(montarData(), 1); // store a 1 for each word
            
    }
    
};
var reduce = function( key, values ) {             
    var count = 0;    
    values.forEach(function(v) {            
        count +=v;    
    });
    return count;
};
db.tweets.mapReduce( map,
                         reduce,
                      {query:{  }      
                      ,out:"volume_dia"}
  );
db.volume_dia.find();
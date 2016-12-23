//define função map
var map = function() {  
  //utiliza a propriedade created_at
  var summary = this.created_at;
  //transformar a string data em Date
  var montarData = function(){
    //quebra a string por espaço
    var data = summary.split(" ");
    var mes;
    // retorna uma data, montada no formato ano-mês-diaTHH:MI:SS
    return new Date(data[5]+"-"+getMonthFromString(data[1])+"-"+data[2]+"T"+ data[3].split(":")[0] +":00:00Z");
  };  
  //retorno o mês de uma string (o mês de entrada pode ser por extenso) retornando o número
  function getMonthFromString(mon){
    return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1;
  }
  if (summary) {       
    emit(montarData(), 1); //salva o valor 1 para cada data.
  }    
};
//define função reduce
var reduce = function( key, values ) {             
    var count = 0;    
  //para cada valor da chave, soma o value
    values.forEach(function(v) {            
        count +=v;    
    });
    return count;
};
//varre a collectionde tweets solicitando o map e o reduce, sem filtro e salva a saída na collection volume_hora_dia
db.tweets.mapReduce(map,
          reduce,
          {query:{  }      
          ,out:"volume_hora_dia"}
);
//ler a collection volume_hora_dia ordenando pela soma de forma descrescente
db.volume_hora_dia.find({},{value : -1});
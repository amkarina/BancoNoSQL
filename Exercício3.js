use nosqlclass;
db.Vocabulary.find( {"text":"feliz"}).explain({"executionStats":1});
//Número de documentos scaneados:291214
//Tempo que levou para fazer a consulta: 91ms

//Criar indíce simples
db.Vocabulary.createIndex({"text":1});
db.Vocabulary.find( {"text":"feliz"}).explain({"executionStats":1});
//Número de documentos scaneados: 1
//Tempo que levou para fazer a consulta: 19ms
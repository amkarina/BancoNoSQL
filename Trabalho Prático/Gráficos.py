# importando o pylab (da biblioteca matplotlib que instalamos) 
import pylab
import pymongo

from pymongo import MongoClient
client = MongoClient()
client = MongoClient('mongodb://localhost:27017/')
db = client.trabalho_pratico
termos = db.termos
result = termos.find().sort("value", -1).limit(15)
palavras = []
valores = []
for doc in result:
	palavras.append(doc['_id'])
	valores.append(doc['value'])

cor = ('r', 'b', '#00FF33')
pylab.figure(1)
x = range(len(palavras))
pylab.xticks(x, palavras)
pylab.xlabel('Termos')
pylab.ylabel('Quantidade')
pylab.grid(True)
pylab.bar(x,valores,0.5,color=cor, yerr=5, align='center')

pylab.show()



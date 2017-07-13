//Algoritimo de edição e exclusão
// Será necessário um refactory em todos os requerimentos


(function() {
  var piloto = {
    id: null,
    nome: null,
    valores: [
      {nomeValores: null}
    ]
  };
  
  
  
  var json = [
    {nomeCampo: 'id', valor: 1},
    {nomeCampo: 'nome',valor: 'gilluan'},
    {nomeCampo: 'nomeValores',valor: 'abc11111'},
    {nomeCampo: 'nomeValores',valor: 'asdfafsd'}
  ];
  
  function contarRepeticoes(obj) {
    _.filter();
  }
  
  contarRepeticoes(json);
  
  function has(obj, str) {
    _.forEach(obj, function(value, key) {
      if(_.isObject(value)) {
        has(value, "" + key + str);
      } else {
        console.log(str + ":" + value);
      }
    });
  }
  
  has(piloto);
  
  function preencherObjTmp(objtmp, item) {
    
    _.forEach(item, function (value, key) {
      
        console.log('valor: ' + value + "| key: " + key);
     // has(objtmp, value);
        if(_.has(objtmp, value)) {
          console.log(typeof objtmp[value]);
        
          objtmp[value] = item.valor;
      
        }  
    
      });
  }
  
  function converterMapa(obj) {
    
    
    var objtmp = _.clone(piloto);
    
    _.map(obj, function(item, i) {
      
      

        preencherObjTmp(objtmp, item);  

      
    });
    console.log('Piloto' + JSON.stringify(piloto));
   // console.log('ObjTmp' + JSON.stringify(objtmp));

  }
  //converterMapa(json);
})();

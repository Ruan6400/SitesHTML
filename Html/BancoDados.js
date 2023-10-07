function StorageService(origem){

    const get = function(){
        var dadosLocais = localStorage.getItem(origem);
        var DadosConvertidos = JSON.parse(dadosLocais);
        return DadosConvertidos;
    };
    
    const save = function(dados){
        var dadosConvertidos = JSON.stringfy(dados);
        localStorage.setItem(origem,dadosConvertidos);
    };
    
    const remover = function(id){
    var itensSalvos = get();
    var filtrados = itensSalvos.filter(function(valor){
        if(valor.id!= id){
            return valor;
        }
    });
    save(filtrados);
}
    const atualiza(dados){
        var itensSalvos = get();
        itensSalvos.forEach(function(valor,index){
            if(valor.id == dados.id){
                itensSalvos[index]=dados;
            }
        });
        save(itensSalvos);
    }
    
    return {get, save, remover};
}

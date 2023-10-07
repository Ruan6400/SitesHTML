const storageService = StorageService('clientes');

function Salva10(){
    var dados = Array.from({length:10},function(map,index){
        var id=index+1;
        return{
            id:id,
            nome:"Cliente "+id
        };
    });
    storageService.save(dados);
}

function GetItens(){
    var dados = storageService.get();
    console.table(dados);
}


function deleta(id){
    id=1;
    storageService.remover(id);
}

function alterar(){
    var novo = {
        id:3,
        nome = "Jão"
    }
    atualiza(novo);
}
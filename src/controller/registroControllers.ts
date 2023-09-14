const data: any[] = []
function criarRegistro (novoRegistro: any){
    data.push(novoRegistro)
}
function listatRegistro(){
    return data
}
function buscarRegistroPorId(id:any){
    return data[id]
}
function editarRegistro(id: any, novosDados: any){
    data[id] = {...data[id],...novosDados}
}
function deletarRegistro(id: any){
    data.splice(id,1)
}
module.exports = {
    criarRegistro,
    listatRegistro,
    buscarRegistroPorId,
    editarRegistro,
    deletarRegistro

}
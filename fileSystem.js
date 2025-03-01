//let {} = require ('bootstrap')
let { writeFile, readFile } = require('fs')

//function exemploFuncao(val1,val2){
   // console.log(val1 + val2)
//}
//exemploFuncao();

writeFile (
    "arquivo.txt",
    "Texto escrito pelo VSCODE",
    (erro) => {
        if (erro) {
            throw erro
        } else {
            console.log('Escreveu com sucesso')
        }
    } 
)

readFile(
    'arquivo.txt',
    'utf-8',
    (erro, texto) => {
        if (erro) {
            throw erro            
        } else {
            console.log('texto')
        }
    }
)
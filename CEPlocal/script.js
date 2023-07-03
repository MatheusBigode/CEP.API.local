    let url = "./ceps.json"

    let cod = document.getElementById("cod")

    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")
    let pais = document.getElementById("pais")

function busca() {
    fetch(url)
         .then(res => res.json())
         .then(data => {
            for(var cep of data.ceps){
                if(cod.value == cep.codigo){
                    bairro.value = cep.bairro
                    cidade.value = cep.cidade
                    estado.value = cep.estado
                    pais.value = cep.pais

                    console.log(
                        cep
                    )
                    break
                }

                
            }
         })

}
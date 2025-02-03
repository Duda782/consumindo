function Procurar() {
    let pais = document.getElementById('pais').value
    let finalURL = "https://restcountries.com/v3.1/name/${pais}?fullText=true"
    console.log(finalURL)
    fetch(finalURL)
        .then(function (response) {
            return response.json()
        }
        )
        .then(function (data) {
        console.log(data[0])
        console.log(data[0].Populacao)
        console.log(data[0].Capital[0])
        console.log(data[0].Continente[0])

        let bandeira = document.getElementsById('bandeira')
        let nome = document.getElementsById('nome')
        let capital = document.getElementsById('Capital')
        let Pop = document.getElementsById('Pop')
        let Cont = document.getElementsById('Cont')

        nome.innerHTML= data[0].capital[0]
        Cont.innerHTML= data[0].continente[0]
        Pop.innerHTML= data[0].Populacao
        bandeira.src= data[0].flags.svg
        
        })
}
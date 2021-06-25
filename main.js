
var image = document.createElement('img')
image.src = 'https://st3.depositphotos.com/1001411/18230/i/1600/depositphotos_182307910-stock-photo-two-bunnies-on-white-background.jpg'

fetch('https://ghibliapi.herokuapp.com/films')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        appendData(data)
    })
    .catch((err)=>{
        console.log(err)
    })

function appendData (data){
    var mainApp = document.getElementById('root')
    var container = document.createElement('div')
    var header = document.createElement('h1')
    header.innerHTML = 'RABBIT MOVIES'
    container.setAttribute('class', 'center')
    mainApp.appendChild(header)
    mainApp.appendChild(image)
    mainApp.appendChild(container)
    container.setAttribute("class", "container")
    for(var i = 0; i < data.length; i++){
        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        var h1 = document.createElement('h2')
        h1.innerHTML = "Title: " + data[i].title;
        var p = document.createElement('p')
        p.innerHTML = 'Description: ' + data[i].description.substring(0, 500) +'....'
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        console.log(container.innerHTML)
    }
}
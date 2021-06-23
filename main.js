function imgSlider(anything){
    document.querySelector('.starbucks').src = anything
}
function changeColor(color){
    const circle = document.querySelector('.circle')
    circle.style.background = color

    const texto = document.querySelector('#nome')
    texto.style.color = color

    const btc = document.getElementById('bt')
    btc.style.background = color
    btc.style.boxShadow = `0 0 1em ${color}`
    
    const audio = document.querySelector('#audio1')
    audio.volume = 0.1
    audio.play()
    
    

    

    
    
}
function nameTex(nome){
    const x = document.getElementById('nome')
        x.innerHTML = " "+nome
  

}
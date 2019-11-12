window.onload = loadPage

function loadPage(){
    hoverOverElin()
}


function hoverOverElin(){
    let elin = document.getElementById('elin')

    elin.addEventListener('mouseover', function(){

        elin.style.color = '#FFE260'

        if(elin.style.color = '#FFE260'){
            elin.addEventListener('mouseout', function(){
                elin.style.color = 'white'
            }
        )}
    })
}
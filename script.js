window.onload = loadPage

function loadPage(){
    contactMe()
    clickArrowAndGoToPresentation()
    showTextAboutBaby()
    hidetextAboutBaby()
    showTextAboutGronaBrunnen()
    hideTextAboutGronaBrunnen()
}


function contactMe(){
    let contact = document.getElementById('contact')
    
    contact.addEventListener('mouseover', function(){
        contact.style.color = '#FFE260'

        if(contact.style.color = 'solid'){
            contact.addEventListener('mouseout', function(){
                contact.style.color = 'white'
            })
    }

   
    }

    )}

function clickArrowAndGoToPresentation(){

    let arrow = document.getElementsByClassName('fa-chevron-down')

}


function showTextAboutBaby(){

$('#textgame').hide()

$('.cryingBaby').mouseover(function(){
    $('#textgame').show()
})
}

function hidetextAboutBaby(){

    $('.cryingBaby').mouseleave(function(){
        $('#textgame').hide()
    })
}

function showTextAboutGronaBrunnen(){
    
    $('#gronabrunnen').hide()

    $('.gronaBrunnen').mouseover(function(){
       $('#gronabrunnen').show()
    })
}

function hideTextAboutGronaBrunnen(){

    $('#gronabrunnen').show()

    $('.gronaBrunnen').mouseleave(function(){
        $('#gronabrunnen').hide()
    })
}








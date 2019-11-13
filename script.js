window.onload = loadPage

function loadPage(){
    clickContactAndGoToFooter()
    contactMe()
    clickArrowAndGoToPresentation()
    showTextAboutBaby()
    hidetextAboutBaby()
    showTextAboutGronaBrunnen()
    hideTextAboutGronaBrunnen()
    toggleMenu()
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

    let arrow = document.getElementById('arrow')

    arrow.addEventListener('click', function(){
        
        window.scrollTo({
            top: 2000,
            left: 2000,
            behavior: 'smooth'
        });

    })
}

function clickContactAndGoToFooter(){
    
   let contact =  document.getElementById('contact')

   contact.addEventListener('click', function(){

    window.scrollTo({
        top: 2000,
        left: 2000,
        behavior: 'smooth'
      });
   })

}

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

    $('.gronaBrunnen').mouseout(function(){
        $('#gronabrunnen').hide()
    })
}

 
/**
 * Header Ipad/Iphone
 */
function toggleMenu(){

    let hamburger = document.querySelector('.fa-bars')

    let menu = document.querySelector('ul')
    hamburger.addEventListener('click', function(){

        if(!menu.style.opacity){
            menu.style.opacity = '1'
            menu.style.margin = '0'

        }
        else {
            menu.style.opacity = null
            menu.style.margin = null
        }
    })
}   







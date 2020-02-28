window.onload = loadPage


/**
 * Det här är alla mina funktioner.
 */
function loadPage(){
    pressArrowAndGoToPresentation()
    clickContactAndGoToFooter()
    contactMe()
    showTextAboutBaby()
    hidetextAboutBaby()
    showTextAboutGronaBrunnen()
    hideTextAboutGronaBrunnen()
    toggleMenu()
    showTextAboutColorSplat()
    hideTextAboutColorSplat()
    showTextAboutGuessTheNumber()
    hideTextAboutGuessTheNumber()
}

/**
 * Funktion som gör animation på "contact" på startsidan
 */
function contactMe(){
    let contact = document.getElementById('contact')
    
    contact.addEventListener('mouseover', function(){
        contact.style.color = '#03c'

        if(contact.style.color = 'solid'){
            contact.addEventListener('mouseout', function(){
                contact.style.color = 'white'
            })
    }

   
    }

)}

function pressArrowAndGoToPresentation(){

    let arrow = document.getElementById('arrow')

    arrow.addEventListener('click', function(){

        window.scrollTo({
            top: 700,
            left: 700, 
            behavior: 'smooth'
        })
    })
}

/**
 * Funktion som gör att sidan scrollas ner till footern när man klickar på contact i headern.
 */

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


/**
 * Funktion som gör att en text visas över den gråtande bebisen när man hovrar över den. 
 */
function showTextAboutBaby(){

$('#textgame').hide()

$('.cryingBaby').mouseover(function(){
    $('#textgame').show()
})
}

/**
 * Funktion som gör att texten från föregående funktion försvinner när man inte hovrar. 
 */
function hidetextAboutBaby(){

    $('.cryingBaby').mouseleave(function(){
        $('#textgame').hide()
    })
}

/**
 * Funktion som gör att en text visas över "gröna brunnen" när man hovrar över den. 
 */
function showTextAboutGronaBrunnen(){
    
    $('#gronabrunnen').hide()

    $('.gronaBrunnen').mouseover(function(){
       $('#gronabrunnen').show()
    })
}

/**
 * Funktion som gör att texten från den föregående funktionen försvinner när man inte hovrar. 
 */
function hideTextAboutGronaBrunnen(){

    $('.gronaBrunnen').mouseout(function(){
        $('#gronabrunnen').hide()
    })
}

function showTextAboutColorSplat(){
    
    $('#colorSplatOverLay').hide()

    $('.colorSplat').mouseover(function(){
       $('#colorSplatOverLay').show()
    })
}

function hideTextAboutColorSplat(){

    $('.colorSplat').mouseout(function(){
        $('#colorSplatOverLay').hide()
    })
}

function showTextAboutGuessTheNumber(){
    
    $('#guessTheNumberOverLay').hide()

    $('.guessTheNumber').mouseover(function(){
       $('#guessTheNumberOverLay').show()
    })
}

function hideTextAboutGuessTheNumber(){

    $('.guessTheNumber').mouseout(function(){
        $('#guessTheNumberOverLay').hide()
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







window.onload = loadPage

function loadPage(){
    contactMe()
}


function contactMe(){
    let contact = document.getElementById('contact')
    
    contact.addEventListener('mouseover', function(){
        contact.style.borderBottomStyle = 'solid'
    })

    if(contact.style.borderBottomStyle = 'solid'){
        contact.addEventListener('mouseout', function(){
            contact.style.borderBottomStyle = 'none'
        })
    }

}



function ItemWasSelected(id){
    /*  alert("funzione partita") */
    console.log('test: ');
     console.log(id);//funziona

     //tiro fuori il risultato dello span dentro li selezionato
    var valueOfSpanOfLI = id.childNodes[1].innerHTML;
                                     //tiro fuori il testo che si trova nello stesso li dello span selezionato
    var valueOfLI = id.childNodes[0].textContent;
     
                                     //risultato che andrà nella barra di ricerca
    var valueSuggSelected = valueOfLI+valueOfSpanOfLI;

     document.getElementById('inputSearchBar').value=valueSuggSelected;
     document.getElementById('containerSuggestionID').style.visibility='hidden';
                                   }

function ServiceSelected(event){
/* alert("FUNZIONE PARTITA"); */
console.log(event.target.parentElement.attributes.id.value)
window.sessionStorage.setItem('idServiceSelected',event.target.parentElement.attributes.id.value)
}







function SmoothScroll(event){
// Select all links with hashes

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            /* $target.attr('tabindex','-1'); */ // Adding tabindex for elements not focusable
            $target.focus();  // Set focus again
          }
        });
      }
    }
  });

} 




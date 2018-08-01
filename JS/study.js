var accordion = function(){
	var accordions = document.getElementsByClassName('accordion-title');

	for(var i = 0; i < accordions.length; i++){
		accordions[i].addEventListener('click', function(){
			this.classList.toggle('open');
			var content = this.nextElementSibling;
			if (this.classList.contains('open')) {
				content.style.display = 'block';
				
				// rozwiązanie pkt. 2, czyli zamykanie pozostałych sekcji akordeonu
				var clickedHeader = this;
				var openHeaders = document.getElementsByClassName('accordion-title open');
				for(var k = 0; k < openHeaders.length; k++){
					if(openHeaders[k] != clickedHeader) {
						openHeaders[k].click();
					}
				}
				// koniec rozwiązania pkt. 2
			} 
			else {
				content.style.display = 'none';
			}
		});
	}
	
	// rozwiązanie pkt. 1, czyli wyświetlania pierwszej treści 
	// od razu po otwarciu strony:
	accordions[0].click();
}

accordion();
/*----Method to create a responsive menu icon for mobile version website----*/
function myFunction() {
	var x = document.getElementById("myNav");
	if (x.className === "navigation") {
		x.className += " responsive";
	} else {
		x.className = "navigation";
	}
}


/*--------Function to create the flipbook------*/
function loadFlipBook() {


	if ($(window).width() > 600) {

		$('.flipbook').turn({

      		//Width
      		width:700,
      
      		//Height
      		height:500,
      
     		 // Auto center this flipbook
     		autoCenter: true

  		});


		$('.flipbook1').turn({

			width:700,

			height:500,

			autoCenter: true

		});


		$('.flipbook2').turn({

			width:700,

			height:500,

			autoCenter: true

		});

		$('.flipbook3').turn({

			width:700,

			height:500,

			autoCenter: true

		});

		$('.flipbook4').turn({

			width:700,

			height:500,

			autoCenter: true

		});

		$('.flipbook5').turn({

			width:700,

			height:500,

			autoCenter: true

		});

		$('.flipbook6').turn({

			width:700,

			height:500,

			autoCenter: true

		});


	}

}


function disableEffect(){

	if ($(window).width() < 600) {

	$('.flipbook').turn({

      		//Width
      		width:700,
      
      		//Height
      		height:500,
      
     		 // Auto center this flipbook
     		autoCenter: true

  		});


	}

}
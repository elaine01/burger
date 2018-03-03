$(function() {
	$('.change-eat').on('click', function(e) {
		let id = $(this).data('id');
		let newEat = $(this).data('neweat');

		let newEatState = {
			devoured: true
		};
	});

	$('.create-burger-form').on('submit', function(e) {
		e.preventDefault();
		let newBurger = {
			name: $('#burger-form-text').val()
		};

		$.ajax('/order', {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				// reload the page to get the updated list
				//location.reload();
			}
		);
	});
});

// function allLetter(inputtxt) { 
// 	let letters = /^[A-Za-z]+$/;
// 	if(inputtxt.value.match(letters)) {
//     return true;
// 	} else {
// 		alert('Please type in letters');
// 		return false;
// 	}
// }
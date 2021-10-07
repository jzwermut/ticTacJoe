let avatar1Id = "";
let avatar2Id = "";
let p1Name = "";
let p2Name = "";

const checkResult = () => {
	let check = tictacjoe.checkWinner();
	if (check === 'p1') {
		$('h2#announcer').text(`${p1Name} wins!`)
		$('canvas').removeClass('hideSection');
		$('#turn').addClass('hideSection');
		$('section#gameBoard').addClass('hideSection');
	}
	else if (check === 'p2') {
		$('h2#announcer').text(`${p2Name} wins!`)
		$('canvas').removeClass('hideSection');
		$('#turn').addClass('hideSection');
		$('section#gameBoard').addClass('hideSection');
	}
	else if (check === 'draw') {
		$('h2#announcer').text('Game Over. It\'s a draw')
	}
}

const setNameP1 = () => {
	let name = $('input#p1Name').val();
	$('#player1 h3').text(name);
	p1Name = name;
}

const setNameP2 = () => {
	let name = $('input#p2Name').val();
	$('#player2 h3').text(name);
	p2Name = name;
}

const getId = (element) => {
	return element.target.id;
}

const setJoe = (element) => {
	let src = element.target.src 
	// element.currentTarget.attributes[1].nodeValue;
	return src;
}

const makeChoice = (choice, id1 = avatar1Id, id2 = avatar2Id) => {
	let currentTurn = tictacjoe.turn();
	let result = tictacjoe.choose(`${choice}`);
		if (result === 'Already selected') {
			$('h2#announcer').text('Already selected. Choose another square');
			}
		else {
			if (currentTurn === 'player1') {
				$(`#${choice}`).css("background-image", `url(\'images/${id1}.jpeg\')`)
				// addClass('murray');
				$('h2#announcer').text(`Nice choice. You\'re up ${p2Name}`)
				$('#player1').removeClass('yourturn')
				$('#player2').addClass('yourturn')
			 }
			else {
				$(`#${choice}`).css("background-image", `url(\'images/${id2}.jpeg\')`)
				// addClass('cage');
				$('h2#announcer').text(`Nice choice. You\'re up ${p1Name}`)
				$('#player1').addClass('yourturn')
				$('#player2').removeClass('yourturn')
			}
		}
}

$(document).ready(function() {
	$('section.setp2Name').addClass('hideSection');
	$('section#setJoe').addClass('hideSection');
	$('#turn').addClass('hideSection');
	$('section#gameBoard').addClass('hideSection');
	$('.playAgain').addClass('hideSection');
	$('.changeJoes').addClass('hideSection');
	$('canvas').addClass('hideSection');

	$('button#p1Name').on('click', function() { //when player 1 sets their name do the following
		setNameP1();
		$('section.setp1Name').addClass('hideSection'); //hides set p1 name section
		$('section#setJoe').removeClass('hideSection'); //Shows set Joe section
		$('section.setp2Joe').addClass('hideSection');
		$('section.setp1Joe').removeClass('hideSection') //Hides p2 set Joe section
		$('h1').addClass('hideSection') //Removes the welcome to tic tac toe message
	})

	$('section.setp1Joe img').on('click', function(element) { //when player 1 sets their image do the following
		avatar1Id = getId(element);
		let src = setJoe(element);
		$('.who#player1 img').attr('src', `${src}`);
		$('section.setp2Name').removeClass('hideSection');//Show player 2 name input
		$('section#setJoe').addClass('hideSection'); //hide the setJoe section

	})

	$('button#p2Name').on('click', function() { //when player 2 sets their name
		setNameP2();
		$('section.setp2Name').addClass('hideSection'); //hides set p2 name section
		$('section#setJoe').removeClass('hideSection'); //Shows set Joe section
		$('section.setp1Joe').addClass('hideSection'); //Hides p1 set Joe section
		$('section.setp2Joe').removeClass('hideSection'); //Shows p2 set Joe section
		
	})

		$('section.setp2Joe img').on('click', function(element) {
		avatar2Id = getId(element);	
		let src = setJoe(element);
		$('.who#player2 img').attr('src', `${src}`);
		$('section#setJoe').addClass('hideSection');
		$('section#gameBoard').removeClass('hideSection');
		$('.playAgain').removeClass('hideSection');
		$('.changeJoes').removeClass('hideSection');
		$('#turn h2').addClass('hideSection')
		$('h1').text('Let\'s play!')
		$('h1').removeClass('hideSection')
		$('#turn').removeClass('hideSection'); //Shows player avatars
	})

	$('#player1').addClass('yourturn');

	$(`#top-left`).on('click', function() {
		makeChoice('top-left');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$(`#top-mid`).on('click', function() {
		makeChoice('top-mid');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$(`#top-right`).on('click', function() {
		makeChoice('top-right');
		checkResult();
		$('h1').addClass('hideSection')
	})


	$(`#mid-left`).on('click', function() {
		makeChoice('mid-left');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$(`#mid-mid`).on('click', function() {
		makeChoice('mid-mid');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$(`#mid-right`).on('click', function() {
		makeChoice('mid-right');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$(`#bottom-left`).on('click', function() {
		makeChoice('bottom-left');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$(`#bottom-mid`).on('click', function() {
		makeChoice('bottom-mid');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$(`#bottom-right`).on('click', function() {
		makeChoice('bottom-right');
		checkResult();
		$('h1').addClass('hideSection')
	})

	$('button.playAgain').on('click', function() { //resets the game
		tictacjoe.reset();
		$('.square').css("background-image", "");
		$('#player1').addClass('yourturn')
		$('#player2').removeClass('yourturn')
		$('canvas').addClass('hideSection');
		$('h2#announcer').text('');
		$('#turn').removeClass('hideSection');
		$('section#gameBoard').removeClass('hideSection');
	})

	$('button.changeJoes').on('click', function() { //resets the game
		tictacjoe.reset();
		$('section.setp1Name').removeClass('hideSection');
		$('.square').css("background-image", "");
		$('#player1').addClass('yourturn')
		$('#player2').removeClass('yourturn')
		$('#turn').addClass('hideSection');
		$('section#gameBoard').addClass('hideSection');
		$('.playAgain').addClass('hideSection');
		$('.changeJoes').addClass('hideSection');
		$('canvas').addClass('hideSection');
		$('h2#announcer').text('');
	})

})
let avatar1Id = "";
let avatar2Id = "";
let p1Name = "";
let p2Name = "";

const checkResult = () => {
	let check = tictacjoe.checkWinner();
	if (check === 'p1') {
		$('h2#announcer').text(`${p1Name} wins!`)
	}
	else if (check === 'p2') {
		$('h2#announcer').text(`${p2Name} wins!`)
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
				$('h2#announcer').text('Nice choice')
				$('#player1').removeClass('yourturn')
				$('#player2').addClass('yourturn')
			 }
			else {
				$(`#${choice}`).css("background-image", `url(\'images/${id2}.jpeg\')`)
				// addClass('cage');
				$('h2#announcer').text('Nice choice')
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

	$('button#p1Name').on('click', function() {
		setNameP1();
		$('section.setp1Name').addClass('hideSection');
		$('section.setp2Name').removeClass('hideSection');
		$('#turn').removeClass('hideSection');
	})

	$('button#p2Name').on('click', function() {
		setNameP2();
		$('section.setp2Name').addClass('hideSection');
		$('section#setJoe').removeClass('hideSection');
		$('section.setp2Joe').addClass('hideSection');
	})

	$('section.setp1Joe img').on('click', function(element) {
		avatar1Id = getId(element);
		let src = setJoe(element);
		$('.who#player1 img').attr('src', `${src}`);
		$('section.setp1Joe').addClass('hideSection');
		$('section.setp2Joe').removeClass('hideSection');

	})

		$('section.setp2Joe img').on('click', function(element) {
		avatar2Id = getId(element);	
		let src = setJoe(element);
		$('.who#player2 img').attr('src', `${src}`);
		$('section#setJoe').addClass('hideSection');
		$('section#gameBoard').removeClass('hideSection');
		$('.playAgain').removeClass('hideSection');
		$('.changeJoes').removeClass('hideSection');
	})

	$('#player1').addClass('yourturn');

	$(`#top-left`).on('click', function() {
		makeChoice('top-left');
		checkResult();
	})

	$(`#top-mid`).on('click', function() {
		makeChoice('top-mid');
		checkResult();
	})

	$(`#top-right`).on('click', function() {
		makeChoice('top-right');
		checkResult();
	})


	$(`#mid-left`).on('click', function() {
		makeChoice('mid-left');
		checkResult();
	})

	$(`#mid-mid`).on('click', function() {
		makeChoice('mid-mid');
		checkResult();
	})

	$(`#mid-right`).on('click', function() {
		makeChoice('mid-right');
		checkResult();
	})

	$(`#bottom-left`).on('click', function() {
		makeChoice('bottom-left');
		checkResult();
	})

	$(`#bottom-mid`).on('click', function() {
		makeChoice('bottom-mid');
		checkResult();
	})

	$(`#bottom-right`).on('click', function() {
		makeChoice('bottom-right');
		checkResult();
	})

	$('button.playAgain').on('click', function() { //resets the game
		tictacjoe.reset();
		$('.square').css("background-image", "");
		$('#player1').addClass('yourturn')
		$('#player2').removeClass('yourturn')
	})

	$('button.changeJoes').on('click', function() { //resets the game
		tictacjoe.reset();
		$('.square').css("background-image", "");
		$('#player1').addClass('yourturn')
		$('#player2').removeClass('yourturn')
		$('section#gameBoard').addClass('hideSection');
		$('.playAgain').addClass('hideSection');
		$('.changeJoes').addClass('hideSection');
		$('section#setJoe').removeClass('hideSection');
		$('section.setp1Joe').removeClass('hideSection');
		$('section.setp2Joe').addClass('hideSection');
		$('h2#announcer').text('');
	})

})
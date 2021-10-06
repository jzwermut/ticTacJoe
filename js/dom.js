const checkResult = () => {
	let check = tictacjoe.checkWinner();
	if (check === 'p1') {
		$('h2').text('Player one wins!')
	}
	else if (check === 'p2') {
		$('h2').text('Player two wins!')
	}
	else if (check === 'draw') {
		$('h2').text('Game Over. It\'s a draw')
	}
}

const makeChoice = (choice) => {
	let currentTurn = tictacjoe.turn();
	let result = tictacjoe.choose(`${choice}`);
		if (result === 'Already selected') {
			$('h2').text('Already selected. Choose another square');
			}
		else {
			if (currentTurn === 'player1') {
				$(`#${choice}`).addClass('murray');
				$('h2').text('Nice choice')
				$('#player1').removeClass('yourturn')
				$('#player2').addClass('yourturn')
			 }
			else {
				$(`#${choice}`).addClass('cage');
				$('h2').text('Nice choice')
				$('#player1').addClass('yourturn')
				$('#player2').removeClass('yourturn')
			}
		}
}

$(document).ready(function() {
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

	$('button').on('click', function() {
		tictacjoe.reset();
		$('.square').removeClass('cage');
		$('.square').removeClass('murray');
	})
})
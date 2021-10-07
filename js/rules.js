// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)
const tictacjoe = {
	player1Moves: [],

	player2Moves: [],

	board: [],

	score: {
		player1: 0,
		player2: 0
	},

	turn: function () { //alternates turns depending on number of moves made. Player one always goes first in this case
		if (this.player1Moves.length > this.player2Moves.length) {
			return 'player2'
			}
		else {
			return 'player1'
			} 
		},

	choose: function (choice) {
		if (this.board.includes(choice)) {
			return 'Already selected';
		}
		else {
			if(this.turn() === 'player1') {
				this.player1Moves.push(choice);
				this.board.push(choice);
			}
			else {
				this.player2Moves.push(choice);
				this.board.push(choice);
			}
		}
	},

	checkWinner: function () {
		let p1Row = [];
		let p1Col = [];
		let p2Row =[];
		let p2Col= [];
		for (let i=0; i < this.player1Moves.length; i++) { //loops through player 1 choices
			let move = this.player1Moves[i].split('-');
			p1Row.push(move[0]);
			p1Col.push(move[1]);
		}

		for (let i=0; i < this.player2Moves.length; i++) { //loops through player 2 choices
			let move = this.player2Moves[i].split('-');
			p2Row.push(move[0]);
			p2Col.push(move[1]);
		}

		// Checks the 4 scenarios in which player 1 can win
		if (p1Row.filter(x => x==='top').length === 3 || p1Row.filter(x => x==='mid').length === 3 || p1Row.filter(x => x==='bottom').length === 3) { // checks if player1 has all 3 in a row
			this.score.player1 += 1;
			return `p1`;
		}
		else if (p1Col.filter(x => x==='left').length === 3 || p1Col.filter(x => x==='mid').length === 3 || p1Col.filter(x => x==='right').length === 3) { // checks if player1 has all 3 in a row
			this.score.player1 += 1;
			return `p1`;
		}
		else if (this.player1Moves.includes('top-left') && this.player1Moves.includes('mid-mid') && this.player1Moves.includes('bottom-right')) { // checks if player1 has diagonal pattern 1
			this.score.player1 += 1;
			return `p1`;
		}
		else if (this.player1Moves.includes('top-right') && this.player1Moves.includes('mid-mid') && this.player1Moves.includes('bottom-left')) { // checks if player1 has diagonal pattern 2
			this.score.player1 += 1;
			return `p1`;
		}

		// Checks the 4 scenarios in which player 2 can win
		else if (p2Row.filter(x => x==='top').length === 3 || p2Row.filter(x => x==='mid').length === 3 || p2Row.filter(x => x==='bottom').length === 3) { // checks if player1 has all 3 in a row
			this.score.player2 += 1;
			return `p2`;
		}
		else if (p2Col.filter(x => x==='left').length === 3 || p2Col.filter(x => x==='mid').length === 3 || p2Col.filter(x => x==='right').length === 3) { // checks if player1 has all 3 in a row
			this.score.player2 += 1;
			return `p2`;
		}
		else if (this.player2Moves.includes('top-left') && this.player2Moves.includes('mid-mid') && this.player2Moves.includes('bottom-right')) { // checks if player1 has diagonal pattern 1
			this.score.player2 += 1;
			return `p2`;
		}
		else if (this.player2Moves.includes('top-right') && this.player2Moves.includes('mid-mid') && this.player2Moves.includes('bottom-left')) { // checks if player1 has diagonal pattern 2
			this.score.player2 += 1;
			return `p2`;
		}

		else if (this.board.length === 9) {
			return `draw`;
		}
	},

reset: function () {
	this.player1Moves.splice(0, this.player1Moves.length);
	this.player2Moves.splice(0, this.player2Moves.length);
	this.board.splice(0, this.board.length);
	},

hardReset: function () {
	this.reset();
	this.score.player1 = 0;
	this.score.player2 = 0;
}
}

window.onload = function what() {
	var words = [
		"exaggerate",
		"burial",
		"advantage",
		"sow",
		"evolution",
		"activate",
		"ring",
		"family",
		"exception",
		"conglomerate",
		"text",
		"real",
		"poem",
		"past",
		"muscle",
		"sheep",
		"mask",
		"mutter",
		"soft",
		"large"
	];

	var word = words[Math.floor(Math.random() * words.length)];
	console.log(word);
	var answerArray = [];
	var lose = 0;
	var win = 0;

	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}

	document.getElementById("word").innerHTML = answerArray.join(" ");

	document.onkeyup = function() {
		var wordFordiv = answerArray;
		var guess = event.key;
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				win++;

				if (win >= 9) {
					document.getElementById("loses").innerHTML =
						//does not quite work, unsure why.
						"You win! game will restart in 5 seconds. Word was " + word + ".";
					setTimeout(function() {
						location.reload();
					}, 5000);
				}
			}
			if (word[j] !== guess) {
				if (j + 1 === word.length) {
					var div1 = document.createElement("div");
					div1.innerHTML = guess;
					document.body.append(guess + "    ");

					//adds the correct letters when they are guessed, not sure why.

					var picker = answerArray.includes(guess);
					console.log(picker);

					if (picker !== true) {
						lose++;
						var div2 = document.getElementById("loses");
						div2.innerHTML = lose;
						console.log(lose);
					}

					console.log(word[j]);
					console.log(guess);
					console.log(answerArray);
					if (lose >= 9) {
						document.getElementById("loses").innerHTML =
							"Out of lives, game will restart in 5 seconds. Word was " +
							word +
							".";
						setTimeout(function() {
							location.reload();
						}, 5000);
					}
				}
			}
			document.getElementById("word").innerHTML = wordFordiv.join(" ");
		}
	};
};

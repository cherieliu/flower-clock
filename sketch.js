function setup() {
	// createCanvas(800, 600); // make an HTML canvas element width x height pixels
	createCanvas(windowWidth, windowHeight);
}

function flower() {
	translate(windowWidth / 2, windowHeight / 2);
	fill(123, 63, 0);
	ellipse(0, 0, 180, 180);
	for (var t = 0; t < 12; t++) {
		if (hour() % 12 == t - 6 || hour() % 12 == t + 6) {
			fill(255, 255, 179);
			ellipse(0, 220, 100, 250);
			fill(251, 236, 93);
			minutesy = 95 + 125 * minute() / 60;
			minutesh = 250 * minute() / 60;
			ellipse(0, minutesy, 100 * minute() / 60, minutesh);
			fill(255, 192, 0);

			secondy = minutesy - (minutesh / 2) + (minutesh / 2) * (second() / 60);
			secondh = minutesh * second() / 60;

			ellipse(0, secondy, 100 * minute() / 60 * second()/ 60, secondh);
		} else {
			fill(255, 192, 0);
			ellipse(0, 220, 100, 250);
		}

		rotate(PI / 6);
	}
}

function draw() {
	background(225);
	flower();
}

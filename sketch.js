let m = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	m = minute();
}

function flower() {
	// print out new minute
	if (minute() != m) {
		m = minute();
		console.log(m);
	}

	translate(windowWidth / 2, windowHeight / 2);
	// brown center of sunflower
	stroke(92, 64, 51);
	strokeWeight(4);
	fill(123, 63, 0);
	ellipse(0, 0, 180, 180);

	// petals for each hour
	for (var t = 0; t < 12; t++) {
		if (hour() % 12 == t - 6 || hour() % 12 == t + 6) {
			// hour petal
			strokeWeight(2);
			stroke(255, 255, 179);
			fill(255, 255, 179);
			ellipse(0, 220, 100, 250);

			// minutes petal
			strokeWeight(1);
			stroke(251, 236, 93);
			fill(251, 236, 93);
			minutesy = 95 + 125 * minute() / 60;
			minutesh = 250 * minute() / 60;
			ellipse(0, minutesy, 100 * minute() / 60, minutesh);
			
			// seconds petal
			stroke(255, 192, 0);
			fill(255, 192, 0);
			secondy = minutesy - (minutesh / 2) + (minutesh / 2) * (second() / 60);
			secondh = minutesh * second() / 60;
			ellipse(0, secondy, 100 * minute() / 60 * second()/ 60, secondh);
		} else {
			// hour petal
			strokeWeight(2);
			stroke(255, 255, 179);
			fill(255, 192, 0);
			ellipse(0, 220, 100, 250);
		}

		rotate(PI / 6);
	}
}

function draw() {
	bgcolors = ['#2d2d86', '#333399', '#4040bf', '#5353c6', 
	'#884dff', '#cc66ff', '#cc99ff', '#ccccff', '#99ccff', '#b3d9ff', '#b3d9ff', '#e6f3ff'];
	let hourind = hour() % 12;
	if (hour() > 12) {
		hourind = 24 - hour();
	}
	background(bgcolors[hourind]);
	flower();
}

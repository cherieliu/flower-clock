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

	let h = hour();
	if (h > 12) {
		h = h % 12;
	}

	translate(windowWidth / 2, windowHeight / 2);
	// brown center of sunflower
	stroke(92, 64, 51);
	strokeWeight(4);
	fill(123, 63, 0);
	ellipse(0, 0, 180, 180);
	// sunflower stem
	stroke(0, 153, 51);
	strokeWeight(4);
	fill(0, 204, 68);
	rect(0, 90, 10, 300);

	// display petals for the hours that have passed
	for (var t = 0; t < h; t++) {
		strokeWeight(2);
		stroke(255, 255, 179);
		fill(255, 192, 0);
		ellipse(0, -220, 100, 250);
		rotate(PI / 6);
	}

	// display petal for current hour
	// hour petal
	strokeWeight(2);
	stroke(255, 255, 179);
	fill(255, 255, 179);
	ellipse(0, -220, 100, 250);

	// minutes petal
	strokeWeight(1);
	stroke(251, 236, 93);
	fill(251, 236, 93);
	minutesy = 95 + 125 * minute() / 60;
	minutesh = 250 * minute() / 60;
	ellipse(0, -minutesy, 100 * minute() / 60, minutesh);
	
	// seconds petal
	stroke(255, 192, 0);
	fill(255, 192, 0);
	secondy = minutesy - (minutesh / 2) + (minutesh / 2) * (second() / 60);
	secondh = minutesh * second() / 60;
	ellipse(0, -secondy, 100 * minute() / 60 * second()/ 60, secondh);
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

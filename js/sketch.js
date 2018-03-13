const UP = -1
const DOWN = 1
const LEFT = -1
const RIGHT = 1
let ball
let p1
let p2
let band = true

/*function preload() {
  soundFormats('mp3', 'ogg')
  hit = loadSound('assets/misc128.mp3')
  goal = loadSound('assets/TENAPPL1.mp3')
}*/

function setup (){
	createCanvas(windowWidth, windowHeight);
	ball = new Ball('white')
	p1 = new Paddle(1, 'blue')
	p2 = new Paddle(2, 'red')

}

function draw (){
	background('rgb(0, 0, 0)')
	
	/*stroke(255,255,255)
	rect(1, 1, windowWidth-1, windowHeight-1)*/

	drawLine()
	drawStage()

	ball.draw()
	ball.move()
	if (ball.collision(p1) || ball.collision(p2)) {
		ball.move()
		ball.c = p1.c
		ball.draw()
	}
	let checkScore = ball.checkScore()
	if (checkScore === 2) {
		p2.updateScore()
	}
	else{
		if (checkScore === 1) {
			p1.updateScore()
		}
	}
	p1.draw()
	p2.draw()

	if (keyIsPressed) {
		//Move player 1
		if (keyIsDown(87)) {p1.move(UP)}
		if (keyIsDown(83)) {p1.move(DOWN)}
		if (keyIsDown(65)) {p1.moveX(LEFT)}
		if (keyIsDown(68)) {p1.moveX(RIGHT)}
		//Move player 2
		if (keyIsDown(UP_ARROW)) {p2.move(UP)}
		if (keyIsDown(DOWN_ARROW)) {p2.move(DOWN)}
		if (keyIsDown(LEFT_ARROW)) {p2.moveX(LEFT)}
		if (keyIsDown(RIGHT_ARROW)) {p2.moveX(RIGHT)}


	}
	
	showScore()
}

//Linea divisora de la cancha
const drawLine = function(){
	stroke('#fff')
	strokeWeight(4)
	line(width/2, 0 , width/2, height)
	noFill()
	ellipse(width/2,height/2, 200, 200)
}

const drawStage = function(){
	stroke('#fff')
	strokeWeight(5)
	//top
	line(0,0,width,0)
	//bot
	line(0,height,width,height)
	//right
	line(width,0,width,height)
	//left
	line(0,0,0,height)
	noFill()

	//Goals
	stroke('#000')
	line(0, (height/2)+ 80, 0 , (height/2)-80)
	line(width, (height/2)+ 80, width , (height/2)-80)
	
}

const showScore = function(){
	fill('#fff')
	textSize(50)
	text(p1.getScore(), width * 0.25, 70)
	text(p2.getScore(), width * 0.75, 70)

}

//Mover paletas
/*function keyPressed(){
	if (keyCode === 87) {
		p1.move(UP)
	}

	if (keyCode === 83) {
		p1.move(DOWN)
	}

	if (keyCode === UP_ARROW) {
		p2.move(UP)
	}

	if (keyCode === DOWN_ARROW) {
		p2.move(DOWN)
	}
}*/



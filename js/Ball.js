const Ball = function (color){
	const r =30
	let c = color
	let x = Math.floor(width/2)
	let y = Math.floor(height/2)
	let speedX= 3 * randomDirection()
	let speedY= 5 * randomDirection()

	const reset = function(){
		x= Math.floor(width/2)
		y= Math.floor(height/2)

		speedX*= randomDirection()
		speedY*= randomDirection()

	}

	const draw = function (){
		ellipseMode(CENTER)
		fill(c)
		noStroke()
		ellipse(x, y, r*2, r*2)
		
	}

	const move = function(){
		x += speedX
		y += speedY
		edges()
	}

	const edges = function(){
		if (y+r >= height || y-r <= 0) {
			speedY *= -1
		}

		//rebote area fuera de porteria
		if (x+r >= width || x-r <= 0) {
			speedX *= -1
		}
		
	}

	function randomDirection(){
		return Math.round(Math.random()) *2 -1
	}

	const checkScore = function(){
		if ((x - r <=0) && (((y - r) >= (windowHeight/2)- 80) && (y - r) <= (windowHeight/2)+ 80)) {
			alert('GOOOL! P2')
			reset()
			return 2
		}
		if ((x + r >=width) && (((y - r) >= (windowHeight/2)- 80) && (y - r) <= (windowHeight/2)+ 80)) {
			alert('GOOOL! P1')
			reset()
			return 1
		}

		return 0
	}

	const collision = function(player){
		let dx = Math.abs(x - player.getX() - player.getW() /2)
		let dy = Math.abs(y - player.getY() - player.getH() /2)

		if (dx > player.getW() / 2 + r || dy > player.getH() / 2 + r) {
			return false
		}

		if (dx <= player.getW() / 2 || dy <= player.getH() / 2) {
			speedX *= -1
			return true
		}

	}

	/*const colorChange = function(){
		fill()
	}*/

	return{
		draw,
		move,
		collision,
		checkScore,

	}
}
const Paddle = function(player, color){
	const w = 50
	const h = 50
	let x = player === 1 ? 0 : width - w
	let y = Math.floor(height/2) - Math.floor(h/2)
	const c= color
	const speed = 30
	let score = 0

	const getX = function(){
		return x
	}

	const getY = function(){
		return y
	}

	const getW = function(){
		return w
	}

	const getH = function(){
		return h
	}

	const edge = function(dir){
		return(dir == UP && y >= 0 )||
			(dir == DOWN && y +h <= height)
	}

	const edgeX = function(dir){
		return(dir == LEFT && x >= 0 )||
			(dir == RIGHT && x +w <= width)
	}

	const draw = function(){
		rectMode(CORNER)
		fill(c)
		rect(x,y,w,h, 20)

	}

	const move = function(dir){
		if(edge(dir)){y+=(speed*dir)}
	}
	
	const moveX = function(dir){
		if(edgeX(dir)){x+=(speed*dir)}
	}

	const getScore = function(){
		return score
	}

	const updateScore = function(){
		score++
	}

	return{
		draw,
		move,
		moveX,
		getX,
		getY,
		getW,
		getH,
		getScore,
		updateScore,
		edge,
	}
}
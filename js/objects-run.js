var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
var renderer = new THREE.WebGLRenderer();
var keys = [];
renderer.setSize(window.innerWidth - 100, window.innerHeight - 100);
renderer.setClearColor(0xAABBCC);
document.body.appendChild(renderer.domElement);
camera.position.set(21, -10, /* 138 */ 111);
boxInit();
draw();

function draw() {
	requestAnimationFrame(draw);
	renderer.render(scene, camera);
	if(keys[37]) camera.position.x -= 1.3;
	if(keys[39]) camera.position.x += 1.3;
	if(keys[38]) camera.position.z -= 1.3;
	if(keys[40]) camera.position.z += 1.3;
}

function boxInit() {
	x = 0;
	y = 0;
	map = [
        [ 'b', 'X', 'b', 'X', 'w', 'w', 'w', 'X', 'b', 'X', 'X', 'X', 'w', 'X', 'X', 'X', 'b', 'b', 'b' ],
        [ 'b', 'X', 'b', 'X', 'w', 'X', 'X', 'X', 'b', 'X', 'X', 'X', 'w', 'X', 'X', 'X', 'b', 'X', 'b' ],
        [ 'b', 'b', 'b', 'X', 'w', 'w', 'w', 'X', 'b', 'X', 'X', 'X', 'w', 'X', 'X', 'X', 'b', 'X', 'b' ],
        [ 'b', 'X', 'b', 'X', 'w', 'X', 'X', 'X', 'b', 'b', 'b', 'X', 'w', 'w', 'w', 'X', 'b', 'X', 'b' ],
        [ 'b', 'X', 'b', 'X', 'w', 'w', 'w', 'X', 'b', 'b', 'b', 'X', 'w', 'w', 'w', 'X', 'b', 'b', 'b' ]
	];
    map2 = [
        [ 'w', 'X', 'w', 'X', 'b', 'b', 'b', 'X', 'w', 'w', 'w', 'X', 'b', 'X', 'X', 'X', 'w', 'w', 'X' ],
        [ 'w', 'X', 'w', 'X', 'b', 'X', 'b', 'X', 'w', 'X', 'w', 'X', 'b', 'X', 'X', 'X', 'w', 'X', 'w' ],
        [ 'w', 'X', 'w', 'X', 'b', 'X', 'b', 'X', 'w', 'w', 'X', 'X', 'b', 'X', 'X', 'X', 'w', 'X', 'w' ],
        [ 'w', 'w', 'w', 'X', 'b', 'X', 'b', 'X', 'w', 'X', 'w', 'X', 'b', 'b', 'b', 'X', 'w', 'X', 'w' ],
        [ 'w', 'X', 'w', 'X', 'b', 'b', 'b', 'X', 'w', 'X', 'w', 'X', 'b', 'b', 'b', 'X', 'w', 'w', 'X' ]
	];
	geometry = new THREE.BoxGeometry(2.4, 2.4, 12);
	for(let i = 0; i < map.length; i ++) {
		for(let j = 0; j < map[i].length; j ++) {
			if(map[i][j] === 'b') map[i][j] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x202020 }));
			else if(map[i][j] === 'w') map[i][j] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xE7E7E7 }));
            else if(map[i][j] === 'X') map[i][j] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
			map[i][j].position.set(x, y, 0);
			scene.add(map[i][j]);
			x += 2.4;
		}
		x = 0;
		y -= 2.4;
	}
    
    y = -15;
    for(let i = 0; i < map2.length; i ++) {
		for(let j = 0; j < map2[i].length; j ++) {
			if(map2[i][j] === 'b') map2[i][j] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x202020 }));
			else if(map2[i][j] === 'w') map2[i][j] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xE7E7E7 }));
            else if(map2[i][j] === 'X') map2[i][j] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
			map2[i][j].position.set(x, y, 0);
			scene.add(map2[i][j]);
			x += 2.4;
		}
		x = 0;
		y -= 2.4;
	}
}
window.addEventListener("keydown", function(e) { keys[e.keyCode] = true; });
window.addEventListener("keyup", function(e) { keys[e.keyCode] = false; });
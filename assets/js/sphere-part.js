var renderer, scene, camera, particleSystem;

init();
animate();

function init() {

    // // info
    // info = document.createElement( 'div' );
    // info.style.position = 'absolute';
    // info.style.top = '30px';
    // info.style.width = '100%';
    // info.style.textAlign = 'center';
    // info.style.color = '#fff';
    // info.style.fontWeight = 'bold';
    // info.style.backgroundColor = 'transparent';
    // info.style.zIndex = '1';
    // info.style.fontFamily = 'Monospace';
    // info.innerHTML = 'Particle System with Procedurally-Generated Texture';
    // document.body.appendChild( info );

    // canvas
    var canvasHolder = document.getElementById('canvas-holder');

    var width = canvasHolder.clientWidth;
    var height = width * 0.8;
    canvasHolder.clientHeight = height;
    
    console.log(height, width);

    // renderer
    renderer = new THREE.WebGLRenderer( { clearColor: 0x000000, clearAlpha: 1 } );
    renderer.setSize( width, height );
    canvasHolder.appendChild( renderer.domElement );
    
    // scene
    scene = new THREE.Scene();

    //camera
    camera = new THREE.PerspectiveCamera( 45, width / height, 1, 10000 );
    camera.position.z = 400;

    // particle system geometry
    var geometry = new THREE.SphereGeometry( 100, 16, 12 );
    
    // vertex colors
    var colors = [];

    for( var i = 0; i < geometry.vertices.length; i++ ) {
    
        // random color
        colors[i] = new THREE.Color();
        colors[i].setHSL( Math.random(), 1.0, 1.0 );

    }
    geometry.colors = colors;

    // texture
    var texture = new THREE.Texture( generateTexture( ) );
    texture.needsUpdate = true; // important

    // particle system material
    material = new THREE.ParticleBasicMaterial( {
        size: 20,
        map: texture,
        blending: THREE.AdditiveBlending, // required
        depthTest: true, // required
        transparent: false,
        alphaTest: 0.5,
        opacity: 1,
        vertexColors: true // optional
    } );

    // particle system
    particleSystem = new THREE.ParticleSystem( geometry, material );
    //particleSystem.sortParticles = true; // ???

    scene.add( particleSystem );

}

function animate() {

    requestAnimationFrame( animate );

    render();

}

function render() {

    // rotate entire system
    particleSystem.rotation.x += 0.005;
    particleSystem.rotation.y += 0.005;

    // render
    renderer.render( scene, camera );

}

function generateTexture( ) {

    // draw a circle in the center of the canvas
    var size = 128;
    
    // create canvas
    var canvas = document.createElement( 'canvas' );
    canvas.width = size;
    canvas.height = size;
        
    // get context
    var context = canvas.getContext( '2d' );
    
    context.fillStyle = "#FFFFFF00";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // draw circle
    var centerX = size / 2;
    var centerY = size / 2;
    var radius = size / 2;

    context.beginPath();
    context.arc( centerX, centerY, radius, 0, 2 * Math.PI, false );
    context.fillStyle = "#FFFFFFFF";
    context.fill();

    return canvas;

}


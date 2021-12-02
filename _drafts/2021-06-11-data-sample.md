---
layout: post
title: Sample paragliding data
---


We should have some stuff here:




<div id='canvas-holder' style="position: relative; width: inherit;">
  <div id="dat-gui-holder" style="position: absolute; top: 0em; right: 0em; z-index: 1;"></div>
</div>

<style> .highlight-left {margin-left: 0} canvas { position: relative; top: 0;} </style>


<script src="{{site.baseurl}}/assets/js/three.min.js"></script> 
<script src="{{site.baseurl}}/assets/js/dat.gui.min.js"></script> 
<script src="{{site.baseurl}}/assets/js/OBJLoader.js"></script> 
<script src="{{site.baseurl}}/assets/js/SubdivisionModifier.js"></script> 

<script type="x-shader/x-vertex" id="vertexshader"> 
    attribute float distance; 
    attribute vec3 surfaceNormal; 
    uniform float amplitude; 
    varying vec3 vNormal; 
    
    void main() { 
        vNormal = normal; 
        vec3 newPosition = position + surfaceNormal * vec3(distance * amplitude); 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0); 
    } 
</script> 

<script type="x-shader/x-fragment" id="fragmentshader"> 
    varying vec3 vNormal; 
    
    void main() { 
        vec3 light = vec3(0.7, 0.5, 1.0); 
        light = normalize(light); 
        float dProd = max(0.0, dot(vNormal, light)); 
        gl_FragColor = vec4(dProd, // R 
                            dProd, // G 
                            dProd, // B 
                            1.0); // A 
    } 
</script> 

<!-- <script src="/public/js/teapot.js"></script>  -->
<script src="{{site.baseurl}}/assets/js/sphere-part.js"></script> 

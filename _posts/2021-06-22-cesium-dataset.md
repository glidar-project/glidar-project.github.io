---
layout: post
title: PG World Championship 2019
category: PG
---


The 16th FAI Paragliding World Championships took place on 7 August 2019 in Krushevo, Macedonia. One hundred and fifty pilots from 48 nations competed for 12 days in the cross country competition. That means plenty of useful data for the analysis of atmospheric convection. Below, you can see the extracted thermals from the competition in an interactive 3D view. All the competition days are merged into a single dataset. I will extract the individual thermals at some later date. :) 


<style>
  /* @import url({{ site.baseurl }}public/css/bucket.css); */
</style>
<!-- <div id="cesiumContainer" class="fullSize"></div> -->

<div id="cesiumContainer" ></div>
<!-- <div id="loadingOverlay">
  <h1>Loading...</h1>
</div> -->
<div id="toolbar"></div>
<div id='bottomContainer '></div>


Data was collected from the official website:
<a href='http://www.pgworlds2019.mk/'>http://www.pgworlds2019.mk/</a><br/>
A video from the championship:
<a href='https://www.youtube.com/watch?v=tNMie4zXiGw'>https://www.youtube.com/watch?v=tNMie4zXiGw</a>
<!-- <a href='https://xcmag.com/news/paragliding-world-championships-2019/'>https://xcmag.com/news/paragliding-world-championships-2019/</a> -->


<script>
// Grant CesiumJS access to your ion assets
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNmI4NWRhZS05YzY2LTQ1NmYtYmQwMy0zZmY1N2EzNGI1ZjIiLCJpZCI6MzQ0NzIsImlhdCI6MTYwMDM0NTcxM30.ts9JCT1i27azCt9oix_rMb4hzBhdGBeUdn7tgRHZunU";

var viewer = new Cesium.Viewer("cesiumContainer", {
  animation: false,
  homeButton: false,
  infoBox: false,
  imageryLayers: true,
  projectionPicker: false,
  geocoder: false,
  sceneModePicker: false,
  bottomContainer: 'bottomContainer',
  fullscreenElement: 'cesiumContainer',
  // fullscreenButton: false,
  // creditContainer: 
  terrainProvider: new Cesium.CesiumTerrainProvider({
    url: Cesium.IonResource.fromAssetId(1),
  }),
});

var layer = viewer.imageryLayers.addImageryProvider(
  new Cesium.IonImageryProvider({ assetId: 3 })
);

viewer.scene.globe.depthTestAgainstTerrain = true;

var tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(625451),
  })
);

tileset.readyPromise
  .then(function () {
    viewer.zoomTo(tileset);

    tileset.style = new Cesium.Cesium3DTileStyle({
      color : 'vec4(((${Intensity}) - 32768) / 5000.0,0,0,1)',
      pointSize : '1 + (${Intensity} - 32768) / 1000',
    });

  })
  .otherwise(function (error) {
    console.log(error);
  });

</script>
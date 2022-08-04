---
layout: post
title: Lidar Setup at Starmoen
category: lidar
---


<style>
  #my-canvas-container {
    position:relative;
  }
  #cesiumContainer {
    position:relative;
    height: 100%;
  }
  #my-options {
    position:absolute;
    left:5%;
    top:5%
  }
</style>

<div id="my-canvas-container">
  <div id="starmoenCesiumContainer">
  </div>
  <div id='my-options'>
    <label for="wls-34">
      <input type="checkbox" id="wls-34" name="wls-34" value="yes"> WLS 34 
    </label>
    <label for="wls-37">
      <input type="checkbox" id="wls-37" name="wls-37" value="yes"> WLS 37 
    </label>
    <label for="st-thermal">
      <input type="checkbox" id="st-thermal" name="st-thermal" value="yes"> Thermal 
    </label>
  </div>
</div>  

<div id="toolbar"></div>
<div id='bottomContainer '></div>


Here you can see the set-up of the LIDAR instruments at Starmoen. The is an example of the data from the glider pilots at Starmoen and the LIDAR observations.
The checkboxes on the top allow you to hide parts of the scene. Dragging the timeline or hitting play will update the visualization.


<script>

(function() {

const thermal = [
    {
        "time": "2022-07-30T15:56:28.000Z",
        "latitude": 60.8689621,
        "longitude": 11.6852592,
        "altitude": 300.895,
        "vario": -0.0003918168
    },
    {
        "time": "2022-07-30T15:56:29.000Z",
        "latitude": 60.8687247,
        "longitude": 11.6855434,
        "altitude": 305.631,
        "vario": 0.2141611226
    },
    {
        "time": "2022-07-30T15:56:30.000Z",
        "latitude": 60.8684854,
        "longitude": 11.6858321,
        "altitude": 313.134,
        "vario": 0.7830831121
    },
    {
        "time": "2022-07-30T15:56:31.000Z",
        "latitude": 60.8682464,
        "longitude": 11.6861236,
        "altitude": 318.269,
        "vario": 1.2842061362
    },
    {
        "time": "2022-07-30T15:56:32.000Z",
        "latitude": 60.8680074,
        "longitude": 11.686422,
        "altitude": 319.467,
        "vario": 1.7059546214
    },
    {
        "time": "2022-07-30T15:56:33.000Z",
        "latitude": 60.8677713,
        "longitude": 11.6867319,
        "altitude": 320.202,
        "vario": 2.0456333312
    },
    {
        "time": "2022-07-30T15:56:34.000Z",
        "latitude": 60.867539,
        "longitude": 11.6870457,
        "altitude": 322.061,
        "vario": 2.3077950379
    },
    {
        "time": "2022-07-30T15:56:35.000Z",
        "latitude": 60.8673002,
        "longitude": 11.6873404,
        "altitude": 325.939,
        "vario": 2.5017531344
    },
    {
        "time": "2022-07-30T15:56:36.000Z",
        "latitude": 60.8670523,
        "longitude": 11.687617,
        "altitude": 331.144,
        "vario": 2.6389046185
    },
    {
        "time": "2022-07-30T15:56:37.000Z",
        "latitude": 60.8668006,
        "longitude": 11.6879007,
        "altitude": 334.75,
        "vario": 2.7303691162
    },
    {
        "time": "2022-07-30T15:56:38.000Z",
        "latitude": 60.8665509,
        "longitude": 11.6882009,
        "altitude": 334.973,
        "vario": 2.7854149031
    },
    {
        "time": "2022-07-30T15:56:39.000Z",
        "latitude": 60.8663089,
        "longitude": 11.6885155,
        "altitude": 335.544,
        "vario": 2.81080644
    },
    {
        "time": "2022-07-30T15:56:40.000Z",
        "latitude": 60.8660748,
        "longitude": 11.6888528,
        "altitude": 338.91,
        "vario": 2.8109837409
    },
    {
        "time": "2022-07-30T15:56:41.000Z",
        "latitude": 60.8658478,
        "longitude": 11.6892142,
        "altitude": 343.626,
        "vario": 2.7889952224
    },
    {
        "time": "2022-07-30T15:56:42.000Z",
        "latitude": 60.8656301,
        "longitude": 11.6895975,
        "altitude": 347.901,
        "vario": 2.7477376469
    },
    {
        "time": "2022-07-30T15:56:43.000Z",
        "latitude": 60.8654212,
        "longitude": 11.6900023,
        "altitude": 350.944,
        "vario": 2.6910058654
    },
    {
        "time": "2022-07-30T15:56:44.000Z",
        "latitude": 60.8652194,
        "longitude": 11.690429,
        "altitude": 353.695,
        "vario": 2.6240365935
    },
    {
        "time": "2022-07-30T15:56:45.000Z",
        "latitude": 60.8650295,
        "longitude": 11.6908767,
        "altitude": 357.402,
        "vario": 2.5534170501
    },
    {
        "time": "2022-07-30T15:56:46.000Z",
        "latitude": 60.8648474,
        "longitude": 11.691361,
        "altitude": 361.464,
        "vario": 2.4862719624
    },
    {
        "time": "2022-07-30T15:56:47.000Z",
        "latitude": 60.8646788,
        "longitude": 11.6918896,
        "altitude": 362.807,
        "vario": 2.4290496823
    },
    {
        "time": "2022-07-30T15:56:48.000Z",
        "latitude": 60.8645344,
        "longitude": 11.6924684,
        "altitude": 362.536,
        "vario": 2.3863251388
    },
    {
        "time": "2022-07-30T15:56:49.000Z",
        "latitude": 60.8644153,
        "longitude": 11.6930936,
        "altitude": 362.2,
        "vario": 2.3599864892
    },
    {
        "time": "2022-07-30T15:56:50.000Z",
        "latitude": 60.8643249,
        "longitude": 11.6937551,
        "altitude": 362.966,
        "vario": 2.3491397518
    },
    {
        "time": "2022-07-30T15:56:51.000Z",
        "latitude": 60.8642655,
        "longitude": 11.6944479,
        "altitude": 365.969,
        "vario": 2.350608453
    },
    {
        "time": "2022-07-30T15:56:52.000Z",
        "latitude": 60.8642394,
        "longitude": 11.6951549,
        "altitude": 369.784,
        "vario": 2.3599036767
    },
    {
        "time": "2022-07-30T15:56:53.000Z",
        "latitude": 60.8642455,
        "longitude": 11.6958752,
        "altitude": 373.969,
        "vario": 2.372428612
    },
    {
        "time": "2022-07-30T15:56:54.000Z",
        "latitude": 60.8642822,
        "longitude": 11.6966076,
        "altitude": 378.394,
        "vario": 2.3845039375
    },
    {
        "time": "2022-07-30T15:56:55.000Z",
        "latitude": 60.8643474,
        "longitude": 11.697349,
        "altitude": 381.336,
        "vario": 2.3938605306
    },
    {
        "time": "2022-07-30T15:56:56.000Z",
        "latitude": 60.8644431,
        "longitude": 11.6980906,
        "altitude": 382.78,
        "vario": 2.399560158
    },
    {
        "time": "2022-07-30T15:56:57.000Z",
        "latitude": 60.8645716,
        "longitude": 11.698823,
        "altitude": 383.487,
        "vario": 2.4015009285
    },
    {
        "time": "2022-07-30T15:56:58.000Z",
        "latitude": 60.8647288,
        "longitude": 11.6995359,
        "altitude": 383.188,
        "vario": 2.399790109
    },
    {
        "time": "2022-07-30T15:56:59.000Z",
        "latitude": 60.8649145,
        "longitude": 11.7002227,
        "altitude": 385.178,
        "vario": 2.3942986087
    },
    {
        "time": "2022-07-30T15:57:00.000Z",
        "latitude": 60.8651174,
        "longitude": 11.7008689,
        "altitude": 389.685,
        "vario": 2.3845950072
    },
    {
        "time": "2022-07-30T15:57:01.000Z",
        "latitude": 60.8653222,
        "longitude": 11.7014869,
        "altitude": 393.734,
        "vario": 2.3702192799
    },
    {
        "time": "2022-07-30T15:57:02.000Z",
        "latitude": 60.8655292,
        "longitude": 11.7021074,
        "altitude": 396.766,
        "vario": 2.3510588825
    },
    {
        "time": "2022-07-30T15:57:03.000Z",
        "latitude": 60.8657392,
        "longitude": 11.7027242,
        "altitude": 399.529,
        "vario": 2.3276851746
    },
    {
        "time": "2022-07-30T15:57:04.000Z",
        "latitude": 60.865953,
        "longitude": 11.7033392,
        "altitude": 401.377,
        "vario": 2.3015242576
    },
    {
        "time": "2022-07-30T15:57:05.000Z",
        "latitude": 60.8661677,
        "longitude": 11.7039523,
        "altitude": 402.508,
        "vario": 2.2747770747
    },
    {
        "time": "2022-07-30T15:57:06.000Z",
        "latitude": 60.8663782,
        "longitude": 11.7045621,
        "altitude": 404.408,
        "vario": 2.2500580541
    },
    {
        "time": "2022-07-30T15:57:07.000Z",
        "latitude": 60.8665884,
        "longitude": 11.7051829,
        "altitude": 406.664,
        "vario": 2.2298610638
    },
    {
        "time": "2022-07-30T15:57:08.000Z",
        "latitude": 60.8668013,
        "longitude": 11.7058078,
        "altitude": 408.918,
        "vario": 2.215952676
    },
    {
        "time": "2022-07-30T15:57:09.000Z",
        "latitude": 60.8670154,
        "longitude": 11.7064201,
        "altitude": 411.07,
        "vario": 2.2089097717
    },
    {
        "time": "2022-07-30T15:57:10.000Z",
        "latitude": 60.8672298,
        "longitude": 11.7070253,
        "altitude": 413.6,
        "vario": 2.2079031856
    },
    {
        "time": "2022-07-30T15:57:11.000Z",
        "latitude": 60.8674453,
        "longitude": 11.7076302,
        "altitude": 415.926,
        "vario": 2.2106052186
    },
    {
        "time": "2022-07-30T15:57:12.000Z",
        "latitude": 60.8676615,
        "longitude": 11.7082337,
        "altitude": 417.464,
        "vario": 2.2133434994
    },
    {
        "time": "2022-07-30T15:57:13.000Z",
        "latitude": 60.8678767,
        "longitude": 11.7088365,
        "altitude": 418.737,
        "vario": 2.2115727256
    },
    {
        "time": "2022-07-30T15:57:14.000Z",
        "latitude": 60.8680918,
        "longitude": 11.7094361,
        "altitude": 420.712,
        "vario": 2.200572029
    },
    {
        "time": "2022-07-30T15:57:15.000Z",
        "latitude": 60.8683128,
        "longitude": 11.7100318,
        "altitude": 423.422,
        "vario": 2.176274512
    },
    {
        "time": "2022-07-30T15:57:16.000Z",
        "latitude": 60.8685475,
        "longitude": 11.7106176,
        "altitude": 426.283,
        "vario": 2.1360990721
    },
    {
        "time": "2022-07-30T15:57:17.000Z",
        "latitude": 60.8687994,
        "longitude": 11.7111716,
        "altitude": 430.331,
        "vario": 2.0796589237
    },
    {
        "time": "2022-07-30T15:57:18.000Z",
        "latitude": 60.8690695,
        "longitude": 11.7116966,
        "altitude": 433.554,
        "vario": 2.0091473512
    },
    {
        "time": "2022-07-30T15:57:19.000Z",
        "latitude": 60.8693624,
        "longitude": 11.7121923,
        "altitude": 435.752,
        "vario": 1.9292477078
    },
    {
        "time": "2022-07-30T15:57:20.000Z",
        "latitude": 60.8696732,
        "longitude": 11.7126319,
        "altitude": 437.147,
        "vario": 1.8466602429
    },
    {
        "time": "2022-07-30T15:57:21.000Z",
        "latitude": 60.870002,
        "longitude": 11.7130112,
        "altitude": 438.325,
        "vario": 1.7693460824
    },
    {
        "time": "2022-07-30T15:57:22.000Z",
        "latitude": 60.870344,
        "longitude": 11.7133329,
        "altitude": 439.047,
        "vario": 1.705487808
    },
    {
        "time": "2022-07-30T15:57:23.000Z",
        "latitude": 60.8706964,
        "longitude": 11.7135867,
        "altitude": 440.196,
        "vario": 1.6624405841
    },
    {
        "time": "2022-07-30T15:57:24.000Z",
        "latitude": 60.8710559,
        "longitude": 11.7137847,
        "altitude": 441.182,
        "vario": 1.6459545479
    },
    {
        "time": "2022-07-30T15:57:25.000Z",
        "latitude": 60.8714238,
        "longitude": 11.713921,
        "altitude": 442.258,
        "vario": 1.6596335279
    },
    {
        "time": "2022-07-30T15:57:26.000Z",
        "latitude": 60.8717929,
        "longitude": 11.7139856,
        "altitude": 443.9,
        "vario": 1.7046943772
    },
    {
        "time": "2022-07-30T15:57:27.000Z",
        "latitude": 60.8721613,
        "longitude": 11.7139791,
        "altitude": 445.698,
        "vario": 1.7800811959
    },
    {
        "time": "2022-07-30T15:57:28.000Z",
        "latitude": 60.872524,
        "longitude": 11.7139013,
        "altitude": 447.126,
        "vario": 1.8827692845
    },
    {
        "time": "2022-07-30T15:57:29.000Z",
        "latitude": 60.8728783,
        "longitude": 11.7137579,
        "altitude": 447.699,
        "vario": 2.0082335978
    },
    {
        "time": "2022-07-30T15:57:30.000Z",
        "latitude": 60.8732191,
        "longitude": 11.7135647,
        "altitude": 447.958,
        "vario": 2.1510736532
    },
    {
        "time": "2022-07-30T15:57:31.000Z",
        "latitude": 60.8735448,
        "longitude": 11.7133323,
        "altitude": 450.717,
        "vario": 2.3056431191
    },
    {
        "time": "2022-07-30T15:57:32.000Z",
        "latitude": 60.8738612,
        "longitude": 11.7130769,
        "altitude": 455.106,
        "vario": 2.466618037
    },
    {
        "time": "2022-07-30T15:57:33.000Z",
        "latitude": 60.8741733,
        "longitude": 11.7128093,
        "altitude": 458.521,
        "vario": 2.6294954472
    },
    {
        "time": "2022-07-30T15:57:34.000Z",
        "latitude": 60.8744766,
        "longitude": 11.7125339,
        "altitude": 460.994,
        "vario": 2.7908748181
    },
    {
        "time": "2022-07-30T15:57:35.000Z",
        "latitude": 60.8747754,
        "longitude": 11.7122499,
        "altitude": 463.68,
        "vario": 2.9485184967
    },
    {
        "time": "2022-07-30T15:57:36.000Z",
        "latitude": 60.8750668,
        "longitude": 11.7119523,
        "altitude": 465.895,
        "vario": 3.1012306376
    },
    {
        "time": "2022-07-30T15:57:37.000Z",
        "latitude": 60.8753612,
        "longitude": 11.7116551,
        "altitude": 468.203,
        "vario": 3.2485075791
    },
    {
        "time": "2022-07-30T15:57:38.000Z",
        "latitude": 60.8756578,
        "longitude": 11.7113671,
        "altitude": 472.003,
        "vario": 3.3901191754
    },
    {
        "time": "2022-07-30T15:57:39.000Z",
        "latitude": 60.8759582,
        "longitude": 11.7110856,
        "altitude": 477.026,
        "vario": 3.5256326048
    },
    {
        "time": "2022-07-30T15:57:40.000Z",
        "latitude": 60.876273,
        "longitude": 11.7107928,
        "altitude": 481.972,
        "vario": 3.6539008234
    },
    {
        "time": "2022-07-30T15:57:41.000Z",
        "latitude": 60.8765913,
        "longitude": 11.7104856,
        "altitude": 484.673,
        "vario": 3.772684781
    },
    {
        "time": "2022-07-30T15:57:42.000Z",
        "latitude": 60.8769013,
        "longitude": 11.710166,
        "altitude": 486.852,
        "vario": 3.878544646
    },
    {
        "time": "2022-07-30T15:57:43.000Z",
        "latitude": 60.8772119,
        "longitude": 11.7098422,
        "altitude": 490.156,
        "vario": 3.9670676203
    },
    {
        "time": "2022-07-30T15:57:44.000Z",
        "latitude": 60.8775208,
        "longitude": 11.7095154,
        "altitude": 494.416,
        "vario": 4.0334092709
    },
    {
        "time": "2022-07-30T15:57:45.000Z",
        "latitude": 60.8778307,
        "longitude": 11.7091764,
        "altitude": 499.773,
        "vario": 4.0731053304
    },
    {
        "time": "2022-07-30T15:57:46.000Z",
        "latitude": 60.8781342,
        "longitude": 11.7088289,
        "altitude": 505.03,
        "vario": 4.0830145157
    },
    {
        "time": "2022-07-30T15:57:47.000Z",
        "latitude": 60.8784314,
        "longitude": 11.7084897,
        "altitude": 510.108,
        "vario": 4.0621889499
    },
    {
        "time": "2022-07-30T15:57:48.000Z",
        "latitude": 60.8787326,
        "longitude": 11.708158,
        "altitude": 515.412,
        "vario": 4.0124338361
    },
    {
        "time": "2022-07-30T15:57:49.000Z",
        "latitude": 60.8790347,
        "longitude": 11.7078317,
        "altitude": 520.304,
        "vario": 3.9383223779
    },
    {
        "time": "2022-07-30T15:57:50.000Z",
        "latitude": 60.8793366,
        "longitude": 11.7075131,
        "altitude": 524.35,
        "vario": 3.8466739172
    },
    {
        "time": "2022-07-30T15:57:51.000Z",
        "latitude": 60.8796403,
        "longitude": 11.7071967,
        "altitude": 528.533,
        "vario": 3.7455757464
    },
    {
        "time": "2022-07-30T15:57:52.000Z",
        "latitude": 60.8799502,
        "longitude": 11.7068806,
        "altitude": 531.704,
        "vario": 3.6431586769
    },
    {
        "time": "2022-07-30T15:57:53.000Z",
        "latitude": 60.8802581,
        "longitude": 11.7065637,
        "altitude": 533.02,
        "vario": 3.5464985952
    },
    {
        "time": "2022-07-30T15:57:54.000Z",
        "latitude": 60.8805609,
        "longitude": 11.7062449,
        "altitude": 535.25,
        "vario": 3.4607673444
    },
    {
        "time": "2022-07-30T15:57:55.000Z",
        "latitude": 60.8808634,
        "longitude": 11.7059182,
        "altitude": 538.455,
        "vario": 3.3888700448
    },
    {
        "time": "2022-07-30T15:57:56.000Z",
        "latitude": 60.8811639,
        "longitude": 11.7055867,
        "altitude": 542.491,
        "vario": 3.3316478281
    },
    {
        "time": "2022-07-30T15:57:57.000Z",
        "latitude": 60.8814629,
        "longitude": 11.7052584,
        "altitude": 546.881,
        "vario": 3.288390793
    },
    {
        "time": "2022-07-30T15:57:58.000Z",
        "latitude": 60.8817585,
        "longitude": 11.704934,
        "altitude": 550.145,
        "vario": 3.2575300609
    },
    {
        "time": "2022-07-30T15:57:59.000Z",
        "latitude": 60.882051,
        "longitude": 11.7046118,
        "altitude": 552.194,
        "vario": 3.2373251429
    },
    {
        "time": "2022-07-30T15:58:00.000Z",
        "latitude": 60.8823381,
        "longitude": 11.704302,
        "altitude": 555.26,
        "vario": 3.2263141094
    },
    {
        "time": "2022-07-30T15:58:01.000Z",
        "latitude": 60.8826245,
        "longitude": 11.7040016,
        "altitude": 559.667,
        "vario": 3.22348174
    },
    {
        "time": "2022-07-30T15:58:02.000Z",
        "latitude": 60.8829167,
        "longitude": 11.7037015,
        "altitude": 563.301,
        "vario": 3.2281899264
    },
    {
        "time": "2022-07-30T15:58:03.000Z",
        "latitude": 60.883199,
        "longitude": 11.7034104,
        "altitude": 565.248,
        "vario": 3.2399726076
    },
    {
        "time": "2022-07-30T15:58:04.000Z",
        "latitude": 60.8834734,
        "longitude": 11.7031304,
        "altitude": 567.28,
        "vario": 3.2583278332
    },
    {
        "time": "2022-07-30T15:58:05.000Z",
        "latitude": 60.8837523,
        "longitude": 11.7028544,
        "altitude": 570.095,
        "vario": 3.2825573065
    },
    {
        "time": "2022-07-30T15:58:06.000Z",
        "latitude": 60.8840291,
        "longitude": 11.7025891,
        "altitude": 574.26,
        "vario": 3.3116844812
    },
    {
        "time": "2022-07-30T15:58:07.000Z",
        "latitude": 60.8843007,
        "longitude": 11.7023303,
        "altitude": 578.775,
        "vario": 3.3444925755
    },
    {
        "time": "2022-07-30T15:58:08.000Z",
        "latitude": 60.8845711,
        "longitude": 11.7020737,
        "altitude": 582.242,
        "vario": 3.3795960518
    },
    {
        "time": "2022-07-30T15:58:09.000Z",
        "latitude": 60.8848391,
        "longitude": 11.7018215,
        "altitude": 585.389,
        "vario": 3.4155076023
    },
    {
        "time": "2022-07-30T15:58:10.000Z",
        "latitude": 60.8851062,
        "longitude": 11.701566,
        "altitude": 587.504,
        "vario": 3.4507864117
    },
    {
        "time": "2022-07-30T15:58:11.000Z",
        "latitude": 60.8853732,
        "longitude": 11.7013082,
        "altitude": 590.677,
        "vario": 3.4842311705
    },
    {
        "time": "2022-07-30T15:58:12.000Z",
        "latitude": 60.8856496,
        "longitude": 11.7010431,
        "altitude": 595.401,
        "vario": 3.5150968874
    },
    {
        "time": "2022-07-30T15:58:13.000Z",
        "latitude": 60.8859312,
        "longitude": 11.7007749,
        "altitude": 598.862,
        "vario": 3.5433118698
    },
    {
        "time": "2022-07-30T15:58:14.000Z",
        "latitude": 60.8862117,
        "longitude": 11.7005084,
        "altitude": 602.339,
        "vario": 3.5696493106
    },
    {
        "time": "2022-07-30T15:58:15.000Z",
        "latitude": 60.8864934,
        "longitude": 11.7002293,
        "altitude": 605.901,
        "vario": 3.5959239731
    },
    {
        "time": "2022-07-30T15:58:16.000Z",
        "latitude": 60.8867762,
        "longitude": 11.6999384,
        "altitude": 610.012,
        "vario": 3.6250906716
    },
    {
        "time": "2022-07-30T15:58:17.000Z",
        "latitude": 60.8870584,
        "longitude": 11.6996401,
        "altitude": 614.293,
        "vario": 3.6609710489
    },
    {
        "time": "2022-07-30T15:58:18.000Z",
        "latitude": 60.8873428,
        "longitude": 11.6993343,
        "altitude": 618.013,
        "vario": 3.7076700053
    },
    {
        "time": "2022-07-30T15:58:19.000Z",
        "latitude": 60.887629,
        "longitude": 11.6990255,
        "altitude": 621.225,
        "vario": 3.7689405695
    },
    {
        "time": "2022-07-30T15:58:20.000Z",
        "latitude": 60.8879166,
        "longitude": 11.6987077,
        "altitude": 624.124,
        "vario": 3.8474583149
    },
    {
        "time": "2022-07-30T15:58:21.000Z",
        "latitude": 60.8882046,
        "longitude": 11.6983735,
        "altitude": 626.755,
        "vario": 3.9441600248
    },
    {
        "time": "2022-07-30T15:58:22.000Z",
        "latitude": 60.8884907,
        "longitude": 11.6980331,
        "altitude": 629.431,
        "vario": 4.0578742199
    },
    {
        "time": "2022-07-30T15:58:23.000Z",
        "latitude": 60.8887755,
        "longitude": 11.6976935,
        "altitude": 633.735,
        "vario": 4.1852585015
    },
    {
        "time": "2022-07-30T15:58:24.000Z",
        "latitude": 60.889063,
        "longitude": 11.6973456,
        "altitude": 638.762,
        "vario": 4.3210827192
    },
    {
        "time": "2022-07-30T15:58:25.000Z",
        "latitude": 60.8893446,
        "longitude": 11.6969891,
        "altitude": 643.302,
        "vario": 4.4588483786
    },
    {
        "time": "2022-07-30T15:58:26.000Z",
        "latitude": 60.8896182,
        "longitude": 11.696632,
        "altitude": 647.762,
        "vario": 4.5915756845
    },
    {
        "time": "2022-07-30T15:58:27.000Z",
        "latitude": 60.8898898,
        "longitude": 11.6962709,
        "altitude": 651.591,
        "vario": 4.7125126987
    },
    {
        "time": "2022-07-30T15:58:28.000Z",
        "latitude": 60.8901565,
        "longitude": 11.695917,
        "altitude": 657.422,
        "vario": 4.815704629
    },
    {
        "time": "2022-07-30T15:58:29.000Z",
        "latitude": 60.8904189,
        "longitude": 11.6955665,
        "altitude": 664.885,
        "vario": 4.8963408798
    },
    {
        "time": "2022-07-30T15:58:30.000Z",
        "latitude": 60.8906794,
        "longitude": 11.6952065,
        "altitude": 670.536,
        "vario": 4.9509230731
    },
    {
        "time": "2022-07-30T15:58:31.000Z",
        "latitude": 60.8909349,
        "longitude": 11.694839,
        "altitude": 673.932,
        "vario": 4.9772855998
    },
    {
        "time": "2022-07-30T15:58:32.000Z",
        "latitude": 60.8911858,
        "longitude": 11.6944749,
        "altitude": 677.478,
        "vario": 4.9745266518
    },
    {
        "time": "2022-07-30T15:58:33.000Z",
        "latitude": 60.8914333,
        "longitude": 11.6941303,
        "altitude": 682.986,
        "vario": 4.943006033
    },
    {
        "time": "2022-07-30T15:58:34.000Z",
        "latitude": 60.8916873,
        "longitude": 11.6937934,
        "altitude": 690.479,
        "vario": 4.8842774194
    },
    {
        "time": "2022-07-30T15:58:35.000Z",
        "latitude": 60.8919373,
        "longitude": 11.6934501,
        "altitude": 697.047,
        "vario": 4.8009355585
    },
    {
        "time": "2022-07-30T15:58:36.000Z",
        "latitude": 60.8921877,
        "longitude": 11.6931012,
        "altitude": 700.59,
        "vario": 4.6964203296
    },
    {
        "time": "2022-07-30T15:58:37.000Z",
        "latitude": 60.8924412,
        "longitude": 11.6927637,
        "altitude": 705.262,
        "vario": 4.5746544574
    },
    {
        "time": "2022-07-30T15:58:38.000Z",
        "latitude": 60.8927036,
        "longitude": 11.69244,
        "altitude": 711.387,
        "vario": 4.439482398
    },
    {
        "time": "2022-07-30T15:58:39.000Z",
        "latitude": 60.8929667,
        "longitude": 11.6921162,
        "altitude": 714.805,
        "vario": 4.2940544728
    },
    {
        "time": "2022-07-30T15:58:40.000Z",
        "latitude": 60.8932255,
        "longitude": 11.6917944,
        "altitude": 717.884,
        "vario": 4.1403710052
    },
    {
        "time": "2022-07-30T15:58:41.000Z",
        "latitude": 60.8934864,
        "longitude": 11.6914703,
        "altitude": 721.252,
        "vario": 3.9790750167
    },
    {
        "time": "2022-07-30T15:58:42.000Z",
        "latitude": 60.8937466,
        "longitude": 11.6911442,
        "altitude": 725.121,
        "vario": 3.8096028591
    },
    {
        "time": "2022-07-30T15:58:43.000Z",
        "latitude": 60.8940012,
        "longitude": 11.6908225,
        "altitude": 728.945,
        "vario": 3.6307412226
    },
    {
        "time": "2022-07-30T15:58:44.000Z",
        "latitude": 60.8942529,
        "longitude": 11.6904984,
        "altitude": 733.712,
        "vario": 3.4414785021
    },
    {
        "time": "2022-07-30T15:58:45.000Z",
        "latitude": 60.8945035,
        "longitude": 11.6901671,
        "altitude": 738.232,
        "vario": 3.2419296011
    },
    {
        "time": "2022-07-30T15:58:46.000Z",
        "latitude": 60.8947521,
        "longitude": 11.6898314,
        "altitude": 741.811,
        "vario": 3.0341504869
    },
    {
        "time": "2022-07-30T15:58:47.000Z",
        "latitude": 60.8949977,
        "longitude": 11.6894961,
        "altitude": 745.041,
        "vario": 2.8227421255
    },
    {
        "time": "2022-07-30T15:58:48.000Z",
        "latitude": 60.8952481,
        "longitude": 11.6891593,
        "altitude": 747.385,
        "vario": 2.6149880861
    },
    {
        "time": "2022-07-30T15:58:49.000Z",
        "latitude": 60.8955026,
        "longitude": 11.6888196,
        "altitude": 749.352,
        "vario": 2.4205028129
    },
    {
        "time": "2022-07-30T15:58:50.000Z",
        "latitude": 60.8957556,
        "longitude": 11.6884767,
        "altitude": 751.268,
        "vario": 2.2504347679
    },
    {
        "time": "2022-07-30T15:58:51.000Z",
        "latitude": 60.896002,
        "longitude": 11.6881194,
        "altitude": 753.315,
        "vario": 2.1160822199
    },
    {
        "time": "2022-07-30T15:58:52.000Z",
        "latitude": 60.8962402,
        "longitude": 11.6877288,
        "altitude": 755.949,
        "vario": 2.0272416682
    },
    {
        "time": "2022-07-30T15:58:53.000Z",
        "latitude": 60.8964619,
        "longitude": 11.6872992,
        "altitude": 756.737,
        "vario": 1.9906244603
    },
    {
        "time": "2022-07-30T15:58:54.000Z",
        "latitude": 60.8966603,
        "longitude": 11.686843,
        "altitude": 756.421,
        "vario": 2.0084311594
    },
    {
        "time": "2022-07-30T15:58:55.000Z",
        "latitude": 60.8968306,
        "longitude": 11.6863511,
        "altitude": 756.774,
        "vario": 2.0774104207
    },
    {
        "time": "2022-07-30T15:58:56.000Z",
        "latitude": 60.8969733,
        "longitude": 11.6858302,
        "altitude": 756.562,
        "vario": 2.188703297
    },
    {
        "time": "2022-07-30T15:58:57.000Z",
        "latitude": 60.8970837,
        "longitude": 11.6852871,
        "altitude": 756.658,
        "vario": 2.3286343786
    },
    {
        "time": "2022-07-30T15:58:58.000Z",
        "latitude": 60.8971527,
        "longitude": 11.6847304,
        "altitude": 759.086,
        "vario": 2.4805389114
    },
    {
        "time": "2022-07-30T15:58:59.000Z",
        "latitude": 60.897181,
        "longitude": 11.6841704,
        "altitude": 763.339,
        "vario": 2.6271671061
    },
    {
        "time": "2022-07-30T15:59:00.000Z",
        "latitude": 60.8971737,
        "longitude": 11.683617,
        "altitude": 768.427,
        "vario": 2.7531445767
    },
    {
        "time": "2022-07-30T15:59:01.000Z",
        "latitude": 60.8971393,
        "longitude": 11.6830858,
        "altitude": 773.949,
        "vario": 2.8472703256
    },
    {
        "time": "2022-07-30T15:59:02.000Z",
        "latitude": 60.8970825,
        "longitude": 11.6825636,
        "altitude": 778.587,
        "vario": 2.9041066238
    },
    {
        "time": "2022-07-30T15:59:03.000Z",
        "latitude": 60.8970057,
        "longitude": 11.682055,
        "altitude": 781.639,
        "vario": 2.9244746569
    },
    {
        "time": "2022-07-30T15:59:04.000Z",
        "latitude": 60.8969095,
        "longitude": 11.6815744,
        "altitude": 784.392,
        "vario": 2.9148380242
    },
    {
        "time": "2022-07-30T15:59:05.000Z",
        "latitude": 60.8967892,
        "longitude": 11.6811209,
        "altitude": 787.508,
        "vario": 2.8858172353
    },
    {
        "time": "2022-07-30T15:59:06.000Z",
        "latitude": 60.8966429,
        "longitude": 11.6807025,
        "altitude": 790.564,
        "vario": 2.8501367563
    },
    {
        "time": "2022-07-30T15:59:07.000Z",
        "latitude": 60.8964726,
        "longitude": 11.6803304,
        "altitude": 792.674,
        "vario": 2.8203909003
    },
    {
        "time": "2022-07-30T15:59:08.000Z",
        "latitude": 60.8962791,
        "longitude": 11.6800055,
        "altitude": 794.559,
        "vario": 2.8071630008
    },
    {
        "time": "2022-07-30T15:59:09.000Z",
        "latitude": 60.8960654,
        "longitude": 11.6797274,
        "altitude": 795.967,
        "vario": 2.8176523474
    },
    {
        "time": "2022-07-30T15:59:10.000Z",
        "latitude": 60.8958419,
        "longitude": 11.6794928,
        "altitude": 796.889,
        "vario": 2.8549298055
    },
    {
        "time": "2022-07-30T15:59:11.000Z",
        "latitude": 60.8956155,
        "longitude": 11.6792868,
        "altitude": 799.74,
        "vario": 2.9179172088
    },
    {
        "time": "2022-07-30T15:59:12.000Z",
        "latitude": 60.8953906,
        "longitude": 11.6790957,
        "altitude": 803.196,
        "vario": 3.0019303107
    },
    {
        "time": "2022-07-30T15:59:13.000Z",
        "latitude": 60.8951651,
        "longitude": 11.6789097,
        "altitude": 806.147,
        "vario": 3.0995716675
    },
    {
        "time": "2022-07-30T15:59:14.000Z",
        "latitude": 60.8949395,
        "longitude": 11.678727,
        "altitude": 809.455,
        "vario": 3.2017608083
    },
    {
        "time": "2022-07-30T15:59:15.000Z",
        "latitude": 60.8947167,
        "longitude": 11.6785496,
        "altitude": 813.222,
        "vario": 3.298857031
    },
    {
        "time": "2022-07-30T15:59:16.000Z",
        "latitude": 60.8944941,
        "longitude": 11.6783741,
        "altitude": 817.127,
        "vario": 3.3818194367
    },
    {
        "time": "2022-07-30T15:59:17.000Z",
        "latitude": 60.8942708,
        "longitude": 11.6781979,
        "altitude": 820.087,
        "vario": 3.4432077669
    },
    {
        "time": "2022-07-30T15:59:18.000Z",
        "latitude": 60.8940493,
        "longitude": 11.6780274,
        "altitude": 822.682,
        "vario": 3.4780133484
    },
    {
        "time": "2022-07-30T15:59:19.000Z",
        "latitude": 60.8938348,
        "longitude": 11.6778624,
        "altitude": 827.379,
        "vario": 3.4843087195
    },
    {
        "time": "2022-07-30T15:59:20.000Z",
        "latitude": 60.8936251,
        "longitude": 11.6776834,
        "altitude": 833.0,
        "vario": 3.4635446108
    },
    {
        "time": "2022-07-30T15:59:21.000Z",
        "latitude": 60.8934168,
        "longitude": 11.6774871,
        "altitude": 838.655,
        "vario": 3.4203517838
    },
    {
        "time": "2022-07-30T15:59:22.000Z",
        "latitude": 60.8932058,
        "longitude": 11.6772917,
        "altitude": 842.884,
        "vario": 3.3618766077
    },
    {
        "time": "2022-07-30T15:59:23.000Z",
        "latitude": 60.892989,
        "longitude": 11.6771011,
        "altitude": 845.286,
        "vario": 3.2966916287
    },
    {
        "time": "2022-07-30T15:59:24.000Z",
        "latitude": 60.8927662,
        "longitude": 11.6769178,
        "altitude": 847.149,
        "vario": 3.2334171083
    },
    {
        "time": "2022-07-30T15:59:25.000Z",
        "latitude": 60.8925418,
        "longitude": 11.6767402,
        "altitude": 848.636,
        "vario": 3.1793571152
    },
    {
        "time": "2022-07-30T15:59:26.000Z",
        "latitude": 60.892318,
        "longitude": 11.6765613,
        "altitude": 851.037,
        "vario": 3.1394505154
    },
    {
        "time": "2022-07-30T15:59:27.000Z",
        "latitude": 60.8920934,
        "longitude": 11.6763748,
        "altitude": 853.977,
        "vario": 3.1156718578
    },
    {
        "time": "2022-07-30T15:59:28.000Z",
        "latitude": 60.8918695,
        "longitude": 11.6761841,
        "altitude": 856.462,
        "vario": 3.1069695301
    },
    {
        "time": "2022-07-30T15:59:29.000Z",
        "latitude": 60.8916491,
        "longitude": 11.6759887,
        "altitude": 859.645,
        "vario": 3.1098259382
    },
    {
        "time": "2022-07-30T15:59:30.000Z",
        "latitude": 60.8914315,
        "longitude": 11.6757841,
        "altitude": 863.923,
        "vario": 3.1191546785
    },
    {
        "time": "2022-07-30T15:59:31.000Z",
        "latitude": 60.8912134,
        "longitude": 11.6755787,
        "altitude": 867.587,
        "vario": 3.1293238913
    },
    {
        "time": "2022-07-30T15:59:32.000Z",
        "latitude": 60.8909959,
        "longitude": 11.6753802,
        "altitude": 870.141,
        "vario": 3.1352366647
    },
    {
        "time": "2022-07-30T15:59:33.000Z",
        "latitude": 60.8907788,
        "longitude": 11.6751904,
        "altitude": 873.031,
        "vario": 3.1331696982
    },
    {
        "time": "2022-07-30T15:59:34.000Z",
        "latitude": 60.8905635,
        "longitude": 11.6750084,
        "altitude": 876.569,
        "vario": 3.1212516783
    },
    {
        "time": "2022-07-30T15:59:35.000Z",
        "latitude": 60.8903529,
        "longitude": 11.674831,
        "altitude": 880.325,
        "vario": 3.0996626264
    },
    {
        "time": "2022-07-30T15:59:36.000Z",
        "latitude": 60.890145,
        "longitude": 11.6746544,
        "altitude": 884.0,
        "vario": 3.0704782874
    },
    {
        "time": "2022-07-30T15:59:37.000Z",
        "latitude": 60.8899376,
        "longitude": 11.6744783,
        "altitude": 887.282,
        "vario": 3.0371646985
    },
    {
        "time": "2022-07-30T15:59:38.000Z",
        "latitude": 60.8897321,
        "longitude": 11.6743067,
        "altitude": 890.679,
        "vario": 3.0038544573
    },
    {
        "time": "2022-07-30T15:59:39.000Z",
        "latitude": 60.8895242,
        "longitude": 11.6741341,
        "altitude": 893.785,
        "vario": 2.974506492
    },
    {
        "time": "2022-07-30T15:59:40.000Z",
        "latitude": 60.8893138,
        "longitude": 11.6739601,
        "altitude": 895.709,
        "vario": 2.952198153
    },
    {
        "time": "2022-07-30T15:59:41.000Z",
        "latitude": 60.889101,
        "longitude": 11.6737852,
        "altitude": 897.461,
        "vario": 2.9386192656
    },
    {
        "time": "2022-07-30T15:59:42.000Z",
        "latitude": 60.888886,
        "longitude": 11.6736067,
        "altitude": 899.184,
        "vario": 2.9338357463
    },
    {
        "time": "2022-07-30T15:59:43.000Z",
        "latitude": 60.888667,
        "longitude": 11.6734232,
        "altitude": 901.562,
        "vario": 2.9364886015
    },
    {
        "time": "2022-07-30T15:59:44.000Z",
        "latitude": 60.8884486,
        "longitude": 11.6732427,
        "altitude": 905.063,
        "vario": 2.944301463
    },
    {
        "time": "2022-07-30T15:59:45.000Z",
        "latitude": 60.8882312,
        "longitude": 11.6730624,
        "altitude": 909.725,
        "vario": 2.9547272494
    },
    {
        "time": "2022-07-30T15:59:46.000Z",
        "latitude": 60.8880152,
        "longitude": 11.6728734,
        "altitude": 913.466,
        "vario": 2.9655033153
    },
    {
        "time": "2022-07-30T15:59:47.000Z",
        "latitude": 60.8878031,
        "longitude": 11.6726819,
        "altitude": 916.955,
        "vario": 2.975008995
    },
    {
        "time": "2022-07-30T15:59:48.000Z",
        "latitude": 60.8875889,
        "longitude": 11.6724885,
        "altitude": 919.66,
        "vario": 2.9823575875
    },
    {
        "time": "2022-07-30T15:59:49.000Z",
        "latitude": 60.8873694,
        "longitude": 11.6722976,
        "altitude": 921.177,
        "vario": 2.9871999758
    },
    {
        "time": "2022-07-30T15:59:50.000Z",
        "latitude": 60.8871501,
        "longitude": 11.6721192,
        "altitude": 923.593,
        "vario": 2.9894668213
    },
    {
        "time": "2022-07-30T15:59:51.000Z",
        "latitude": 60.8869303,
        "longitude": 11.6719468,
        "altitude": 926.55,
        "vario": 2.989170734
    },
    {
        "time": "2022-07-30T15:59:52.000Z",
        "latitude": 60.8867103,
        "longitude": 11.6717735,
        "altitude": 929.856,
        "vario": 2.9862800864
    },
    {
        "time": "2022-07-30T15:59:53.000Z",
        "latitude": 60.8864928,
        "longitude": 11.6716054,
        "altitude": 933.293,
        "vario": 2.9807457335
    },
    {
        "time": "2022-07-30T15:59:54.000Z",
        "latitude": 60.8862784,
        "longitude": 11.6714423,
        "altitude": 936.935,
        "vario": 2.9726695467
    },
    {
        "time": "2022-07-30T15:59:55.000Z",
        "latitude": 60.8860627,
        "longitude": 11.6712843,
        "altitude": 940.214,
        "vario": 2.9624800814
    },
    {
        "time": "2022-07-30T15:59:56.000Z",
        "latitude": 60.8858477,
        "longitude": 11.6711331,
        "altitude": 943.303,
        "vario": 2.9509460708
    },
    {
        "time": "2022-07-30T15:59:57.000Z",
        "latitude": 60.8856348,
        "longitude": 11.6709862,
        "altitude": 946.126,
        "vario": 2.9390327428
    },
    {
        "time": "2022-07-30T15:59:58.000Z",
        "latitude": 60.885421,
        "longitude": 11.6708415,
        "altitude": 948.483,
        "vario": 2.9277276588
    },
    {
        "time": "2022-07-30T15:59:59.000Z",
        "latitude": 60.8852051,
        "longitude": 11.6706989,
        "altitude": 951.205,
        "vario": 2.9178591112
    },
    {
        "time": "2022-07-30T16:00:00.000Z",
        "latitude": 60.8849867,
        "longitude": 11.6705572,
        "altitude": 953.43,
        "vario": 2.9099926477
    },
    {
        "time": "2022-07-30T16:00:01.000Z",
        "latitude": 60.8847699,
        "longitude": 11.6704174,
        "altitude": 955.942,
        "vario": 2.9044251537
    },
    {
        "time": "2022-07-30T16:00:02.000Z",
        "latitude": 60.8845541,
        "longitude": 11.6702782,
        "altitude": 959.641,
        "vario": 2.9013871917
    },
    {
        "time": "2022-07-30T16:00:03.000Z",
        "latitude": 60.8843366,
        "longitude": 11.6701382,
        "altitude": 963.113,
        "vario": 2.9013507815
    },
    {
        "time": "2022-07-30T16:00:04.000Z",
        "latitude": 60.884117,
        "longitude": 11.6699963,
        "altitude": 966.198,
        "vario": 2.9052389241
    },
    {
        "time": "2022-07-30T16:00:05.000Z",
        "latitude": 60.8838968,
        "longitude": 11.6698554,
        "altitude": 969.097,
        "vario": 2.9145498175
    },
    {
        "time": "2022-07-30T16:00:06.000Z",
        "latitude": 60.8836785,
        "longitude": 11.6697122,
        "altitude": 972.11,
        "vario": 2.9313065837
    },
    {
        "time": "2022-07-30T16:00:07.000Z",
        "latitude": 60.8834576,
        "longitude": 11.669562,
        "altitude": 974.517,
        "vario": 2.9577995147
    },
    {
        "time": "2022-07-30T16:00:08.000Z",
        "latitude": 60.8832348,
        "longitude": 11.6694059,
        "altitude": 976.806,
        "vario": 2.996198049
    },
    {
        "time": "2022-07-30T16:00:09.000Z",
        "latitude": 60.8830146,
        "longitude": 11.6692544,
        "altitude": 979.358,
        "vario": 3.0480712104
    },
    {
        "time": "2022-07-30T16:00:10.000Z",
        "latitude": 60.8827935,
        "longitude": 11.6691045,
        "altitude": 982.264,
        "vario": 3.1138990729
    },
    {
        "time": "2022-07-30T16:00:11.000Z",
        "latitude": 60.882571,
        "longitude": 11.6689537,
        "altitude": 985.359,
        "vario": 3.1927044678
    },
    {
        "time": "2022-07-30T16:00:12.000Z",
        "latitude": 60.8823486,
        "longitude": 11.6688064,
        "altitude": 988.828,
        "vario": 3.2817908522
    },
    {
        "time": "2022-07-30T16:00:13.000Z",
        "latitude": 60.882124,
        "longitude": 11.6686647,
        "altitude": 992.179,
        "vario": 3.3767014089
    },
    {
        "time": "2022-07-30T16:00:14.000Z",
        "latitude": 60.8818988,
        "longitude": 11.6685363,
        "altitude": 995.181,
        "vario": 3.4714774182
    },
    {
        "time": "2022-07-30T16:00:15.000Z",
        "latitude": 60.8816758,
        "longitude": 11.6684233,
        "altitude": 997.175,
        "vario": 3.5591546919
    },
    {
        "time": "2022-07-30T16:00:16.000Z",
        "latitude": 60.8814611,
        "longitude": 11.6683108,
        "altitude": 1000.66,
        "vario": 3.6324851113
    },
    {
        "time": "2022-07-30T16:00:17.000Z",
        "latitude": 60.8812495,
        "longitude": 11.6681811,
        "altitude": 1005.627,
        "vario": 3.684846995
    },
    {
        "time": "2022-07-30T16:00:18.000Z",
        "latitude": 60.8810391,
        "longitude": 11.668044,
        "altitude": 1010.667,
        "vario": 3.7110920279
    },
    {
        "time": "2022-07-30T16:00:19.000Z",
        "latitude": 60.8808311,
        "longitude": 11.6679088,
        "altitude": 1015.727,
        "vario": 3.7081306488
    },
    {
        "time": "2022-07-30T16:00:20.000Z",
        "latitude": 60.880626,
        "longitude": 11.6677735,
        "altitude": 1020.448,
        "vario": 3.6752033281
    },
    {
        "time": "2022-07-30T16:00:21.000Z",
        "latitude": 60.8804209,
        "longitude": 11.667643,
        "altitude": 1025.391,
        "vario": 3.6136709286
    },
    {
        "time": "2022-07-30T16:00:22.000Z",
        "latitude": 60.8802118,
        "longitude": 11.6675203,
        "altitude": 1028.522,
        "vario": 3.5263973063
    },
    {
        "time": "2022-07-30T16:00:23.000Z",
        "latitude": 60.8800031,
        "longitude": 11.6674003,
        "altitude": 1030.818,
        "vario": 3.416937901
    },
    {
        "time": "2022-07-30T16:00:24.000Z",
        "latitude": 60.8797967,
        "longitude": 11.6672727,
        "altitude": 1033.689,
        "vario": 3.2887194998
    },
    {
        "time": "2022-07-30T16:00:25.000Z",
        "latitude": 60.8795902,
        "longitude": 11.6671382,
        "altitude": 1037.026,
        "vario": 3.1444475994
    },
    {
        "time": "2022-07-30T16:00:26.000Z",
        "latitude": 60.8793815,
        "longitude": 11.6670046,
        "altitude": 1040.676,
        "vario": 2.9858879799
    },
    {
        "time": "2022-07-30T16:00:27.000Z",
        "latitude": 60.8791761,
        "longitude": 11.6668783,
        "altitude": 1043.518,
        "vario": 2.8141689215
    },
    {
        "time": "2022-07-30T16:00:28.000Z",
        "latitude": 60.8789726,
        "longitude": 11.6667536,
        "altitude": 1046.476,
        "vario": 2.6304392222
    },
    {
        "time": "2022-07-30T16:00:29.000Z",
        "latitude": 60.878769,
        "longitude": 11.6666243,
        "altitude": 1049.607,
        "vario": 2.4366314443
    },
    {
        "time": "2022-07-30T16:00:30.000Z",
        "latitude": 60.8785653,
        "longitude": 11.6664939,
        "altitude": 1052.194,
        "vario": 2.2362460563
    },
    {
        "time": "2022-07-30T16:00:31.000Z",
        "latitude": 60.8783627,
        "longitude": 11.6663655,
        "altitude": 1055.013,
        "vario": 2.0348413332
    },
    {
        "time": "2022-07-30T16:00:32.000Z",
        "latitude": 60.8781582,
        "longitude": 11.6662424,
        "altitude": 1057.909,
        "vario": 1.8400224355
    },
    {
        "time": "2022-07-30T16:00:33.000Z",
        "latitude": 60.8779483,
        "longitude": 11.6661239,
        "altitude": 1059.471,
        "vario": 1.6609967399
    },
    {
        "time": "2022-07-30T16:00:34.000Z",
        "latitude": 60.8777366,
        "longitude": 11.6660069,
        "altitude": 1059.986,
        "vario": 1.5077278069
    },
    {
        "time": "2022-07-30T16:00:35.000Z",
        "latitude": 60.8775266,
        "longitude": 11.6658845,
        "altitude": 1060.564,
        "vario": 1.3898463719
    },
    {
        "time": "2022-07-30T16:00:36.000Z",
        "latitude": 60.8773122,
        "longitude": 11.6657484,
        "altitude": 1060.931,
        "vario": 1.3155531021
    },
    {
        "time": "2022-07-30T16:00:37.000Z",
        "latitude": 60.8770935,
        "longitude": 11.6656067,
        "altitude": 1060.128,
        "vario": 1.2907229451
    },
    {
        "time": "2022-07-30T16:00:38.000Z",
        "latitude": 60.8768764,
        "longitude": 11.6654644,
        "altitude": 1060.276,
        "vario": 1.3182766288
    },
    {
        "time": "2022-07-30T16:00:39.000Z",
        "latitude": 60.8766578,
        "longitude": 11.6653217,
        "altitude": 1061.123,
        "vario": 1.3978120587
    },
    {
        "time": "2022-07-30T16:00:40.000Z",
        "latitude": 60.8764354,
        "longitude": 11.6651896,
        "altitude": 1062.395,
        "vario": 1.5255745245
    },
    {
        "time": "2022-07-30T16:00:41.000Z",
        "latitude": 60.876212,
        "longitude": 11.6650761,
        "altitude": 1063.933,
        "vario": 1.6946803608
    },
    {
        "time": "2022-07-30T16:00:42.000Z",
        "latitude": 60.8759862,
        "longitude": 11.6649746,
        "altitude": 1065.676,
        "vario": 1.8955732977
    },
    {
        "time": "2022-07-30T16:00:43.000Z",
        "latitude": 60.8757583,
        "longitude": 11.6648815,
        "altitude": 1067.102,
        "vario": 2.116601978
    },
    {
        "time": "2022-07-30T16:00:44.000Z",
        "latitude": 60.8755292,
        "longitude": 11.6647902,
        "altitude": 1067.611,
        "vario": 2.3448224246
    },
    {
        "time": "2022-07-30T16:00:45.000Z",
        "latitude": 60.8753012,
        "longitude": 11.6646908,
        "altitude": 1069.174,
        "vario": 2.5670943283
    },
    {
        "time": "2022-07-30T16:00:46.000Z",
        "latitude": 60.8750734,
        "longitude": 11.6645799,
        "altitude": 1073.156,
        "vario": 2.7712515307
    },
    {
        "time": "2022-07-30T16:00:47.000Z",
        "latitude": 60.8748444,
        "longitude": 11.6644602,
        "altitude": 1077.067,
        "vario": 2.9473432412
    },
    {
        "time": "2022-07-30T16:00:48.000Z",
        "latitude": 60.8746157,
        "longitude": 11.6643467,
        "altitude": 1081.955,
        "vario": 3.088721448
    },
    {
        "time": "2022-07-30T16:00:49.000Z",
        "latitude": 60.8743862,
        "longitude": 11.6642503,
        "altitude": 1087.687,
        "vario": 3.1926683195
    },
    {
        "time": "2022-07-30T16:00:50.000Z",
        "latitude": 60.8741483,
        "longitude": 11.6641808,
        "altitude": 1091.864,
        "vario": 3.2604523522
    },
    {
        "time": "2022-07-30T16:00:51.000Z",
        "latitude": 60.8739076,
        "longitude": 11.664148,
        "altitude": 1094.956,
        "vario": 3.2966578712
    },
    {
        "time": "2022-07-30T16:00:52.000Z",
        "latitude": 60.8736649,
        "longitude": 11.6641585,
        "altitude": 1098.062,
        "vario": 3.3079047501
    },
    {
        "time": "2022-07-30T16:00:53.000Z",
        "latitude": 60.8734174,
        "longitude": 11.6642172,
        "altitude": 1100.759,
        "vario": 3.3012870503
    },
    {
        "time": "2022-07-30T16:00:54.000Z",
        "latitude": 60.8731664,
        "longitude": 11.6643358,
        "altitude": 1103.869,
        "vario": 3.2827739787
    },
    {
        "time": "2022-07-30T16:00:55.000Z",
        "latitude": 60.8729186,
        "longitude": 11.6645181,
        "altitude": 1106.808,
        "vario": 3.2559493648
    },
    {
        "time": "2022-07-30T16:00:56.000Z",
        "latitude": 60.8726733,
        "longitude": 11.6647607,
        "altitude": 1109.174,
        "vario": 3.2214446684
    },
    {
        "time": "2022-07-30T16:00:57.000Z",
        "latitude": 60.8724369,
        "longitude": 11.6650587,
        "altitude": 1111.327,
        "vario": 3.1771238551
    },
    {
        "time": "2022-07-30T16:00:58.000Z",
        "latitude": 60.8722169,
        "longitude": 11.6654016,
        "altitude": 1114.489,
        "vario": 3.1188797202
    },
    {
        "time": "2022-07-30T16:00:59.000Z",
        "latitude": 60.872011,
        "longitude": 11.6657781,
        "altitude": 1118.727,
        "vario": 3.0419339717
    },
    {
        "time": "2022-07-30T16:01:00.000Z",
        "latitude": 60.8718148,
        "longitude": 11.6661785,
        "altitude": 1123.82,
        "vario": 2.9422957594
    },
    {
        "time": "2022-07-30T16:01:01.000Z",
        "latitude": 60.8716279,
        "longitude": 11.6665928,
        "altitude": 1128.366,
        "vario": 2.8180039998
    },
    {
        "time": "2022-07-30T16:01:02.000Z",
        "latitude": 60.8714501,
        "longitude": 11.6670191,
        "altitude": 1131.437,
        "vario": 2.6699658564
    },
    {
        "time": "2022-07-30T16:01:03.000Z",
        "latitude": 60.8712803,
        "longitude": 11.6674624,
        "altitude": 1134.05,
        "vario": 2.5022435803
    },
    {
        "time": "2022-07-30T16:01:04.000Z",
        "latitude": 60.8711155,
        "longitude": 11.6679171,
        "altitude": 1135.728,
        "vario": 2.3217979216
    },
    {
        "time": "2022-07-30T16:01:05.000Z",
        "latitude": 60.8709575,
        "longitude": 11.6683751,
        "altitude": 1137.517,
        "vario": 2.1377426152
    },
    {
        "time": "2022-07-30T16:01:06.000Z",
        "latitude": 60.8708011,
        "longitude": 11.6688368,
        "altitude": 1140.29,
        "vario": 1.9603225185
    },
    {
        "time": "2022-07-30T16:01:07.000Z",
        "latitude": 60.8706429,
        "longitude": 11.6693015,
        "altitude": 1142.285,
        "vario": 1.7997629274
    },
    {
        "time": "2022-07-30T16:01:08.000Z",
        "latitude": 60.8704859,
        "longitude": 11.6697638,
        "altitude": 1143.357,
        "vario": 1.6650050231
    },
    {
        "time": "2022-07-30T16:01:09.000Z",
        "latitude": 60.8703285,
        "longitude": 11.6702242,
        "altitude": 1144.378,
        "vario": 1.5626502129
    },
    {
        "time": "2022-07-30T16:01:10.000Z",
        "latitude": 60.8701678,
        "longitude": 11.6706893,
        "altitude": 1144.338,
        "vario": 1.4962537181
    },
    {
        "time": "2022-07-30T16:01:11.000Z",
        "latitude": 60.870004,
        "longitude": 11.6711585,
        "altitude": 1144.534,
        "vario": 1.4659482411
    },
    {
        "time": "2022-07-30T16:01:12.000Z",
        "latitude": 60.8698409,
        "longitude": 11.6716252,
        "altitude": 1145.243,
        "vario": 1.4685897651
    },
    {
        "time": "2022-07-30T16:01:13.000Z",
        "latitude": 60.8696746,
        "longitude": 11.6720845,
        "altitude": 1145.584,
        "vario": 1.4984009138
    },
    {
        "time": "2022-07-30T16:01:14.000Z",
        "latitude": 60.8695046,
        "longitude": 11.6725406,
        "altitude": 1146.633,
        "vario": 1.5479842066
    },
    {
        "time": "2022-07-30T16:01:15.000Z",
        "latitude": 60.8693346,
        "longitude": 11.6729992,
        "altitude": 1149.152,
        "vario": 1.609565452
    },
    {
        "time": "2022-07-30T16:01:16.000Z",
        "latitude": 60.8691665,
        "longitude": 11.6734615,
        "altitude": 1152.014,
        "vario": 1.6762143536
    },
    {
        "time": "2022-07-30T16:01:17.000Z",
        "latitude": 60.8690034,
        "longitude": 11.6739287,
        "altitude": 1154.411,
        "vario": 1.7427217564
    },
    {
        "time": "2022-07-30T16:01:18.000Z",
        "latitude": 60.8688448,
        "longitude": 11.6743976,
        "altitude": 1156.896,
        "vario": 1.8059379352
    },
    {
        "time": "2022-07-30T16:01:19.000Z",
        "latitude": 60.8686877,
        "longitude": 11.6748702,
        "altitude": 1159.044,
        "vario": 1.8645820153
    },
    {
        "time": "2022-07-30T16:01:20.000Z",
        "latitude": 60.8685296,
        "longitude": 11.6753462,
        "altitude": 1160.55,
        "vario": 1.9185870938
    },
    {
        "time": "2022-07-30T16:01:21.000Z",
        "latitude": 60.8683748,
        "longitude": 11.6758191,
        "altitude": 1161.516,
        "vario": 1.9681764576
    },
    {
        "time": "2022-07-30T16:01:22.000Z",
        "latitude": 60.8682187,
        "longitude": 11.676287,
        "altitude": 1162.844,
        "vario": 2.0129669837
    },
    {
        "time": "2022-07-30T16:01:23.000Z",
        "latitude": 60.8680623,
        "longitude": 11.6767524,
        "altitude": 1164.685,
        "vario": 2.0514010792
    },
    {
        "time": "2022-07-30T16:01:24.000Z",
        "latitude": 60.8679067,
        "longitude": 11.6772197,
        "altitude": 1166.782,
        "vario": 2.0807016385
    },
    {
        "time": "2022-07-30T16:01:25.000Z",
        "latitude": 60.8677527,
        "longitude": 11.6776909,
        "altitude": 1169.107,
        "vario": 2.0973392212
    },
    {
        "time": "2022-07-30T16:01:26.000Z",
        "latitude": 60.8676023,
        "longitude": 11.6781626,
        "altitude": 1171.242,
        "vario": 2.0979794925
    },
    {
        "time": "2022-07-30T16:01:27.000Z",
        "latitude": 60.8674532,
        "longitude": 11.6786265,
        "altitude": 1173.916,
        "vario": 2.08064991
    },
    {
        "time": "2022-07-30T16:01:28.000Z",
        "latitude": 60.8672985,
        "longitude": 11.6790793,
        "altitude": 1177.592,
        "vario": 2.0457036665
    },
    {
        "time": "2022-07-30T16:01:29.000Z",
        "latitude": 60.8671402,
        "longitude": 11.6795249,
        "altitude": 1181.042,
        "vario": 1.9964317268
    },
    {
        "time": "2022-07-30T16:01:30.000Z",
        "latitude": 60.866982,
        "longitude": 11.6799706,
        "altitude": 1183.838,
        "vario": 1.9391058944
    },
    {
        "time": "2022-07-30T16:01:31.000Z",
        "latitude": 60.8668215,
        "longitude": 11.6804225,
        "altitude": 1185.086,
        "vario": 1.88228064
    },
    {
        "time": "2022-07-30T16:01:32.000Z",
        "latitude": 60.8666575,
        "longitude": 11.6808818,
        "altitude": 1185.848,
        "vario": 1.8355953723
    },
    {
        "time": "2022-07-30T16:01:33.000Z",
        "latitude": 60.8664906,
        "longitude": 11.6813515,
        "altitude": 1187.364,
        "vario": 1.8082967728
    },
    {
        "time": "2022-07-30T16:01:34.000Z",
        "latitude": 60.866327,
        "longitude": 11.6818285,
        "altitude": 1188.766,
        "vario": 1.807687715
    },
    {
        "time": "2022-07-30T16:01:35.000Z",
        "latitude": 60.8661667,
        "longitude": 11.6823163,
        "altitude": 1189.599,
        "vario": 1.837900892
    },
    {
        "time": "2022-07-30T16:01:36.000Z",
        "latitude": 60.8660068,
        "longitude": 11.6828144,
        "altitude": 1189.007,
        "vario": 1.8992461401
    },
    {
        "time": "2022-07-30T16:01:37.000Z",
        "latitude": 60.8658464,
        "longitude": 11.6833146,
        "altitude": 1189.134,
        "vario": 1.9881588496
    },
    {
        "time": "2022-07-30T16:01:38.000Z",
        "latitude": 60.8656855,
        "longitude": 11.6838095,
        "altitude": 1191.479,
        "vario": 2.0977125473
    },
    {
        "time": "2022-07-30T16:01:39.000Z",
        "latitude": 60.8655229,
        "longitude": 11.6843008,
        "altitude": 1195.164,
        "vario": 2.2186254384
    },
    {
        "time": "2022-07-30T16:01:40.000Z",
        "latitude": 60.8653626,
        "longitude": 11.6847909,
        "altitude": 1198.749,
        "vario": 2.3404895743
    },
    {
        "time": "2022-07-30T16:01:41.000Z",
        "latitude": 60.8652088,
        "longitude": 11.6852798,
        "altitude": 1201.615,
        "vario": 2.452921447
    },
    {
        "time": "2022-07-30T16:01:42.000Z",
        "latitude": 60.8650587,
        "longitude": 11.6857735,
        "altitude": 1203.78,
        "vario": 2.5465065449
    },
    {
        "time": "2022-07-30T16:01:43.000Z",
        "latitude": 60.8649151,
        "longitude": 11.6862642,
        "altitude": 1205.543,
        "vario": 2.6134962674
    },
    {
        "time": "2022-07-30T16:01:44.000Z",
        "latitude": 60.8647749,
        "longitude": 11.686743,
        "altitude": 1208.725,
        "vario": 2.6482398306
    },
    {
        "time": "2022-07-30T16:01:45.000Z",
        "latitude": 60.864631,
        "longitude": 11.6872194,
        "altitude": 1212.927,
        "vario": 2.6473137321
    },
    {
        "time": "2022-07-30T16:01:46.000Z",
        "latitude": 60.8644874,
        "longitude": 11.6876912,
        "altitude": 1216.579,
        "vario": 2.609426292
    },
    {
        "time": "2022-07-30T16:01:47.000Z",
        "latitude": 60.8643483,
        "longitude": 11.6881552,
        "altitude": 1220.013,
        "vario": 2.5351274772
    },
    {
        "time": "2022-07-30T16:01:48.000Z",
        "latitude": 60.8642068,
        "longitude": 11.6886223,
        "altitude": 1223.28,
        "vario": 2.4263532997
    },
    {
        "time": "2022-07-30T16:01:49.000Z",
        "latitude": 60.8640677,
        "longitude": 11.6890934,
        "altitude": 1225.284,
        "vario": 2.2858662674
    },
    {
        "time": "2022-07-30T16:01:50.000Z",
        "latitude": 60.8639281,
        "longitude": 11.6895659,
        "altitude": 1227.721,
        "vario": 2.1166759863
    },
    {
        "time": "2022-07-30T16:01:51.000Z",
        "latitude": 60.8637873,
        "longitude": 11.6900446,
        "altitude": 1230.405,
        "vario": 1.9216684352
    },
    {
        "time": "2022-07-30T16:01:52.000Z",
        "latitude": 60.8636465,
        "longitude": 11.6905283,
        "altitude": 1232.253,
        "vario": 1.7035459378
    },
    {
        "time": "2022-07-30T16:01:53.000Z",
        "latitude": 60.8635062,
        "longitude": 11.6910216,
        "altitude": 1232.964,
        "vario": 1.4651737695
    },
    {
        "time": "2022-07-30T16:01:54.000Z",
        "latitude": 60.8633659,
        "longitude": 11.6915262,
        "altitude": 1233.548,
        "vario": 1.2103586173
    },
    {
        "time": "2022-07-30T16:01:55.000Z",
        "latitude": 60.8632241,
        "longitude": 11.6920355,
        "altitude": 1234.789,
        "vario": 0.9447981246
    },
    {
        "time": "2022-07-30T16:01:56.000Z",
        "latitude": 60.8630844,
        "longitude": 11.6925423,
        "altitude": 1236.918,
        "vario": 0.6768539338
    },
    {
        "time": "2022-07-30T16:01:57.000Z",
        "latitude": 60.862957,
        "longitude": 11.6930624,
        "altitude": 1239.611,
        "vario": 0.4178049924
    },
    {
        "time": "2022-07-30T16:01:58.000Z",
        "latitude": 60.8628589,
        "longitude": 11.6936162,
        "altitude": 1242.277,
        "vario": 0.1813510355
    },
    {
        "time": "2022-07-30T16:01:59.000Z",
        "latitude": 60.862799,
        "longitude": 11.6942089,
        "altitude": 1242.319,
        "vario": -0.0178476498
    },
    {
        "time": "2022-07-30T16:02:00.000Z",
        "latitude": 60.8627832,
        "longitude": 11.6948468,
        "altitude": 1239.326,
        "vario": -0.1664207592
    },
    {
        "time": "2022-07-30T16:02:01.000Z",
        "latitude": 60.8628247,
        "longitude": 11.6955198,
        "altitude": 1235.156,
        "vario": -0.2548163877
    },
    {
        "time": "2022-07-30T16:02:02.000Z",
        "latitude": 60.8629219,
        "longitude": 11.6961902,
        "altitude": 1231.87,
        "vario": -0.2795523348
    },
    {
        "time": "2022-07-30T16:02:03.000Z",
        "latitude": 60.8630645,
        "longitude": 11.6968434,
        "altitude": 1229.568,
        "vario": -0.2445238971
    },
    {
        "time": "2022-07-30T16:02:04.000Z",
        "latitude": 60.8632351,
        "longitude": 11.697474,
        "altitude": 1227.992,
        "vario": -0.1610029771
    },
    {
        "time": "2022-07-30T16:02:05.000Z",
        "latitude": 60.8634233,
        "longitude": 11.6980782,
        "altitude": 1227.697,
        "vario": -0.0462343237
    },
    {
        "time": "2022-07-30T16:02:06.000Z",
        "latitude": 60.8636177,
        "longitude": 11.6986498,
        "altitude": 1228.321,
        "vario": 0.0791656738
    },
    {
        "time": "2022-07-30T16:02:07.000Z",
        "latitude": 60.8638144,
        "longitude": 11.6991933,
        "altitude": 1229.682,
        "vario": 0.1944108561
    },
    {
        "time": "2022-07-30T16:02:08.000Z",
        "latitude": 60.8640104,
        "longitude": 11.6997197,
        "altitude": 1231.763,
        "vario": 0.2817529384
    },
    {
        "time": "2022-07-30T16:02:09.000Z",
        "latitude": 60.8642031,
        "longitude": 11.7002354,
        "altitude": 1234.73,
        "vario": 0.3291063335
    },
    {
        "time": "2022-07-30T16:02:10.000Z",
        "latitude": 60.8643904,
        "longitude": 11.7007378,
        "altitude": 1237.363,
        "vario": 0.3315134426
    },
    {
        "time": "2022-07-30T16:02:11.000Z",
        "latitude": 60.8645734,
        "longitude": 11.701221,
        "altitude": 1238.522,
        "vario": 0.2913194363
    },
    {
        "time": "2022-07-30T16:02:12.000Z",
        "latitude": 60.864753,
        "longitude": 11.7016901,
        "altitude": 1238.936,
        "vario": 0.2171334212
    },
    {
        "time": "2022-07-30T16:02:13.000Z",
        "latitude": 60.8649291,
        "longitude": 11.702157,
        "altitude": 1238.886,
        "vario": 0.1218498756
    },
    {
        "time": "2022-07-30T16:02:14.000Z",
        "latitude": 60.8651027,
        "longitude": 11.702636,
        "altitude": 1238.223,
        "vario": 0.02023243
    },
    {
        "time": "2022-07-30T16:02:15.000Z",
        "latitude": 60.8652742,
        "longitude": 11.7031214,
        "altitude": 1236.848,
        "vario": -0.0734464022
    },
    {
        "time": "2022-07-30T16:02:16.000Z",
        "latitude": 60.8654428,
        "longitude": 11.7036126,
        "altitude": 1236.186,
        "vario": -0.1473101119
    },
    {
        "time": "2022-07-30T16:02:17.000Z",
        "latitude": 60.865609,
        "longitude": 11.7041105,
        "altitude": 1235.233,
        "vario": -0.1931493283
    },
    {
        "time": "2022-07-30T16:02:18.000Z",
        "latitude": 60.8657717,
        "longitude": 11.704616,
        "altitude": 1233.588,
        "vario": -0.2069272581
    },
    {
        "time": "2022-07-30T16:02:19.000Z",
        "latitude": 60.8659265,
        "longitude": 11.7051324,
        "altitude": 1233.023,
        "vario": -0.1885910442
    },
    {
        "time": "2022-07-30T16:02:20.000Z",
        "latitude": 60.8660678,
        "longitude": 11.7056533,
        "altitude": 1232.464,
        "vario": -0.1414135688
    },
    {
        "time": "2022-07-30T16:02:21.000Z",
        "latitude": 60.8661836,
        "longitude": 11.7061802,
        "altitude": 1232.345,
        "vario": -0.0710483572
    },
    {
        "time": "2022-07-30T16:02:22.000Z",
        "latitude": 60.8662624,
        "longitude": 11.7067072,
        "altitude": 1233.037,
        "vario": 0.0154805735
    },
    {
        "time": "2022-07-30T16:02:23.000Z",
        "latitude": 60.8663014,
        "longitude": 11.7072203,
        "altitude": 1233.124,
        "vario": 0.1107474759
    },
    {
        "time": "2022-07-30T16:02:24.000Z",
        "latitude": 60.8662989,
        "longitude": 11.7077118,
        "altitude": 1232.96,
        "vario": 0.2077595131
    },
    {
        "time": "2022-07-30T16:02:25.000Z",
        "latitude": 60.8662511,
        "longitude": 11.7081684,
        "altitude": 1233.002,
        "vario": 0.3005220355
    },
    {
        "time": "2022-07-30T16:02:26.000Z",
        "latitude": 60.866166,
        "longitude": 11.7085588,
        "altitude": 1232.958,
        "vario": 0.3844456466
    },
    {
        "time": "2022-07-30T16:02:27.000Z",
        "latitude": 60.8660475,
        "longitude": 11.7088856,
        "altitude": 1233.976,
        "vario": 0.4566234903
    },
    {
        "time": "2022-07-30T16:02:28.000Z",
        "latitude": 60.8659115,
        "longitude": 11.7091747,
        "altitude": 1235.869,
        "vario": 0.515876696
    },
    {
        "time": "2022-07-30T16:02:29.000Z",
        "latitude": 60.8657644,
        "longitude": 11.7094464,
        "altitude": 1237.172,
        "vario": 0.5625658264
    },
    {
        "time": "2022-07-30T16:02:30.000Z",
        "latitude": 60.8656133,
        "longitude": 11.7096956,
        "altitude": 1237.883,
        "vario": 0.5981773296
    },
    {
        "time": "2022-07-30T16:02:31.000Z",
        "latitude": 60.8654619,
        "longitude": 11.7099279,
        "altitude": 1238.214,
        "vario": 0.6246791802
    },
    {
        "time": "2022-07-30T16:02:32.000Z",
        "latitude": 60.8653065,
        "longitude": 11.7101503,
        "altitude": 1238.586,
        "vario": 0.6437187899
    },
    {
        "time": "2022-07-30T16:02:33.000Z",
        "latitude": 60.8651507,
        "longitude": 11.710355,
        "altitude": 1238.736,
        "vario": 0.6558982627
    },
    {
        "time": "2022-07-30T16:02:34.000Z",
        "latitude": 60.864998,
        "longitude": 11.7105484,
        "altitude": 1239.346,
        "vario": 0.6602993638
    },
    {
        "time": "2022-07-30T16:02:35.000Z",
        "latitude": 60.8648454,
        "longitude": 11.7107351,
        "altitude": 1239.769,
        "vario": 0.654386839
    },
    {
        "time": "2022-07-30T16:02:36.000Z",
        "latitude": 60.8646894,
        "longitude": 11.7109142,
        "altitude": 1239.951,
        "vario": 0.6343818297
    },
    {
        "time": "2022-07-30T16:02:37.000Z",
        "latitude": 60.8645277,
        "longitude": 11.7110761,
        "altitude": 1240.783,
        "vario": 0.596166589
    },
    {
        "time": "2022-07-30T16:02:38.000Z",
        "latitude": 60.8643669,
        "longitude": 11.711217,
        "altitude": 1241.802,
        "vario": 0.5365054978
    },
    {
        "time": "2022-07-30T16:02:39.000Z",
        "latitude": 60.8642073,
        "longitude": 11.7113356,
        "altitude": 1243.403,
        "vario": 0.4542603522
    },
    {
        "time": "2022-07-30T16:02:40.000Z",
        "latitude": 60.8640487,
        "longitude": 11.7114398,
        "altitude": 1244.858,
        "vario": 0.351374556
    },
    {
        "time": "2022-07-30T16:02:41.000Z",
        "latitude": 60.8638876,
        "longitude": 11.7115282,
        "altitude": 1246.557,
        "vario": 0.2332489874
    },
    {
        "time": "2022-07-30T16:02:42.000Z",
        "latitude": 60.8637243,
        "longitude": 11.7116044,
        "altitude": 1248.836,
        "vario": 0.1084144101
    },
    {
        "time": "2022-07-30T16:02:43.000Z",
        "latitude": 60.8635601,
        "longitude": 11.7116746,
        "altitude": 1248.992,
        "vario": -0.0124982629
    },
    {
        "time": "2022-07-30T16:02:44.000Z",
        "latitude": 60.8633948,
        "longitude": 11.7117281,
        "altitude": 1246.543,
        "vario": -0.118401116
    },
    {
        "time": "2022-07-30T16:02:45.000Z",
        "latitude": 60.8632319,
        "longitude": 11.7117282,
        "altitude": 1244.32,
        "vario": -0.1994824198
    },
    {
        "time": "2022-07-30T16:02:46.000Z",
        "latitude": 60.8630771,
        "longitude": 11.7116429,
        "altitude": 1242.586,
        "vario": -0.2485883897
    },
    {
        "time": "2022-07-30T16:02:47.000Z",
        "latitude": 60.8629394,
        "longitude": 11.711452,
        "altitude": 1241.015,
        "vario": -0.2620833084
    },
    {
        "time": "2022-07-30T16:02:48.000Z",
        "latitude": 60.8628421,
        "longitude": 11.7111482,
        "altitude": 1240.141,
        "vario": -0.2400125109
    },
    {
        "time": "2022-07-30T16:02:49.000Z",
        "latitude": 60.862808,
        "longitude": 11.7107621,
        "altitude": 1239.963,
        "vario": -0.1855520964
    },
    {
        "time": "2022-07-30T16:02:50.000Z",
        "latitude": 60.8628368,
        "longitude": 11.7103473,
        "altitude": 1240.123,
        "vario": -0.1040958653
    },
    {
        "time": "2022-07-30T16:02:51.000Z",
        "latitude": 60.8629338,
        "longitude": 11.709937,
        "altitude": 1240.592,
        "vario": -0.0022552721
    },
    {
        "time": "2022-07-30T16:02:52.000Z",
        "latitude": 60.8630982,
        "longitude": 11.709578,
        "altitude": 1241.527,
        "vario": 0.1129973097
    },
    {
        "time": "2022-07-30T16:02:53.000Z",
        "latitude": 60.8633175,
        "longitude": 11.7092963,
        "altitude": 1242.061,
        "vario": 0.2347765881
    },
    {
        "time": "2022-07-30T16:02:54.000Z",
        "latitude": 60.863573,
        "longitude": 11.709103,
        "altitude": 1241.691,
        "vario": 0.356392056
    },
    {
        "time": "2022-07-30T16:02:55.000Z",
        "latitude": 60.8638553,
        "longitude": 11.7090264,
        "altitude": 1240.809,
        "vario": 0.4713062791
    },
    {
        "time": "2022-07-30T16:02:56.000Z",
        "latitude": 60.8641536,
        "longitude": 11.7090754,
        "altitude": 1240.828,
        "vario": 0.573090199
    },
    {
        "time": "2022-07-30T16:02:57.000Z",
        "latitude": 60.86445,
        "longitude": 11.7092444,
        "altitude": 1241.218,
        "vario": 0.6555834331
    },
    {
        "time": "2022-07-30T16:02:58.000Z",
        "latitude": 60.8647195,
        "longitude": 11.7095387,
        "altitude": 1242.507,
        "vario": 0.7133958208
    },
    {
        "time": "2022-07-30T16:02:59.000Z",
        "latitude": 60.8649451,
        "longitude": 11.7099443,
        "altitude": 1244.752,
        "vario": 0.7425731088
    },
    {
        "time": "2022-07-30T16:03:00.000Z",
        "latitude": 60.8651205,
        "longitude": 11.7104296,
        "altitude": 1247.996,
        "vario": 0.7412735586
    },
    {
        "time": "2022-07-30T16:03:01.000Z",
        "latitude": 60.8652557,
        "longitude": 11.7109565,
        "altitude": 1250.287,
        "vario": 0.7102534672
    },
    {
        "time": "2022-07-30T16:03:02.000Z",
        "latitude": 60.8653631,
        "longitude": 11.7114971,
        "altitude": 1250.09,
        "vario": 0.6529414052
    },
    {
        "time": "2022-07-30T16:03:03.000Z",
        "latitude": 60.8654364,
        "longitude": 11.7120487,
        "altitude": 1249.715,
        "vario": 0.5750644939
    },
    {
        "time": "2022-07-30T16:03:04.000Z",
        "latitude": 60.8654757,
        "longitude": 11.7126056,
        "altitude": 1251.013,
        "vario": 0.4838204466
    },
    {
        "time": "2022-07-30T16:03:05.000Z",
        "latitude": 60.8654894,
        "longitude": 11.7131603,
        "altitude": 1252.341,
        "vario": 0.3868390442
    },
    {
        "time": "2022-07-30T16:03:06.000Z",
        "latitude": 60.865486,
        "longitude": 11.7136989,
        "altitude": 1252.026,
        "vario": 0.2912312616
    },
    {
        "time": "2022-07-30T16:03:07.000Z",
        "latitude": 60.8654415,
        "longitude": 11.714182,
        "altitude": 1251.001,
        "vario": 0.202846273
    },
    {
        "time": "2022-07-30T16:03:08.000Z",
        "latitude": 60.8653596,
        "longitude": 11.7146229,
        "altitude": 1250.467,
        "vario": 0.1258805172
    },
    {
        "time": "2022-07-30T16:03:09.000Z",
        "latitude": 60.8652477,
        "longitude": 11.7149847,
        "altitude": 1249.602,
        "vario": 0.06293102
    },
    {
        "time": "2022-07-30T16:03:10.000Z",
        "latitude": 60.8651028,
        "longitude": 11.7152136,
        "altitude": 1249.783,
        "vario": 0.0153273479
    },
    {
        "time": "2022-07-30T16:03:11.000Z",
        "latitude": 60.8649442,
        "longitude": 11.7153058,
        "altitude": 1250.377,
        "vario": -0.0164402768
    },
    {
        "time": "2022-07-30T16:03:12.000Z",
        "latitude": 60.8647916,
        "longitude": 11.7152594,
        "altitude": 1250.926,
        "vario": -0.0323513337
    },
    {
        "time": "2022-07-30T16:03:13.000Z",
        "latitude": 60.8646559,
        "longitude": 11.7151053,
        "altitude": 1251.784,
        "vario": -0.0327053336
    },
    {
        "time": "2022-07-30T16:03:14.000Z",
        "latitude": 60.8645514,
        "longitude": 11.7148638,
        "altitude": 1251.473,
        "vario": -0.0182640769
    },
    {
        "time": "2022-07-30T16:03:15.000Z",
        "latitude": 60.8644896,
        "longitude": 11.7145449,
        "altitude": 1250.18,
        "vario": 0.0093981118
    },
    {
        "time": "2022-07-30T16:03:16.000Z",
        "latitude": 60.864479,
        "longitude": 11.714172,
        "altitude": 1248.85,
        "vario": 0.0476099992
    },
    {
        "time": "2022-07-30T16:03:17.000Z",
        "latitude": 60.86452,
        "longitude": 11.7137717,
        "altitude": 1247.899,
        "vario": 0.0925803484
    },
    {
        "time": "2022-07-30T16:03:18.000Z",
        "latitude": 60.8646194,
        "longitude": 11.7133694,
        "altitude": 1247.422,
        "vario": 0.1396153486
    },
    {
        "time": "2022-07-30T16:03:19.000Z",
        "latitude": 60.8647779,
        "longitude": 11.7129998,
        "altitude": 1248.373,
        "vario": 0.1836839722
    },
    {
        "time": "2022-07-30T16:03:20.000Z",
        "latitude": 60.864976,
        "longitude": 11.7126752,
        "altitude": 1249.982,
        "vario": 0.2202217882
    },
    {
        "time": "2022-07-30T16:03:21.000Z",
        "latitude": 60.8651938,
        "longitude": 11.7123827,
        "altitude": 1251.503,
        "vario": 0.2458474981
    },
    {
        "time": "2022-07-30T16:03:22.000Z",
        "latitude": 60.8654238,
        "longitude": 11.7121075,
        "altitude": 1252.559,
        "vario": 0.258786793
    },
    {
        "time": "2022-07-30T16:03:23.000Z",
        "latitude": 60.8656638,
        "longitude": 11.7118373,
        "altitude": 1253.275,
        "vario": 0.2588317932
    },
    {
        "time": "2022-07-30T16:03:24.000Z",
        "latitude": 60.8659123,
        "longitude": 11.7115684,
        "altitude": 1253.304,
        "vario": 0.246901234
    },
    {
        "time": "2022-07-30T16:03:25.000Z",
        "latitude": 60.8661627,
        "longitude": 11.711305,
        "altitude": 1252.668,
        "vario": 0.2243390629
    },
    {
        "time": "2022-07-30T16:03:26.000Z",
        "latitude": 60.8664129,
        "longitude": 11.7110453,
        "altitude": 1252.319,
        "vario": 0.192090301
    },
    {
        "time": "2022-07-30T16:03:27.000Z",
        "latitude": 60.866663,
        "longitude": 11.7107921,
        "altitude": 1252.137,
        "vario": 0.1500764667
    },
    {
        "time": "2022-07-30T16:03:28.000Z",
        "latitude": 60.8669114,
        "longitude": 11.7105519,
        "altitude": 1251.939,
        "vario": 0.0970325541
    },
    {
        "time": "2022-07-30T16:03:29.000Z",
        "latitude": 60.8671612,
        "longitude": 11.71032,
        "altitude": 1251.956,
        "vario": 0.0308430577
    },
    {
        "time": "2022-07-30T16:03:30.000Z",
        "latitude": 60.8674228,
        "longitude": 11.7100908,
        "altitude": 1253.025,
        "vario": -0.0507674139
    },
    {
        "time": "2022-07-30T16:03:31.000Z",
        "latitude": 60.8676916,
        "longitude": 11.7098678,
        "altitude": 1254.269,
        "vario": -0.1493521299
    },
    {
        "time": "2022-07-30T16:03:32.000Z",
        "latitude": 60.8679629,
        "longitude": 11.7096559,
        "altitude": 1254.823,
        "vario": -0.264913606
    },
    {
        "time": "2022-07-30T16:03:33.000Z",
        "latitude": 60.8682351,
        "longitude": 11.7094502,
        "altitude": 1254.466,
        "vario": -0.3953874823
    },
    {
        "time": "2022-07-30T16:03:34.000Z",
        "latitude": 60.8685056,
        "longitude": 11.7092453,
        "altitude": 1254.158,
        "vario": -0.5365215333
    },
    {
        "time": "2022-07-30T16:03:35.000Z",
        "latitude": 60.8687738,
        "longitude": 11.7090315,
        "altitude": 1254.396,
        "vario": -0.6822233249
    },
    {
        "time": "2022-07-30T16:03:36.000Z",
        "latitude": 60.8690378,
        "longitude": 11.7087923,
        "altitude": 1253.441,
        "vario": -0.825231657
    },
    {
        "time": "2022-07-30T16:03:37.000Z",
        "latitude": 60.869289,
        "longitude": 11.7085124,
        "altitude": 1251.35,
        "vario": -0.9579803213
    },
    {
        "time": "2022-07-30T16:03:38.000Z",
        "latitude": 60.8695153,
        "longitude": 11.7081799,
        "altitude": 1249.862,
        "vario": -1.0734898329
    },
    {
        "time": "2022-07-30T16:03:39.000Z",
        "latitude": 60.8697083,
        "longitude": 11.707795,
        "altitude": 1247.978,
        "vario": -1.1661603498
    },
    {
        "time": "2022-07-30T16:03:40.000Z",
        "latitude": 60.8698535,
        "longitude": 11.7073616,
        "altitude": 1246.113,
        "vario": -1.2323517584
    },
    {
        "time": "2022-07-30T16:03:41.000Z",
        "latitude": 60.8699275,
        "longitude": 11.7069059,
        "altitude": 1244.599,
        "vario": -1.2706652038
    },
    {
        "time": "2022-07-30T16:03:42.000Z",
        "latitude": 60.8699202,
        "longitude": 11.7064701,
        "altitude": 1243.184,
        "vario": -1.2820265692
    },
    {
        "time": "2022-07-30T16:03:43.000Z",
        "latitude": 60.8698369,
        "longitude": 11.7061179,
        "altitude": 1241.747,
        "vario": -1.2695315273
    },
    {
        "time": "2022-07-30T16:03:44.000Z",
        "latitude": 60.8697086,
        "longitude": 11.7058796,
        "altitude": 1240.263,
        "vario": -1.2380228592
    },
    {
        "time": "2022-07-30T16:03:45.000Z",
        "latitude": 60.869552,
        "longitude": 11.7057438,
        "altitude": 1238.226,
        "vario": -1.1934402539
    },
    {
        "time": "2022-07-30T16:03:46.000Z",
        "latitude": 60.8693785,
        "longitude": 11.7056788,
        "altitude": 1236.237,
        "vario": -1.1419715132
    },
    {
        "time": "2022-07-30T16:03:47.000Z",
        "latitude": 60.8692009,
        "longitude": 11.7056568,
        "altitude": 1234.668,
        "vario": -1.0890488709
    },
    {
        "time": "2022-07-30T16:03:48.000Z",
        "latitude": 60.8690267,
        "longitude": 11.7056614,
        "altitude": 1234.571,
        "vario": -1.0383504964
    },
    {
        "time": "2022-07-30T16:03:49.000Z",
        "latitude": 60.8688586,
        "longitude": 11.7056812,
        "altitude": 1235.009,
        "vario": -0.9910142319
    },
    {
        "time": "2022-07-30T16:03:50.000Z",
        "latitude": 60.8686952,
        "longitude": 11.7057068,
        "altitude": 1235.27,
        "vario": -0.9452257793
    },
    {
        "time": "2022-07-30T16:03:51.000Z",
        "latitude": 60.8685336,
        "longitude": 11.705735,
        "altitude": 1235.096,
        "vario": -0.8963707758
    },
    {
        "time": "2022-07-30T16:03:52.000Z",
        "latitude": 60.8683741,
        "longitude": 11.7057651,
        "altitude": 1234.11,
        "vario": -0.837832784
    },
    {
        "time": "2022-07-30T16:03:53.000Z",
        "latitude": 60.8682158,
        "longitude": 11.7057948,
        "altitude": 1232.334,
        "vario": -0.7622586706
    },
    {
        "time": "2022-07-30T16:03:54.000Z",
        "latitude": 60.8680545,
        "longitude": 11.7058221,
        "altitude": 1230.508,
        "vario": -0.663025411
    },
    {
        "time": "2022-07-30T16:03:55.000Z",
        "latitude": 60.8678876,
        "longitude": 11.705848,
        "altitude": 1228.514,
        "vario": -0.5356056508
    },
    {
        "time": "2022-07-30T16:03:56.000Z",
        "latitude": 60.8677147,
        "longitude": 11.7058747,
        "altitude": 1226.167,
        "vario": -0.3784961838
    },
    {
        "time": "2022-07-30T16:03:57.000Z",
        "latitude": 60.8675285,
        "longitude": 11.7058955,
        "altitude": 1224.945,
        "vario": -0.1935679041
    },
    {
        "time": "2022-07-30T16:03:58.000Z",
        "latitude": 60.8673388,
        "longitude": 11.705934,
        "altitude": 1224.265,
        "vario": 0.01423916
    },
    {
        "time": "2022-07-30T16:03:59.000Z",
        "latitude": 60.8671454,
        "longitude": 11.7059899,
        "altitude": 1225.405,
        "vario": 0.2378182199
    },
    {
        "time": "2022-07-30T16:04:00.000Z",
        "latitude": 60.8669551,
        "longitude": 11.7060567,
        "altitude": 1227.089,
        "vario": 0.4689950425
    },
    {
        "time": "2022-07-30T16:04:01.000Z",
        "latitude": 60.8667671,
        "longitude": 11.7061254,
        "altitude": 1227.976,
        "vario": 0.699575976
    },
    {
        "time": "2022-07-30T16:04:02.000Z",
        "latitude": 60.8665832,
        "longitude": 11.7061942,
        "altitude": 1229.027,
        "vario": 0.9222104086
    },
    {
        "time": "2022-07-30T16:04:03.000Z",
        "latitude": 60.8664002,
        "longitude": 11.7062618,
        "altitude": 1230.249,
        "vario": 1.1308468647
    },
    {
        "time": "2022-07-30T16:04:04.000Z",
        "latitude": 60.866215,
        "longitude": 11.7063295,
        "altitude": 1231.428,
        "vario": 1.3208463568
    },
    {
        "time": "2022-07-30T16:04:05.000Z",
        "latitude": 60.8660293,
        "longitude": 11.7063986,
        "altitude": 1232.543,
        "vario": 1.4889255194
    },
    {
        "time": "2022-07-30T16:04:06.000Z",
        "latitude": 60.8658454,
        "longitude": 11.7064657,
        "altitude": 1234.094,
        "vario": 1.6329839128
    },
    {
        "time": "2022-07-30T16:04:07.000Z",
        "latitude": 60.8656616,
        "longitude": 11.7065289,
        "altitude": 1236.407,
        "vario": 1.751976087
    },
    {
        "time": "2022-07-30T16:04:08.000Z",
        "latitude": 60.8654779,
        "longitude": 11.7065886,
        "altitude": 1239.232,
        "vario": 1.845840163
    },
    {
        "time": "2022-07-30T16:04:09.000Z",
        "latitude": 60.8652942,
        "longitude": 11.7066409,
        "altitude": 1242.038,
        "vario": 1.9154578181
    },
    {
        "time": "2022-07-30T16:04:10.000Z",
        "latitude": 60.8651135,
        "longitude": 11.7066837,
        "altitude": 1244.038,
        "vario": 1.9626184698
    },
    {
        "time": "2022-07-30T16:04:11.000Z",
        "latitude": 60.8649281,
        "longitude": 11.7067189,
        "altitude": 1246.292,
        "vario": 1.9898462039
    },
    {
        "time": "2022-07-30T16:04:12.000Z",
        "latitude": 60.864732,
        "longitude": 11.7067786,
        "altitude": 1248.847,
        "vario": 2.0001156773
    },
    {
        "time": "2022-07-30T16:04:13.000Z",
        "latitude": 60.8645312,
        "longitude": 11.7069053,
        "altitude": 1250.823,
        "vario": 1.9965343069
    },
    {
        "time": "2022-07-30T16:04:14.000Z",
        "latitude": 60.8643391,
        "longitude": 11.7071379,
        "altitude": 1252.252,
        "vario": 1.9820192932
    },
    {
        "time": "2022-07-30T16:04:15.000Z",
        "latitude": 60.8641746,
        "longitude": 11.7074926,
        "altitude": 1253.777,
        "vario": 1.9590922066
    },
    {
        "time": "2022-07-30T16:04:16.000Z",
        "latitude": 60.864055,
        "longitude": 11.7079543,
        "altitude": 1255.474,
        "vario": 1.9298747811
    },
    {
        "time": "2022-07-30T16:04:17.000Z",
        "latitude": 60.8639961,
        "longitude": 11.7085012,
        "altitude": 1257.8,
        "vario": 1.8962199743
    },
    {
        "time": "2022-07-30T16:04:18.000Z",
        "latitude": 60.8640056,
        "longitude": 11.7090976,
        "altitude": 1260.313,
        "vario": 1.8599675281
    },
    {
        "time": "2022-07-30T16:04:19.000Z",
        "latitude": 60.8640891,
        "longitude": 11.709696,
        "altitude": 1262.441,
        "vario": 1.8232007924
    },
    {
        "time": "2022-07-30T16:04:20.000Z",
        "latitude": 60.8642416,
        "longitude": 11.710263,
        "altitude": 1264.469,
        "vario": 1.7883980505
    },
    {
        "time": "2022-07-30T16:04:21.000Z",
        "latitude": 60.8644553,
        "longitude": 11.7107596,
        "altitude": 1266.255,
        "vario": 1.7583850835
    },
    {
        "time": "2022-07-30T16:04:22.000Z",
        "latitude": 60.8647226,
        "longitude": 11.7111416,
        "altitude": 1267.439,
        "vario": 1.7360147064
    },
    {
        "time": "2022-07-30T16:04:23.000Z",
        "latitude": 60.8650241,
        "longitude": 11.7113914,
        "altitude": 1269.135,
        "vario": 1.7237468226
    },
    {
        "time": "2022-07-30T16:04:24.000Z",
        "latitude": 60.865346,
        "longitude": 11.7114983,
        "altitude": 1270.677,
        "vario": 1.723223618
    },
    {
        "time": "2022-07-30T16:04:25.000Z",
        "latitude": 60.86567,
        "longitude": 11.7114632,
        "altitude": 1271.507,
        "vario": 1.7349008115
    },
    {
        "time": "2022-07-30T16:04:26.000Z",
        "latitude": 60.8659794,
        "longitude": 11.7112813,
        "altitude": 1272.419,
        "vario": 1.7578974806
    },
    {
        "time": "2022-07-30T16:04:27.000Z",
        "latitude": 60.8662519,
        "longitude": 11.710966,
        "altitude": 1273.462,
        "vario": 1.7901470128
    },
    {
        "time": "2022-07-30T16:04:28.000Z",
        "latitude": 60.8664599,
        "longitude": 11.7105479,
        "altitude": 1275.898,
        "vario": 1.8287453501
    },
    {
        "time": "2022-07-30T16:04:29.000Z",
        "latitude": 60.8665936,
        "longitude": 11.7100736,
        "altitude": 1278.685,
        "vario": 1.8704436351
    },
    {
        "time": "2022-07-30T16:04:30.000Z",
        "latitude": 60.8666547,
        "longitude": 11.7095769,
        "altitude": 1280.691,
        "vario": 1.9120629818
    },
    {
        "time": "2022-07-30T16:04:31.000Z",
        "latitude": 60.8666383,
        "longitude": 11.7090963,
        "altitude": 1282.787,
        "vario": 1.9508211153
    },
    {
        "time": "2022-07-30T16:04:32.000Z",
        "latitude": 60.8665495,
        "longitude": 11.7086791,
        "altitude": 1285.11,
        "vario": 1.9845364422
    },
    {
        "time": "2022-07-30T16:04:33.000Z",
        "latitude": 60.8664068,
        "longitude": 11.7083715,
        "altitude": 1286.87,
        "vario": 2.0115339488
    },
    {
        "time": "2022-07-30T16:04:34.000Z",
        "latitude": 60.8662227,
        "longitude": 11.7082104,
        "altitude": 1288.927,
        "vario": 2.0304917358
    },
    {
        "time": "2022-07-30T16:04:35.000Z",
        "latitude": 60.8660166,
        "longitude": 11.7081964,
        "altitude": 1290.731,
        "vario": 2.0402765418
    },
    {
        "time": "2022-07-30T16:04:36.000Z",
        "latitude": 60.8658111,
        "longitude": 11.708339,
        "altitude": 1292.186,
        "vario": 2.0398818366
    },
    {
        "time": "2022-07-30T16:04:37.000Z",
        "latitude": 60.8656327,
        "longitude": 11.7086394,
        "altitude": 1294.264,
        "vario": 2.0285224186
    },
    {
        "time": "2022-07-30T16:04:38.000Z",
        "latitude": 60.8655183,
        "longitude": 11.7090893,
        "altitude": 1297.355,
        "vario": 2.0058246436
    },
    {
        "time": "2022-07-30T16:04:39.000Z",
        "latitude": 60.8654548,
        "longitude": 11.7095851,
        "altitude": 1300.229,
        "vario": 1.9720886107
    },
    {
        "time": "2022-07-30T16:04:40.000Z",
        "latitude": 60.8654544,
        "longitude": 11.7101512,
        "altitude": 1302.576,
        "vario": 1.9285354444
    },
    {
        "time": "2022-07-30T16:04:41.000Z",
        "latitude": 60.8655305,
        "longitude": 11.7107411,
        "altitude": 1304.185,
        "vario": 1.8774431784
    },
    {
        "time": "2022-07-30T16:04:42.000Z",
        "latitude": 60.8656743,
        "longitude": 11.7112986,
        "altitude": 1306.014,
        "vario": 1.8221416446
    },
    {
        "time": "2022-07-30T16:04:43.000Z",
        "latitude": 60.8658799,
        "longitude": 11.711787,
        "altitude": 1307.721,
        "vario": 1.7668604173
    },
    {
        "time": "2022-07-30T16:04:44.000Z",
        "latitude": 60.8661344,
        "longitude": 11.712186,
        "altitude": 1309.158,
        "vario": 1.7164523802
    },
    {
        "time": "2022-07-30T16:04:45.000Z",
        "latitude": 60.866433,
        "longitude": 11.7124882,
        "altitude": 1310.847,
        "vario": 1.6760199415
    },
    {
        "time": "2022-07-30T16:04:46.000Z",
        "latitude": 60.8667634,
        "longitude": 11.7126754,
        "altitude": 1312.569,
        "vario": 1.6504626458
    },
    {
        "time": "2022-07-30T16:04:47.000Z",
        "latitude": 60.8671037,
        "longitude": 11.7127145,
        "altitude": 1313.621,
        "vario": 1.6440358559
    },
    {
        "time": "2022-07-30T16:04:48.000Z",
        "latitude": 60.8674285,
        "longitude": 11.7126048,
        "altitude": 1314.973,
        "vario": 1.659871324
    },
    {
        "time": "2022-07-30T16:04:49.000Z",
        "latitude": 60.8677256,
        "longitude": 11.7123684,
        "altitude": 1315.655,
        "vario": 1.6995108103
    },
    {
        "time": "2022-07-30T16:04:50.000Z",
        "latitude": 60.8679689,
        "longitude": 11.7119771,
        "altitude": 1318.319,
        "vario": 1.7625348877
    },
    {
        "time": "2022-07-30T16:04:51.000Z",
        "latitude": 60.8681676,
        "longitude": 11.7115377,
        "altitude": 1318.8,
        "vario": 1.8462985222
    },
    {
        "time": "2022-07-30T16:04:52.000Z",
        "latitude": 60.868296,
        "longitude": 11.7110395,
        "altitude": 1319.446,
        "vario": 1.9459216965
    },
    {
        "time": "2022-07-30T16:04:53.000Z",
        "latitude": 60.8683439,
        "longitude": 11.7105013,
        "altitude": 1321.246,
        "vario": 2.0546416343
    },
    {
        "time": "2022-07-30T16:04:54.000Z",
        "latitude": 60.8683174,
        "longitude": 11.7099914,
        "altitude": 1322.998,
        "vario": 2.1644570891
    },
    {
        "time": "2022-07-30T16:04:55.000Z",
        "latitude": 60.8682097,
        "longitude": 11.7095788,
        "altitude": 1325.89,
        "vario": 2.2671073465
    },
    {
        "time": "2022-07-30T16:04:56.000Z",
        "latitude": 60.8680429,
        "longitude": 11.7092832,
        "altitude": 1328.791,
        "vario": 2.3551733451
    },
    {
        "time": "2022-07-30T16:04:57.000Z",
        "latitude": 60.8678302,
        "longitude": 11.7091528,
        "altitude": 1331.929,
        "vario": 2.4230776991
    },
    {
        "time": "2022-07-30T16:04:58.000Z",
        "latitude": 60.8676139,
        "longitude": 11.7091851,
        "altitude": 1335.548,
        "vario": 2.4678921729
    },
    {
        "time": "2022-07-30T16:04:59.000Z",
        "latitude": 60.8674097,
        "longitude": 11.7093708,
        "altitude": 1339.194,
        "vario": 2.4896508545
    },
    {
        "time": "2022-07-30T16:05:00.000Z",
        "latitude": 60.8672353,
        "longitude": 11.7097027,
        "altitude": 1342.198,
        "vario": 2.4911006434
    },
    {
        "time": "2022-07-30T16:05:01.000Z",
        "latitude": 60.867108,
        "longitude": 11.7101621,
        "altitude": 1345.278,
        "vario": 2.4770085815
    },
    {
        "time": "2022-07-30T16:05:02.000Z",
        "latitude": 60.8670432,
        "longitude": 11.7107097,
        "altitude": 1347.35,
        "vario": 2.4531658707
    },
    {
        "time": "2022-07-30T16:05:03.000Z",
        "latitude": 60.8670499,
        "longitude": 11.7113136,
        "altitude": 1348.633,
        "vario": 2.4253522895
    },
    {
        "time": "2022-07-30T16:05:04.000Z",
        "latitude": 60.8671463,
        "longitude": 11.7119292,
        "altitude": 1349.94,
        "vario": 2.3984985411
    },
    {
        "time": "2022-07-30T16:05:05.000Z",
        "latitude": 60.8673314,
        "longitude": 11.7125008,
        "altitude": 1351.752,
        "vario": 2.3761743438
    },
    {
        "time": "2022-07-30T16:05:06.000Z",
        "latitude": 60.8675854,
        "longitude": 11.7129825,
        "altitude": 1354.125,
        "vario": 2.3605158643
    },
    {
        "time": "2022-07-30T16:05:07.000Z",
        "latitude": 60.8678927,
        "longitude": 11.7133336,
        "altitude": 1356.883,
        "vario": 2.3524901406
    },
    {
        "time": "2022-07-30T16:05:08.000Z",
        "latitude": 60.8682285,
        "longitude": 11.7135335,
        "altitude": 1360.17,
        "vario": 2.3522799181
    },
    {
        "time": "2022-07-30T16:05:09.000Z",
        "latitude": 60.868572,
        "longitude": 11.7135696,
        "altitude": 1363.308,
        "vario": 2.3596492134
    },
    {
        "time": "2022-07-30T16:05:10.000Z",
        "latitude": 60.8689005,
        "longitude": 11.7134656,
        "altitude": 1365.2,
        "vario": 2.3740881754
    },
    {
        "time": "2022-07-30T16:05:11.000Z",
        "latitude": 60.8691989,
        "longitude": 11.7132297,
        "altitude": 1366.819,
        "vario": 2.3947808578
    },
    {
        "time": "2022-07-30T16:05:12.000Z",
        "latitude": 60.8694592,
        "longitude": 11.7128759,
        "altitude": 1368.933,
        "vario": 2.4203514593
    },
    {
        "time": "2022-07-30T16:05:13.000Z",
        "latitude": 60.8696692,
        "longitude": 11.7124351,
        "altitude": 1370.794,
        "vario": 2.4485925734
    },
    {
        "time": "2022-07-30T16:05:14.000Z",
        "latitude": 60.8698218,
        "longitude": 11.7119292,
        "altitude": 1373.025,
        "vario": 2.476471486
    },
    {
        "time": "2022-07-30T16:05:15.000Z",
        "latitude": 60.8699151,
        "longitude": 11.7113921,
        "altitude": 1374.784,
        "vario": 2.5002874378
    },
    {
        "time": "2022-07-30T16:05:16.000Z",
        "latitude": 60.8699398,
        "longitude": 11.7108632,
        "altitude": 1378.018,
        "vario": 2.5161326169
    },
    {
        "time": "2022-07-30T16:05:17.000Z",
        "latitude": 60.8698994,
        "longitude": 11.7103781,
        "altitude": 1381.449,
        "vario": 2.5205861915
    },
    {
        "time": "2022-07-30T16:05:18.000Z",
        "latitude": 60.8698041,
        "longitude": 11.7099614,
        "altitude": 1384.527,
        "vario": 2.5113744255
    },
    {
        "time": "2022-07-30T16:05:19.000Z",
        "latitude": 60.8696585,
        "longitude": 11.7096466,
        "altitude": 1387.832,
        "vario": 2.4878732845
    },
    {
        "time": "2022-07-30T16:05:20.000Z",
        "latitude": 60.8694799,
        "longitude": 11.709455,
        "altitude": 1390.876,
        "vario": 2.4512933151
    },
    {
        "time": "2022-07-30T16:05:21.000Z",
        "latitude": 60.8692821,
        "longitude": 11.7093964,
        "altitude": 1393.429,
        "vario": 2.4044575755
    },
    {
        "time": "2022-07-30T16:05:22.000Z",
        "latitude": 60.8690809,
        "longitude": 11.7094868,
        "altitude": 1395.806,
        "vario": 2.3512499264
    },
    {
        "time": "2022-07-30T16:05:23.000Z",
        "latitude": 60.8688931,
        "longitude": 11.7097151,
        "altitude": 1397.653,
        "vario": 2.2958531887
    },
    {
        "time": "2022-07-30T16:05:24.000Z",
        "latitude": 60.8687385,
        "longitude": 11.710068,
        "altitude": 1399.198,
        "vario": 2.2419815229
    },
    {
        "time": "2022-07-30T16:05:25.000Z",
        "latitude": 60.8686312,
        "longitude": 11.7105317,
        "altitude": 1401.106,
        "vario": 2.1923074897
    },
    {
        "time": "2022-07-30T16:05:26.000Z",
        "latitude": 60.868576,
        "longitude": 11.7110754,
        "altitude": 1403.149,
        "vario": 2.1481873878
    },
    {
        "time": "2022-07-30T16:05:27.000Z",
        "latitude": 60.8685833,
        "longitude": 11.7116736,
        "altitude": 1405.052,
        "vario": 2.1097805244
    },
    {
        "time": "2022-07-30T16:05:28.000Z",
        "latitude": 60.8686639,
        "longitude": 11.7122844,
        "altitude": 1406.948,
        "vario": 2.0765360749
    },
    {
        "time": "2022-07-30T16:05:29.000Z",
        "latitude": 60.8688143,
        "longitude": 11.7128564,
        "altitude": 1409.05,
        "vario": 2.0478835017
    },
    {
        "time": "2022-07-30T16:05:30.000Z",
        "latitude": 60.8690248,
        "longitude": 11.7133668,
        "altitude": 1411.426,
        "vario": 2.0239318412
    },
    {
        "time": "2022-07-30T16:05:31.000Z",
        "latitude": 60.8692907,
        "longitude": 11.7137952,
        "altitude": 1413.844,
        "vario": 2.0059516221
    },
    {
        "time": "2022-07-30T16:05:32.000Z",
        "latitude": 60.869598,
        "longitude": 11.7141172,
        "altitude": 1416.299,
        "vario": 1.9965143738
    },
    {
        "time": "2022-07-30T16:05:33.000Z",
        "latitude": 60.8699313,
        "longitude": 11.714309,
        "altitude": 1418.782,
        "vario": 1.9991904993
    },
    {
        "time": "2022-07-30T16:05:34.000Z",
        "latitude": 60.8702754,
        "longitude": 11.7143624,
        "altitude": 1420.454,
        "vario": 2.0177442092
    },
    {
        "time": "2022-07-30T16:05:35.000Z",
        "latitude": 60.8706143,
        "longitude": 11.7142816,
        "altitude": 1421.889,
        "vario": 2.0550771981
    },
    {
        "time": "2022-07-30T16:05:36.000Z",
        "latitude": 60.8709315,
        "longitude": 11.7140671,
        "altitude": 1423.089,
        "vario": 2.1121656357
    },
    {
        "time": "2022-07-30T16:05:37.000Z",
        "latitude": 60.8712143,
        "longitude": 11.7137287,
        "altitude": 1423.395,
        "vario": 2.187309109
    },
    {
        "time": "2022-07-30T16:05:38.000Z",
        "latitude": 60.8714467,
        "longitude": 11.7132812,
        "altitude": 1424.538,
        "vario": 2.2759447696
    },
    {
        "time": "2022-07-30T16:05:39.000Z",
        "latitude": 60.8716089,
        "longitude": 11.712756,
        "altitude": 1426.422,
        "vario": 2.3710835224
    },
    {
        "time": "2022-07-30T16:05:40.000Z",
        "latitude": 60.8716928,
        "longitude": 11.7121972,
        "altitude": 1429.102,
        "vario": 2.4644112545
    },
    {
        "time": "2022-07-30T16:05:41.000Z",
        "latitude": 60.8716952,
        "longitude": 11.7116654,
        "altitude": 1432.528,
        "vario": 2.5477972087
    },
    {
        "time": "2022-07-30T16:05:42.000Z",
        "latitude": 60.8716261,
        "longitude": 11.7112095,
        "altitude": 1436.942,
        "vario": 2.6148443113
    },
    {
        "time": "2022-07-30T16:05:43.000Z",
        "latitude": 60.8714996,
        "longitude": 11.7108569,
        "altitude": 1441.005,
        "vario": 2.6621389598
    },
    {
        "time": "2022-07-30T16:05:44.000Z",
        "latitude": 60.8713263,
        "longitude": 11.7106253,
        "altitude": 1444.363,
        "vario": 2.6898412327
    },
    {
        "time": "2022-07-30T16:05:45.000Z",
        "latitude": 60.8711307,
        "longitude": 11.7105097,
        "altitude": 1447.382,
        "vario": 2.7014370687
    },
    {
        "time": "2022-07-30T16:05:46.000Z",
        "latitude": 60.8709275,
        "longitude": 11.7105474,
        "altitude": 1450.495,
        "vario": 2.7027072961
    },
    {
        "time": "2022-07-30T16:05:47.000Z",
        "latitude": 60.8707257,
        "longitude": 11.7107416,
        "altitude": 1452.875,
        "vario": 2.7001295762
    },
    {
        "time": "2022-07-30T16:05:48.000Z",
        "latitude": 60.8705447,
        "longitude": 11.7110472,
        "altitude": 1454.389,
        "vario": 2.6990977056
    },
    {
        "time": "2022-07-30T16:05:49.000Z",
        "latitude": 60.8704005,
        "longitude": 11.71146,
        "altitude": 1455.891,
        "vario": 2.7023870747
    },
    {
        "time": "2022-07-30T16:05:50.000Z",
        "latitude": 60.8703018,
        "longitude": 11.7119638,
        "altitude": 1457.739,
        "vario": 2.7092632336
    },
    {
        "time": "2022-07-30T16:05:51.000Z",
        "latitude": 60.8702543,
        "longitude": 11.712531,
        "altitude": 1460.023,
        "vario": 2.7154778521
    },
    {
        "time": "2022-07-30T16:05:52.000Z",
        "latitude": 60.8702602,
        "longitude": 11.7131271,
        "altitude": 1462.327,
        "vario": 2.7142016182
    },
    {
        "time": "2022-07-30T16:05:53.000Z",
        "latitude": 60.8703251,
        "longitude": 11.7137349,
        "altitude": 1464.935,
        "vario": 2.697706269
    },
    {
        "time": "2022-07-30T16:05:54.000Z",
        "latitude": 60.8704348,
        "longitude": 11.7143272,
        "altitude": 1468.75,
        "vario": 2.6594129729
    },
    {
        "time": "2022-07-30T16:05:55.000Z",
        "latitude": 60.8705902,
        "longitude": 11.7148824,
        "altitude": 1473.529,
        "vario": 2.5957766007
    },
    {
        "time": "2022-07-30T16:05:56.000Z",
        "latitude": 60.8707915,
        "longitude": 11.7153909,
        "altitude": 1478.662,
        "vario": 2.5075504726
    },
    {
        "time": "2022-07-30T16:05:57.000Z",
        "latitude": 60.8710315,
        "longitude": 11.715838,
        "altitude": 1482.958,
        "vario": 2.400168381
    },
    {
        "time": "2022-07-30T16:05:58.000Z",
        "latitude": 60.8713011,
        "longitude": 11.7162207,
        "altitude": 1485.173,
        "vario": 2.2830864274
    },
    {
        "time": "2022-07-30T16:05:59.000Z",
        "latitude": 60.8715955,
        "longitude": 11.7165252,
        "altitude": 1486.145,
        "vario": 2.1682855197
    },
    {
        "time": "2022-07-30T16:06:00.000Z",
        "latitude": 60.8719107,
        "longitude": 11.7167449,
        "altitude": 1486.61,
        "vario": 2.0682727598
    },
    {
        "time": "2022-07-30T16:06:01.000Z",
        "latitude": 60.8722451,
        "longitude": 11.7168732,
        "altitude": 1486.975,
        "vario": 1.9940413428
    },
    {
        "time": "2022-07-30T16:06:02.000Z",
        "latitude": 60.8725902,
        "longitude": 11.7168936,
        "altitude": 1487.626,
        "vario": 1.9534577791
    },
    {
        "time": "2022-07-30T16:06:03.000Z",
        "latitude": 60.8729335,
        "longitude": 11.7168,
        "altitude": 1488.503,
        "vario": 1.9503619199
    },
    {
        "time": "2022-07-30T16:06:04.000Z",
        "latitude": 60.87326,
        "longitude": 11.7166012,
        "altitude": 1489.879,
        "vario": 1.9844496175
    },
    {
        "time": "2022-07-30T16:06:05.000Z",
        "latitude": 60.8735559,
        "longitude": 11.7163082,
        "altitude": 1491.981,
        "vario": 2.0517589589
    },
    {
        "time": "2022-07-30T16:06:06.000Z",
        "latitude": 60.8738086,
        "longitude": 11.7159342,
        "altitude": 1494.721,
        "vario": 2.1456149734
    },
    {
        "time": "2022-07-30T16:06:07.000Z",
        "latitude": 60.8740153,
        "longitude": 11.7155003,
        "altitude": 1497.142,
        "vario": 2.2577209962
    },
    {
        "time": "2022-07-30T16:06:08.000Z",
        "latitude": 60.874162,
        "longitude": 11.7150039,
        "altitude": 1498.968,
        "vario": 2.3791049688
    },
    {
        "time": "2022-07-30T16:06:09.000Z",
        "latitude": 60.8742695,
        "longitude": 11.7144879,
        "altitude": 1500.961,
        "vario": 2.5008835916
    },
    {
        "time": "2022-07-30T16:06:10.000Z",
        "latitude": 60.8743022,
        "longitude": 11.7139829,
        "altitude": 1503.523,
        "vario": 2.6148224061
    },
    {
        "time": "2022-07-30T16:06:11.000Z",
        "latitude": 60.8742762,
        "longitude": 11.7135251,
        "altitude": 1506.919,
        "vario": 2.7137358687
    },
    {
        "time": "2022-07-30T16:06:12.000Z",
        "latitude": 60.8741961,
        "longitude": 11.7131354,
        "altitude": 1510.265,
        "vario": 2.7918406871
    },
    {
        "time": "2022-07-30T16:06:13.000Z",
        "latitude": 60.8740752,
        "longitude": 11.7128272,
        "altitude": 1513.335,
        "vario": 2.8451197669
    },
    {
        "time": "2022-07-30T16:06:14.000Z",
        "latitude": 60.8739187,
        "longitude": 11.7126084,
        "altitude": 1515.975,
        "vario": 2.8716617807
    },
    {
        "time": "2022-07-30T16:06:15.000Z",
        "latitude": 60.8737371,
        "longitude": 11.7125169,
        "altitude": 1519.463,
        "vario": 2.8719314623
    },
    {
        "time": "2022-07-30T16:06:16.000Z",
        "latitude": 60.8735482,
        "longitude": 11.712578,
        "altitude": 1524.085,
        "vario": 2.8487821354
    },
    {
        "time": "2022-07-30T16:06:17.000Z",
        "latitude": 60.8733676,
        "longitude": 11.7127526,
        "altitude": 1528.261,
        "vario": 2.8070285553
    },
    {
        "time": "2022-07-30T16:06:18.000Z",
        "latitude": 60.8732032,
        "longitude": 11.7130354,
        "altitude": 1531.266,
        "vario": 2.7526792175
    },
    {
        "time": "2022-07-30T16:06:19.000Z",
        "latitude": 60.8730655,
        "longitude": 11.7134168,
        "altitude": 1533.397,
        "vario": 2.6918732012
    },
    {
        "time": "2022-07-30T16:06:20.000Z",
        "latitude": 60.8729676,
        "longitude": 11.7138896,
        "altitude": 1535.224,
        "vario": 2.6296885438
    },
    {
        "time": "2022-07-30T16:06:21.000Z",
        "latitude": 60.8729142,
        "longitude": 11.7144366,
        "altitude": 1536.801,
        "vario": 2.5691595239
    },
    {
        "time": "2022-07-30T16:06:22.000Z",
        "latitude": 60.8729155,
        "longitude": 11.7150316,
        "altitude": 1538.55,
        "vario": 2.5107512611
    },
    {
        "time": "2022-07-30T16:06:23.000Z",
        "latitude": 60.8729756,
        "longitude": 11.7156481,
        "altitude": 1540.055,
        "vario": 2.4524927491
    },
    {
        "time": "2022-07-30T16:06:24.000Z",
        "latitude": 60.8730997,
        "longitude": 11.716259,
        "altitude": 1541.747,
        "vario": 2.39075255
    },
    {
        "time": "2022-07-30T16:06:25.000Z",
        "latitude": 60.8733018,
        "longitude": 11.7168244,
        "altitude": 1545.303,
        "vario": 2.3214834009
    },
    {
        "time": "2022-07-30T16:06:26.000Z",
        "latitude": 60.8735599,
        "longitude": 11.7172943,
        "altitude": 1549.249,
        "vario": 2.2416662941
    },
    {
        "time": "2022-07-30T16:06:27.000Z",
        "latitude": 60.8738571,
        "longitude": 11.7176557,
        "altitude": 1553.467,
        "vario": 2.1505376098
    },
    {
        "time": "2022-07-30T16:06:28.000Z",
        "latitude": 60.8741809,
        "longitude": 11.7179186,
        "altitude": 1556.78,
        "vario": 2.0503047927
    },
    {
        "time": "2022-07-30T16:06:29.000Z",
        "latitude": 60.8745221,
        "longitude": 11.718078,
        "altitude": 1558.364,
        "vario": 1.9462135216
    },
    {
        "time": "2022-07-30T16:06:30.000Z",
        "latitude": 60.8748703,
        "longitude": 11.7181281,
        "altitude": 1559.137,
        "vario": 1.8459827053
    },
    {
        "time": "2022-07-30T16:06:31.000Z",
        "latitude": 60.8752147,
        "longitude": 11.7180559,
        "altitude": 1559.787,
        "vario": 1.7587552737
    },
    {
        "time": "2022-07-30T16:06:32.000Z",
        "latitude": 60.8755397,
        "longitude": 11.7178604,
        "altitude": 1560.783,
        "vario": 1.6937748968
    },
    {
        "time": "2022-07-30T16:06:33.000Z",
        "latitude": 60.8758282,
        "longitude": 11.7175499,
        "altitude": 1562.066,
        "vario": 1.6590290886
    },
    {
        "time": "2022-07-30T16:06:34.000Z",
        "latitude": 60.8760719,
        "longitude": 11.7171417,
        "altitude": 1563.699,
        "vario": 1.6601337422
    },
    {
        "time": "2022-07-30T16:06:35.000Z",
        "latitude": 60.8762639,
        "longitude": 11.7166564,
        "altitude": 1564.418,
        "vario": 1.6995307514
    },
    {
        "time": "2022-07-30T16:06:36.000Z",
        "latitude": 60.8763915,
        "longitude": 11.7161203,
        "altitude": 1565.159,
        "vario": 1.7760363441
    },
    {
        "time": "2022-07-30T16:06:37.000Z",
        "latitude": 60.8764463,
        "longitude": 11.7155723,
        "altitude": 1566.923,
        "vario": 1.8848267407
    },
    {
        "time": "2022-07-30T16:06:38.000Z",
        "latitude": 60.8764372,
        "longitude": 11.7150474,
        "altitude": 1567.768,
        "vario": 2.0177687395
    },
    {
        "time": "2022-07-30T16:06:39.000Z",
        "latitude": 60.8763646,
        "longitude": 11.7145725,
        "altitude": 1568.487,
        "vario": 2.1641454012
    },
    {
        "time": "2022-07-30T16:06:40.000Z",
        "latitude": 60.8762291,
        "longitude": 11.7141842,
        "altitude": 1570.438,
        "vario": 2.3117484438
    },
    {
        "time": "2022-07-30T16:06:41.000Z",
        "latitude": 60.8760463,
        "longitude": 11.7139281,
        "altitude": 1573.66,
        "vario": 2.4482302985
    },
    {
        "time": "2022-07-30T16:06:42.000Z",
        "latitude": 60.8758355,
        "longitude": 11.7138222,
        "altitude": 1577.587,
        "vario": 2.5625564975
    },
    {
        "time": "2022-07-30T16:06:43.000Z",
        "latitude": 60.8756148,
        "longitude": 11.7138594,
        "altitude": 1581.446,
        "vario": 2.6463157952
    },
    {
        "time": "2022-07-30T16:06:44.000Z",
        "latitude": 60.8754053,
        "longitude": 11.7140449,
        "altitude": 1585.411,
        "vario": 2.6946614019
    },
    {
        "time": "2022-07-30T16:06:45.000Z",
        "latitude": 60.8752187,
        "longitude": 11.7143618,
        "altitude": 1589.26,
        "vario": 2.70667113
    },
    {
        "time": "2022-07-30T16:06:46.000Z",
        "latitude": 60.8750672,
        "longitude": 11.7147912,
        "altitude": 1592.459,
        "vario": 2.6851472909
    },
    {
        "time": "2022-07-30T16:06:47.000Z",
        "latitude": 60.874963,
        "longitude": 11.715316,
        "altitude": 1595.766,
        "vario": 2.6358297668
    },
    {
        "time": "2022-07-30T16:06:48.000Z",
        "latitude": 60.8749123,
        "longitude": 11.7159077,
        "altitude": 1598.489,
        "vario": 2.5662488575
    },
    {
        "time": "2022-07-30T16:06:49.000Z",
        "latitude": 60.8749215,
        "longitude": 11.7165399,
        "altitude": 1600.676,
        "vario": 2.4845426994
    },
    {
        "time": "2022-07-30T16:06:50.000Z",
        "latitude": 60.8749986,
        "longitude": 11.7171886,
        "altitude": 1601.971,
        "vario": 2.3983875036
    },
    {
        "time": "2022-07-30T16:06:51.000Z",
        "latitude": 60.8751422,
        "longitude": 11.7178205,
        "altitude": 1602.93,
        "vario": 2.3143626863
    },
    {
        "time": "2022-07-30T16:06:52.000Z",
        "latitude": 60.8753614,
        "longitude": 11.718397,
        "altitude": 1604.779,
        "vario": 2.2377947273
    },
    {
        "time": "2022-07-30T16:06:53.000Z",
        "latitude": 60.8756456,
        "longitude": 11.7188779,
        "altitude": 1607.958,
        "vario": 2.1729022598
    },
    {
        "time": "2022-07-30T16:06:54.000Z",
        "latitude": 60.8759743,
        "longitude": 11.719238,
        "altitude": 1610.703,
        "vario": 2.1230921675
    },
    {
        "time": "2022-07-30T16:06:55.000Z",
        "latitude": 60.8763318,
        "longitude": 11.719464,
        "altitude": 1613.555,
        "vario": 2.091219907
    },
    {
        "time": "2022-07-30T16:06:56.000Z",
        "latitude": 60.8766982,
        "longitude": 11.7195522,
        "altitude": 1615.813,
        "vario": 2.0796129957
    },
    {
        "time": "2022-07-30T16:06:57.000Z",
        "latitude": 60.8770593,
        "longitude": 11.719516,
        "altitude": 1616.855,
        "vario": 2.0897820034
    },
    {
        "time": "2022-07-30T16:06:58.000Z",
        "latitude": 60.877405,
        "longitude": 11.7193518,
        "altitude": 1617.398,
        "vario": 2.1219305649
    },
    {
        "time": "2022-07-30T16:06:59.000Z",
        "latitude": 60.8777181,
        "longitude": 11.7190571,
        "altitude": 1618.123,
        "vario": 2.1744384933
    },
    {
        "time": "2022-07-30T16:07:00.000Z",
        "latitude": 60.8779812,
        "longitude": 11.7186487,
        "altitude": 1620.19,
        "vario": 2.2435598327
    },
    {
        "time": "2022-07-30T16:07:01.000Z",
        "latitude": 60.8781856,
        "longitude": 11.7181564,
        "altitude": 1622.644,
        "vario": 2.3235402709
    },
    {
        "time": "2022-07-30T16:07:02.000Z",
        "latitude": 60.8783313,
        "longitude": 11.7176124,
        "altitude": 1624.871,
        "vario": 2.4071992457
    },
    {
        "time": "2022-07-30T16:07:03.000Z",
        "latitude": 60.8784144,
        "longitude": 11.7170462,
        "altitude": 1626.994,
        "vario": 2.4869080656
    },
    {
        "time": "2022-07-30T16:07:04.000Z",
        "latitude": 60.8784196,
        "longitude": 11.7165061,
        "altitude": 1629.562,
        "vario": 2.5557627929
    },
    {
        "time": "2022-07-30T16:07:05.000Z",
        "latitude": 60.878357,
        "longitude": 11.716031,
        "altitude": 1633.668,
        "vario": 2.6086899944
    },
    {
        "time": "2022-07-30T16:07:06.000Z",
        "latitude": 60.878237,
        "longitude": 11.7156588,
        "altitude": 1638.018,
        "vario": 2.6431681714
    },
    {
        "time": "2022-07-30T16:07:07.000Z",
        "latitude": 60.8780753,
        "longitude": 11.7154087,
        "altitude": 1642.241,
        "vario": 2.6594049863
    },
    {
        "time": "2022-07-30T16:07:08.000Z",
        "latitude": 60.8778903,
        "longitude": 11.7152738,
        "altitude": 1644.887,
        "vario": 2.6599960119
    },
    {
        "time": "2022-07-30T16:07:09.000Z",
        "latitude": 60.87769,
        "longitude": 11.7152636,
        "altitude": 1646.497,
        "vario": 2.6491193929
    },
    {
        "time": "2022-07-30T16:07:10.000Z",
        "latitude": 60.8774885,
        "longitude": 11.7153842,
        "altitude": 1648.497,
        "vario": 2.6314784191
    },
    {
        "time": "2022-07-30T16:07:11.000Z",
        "latitude": 60.8772995,
        "longitude": 11.715633,
        "altitude": 1650.288,
        "vario": 2.6112652062
    },
    {
        "time": "2022-07-30T16:07:12.000Z",
        "latitude": 60.8771381,
        "longitude": 11.7159997,
        "altitude": 1652.029,
        "vario": 2.5913843689
    },
    {
        "time": "2022-07-30T16:07:13.000Z",
        "latitude": 60.8770239,
        "longitude": 11.7164797,
        "altitude": 1654.85,
        "vario": 2.5730721133
    },
    {
        "time": "2022-07-30T16:07:14.000Z",
        "latitude": 60.8769695,
        "longitude": 11.7170462,
        "altitude": 1658.415,
        "vario": 2.5559012814
    },
    {
        "time": "2022-07-30T16:07:15.000Z",
        "latitude": 60.8769723,
        "longitude": 11.7176625,
        "altitude": 1661.646,
        "vario": 2.5380815189
    },
    {
        "time": "2022-07-30T16:07:16.000Z",
        "latitude": 60.8770341,
        "longitude": 11.7183001,
        "altitude": 1663.667,
        "vario": 2.5170069239
    },
    {
        "time": "2022-07-30T16:07:17.000Z",
        "latitude": 60.8771584,
        "longitude": 11.7189238,
        "altitude": 1665.97,
        "vario": 2.4898664686
    },
    {
        "time": "2022-07-30T16:07:18.000Z",
        "latitude": 60.8773454,
        "longitude": 11.7195055,
        "altitude": 1668.661,
        "vario": 2.454197353
    },
    {
        "time": "2022-07-30T16:07:19.000Z",
        "latitude": 60.8775858,
        "longitude": 11.7200232,
        "altitude": 1670.656,
        "vario": 2.4083892732
    },
    {
        "time": "2022-07-30T16:07:20.000Z",
        "latitude": 60.8778692,
        "longitude": 11.720457,
        "altitude": 1673.195,
        "vario": 2.3520630536
    },
    {
        "time": "2022-07-30T16:07:21.000Z",
        "latitude": 60.8781848,
        "longitude": 11.7207938,
        "altitude": 1676.617,
        "vario": 2.2862792652
    },
    {
        "time": "2022-07-30T16:07:22.000Z",
        "latitude": 60.8785205,
        "longitude": 11.7210308,
        "altitude": 1679.945,
        "vario": 2.2135506229
    },
    {
        "time": "2022-07-30T16:07:23.000Z",
        "latitude": 60.8788647,
        "longitude": 11.7211665,
        "altitude": 1682.418,
        "vario": 2.1376280359
    },
    {
        "time": "2022-07-30T16:07:24.000Z",
        "latitude": 60.8792083,
        "longitude": 11.7212036,
        "altitude": 1683.819,
        "vario": 2.0630338086
    },
    {
        "time": "2022-07-30T16:07:25.000Z",
        "latitude": 60.8795459,
        "longitude": 11.7211339,
        "altitude": 1684.813,
        "vario": 1.9944244806
    },
    {
        "time": "2022-07-30T16:07:26.000Z",
        "latitude": 60.8798649,
        "longitude": 11.7209536,
        "altitude": 1686.841,
        "vario": 1.9359053775
    },
    {
        "time": "2022-07-30T16:07:27.000Z",
        "latitude": 60.8801529,
        "longitude": 11.72068,
        "altitude": 1688.975,
        "vario": 1.8903680017
    },
    {
        "time": "2022-07-30T16:07:28.000Z",
        "latitude": 60.8804077,
        "longitude": 11.7203366,
        "altitude": 1690.607,
        "vario": 1.85904018
    },
    {
        "time": "2022-07-30T16:07:29.000Z",
        "latitude": 60.880629,
        "longitude": 11.7199297,
        "altitude": 1691.215,
        "vario": 1.8414042333
    },
    {
        "time": "2022-07-30T16:07:30.000Z",
        "latitude": 60.8808043,
        "longitude": 11.7194614,
        "altitude": 1691.893,
        "vario": 1.8354989188
    },
    {
        "time": "2022-07-30T16:07:31.000Z",
        "latitude": 60.88092,
        "longitude": 11.7189502,
        "altitude": 1693.283,
        "vario": 1.8385781681
    },
    {
        "time": "2022-07-30T16:07:32.000Z",
        "latitude": 60.8809695,
        "longitude": 11.7184341,
        "altitude": 1695.555,
        "vario": 1.8478905324
    },
    {
        "time": "2022-07-30T16:07:33.000Z",
        "latitude": 60.8809531,
        "longitude": 11.7179551,
        "altitude": 1698.747,
        "vario": 1.8613774396
    },
    {
        "time": "2022-07-30T16:07:34.000Z",
        "latitude": 60.8808806,
        "longitude": 11.7175481,
        "altitude": 1702.292,
        "vario": 1.8781388984
    },
    {
        "time": "2022-07-30T16:07:35.000Z",
        "latitude": 60.8807646,
        "longitude": 11.7172191,
        "altitude": 1704.799,
        "vario": 1.898419219
    },
    {
        "time": "2022-07-30T16:07:36.000Z",
        "latitude": 60.880615,
        "longitude": 11.7169765,
        "altitude": 1705.82,
        "vario": 1.9231283549
    },
    {
        "time": "2022-07-30T16:07:37.000Z",
        "latitude": 60.8804398,
        "longitude": 11.716841,
        "altitude": 1706.564,
        "vario": 1.9530512051
    },
    {
        "time": "2022-07-30T16:07:38.000Z",
        "latitude": 60.8802504,
        "longitude": 11.7168167,
        "altitude": 1707.182,
        "vario": 1.9880208283
    },
    {
        "time": "2022-07-30T16:07:39.000Z",
        "latitude": 60.8800551,
        "longitude": 11.7169082,
        "altitude": 1708.529,
        "vario": 2.0262959041
    },
    {
        "time": "2022-07-30T16:07:40.000Z",
        "latitude": 60.8798671,
        "longitude": 11.7171134,
        "altitude": 1710.467,
        "vario": 2.0642742356
    },
    {
        "time": "2022-07-30T16:07:41.000Z",
        "latitude": 60.8796966,
        "longitude": 11.7174246,
        "altitude": 1713.403,
        "vario": 2.0967507561
    },
    {
        "time": "2022-07-30T16:07:42.000Z",
        "latitude": 60.8795554,
        "longitude": 11.7178263,
        "altitude": 1715.746,
        "vario": 2.1176683642
    },
    {
        "time": "2022-07-30T16:07:43.000Z",
        "latitude": 60.8794537,
        "longitude": 11.7183068,
        "altitude": 1718.1,
        "vario": 2.1211023221
    },
    {
        "time": "2022-07-30T16:07:44.000Z",
        "latitude": 60.8794027,
        "longitude": 11.7188549,
        "altitude": 1721.233,
        "vario": 2.1023521206
    },
    {
        "time": "2022-07-30T16:07:45.000Z",
        "latitude": 60.8794043,
        "longitude": 11.7194505,
        "altitude": 1724.4,
        "vario": 2.058908954
    },
    {
        "time": "2022-07-30T16:07:46.000Z",
        "latitude": 60.8794564,
        "longitude": 11.7200758,
        "altitude": 1727.042,
        "vario": 1.9910278661
    },
    {
        "time": "2022-07-30T16:07:47.000Z",
        "latitude": 60.8795619,
        "longitude": 11.7207046,
        "altitude": 1729.342,
        "vario": 1.9019048506
    },
    {
        "time": "2022-07-30T16:07:48.000Z",
        "latitude": 60.8797234,
        "longitude": 11.7213089,
        "altitude": 1731.494,
        "vario": 1.7973590442
    },
    {
        "time": "2022-07-30T16:07:49.000Z",
        "latitude": 60.8799387,
        "longitude": 11.7218634,
        "altitude": 1733.179,
        "vario": 1.6851015277
    },
    {
        "time": "2022-07-30T16:07:50.000Z",
        "latitude": 60.8802067,
        "longitude": 11.7223372,
        "altitude": 1734.747,
        "vario": 1.5737983877
    },
    {
        "time": "2022-07-30T16:07:51.000Z",
        "latitude": 60.880517,
        "longitude": 11.7227034,
        "altitude": 1736.112,
        "vario": 1.4720241682
    },
    {
        "time": "2022-07-30T16:07:52.000Z",
        "latitude": 60.8808565,
        "longitude": 11.722944,
        "altitude": 1737.204,
        "vario": 1.3872200537
    },
    {
        "time": "2022-07-30T16:07:53.000Z",
        "latitude": 60.8812133,
        "longitude": 11.7230454,
        "altitude": 1737.657,
        "vario": 1.3248168241
    },
    {
        "time": "2022-07-30T16:07:54.000Z",
        "latitude": 60.8815711,
        "longitude": 11.7230092,
        "altitude": 1737.539,
        "vario": 1.2876554363
    },
    {
        "time": "2022-07-30T16:07:55.000Z",
        "latitude": 60.8819121,
        "longitude": 11.7228292,
        "altitude": 1738.168,
        "vario": 1.2757802077
    },
    {
        "time": "2022-07-30T16:07:56.000Z",
        "latitude": 60.8822199,
        "longitude": 11.7225271,
        "altitude": 1739.137,
        "vario": 1.286656006
    },
    {
        "time": "2022-07-30T16:07:57.000Z",
        "latitude": 60.8824784,
        "longitude": 11.7221272,
        "altitude": 1740.788,
        "vario": 1.315785857
    },
    {
        "time": "2022-07-30T16:07:58.000Z",
        "latitude": 60.8826842,
        "longitude": 11.7216489,
        "altitude": 1741.907,
        "vario": 1.3576551597
    },
    {
        "time": "2022-07-30T16:07:59.000Z",
        "latitude": 60.8828325,
        "longitude": 11.7211137,
        "altitude": 1742.841,
        "vario": 1.4068344241
    },
    {
        "time": "2022-07-30T16:08:00.000Z",
        "latitude": 60.8829091,
        "longitude": 11.7205515,
        "altitude": 1743.96,
        "vario": 1.4590037861
    },
    {
        "time": "2022-07-30T16:08:01.000Z",
        "latitude": 60.8829078,
        "longitude": 11.7200135,
        "altitude": 1746.06,
        "vario": 1.5116408068
    },
    {
        "time": "2022-07-30T16:08:02.000Z",
        "latitude": 60.8828356,
        "longitude": 11.7195512,
        "altitude": 1748.873,
        "vario": 1.5642408973
    },
    {
        "time": "2022-07-30T16:08:03.000Z",
        "latitude": 60.8827037,
        "longitude": 11.7192059,
        "altitude": 1752.59,
        "vario": 1.6179374687
    },
    {
        "time": "2022-07-30T16:08:04.000Z",
        "latitude": 60.8825263,
        "longitude": 11.7189987,
        "altitude": 1754.406,
        "vario": 1.6745795864
    },
    {
        "time": "2022-07-30T16:08:05.000Z",
        "latitude": 60.8823199,
        "longitude": 11.7189496,
        "altitude": 1754.625,
        "vario": 1.7355084014
    },
    {
        "time": "2022-07-30T16:08:06.000Z",
        "latitude": 60.8821069,
        "longitude": 11.7190943,
        "altitude": 1754.219,
        "vario": 1.8003062617
    },
    {
        "time": "2022-07-30T16:08:07.000Z",
        "latitude": 60.8819193,
        "longitude": 11.719435,
        "altitude": 1753.874,
        "vario": 1.8659205309
    },
    {
        "time": "2022-07-30T16:08:08.000Z",
        "latitude": 60.881798,
        "longitude": 11.7199437,
        "altitude": 1755.367,
        "vario": 1.9264525755
    },
    {
        "time": "2022-07-30T16:08:09.000Z",
        "latitude": 60.8817571,
        "longitude": 11.7205698,
        "altitude": 1758.51,
        "vario": 1.973719015
    },
    {
        "time": "2022-07-30T16:08:10.000Z",
        "latitude": 60.8817919,
        "longitude": 11.7212488,
        "altitude": 1761.905,
        "vario": 1.9984758656
    },
    {
        "time": "2022-07-30T16:08:11.000Z",
        "latitude": 60.8818976,
        "longitude": 11.7219286,
        "altitude": 1765.251,
        "vario": 1.9920808202
    },
    {
        "time": "2022-07-30T16:08:12.000Z",
        "latitude": 60.8820679,
        "longitude": 11.7225744,
        "altitude": 1768.618,
        "vario": 1.9482548547
    },
    {
        "time": "2022-07-30T16:08:13.000Z",
        "latitude": 60.8822927,
        "longitude": 11.7231544,
        "altitude": 1771.38,
        "vario": 1.8645855228
    },
    {
        "time": "2022-07-30T16:08:14.000Z",
        "latitude": 60.8825681,
        "longitude": 11.7236555,
        "altitude": 1773.934,
        "vario": 1.7435507732
    },
    {
        "time": "2022-07-30T16:08:15.000Z",
        "latitude": 60.8828836,
        "longitude": 11.724061,
        "altitude": 1776.147,
        "vario": 1.5928113906
    },
    {
        "time": "2022-07-30T16:08:16.000Z",
        "latitude": 60.8832279,
        "longitude": 11.7243447,
        "altitude": 1777.918,
        "vario": 1.4247083209
    },
    {
        "time": "2022-07-30T16:08:17.000Z",
        "latitude": 60.8835896,
        "longitude": 11.7244872,
        "altitude": 1779.57,
        "vario": 1.2550219015
    },
    {
        "time": "2022-07-30T16:08:18.000Z",
        "latitude": 60.8839551,
        "longitude": 11.7244913,
        "altitude": 1781.274,
        "vario": 1.1010915784
    },
    {
        "time": "2022-07-30T16:08:19.000Z",
        "latitude": 60.8843033,
        "longitude": 11.7243613,
        "altitude": 1781.807,
        "vario": 0.9795282478
    },
    {
        "time": "2022-07-30T16:08:20.000Z",
        "latitude": 60.8846221,
        "longitude": 11.7240968,
        "altitude": 1781.693,
        "vario": 0.9038498543
    },
    {
        "time": "2022-07-30T16:08:21.000Z",
        "latitude": 60.8848984,
        "longitude": 11.7237115,
        "altitude": 1781.018,
        "vario": 0.8824611056
    },
    {
        "time": "2022-07-30T16:08:22.000Z",
        "latitude": 60.8851225,
        "longitude": 11.7232303,
        "altitude": 1779.095,
        "vario": 0.9173615164
    },
    {
        "time": "2022-07-30T16:08:23.000Z",
        "latitude": 60.8852858,
        "longitude": 11.7226846,
        "altitude": 1776.539,
        "vario": 1.0038940402
    },
    {
        "time": "2022-07-30T16:08:24.000Z",
        "latitude": 60.885379,
        "longitude": 11.7220984,
        "altitude": 1774.958,
        "vario": 1.1316664937
    },
    {
        "time": "2022-07-30T16:08:25.000Z",
        "latitude": 60.8853931,
        "longitude": 11.7215148,
        "altitude": 1776.213,
        "vario": 1.2864683428
    },
    {
        "time": "2022-07-30T16:08:26.000Z",
        "latitude": 60.8853305,
        "longitude": 11.7209944,
        "altitude": 1779.977,
        "vario": 1.4527774409
    },
    {
        "time": "2022-07-30T16:08:27.000Z",
        "latitude": 60.8852116,
        "longitude": 11.7205716,
        "altitude": 1784.955,
        "vario": 1.6162672766
    },
    {
        "time": "2022-07-30T16:08:28.000Z",
        "latitude": 60.885054,
        "longitude": 11.7202577,
        "altitude": 1789.397,
        "vario": 1.7657135144
    },
    {
        "time": "2022-07-30T16:08:29.000Z",
        "latitude": 60.8848715,
        "longitude": 11.7200447,
        "altitude": 1792.033,
        "vario": 1.8939211845
    },
    {
        "time": "2022-07-30T16:08:30.000Z",
        "latitude": 60.8846802,
        "longitude": 11.719922,
        "altitude": 1793.111,
        "vario": 1.9975390443
    },
    {
        "time": "2022-07-30T16:08:31.000Z",
        "latitude": 60.8844867,
        "longitude": 11.7198753,
        "altitude": 1793.695,
        "vario": 2.0759939257
    },
    {
        "time": "2022-07-30T16:08:32.000Z",
        "latitude": 60.8842897,
        "longitude": 11.7198997,
        "altitude": 1794.967,
        "vario": 2.1300384219
    },
    {
        "time": "2022-07-30T16:08:33.000Z",
        "latitude": 60.8840893,
        "longitude": 11.7200024,
        "altitude": 1797.039,
        "vario": 2.1604492412
    },
    {
        "time": "2022-07-30T16:08:34.000Z",
        "latitude": 60.8838918,
        "longitude": 11.7201926,
        "altitude": 1798.635,
        "vario": 2.1672614108
    },
    {
        "time": "2022-07-30T16:08:35.000Z",
        "latitude": 60.8837138,
        "longitude": 11.7204861,
        "altitude": 1801.196,
        "vario": 2.1496970575
    },
    {
        "time": "2022-07-30T16:08:36.000Z",
        "latitude": 60.8835669,
        "longitude": 11.7208715,
        "altitude": 1804.752,
        "vario": 2.1067659383
    },
    {
        "time": "2022-07-30T16:08:37.000Z",
        "latitude": 60.8834554,
        "longitude": 11.7213365,
        "altitude": 1808.404,
        "vario": 2.0381933076
    },
    {
        "time": "2022-07-30T16:08:38.000Z",
        "latitude": 60.8833803,
        "longitude": 11.7218725,
        "altitude": 1811.801,
        "vario": 1.9452649603
    },
    {
        "time": "2022-07-30T16:08:39.000Z",
        "latitude": 60.8833446,
        "longitude": 11.722455,
        "altitude": 1814.323,
        "vario": 1.8313667316
    },
    {
        "time": "2022-07-30T16:08:40.000Z",
        "latitude": 60.8833581,
        "longitude": 11.7230692,
        "altitude": 1816.084,
        "vario": 1.7019513316
    },
    {
        "time": "2022-07-30T16:08:41.000Z",
        "latitude": 60.8834224,
        "longitude": 11.7237012,
        "altitude": 1817.092,
        "vario": 1.5639790597
    },
    {
        "time": "2022-07-30T16:08:42.000Z",
        "latitude": 60.8835413,
        "longitude": 11.7243352,
        "altitude": 1817.914,
        "vario": 1.4250700326
    },
    {
        "time": "2022-07-30T16:08:43.000Z",
        "latitude": 60.883712,
        "longitude": 11.7249467,
        "altitude": 1818.737,
        "vario": 1.2925384541
    },
    {
        "time": "2022-07-30T16:08:44.000Z",
        "latitude": 60.8839313,
        "longitude": 11.7255123,
        "altitude": 1819.804,
        "vario": 1.1726049548
    },
    {
        "time": "2022-07-30T16:08:45.000Z",
        "latitude": 60.8841999,
        "longitude": 11.7260201,
        "altitude": 1820.161,
        "vario": 1.0699410506
    },
    {
        "time": "2022-07-30T16:08:46.000Z",
        "latitude": 60.8845217,
        "longitude": 11.7264256,
        "altitude": 1820.686,
        "vario": 0.9875747381
    },
    {
        "time": "2022-07-30T16:08:47.000Z",
        "latitude": 60.8848808,
        "longitude": 11.7266761,
        "altitude": 1821.914,
        "vario": 0.9270721878
    },
    {
        "time": "2022-07-30T16:08:48.000Z",
        "latitude": 60.8852512,
        "longitude": 11.7267706,
        "altitude": 1822.753,
        "vario": 0.8888388233
    },
    {
        "time": "2022-07-30T16:08:49.000Z",
        "latitude": 60.8856173,
        "longitude": 11.7267069,
        "altitude": 1823.586,
        "vario": 0.8725142359
    },
    {
        "time": "2022-07-30T16:08:50.000Z",
        "latitude": 60.885959,
        "longitude": 11.7264933,
        "altitude": 1824.168,
        "vario": 0.8773524321
    },
    {
        "time": "2022-07-30T16:08:51.000Z",
        "latitude": 60.8862611,
        "longitude": 11.7261541,
        "altitude": 1824.46,
        "vario": 0.9024658403
    },
    {
        "time": "2022-07-30T16:08:52.000Z",
        "latitude": 60.8865064,
        "longitude": 11.7257107,
        "altitude": 1824.867,
        "vario": 0.94696233
    },
    {
        "time": "2022-07-30T16:08:53.000Z",
        "latitude": 60.8866937,
        "longitude": 11.7251975,
        "altitude": 1825.39,
        "vario": 1.0099944389
    },
    {
        "time": "2022-07-30T16:08:54.000Z",
        "latitude": 60.8868221,
        "longitude": 11.724642,
        "altitude": 1826.139,
        "vario": 1.0907267353
    },
    {
        "time": "2022-07-30T16:08:55.000Z",
        "latitude": 60.8868879,
        "longitude": 11.7240681,
        "altitude": 1827.939,
        "vario": 1.1881723149
    },
    {
        "time": "2022-07-30T16:08:56.000Z",
        "latitude": 60.886891,
        "longitude": 11.7235139,
        "altitude": 1829.043,
        "vario": 1.3009661084
    },
    {
        "time": "2022-07-30T16:08:57.000Z",
        "latitude": 60.8868348,
        "longitude": 11.7230157,
        "altitude": 1830.347,
        "vario": 1.4270857506
    },
    {
        "time": "2022-07-30T16:08:58.000Z",
        "latitude": 60.8867227,
        "longitude": 11.7225997,
        "altitude": 1831.832,
        "vario": 1.5635130121
    },
    {
        "time": "2022-07-30T16:08:59.000Z",
        "latitude": 60.8865652,
        "longitude": 11.7222855,
        "altitude": 1832.42,
        "vario": 1.7059455872
    },
    {
        "time": "2022-07-30T16:09:00.000Z",
        "latitude": 60.8863782,
        "longitude": 11.7220851,
        "altitude": 1833.361,
        "vario": 1.8486495768
    },
    {
        "time": "2022-07-30T16:09:01.000Z",
        "latitude": 60.8861737,
        "longitude": 11.721997,
        "altitude": 1835.175,
        "vario": 1.9846022296
    },
    {
        "time": "2022-07-30T16:09:02.000Z",
        "latitude": 60.885964,
        "longitude": 11.7220204,
        "altitude": 1837.735,
        "vario": 2.1059640886
    },
    {
        "time": "2022-07-30T16:09:03.000Z",
        "latitude": 60.8857642,
        "longitude": 11.7221517,
        "altitude": 1840.79,
        "vario": 2.2048446906
    },
    {
        "time": "2022-07-30T16:09:04.000Z",
        "latitude": 60.8855808,
        "longitude": 11.7223883,
        "altitude": 1843.665,
        "vario": 2.2743034956
    },
    {
        "time": "2022-07-30T16:09:05.000Z",
        "latitude": 60.8854172,
        "longitude": 11.7227214,
        "altitude": 1846.541,
        "vario": 2.3094285506
    },
    {
        "time": "2022-07-30T16:09:06.000Z",
        "latitude": 60.8852815,
        "longitude": 11.7231349,
        "altitude": 1849.294,
        "vario": 2.3082227444
    },
    {
        "time": "2022-07-30T16:09:07.000Z",
        "latitude": 60.8851744,
        "longitude": 11.7236002,
        "altitude": 1852.651,
        "vario": 2.2721578745
    },
    {
        "time": "2022-07-30T16:09:08.000Z",
        "latitude": 60.8850954,
        "longitude": 11.7241138,
        "altitude": 1857.049,
        "vario": 2.2062520445
    },
    {
        "time": "2022-07-30T16:09:09.000Z",
        "latitude": 60.8850487,
        "longitude": 11.72468,
        "altitude": 1860.233,
        "vario": 2.118490373
    },
    {
        "time": "2022-07-30T16:09:10.000Z",
        "latitude": 60.8850555,
        "longitude": 11.7252955,
        "altitude": 1861.759,
        "vario": 2.0187023692
    },
    {
        "time": "2022-07-30T16:09:11.000Z",
        "latitude": 60.8851313,
        "longitude": 11.7259342,
        "altitude": 1862.901,
        "vario": 1.9171109483
    },
    {
        "time": "2022-07-30T16:09:12.000Z",
        "latitude": 60.8852786,
        "longitude": 11.7265527,
        "altitude": 1863.939,
        "vario": 1.8228101775
    },
    {
        "time": "2022-07-30T16:09:13.000Z",
        "latitude": 60.8854941,
        "longitude": 11.7271121,
        "altitude": 1864.874,
        "vario": 1.7424688132
    },
    {
        "time": "2022-07-30T16:09:14.000Z",
        "latitude": 60.8857708,
        "longitude": 11.7275778,
        "altitude": 1865.307,
        "vario": 1.6795318856
    },
    {
        "time": "2022-07-30T16:09:15.000Z",
        "latitude": 60.8860921,
        "longitude": 11.7279166,
        "altitude": 1866.167,
        "vario": 1.6341302593
    },
    {
        "time": "2022-07-30T16:09:16.000Z",
        "latitude": 60.8864401,
        "longitude": 11.7281133,
        "altitude": 1867.552,
        "vario": 1.6037317735
    },
    {
        "time": "2022-07-30T16:09:17.000Z",
        "latitude": 60.886795,
        "longitude": 11.7281623,
        "altitude": 1869.356,
        "vario": 1.5843266207
    },
    {
        "time": "2022-07-30T16:09:18.000Z",
        "latitude": 60.8871364,
        "longitude": 11.7280652,
        "altitude": 1870.896,
        "vario": 1.5719090089
    },
    {
        "time": "2022-07-30T16:09:19.000Z",
        "latitude": 60.8874453,
        "longitude": 11.7278299,
        "altitude": 1873.356,
        "vario": 1.5639115894
    },
    {
        "time": "2022-07-30T16:09:20.000Z",
        "latitude": 60.8877055,
        "longitude": 11.7274819,
        "altitude": 1876.28,
        "vario": 1.5601246445
    },
    {
        "time": "2022-07-30T16:09:21.000Z",
        "latitude": 60.8879178,
        "longitude": 11.7270548,
        "altitude": 1878.746,
        "vario": 1.5629011462
    },
    {
        "time": "2022-07-30T16:09:22.000Z",
        "latitude": 60.8880735,
        "longitude": 11.7265697,
        "altitude": 1880.27,
        "vario": 1.576558957
    },
    {
        "time": "2022-07-30T16:09:23.000Z",
        "latitude": 60.8881649,
        "longitude": 11.7260559,
        "altitude": 1881.434,
        "vario": 1.6060305881
    },
    {
        "time": "2022-07-30T16:09:24.000Z",
        "latitude": 60.8881935,
        "longitude": 11.7255482,
        "altitude": 1881.801,
        "vario": 1.6551394888
    },
    {
        "time": "2022-07-30T16:09:25.000Z",
        "latitude": 60.888164,
        "longitude": 11.725076,
        "altitude": 1881.923,
        "vario": 1.7249221947
    },
    {
        "time": "2022-07-30T16:09:26.000Z",
        "latitude": 60.8880797,
        "longitude": 11.7246662,
        "altitude": 1882.467,
        "vario": 1.8124652664
    },
    {
        "time": "2022-07-30T16:09:27.000Z",
        "latitude": 60.8879521,
        "longitude": 11.7243352,
        "altitude": 1883.035,
        "vario": 1.9106568722
    },
    {
        "time": "2022-07-30T16:09:28.000Z",
        "latitude": 60.8877871,
        "longitude": 11.7241079,
        "altitude": 1883.818,
        "vario": 2.008952172
    },
    {
        "time": "2022-07-30T16:09:29.000Z",
        "latitude": 60.8875929,
        "longitude": 11.7240157,
        "altitude": 1886.017,
        "vario": 2.0950737689
    },
    {
        "time": "2022-07-30T16:09:30.000Z",
        "latitude": 60.8873886,
        "longitude": 11.7240728,
        "altitude": 1890.218,
        "vario": 2.1572352964
    },
    {
        "time": "2022-07-30T16:09:31.000Z",
        "latitude": 60.8871871,
        "longitude": 11.7242712,
        "altitude": 1895.188,
        "vario": 2.1864190985
    },
    {
        "time": "2022-07-30T16:09:32.000Z",
        "latitude": 60.8870033,
        "longitude": 11.7245938,
        "altitude": 1899.428,
        "vario": 2.1782038511
    },
    {
        "time": "2022-07-30T16:09:33.000Z",
        "latitude": 60.8868592,
        "longitude": 11.7250298,
        "altitude": 1903.119,
        "vario": 2.1336553335
    },
    {
        "time": "2022-07-30T16:09:34.000Z",
        "latitude": 60.8867676,
        "longitude": 11.7255575,
        "altitude": 1905.849,
        "vario": 2.0590852389
    },
    {
        "time": "2022-07-30T16:09:35.000Z",
        "latitude": 60.8867292,
        "longitude": 11.726147,
        "altitude": 1907.48,
        "vario": 1.9647567592
    },
    {
        "time": "2022-07-30T16:09:36.000Z",
        "latitude": 60.8867549,
        "longitude": 11.7267793,
        "altitude": 1908.471,
        "vario": 1.8628523918
    },
    {
        "time": "2022-07-30T16:09:37.000Z",
        "latitude": 60.8868478,
        "longitude": 11.7274218,
        "altitude": 1909.257,
        "vario": 1.7651666323
    },
    {
        "time": "2022-07-30T16:09:38.000Z",
        "latitude": 60.8870068,
        "longitude": 11.728054,
        "altitude": 1910.096,
        "vario": 1.6810359684
    },
    {
        "time": "2022-07-30T16:09:39.000Z",
        "latitude": 60.887223,
        "longitude": 11.7286434,
        "altitude": 1910.729,
        "vario": 1.6158442363
    },
    {
        "time": "2022-07-30T16:09:40.000Z",
        "latitude": 60.8874892,
        "longitude": 11.7291493,
        "altitude": 1911.348,
        "vario": 1.5704373107
    },
    {
        "time": "2022-07-30T16:09:41.000Z",
        "latitude": 60.887795,
        "longitude": 11.7295644,
        "altitude": 1912.333,
        "vario": 1.5415130941
    },
    {
        "time": "2022-07-30T16:09:42.000Z",
        "latitude": 60.8881283,
        "longitude": 11.7298841,
        "altitude": 1913.559,
        "vario": 1.5227386629
    },
    {
        "time": "2022-07-30T16:09:43.000Z",
        "latitude": 60.8884788,
        "longitude": 11.7300949,
        "altitude": 1915.487,
        "vario": 1.5064337964
    },
    {
        "time": "2022-07-30T16:09:44.000Z",
        "latitude": 60.8888341,
        "longitude": 11.730198,
        "altitude": 1917.54,
        "vario": 1.4854078322
    },
    {
        "time": "2022-07-30T16:09:45.000Z",
        "latitude": 60.8891852,
        "longitude": 11.730187,
        "altitude": 1920.376,
        "vario": 1.4544674434
    },
    {
        "time": "2022-07-30T16:09:46.000Z",
        "latitude": 60.8895203,
        "longitude": 11.7300709,
        "altitude": 1923.262,
        "vario": 1.4114923871
    },
    {
        "time": "2022-07-30T16:09:47.000Z",
        "latitude": 60.8898361,
        "longitude": 11.7298608,
        "altitude": 1925.319,
        "vario": 1.3578432869
    },
    {
        "time": "2022-07-30T16:09:48.000Z",
        "latitude": 60.8901289,
        "longitude": 11.7295611,
        "altitude": 1926.847,
        "vario": 1.298006817
    },
    {
        "time": "2022-07-30T16:09:49.000Z",
        "latitude": 60.8903861,
        "longitude": 11.7291744,
        "altitude": 1927.639,
        "vario": 1.2387776634
    },
    {
        "time": "2022-07-30T16:09:50.000Z",
        "latitude": 60.8906036,
        "longitude": 11.7287187,
        "altitude": 1927.943,
        "vario": 1.1881874937
    },
    {
        "time": "2022-07-30T16:09:51.000Z",
        "latitude": 60.8907717,
        "longitude": 11.7282141,
        "altitude": 1927.751,
        "vario": 1.1543922192
    },
    {
        "time": "2022-07-30T16:09:52.000Z",
        "latitude": 60.8908863,
        "longitude": 11.7276736,
        "altitude": 1928.135,
        "vario": 1.1446473016
    },
    {
        "time": "2022-07-30T16:09:53.000Z",
        "latitude": 60.8909395,
        "longitude": 11.7271206,
        "altitude": 1928.769,
        "vario": 1.1644588277
    },
    {
        "time": "2022-07-30T16:09:54.000Z",
        "latitude": 60.8909358,
        "longitude": 11.7265832,
        "altitude": 1930.088,
        "vario": 1.2169882514
    },
    {
        "time": "2022-07-30T16:09:55.000Z",
        "latitude": 60.890877,
        "longitude": 11.7260987,
        "altitude": 1931.589,
        "vario": 1.3025454688
    },
    {
        "time": "2022-07-30T16:09:56.000Z",
        "latitude": 60.890771,
        "longitude": 11.725688,
        "altitude": 1933.509,
        "vario": 1.4181117613
    },
    {
        "time": "2022-07-30T16:09:57.000Z",
        "latitude": 60.8906279,
        "longitude": 11.7253583,
        "altitude": 1934.25,
        "vario": 1.5570451181
    },
    {
        "time": "2022-07-30T16:09:58.000Z",
        "latitude": 60.8904556,
        "longitude": 11.725113,
        "altitude": 1933.626,
        "vario": 1.709106605
    },
    {
        "time": "2022-07-30T16:09:59.000Z",
        "latitude": 60.8902623,
        "longitude": 11.7249718,
        "altitude": 1933.678,
        "vario": 1.8610144015
    },
    {
        "time": "2022-07-30T16:10:00.000Z",
        "latitude": 60.8900574,
        "longitude": 11.7249526,
        "altitude": 1934.812,
        "vario": 1.9976738465
    },
    {
        "time": "2022-07-30T16:10:01.000Z",
        "latitude": 60.8898535,
        "longitude": 11.725047,
        "altitude": 1937.409,
        "vario": 2.1040690977
    },
    {
        "time": "2022-07-30T16:10:02.000Z",
        "latitude": 60.8896589,
        "longitude": 11.7252393,
        "altitude": 1941.993,
        "vario": 2.1675716251
    },
    {
        "time": "2022-07-30T16:10:03.000Z",
        "latitude": 60.8894826,
        "longitude": 11.7254935,
        "altitude": 1946.451,
        "vario": 2.1801756468
    },
    {
        "time": "2022-07-30T16:10:04.000Z",
        "latitude": 60.8893226,
        "longitude": 11.7257889,
        "altitude": 1951.792,
        "vario": 2.1401062433
    },
    {
        "time": "2022-07-30T16:10:05.000Z",
        "latitude": 60.8891763,
        "longitude": 11.7261402,
        "altitude": 1957.452,
        "vario": 2.0523781388
    },
    {
        "time": "2022-07-30T16:10:06.000Z",
        "latitude": 60.8890496,
        "longitude": 11.7265567,
        "altitude": 1959.92,
        "vario": 1.9280519812
    },
    {
        "time": "2022-07-30T16:10:07.000Z",
        "latitude": 60.8889656,
        "longitude": 11.7270587,
        "altitude": 1960.988,
        "vario": 1.7822479798
    },
    {
        "time": "2022-07-30T16:10:08.000Z",
        "latitude": 60.8889469,
        "longitude": 11.7276423,
        "altitude": 1961.292,
        "vario": 1.6313952174
    },
    {
        "time": "2022-07-30T16:10:09.000Z",
        "latitude": 60.8889974,
        "longitude": 11.728269,
        "altitude": 1960.593,
        "vario": 1.4903472582
    },
    {
        "time": "2022-07-30T16:10:10.000Z",
        "latitude": 60.8891243,
        "longitude": 11.7288967,
        "altitude": 1959.611,
        "vario": 1.3699660052
    },
    {
        "time": "2022-07-30T16:10:11.000Z",
        "latitude": 60.8893272,
        "longitude": 11.7294772,
        "altitude": 1959.081,
        "vario": 1.2756877973
    },
    {
        "time": "2022-07-30T16:10:12.000Z",
        "latitude": 60.8895937,
        "longitude": 11.7299687,
        "altitude": 1960.313,
        "vario": 1.2073306159
    },
    {
        "time": "2022-07-30T16:10:13.000Z",
        "latitude": 60.8899044,
        "longitude": 11.7303538,
        "altitude": 1962.6,
        "vario": 1.1600504685
    },
    {
        "time": "2022-07-30T16:10:14.000Z",
        "latitude": 60.8902399,
        "longitude": 11.7306352,
        "altitude": 1964.248,
        "vario": 1.1260114957
    },
    {
        "time": "2022-07-30T16:10:15.000Z",
        "latitude": 60.890589,
        "longitude": 11.7308005,
        "altitude": 1965.729,
        "vario": 1.0964202357
    },
    {
        "time": "2022-07-30T16:10:16.000Z",
        "latitude": 60.8909407,
        "longitude": 11.7308536,
        "altitude": 1967.193,
        "vario": 1.0634924827
    },
    {
        "time": "2022-07-30T16:10:17.000Z",
        "latitude": 60.8912843,
        "longitude": 11.7308111,
        "altitude": 1968.631,
        "vario": 1.021903272
    },
    {
        "time": "2022-07-30T16:10:18.000Z",
        "latitude": 60.891612,
        "longitude": 11.7306777,
        "altitude": 1970.124,
        "vario": 0.9695781337
    },
    {
        "time": "2022-07-30T16:10:19.000Z",
        "latitude": 60.8919181,
        "longitude": 11.7304591,
        "altitude": 1971.622,
        "vario": 0.9078369892
    },
    {
        "time": "2022-07-30T16:10:20.000Z",
        "latitude": 60.8921979,
        "longitude": 11.7301628,
        "altitude": 1972.906,
        "vario": 0.8410815391
    },
    {
        "time": "2022-07-30T16:10:21.000Z",
        "latitude": 60.8924413,
        "longitude": 11.7297924,
        "altitude": 1973.661,
        "vario": 0.7761152346
    },
    {
        "time": "2022-07-30T16:10:22.000Z",
        "latitude": 60.8926419,
        "longitude": 11.7293585,
        "altitude": 1973.756,
        "vario": 0.7212492695
    },
    {
        "time": "2022-07-30T16:10:23.000Z",
        "latitude": 60.8927858,
        "longitude": 11.7288733,
        "altitude": 1973.653,
        "vario": 0.6854277505
    },
    {
        "time": "2022-07-30T16:10:24.000Z",
        "latitude": 60.892873,
        "longitude": 11.7283641,
        "altitude": 1974.073,
        "vario": 0.6773798093
    },
    {
        "time": "2022-07-30T16:10:25.000Z",
        "latitude": 60.8929096,
        "longitude": 11.7278579,
        "altitude": 1973.828,
        "vario": 0.7047870668
    },
    {
        "time": "2022-07-30T16:10:26.000Z",
        "latitude": 60.8928936,
        "longitude": 11.7273766,
        "altitude": 1974.214,
        "vario": 0.7734957576
    },
    {
        "time": "2022-07-30T16:10:27.000Z",
        "latitude": 60.8928295,
        "longitude": 11.7269423,
        "altitude": 1975.081,
        "vario": 0.8866797942
    },
    {
        "time": "2022-07-30T16:10:28.000Z",
        "latitude": 60.8927261,
        "longitude": 11.7265702,
        "altitude": 1975.256,
        "vario": 1.044105804
    },
    {
        "time": "2022-07-30T16:10:29.000Z",
        "latitude": 60.8925883,
        "longitude": 11.7262745,
        "altitude": 1975.105,
        "vario": 1.2416127065
    },
    {
        "time": "2022-07-30T16:10:30.000Z",
        "latitude": 60.8924261,
        "longitude": 11.7260659,
        "altitude": 1975.102,
        "vario": 1.4708754803
    },
    {
        "time": "2022-07-30T16:10:31.000Z",
        "latitude": 60.8922443,
        "longitude": 11.7259497,
        "altitude": 1975.535,
        "vario": 1.7197231626
    },
    {
        "time": "2022-07-30T16:10:32.000Z",
        "latitude": 60.8920522,
        "longitude": 11.725916,
        "altitude": 1975.916,
        "vario": 1.9731092484
    },
    {
        "time": "2022-07-30T16:10:33.000Z",
        "latitude": 60.8918606,
        "longitude": 11.7259451,
        "altitude": 1977.623,
        "vario": 2.2146654339
    },
    {
        "time": "2022-07-30T16:10:34.000Z",
        "latitude": 60.8916726,
        "longitude": 11.7260111,
        "altitude": 1982.376,
        "vario": 2.4286225914
    },
    {
        "time": "2022-07-30T16:10:35.000Z",
        "latitude": 60.8914875,
        "longitude": 11.7260908,
        "altitude": 1987.569,
        "vario": 2.6017734648
    },
    {
        "time": "2022-07-30T16:10:36.000Z",
        "latitude": 60.891304,
        "longitude": 11.726177,
        "altitude": 1992.078,
        "vario": 2.7251364937
    },
    {
        "time": "2022-07-30T16:10:37.000Z",
        "latitude": 60.891124,
        "longitude": 11.7262724,
        "altitude": 1996.405,
        "vario": 2.7949599162
    },
    {
        "time": "2022-07-30T16:10:38.000Z",
        "latitude": 60.8909439,
        "longitude": 11.7263862,
        "altitude": 2000.396,
        "vario": 2.8128397269
    },
    {
        "time": "2022-07-30T16:10:39.000Z",
        "latitude": 60.8907597,
        "longitude": 11.7265431,
        "altitude": 2003.802,
        "vario": 2.7849631866
    },
    {
        "time": "2022-07-30T16:10:40.000Z",
        "latitude": 60.890581,
        "longitude": 11.7267882,
        "altitude": 2006.196,
        "vario": 2.7206830925
    },
    {
        "time": "2022-07-30T16:10:41.000Z",
        "latitude": 60.8904259,
        "longitude": 11.7271479,
        "altitude": 2008.324,
        "vario": 2.6308224898
    },
    {
        "time": "2022-07-30T16:10:42.000Z",
        "latitude": 60.8903173,
        "longitude": 11.7276154,
        "altitude": 2010.733,
        "vario": 2.5260559901
    },
    {
        "time": "2022-07-30T16:10:43.000Z",
        "latitude": 60.8902642,
        "longitude": 11.7281603,
        "altitude": 2012.816,
        "vario": 2.4156467099
    },
    {
        "time": "2022-07-30T16:10:44.000Z",
        "latitude": 60.8902735,
        "longitude": 11.7287476,
        "altitude": 2014.056,
        "vario": 2.3067250211
    },
    {
        "time": "2022-07-30T16:10:45.000Z",
        "latitude": 60.8903521,
        "longitude": 11.7293536,
        "altitude": 2016.372,
        "vario": 2.2041713975
    },
    {
        "time": "2022-07-30T16:10:46.000Z",
        "latitude": 60.8904902,
        "longitude": 11.7299396,
        "altitude": 2018.947,
        "vario": 2.1109386509
    },
    {
        "time": "2022-07-30T16:10:47.000Z",
        "latitude": 60.890683,
        "longitude": 11.7304812,
        "altitude": 2021.226,
        "vario": 2.0285979595
    },
    {
        "time": "2022-07-30T16:10:48.000Z",
        "latitude": 60.8909234,
        "longitude": 11.7309584,
        "altitude": 2023.267,
        "vario": 1.9579343789
    },
    {
        "time": "2022-07-30T16:10:49.000Z",
        "latitude": 60.8912004,
        "longitude": 11.731359,
        "altitude": 2025.287,
        "vario": 1.8993725664
    },
    {
        "time": "2022-07-30T16:10:50.000Z",
        "latitude": 60.891508,
        "longitude": 11.7316693,
        "altitude": 2027.017,
        "vario": 1.8531699098
    },
    {
        "time": "2022-07-30T16:10:51.000Z",
        "latitude": 60.8918367,
        "longitude": 11.7318779,
        "altitude": 2028.391,
        "vario": 1.8194019707
    },
    {
        "time": "2022-07-30T16:10:52.000Z",
        "latitude": 60.8921742,
        "longitude": 11.7319694,
        "altitude": 2029.18,
        "vario": 1.7978305873
    },
    {
        "time": "2022-07-30T16:10:53.000Z",
        "latitude": 60.8925072,
        "longitude": 11.7319265,
        "altitude": 2030.595,
        "vario": 1.7877244617
    },
    {
        "time": "2022-07-30T16:10:54.000Z",
        "latitude": 60.8928257,
        "longitude": 11.7317596,
        "altitude": 2032.61,
        "vario": 1.7877318881
    },
    {
        "time": "2022-07-30T16:10:55.000Z",
        "latitude": 60.8931165,
        "longitude": 11.7314793,
        "altitude": 2034.773,
        "vario": 1.7959395637
    },
    {
        "time": "2022-07-30T16:10:56.000Z",
        "latitude": 60.8933646,
        "longitude": 11.7311029,
        "altitude": 2036.671,
        "vario": 1.8100081661
    },
    {
        "time": "2022-07-30T16:10:57.000Z",
        "latitude": 60.8935624,
        "longitude": 11.730657,
        "altitude": 2038.024,
        "vario": 1.8273997636
    },
    {
        "time": "2022-07-30T16:10:58.000Z",
        "latitude": 60.8936994,
        "longitude": 11.7301771,
        "altitude": 2039.128,
        "vario": 1.8456930895
    },
    {
        "time": "2022-07-30T16:10:59.000Z",
        "latitude": 60.8937693,
        "longitude": 11.7296966,
        "altitude": 2041.331,
        "vario": 1.8628529057
    },
    {
        "time": "2022-07-30T16:11:00.000Z",
        "latitude": 60.8937831,
        "longitude": 11.7292399,
        "altitude": 2044.497,
        "vario": 1.8773929543
    },
    {
        "time": "2022-07-30T16:11:01.000Z",
        "latitude": 60.8937525,
        "longitude": 11.7288248,
        "altitude": 2046.821,
        "vario": 1.8884129311
    },
    {
        "time": "2022-07-30T16:11:02.000Z",
        "latitude": 60.8936851,
        "longitude": 11.7284634,
        "altitude": 2048.187,
        "vario": 1.8955572657
    },
    {
        "time": "2022-07-30T16:11:03.000Z",
        "latitude": 60.8935923,
        "longitude": 11.7281552,
        "altitude": 2049.412,
        "vario": 1.8988869935
    },
    {
        "time": "2022-07-30T16:11:04.000Z",
        "latitude": 60.8934841,
        "longitude": 11.7278902,
        "altitude": 2051.536,
        "vario": 1.8987219618
    },
    {
        "time": "2022-07-30T16:11:05.000Z",
        "latitude": 60.8933648,
        "longitude": 11.7276482,
        "altitude": 2053.599,
        "vario": 1.895498684
    },
    {
        "time": "2022-07-30T16:11:06.000Z",
        "latitude": 60.893236,
        "longitude": 11.7274182,
        "altitude": 2055.334,
        "vario": 1.8897598374
    },
    {
        "time": "2022-07-30T16:11:07.000Z",
        "latitude": 60.8930951,
        "longitude": 11.7272085,
        "altitude": 2057.498,
        "vario": 1.882223453
    },
    {
        "time": "2022-07-30T16:11:08.000Z",
        "latitude": 60.8929346,
        "longitude": 11.7270362,
        "altitude": 2059.401,
        "vario": 1.8738264622
    },
    {
        "time": "2022-07-30T16:11:09.000Z",
        "latitude": 60.8927528,
        "longitude": 11.7269315,
        "altitude": 2060.977,
        "vario": 1.8657882537
    },
    {
        "time": "2022-07-30T16:11:10.000Z",
        "latitude": 60.8925614,
        "longitude": 11.7269239,
        "altitude": 2063.184,
        "vario": 1.8596009749
    },
    {
        "time": "2022-07-30T16:11:11.000Z",
        "latitude": 60.8923709,
        "longitude": 11.7270176,
        "altitude": 2065.643,
        "vario": 1.8568337097
    },
    {
        "time": "2022-07-30T16:11:12.000Z",
        "latitude": 60.8921893,
        "longitude": 11.727212,
        "altitude": 2067.349,
        "vario": 1.8588045368
    },
    {
        "time": "2022-07-30T16:11:13.000Z",
        "latitude": 60.8920259,
        "longitude": 11.7275039,
        "altitude": 2068.598,
        "vario": 1.8661557895
    },
    {
        "time": "2022-07-30T16:11:14.000Z",
        "latitude": 60.8918928,
        "longitude": 11.7278955,
        "altitude": 2070.213,
        "vario": 1.8784491528
    },
    {
        "time": "2022-07-30T16:11:15.000Z",
        "latitude": 60.8918003,
        "longitude": 11.7283685,
        "altitude": 2071.719,
        "vario": 1.8939024519
    },
    {
        "time": "2022-07-30T16:11:16.000Z",
        "latitude": 60.8917524,
        "longitude": 11.7288975,
        "altitude": 2073.241,
        "vario": 1.9093632853
    },
    {
        "time": "2022-07-30T16:11:17.000Z",
        "latitude": 60.8917597,
        "longitude": 11.7294622,
        "altitude": 2074.522,
        "vario": 1.9206612535
    },
    {
        "time": "2022-07-30T16:11:18.000Z",
        "latitude": 60.8918244,
        "longitude": 11.7300448,
        "altitude": 2076.732,
        "vario": 1.92329907
    },
    {
        "time": "2022-07-30T16:11:19.000Z",
        "latitude": 60.8919462,
        "longitude": 11.7306179,
        "altitude": 2079.105,
        "vario": 1.9133472445
    },
    {
        "time": "2022-07-30T16:11:20.000Z",
        "latitude": 60.8921142,
        "longitude": 11.7311563,
        "altitude": 2082.217,
        "vario": 1.8883934856
    },
    {
        "time": "2022-07-30T16:11:21.000Z",
        "latitude": 60.8923283,
        "longitude": 11.7316473,
        "altitude": 2085.027,
        "vario": 1.8483094352
    },
    {
        "time": "2022-07-30T16:11:22.000Z",
        "latitude": 60.8925814,
        "longitude": 11.7320748,
        "altitude": 2087.473,
        "vario": 1.7955817064
    },
    {
        "time": "2022-07-30T16:11:23.000Z",
        "latitude": 60.8928649,
        "longitude": 11.7324227,
        "altitude": 2089.692,
        "vario": 1.7351476941
    },
    {
        "time": "2022-07-30T16:11:24.000Z",
        "latitude": 60.8931697,
        "longitude": 11.7326906,
        "altitude": 2091.428,
        "vario": 1.6737356906
    },
    {
        "time": "2022-07-30T16:11:25.000Z",
        "latitude": 60.8934916,
        "longitude": 11.7328648,
        "altitude": 2093.004,
        "vario": 1.6188036474
    },
    {
        "time": "2022-07-30T16:11:26.000Z",
        "latitude": 60.8938205,
        "longitude": 11.7329524,
        "altitude": 2093.742,
        "vario": 1.5772973882
    },
    {
        "time": "2022-07-30T16:11:27.000Z",
        "latitude": 60.8941495,
        "longitude": 11.7329468,
        "altitude": 2093.795,
        "vario": 1.5545132117
    },
    {
        "time": "2022-07-30T16:11:28.000Z",
        "latitude": 60.8944744,
        "longitude": 11.7328475,
        "altitude": 2094.274,
        "vario": 1.5533425742
    },
    {
        "time": "2022-07-30T16:11:29.000Z",
        "latitude": 60.8947867,
        "longitude": 11.732653,
        "altitude": 2095.029,
        "vario": 1.5739806205
    },
    {
        "time": "2022-07-30T16:11:30.000Z",
        "latitude": 60.895079,
        "longitude": 11.7323782,
        "altitude": 2096.297,
        "vario": 1.6141126823
    },
    {
        "time": "2022-07-30T16:11:31.000Z",
        "latitude": 60.8953445,
        "longitude": 11.7320402,
        "altitude": 2098.521,
        "vario": 1.6695582543
    },
    {
        "time": "2022-07-30T16:11:32.000Z",
        "latitude": 60.8955721,
        "longitude": 11.7316488,
        "altitude": 2100.649,
        "vario": 1.7351031005
    },
    {
        "time": "2022-07-30T16:11:33.000Z",
        "latitude": 60.8957683,
        "longitude": 11.731215,
        "altitude": 2102.821,
        "vario": 1.8052655966
    },
    {
        "time": "2022-07-30T16:11:34.000Z",
        "latitude": 60.8959259,
        "longitude": 11.7307531,
        "altitude": 2104.69,
        "vario": 1.8748977204
    },
    {
        "time": "2022-07-30T16:11:35.000Z",
        "latitude": 60.8960388,
        "longitude": 11.7302761,
        "altitude": 2106.879,
        "vario": 1.9395210919
    },
    {
        "time": "2022-07-30T16:11:36.000Z",
        "latitude": 60.8961077,
        "longitude": 11.7298016,
        "altitude": 2109.089,
        "vario": 1.9953669983
    },
    {
        "time": "2022-07-30T16:11:37.000Z",
        "latitude": 60.8961311,
        "longitude": 11.7293368,
        "altitude": 2110.876,
        "vario": 2.0392739645
    },
    {
        "time": "2022-07-30T16:11:38.000Z",
        "latitude": 60.8961015,
        "longitude": 11.7288938,
        "altitude": 2112.375,
        "vario": 2.0685942984
    },
    {
        "time": "2022-07-30T16:11:39.000Z",
        "latitude": 60.8960251,
        "longitude": 11.728504,
        "altitude": 2114.504,
        "vario": 2.0812115184
    },
    {
        "time": "2022-07-30T16:11:40.000Z",
        "latitude": 60.8959081,
        "longitude": 11.7281827,
        "altitude": 2117.108,
        "vario": 2.0756979495
    },
    {
        "time": "2022-07-30T16:11:41.000Z",
        "latitude": 60.8957613,
        "longitude": 11.7279352,
        "altitude": 2119.935,
        "vario": 2.0516211038
    },
    {
        "time": "2022-07-30T16:11:42.000Z",
        "latitude": 60.8955906,
        "longitude": 11.7277649,
        "altitude": 2122.589,
        "vario": 2.0098637725
    },
    {
        "time": "2022-07-30T16:11:43.000Z",
        "latitude": 60.895402,
        "longitude": 11.7276836,
        "altitude": 2125.088,
        "vario": 1.9527678146
    },
    {
        "time": "2022-07-30T16:11:44.000Z",
        "latitude": 60.8952058,
        "longitude": 11.7277014,
        "altitude": 2127.581,
        "vario": 1.8840638836
    },
    {
        "time": "2022-07-30T16:11:45.000Z",
        "latitude": 60.8950132,
        "longitude": 11.7278167,
        "altitude": 2130.027,
        "vario": 1.8084984976
    },
    {
        "time": "2022-07-30T16:11:46.000Z",
        "latitude": 60.8948333,
        "longitude": 11.7280223,
        "altitude": 2131.635,
        "vario": 1.7311911237
    },
    {
        "time": "2022-07-30T16:11:47.000Z",
        "latitude": 60.8946718,
        "longitude": 11.7283129,
        "altitude": 2132.429,
        "vario": 1.6568563515
    },
    {
        "time": "2022-07-30T16:11:48.000Z",
        "latitude": 60.8945341,
        "longitude": 11.728686,
        "altitude": 2132.789,
        "vario": 1.5890882932
    },
    {
        "time": "2022-07-30T16:11:49.000Z",
        "latitude": 60.894432,
        "longitude": 11.7291381,
        "altitude": 2133.646,
        "vario": 1.5299051044
    },
    {
        "time": "2022-07-30T16:11:50.000Z",
        "latitude": 60.8943719,
        "longitude": 11.7296546,
        "altitude": 2135.316,
        "vario": 1.4795976483
    },
    {
        "time": "2022-07-30T16:11:51.000Z",
        "latitude": 60.8943566,
        "longitude": 11.730211,
        "altitude": 2136.921,
        "vario": 1.4369529435
    },
    {
        "time": "2022-07-30T16:11:52.000Z",
        "latitude": 60.8943902,
        "longitude": 11.7307884,
        "altitude": 2138.552,
        "vario": 1.3998229529
    },
    {
        "time": "2022-07-30T16:11:53.000Z",
        "latitude": 60.8944765,
        "longitude": 11.7313686,
        "altitude": 2140.094,
        "vario": 1.3658242871
    },
    {
        "time": "2022-07-30T16:11:54.000Z",
        "latitude": 60.8946098,
        "longitude": 11.7319351,
        "altitude": 2141.483,
        "vario": 1.333041848
    },
    {
        "time": "2022-07-30T16:11:55.000Z",
        "latitude": 60.8947882,
        "longitude": 11.7324728,
        "altitude": 2143.002,
        "vario": 1.300624503
    },
    {
        "time": "2022-07-30T16:11:56.000Z",
        "latitude": 60.8950078,
        "longitude": 11.7329671,
        "altitude": 2144.698,
        "vario": 1.269136583
    },
    {
        "time": "2022-07-30T16:11:57.000Z",
        "latitude": 60.8952626,
        "longitude": 11.7334067,
        "altitude": 2146.075,
        "vario": 1.240610695
    },
    {
        "time": "2022-07-30T16:11:58.000Z",
        "latitude": 60.8955456,
        "longitude": 11.7337857,
        "altitude": 2147.025,
        "vario": 1.2183122281
    },
    {
        "time": "2022-07-30T16:11:59.000Z",
        "latitude": 60.8958501,
        "longitude": 11.7340991,
        "altitude": 2148.183,
        "vario": 1.2062179629
    },
    {
        "time": "2022-07-30T16:12:00.000Z",
        "latitude": 60.8961737,
        "longitude": 11.7343261,
        "altitude": 2149.357,
        "vario": 1.2083536524
    },
    {
        "time": "2022-07-30T16:12:01.000Z",
        "latitude": 60.8965099,
        "longitude": 11.7344772,
        "altitude": 2149.935,
        "vario": 1.2280934682
    },
    {
        "time": "2022-07-30T16:12:02.000Z",
        "latitude": 60.8968512,
        "longitude": 11.734544,
        "altitude": 2150.417,
        "vario": 1.2674658471
    },
    {
        "time": "2022-07-30T16:12:03.000Z",
        "latitude": 60.8971943,
        "longitude": 11.7345255,
        "altitude": 2151.429,
        "vario": 1.3266048453
    },
    {
        "time": "2022-07-30T16:12:04.000Z",
        "latitude": 60.8975343,
        "longitude": 11.7344254,
        "altitude": 2152.325,
        "vario": 1.4034520284
    },
    {
        "time": "2022-07-30T16:12:05.000Z",
        "latitude": 60.8978622,
        "longitude": 11.7342465,
        "altitude": 2153.027,
        "vario": 1.4937656395
    },
    {
        "time": "2022-07-30T16:12:06.000Z",
        "latitude": 60.8981681,
        "longitude": 11.7339872,
        "altitude": 2154.21,
        "vario": 1.5914337981
    },
    {
        "time": "2022-07-30T16:12:07.000Z",
        "latitude": 60.8984438,
        "longitude": 11.7336559,
        "altitude": 2155.922,
        "vario": 1.6890891752
    },
    {
        "time": "2022-07-30T16:12:08.000Z",
        "latitude": 60.8986767,
        "longitude": 11.7332642,
        "altitude": 2157.955,
        "vario": 1.7789624153
    },
    {
        "time": "2022-07-30T16:12:09.000Z",
        "latitude": 60.8988628,
        "longitude": 11.7328189,
        "altitude": 2160.355,
        "vario": 1.8538452477
    },
    {
        "time": "2022-07-30T16:12:10.000Z",
        "latitude": 60.898996,
        "longitude": 11.732341,
        "altitude": 2163.357,
        "vario": 1.9080083181
    },
    {
        "time": "2022-07-30T16:12:11.000Z",
        "latitude": 60.8990758,
        "longitude": 11.7318574,
        "altitude": 2165.901,
        "vario": 1.9379532801
    },
    {
        "time": "2022-07-30T16:12:12.000Z",
        "latitude": 60.8991034,
        "longitude": 11.731385,
        "altitude": 2168.084,
        "vario": 1.9428598853
    },
    {
        "time": "2022-07-30T16:12:13.000Z",
        "latitude": 60.8990865,
        "longitude": 11.7309457,
        "altitude": 2170.37,
        "vario": 1.9246239078
    },
    {
        "time": "2022-07-30T16:12:14.000Z",
        "latitude": 60.8990328,
        "longitude": 11.7305517,
        "altitude": 2173.294,
        "vario": 1.8875136455
    },
    {
        "time": "2022-07-30T16:12:15.000Z",
        "latitude": 60.8989436,
        "longitude": 11.7302094,
        "altitude": 2175.782,
        "vario": 1.8374715585
    },
    {
        "time": "2022-07-30T16:12:16.000Z",
        "latitude": 60.8988219,
        "longitude": 11.729932,
        "altitude": 2177.798,
        "vario": 1.7811275579
    },
    {
        "time": "2022-07-30T16:12:17.000Z",
        "latitude": 60.8986733,
        "longitude": 11.729725,
        "altitude": 2178.611,
        "vario": 1.7247074375
    },
    {
        "time": "2022-07-30T16:12:18.000Z",
        "latitude": 60.8985048,
        "longitude": 11.7296024,
        "altitude": 2178.767,
        "vario": 1.6730482119
    },
    {
        "time": "2022-07-30T16:12:19.000Z",
        "latitude": 60.8983241,
        "longitude": 11.7295823,
        "altitude": 2180.125,
        "vario": 1.628905173
    },
    {
        "time": "2022-07-30T16:12:20.000Z",
        "latitude": 60.898143,
        "longitude": 11.7296572,
        "altitude": 2181.772,
        "vario": 1.5926405546
    },
    {
        "time": "2022-07-30T16:12:21.000Z",
        "latitude": 60.8979686,
        "longitude": 11.7298234,
        "altitude": 2183.138,
        "vario": 1.5623251781
    },
    {
        "time": "2022-07-30T16:12:22.000Z",
        "latitude": 60.8978089,
        "longitude": 11.7300768,
        "altitude": 2184.515,
        "vario": 1.5342791364
    },
    {
        "time": "2022-07-30T16:12:23.000Z",
        "latitude": 60.8976742,
        "longitude": 11.7304046,
        "altitude": 2186.119,
        "vario": 1.5039328061
    },
    {
        "time": "2022-07-30T16:12:24.000Z",
        "latitude": 60.8975687,
        "longitude": 11.7307991,
        "altitude": 2187.828,
        "vario": 1.4668324907
    },
    {
        "time": "2022-07-30T16:12:25.000Z",
        "latitude": 60.8974961,
        "longitude": 11.7312508,
        "altitude": 2189.826,
        "vario": 1.4196193157
    },
    {
        "time": "2022-07-30T16:12:26.000Z",
        "latitude": 60.8974609,
        "longitude": 11.7317492,
        "altitude": 2192.267,
        "vario": 1.3607758965
    },
    {
        "time": "2022-07-30T16:12:27.000Z",
        "latitude": 60.8974628,
        "longitude": 11.7322766,
        "altitude": 2194.168,
        "vario": 1.2910440105
    },
    {
        "time": "2022-07-30T16:12:28.000Z",
        "latitude": 60.8975055,
        "longitude": 11.7328216,
        "altitude": 2195.519,
        "vario": 1.2134421819
    },
    {
        "time": "2022-07-30T16:12:29.000Z",
        "latitude": 60.897596,
        "longitude": 11.733371,
        "altitude": 2196.54,
        "vario": 1.1328754722
    },
    {
        "time": "2022-07-30T16:12:30.000Z",
        "latitude": 60.8977263,
        "longitude": 11.7339098,
        "altitude": 2197.873,
        "vario": 1.0554208343
    },
    {
        "time": "2022-07-30T16:12:31.000Z",
        "latitude": 60.8978936,
        "longitude": 11.73443,
        "altitude": 2198.69,
        "vario": 0.9874193866
    },
    {
        "time": "2022-07-30T16:12:32.000Z",
        "latitude": 60.8980948,
        "longitude": 11.7349158,
        "altitude": 2198.936,
        "vario": 0.9345740513
    },
    {
        "time": "2022-07-30T16:12:33.000Z",
        "latitude": 60.8983305,
        "longitude": 11.7353589,
        "altitude": 2199.288,
        "vario": 0.9012105641
    },
    {
        "time": "2022-07-30T16:12:34.000Z",
        "latitude": 60.8985941,
        "longitude": 11.7357502,
        "altitude": 2198.981,
        "vario": 0.8897918289
    },
    {
        "time": "2022-07-30T16:12:35.000Z",
        "latitude": 60.8988839,
        "longitude": 11.7360735,
        "altitude": 2198.515,
        "vario": 0.9007211095
    },
    {
        "time": "2022-07-30T16:12:36.000Z",
        "latitude": 60.8991967,
        "longitude": 11.736322,
        "altitude": 2199.404,
        "vario": 0.9323980951
    },
    {
        "time": "2022-07-30T16:12:37.000Z",
        "latitude": 60.8995254,
        "longitude": 11.7364892,
        "altitude": 2201.528,
        "vario": 0.9814844359
    },
    {
        "time": "2022-07-30T16:12:38.000Z",
        "latitude": 60.8998595,
        "longitude": 11.7365786,
        "altitude": 2203.354,
        "vario": 1.0432660812
    },
    {
        "time": "2022-07-30T16:12:39.000Z",
        "latitude": 60.9001925,
        "longitude": 11.736605,
        "altitude": 2203.801,
        "vario": 1.1120439094
    },
    {
        "time": "2022-07-30T16:12:40.000Z",
        "latitude": 60.9005195,
        "longitude": 11.7365609,
        "altitude": 2204.176,
        "vario": 1.1816144462
    },
    {
        "time": "2022-07-30T16:12:41.000Z",
        "latitude": 60.9008416,
        "longitude": 11.7364372,
        "altitude": 2204.998,
        "vario": 1.2458173058
    },
    {
        "time": "2022-07-30T16:12:42.000Z",
        "latitude": 60.9011493,
        "longitude": 11.736233,
        "altitude": 2205.819,
        "vario": 1.2991432254
    },
    {
        "time": "2022-07-30T16:12:43.000Z",
        "latitude": 60.9014327,
        "longitude": 11.7359585,
        "altitude": 2207.544,
        "vario": 1.3374382883
    },
    {
        "time": "2022-07-30T16:12:44.000Z",
        "latitude": 60.9016862,
        "longitude": 11.7356294,
        "altitude": 2210.073,
        "vario": 1.3586137502
    },
    {
        "time": "2022-07-30T16:12:45.000Z",
        "latitude": 60.9019032,
        "longitude": 11.7352523,
        "altitude": 2212.529,
        "vario": 1.3631464663
    },
    {
        "time": "2022-07-30T16:12:46.000Z",
        "latitude": 60.9020918,
        "longitude": 11.7348395,
        "altitude": 2215.328,
        "vario": 1.3542189752
    },
    {
        "time": "2022-07-30T16:12:47.000Z",
        "latitude": 60.9022428,
        "longitude": 11.7344049,
        "altitude": 2217.647,
        "vario": 1.3373552133
    },
    {
        "time": "2022-07-30T16:12:48.000Z",
        "latitude": 60.9023578,
        "longitude": 11.733955,
        "altitude": 2218.835,
        "vario": 1.3194873
    },
    {
        "time": "2022-07-30T16:12:49.000Z",
        "latitude": 60.9024397,
        "longitude": 11.7334952,
        "altitude": 2218.644,
        "vario": 1.3076220392
    },
    {
        "time": "2022-07-30T16:12:50.000Z",
        "latitude": 60.9024804,
        "longitude": 11.7330399,
        "altitude": 2218.52,
        "vario": 1.3072892391
    },
    {
        "time": "2022-07-30T16:12:51.000Z",
        "latitude": 60.9024791,
        "longitude": 11.7325959,
        "altitude": 2219.237,
        "vario": 1.3210045701
    },
    {
        "time": "2022-07-30T16:12:52.000Z",
        "latitude": 60.902442,
        "longitude": 11.7321721,
        "altitude": 2219.851,
        "vario": 1.3470953845
    },
    {
        "time": "2022-07-30T16:12:53.000Z",
        "latitude": 60.9023692,
        "longitude": 11.731788,
        "altitude": 2220.507,
        "vario": 1.3791820103
    },
    {
        "time": "2022-07-30T16:12:54.000Z",
        "latitude": 60.9022634,
        "longitude": 11.7314604,
        "altitude": 2221.744,
        "vario": 1.4063818212
    },
    {
        "time": "2022-07-30T16:12:55.000Z",
        "latitude": 60.9021294,
        "longitude": 11.7311983,
        "altitude": 2223.701,
        "vario": 1.4141974566
    },
    {
        "time": "2022-07-30T16:12:56.000Z",
        "latitude": 60.9019745,
        "longitude": 11.7310076,
        "altitude": 2225.726,
        "vario": 1.3861113447
    },
    {
        "time": "2022-07-30T16:12:57.000Z",
        "latitude": 60.9018062,
        "longitude": 11.7309021,
        "altitude": 2227.556,
        "vario": 1.305772612
    },
    {
        "time": "2022-07-30T16:12:58.000Z",
        "latitude": 60.901634,
        "longitude": 11.7308879,
        "altitude": 2229.864,
        "vario": 1.1595225051
    },
    {
        "time": "2022-07-30T16:12:59.000Z",
        "latitude": 60.9014656,
        "longitude": 11.7309658,
        "altitude": 2232.908,
        "vario": 0.9390112023
    },
    {
        "time": "2022-07-30T16:13:00.000Z",
        "latitude": 60.9013097,
        "longitude": 11.7311305,
        "altitude": 2236.19,
        "vario": 0.6435981328
    },
    {
        "time": "2022-07-30T16:13:01.000Z",
        "latitude": 60.9011738,
        "longitude": 11.7313722,
        "altitude": 2238.466,
        "vario": 0.2821791967
    },
    {
        "time": "2022-07-30T16:13:02.000Z",
        "latitude": 60.9010651,
        "longitude": 11.7316921,
        "altitude": 2240.388,
        "vario": -0.1259755874
    },
    {
        "time": "2022-07-30T16:13:03.000Z",
        "latitude": 60.9009854,
        "longitude": 11.7320847,
        "altitude": 2241.656,
        "vario": -0.5518608777
    },
    {
        "time": "2022-07-30T16:13:04.000Z",
        "latitude": 60.9009396,
        "longitude": 11.7325424,
        "altitude": 2241.673,
        "vario": -0.9590782134
    },
    {
        "time": "2022-07-30T16:13:05.000Z",
        "latitude": 60.9009354,
        "longitude": 11.7330592,
        "altitude": 2240.386,
        "vario": -1.3078544565
    },
    {
        "time": "2022-07-30T16:13:06.000Z",
        "latitude": 60.9009828,
        "longitude": 11.7336175,
        "altitude": 2237.237,
        "vario": -1.560459746
    },
    {
        "time": "2022-07-30T16:13:07.000Z",
        "latitude": 60.901099,
        "longitude": 11.7342069,
        "altitude": 2232.57,
        "vario": -1.6873667399
    },
    {
        "time": "2022-07-30T16:13:08.000Z",
        "latitude": 60.9012779,
        "longitude": 11.7347987,
        "altitude": 2225.867,
        "vario": -1.6730997135
    },
    {
        "time": "2022-07-30T16:13:09.000Z",
        "latitude": 60.9015239,
        "longitude": 11.7353622,
        "altitude": 2217.201,
        "vario": -1.5205210531
    },
    {
        "time": "2022-07-30T16:13:10.000Z",
        "latitude": 60.9018467,
        "longitude": 11.7358466,
        "altitude": 2209.243,
        "vario": -1.2525070873
    },
    {
        "time": "2022-07-30T16:13:11.000Z",
        "latitude": 60.9022391,
        "longitude": 11.7361957,
        "altitude": 2204.983,
        "vario": -0.9102047672
    },
    {
        "time": "2022-07-30T16:13:12.000Z",
        "latitude": 60.9026693,
        "longitude": 11.7364141,
        "altitude": 2203.833,
        "vario": -0.5476953896
    },
    {
        "time": "2022-07-30T16:13:13.000Z",
        "latitude": 60.9031031,
        "longitude": 11.7365379,
        "altitude": 2204.557,
        "vario": -0.223782386
    },
    {
        "time": "2022-07-30T16:13:14.000Z",
        "latitude": 60.9035177,
        "longitude": 11.7366214,
        "altitude": 2208.563,
        "vario": 0.0078171
    },
    {
        "time": "2022-07-30T16:13:15.000Z",
        "latitude": 60.9039021,
        "longitude": 11.736741,
        "altitude": 2215.883,
        "vario": 0.1079917962
    },
    {
        "time": "2022-07-30T16:13:16.000Z",
        "latitude": 60.9042434,
        "longitude": 11.7369532,
        "altitude": 2224.92,
        "vario": 0.0594098662
    },
    {
        "time": "2022-07-30T16:13:17.000Z",
        "latitude": 60.9045277,
        "longitude": 11.7372794,
        "altitude": 2233.477,
        "vario": -0.130224669
    },
    {
        "time": "2022-07-30T16:13:18.000Z",
        "latitude": 60.9047424,
        "longitude": 11.7377029,
        "altitude": 2238.954,
        "vario": -0.4296779299
    },
    {
        "time": "2022-07-30T16:13:19.000Z",
        "latitude": 60.9048849,
        "longitude": 11.738176,
        "altitude": 2239.311,
        "vario": -0.7902256067
    },
    {
        "time": "2022-07-30T16:13:20.000Z",
        "latitude": 60.9049541,
        "longitude": 11.7386553,
        "altitude": 2234.648,
        "vario": -1.1549779985
    },
    {
        "time": "2022-07-30T16:13:21.000Z",
        "latitude": 60.9049322,
        "longitude": 11.7391111,
        "altitude": 2226.095,
        "vario": -1.469448481
    },
    {
        "time": "2022-07-30T16:13:22.000Z",
        "latitude": 60.9048056,
        "longitude": 11.739491,
        "altitude": 2215.182,
        "vario": -1.691060093
    },
    {
        "time": "2022-07-30T16:13:23.000Z",
        "latitude": 60.9045884,
        "longitude": 11.7397218,
        "altitude": 2205.702,
        "vario": -1.7956151172
    },
    {
        "time": "2022-07-30T16:13:24.000Z",
        "latitude": 60.9043241,
        "longitude": 11.7397822,
        "altitude": 2200.066,
        "vario": -1.779595823
    },
    {
        "time": "2022-07-30T16:13:25.000Z",
        "latitude": 60.9040545,
        "longitude": 11.7397047,
        "altitude": 2197.781,
        "vario": -1.658187997
    },
    {
        "time": "2022-07-30T16:13:26.000Z",
        "latitude": 60.9038098,
        "longitude": 11.7394986,
        "altitude": 2197.762,
        "vario": -1.4598227399
    },
    {
        "time": "2022-07-30T16:13:27.000Z",
        "latitude": 60.9036124,
        "longitude": 11.7391395,
        "altitude": 2200.614,
        "vario": -1.2188735126
    },
    {
        "time": "2022-07-30T16:13:28.000Z",
        "latitude": 60.9034688,
        "longitude": 11.7386659,
        "altitude": 2203.643,
        "vario": -0.9683137389
    },
    {
        "time": "2022-07-30T16:13:29.000Z",
        "latitude": 60.9033912,
        "longitude": 11.7381236,
        "altitude": 2204.932,
        "vario": -0.7338783646
    },
    {
        "time": "2022-07-30T16:13:30.000Z",
        "latitude": 60.9033873,
        "longitude": 11.7375196,
        "altitude": 2205.342,
        "vario": -0.5306592498
    },
    {
        "time": "2022-07-30T16:13:31.000Z",
        "latitude": 60.9034413,
        "longitude": 11.7368869,
        "altitude": 2204.968,
        "vario": -0.3622576394
    },
    {
        "time": "2022-07-30T16:13:32.000Z",
        "latitude": 60.9035343,
        "longitude": 11.7362361,
        "altitude": 2204.138,
        "vario": -0.2221685091
    },
    {
        "time": "2022-07-30T16:13:33.000Z",
        "latitude": 60.9036456,
        "longitude": 11.7355606,
        "altitude": 2203.376,
        "vario": -0.096755019
    },
    {
        "time": "2022-07-30T16:13:34.000Z",
        "latitude": 60.90376,
        "longitude": 11.7348626,
        "altitude": 2202.35,
        "vario": 0.0310178336
    },
    {
        "time": "2022-07-30T16:13:35.000Z",
        "latitude": 60.903872,
        "longitude": 11.7341557,
        "altitude": 2202.061,
        "vario": 0.1778320804
    },
    {
        "time": "2022-07-30T16:13:36.000Z",
        "latitude": 60.9039849,
        "longitude": 11.7334538,
        "altitude": 2202.577,
        "vario": 0.3566549307
    },
    {
        "time": "2022-07-30T16:13:37.000Z",
        "latitude": 60.9041049,
        "longitude": 11.7327554,
        "altitude": 2202.622,
        "vario": 0.5740133976
    },
    {
        "time": "2022-07-30T16:13:38.000Z",
        "latitude": 60.9042373,
        "longitude": 11.732054,
        "altitude": 2202.005,
        "vario": 0.8281884897
    },
    {
        "time": "2022-07-30T16:13:39.000Z",
        "latitude": 60.9043835,
        "longitude": 11.7313477,
        "altitude": 2200.822,
        "vario": 1.1085219452
    },
    {
        "time": "2022-07-30T16:13:40.000Z",
        "latitude": 60.9045426,
        "longitude": 11.7306271,
        "altitude": 2200.029,
        "vario": 1.3960379244
    },
    {
        "time": "2022-07-30T16:13:41.000Z",
        "latitude": 60.9046984,
        "longitude": 11.7298895,
        "altitude": 2199.49,
        "vario": 1.6654646076
    },
    {
        "time": "2022-07-30T16:13:42.000Z",
        "latitude": 60.9048338,
        "longitude": 11.7291418,
        "altitude": 2200.109,
        "vario": 1.8884996494
    },
    {
        "time": "2022-07-30T16:13:43.000Z",
        "latitude": 60.9049257,
        "longitude": 11.7283979,
        "altitude": 2203.624,
        "vario": 2.0378849185
    },
    {
        "time": "2022-07-30T16:13:44.000Z",
        "latitude": 60.904952,
        "longitude": 11.7277035,
        "altitude": 2211.283,
        "vario": 2.0916072262
    },
    {
        "time": "2022-07-30T16:13:45.000Z",
        "latitude": 60.9049198,
        "longitude": 11.7271004,
        "altitude": 2220.907,
        "vario": 2.0363756911
    },
    {
        "time": "2022-07-30T16:13:46.000Z",
        "latitude": 60.9048577,
        "longitude": 11.7265762,
        "altitude": 2228.547,
        "vario": 1.8695828443
    },
    {
        "time": "2022-07-30T16:13:47.000Z",
        "latitude": 60.9047795,
        "longitude": 11.7261122,
        "altitude": 2232.033,
        "vario": 1.5993777933
    },
    {
        "time": "2022-07-30T16:13:48.000Z",
        "latitude": 60.9046885,
        "longitude": 11.7257003,
        "altitude": 2231.857,
        "vario": 1.2429609079
    },
    {
        "time": "2022-07-30T16:13:49.000Z",
        "latitude": 60.9045826,
        "longitude": 11.7253383,
        "altitude": 2230.482,
        "vario": 0.8235354543
    },
    {
        "time": "2022-07-30T16:13:50.000Z",
        "latitude": 60.904459,
        "longitude": 11.7250236,
        "altitude": 2229.394,
        "vario": 0.3666729795
    },
    {
        "time": "2022-07-30T16:13:51.000Z",
        "latitude": 60.9043202,
        "longitude": 11.7247634,
        "altitude": 2228.664,
        "vario": -0.1030202008
    },
    {
        "time": "2022-07-30T16:13:52.000Z",
        "latitude": 60.9041719,
        "longitude": 11.7245564,
        "altitude": 2228.582,
        "vario": -0.564387013
    },
    {
        "time": "2022-07-30T16:13:53.000Z",
        "latitude": 60.9040169,
        "longitude": 11.7243946,
        "altitude": 2228.112,
        "vario": -1.0010841259
    },
    {
        "time": "2022-07-30T16:13:54.000Z",
        "latitude": 60.9038586,
        "longitude": 11.724275,
        "altitude": 2226.631,
        "vario": -1.4017727471
    },
    {
        "time": "2022-07-30T16:13:55.000Z",
        "latitude": 60.9036992,
        "longitude": 11.7241939,
        "altitude": 2224.177,
        "vario": -1.7594620468
    },
    {
        "time": "2022-07-30T16:13:56.000Z",
        "latitude": 60.9035375,
        "longitude": 11.7241456,
        "altitude": 2221.231,
        "vario": -2.0704375727
    },
    {
        "time": "2022-07-30T16:13:57.000Z",
        "latitude": 60.9033697,
        "longitude": 11.7241235,
        "altitude": 2218.096,
        "vario": -2.3331086009
    },
    {
        "time": "2022-07-30T16:13:58.000Z",
        "latitude": 60.9031956,
        "longitude": 11.7241276,
        "altitude": 2214.882,
        "vario": -2.5470347831
    },
    {
        "time": "2022-07-30T16:13:59.000Z",
        "latitude": 60.9030167,
        "longitude": 11.7241542,
        "altitude": 2211.828,
        "vario": -2.7122798797
    },
    {
        "time": "2022-07-30T16:14:00.000Z",
        "latitude": 60.9028338,
        "longitude": 11.7241954,
        "altitude": 2208.41,
        "vario": -2.8291612644
    },
    {
        "time": "2022-07-30T16:14:01.000Z",
        "latitude": 60.9026486,
        "longitude": 11.7242465,
        "altitude": 2205.409,
        "vario": -2.8983388305
    },
    {
        "time": "2022-07-30T16:14:02.000Z",
        "latitude": 60.902463,
        "longitude": 11.7243064,
        "altitude": 2202.544,
        "vario": -2.9211944577
    },
    {
        "time": "2022-07-30T16:14:03.000Z",
        "latitude": 60.9022743,
        "longitude": 11.7243754,
        "altitude": 2199.214,
        "vario": -2.9003786242
    },
    {
        "time": "2022-07-30T16:14:04.000Z",
        "latitude": 60.902079,
        "longitude": 11.7244543,
        "altitude": 2195.215,
        "vario": -2.8403092612
    },
    {
        "time": "2022-07-30T16:14:05.000Z",
        "latitude": 60.9018753,
        "longitude": 11.7245418,
        "altitude": 2190.757,
        "vario": -2.7474486921
    },
    {
        "time": "2022-07-30T16:14:06.000Z",
        "latitude": 60.9016637,
        "longitude": 11.7246353,
        "altitude": 2186.482,
        "vario": -2.6302340813
    },
    {
        "time": "2022-07-30T16:14:07.000Z",
        "latitude": 60.9014452,
        "longitude": 11.724733,
        "altitude": 2183.308,
        "vario": -2.498562748
    },
    {
        "time": "2022-07-30T16:14:08.000Z",
        "latitude": 60.9012218,
        "longitude": 11.7248351,
        "altitude": 2181.752,
        "vario": -2.362812936
    },
    {
        "time": "2022-07-30T16:14:09.000Z",
        "latitude": 60.9009977,
        "longitude": 11.7249404,
        "altitude": 2180.65,
        "vario": -2.2325719628
    },
    {
        "time": "2022-07-30T16:14:10.000Z",
        "latitude": 60.9007764,
        "longitude": 11.7250474,
        "altitude": 2179.414,
        "vario": -2.1153509349
    },
    {
        "time": "2022-07-30T16:14:11.000Z",
        "latitude": 60.9005567,
        "longitude": 11.7251553,
        "altitude": 2178.195,
        "vario": -2.0156497007
    },
    {
        "time": "2022-07-30T16:14:12.000Z",
        "latitude": 60.9003374,
        "longitude": 11.725266,
        "altitude": 2177.402,
        "vario": -1.9346186151
    },
    {
        "time": "2022-07-30T16:14:13.000Z",
        "latitude": 60.9001203,
        "longitude": 11.7253804,
        "altitude": 2176.879,
        "vario": -1.8703418794
    },
    {
        "time": "2022-07-30T16:14:14.000Z",
        "latitude": 60.899907,
        "longitude": 11.7254976,
        "altitude": 2174.924,
        "vario": -1.8186842555
    },
    {
        "time": "2022-07-30T16:14:15.000Z",
        "latitude": 60.8996989,
        "longitude": 11.7256021,
        "altitude": 2171.581,
        "vario": -1.774478948
    },
    {
        "time": "2022-07-30T16:14:16.000Z",
        "latitude": 60.8994954,
        "longitude": 11.7256617,
        "altitude": 2168.682,
        "vario": -1.7327317175
    },
    {
        "time": "2022-07-30T16:14:17.000Z",
        "latitude": 60.8992956,
        "longitude": 11.7256543,
        "altitude": 2166.576,
        "vario": -1.6895346195
    },
    {
        "time": "2022-07-30T16:14:18.000Z",
        "latitude": 60.8991031,
        "longitude": 11.7255674,
        "altitude": 2164.45,
        "vario": -1.6424846205
    },
    {
        "time": "2022-07-30T16:14:19.000Z",
        "latitude": 60.8989257,
        "longitude": 11.725384,
        "altitude": 2162.869,
        "vario": -1.590598806
    },
    {
        "time": "2022-07-30T16:14:20.000Z",
        "latitude": 60.8987731,
        "longitude": 11.7251129,
        "altitude": 2162.0,
        "vario": -1.5338077827
    },
    {
        "time": "2022-07-30T16:14:21.000Z",
        "latitude": 60.8986545,
        "longitude": 11.7247636,
        "altitude": 2161.186,
        "vario": -1.4722738137
    },
    {
        "time": "2022-07-30T16:14:22.000Z",
        "latitude": 60.8985785,
        "longitude": 11.7243397,
        "altitude": 2160.135,
        "vario": -1.4057632121
    },
    {
        "time": "2022-07-30T16:14:23.000Z",
        "latitude": 60.8985557,
        "longitude": 11.72386,
        "altitude": 2158.768,
        "vario": -1.3333060503
    },
    {
        "time": "2022-07-30T16:14:24.000Z",
        "latitude": 60.8985932,
        "longitude": 11.7233493,
        "altitude": 2157.189,
        "vario": -1.2532653632
    },
    {
        "time": "2022-07-30T16:14:25.000Z",
        "latitude": 60.8986944,
        "longitude": 11.7228327,
        "altitude": 2155.554,
        "vario": -1.1637408885
    },
    {
        "time": "2022-07-30T16:14:26.000Z",
        "latitude": 60.8988567,
        "longitude": 11.7223393,
        "altitude": 2154.13,
        "vario": -1.0632119153
    },
    {
        "time": "2022-07-30T16:14:27.000Z",
        "latitude": 60.8990722,
        "longitude": 11.7218932,
        "altitude": 2152.658,
        "vario": -0.9512034036
    },
    {
        "time": "2022-07-30T16:14:28.000Z",
        "latitude": 60.8993349,
        "longitude": 11.7215076,
        "altitude": 2151.34,
        "vario": -0.8287773008
    },
    {
        "time": "2022-07-30T16:14:29.000Z",
        "latitude": 60.8996341,
        "longitude": 11.7211868,
        "altitude": 2149.995,
        "vario": -0.6987185052
    },
    {
        "time": "2022-07-30T16:14:30.000Z",
        "latitude": 60.8999587,
        "longitude": 11.7209153,
        "altitude": 2148.693,
        "vario": -0.5653990622
    },
    {
        "time": "2022-07-30T16:14:31.000Z",
        "latitude": 60.9002993,
        "longitude": 11.7206737,
        "altitude": 2148.249,
        "vario": -0.4343019887
    },
    {
        "time": "2022-07-30T16:14:32.000Z",
        "latitude": 60.9006429,
        "longitude": 11.7204404,
        "altitude": 2148.697,
        "vario": -0.3113048687
    },
    {
        "time": "2022-07-30T16:14:33.000Z",
        "latitude": 60.9009838,
        "longitude": 11.7202031,
        "altitude": 2149.539,
        "vario": -0.2019401236
    },
    {
        "time": "2022-07-30T16:14:34.000Z",
        "latitude": 60.9013191,
        "longitude": 11.7199627,
        "altitude": 2150.081,
        "vario": -0.1107432953
    },
    {
        "time": "2022-07-30T16:14:35.000Z",
        "latitude": 60.9016465,
        "longitude": 11.7197203,
        "altitude": 2150.201,
        "vario": -0.040846241
    },
    {
        "time": "2022-07-30T16:14:36.000Z",
        "latitude": 60.9019675,
        "longitude": 11.7194755,
        "altitude": 2150.424,
        "vario": 0.0061753921
    },
    {
        "time": "2022-07-30T16:14:37.000Z",
        "latitude": 60.9022853,
        "longitude": 11.7192286,
        "altitude": 2150.537,
        "vario": 0.0302869682
    },
    {
        "time": "2022-07-30T16:14:38.000Z",
        "latitude": 60.9026,
        "longitude": 11.7189806,
        "altitude": 2150.572,
        "vario": 0.0327668728
    },
    {
        "time": "2022-07-30T16:14:39.000Z",
        "latitude": 60.9029117,
        "longitude": 11.7187335,
        "altitude": 2151.002,
        "vario": 0.0157946351
    },
    {
        "time": "2022-07-30T16:14:40.000Z",
        "latitude": 60.9032184,
        "longitude": 11.7184869,
        "altitude": 2151.483,
        "vario": -0.0179879138
    },
    {
        "time": "2022-07-30T16:14:41.000Z",
        "latitude": 60.9035222,
        "longitude": 11.7182416,
        "altitude": 2151.933,
        "vario": -0.0659199443
    },
    {
        "time": "2022-07-30T16:14:42.000Z",
        "latitude": 60.9038225,
        "longitude": 11.717997,
        "altitude": 2151.821,
        "vario": -0.1257826532
    },
    {
        "time": "2022-07-30T16:14:43.000Z",
        "latitude": 60.904121,
        "longitude": 11.7177526,
        "altitude": 2151.668,
        "vario": -0.1961664075
    },
    {
        "time": "2022-07-30T16:14:44.000Z",
        "latitude": 60.9044162,
        "longitude": 11.7175088,
        "altitude": 2151.057,
        "vario": -0.2767458798
    },
    {
        "time": "2022-07-30T16:14:45.000Z",
        "latitude": 60.904709,
        "longitude": 11.7172665,
        "altitude": 2150.352,
        "vario": -0.3684444822
    },
    {
        "time": "2022-07-30T16:14:46.000Z",
        "latitude": 60.9050008,
        "longitude": 11.7170268,
        "altitude": 2149.927,
        "vario": -0.4733732139
    },
    {
        "time": "2022-07-30T16:14:47.000Z",
        "latitude": 60.9052909,
        "longitude": 11.716791,
        "altitude": 2149.58,
        "vario": -0.5944723458
    },
    {
        "time": "2022-07-30T16:14:48.000Z",
        "latitude": 60.9055823,
        "longitude": 11.7165584,
        "altitude": 2149.264,
        "vario": -0.7349147852
    },
    {
        "time": "2022-07-30T16:14:49.000Z",
        "latitude": 60.9058757,
        "longitude": 11.7163213,
        "altitude": 2149.14,
        "vario": -0.8972812285
    },
    {
        "time": "2022-07-30T16:14:50.000Z",
        "latitude": 60.9061622,
        "longitude": 11.7160749,
        "altitude": 2149.335,
        "vario": -1.0825250087
    },
    {
        "time": "2022-07-30T16:14:51.000Z",
        "latitude": 60.9064312,
        "longitude": 11.7158179,
        "altitude": 2148.624,
        "vario": -1.2888513136
    },
    {
        "time": "2022-07-30T16:14:52.000Z",
        "latitude": 60.9066907,
        "longitude": 11.7155476,
        "altitude": 2147.154,
        "vario": -1.5106077051
    },
    {
        "time": "2022-07-30T16:14:53.000Z",
        "latitude": 60.9069574,
        "longitude": 11.7152642,
        "altitude": 2145.463,
        "vario": -1.7374216618
    },
    {
        "time": "2022-07-30T16:14:54.000Z",
        "latitude": 60.9072292,
        "longitude": 11.7149731,
        "altitude": 2143.672,
        "vario": -1.9538521079
    },
    {
        "time": "2022-07-30T16:14:55.000Z",
        "latitude": 60.9074983,
        "longitude": 11.7146779,
        "altitude": 2142.485,
        "vario": -2.1398301418
    },
    {
        "time": "2022-07-30T16:14:56.000Z",
        "latitude": 60.9077629,
        "longitude": 11.7143784,
        "altitude": 2141.217,
        "vario": -2.2721686913
    },
    {
        "time": "2022-07-30T16:14:57.000Z",
        "latitude": 60.9080263,
        "longitude": 11.7140717,
        "altitude": 2138.779,
        "vario": -2.3272178237
    },
    {
        "time": "2022-07-30T16:14:58.000Z",
        "latitude": 60.9082931,
        "longitude": 11.7137526,
        "altitude": 2134.906,
        "vario": -2.2844644913
    },
    {
        "time": "2022-07-30T16:14:59.000Z",
        "latitude": 60.9085658,
        "longitude": 11.7134167,
        "altitude": 2129.869,
        "vario": -2.1305502293
    },
    {
        "time": "2022-07-30T16:15:00.000Z",
        "latitude": 60.9088444,
        "longitude": 11.7130638,
        "altitude": 2123.632,
        "vario": -1.862902989
    },
    {
        "time": "2022-07-30T16:15:01.000Z",
        "latitude": 60.9091322,
        "longitude": 11.7126919,
        "altitude": 2117.102,
        "vario": -1.4920672299
    },
    {
        "time": "2022-07-30T16:15:02.000Z",
        "latitude": 60.9094303,
        "longitude": 11.7122996,
        "altitude": 2110.895,
        "vario": -1.0419146097
    },
    {
        "time": "2022-07-30T16:15:03.000Z",
        "latitude": 60.9097358,
        "longitude": 11.711891,
        "altitude": 2105.907,
        "vario": -0.5473696748
    },
    {
        "time": "2022-07-30T16:15:04.000Z",
        "latitude": 60.9100448,
        "longitude": 11.7114771,
        "altitude": 2105.09,
        "vario": -0.0498381357
    },
    {
        "time": "2022-07-30T16:15:05.000Z",
        "latitude": 60.9103477,
        "longitude": 11.7110772,
        "altitude": 2109.81,
        "vario": 0.4087905384
    },
    {
        "time": "2022-07-30T16:15:06.000Z",
        "latitude": 60.9106343,
        "longitude": 11.7107125,
        "altitude": 2118.045,
        "vario": 0.7923184164
    },
    {
        "time": "2022-07-30T16:15:07.000Z",
        "latitude": 60.9109026,
        "longitude": 11.7103831,
        "altitude": 2126.006,
        "vario": 1.0753161179
    },
    {
        "time": "2022-07-30T16:15:08.000Z",
        "latitude": 60.9111559,
        "longitude": 11.7100818,
        "altitude": 2132.088,
        "vario": 1.2458373328
    },
    {
        "time": "2022-07-30T16:15:09.000Z",
        "latitude": 60.9114,
        "longitude": 11.7097968,
        "altitude": 2135.06,
        "vario": 1.3053302175
    },
    {
        "time": "2022-07-30T16:15:10.000Z",
        "latitude": 60.9116409,
        "longitude": 11.7095165,
        "altitude": 2135.325,
        "vario": 1.2661139567
    },
    {
        "time": "2022-07-30T16:15:11.000Z",
        "latitude": 60.9118798,
        "longitude": 11.7092321,
        "altitude": 2134.211,
        "vario": 1.1472057491
    },
    {
        "time": "2022-07-30T16:15:12.000Z",
        "latitude": 60.9121182,
        "longitude": 11.7089404,
        "altitude": 2133.037,
        "vario": 0.9696350068
    },
    {
        "time": "2022-07-30T16:15:13.000Z",
        "latitude": 60.9123592,
        "longitude": 11.7086418,
        "altitude": 2132.845,
        "vario": 0.7524931153
    },
    {
        "time": "2022-07-30T16:15:14.000Z",
        "latitude": 60.9126009,
        "longitude": 11.708339,
        "altitude": 2133.265,
        "vario": 0.5105465112
    },
    {
        "time": "2022-07-30T16:15:15.000Z",
        "latitude": 60.9128439,
        "longitude": 11.7080325,
        "altitude": 2133.962,
        "vario": 0.2536224112
    },
    {
        "time": "2022-07-30T16:15:16.000Z",
        "latitude": 60.9130866,
        "longitude": 11.7077229,
        "altitude": 2135.222,
        "vario": -0.0124639554
    },
    {
        "time": "2022-07-30T16:15:17.000Z",
        "latitude": 60.9133276,
        "longitude": 11.7074144,
        "altitude": 2136.885,
        "vario": -0.2841323172
    },
    {
        "time": "2022-07-30T16:15:18.000Z",
        "latitude": 60.9135634,
        "longitude": 11.7071125,
        "altitude": 2137.739,
        "vario": -0.5580841213
    },
    {
        "time": "2022-07-30T16:15:19.000Z",
        "latitude": 60.9137956,
        "longitude": 11.7068166,
        "altitude": 2137.238,
        "vario": -0.829747872
    },
    {
        "time": "2022-07-30T16:15:20.000Z",
        "latitude": 60.91403,
        "longitude": 11.7065228,
        "altitude": 2135.85,
        "vario": -1.0926046802
    },
    {
        "time": "2022-07-30T16:15:21.000Z",
        "latitude": 60.9142667,
        "longitude": 11.7062276,
        "altitude": 2133.744,
        "vario": -1.3384412588
    },
    {
        "time": "2022-07-30T16:15:22.000Z",
        "latitude": 60.9145047,
        "longitude": 11.7059317,
        "altitude": 2131.114,
        "vario": -1.5582712519
    },
    {
        "time": "2022-07-30T16:15:23.000Z",
        "latitude": 60.9147436,
        "longitude": 11.7056339,
        "altitude": 2128.505,
        "vario": -1.743626891
    },
    {
        "time": "2022-07-30T16:15:24.000Z",
        "latitude": 60.9149851,
        "longitude": 11.7053347,
        "altitude": 2125.998,
        "vario": -1.8878919431
    },
    {
        "time": "2022-07-30T16:15:25.000Z",
        "latitude": 60.9152266,
        "longitude": 11.7050303,
        "altitude": 2124.203,
        "vario": -1.9873546043
    },
    {
        "time": "2022-07-30T16:15:26.000Z",
        "latitude": 60.9154669,
        "longitude": 11.7047155,
        "altitude": 2121.477,
        "vario": -2.0417954138
    },
    {
        "time": "2022-07-30T16:15:27.000Z",
        "latitude": 60.9157102,
        "longitude": 11.7043719,
        "altitude": 2116.772,
        "vario": -2.0546024763
    },
    {
        "time": "2022-07-30T16:15:28.000Z",
        "latitude": 60.9159548,
        "longitude": 11.7040097,
        "altitude": 2113.604,
        "vario": -2.0324256482
    },
    {
        "time": "2022-07-30T16:15:29.000Z",
        "latitude": 60.9161937,
        "longitude": 11.7036562,
        "altitude": 2111.93,
        "vario": -1.9843910803
    },
    {
        "time": "2022-07-30T16:15:30.000Z",
        "latitude": 60.9164321,
        "longitude": 11.7033069,
        "altitude": 2110.374,
        "vario": -1.9210318023
    },
    {
        "time": "2022-07-30T16:15:31.000Z",
        "latitude": 60.9166726,
        "longitude": 11.7029577,
        "altitude": 2108.729,
        "vario": -1.8530216982
    },
    {
        "time": "2022-07-30T16:15:32.000Z",
        "latitude": 60.9169175,
        "longitude": 11.7026072,
        "altitude": 2107.716,
        "vario": -1.7899024548
    },
    {
        "time": "2022-07-30T16:15:33.000Z",
        "latitude": 60.9171653,
        "longitude": 11.7022547,
        "altitude": 2106.528,
        "vario": -1.7390959268
    },
    {
        "time": "2022-07-30T16:15:34.000Z",
        "latitude": 60.9174187,
        "longitude": 11.7019008,
        "altitude": 2105.147,
        "vario": -1.7052329448
    },
    {
        "time": "2022-07-30T16:15:35.000Z",
        "latitude": 60.9176734,
        "longitude": 11.7015656,
        "altitude": 2103.297,
        "vario": -1.6898651583
    },
    {
        "time": "2022-07-30T16:15:36.000Z",
        "latitude": 60.9179287,
        "longitude": 11.7012732,
        "altitude": 2102.091,
        "vario": -1.6916552043
    },
    {
        "time": "2022-07-30T16:15:37.000Z",
        "latitude": 60.9181842,
        "longitude": 11.7010067,
        "altitude": 2102.305,
        "vario": -1.7069940611
    },
    {
        "time": "2022-07-30T16:15:38.000Z",
        "latitude": 60.9184471,
        "longitude": 11.7007324,
        "altitude": 2101.362,
        "vario": -1.7309734904
    },
    {
        "time": "2022-07-30T16:15:39.000Z",
        "latitude": 60.9187238,
        "longitude": 11.700441,
        "altitude": 2098.317,
        "vario": -1.758566814
    },
    {
        "time": "2022-07-30T16:15:40.000Z",
        "latitude": 60.9190033,
        "longitude": 11.7001385,
        "altitude": 2095.137,
        "vario": -1.7857711506
    },
    {
        "time": "2022-07-30T16:15:41.000Z",
        "latitude": 60.9192793,
        "longitude": 11.6998345,
        "altitude": 2092.527,
        "vario": -1.8104615415
    },
    {
        "time": "2022-07-30T16:15:42.000Z",
        "latitude": 60.9195561,
        "longitude": 11.6995268,
        "altitude": 2090.492,
        "vario": -1.8327884815
    },
    {
        "time": "2022-07-30T16:15:43.000Z",
        "latitude": 60.9198351,
        "longitude": 11.6992153,
        "altitude": 2088.765,
        "vario": -1.8550346318
    },
    {
        "time": "2022-07-30T16:15:44.000Z",
        "latitude": 60.9201142,
        "longitude": 11.6989003,
        "altitude": 2087.077,
        "vario": -1.8808522332
    },
    {
        "time": "2022-07-30T16:15:45.000Z",
        "latitude": 60.9203938,
        "longitude": 11.6985776,
        "altitude": 2085.607,
        "vario": -1.9140586622
    },
    {
        "time": "2022-07-30T16:15:46.000Z",
        "latitude": 60.9206729,
        "longitude": 11.6982447,
        "altitude": 2083.62,
        "vario": -1.9572857388
    },
    {
        "time": "2022-07-30T16:15:47.000Z",
        "latitude": 60.9209488,
        "longitude": 11.6979012,
        "altitude": 2081.706,
        "vario": -2.0107988879
    },
    {
        "time": "2022-07-30T16:15:48.000Z",
        "latitude": 60.9212185,
        "longitude": 11.6975498,
        "altitude": 2080.481,
        "vario": -2.0718748386
    },
    {
        "time": "2022-07-30T16:15:49.000Z",
        "latitude": 60.9214836,
        "longitude": 11.6971769,
        "altitude": 2080.813,
        "vario": -2.1348801631
    },
    {
        "time": "2022-07-30T16:15:50.000Z",
        "latitude": 60.9217303,
        "longitude": 11.6967645,
        "altitude": 2081.109,
        "vario": -2.1921975149
    },
    {
        "time": "2022-07-30T16:15:51.000Z",
        "latitude": 60.9219498,
        "longitude": 11.6963199,
        "altitude": 2077.833,
        "vario": -2.2358637236
    },
    {
        "time": "2022-07-30T16:15:52.000Z",
        "latitude": 60.9221435,
        "longitude": 11.695851,
        "altitude": 2071.847,
        "vario": -2.2594362558
    },
    {
        "time": "2022-07-30T16:15:53.000Z",
        "latitude": 60.9223268,
        "longitude": 11.6953775,
        "altitude": 2066.73,
        "vario": -2.2596248093
    },
    {
        "time": "2022-07-30T16:15:54.000Z",
        "latitude": 60.9225278,
        "longitude": 11.6949393,
        "altitude": 2063.02,
        "vario": -2.2372910931
    },
    {
        "time": "2022-07-30T16:15:55.000Z",
        "latitude": 60.9227657,
        "longitude": 11.6945673,
        "altitude": 2060.408,
        "vario": -2.1975057031
    },
    {
        "time": "2022-07-30T16:15:56.000Z",
        "latitude": 60.9230434,
        "longitude": 11.6942851,
        "altitude": 2058.633,
        "vario": -2.1485972502
    },
    {
        "time": "2022-07-30T16:15:57.000Z",
        "latitude": 60.9233493,
        "longitude": 11.6941219,
        "altitude": 2057.616,
        "vario": -2.1004685166
    },
    {
        "time": "2022-07-30T16:15:58.000Z",
        "latitude": 60.9236743,
        "longitude": 11.694067,
        "altitude": 2057.259,
        "vario": -2.0625993296
    },
    {
        "time": "2022-07-30T16:15:59.000Z",
        "latitude": 60.9240098,
        "longitude": 11.6940789,
        "altitude": 2056.946,
        "vario": -2.0422944363
    },
    {
        "time": "2022-07-30T16:16:00.000Z",
        "latitude": 60.9243529,
        "longitude": 11.6941181,
        "altitude": 2055.925,
        "vario": -2.0435178708
    },
    {
        "time": "2022-07-30T16:16:01.000Z",
        "latitude": 60.9247002,
        "longitude": 11.6941615,
        "altitude": 2053.898,
        "vario": -2.0664195096
    },
    {
        "time": "2022-07-30T16:16:02.000Z",
        "latitude": 60.9250439,
        "longitude": 11.6941964,
        "altitude": 2051.263,
        "vario": -2.107661062
    },
    {
        "time": "2022-07-30T16:16:03.000Z",
        "latitude": 60.9253827,
        "longitude": 11.6942214,
        "altitude": 2049.113,
        "vario": -2.1613494333
    },
    {
        "time": "2022-07-30T16:16:04.000Z",
        "latitude": 60.9257175,
        "longitude": 11.6942396,
        "altitude": 2046.441,
        "vario": -2.2201971548
    },
    {
        "time": "2022-07-30T16:16:05.000Z",
        "latitude": 60.9260558,
        "longitude": 11.6942575,
        "altitude": 2044.032,
        "vario": -2.276656744
    },
    {
        "time": "2022-07-30T16:16:06.000Z",
        "latitude": 60.926394,
        "longitude": 11.6942761,
        "altitude": 2041.833,
        "vario": -2.3237882585
    },
    {
        "time": "2022-07-30T16:16:07.000Z",
        "latitude": 60.9267293,
        "longitude": 11.6942945,
        "altitude": 2039.114,
        "vario": -2.355784086
    },
    {
        "time": "2022-07-30T16:16:08.000Z",
        "latitude": 60.9270634,
        "longitude": 11.6943142,
        "altitude": 2036.03,
        "vario": -2.3682150224
    },
    {
        "time": "2022-07-30T16:16:09.000Z",
        "latitude": 60.9273998,
        "longitude": 11.6943428,
        "altitude": 2033.316,
        "vario": -2.358061936
    },
    {
        "time": "2022-07-30T16:16:10.000Z",
        "latitude": 60.9277306,
        "longitude": 11.6943852,
        "altitude": 2031.057,
        "vario": -2.3236272609
    },
    {
        "time": "2022-07-30T16:16:11.000Z",
        "latitude": 60.9280485,
        "longitude": 11.6944363,
        "altitude": 2028.546,
        "vario": -2.2644621676
    },
    {
        "time": "2022-07-30T16:16:12.000Z",
        "latitude": 60.9283651,
        "longitude": 11.6945004,
        "altitude": 2025.788,
        "vario": -2.1814334746
    },
    {
        "time": "2022-07-30T16:16:13.000Z",
        "latitude": 60.9286846,
        "longitude": 11.6945871,
        "altitude": 2023.02,
        "vario": -2.0767972585
    },
    {
        "time": "2022-07-30T16:16:14.000Z",
        "latitude": 60.9290035,
        "longitude": 11.694703,
        "altitude": 2020.665,
        "vario": -1.9541843509
    },
    {
        "time": "2022-07-30T16:16:15.000Z",
        "latitude": 60.9293158,
        "longitude": 11.6948469,
        "altitude": 2018.587,
        "vario": -1.8185594054
    },
    {
        "time": "2022-07-30T16:16:16.000Z",
        "latitude": 60.9296273,
        "longitude": 11.6950269,
        "altitude": 2016.275,
        "vario": -1.6761277311
    },
    {
        "time": "2022-07-30T16:16:17.000Z",
        "latitude": 60.9299425,
        "longitude": 11.695244,
        "altitude": 2014.346,
        "vario": -1.5341131475
    },
    {
        "time": "2022-07-30T16:16:18.000Z",
        "latitude": 60.9302514,
        "longitude": 11.695476,
        "altitude": 2013.165,
        "vario": -1.4004242481
    },
    {
        "time": "2022-07-30T16:16:19.000Z",
        "latitude": 60.9305557,
        "longitude": 11.6957134,
        "altitude": 2012.863,
        "vario": -1.2833091351
    },
    {
        "time": "2022-07-30T16:16:20.000Z",
        "latitude": 60.930854,
        "longitude": 11.6959427,
        "altitude": 2012.529,
        "vario": -1.1910911298
    },
    {
        "time": "2022-07-30T16:16:21.000Z",
        "latitude": 60.9311481,
        "longitude": 11.6961597,
        "altitude": 2011.623,
        "vario": -1.1320196248
    },
    {
        "time": "2022-07-30T16:16:22.000Z",
        "latitude": 60.9314469,
        "longitude": 11.6963761,
        "altitude": 2010.754,
        "vario": -1.1142551061
    },
    {
        "time": "2022-07-30T16:16:23.000Z",
        "latitude": 60.9317476,
        "longitude": 11.6965905,
        "altitude": 2010.154,
        "vario": -1.1458916263
    },
    {
        "time": "2022-07-30T16:16:24.000Z",
        "latitude": 60.932049,
        "longitude": 11.6967959,
        "altitude": 2009.69,
        "vario": -1.2348269242
    },
    {
        "time": "2022-07-30T16:16:25.000Z",
        "latitude": 60.9323526,
        "longitude": 11.6969866,
        "altitude": 2009.614,
        "vario": -1.3883555684
    },
    {
        "time": "2022-07-30T16:16:26.000Z",
        "latitude": 60.9326553,
        "longitude": 11.6971531,
        "altitude": 2008.867,
        "vario": -1.6122696982
    },
    {
        "time": "2022-07-30T16:16:27.000Z",
        "latitude": 60.9329657,
        "longitude": 11.6972976,
        "altitude": 2007.396,
        "vario": -1.9093766724
    },
    {
        "time": "2022-07-30T16:16:28.000Z",
        "latitude": 60.9332882,
        "longitude": 11.6974191,
        "altitude": 2006.307,
        "vario": -2.2775270401
    },
    {
        "time": "2022-07-30T16:16:29.000Z",
        "latitude": 60.9336161,
        "longitude": 11.6975079,
        "altitude": 2005.533,
        "vario": -2.7073959501
    },
    {
        "time": "2022-07-30T16:16:30.000Z",
        "latitude": 60.9339471,
        "longitude": 11.69755,
        "altitude": 2004.286,
        "vario": -3.180584292
    },
    {
        "time": "2022-07-30T16:16:31.000Z",
        "latitude": 60.9342795,
        "longitude": 11.6975212,
        "altitude": 2002.608,
        "vario": -3.6687066972
    },
    {
        "time": "2022-07-30T16:16:32.000Z",
        "latitude": 60.9346054,
        "longitude": 11.6973873,
        "altitude": 2000.936,
        "vario": -4.1340883084
    },
    {
        "time": "2022-07-30T16:16:33.000Z",
        "latitude": 60.9349072,
        "longitude": 11.6971212,
        "altitude": 1998.328,
        "vario": -4.5324747651
    },
    {
        "time": "2022-07-30T16:16:34.000Z",
        "latitude": 60.93517,
        "longitude": 11.6967299,
        "altitude": 1993.313,
        "vario": -4.8177479014
    },
    {
        "time": "2022-07-30T16:16:35.000Z",
        "latitude": 60.9353783,
        "longitude": 11.6962331,
        "altitude": 1984.337,
        "vario": -4.9481618257
    },
    {
        "time": "2022-07-30T16:16:36.000Z",
        "latitude": 60.9355153,
        "longitude": 11.6956559,
        "altitude": 1972.748,
        "vario": -4.8930800081
    },
    {
        "time": "2022-07-30T16:16:37.000Z",
        "latitude": 60.9355708,
        "longitude": 11.695039,
        "altitude": 1959.927,
        "vario": -4.6388597201
    },
    {
        "time": "2022-07-30T16:16:38.000Z",
        "latitude": 60.935546,
        "longitude": 11.6944138,
        "altitude": 1947.584,
        "vario": -4.1925234263
    },
    {
        "time": "2022-07-30T16:16:39.000Z",
        "latitude": 60.9354441,
        "longitude": 11.6938008,
        "altitude": 1937.545,
        "vario": -3.5822762491
    },
    {
        "time": "2022-07-30T16:16:40.000Z",
        "latitude": 60.9352752,
        "longitude": 11.6932318,
        "altitude": 1931.351,
        "vario": -2.8545306084
    },
    {
        "time": "2022-07-30T16:16:41.000Z",
        "latitude": 60.9350594,
        "longitude": 11.6927437,
        "altitude": 1929.383,
        "vario": -2.0678862423
    },
    {
        "time": "2022-07-30T16:16:42.000Z",
        "latitude": 60.9348159,
        "longitude": 11.692364,
        "altitude": 1932.126,
        "vario": -1.2851865908
    },
    {
        "time": "2022-07-30T16:16:43.000Z",
        "latitude": 60.9345625,
        "longitude": 11.6920848,
        "altitude": 1937.506,
        "vario": -0.5652082584
    },
    {
        "time": "2022-07-30T16:16:44.000Z",
        "latitude": 60.9343151,
        "longitude": 11.6918785,
        "altitude": 1943.441,
        "vario": 0.0444196887
    },
    {
        "time": "2022-07-30T16:16:45.000Z",
        "latitude": 60.9340821,
        "longitude": 11.6917194,
        "altitude": 1948.213,
        "vario": 0.5119052698
    },
    {
        "time": "2022-07-30T16:16:46.000Z",
        "latitude": 60.933865,
        "longitude": 11.6915885,
        "altitude": 1951.956,
        "vario": 0.8229694552
    },
    {
        "time": "2022-07-30T16:16:47.000Z",
        "latitude": 60.9336592,
        "longitude": 11.6914755,
        "altitude": 1955.035,
        "vario": 0.9795898567
    },
    {
        "time": "2022-07-30T16:16:48.000Z",
        "latitude": 60.9334581,
        "longitude": 11.6913749,
        "altitude": 1956.775,
        "vario": 0.9965440149
    },
    {
        "time": "2022-07-30T16:16:49.000Z",
        "latitude": 60.9332586,
        "longitude": 11.6912894,
        "altitude": 1957.113,
        "vario": 0.8968305638
    },
    {
        "time": "2022-07-30T16:16:50.000Z",
        "latitude": 60.9330618,
        "longitude": 11.6912268,
        "altitude": 1957.51,
        "vario": 0.7069608441
    },
    {
        "time": "2022-07-30T16:16:51.000Z",
        "latitude": 60.9328693,
        "longitude": 11.6911884,
        "altitude": 1958.256,
        "vario": 0.4529489282
    },
    {
        "time": "2022-07-30T16:16:52.000Z",
        "latitude": 60.9326775,
        "longitude": 11.6911666,
        "altitude": 1959.127,
        "vario": 0.1575633573
    },
    {
        "time": "2022-07-30T16:16:53.000Z",
        "latitude": 60.9324908,
        "longitude": 11.6911623,
        "altitude": 1959.441,
        "vario": -0.1610386559
    },
    {
        "time": "2022-07-30T16:16:54.000Z",
        "latitude": 60.932312,
        "longitude": 11.691175,
        "altitude": 1958.764,
        "vario": -0.4895043054
    },
    {
        "time": "2022-07-30T16:16:55.000Z",
        "latitude": 60.9321361,
        "longitude": 11.691203,
        "altitude": 1957.681,
        "vario": -0.818639116
    },
    {
        "time": "2022-07-30T16:16:56.000Z",
        "latitude": 60.9319616,
        "longitude": 11.6912498,
        "altitude": 1956.488,
        "vario": -1.1422942616
    },
    {
        "time": "2022-07-30T16:16:57.000Z",
        "latitude": 60.9317852,
        "longitude": 11.6913211,
        "altitude": 1954.932,
        "vario": -1.4560878171
    },
    {
        "time": "2022-07-30T16:16:58.000Z",
        "latitude": 60.931609,
        "longitude": 11.6914312,
        "altitude": 1953.092,
        "vario": -1.7562397306
    },
    {
        "time": "2022-07-30T16:16:59.000Z",
        "latitude": 60.9314417,
        "longitude": 11.6916023,
        "altitude": 1951.513,
        "vario": -2.0387239216
    },
    {
        "time": "2022-07-30T16:17:00.000Z",
        "latitude": 60.9312895,
        "longitude": 11.691845,
        "altitude": 1949.669,
        "vario": -2.2987872396
    },
    {
        "time": "2022-07-30T16:17:01.000Z",
        "latitude": 60.9311587,
        "longitude": 11.6921563,
        "altitude": 1947.384,
        "vario": -2.5308597445
    },
    {
        "time": "2022-07-30T16:17:02.000Z",
        "latitude": 60.9310501,
        "longitude": 11.6925294,
        "altitude": 1943.897,
        "vario": -2.728834004
    },
    {
        "time": "2022-07-30T16:17:03.000Z",
        "latitude": 60.9309641,
        "longitude": 11.692963,
        "altitude": 1940.514,
        "vario": -2.8865677249
    },
    {
        "time": "2022-07-30T16:17:04.000Z",
        "latitude": 60.930905,
        "longitude": 11.6934377,
        "altitude": 1936.719,
        "vario": -2.9984951224
    },
    {
        "time": "2022-07-30T16:17:05.000Z",
        "latitude": 60.9308701,
        "longitude": 11.6939437,
        "altitude": 1931.948,
        "vario": -3.0602683835
    },
    {
        "time": "2022-07-30T16:17:06.000Z",
        "latitude": 60.9308547,
        "longitude": 11.6944714,
        "altitude": 1927.396,
        "vario": -3.0692980798
    },
    {
        "time": "2022-07-30T16:17:07.000Z",
        "latitude": 60.9308539,
        "longitude": 11.6949974,
        "altitude": 1923.758,
        "vario": -3.0251401987
    },
    {
        "time": "2022-07-30T16:17:08.000Z",
        "latitude": 60.9308611,
        "longitude": 11.6955245,
        "altitude": 1920.878,
        "vario": -2.9297502576
    },
    {
        "time": "2022-07-30T16:17:09.000Z",
        "latitude": 60.9308674,
        "longitude": 11.6960604,
        "altitude": 1917.812,
        "vario": -2.7876482394
    },
    {
        "time": "2022-07-30T16:17:10.000Z",
        "latitude": 60.9308672,
        "longitude": 11.6965839,
        "altitude": 1914.615,
        "vario": -2.6059778166
    },
    {
        "time": "2022-07-30T16:17:11.000Z",
        "latitude": 60.9308555,
        "longitude": 11.6970694,
        "altitude": 1911.268,
        "vario": -2.3944204809
    },
    {
        "time": "2022-07-30T16:17:12.000Z",
        "latitude": 60.9308243,
        "longitude": 11.6975193,
        "altitude": 1907.887,
        "vario": -2.1649111967
    },
    {
        "time": "2022-07-30T16:17:13.000Z",
        "latitude": 60.9307664,
        "longitude": 11.6979298,
        "altitude": 1904.878,
        "vario": -1.9310898058
    },
    {
        "time": "2022-07-30T16:17:14.000Z",
        "latitude": 60.9306818,
        "longitude": 11.6982873,
        "altitude": 1902.779,
        "vario": -1.7074669182
    },
    {
        "time": "2022-07-30T16:17:15.000Z",
        "latitude": 60.9305767,
        "longitude": 11.6985821,
        "altitude": 1902.002,
        "vario": -1.5082983372
    },
    {
        "time": "2022-07-30T16:17:16.000Z",
        "latitude": 60.9304557,
        "longitude": 11.6988137,
        "altitude": 1902.406,
        "vario": -1.3462522664
    },
    {
        "time": "2022-07-30T16:17:17.000Z",
        "latitude": 60.9303247,
        "longitude": 11.6989916,
        "altitude": 1903.292,
        "vario": -1.2311011351
    },
    {
        "time": "2022-07-30T16:17:18.000Z",
        "latitude": 60.9301925,
        "longitude": 11.6991314,
        "altitude": 1903.833,
        "vario": -1.1686185517
    },
    {
        "time": "2022-07-30T16:17:19.000Z",
        "latitude": 60.9300618,
        "longitude": 11.6992499,
        "altitude": 1903.454,
        "vario": -1.1598038093
    },
    {
        "time": "2022-07-30T16:17:20.000Z",
        "latitude": 60.929932,
        "longitude": 11.6993582,
        "altitude": 1902.293,
        "vario": -1.2005463863
    },
    {
        "time": "2022-07-30T16:17:21.000Z",
        "latitude": 60.9298015,
        "longitude": 11.6994586,
        "altitude": 1901.131,
        "vario": -1.2818122944
    },
    {
        "time": "2022-07-30T16:17:22.000Z",
        "latitude": 60.9296697,
        "longitude": 11.6995543,
        "altitude": 1900.71,
        "vario": -1.3903495005
    },
    {
        "time": "2022-07-30T16:17:23.000Z",
        "latitude": 60.9295384,
        "longitude": 11.699661,
        "altitude": 1900.34,
        "vario": -1.5098801763
    },
    {
        "time": "2022-07-30T16:17:24.000Z",
        "latitude": 60.9293988,
        "longitude": 11.6997915,
        "altitude": 1899.091,
        "vario": -1.6227171884
    },
    {
        "time": "2022-07-30T16:17:25.000Z",
        "latitude": 60.9292495,
        "longitude": 11.6999592,
        "altitude": 1897.072,
        "vario": -1.7117156309
    },
    {
        "time": "2022-07-30T16:17:26.000Z",
        "latitude": 60.9291033,
        "longitude": 11.7001845,
        "altitude": 1894.132,
        "vario": -1.7624042701
    },
    {
        "time": "2022-07-30T16:17:27.000Z",
        "latitude": 60.9289699,
        "longitude": 11.7004694,
        "altitude": 1890.545,
        "vario": -1.7649526941
    },
    {
        "time": "2022-07-30T16:17:28.000Z",
        "latitude": 60.9288531,
        "longitude": 11.7008114,
        "altitude": 1886.69,
        "vario": -1.7156986088
    },
    {
        "time": "2022-07-30T16:17:29.000Z",
        "latitude": 60.9287493,
        "longitude": 11.7012101,
        "altitude": 1882.69,
        "vario": -1.6179514813
    },
    {
        "time": "2022-07-30T16:17:30.000Z",
        "latitude": 60.9286572,
        "longitude": 11.7016547,
        "altitude": 1879.191,
        "vario": -1.4817517713
    },
    {
        "time": "2022-07-30T16:17:31.000Z",
        "latitude": 60.9285775,
        "longitude": 11.7021243,
        "altitude": 1877.261,
        "vario": -1.3225421271
    },
    {
        "time": "2022-07-30T16:17:32.000Z",
        "latitude": 60.9285109,
        "longitude": 11.7026055,
        "altitude": 1876.418,
        "vario": -1.1589218003
    },
    {
        "time": "2022-07-30T16:17:33.000Z",
        "latitude": 60.9284557,
        "longitude": 11.7030816,
        "altitude": 1876.64,
        "vario": -1.0097568569
    },
    {
        "time": "2022-07-30T16:17:34.000Z",
        "latitude": 60.9284093,
        "longitude": 11.7035417,
        "altitude": 1878.008,
        "vario": -0.8912190224
    },
    {
        "time": "2022-07-30T16:17:35.000Z",
        "latitude": 60.9283685,
        "longitude": 11.7039824,
        "altitude": 1879.292,
        "vario": -0.8143218796
    },
    {
        "time": "2022-07-30T16:17:36.000Z",
        "latitude": 60.9283317,
        "longitude": 11.7044076,
        "altitude": 1880.022,
        "vario": -0.783378414
    },
    {
        "time": "2022-07-30T16:17:37.000Z",
        "latitude": 60.9282958,
        "longitude": 11.704825,
        "altitude": 1880.704,
        "vario": -0.7956819199
    },
    {
        "time": "2022-07-30T16:17:38.000Z",
        "latitude": 60.9282616,
        "longitude": 11.7052418,
        "altitude": 1880.947,
        "vario": -0.8424215454
    },
    {
        "time": "2022-07-30T16:17:39.000Z",
        "latitude": 60.9282314,
        "longitude": 11.7056708,
        "altitude": 1880.321,
        "vario": -0.9106366203
    },
    {
        "time": "2022-07-30T16:17:40.000Z",
        "latitude": 60.9282086,
        "longitude": 11.706122,
        "altitude": 1878.639,
        "vario": -0.9857744678
    },
    {
        "time": "2022-07-30T16:17:41.000Z",
        "latitude": 60.9281977,
        "longitude": 11.7065971,
        "altitude": 1876.068,
        "vario": -1.0542681133
    },
    {
        "time": "2022-07-30T16:17:42.000Z",
        "latitude": 60.9282004,
        "longitude": 11.7070952,
        "altitude": 1873.074,
        "vario": -1.1056370752
    },
    {
        "time": "2022-07-30T16:17:43.000Z",
        "latitude": 60.9282135,
        "longitude": 11.7075986,
        "altitude": 1870.115,
        "vario": -1.1337799688
    },
    {
        "time": "2022-07-30T16:17:44.000Z",
        "latitude": 60.9282281,
        "longitude": 11.7080918,
        "altitude": 1868.262,
        "vario": -1.1372889815
    },
    {
        "time": "2022-07-30T16:17:45.000Z",
        "latitude": 60.9282383,
        "longitude": 11.7085628,
        "altitude": 1867.368,
        "vario": -1.1188416807
    },
    {
        "time": "2022-07-30T16:17:46.000Z",
        "latitude": 60.9282425,
        "longitude": 11.7090145,
        "altitude": 1867.053,
        "vario": -1.0839339182
    },
    {
        "time": "2022-07-30T16:17:47.000Z",
        "latitude": 60.9282409,
        "longitude": 11.7094604,
        "altitude": 1866.491,
        "vario": -1.039341884
    },
    {
        "time": "2022-07-30T16:17:48.000Z",
        "latitude": 60.9282316,
        "longitude": 11.7099193,
        "altitude": 1866.047,
        "vario": -0.9916952899
    },
    {
        "time": "2022-07-30T16:17:49.000Z",
        "latitude": 60.9282161,
        "longitude": 11.7103875,
        "altitude": 1865.585,
        "vario": -0.9464298606
    },
    {
        "time": "2022-07-30T16:17:50.000Z",
        "latitude": 60.9282017,
        "longitude": 11.7108506,
        "altitude": 1864.255,
        "vario": -0.9072858233
    },
    {
        "time": "2022-07-30T16:17:51.000Z",
        "latitude": 60.9281872,
        "longitude": 11.7112976,
        "altitude": 1863.473,
        "vario": -0.8763533452
    },
    {
        "time": "2022-07-30T16:17:52.000Z",
        "latitude": 60.9281747,
        "longitude": 11.7117275,
        "altitude": 1863.302,
        "vario": -0.8545000853
    },
    {
        "time": "2022-07-30T16:17:53.000Z",
        "latitude": 60.9281663,
        "longitude": 11.7121596,
        "altitude": 1862.046,
        "vario": -0.8419836532
    },
    {
        "time": "2022-07-30T16:17:54.000Z",
        "latitude": 60.9281573,
        "longitude": 11.7126212,
        "altitude": 1860.946,
        "vario": -0.8389658178
    },
    {
        "time": "2022-07-30T16:17:55.000Z",
        "latitude": 60.9281544,
        "longitude": 11.7131091,
        "altitude": 1859.987,
        "vario": -0.8456730955
    },
    {
        "time": "2022-07-30T16:17:56.000Z",
        "latitude": 60.928168,
        "longitude": 11.7136077,
        "altitude": 1859.322,
        "vario": -0.8621827611
    },
    {
        "time": "2022-07-30T16:17:57.000Z",
        "latitude": 60.9281996,
        "longitude": 11.7141077,
        "altitude": 1858.304,
        "vario": -0.8878721563
    },
    {
        "time": "2022-07-30T16:17:58.000Z",
        "latitude": 60.928244,
        "longitude": 11.7146093,
        "altitude": 1857.017,
        "vario": -0.9206194157
    },
    {
        "time": "2022-07-30T16:17:59.000Z",
        "latitude": 60.928292,
        "longitude": 11.7151087,
        "altitude": 1856.604,
        "vario": -0.9561165215
    },
    {
        "time": "2022-07-30T16:18:00.000Z",
        "latitude": 60.9283403,
        "longitude": 11.7155996,
        "altitude": 1857.349,
        "vario": -0.9876257673
    },
    {
        "time": "2022-07-30T16:18:01.000Z",
        "latitude": 60.9283844,
        "longitude": 11.7160795,
        "altitude": 1857.759,
        "vario": -1.0063753202
    },
    {
        "time": "2022-07-30T16:18:02.000Z",
        "latitude": 60.9284239,
        "longitude": 11.7165545,
        "altitude": 1857.113,
        "vario": -1.002718519
    },
    {
        "time": "2022-07-30T16:18:03.000Z",
        "latitude": 60.9284583,
        "longitude": 11.7170451,
        "altitude": 1855.322,
        "vario": -0.9679412493
    },
    {
        "time": "2022-07-30T16:18:04.000Z",
        "latitude": 60.9284898,
        "longitude": 11.7175598,
        "altitude": 1852.086,
        "vario": -0.896396125
    },
    {
        "time": "2022-07-30T16:18:05.000Z",
        "latitude": 60.9285212,
        "longitude": 11.7180856,
        "altitude": 1847.911,
        "vario": -0.787454355
    },
    {
        "time": "2022-07-30T16:18:06.000Z",
        "latitude": 60.9285468,
        "longitude": 11.7186165,
        "altitude": 1844.548,
        "vario": -0.6467787481
    },
    {
        "time": "2022-07-30T16:18:07.000Z",
        "latitude": 60.9285624,
        "longitude": 11.7191403,
        "altitude": 1842.943,
        "vario": -0.4865638303
    },
    {
        "time": "2022-07-30T16:18:08.000Z",
        "latitude": 60.9285672,
        "longitude": 11.7196701,
        "altitude": 1843.389,
        "vario": -0.324558407
    },
    {
        "time": "2022-07-30T16:18:09.000Z",
        "latitude": 60.9285638,
        "longitude": 11.72021,
        "altitude": 1844.635,
        "vario": -0.1819522635
    },
    {
        "time": "2022-07-30T16:18:10.000Z",
        "latitude": 60.928559,
        "longitude": 11.7207404,
        "altitude": 1845.955,
        "vario": -0.0804574737
    },
    {
        "time": "2022-07-30T16:18:11.000Z",
        "latitude": 60.9285555,
        "longitude": 11.7212515,
        "altitude": 1847.209,
        "vario": -0.0391002156
    },
    {
        "time": "2022-07-30T16:18:12.000Z",
        "latitude": 60.9285516,
        "longitude": 11.7217542,
        "altitude": 1848.966,
        "vario": -0.0712055578
    },
    {
        "time": "2022-07-30T16:18:13.000Z",
        "latitude": 60.9285499,
        "longitude": 11.7222612,
        "altitude": 1851.273,
        "vario": -0.1820417339
    },
    {
        "time": "2022-07-30T16:18:14.000Z",
        "latitude": 60.9285536,
        "longitude": 11.7227721,
        "altitude": 1853.475,
        "vario": -0.367571435
    },
    {
        "time": "2022-07-30T16:18:15.000Z",
        "latitude": 60.928568,
        "longitude": 11.7232866,
        "altitude": 1854.488,
        "vario": -0.61444743
    },
    {
        "time": "2022-07-30T16:18:16.000Z",
        "latitude": 60.9286007,
        "longitude": 11.7238132,
        "altitude": 1854.762,
        "vario": -0.9012927848
    },
    {
        "time": "2022-07-30T16:18:17.000Z",
        "latitude": 60.9286596,
        "longitude": 11.7243529,
        "altitude": 1854.425,
        "vario": -1.2011878731
    },
    {
        "time": "2022-07-30T16:18:18.000Z",
        "latitude": 60.9287544,
        "longitude": 11.7249008,
        "altitude": 1852.638,
        "vario": -1.4850555703
    },
    {
        "time": "2022-07-30T16:18:19.000Z",
        "latitude": 60.9288965,
        "longitude": 11.7254629,
        "altitude": 1849.729,
        "vario": -1.7254772404
    },
    {
        "time": "2022-07-30T16:18:20.000Z",
        "latitude": 60.9290964,
        "longitude": 11.7260076,
        "altitude": 1845.572,
        "vario": -1.9003369871
    },
    {
        "time": "2022-07-30T16:18:21.000Z",
        "latitude": 60.9293569,
        "longitude": 11.726477,
        "altitude": 1840.168,
        "vario": -1.9957381538
    },
    {
        "time": "2022-07-30T16:18:22.000Z",
        "latitude": 60.92967,
        "longitude": 11.726847,
        "altitude": 1834.287,
        "vario": -2.0076775189
    },
    {
        "time": "2022-07-30T16:18:23.000Z",
        "latitude": 60.9300194,
        "longitude": 11.7270962,
        "altitude": 1829.129,
        "vario": -1.9420608436
    },
    {
        "time": "2022-07-30T16:18:24.000Z",
        "latitude": 60.9303846,
        "longitude": 11.7272295,
        "altitude": 1825.915,
        "vario": -1.813071697
    },
    {
        "time": "2022-07-30T16:18:25.000Z",
        "latitude": 60.9307489,
        "longitude": 11.7272824,
        "altitude": 1824.568,
        "vario": -1.6402820914
    },
    {
        "time": "2022-07-30T16:18:26.000Z",
        "latitude": 60.9311069,
        "longitude": 11.7272927,
        "altitude": 1824.537,
        "vario": -1.4450604522
    },
    {
        "time": "2022-07-30T16:18:27.000Z",
        "latitude": 60.9314591,
        "longitude": 11.7272871,
        "altitude": 1825.532,
        "vario": -1.2470413799
    },
    {
        "time": "2022-07-30T16:18:28.000Z",
        "latitude": 60.9318064,
        "longitude": 11.7272816,
        "altitude": 1826.795,
        "vario": -1.0614072338
    },
    {
        "time": "2022-07-30T16:18:29.000Z",
        "latitude": 60.9321447,
        "longitude": 11.7272841,
        "altitude": 1827.767,
        "vario": -0.8974763243
    },
    {
        "time": "2022-07-30T16:18:30.000Z",
        "latitude": 60.932472,
        "longitude": 11.727301,
        "altitude": 1827.607,
        "vario": -0.7587292384
    },
    {
        "time": "2022-07-30T16:18:31.000Z",
        "latitude": 60.9327917,
        "longitude": 11.7273472,
        "altitude": 1826.256,
        "vario": -0.6440274767
    },
    {
        "time": "2022-07-30T16:18:32.000Z",
        "latitude": 60.9331073,
        "longitude": 11.7274429,
        "altitude": 1824.387,
        "vario": -0.5496141429
    },
    {
        "time": "2022-07-30T16:18:33.000Z",
        "latitude": 60.9334166,
        "longitude": 11.7276104,
        "altitude": 1822.169,
        "vario": -0.4712917634
    },
    {
        "time": "2022-07-30T16:18:34.000Z",
        "latitude": 60.9337108,
        "longitude": 11.7278676,
        "altitude": 1820.717,
        "vario": -0.4061712761
    },
    {
        "time": "2022-07-30T16:18:35.000Z",
        "latitude": 60.9339649,
        "longitude": 11.7282483,
        "altitude": 1820.817,
        "vario": -0.3537023721
    },
    {
        "time": "2022-07-30T16:18:36.000Z",
        "latitude": 60.9341896,
        "longitude": 11.7286697,
        "altitude": 1821.756,
        "vario": -0.3158834121
    },
    {
        "time": "2022-07-30T16:18:37.000Z",
        "latitude": 60.9343456,
        "longitude": 11.7291666,
        "altitude": 1822.676,
        "vario": -0.2967071037
    },
    {
        "time": "2022-07-30T16:18:38.000Z",
        "latitude": 60.9344182,
        "longitude": 11.7296778,
        "altitude": 1823.059,
        "vario": -0.3011009336
    },
    {
        "time": "2022-07-30T16:18:39.000Z",
        "latitude": 60.9344047,
        "longitude": 11.7301557,
        "altitude": 1822.457,
        "vario": -0.3337005579
    },
    {
        "time": "2022-07-30T16:18:40.000Z",
        "latitude": 60.9343198,
        "longitude": 11.73055,
        "altitude": 1821.657,
        "vario": -0.3976793671
    },
    {
        "time": "2022-07-30T16:18:41.000Z",
        "latitude": 60.9341858,
        "longitude": 11.7308621,
        "altitude": 1821.893,
        "vario": -0.4938365651
    },
    {
        "time": "2022-07-30T16:18:42.000Z",
        "latitude": 60.9340285,
        "longitude": 11.7311218,
        "altitude": 1823.05,
        "vario": -0.6200098255
    },
    {
        "time": "2022-07-30T16:18:43.000Z",
        "latitude": 60.933862,
        "longitude": 11.7313734,
        "altitude": 1823.453,
        "vario": -0.7708368822
    },
    {
        "time": "2022-07-30T16:18:44.000Z",
        "latitude": 60.9336922,
        "longitude": 11.7316184,
        "altitude": 1823.322,
        "vario": -0.9379990146
    },
    {
        "time": "2022-07-30T16:18:45.000Z",
        "latitude": 60.933523,
        "longitude": 11.7318614,
        "altitude": 1822.386,
        "vario": -1.1108783459
    },
    {
        "time": "2022-07-30T16:18:46.000Z",
        "latitude": 60.9333532,
        "longitude": 11.7321035,
        "altitude": 1820.45,
        "vario": -1.2775207091
    },
    {
        "time": "2022-07-30T16:18:47.000Z",
        "latitude": 60.9331803,
        "longitude": 11.7323421,
        "altitude": 1818.221,
        "vario": -1.4258731653
    },
    {
        "time": "2022-07-30T16:18:48.000Z",
        "latitude": 60.9330037,
        "longitude": 11.7325815,
        "altitude": 1816.186,
        "vario": -1.5451219691
    },
    {
        "time": "2022-07-30T16:18:49.000Z",
        "latitude": 60.9328227,
        "longitude": 11.7328262,
        "altitude": 1814.406,
        "vario": -1.6269198197
    },
    {
        "time": "2022-07-30T16:18:50.000Z",
        "latitude": 60.9326414,
        "longitude": 11.733073,
        "altitude": 1811.686,
        "vario": -1.6663318829
    },
    {
        "time": "2022-07-30T16:18:51.000Z",
        "latitude": 60.9324588,
        "longitude": 11.7333102,
        "altitude": 1807.566,
        "vario": -1.6623671628
    },
    {
        "time": "2022-07-30T16:18:52.000Z",
        "latitude": 60.9322681,
        "longitude": 11.7334894,
        "altitude": 1804.493,
        "vario": -1.6180209916
    },
    {
        "time": "2022-07-30T16:18:53.000Z",
        "latitude": 60.9320777,
        "longitude": 11.733552,
        "altitude": 1802.715,
        "vario": -1.5397566271
    },
    {
        "time": "2022-07-30T16:18:54.000Z",
        "latitude": 60.9318977,
        "longitude": 11.7334854,
        "altitude": 1801.473,
        "vario": -1.4366752215
    },
    {
        "time": "2022-07-30T16:18:55.000Z",
        "latitude": 60.9317452,
        "longitude": 11.7332822,
        "altitude": 1800.639,
        "vario": -1.3195112718
    },
    {
        "time": "2022-07-30T16:18:56.000Z",
        "latitude": 60.9316437,
        "longitude": 11.732957,
        "altitude": 1800.062,
        "vario": -1.1995868392
    },
    {
        "time": "2022-07-30T16:18:57.000Z",
        "latitude": 60.931607,
        "longitude": 11.7325476,
        "altitude": 1799.248,
        "vario": -1.0879718824
    },
    {
        "time": "2022-07-30T16:18:58.000Z",
        "latitude": 60.9316375,
        "longitude": 11.7320953,
        "altitude": 1798.041,
        "vario": -0.9948872311
    },
    {
        "time": "2022-07-30T16:18:59.000Z",
        "latitude": 60.9317417,
        "longitude": 11.7316361,
        "altitude": 1796.789,
        "vario": -0.9294188227
    },
    {
        "time": "2022-07-30T16:19:00.000Z",
        "latitude": 60.931918,
        "longitude": 11.7312002,
        "altitude": 1796.657,
        "vario": -0.8994661467
    },
    {
        "time": "2022-07-30T16:19:01.000Z",
        "latitude": 60.9321327,
        "longitude": 11.7307857,
        "altitude": 1797.783,
        "vario": -0.9117827524
    },
    {
        "time": "2022-07-30T16:19:02.000Z",
        "latitude": 60.9323542,
        "longitude": 11.7303752,
        "altitude": 1797.796,
        "vario": -0.9719185005
    },
    {
        "time": "2022-07-30T16:19:03.000Z",
        "latitude": 60.9325743,
        "longitude": 11.7299587,
        "altitude": 1796.2,
        "vario": -1.0838951476
    },
    {
        "time": "2022-07-30T16:19:04.000Z",
        "latitude": 60.9327912,
        "longitude": 11.729534,
        "altitude": 1795.254,
        "vario": -1.2495381547
    },
    {
        "time": "2022-07-30T16:19:05.000Z",
        "latitude": 60.9330048,
        "longitude": 11.7291028,
        "altitude": 1794.721,
        "vario": -1.4673994924
    },
    {
        "time": "2022-07-30T16:19:06.000Z",
        "latitude": 60.9332117,
        "longitude": 11.7286596,
        "altitude": 1793.833,
        "vario": -1.7314524236
    },
    {
        "time": "2022-07-30T16:19:07.000Z",
        "latitude": 60.9334102,
        "longitude": 11.728199,
        "altitude": 1793.17,
        "vario": -2.029917641
    },
    {
        "time": "2022-07-30T16:19:08.000Z",
        "latitude": 60.9335927,
        "longitude": 11.727717,
        "altitude": 1792.872,
        "vario": -2.3446109196
    },
    {
        "time": "2022-07-30T16:19:09.000Z",
        "latitude": 60.93375,
        "longitude": 11.7272031,
        "altitude": 1792.113,
        "vario": -2.6512452996
    },
    {
        "time": "2022-07-30T16:19:10.000Z",
        "latitude": 60.9338585,
        "longitude": 11.7266547,
        "altitude": 1790.414,
        "vario": -2.9209939157
    },
    {
        "time": "2022-07-30T16:19:11.000Z",
        "latitude": 60.9338847,
        "longitude": 11.7260916,
        "altitude": 1787.238,
        "vario": -3.1233285447
    },
    {
        "time": "2022-07-30T16:19:12.000Z",
        "latitude": 60.9338206,
        "longitude": 11.7255772,
        "altitude": 1781.938,
        "vario": -3.2298209244
    },
    {
        "time": "2022-07-30T16:19:13.000Z",
        "latitude": 60.9336697,
        "longitude": 11.7251458,
        "altitude": 1773.003,
        "vario": -3.2183025798
    },
    {
        "time": "2022-07-30T16:19:14.000Z",
        "latitude": 60.9334317,
        "longitude": 11.7249669,
        "altitude": 1764.273,
        "vario": -3.076667961
    },
    {
        "time": "2022-07-30T16:19:15.000Z",
        "latitude": 60.9331635,
        "longitude": 11.7250039,
        "altitude": 1756.54,
        "vario": -2.8056732729
    },
    {
        "time": "2022-07-30T16:19:16.000Z",
        "latitude": 60.9329141,
        "longitude": 11.7253973,
        "altitude": 1751.804,
        "vario": -2.4201175875
    },
    {
        "time": "2022-07-30T16:19:17.000Z",
        "latitude": 60.9327339,
        "longitude": 11.7260167,
        "altitude": 1748.955,
        "vario": -1.9481340388
    },
    {
        "time": "2022-07-30T16:19:18.000Z",
        "latitude": 60.9326662,
        "longitude": 11.7267832,
        "altitude": 1747.345,
        "vario": -1.4287574078
    },
    {
        "time": "2022-07-30T16:19:19.000Z",
        "latitude": 60.9327102,
        "longitude": 11.7276054,
        "altitude": 1746.888,
        "vario": -0.9080938731
    },
    {
        "time": "2022-07-30T16:19:20.000Z",
        "latitude": 60.9328497,
        "longitude": 11.7284086,
        "altitude": 1747.296,
        "vario": -0.434581528
    },
    {
        "time": "2022-07-30T16:19:21.000Z",
        "latitude": 60.9330699,
        "longitude": 11.7291472,
        "altitude": 1749.005,
        "vario": -0.0538710262
    },
    {
        "time": "2022-07-30T16:19:22.000Z",
        "latitude": 60.9333487,
        "longitude": 11.7297959,
        "altitude": 1751.912,
        "vario": 0.1961262232
    },
    {
        "time": "2022-07-30T16:19:23.000Z",
        "latitude": 60.9336653,
        "longitude": 11.7303425,
        "altitude": 1755.7,
        "vario": 0.2894938325
    },
    {
        "time": "2022-07-30T16:19:24.000Z",
        "latitude": 60.934001,
        "longitude": 11.7307907,
        "altitude": 1760.204,
        "vario": 0.2155095792
    },
    {
        "time": "2022-07-30T16:19:25.000Z",
        "latitude": 60.9343461,
        "longitude": 11.7311475,
        "altitude": 1764.801,
        "vario": -0.0195923067
    },
    {
        "time": "2022-07-30T16:19:26.000Z",
        "latitude": 60.9346927,
        "longitude": 11.7314294,
        "altitude": 1768.963,
        "vario": -0.392734701
    },
    {
        "time": "2022-07-30T16:19:27.000Z",
        "latitude": 60.9350349,
        "longitude": 11.7316537,
        "altitude": 1771.493,
        "vario": -0.8662393927
    },
    {
        "time": "2022-07-30T16:19:28.000Z",
        "latitude": 60.9353707,
        "longitude": 11.7318371,
        "altitude": 1771.979,
        "vario": -1.3920453665
    },
    {
        "time": "2022-07-30T16:19:29.000Z",
        "latitude": 60.9357071,
        "longitude": 11.7320015,
        "altitude": 1769.701,
        "vario": -1.9174728167
    },
    {
        "time": "2022-07-30T16:19:30.000Z",
        "latitude": 60.9360523,
        "longitude": 11.7321563,
        "altitude": 1765.153,
        "vario": -2.3917687386
    },
    {
        "time": "2022-07-30T16:19:31.000Z",
        "latitude": 60.9364079,
        "longitude": 11.7323068,
        "altitude": 1757.821,
        "vario": -2.7723758852
    },
    {
        "time": "2022-07-30T16:19:32.000Z",
        "latitude": 60.9367804,
        "longitude": 11.7324532,
        "altitude": 1748.654,
        "vario": -3.0298249996
    },
    {
        "time": "2022-07-30T16:19:33.000Z",
        "latitude": 60.9371719,
        "longitude": 11.7326051,
        "altitude": 1739.282,
        "vario": -3.1503087258
    },
    {
        "time": "2022-07-30T16:19:34.000Z",
        "latitude": 60.9375684,
        "longitude": 11.7328004,
        "altitude": 1731.076,
        "vario": -3.135547154
    },
    {
        "time": "2022-07-30T16:19:35.000Z",
        "latitude": 60.937947,
        "longitude": 11.7331247,
        "altitude": 1726.362,
        "vario": -2.9999987179
    },
    {
        "time": "2022-07-30T16:19:36.000Z",
        "latitude": 60.9382709,
        "longitude": 11.733626,
        "altitude": 1725.103,
        "vario": -2.7662094782
    },
    {
        "time": "2022-07-30T16:19:37.000Z",
        "latitude": 60.9385067,
        "longitude": 11.7342709,
        "altitude": 1725.622,
        "vario": -2.4595041157
    },
    {
        "time": "2022-07-30T16:19:38.000Z",
        "latitude": 60.9386265,
        "longitude": 11.7349961,
        "altitude": 1726.722,
        "vario": -2.1032535952
    },
    {
        "time": "2022-07-30T16:19:39.000Z",
        "latitude": 60.9386005,
        "longitude": 11.7356901,
        "altitude": 1726.622,
        "vario": -1.7157157078
    },
    {
        "time": "2022-07-30T16:19:40.000Z",
        "latitude": 60.9384348,
        "longitude": 11.7362002,
        "altitude": 1724.947,
        "vario": -1.3089390758
    },
    {
        "time": "2022-07-30T16:19:41.000Z",
        "latitude": 60.9381888,
        "longitude": 11.7364256,
        "altitude": 1721.64,
        "vario": -0.8897469322
    },
    {
        "time": "2022-07-30T16:19:42.000Z",
        "latitude": 60.9379391,
        "longitude": 11.7363289,
        "altitude": 1718.789,
        "vario": -0.4622431192
    },
    {
        "time": "2022-07-30T16:19:43.000Z",
        "latitude": 60.9377598,
        "longitude": 11.735953,
        "altitude": 1717.087,
        "vario": -0.0310270641
    },
    {
        "time": "2022-07-30T16:19:44.000Z",
        "latitude": 60.9377014,
        "longitude": 11.7354018,
        "altitude": 1716.663,
        "vario": 0.3958186735
    },
    {
        "time": "2022-07-30T16:19:45.000Z",
        "latitude": 60.9377885,
        "longitude": 11.7348141,
        "altitude": 1717.144,
        "vario": 0.8046995833
    },
    {
        "time": "2022-07-30T16:19:46.000Z",
        "latitude": 60.9380162,
        "longitude": 11.7343269,
        "altitude": 1718.019,
        "vario": 1.1758364612
    },
    {
        "time": "2022-07-30T16:19:47.000Z",
        "latitude": 60.9383417,
        "longitude": 11.7340319,
        "altitude": 1720.242,
        "vario": 1.4840986587
    },
    {
        "time": "2022-07-30T16:19:48.000Z",
        "latitude": 60.9387088,
        "longitude": 11.7338725,
        "altitude": 1723.903,
        "vario": 1.7012955261
    },
    {
        "time": "2022-07-30T16:19:49.000Z",
        "latitude": 60.9390887,
        "longitude": 11.7337508,
        "altitude": 1727.998,
        "vario": 1.7997065008
    },
    {
        "time": "2022-07-30T16:19:50.000Z",
        "latitude": 60.9394745,
        "longitude": 11.7336262,
        "altitude": 1731.332,
        "vario": 1.756452645
    },
    {
        "time": "2022-07-30T16:19:51.000Z",
        "latitude": 60.9398556,
        "longitude": 11.7334818,
        "altitude": 1734.744,
        "vario": 1.5581451835
    },
    {
        "time": "2022-07-30T16:19:52.000Z",
        "latitude": 60.9402174,
        "longitude": 11.7333075,
        "altitude": 1739.325,
        "vario": 1.2051019504
    },
    {
        "time": "2022-07-30T16:19:53.000Z",
        "latitude": 60.9405585,
        "longitude": 11.7330897,
        "altitude": 1744.965,
        "vario": 0.7143368418
    },
    {
        "time": "2022-07-30T16:19:54.000Z",
        "latitude": 60.9408823,
        "longitude": 11.7328111,
        "altitude": 1751.306,
        "vario": 0.120458492
    },
    {
        "time": "2022-07-30T16:19:55.000Z",
        "latitude": 60.9411756,
        "longitude": 11.7324583,
        "altitude": 1756.286,
        "vario": -0.5262369619
    },
    {
        "time": "2022-07-30T16:19:56.000Z",
        "latitude": 60.9414212,
        "longitude": 11.7320433,
        "altitude": 1757.622,
        "vario": -1.1647079728
    },
    {
        "time": "2022-07-30T16:19:57.000Z",
        "latitude": 60.9416089,
        "longitude": 11.7315851,
        "altitude": 1754.211,
        "vario": -1.7307413116
    },
    {
        "time": "2022-07-30T16:19:58.000Z",
        "latitude": 60.9417339,
        "longitude": 11.7310816,
        "altitude": 1746.8,
        "vario": -2.16606867
    },
    {
        "time": "2022-07-30T16:19:59.000Z",
        "latitude": 60.9417919,
        "longitude": 11.7305323,
        "altitude": 1735.351,
        "vario": -2.4274138555
    },
    {
        "time": "2022-07-30T16:20:00.000Z",
        "latitude": 60.9417756,
        "longitude": 11.7299735,
        "altitude": 1722.718,
        "vario": -2.4936991944
    },
    {
        "time": "2022-07-30T16:20:01.000Z",
        "latitude": 60.9416767,
        "longitude": 11.7294463,
        "altitude": 1711.005,
        "vario": -2.3698266193
    },
    {
        "time": "2022-07-30T16:20:02.000Z",
        "latitude": 60.9415048,
        "longitude": 11.7289909,
        "altitude": 1703.858,
        "vario": -2.086154507
    },
    {
        "time": "2022-07-30T16:20:03.000Z",
        "latitude": 60.9412746,
        "longitude": 11.7286248,
        "altitude": 1702.075,
        "vario": -1.6937330273
    },
    {
        "time": "2022-07-30T16:20:04.000Z",
        "latitude": 60.9410221,
        "longitude": 11.7283485,
        "altitude": 1704.099,
        "vario": -1.2562275682
    },
    {
        "time": "2022-07-30T16:20:05.000Z",
        "latitude": 60.9407778,
        "longitude": 11.7281487,
        "altitude": 1707.701,
        "vario": -0.8401544299
    },
    {
        "time": "2022-07-30T16:20:06.000Z",
        "latitude": 60.9405488,
        "longitude": 11.7279946,
        "altitude": 1712.243,
        "vario": -0.5051926986
    },
    {
        "time": "2022-07-30T16:20:07.000Z",
        "latitude": 60.9403312,
        "longitude": 11.7278629,
        "altitude": 1717.22,
        "vario": -0.2961398376
    },
    {
        "time": "2022-07-30T16:20:08.000Z",
        "latitude": 60.9401227,
        "longitude": 11.7277486,
        "altitude": 1721.605,
        "vario": -0.237634874
    },
    {
        "time": "2022-07-30T16:20:09.000Z",
        "latitude": 60.9399205,
        "longitude": 11.7276504,
        "altitude": 1724.193,
        "vario": -0.3321284858
    },
    {
        "time": "2022-07-30T16:20:10.000Z",
        "latitude": 60.9397198,
        "longitude": 11.7275671,
        "altitude": 1725.036,
        "vario": -0.5609564684
    },
    {
        "time": "2022-07-30T16:20:11.000Z",
        "latitude": 60.9395179,
        "longitude": 11.7275067,
        "altitude": 1725.491,
        "vario": -0.8880111797
    },
    {
        "time": "2022-07-30T16:20:12.000Z",
        "latitude": 60.9393105,
        "longitude": 11.7274862,
        "altitude": 1725.812,
        "vario": -1.2652477724
    },
    {
        "time": "2022-07-30T16:20:13.000Z",
        "latitude": 60.9390969,
        "longitude": 11.7275306,
        "altitude": 1724.812,
        "vario": -1.6392566723
    },
    {
        "time": "2022-07-30T16:20:14.000Z",
        "latitude": 60.9388822,
        "longitude": 11.7276687,
        "altitude": 1722.021,
        "vario": -1.9582087478
    },
    {
        "time": "2022-07-30T16:20:15.000Z",
        "latitude": 60.9386717,
        "longitude": 11.7279206,
        "altitude": 1716.722,
        "vario": -2.1783763557
    },
    {
        "time": "2022-07-30T16:20:16.000Z",
        "latitude": 60.9384712,
        "longitude": 11.7283158,
        "altitude": 1710.167,
        "vario": -2.269511747
    },
    {
        "time": "2022-07-30T16:20:17.000Z",
        "latitude": 60.9383025,
        "longitude": 11.7288553,
        "altitude": 1701.884,
        "vario": -2.2184188736
    },
    {
        "time": "2022-07-30T16:20:18.000Z",
        "latitude": 60.9381888,
        "longitude": 11.7295164,
        "altitude": 1693.051,
        "vario": -2.0301687338
    },
    {
        "time": "2022-07-30T16:20:19.000Z",
        "latitude": 60.9381504,
        "longitude": 11.7302781,
        "altitude": 1686.301,
        "vario": -1.726745572
    },
    {
        "time": "2022-07-30T16:20:20.000Z",
        "latitude": 60.9381923,
        "longitude": 11.7310956,
        "altitude": 1683.969,
        "vario": -1.3433113801
    },
    {
        "time": "2022-07-30T16:20:21.000Z",
        "latitude": 60.938297,
        "longitude": 11.7319105,
        "altitude": 1685.303,
        "vario": -0.9226881435
    },
    {
        "time": "2022-07-30T16:20:22.000Z",
        "latitude": 60.9384359,
        "longitude": 11.7326816,
        "altitude": 1688.783,
        "vario": -0.509043014
    },
    {
        "time": "2022-07-30T16:20:23.000Z",
        "latitude": 60.9385852,
        "longitude": 11.7334003,
        "altitude": 1692.711,
        "vario": -0.1418762615
    },
    {
        "time": "2022-07-30T16:20:24.000Z",
        "latitude": 60.9387346,
        "longitude": 11.7340923,
        "altitude": 1695.775,
        "vario": 0.1487414029
    },
    {
        "time": "2022-07-30T16:20:25.000Z",
        "latitude": 60.9388828,
        "longitude": 11.734783,
        "altitude": 1698.282,
        "vario": 0.3450533578
    },
    {
        "time": "2022-07-30T16:20:26.000Z",
        "latitude": 60.9390313,
        "longitude": 11.7354685,
        "altitude": 1700.214,
        "vario": 0.4424031381
    },
    {
        "time": "2022-07-30T16:20:27.000Z",
        "latitude": 60.9391798,
        "longitude": 11.7361395,
        "altitude": 1701.061,
        "vario": 0.4481127254
    },
    {
        "time": "2022-07-30T16:20:28.000Z",
        "latitude": 60.9393263,
        "longitude": 11.7367962,
        "altitude": 1702.263,
        "vario": 0.3789522039
    },
    {
        "time": "2022-07-30T16:20:29.000Z",
        "latitude": 60.9394687,
        "longitude": 11.7374427,
        "altitude": 1703.685,
        "vario": 0.2577911039
    },
    {
        "time": "2022-07-30T16:20:30.000Z",
        "latitude": 60.9396061,
        "longitude": 11.7380843,
        "altitude": 1704.468,
        "vario": 0.1100604054
    },
    {
        "time": "2022-07-30T16:20:31.000Z",
        "latitude": 60.9397377,
        "longitude": 11.7387179,
        "altitude": 1704.199,
        "vario": -0.0394512244
    },
    {
        "time": "2022-07-30T16:20:32.000Z",
        "latitude": 60.9398616,
        "longitude": 11.7393508,
        "altitude": 1702.531,
        "vario": -0.1691263364
    },
    {
        "time": "2022-07-30T16:20:33.000Z",
        "latitude": 60.9399735,
        "longitude": 11.7400002,
        "altitude": 1700.004,
        "vario": -0.262267805
    },
    {
        "time": "2022-07-30T16:20:34.000Z",
        "latitude": 60.9400606,
        "longitude": 11.7406637,
        "altitude": 1697.592,
        "vario": -0.3079874511
    },
    {
        "time": "2022-07-30T16:20:35.000Z",
        "latitude": 60.9401059,
        "longitude": 11.7413277,
        "altitude": 1695.718,
        "vario": -0.3013137292
    },
    {
        "time": "2022-07-30T16:20:36.000Z",
        "latitude": 60.9400952,
        "longitude": 11.7419851,
        "altitude": 1694.922,
        "vario": -0.2427789856
    },
    {
        "time": "2022-07-30T16:20:37.000Z",
        "latitude": 60.9400227,
        "longitude": 11.7426045,
        "altitude": 1694.996,
        "vario": -0.1376302767
    },
    {
        "time": "2022-07-30T16:20:38.000Z",
        "latitude": 60.9398876,
        "longitude": 11.7431342,
        "altitude": 1695.85,
        "vario": 0.0050819228
    },
    {
        "time": "2022-07-30T16:20:39.000Z",
        "latitude": 60.9397029,
        "longitude": 11.7435333,
        "altitude": 1696.837,
        "vario": 0.1734271521
    },
    {
        "time": "2022-07-30T16:20:40.000Z",
        "latitude": 60.9394904,
        "longitude": 11.7437919,
        "altitude": 1696.105,
        "vario": 0.3536058976
    },
    {
        "time": "2022-07-30T16:20:41.000Z",
        "latitude": 60.9392578,
        "longitude": 11.7439314,
        "altitude": 1694.21,
        "vario": 0.5310688688
    },
    {
        "time": "2022-07-30T16:20:42.000Z",
        "latitude": 60.9390078,
        "longitude": 11.7439592,
        "altitude": 1692.8,
        "vario": 0.6917476347
    },
    {
        "time": "2022-07-30T16:20:43.000Z",
        "latitude": 60.9387543,
        "longitude": 11.7438797,
        "altitude": 1694.41,
        "vario": 0.8234314884
    },
    {
        "time": "2022-07-30T16:20:44.000Z",
        "latitude": 60.9385146,
        "longitude": 11.7437484,
        "altitude": 1698.551,
        "vario": 0.9171394365
    },
    {
        "time": "2022-07-30T16:20:45.000Z",
        "latitude": 60.938284,
        "longitude": 11.743608,
        "altitude": 1702.75,
        "vario": 0.9681555362
    },
    {
        "time": "2022-07-30T16:20:46.000Z",
        "latitude": 60.938054,
        "longitude": 11.7434688,
        "altitude": 1706.012,
        "vario": 0.976526037
    },
    {
        "time": "2022-07-30T16:20:47.000Z",
        "latitude": 60.9378278,
        "longitude": 11.7433443,
        "altitude": 1708.098,
        "vario": 0.9467467669
    },
    {
        "time": "2022-07-30T16:20:48.000Z",
        "latitude": 60.9376091,
        "longitude": 11.7432431,
        "altitude": 1708.985,
        "vario": 0.8866062719
    },
    {
        "time": "2022-07-30T16:20:49.000Z",
        "latitude": 60.9373923,
        "longitude": 11.7431548,
        "altitude": 1708.801,
        "vario": 0.805495006
    },
    {
        "time": "2022-07-30T16:20:50.000Z",
        "latitude": 60.9371734,
        "longitude": 11.7430721,
        "altitude": 1707.68,
        "vario": 0.712565967
    },
    {
        "time": "2022-07-30T16:20:51.000Z",
        "latitude": 60.9369503,
        "longitude": 11.7429949,
        "altitude": 1706.269,
        "vario": 0.6152147837
    },
    {
        "time": "2022-07-30T16:20:52.000Z",
        "latitude": 60.9367217,
        "longitude": 11.7429232,
        "altitude": 1705.888,
        "vario": 0.518249431
    },
    {
        "time": "2022-07-30T16:20:53.000Z",
        "latitude": 60.9364882,
        "longitude": 11.7428623,
        "altitude": 1707.571,
        "vario": 0.4239269969
    },
    {
        "time": "2022-07-30T16:20:54.000Z",
        "latitude": 60.9362555,
        "longitude": 11.7428107,
        "altitude": 1709.008,
        "vario": 0.3327509921
    },
    {
        "time": "2022-07-30T16:20:55.000Z",
        "latitude": 60.9360299,
        "longitude": 11.7427619,
        "altitude": 1710.212,
        "vario": 0.2445913323
    },
    {
        "time": "2022-07-30T16:20:56.000Z",
        "latitude": 60.9358109,
        "longitude": 11.7427168,
        "altitude": 1710.979,
        "vario": 0.1597656877
    },
    {
        "time": "2022-07-30T16:20:57.000Z",
        "latitude": 60.9355956,
        "longitude": 11.7426631,
        "altitude": 1711.154,
        "vario": 0.0797868982
    },
    {
        "time": "2022-07-30T16:20:58.000Z",
        "latitude": 60.9353849,
        "longitude": 11.7426004,
        "altitude": 1711.157,
        "vario": 0.0074712578
    },
    {
        "time": "2022-07-30T16:20:59.000Z",
        "latitude": 60.9351818,
        "longitude": 11.742525,
        "altitude": 1710.953,
        "vario": -0.05349501
    },
    {
        "time": "2022-07-30T16:21:00.000Z",
        "latitude": 60.934982,
        "longitude": 11.74244,
        "altitude": 1710.24,
        "vario": -0.0992734773
    },
    {
        "time": "2022-07-30T16:21:01.000Z",
        "latitude": 60.9347802,
        "longitude": 11.74235,
        "altitude": 1708.978,
        "vario": -0.1267198109
    },
    {
        "time": "2022-07-30T16:21:02.000Z",
        "latitude": 60.9345725,
        "longitude": 11.7422621,
        "altitude": 1707.67,
        "vario": -0.1340042564
    },
    {
        "time": "2022-07-30T16:21:03.000Z",
        "latitude": 60.9343617,
        "longitude": 11.7421841,
        "altitude": 1706.186,
        "vario": -0.1208269532
    },
    {
        "time": "2022-07-30T16:21:04.000Z",
        "latitude": 60.9341551,
        "longitude": 11.7421323,
        "altitude": 1706.066,
        "vario": -0.0882903193
    },
    {
        "time": "2022-07-30T16:21:05.000Z",
        "latitude": 60.9339472,
        "longitude": 11.7421268,
        "altitude": 1707.457,
        "vario": -0.0385743776
    },
    {
        "time": "2022-07-30T16:21:06.000Z",
        "latitude": 60.9337327,
        "longitude": 11.7421975,
        "altitude": 1708.534,
        "vario": 0.0253793679
    },
    {
        "time": "2022-07-30T16:21:07.000Z",
        "latitude": 60.9335182,
        "longitude": 11.7423692,
        "altitude": 1709.029,
        "vario": 0.1000869765
    },
    {
        "time": "2022-07-30T16:21:08.000Z",
        "latitude": 60.9333157,
        "longitude": 11.7426567,
        "altitude": 1708.179,
        "vario": 0.1815916188
    },
    {
        "time": "2022-07-30T16:21:09.000Z",
        "latitude": 60.9331441,
        "longitude": 11.7430523,
        "altitude": 1707.115,
        "vario": 0.2653819716
    },
    {
        "time": "2022-07-30T16:21:10.000Z",
        "latitude": 60.9330076,
        "longitude": 11.7434953,
        "altitude": 1706.26,
        "vario": 0.3462721271
    },
    {
        "time": "2022-07-30T16:21:11.000Z",
        "latitude": 60.9328902,
        "longitude": 11.743935,
        "altitude": 1706.363,
        "vario": 0.4184223723
    },
    {
        "time": "2022-07-30T16:21:12.000Z",
        "latitude": 60.9327639,
        "longitude": 11.7443209,
        "altitude": 1708.108,
        "vario": 0.4755672039
    },
    {
        "time": "2022-07-30T16:21:13.000Z",
        "latitude": 60.9326216,
        "longitude": 11.7446398,
        "altitude": 1709.759,
        "vario": 0.5114694076
    },
    {
        "time": "2022-07-30T16:21:14.000Z",
        "latitude": 60.9324678,
        "longitude": 11.7448919,
        "altitude": 1710.651,
        "vario": 0.5205388451
    },
    {
        "time": "2022-07-30T16:21:15.000Z",
        "latitude": 60.932304,
        "longitude": 11.7450771,
        "altitude": 1712.43,
        "vario": 0.498417907
    },
    {
        "time": "2022-07-30T16:21:16.000Z",
        "latitude": 60.9321315,
        "longitude": 11.7452307,
        "altitude": 1713.551,
        "vario": 0.4424296219
    },
    {
        "time": "2022-07-30T16:21:17.000Z",
        "latitude": 60.9319524,
        "longitude": 11.7453642,
        "altitude": 1713.841,
        "vario": 0.35187315
    },
    {
        "time": "2022-07-30T16:21:18.000Z",
        "latitude": 60.9317715,
        "longitude": 11.7454845,
        "altitude": 1714.744,
        "vario": 0.2281158315
    },
    {
        "time": "2022-07-30T16:21:19.000Z",
        "latitude": 60.9315908,
        "longitude": 11.7456055,
        "altitude": 1715.352,
        "vario": 0.0745381415
    },
    {
        "time": "2022-07-30T16:21:20.000Z",
        "latitude": 60.9314132,
        "longitude": 11.7457343,
        "altitude": 1715.217,
        "vario": -0.1035952488
    },
    {
        "time": "2022-07-30T16:21:21.000Z",
        "latitude": 60.9312402,
        "longitude": 11.7458753,
        "altitude": 1715.521,
        "vario": -0.299343033
    },
    {
        "time": "2022-07-30T16:21:22.000Z",
        "latitude": 60.931072,
        "longitude": 11.7460312,
        "altitude": 1715.566,
        "vario": -0.5043674083
    },
    {
        "time": "2022-07-30T16:21:23.000Z",
        "latitude": 60.9309071,
        "longitude": 11.7462077,
        "altitude": 1715.25,
        "vario": -0.7093339546
    },
    {
        "time": "2022-07-30T16:21:24.000Z",
        "latitude": 60.9307443,
        "longitude": 11.7464117,
        "altitude": 1714.418,
        "vario": -0.9045123081
    },
    {
        "time": "2022-07-30T16:21:25.000Z",
        "latitude": 60.9305819,
        "longitude": 11.7466483,
        "altitude": 1713.278,
        "vario": -1.0805612195
    },
    {
        "time": "2022-07-30T16:21:26.000Z",
        "latitude": 60.9304209,
        "longitude": 11.7469221,
        "altitude": 1711.608,
        "vario": -1.2294995988
    },
    {
        "time": "2022-07-30T16:21:27.000Z",
        "latitude": 60.9302644,
        "longitude": 11.7472383,
        "altitude": 1709.649,
        "vario": -1.3457152757
    },
    {
        "time": "2022-07-30T16:21:28.000Z",
        "latitude": 60.9301158,
        "longitude": 11.7475977,
        "altitude": 1706.7,
        "vario": -1.4266878152
    },
    {
        "time": "2022-07-30T16:21:29.000Z",
        "latitude": 60.9299747,
        "longitude": 11.7480006,
        "altitude": 1703.441,
        "vario": -1.4732866961
    },
    {
        "time": "2022-07-30T16:21:30.000Z",
        "latitude": 60.9298409,
        "longitude": 11.7484373,
        "altitude": 1700.488,
        "vario": -1.4894732697
    },
    {
        "time": "2022-07-30T16:21:31.000Z",
        "latitude": 60.9297152,
        "longitude": 11.7488977,
        "altitude": 1698.275,
        "vario": -1.4813814206
    },
    {
        "time": "2022-07-30T16:21:32.000Z",
        "latitude": 60.9295946,
        "longitude": 11.7493695,
        "altitude": 1697.564,
        "vario": -1.4559931348
    },
    {
        "time": "2022-07-30T16:21:33.000Z",
        "latitude": 60.9294783,
        "longitude": 11.7498395,
        "altitude": 1697.778,
        "vario": -1.4196419348
    },
    {
        "time": "2022-07-30T16:21:34.000Z",
        "latitude": 60.9293626,
        "longitude": 11.7502992,
        "altitude": 1697.823,
        "vario": -1.3767150764
    },
    {
        "time": "2022-07-30T16:21:35.000Z",
        "latitude": 60.9292463,
        "longitude": 11.7507361,
        "altitude": 1696.76,
        "vario": -1.3287974869
    },
    {
        "time": "2022-07-30T16:21:36.000Z",
        "latitude": 60.9291211,
        "longitude": 11.7511277,
        "altitude": 1695.574,
        "vario": -1.2743668399
    },
    {
        "time": "2022-07-30T16:21:37.000Z",
        "latitude": 60.9289845,
        "longitude": 11.7514552,
        "altitude": 1693.745,
        "vario": -1.2091888666
    },
    {
        "time": "2022-07-30T16:21:38.000Z",
        "latitude": 60.9288322,
        "longitude": 11.7517103,
        "altitude": 1691.626,
        "vario": -1.127288016
    },
    {
        "time": "2022-07-30T16:21:39.000Z",
        "latitude": 60.9286576,
        "longitude": 11.751872,
        "altitude": 1689.498,
        "vario": -1.0221566428
    },
    {
        "time": "2022-07-30T16:21:40.000Z",
        "latitude": 60.9284669,
        "longitude": 11.7518995,
        "altitude": 1687.683,
        "vario": -0.8881111098
    },
    {
        "time": "2022-07-30T16:21:41.000Z",
        "latitude": 60.9282846,
        "longitude": 11.7517775,
        "altitude": 1686.803,
        "vario": -0.7216263268
    },
    {
        "time": "2022-07-30T16:21:42.000Z",
        "latitude": 60.9281571,
        "longitude": 11.7515072,
        "altitude": 1686.437,
        "vario": -0.5223690415
    },
    {
        "time": "2022-07-30T16:21:43.000Z",
        "latitude": 60.9280523,
        "longitude": 11.7511975,
        "altitude": 1685.98,
        "vario": -0.2938722768
    },
    {
        "time": "2022-07-30T16:21:44.000Z",
        "latitude": 60.9279812,
        "longitude": 11.7507914,
        "altitude": 1684.316,
        "vario": -0.0437695529
    },
    {
        "time": "2022-07-30T16:21:45.000Z",
        "latitude": 60.9279379,
        "longitude": 11.7503124,
        "altitude": 1682.104,
        "vario": 0.2165409663
    },
    {
        "time": "2022-07-30T16:21:46.000Z",
        "latitude": 60.9279348,
        "longitude": 11.7497825,
        "altitude": 1681.553,
        "vario": 0.4727967773
    },
    {
        "time": "2022-07-30T16:21:47.000Z",
        "latitude": 60.9279483,
        "longitude": 11.7492406,
        "altitude": 1682.587,
        "vario": 0.7092297252
    },
    {
        "time": "2022-07-30T16:21:48.000Z",
        "latitude": 60.9279662,
        "longitude": 11.7487035,
        "altitude": 1685.061,
        "vario": 0.9102347996
    },
    {
        "time": "2022-07-30T16:21:49.000Z",
        "latitude": 60.9279839,
        "longitude": 11.7481634,
        "altitude": 1688.884,
        "vario": 1.0620853068
    },
    {
        "time": "2022-07-30T16:21:50.000Z",
        "latitude": 60.9279993,
        "longitude": 11.747625,
        "altitude": 1692.479,
        "vario": 1.1544278513
    },
    {
        "time": "2022-07-30T16:21:51.000Z",
        "latitude": 60.9280109,
        "longitude": 11.7470983,
        "altitude": 1694.889,
        "vario": 1.1813192666
    },
    {
        "time": "2022-07-30T16:21:52.000Z",
        "latitude": 60.9280198,
        "longitude": 11.7465875,
        "altitude": 1696.502,
        "vario": 1.1416252296
    },
    {
        "time": "2022-07-30T16:21:53.000Z",
        "latitude": 60.9280215,
        "longitude": 11.7460861,
        "altitude": 1698.05,
        "vario": 1.0388473271
    },
    {
        "time": "2022-07-30T16:21:54.000Z",
        "latitude": 60.9280175,
        "longitude": 11.745579,
        "altitude": 1699.682,
        "vario": 0.880536728
    },
    {
        "time": "2022-07-30T16:21:55.000Z",
        "latitude": 60.9280086,
        "longitude": 11.7450703,
        "altitude": 1700.749,
        "vario": 0.6773717419
    },
    {
        "time": "2022-07-30T16:21:56.000Z",
        "latitude": 60.9279961,
        "longitude": 11.7445684,
        "altitude": 1701.56,
        "vario": 0.4420963961
    },
    {
        "time": "2022-07-30T16:21:57.000Z",
        "latitude": 60.9279808,
        "longitude": 11.7440698,
        "altitude": 1702.391,
        "vario": 0.1885216685
    },
    {
        "time": "2022-07-30T16:21:58.000Z",
        "latitude": 60.927967,
        "longitude": 11.7435734,
        "altitude": 1703.32,
        "vario": -0.0694748731
    },
    {
        "time": "2022-07-30T16:21:59.000Z",
        "latitude": 60.9279592,
        "longitude": 11.7430817,
        "altitude": 1702.893,
        "vario": -0.318926801
    },
    {
        "time": "2022-07-30T16:22:00.000Z",
        "latitude": 60.9279584,
        "longitude": 11.742592,
        "altitude": 1701.535,
        "vario": -0.5486499439
    },
    {
        "time": "2022-07-30T16:22:01.000Z",
        "latitude": 60.9279608,
        "longitude": 11.7420977,
        "altitude": 1699.7,
        "vario": -0.7499944605
    },
    {
        "time": "2022-07-30T16:22:02.000Z",
        "latitude": 60.9279643,
        "longitude": 11.7415973,
        "altitude": 1697.716,
        "vario": -0.9173783405
    },
    {
        "time": "2022-07-30T16:22:03.000Z",
        "latitude": 60.9279659,
        "longitude": 11.7410763,
        "altitude": 1695.485,
        "vario": -1.0484861903
    },
    {
        "time": "2022-07-30T16:22:04.000Z",
        "latitude": 60.927961,
        "longitude": 11.740533,
        "altitude": 1693.669,
        "vario": -1.1440399523
    },
    {
        "time": "2022-07-30T16:22:05.000Z",
        "latitude": 60.9279473,
        "longitude": 11.7399876,
        "altitude": 1691.761,
        "vario": -1.2072066948
    },
    {
        "time": "2022-07-30T16:22:06.000Z",
        "latitude": 60.9279285,
        "longitude": 11.739446,
        "altitude": 1690.258,
        "vario": -1.2427067325
    },
    {
        "time": "2022-07-30T16:22:07.000Z",
        "latitude": 60.9279094,
        "longitude": 11.738906,
        "altitude": 1689.436,
        "vario": -1.2557312491
    },
    {
        "time": "2022-07-30T16:22:08.000Z",
        "latitude": 60.9278979,
        "longitude": 11.7383688,
        "altitude": 1689.149,
        "vario": -1.2510464284
    },
    {
        "time": "2022-07-30T16:22:09.000Z",
        "latitude": 60.9279014,
        "longitude": 11.7378373,
        "altitude": 1688.465,
        "vario": -1.2324408288
    },
    {
        "time": "2022-07-30T16:22:10.000Z",
        "latitude": 60.9279286,
        "longitude": 11.7373089,
        "altitude": 1686.943,
        "vario": -1.2025227661
    },
    {
        "time": "2022-07-30T16:22:11.000Z",
        "latitude": 60.9279929,
        "longitude": 11.7367791,
        "altitude": 1685.005,
        "vario": -1.1629597218
    },
    {
        "time": "2022-07-30T16:22:12.000Z",
        "latitude": 60.9281133,
        "longitude": 11.7362639,
        "altitude": 1683.735,
        "vario": -1.1150032552
    },
    {
        "time": "2022-07-30T16:22:13.000Z",
        "latitude": 60.9282899,
        "longitude": 11.7357921,
        "altitude": 1682.547,
        "vario": -1.0600337041
    },
    {
        "time": "2022-07-30T16:22:14.000Z",
        "latitude": 60.9285231,
        "longitude": 11.7353961,
        "altitude": 1680.43,
        "vario": -0.9999859276
    },
    {
        "time": "2022-07-30T16:22:15.000Z",
        "latitude": 60.9288134,
        "longitude": 11.7351221,
        "altitude": 1679.118,
        "vario": -0.9374999351
    },
    {
        "time": "2022-07-30T16:22:16.000Z",
        "latitude": 60.9291349,
        "longitude": 11.7349877,
        "altitude": 1678.318,
        "vario": -0.8757383812
    },
    {
        "time": "2022-07-30T16:22:17.000Z",
        "latitude": 60.9294704,
        "longitude": 11.7349546,
        "altitude": 1677.709,
        "vario": -0.8179461563
    },
    {
        "time": "2022-07-30T16:22:18.000Z",
        "latitude": 60.9298192,
        "longitude": 11.7349887,
        "altitude": 1677.696,
        "vario": -0.7668847975
    },
    {
        "time": "2022-07-30T16:22:19.000Z",
        "latitude": 60.9301778,
        "longitude": 11.7350628,
        "altitude": 1677.941,
        "vario": -0.7242996545
    },
    {
        "time": "2022-07-30T16:22:20.000Z",
        "latitude": 60.9305372,
        "longitude": 11.7351462,
        "altitude": 1677.797,
        "vario": -0.690631823
    },
    {
        "time": "2022-07-30T16:22:21.000Z",
        "latitude": 60.9308948,
        "longitude": 11.7352221,
        "altitude": 1677.139,
        "vario": -0.6650537126
    },
    {
        "time": "2022-07-30T16:22:22.000Z",
        "latitude": 60.9312532,
        "longitude": 11.7352832,
        "altitude": 1676.421,
        "vario": -0.6457658375
    },
    {
        "time": "2022-07-30T16:22:23.000Z",
        "latitude": 60.9316108,
        "longitude": 11.7353246,
        "altitude": 1675.254,
        "vario": -0.6304664742
    },
    {
        "time": "2022-07-30T16:22:24.000Z",
        "latitude": 60.9319643,
        "longitude": 11.7353489,
        "altitude": 1673.765,
        "vario": -0.6169137983
    },
    {
        "time": "2022-07-30T16:22:25.000Z",
        "latitude": 60.93231,
        "longitude": 11.7353637,
        "altitude": 1673.245,
        "vario": -0.603419707
    },
    {
        "time": "2022-07-30T16:22:26.000Z",
        "latitude": 60.9326473,
        "longitude": 11.7353755,
        "altitude": 1673.0,
        "vario": -0.5891789086
    },
    {
        "time": "2022-07-30T16:22:27.000Z",
        "latitude": 60.9329821,
        "longitude": 11.7353834,
        "altitude": 1672.261,
        "vario": -0.5744098197
    },
    {
        "time": "2022-07-30T16:22:28.000Z",
        "latitude": 60.9333198,
        "longitude": 11.7353877,
        "altitude": 1671.983,
        "vario": -0.5602775822
    },
    {
        "time": "2022-07-30T16:22:29.000Z",
        "latitude": 60.9336582,
        "longitude": 11.7353868,
        "altitude": 1671.588,
        "vario": -0.5487417835
    },
    {
        "time": "2022-07-30T16:22:30.000Z",
        "latitude": 60.9339937,
        "longitude": 11.7353779,
        "altitude": 1670.856,
        "vario": -0.5423177191
    },
    {
        "time": "2022-07-30T16:22:31.000Z",
        "latitude": 60.9343251,
        "longitude": 11.7353638,
        "altitude": 1670.304,
        "vario": -0.543700304
    },
    {
        "time": "2022-07-30T16:22:32.000Z",
        "latitude": 60.9346516,
        "longitude": 11.7353465,
        "altitude": 1669.788,
        "vario": -0.5553164454
    },
    {
        "time": "2022-07-30T16:22:33.000Z",
        "latitude": 60.9349767,
        "longitude": 11.7353232,
        "altitude": 1669.04,
        "vario": -0.5788706686
    },
    {
        "time": "2022-07-30T16:22:34.000Z",
        "latitude": 60.9353041,
        "longitude": 11.7352887,
        "altitude": 1668.845,
        "vario": -0.6149481614
    },
    {
        "time": "2022-07-30T16:22:35.000Z",
        "latitude": 60.9356315,
        "longitude": 11.73523,
        "altitude": 1668.681,
        "vario": -0.6627915607
    },
    {
        "time": "2022-07-30T16:22:36.000Z",
        "latitude": 60.9359576,
        "longitude": 11.7351258,
        "altitude": 1668.713,
        "vario": -0.7203064491
    },
    {
        "time": "2022-07-30T16:22:37.000Z",
        "latitude": 60.9362742,
        "longitude": 11.734957,
        "altitude": 1669.118,
        "vario": -0.7844092687
    },
    {
        "time": "2022-07-30T16:22:38.000Z",
        "latitude": 60.9365721,
        "longitude": 11.7347111,
        "altitude": 1669.204,
        "vario": -0.8517204097
    },
    {
        "time": "2022-07-30T16:22:39.000Z",
        "latitude": 60.9368436,
        "longitude": 11.7343834,
        "altitude": 1667.43,
        "vario": -0.9193927144
    },
    {
        "time": "2022-07-30T16:22:40.000Z",
        "latitude": 60.9370732,
        "longitude": 11.7339633,
        "altitude": 1664.681,
        "vario": -0.9859105937
    },
    {
        "time": "2022-07-30T16:22:41.000Z",
        "latitude": 60.9372343,
        "longitude": 11.7334625,
        "altitude": 1662.309,
        "vario": -1.0516100135
    },
    {
        "time": "2022-07-30T16:22:42.000Z",
        "latitude": 60.9373169,
        "longitude": 11.7329336,
        "altitude": 1660.734,
        "vario": -1.1187119061
    },
    {
        "time": "2022-07-30T16:22:43.000Z",
        "latitude": 60.9373263,
        "longitude": 11.7324253,
        "altitude": 1659.245,
        "vario": -1.1908235933
    },
    {
        "time": "2022-07-30T16:22:44.000Z",
        "latitude": 60.9372865,
        "longitude": 11.7319694,
        "altitude": 1659.179,
        "vario": -1.2719617619
    },
    {
        "time": "2022-07-30T16:22:45.000Z",
        "latitude": 60.9372105,
        "longitude": 11.7315846,
        "altitude": 1659.678,
        "vario": -1.3654028403
    },
    {
        "time": "2022-07-30T16:22:46.000Z",
        "latitude": 60.9371119,
        "longitude": 11.7312698,
        "altitude": 1660.114,
        "vario": -1.4726114597
    },
    {
        "time": "2022-07-30T16:22:47.000Z",
        "latitude": 60.9369991,
        "longitude": 11.7310095,
        "altitude": 1658.94,
        "vario": -1.592494035
    },
    {
        "time": "2022-07-30T16:22:48.000Z",
        "latitude": 60.9368738,
        "longitude": 11.730788,
        "altitude": 1656.264,
        "vario": -1.721240885
    },
    {
        "time": "2022-07-30T16:22:49.000Z",
        "latitude": 60.936739,
        "longitude": 11.7306001,
        "altitude": 1654.199,
        "vario": -1.8526567811
    },
    {
        "time": "2022-07-30T16:22:50.000Z",
        "latitude": 60.9365999,
        "longitude": 11.7304432,
        "altitude": 1652.534,
        "vario": -1.9788915419
    },
    {
        "time": "2022-07-30T16:22:51.000Z",
        "latitude": 60.9364564,
        "longitude": 11.7303065,
        "altitude": 1650.113,
        "vario": -2.0914608335
    },
    {
        "time": "2022-07-30T16:22:52.000Z",
        "latitude": 60.9363062,
        "longitude": 11.7301788,
        "altitude": 1647.219,
        "vario": -2.1823043364
    },
    {
        "time": "2022-07-30T16:22:53.000Z",
        "latitude": 60.9361529,
        "longitude": 11.7300574,
        "altitude": 1644.473,
        "vario": -2.2447352385
    },
    {
        "time": "2022-07-30T16:22:54.000Z",
        "latitude": 60.9359977,
        "longitude": 11.7299452,
        "altitude": 1641.546,
        "vario": -2.2742251196
    },
    {
        "time": "2022-07-30T16:22:55.000Z",
        "latitude": 60.9358349,
        "longitude": 11.7298389,
        "altitude": 1638.433,
        "vario": -2.2689781098
    },
    {
        "time": "2022-07-30T16:22:56.000Z",
        "latitude": 60.9356656,
        "longitude": 11.7297415,
        "altitude": 1635.633,
        "vario": -2.2303328948
    },
    {
        "time": "2022-07-30T16:22:57.000Z",
        "latitude": 60.9354959,
        "longitude": 11.7296591,
        "altitude": 1633.117,
        "vario": -2.1629484446
    },
    {
        "time": "2022-07-30T16:22:58.000Z",
        "latitude": 60.9353265,
        "longitude": 11.7295911,
        "altitude": 1630.628,
        "vario": -2.0747116544
    },
    {
        "time": "2022-07-30T16:22:59.000Z",
        "latitude": 60.9351564,
        "longitude": 11.7295329,
        "altitude": 1627.892,
        "vario": -1.9763706261
    },
    {
        "time": "2022-07-30T16:23:00.000Z",
        "latitude": 60.9349845,
        "longitude": 11.7294794,
        "altitude": 1625.421,
        "vario": -1.8807552639
    },
    {
        "time": "2022-07-30T16:23:01.000Z",
        "latitude": 60.9348115,
        "longitude": 11.7294279,
        "altitude": 1623.202,
        "vario": -1.8015164856
    },
    {
        "time": "2022-07-30T16:23:02.000Z",
        "latitude": 60.9346395,
        "longitude": 11.7293807,
        "altitude": 1622.119,
        "vario": -1.7514739393
    },
    {
        "time": "2022-07-30T16:23:03.000Z",
        "latitude": 60.9344686,
        "longitude": 11.7293415,
        "altitude": 1622.089,
        "vario": -1.7407482029
    },
    {
        "time": "2022-07-30T16:23:04.000Z",
        "latitude": 60.9342973,
        "longitude": 11.7293067,
        "altitude": 1621.587,
        "vario": -1.7749606473
    },
    {
        "time": "2022-07-30T16:23:05.000Z",
        "latitude": 60.9341292,
        "longitude": 11.729274,
        "altitude": 1621.761,
        "vario": -1.8537542624
    },
    {
        "time": "2022-07-30T16:23:06.000Z",
        "latitude": 60.9339634,
        "longitude": 11.7292406,
        "altitude": 1621.665,
        "vario": -1.9700288364
    },
    {
        "time": "2022-07-30T16:23:07.000Z",
        "latitude": 60.9337977,
        "longitude": 11.7292038,
        "altitude": 1620.624,
        "vario": -2.1102148476
    },
    {
        "time": "2022-07-30T16:23:08.000Z",
        "latitude": 60.9336311,
        "longitude": 11.7291626,
        "altitude": 1619.408,
        "vario": -2.255624253
    },
    {
        "time": "2022-07-30T16:23:09.000Z",
        "latitude": 60.9334652,
        "longitude": 11.7291225,
        "altitude": 1616.942,
        "vario": -2.3847701461
    },
    {
        "time": "2022-07-30T16:23:10.000Z",
        "latitude": 60.9332988,
        "longitude": 11.7290869,
        "altitude": 1612.778,
        "vario": -2.4762716444
    },
    {
        "time": "2022-07-30T16:23:11.000Z",
        "latitude": 60.9331281,
        "longitude": 11.7290501,
        "altitude": 1607.772,
        "vario": -2.511940016
    },
    {
        "time": "2022-07-30T16:23:12.000Z",
        "latitude": 60.9329551,
        "longitude": 11.7290091,
        "altitude": 1602.681,
        "vario": -2.4795290093
    },
    {
        "time": "2022-07-30T16:23:13.000Z",
        "latitude": 60.9327857,
        "longitude": 11.7289643,
        "altitude": 1597.485,
        "vario": -2.3746056156
    },
    {
        "time": "2022-07-30T16:23:14.000Z",
        "latitude": 60.9326197,
        "longitude": 11.7289123,
        "altitude": 1592.88,
        "vario": -2.2012694133
    },
    {
        "time": "2022-07-30T16:23:15.000Z",
        "latitude": 60.9324539,
        "longitude": 11.7288458,
        "altitude": 1589.622,
        "vario": -1.9717050123
    },
    {
        "time": "2022-07-30T16:23:16.000Z",
        "latitude": 60.93229,
        "longitude": 11.7287619,
        "altitude": 1588.149,
        "vario": -1.7046613386
    },
    {
        "time": "2022-07-30T16:23:17.000Z",
        "latitude": 60.9321277,
        "longitude": 11.728664,
        "altitude": 1587.322,
        "vario": -1.4231056575
    },
    {
        "time": "2022-07-30T16:23:18.000Z",
        "latitude": 60.9319619,
        "longitude": 11.7285454,
        "altitude": 1587.163,
        "vario": -1.1514654449
    },
    {
        "time": "2022-07-30T16:23:19.000Z",
        "latitude": 60.9317959,
        "longitude": 11.7284139,
        "altitude": 1587.637,
        "vario": -0.9128031
    },
    {
        "time": "2022-07-30T16:23:20.000Z",
        "latitude": 60.9316349,
        "longitude": 11.7282883,
        "altitude": 1587.339,
        "vario": -0.7262239839
    },
    {
        "time": "2022-07-30T16:23:21.000Z",
        "latitude": 60.9314764,
        "longitude": 11.7281739,
        "altitude": 1586.968,
        "vario": -0.6047796888
    },
    {
        "time": "2022-07-30T16:23:22.000Z",
        "latitude": 60.9313203,
        "longitude": 11.7280727,
        "altitude": 1587.688,
        "vario": -0.5540987611
    },
    {
        "time": "2022-07-30T16:23:23.000Z",
        "latitude": 60.9311708,
        "longitude": 11.7279892,
        "altitude": 1589.851,
        "vario": -0.5718347459
    },
    {
        "time": "2022-07-30T16:23:24.000Z",
        "latitude": 60.9310319,
        "longitude": 11.7279295,
        "altitude": 1592.815,
        "vario": -0.6480701987
    },
    {
        "time": "2022-07-30T16:23:25.000Z",
        "latitude": 60.9308984,
        "longitude": 11.7278839,
        "altitude": 1594.32,
        "vario": -0.7667595322
    },
    {
        "time": "2022-07-30T16:23:26.000Z",
        "latitude": 60.9307636,
        "longitude": 11.7278421,
        "altitude": 1593.418,
        "vario": -0.9079423769
    },
    {
        "time": "2022-07-30T16:23:27.000Z",
        "latitude": 60.9306249,
        "longitude": 11.7278071,
        "altitude": 1590.612,
        "vario": -1.0504644273
    },
    {
        "time": "2022-07-30T16:23:28.000Z",
        "latitude": 60.9304784,
        "longitude": 11.7277809,
        "altitude": 1586.711,
        "vario": -1.1748229443
    },
    {
        "time": "2022-07-30T16:23:29.000Z",
        "latitude": 60.9303197,
        "longitude": 11.7277603,
        "altitude": 1582.974,
        "vario": -1.2655366416
    },
    {
        "time": "2022-07-30T16:23:30.000Z",
        "latitude": 60.9301519,
        "longitude": 11.7277415,
        "altitude": 1579.99,
        "vario": -1.3127252996
    },
    {
        "time": "2022-07-30T16:23:31.000Z",
        "latitude": 60.9299809,
        "longitude": 11.7277181,
        "altitude": 1578.137,
        "vario": -1.3127047725
    },
    {
        "time": "2022-07-30T16:23:32.000Z",
        "latitude": 60.9298084,
        "longitude": 11.7276865,
        "altitude": 1576.724,
        "vario": -1.2675089934
    },
    {
        "time": "2022-07-30T16:23:33.000Z",
        "latitude": 60.929633,
        "longitude": 11.7276491,
        "altitude": 1575.443,
        "vario": -1.1836481238
    },
    {
        "time": "2022-07-30T16:23:34.000Z",
        "latitude": 60.9294548,
        "longitude": 11.7276112,
        "altitude": 1574.184,
        "vario": -1.070471612
    },
    {
        "time": "2022-07-30T16:23:35.000Z",
        "latitude": 60.9292725,
        "longitude": 11.7275825,
        "altitude": 1573.577,
        "vario": -0.9384618658
    },
    {
        "time": "2022-07-30T16:23:36.000Z",
        "latitude": 60.9290846,
        "longitude": 11.7275682,
        "altitude": 1573.045,
        "vario": -0.7977301809
    },
    {
        "time": "2022-07-30T16:23:37.000Z",
        "latitude": 60.9288921,
        "longitude": 11.7275822,
        "altitude": 1572.425,
        "vario": -0.6569528813
    },
    {
        "time": "2022-07-30T16:23:38.000Z",
        "latitude": 60.9287018,
        "longitude": 11.7276432,
        "altitude": 1571.761,
        "vario": -0.5228708765
    },
    {
        "time": "2022-07-30T16:23:39.000Z",
        "latitude": 60.9285151,
        "longitude": 11.7277659,
        "altitude": 1571.103,
        "vario": -0.4002015372
    },
    {
        "time": "2022-07-30T16:23:40.000Z",
        "latitude": 60.9283326,
        "longitude": 11.7279664,
        "altitude": 1570.817,
        "vario": -0.2918637534
    },
    {
        "time": "2022-07-30T16:23:41.000Z",
        "latitude": 60.9281665,
        "longitude": 11.7282663,
        "altitude": 1571.596,
        "vario": -0.1995128368
    },
    {
        "time": "2022-07-30T16:23:42.000Z",
        "latitude": 60.9280319,
        "longitude": 11.7286674,
        "altitude": 1573.095,
        "vario": -0.124197162
    },
    {
        "time": "2022-07-30T16:23:43.000Z",
        "latitude": 60.9279401,
        "longitude": 11.7291588,
        "altitude": 1573.179,
        "vario": -0.0669725108
    },
    {
        "time": "2022-07-30T16:23:44.000Z",
        "latitude": 60.9279014,
        "longitude": 11.7297254,
        "altitude": 1572.245,
        "vario": -0.0293909895
    },
    {
        "time": "2022-07-30T16:23:45.000Z",
        "latitude": 60.9279301,
        "longitude": 11.7303347,
        "altitude": 1570.901,
        "vario": -0.0137090663
    },
    {
        "time": "2022-07-30T16:23:46.000Z",
        "latitude": 60.9280212,
        "longitude": 11.7309497,
        "altitude": 1570.223,
        "vario": -0.0228338738
    },
    {
        "time": "2022-07-30T16:23:47.000Z",
        "latitude": 60.9281676,
        "longitude": 11.7315418,
        "altitude": 1570.729,
        "vario": -0.0599360436
    },
    {
        "time": "2022-07-30T16:23:48.000Z",
        "latitude": 60.9283505,
        "longitude": 11.7320885,
        "altitude": 1572.616,
        "vario": -0.1277767144
    },
    {
        "time": "2022-07-30T16:23:49.000Z",
        "latitude": 60.9285533,
        "longitude": 11.732583,
        "altitude": 1574.308,
        "vario": -0.2280395073
    },
    {
        "time": "2022-07-30T16:23:50.000Z",
        "latitude": 60.9287623,
        "longitude": 11.7330387,
        "altitude": 1575.441,
        "vario": -0.3607489948
    },
    {
        "time": "2022-07-30T16:23:51.000Z",
        "latitude": 60.9289714,
        "longitude": 11.7334685,
        "altitude": 1575.27,
        "vario": -0.5239062093
    },
    {
        "time": "2022-07-30T16:23:52.000Z",
        "latitude": 60.9291805,
        "longitude": 11.7338931,
        "altitude": 1573.732,
        "vario": -0.7134025815
    },
    {
        "time": "2022-07-30T16:23:53.000Z",
        "latitude": 60.929389,
        "longitude": 11.7343336,
        "altitude": 1572.35,
        "vario": -0.923191851
    },
    {
        "time": "2022-07-30T16:23:54.000Z",
        "latitude": 60.9295912,
        "longitude": 11.734788,
        "altitude": 1571.599,
        "vario": -1.1456034635
    },
    {
        "time": "2022-07-30T16:23:55.000Z",
        "latitude": 60.9297877,
        "longitude": 11.7352458,
        "altitude": 1571.185,
        "vario": -1.3716734761
    },
    {
        "time": "2022-07-30T16:23:56.000Z",
        "latitude": 60.9299829,
        "longitude": 11.7357078,
        "altitude": 1569.542,
        "vario": -1.5915211531
    },
    {
        "time": "2022-07-30T16:23:57.000Z",
        "latitude": 60.9301779,
        "longitude": 11.7361918,
        "altitude": 1567.642,
        "vario": -1.7947615944
    },
    {
        "time": "2022-07-30T16:23:58.000Z",
        "latitude": 60.9303678,
        "longitude": 11.7366962,
        "altitude": 1566.063,
        "vario": -1.9709694653
    },
    {
        "time": "2022-07-30T16:23:59.000Z",
        "latitude": 60.9305456,
        "longitude": 11.7372028,
        "altitude": 1563.646,
        "vario": -2.1102998414
    },
    {
        "time": "2022-07-30T16:24:00.000Z",
        "latitude": 60.9307064,
        "longitude": 11.7377049,
        "altitude": 1560.129,
        "vario": -2.2042997353
    },
    {
        "time": "2022-07-30T16:24:01.000Z",
        "latitude": 60.9308458,
        "longitude": 11.7382174,
        "altitude": 1556.3,
        "vario": -2.2467975657
    },
    {
        "time": "2022-07-30T16:24:02.000Z",
        "latitude": 60.9309554,
        "longitude": 11.7387538,
        "altitude": 1552.894,
        "vario": -2.2347859274
    },
    {
        "time": "2022-07-30T16:24:03.000Z",
        "latitude": 60.9310248,
        "longitude": 11.7393026,
        "altitude": 1549.968,
        "vario": -2.1691580327
    },
    {
        "time": "2022-07-30T16:24:04.000Z",
        "latitude": 60.931049,
        "longitude": 11.7398343,
        "altitude": 1546.984,
        "vario": -2.0551189383
    },
    {
        "time": "2022-07-30T16:24:05.000Z",
        "latitude": 60.9310268,
        "longitude": 11.7403217,
        "altitude": 1543.434,
        "vario": -1.9020782238
    },
    {
        "time": "2022-07-30T16:24:06.000Z",
        "latitude": 60.9309515,
        "longitude": 11.74075,
        "altitude": 1541.127,
        "vario": -1.7229404615
    },
    {
        "time": "2022-07-30T16:24:07.000Z",
        "latitude": 60.9308248,
        "longitude": 11.7411096,
        "altitude": 1538.854,
        "vario": -1.5328581624
    },
    {
        "time": "2022-07-30T16:24:08.000Z",
        "latitude": 60.9306627,
        "longitude": 11.7413946,
        "altitude": 1537.434,
        "vario": -1.3475704603
    },
    {
        "time": "2022-07-30T16:24:09.000Z",
        "latitude": 60.9304833,
        "longitude": 11.7416135,
        "altitude": 1537.63,
        "vario": -1.181561554
    },
    {
        "time": "2022-07-30T16:24:10.000Z",
        "latitude": 60.9302978,
        "longitude": 11.7417942,
        "altitude": 1538.335,
        "vario": -1.0463440031
    },
    {
        "time": "2022-07-30T16:24:11.000Z",
        "latitude": 60.9301079,
        "longitude": 11.7419618,
        "altitude": 1538.935,
        "vario": -0.9491091359
    },
    {
        "time": "2022-07-30T16:24:12.000Z",
        "latitude": 60.9299196,
        "longitude": 11.7421354,
        "altitude": 1539.037,
        "vario": -0.8919762453
    },
    {
        "time": "2022-07-30T16:24:13.000Z",
        "latitude": 60.9297338,
        "longitude": 11.7423255,
        "altitude": 1539.289,
        "vario": -0.8720176706
    },
    {
        "time": "2022-07-30T16:24:14.000Z",
        "latitude": 60.9295521,
        "longitude": 11.7425343,
        "altitude": 1538.889,
        "vario": -0.882025035
    },
    {
        "time": "2022-07-30T16:24:15.000Z",
        "latitude": 60.9293789,
        "longitude": 11.7427585,
        "altitude": 1537.749,
        "vario": -0.9119094133
    },
    {
        "time": "2022-07-30T16:24:16.000Z",
        "latitude": 60.9292128,
        "longitude": 11.7429933,
        "altitude": 1536.936,
        "vario": -0.9504691633
    },
    {
        "time": "2022-07-30T16:24:17.000Z",
        "latitude": 60.9290485,
        "longitude": 11.7432359,
        "altitude": 1535.541,
        "vario": -0.9871768008
    },
    {
        "time": "2022-07-30T16:24:18.000Z",
        "latitude": 60.9288808,
        "longitude": 11.7434857,
        "altitude": 1533.136,
        "vario": -1.0136607365
    },
    {
        "time": "2022-07-30T16:24:19.000Z",
        "latitude": 60.9287089,
        "longitude": 11.7437388,
        "altitude": 1530.963,
        "vario": -1.0246438797
    },
    {
        "time": "2022-07-30T16:24:20.000Z",
        "latitude": 60.9285396,
        "longitude": 11.7439873,
        "altitude": 1529.348,
        "vario": -1.0182300161
    },
    {
        "time": "2022-07-30T16:24:21.000Z",
        "latitude": 60.9283735,
        "longitude": 11.7442239,
        "altitude": 1527.579,
        "vario": -0.995537296
    },
    {
        "time": "2022-07-30T16:24:22.000Z",
        "latitude": 60.9282039,
        "longitude": 11.7444445,
        "altitude": 1526.423,
        "vario": -0.9598439619
    },
    {
        "time": "2022-07-30T16:24:23.000Z",
        "latitude": 60.9280314,
        "longitude": 11.7446407,
        "altitude": 1526.107,
        "vario": -0.9154785543
    },
    {
        "time": "2022-07-30T16:24:24.000Z",
        "latitude": 60.9278626,
        "longitude": 11.7448086,
        "altitude": 1526.352,
        "vario": -0.866792795
    },
    {
        "time": "2022-07-30T16:24:25.000Z",
        "latitude": 60.9276931,
        "longitude": 11.7449557,
        "altitude": 1526.745,
        "vario": -0.8174830807
    },
    {
        "time": "2022-07-30T16:24:26.000Z",
        "latitude": 60.9275178,
        "longitude": 11.7450901,
        "altitude": 1526.38,
        "vario": -0.7703020498
    },
    {
        "time": "2022-07-30T16:24:27.000Z",
        "latitude": 60.9273442,
        "longitude": 11.7452156,
        "altitude": 1524.876,
        "vario": -0.7270736687
    },
    {
        "time": "2022-07-30T16:24:28.000Z",
        "latitude": 60.9271735,
        "longitude": 11.7453331,
        "altitude": 1522.699,
        "vario": -0.6890049005
    },
    {
        "time": "2022-07-30T16:24:29.000Z",
        "latitude": 60.9270008,
        "longitude": 11.745446,
        "altitude": 1521.124,
        "vario": -0.6570799876
    },
    {
        "time": "2022-07-30T16:24:30.000Z",
        "latitude": 60.9268226,
        "longitude": 11.7455659,
        "altitude": 1520.83,
        "vario": -0.6322706764
    },
    {
        "time": "2022-07-30T16:24:31.000Z",
        "latitude": 60.9266412,
        "longitude": 11.745709,
        "altitude": 1521.295,
        "vario": -0.615616154
    },
    {
        "time": "2022-07-30T16:24:32.000Z",
        "latitude": 60.9264576,
        "longitude": 11.7458889,
        "altitude": 1521.605,
        "vario": -0.6081301683
    },
    {
        "time": "2022-07-30T16:24:33.000Z",
        "latitude": 60.9262695,
        "longitude": 11.7461142,
        "altitude": 1521.283,
        "vario": -0.6105742499
    },
    {
        "time": "2022-07-30T16:24:34.000Z",
        "latitude": 60.9260854,
        "longitude": 11.7463911,
        "altitude": 1520.772,
        "vario": -0.6232105191
    },
    {
        "time": "2022-07-30T16:24:35.000Z",
        "latitude": 60.9259184,
        "longitude": 11.7467086,
        "altitude": 1520.371,
        "vario": -0.6456421387
    },
    {
        "time": "2022-07-30T16:24:36.000Z",
        "latitude": 60.9257676,
        "longitude": 11.7470481,
        "altitude": 1519.668,
        "vario": -0.676748112
    },
    {
        "time": "2022-07-30T16:24:37.000Z",
        "latitude": 60.9256183,
        "longitude": 11.7474024,
        "altitude": 1518.087,
        "vario": -0.7146342386
    },
    {
        "time": "2022-07-30T16:24:38.000Z",
        "latitude": 60.9254655,
        "longitude": 11.747768,
        "altitude": 1516.918,
        "vario": -0.7566449738
    },
    {
        "time": "2022-07-30T16:24:39.000Z",
        "latitude": 60.925321,
        "longitude": 11.7481348,
        "altitude": 1516.718,
        "vario": -0.7994396577
    },
    {
        "time": "2022-07-30T16:24:40.000Z",
        "latitude": 60.9251848,
        "longitude": 11.7485003,
        "altitude": 1516.671,
        "vario": -0.8391123931
    },
    {
        "time": "2022-07-30T16:24:41.000Z",
        "latitude": 60.9250494,
        "longitude": 11.7488647,
        "altitude": 1516.649,
        "vario": -0.8714146522
    },
    {
        "time": "2022-07-30T16:24:42.000Z",
        "latitude": 60.9249122,
        "longitude": 11.7492211,
        "altitude": 1516.202,
        "vario": -0.8921358328
    },
    {
        "time": "2022-07-30T16:24:43.000Z",
        "latitude": 60.9247735,
        "longitude": 11.7495621,
        "altitude": 1513.975,
        "vario": -0.8975244653
    },
    {
        "time": "2022-07-30T16:24:44.000Z",
        "latitude": 60.9246252,
        "longitude": 11.7498727,
        "altitude": 1511.395,
        "vario": -0.8846992837
    },
    {
        "time": "2022-07-30T16:24:45.000Z",
        "latitude": 60.9244625,
        "longitude": 11.7501293,
        "altitude": 1509.769,
        "vario": -0.8520151573
    },
    {
        "time": "2022-07-30T16:24:46.000Z",
        "latitude": 60.9242868,
        "longitude": 11.75031,
        "altitude": 1508.676,
        "vario": -0.799192518
    },
    {
        "time": "2022-07-30T16:24:47.000Z",
        "latitude": 60.9241069,
        "longitude": 11.7503987,
        "altitude": 1507.602,
        "vario": -0.7271909424
    },
    {
        "time": "2022-07-30T16:24:48.000Z",
        "latitude": 60.9239348,
        "longitude": 11.7503817,
        "altitude": 1507.197,
        "vario": -0.6378864507
    },
    {
        "time": "2022-07-30T16:24:49.000Z",
        "latitude": 60.9237706,
        "longitude": 11.7502581,
        "altitude": 1507.119,
        "vario": -0.5336574214
    },
    {
        "time": "2022-07-30T16:24:50.000Z",
        "latitude": 60.9236125,
        "longitude": 11.7500498,
        "altitude": 1506.808,
        "vario": -0.4170354541
    },
    {
        "time": "2022-07-30T16:24:51.000Z",
        "latitude": 60.9234639,
        "longitude": 11.7497754,
        "altitude": 1506.551,
        "vario": -0.2905547761
    },
    {
        "time": "2022-07-30T16:24:52.000Z",
        "latitude": 60.9233269,
        "longitude": 11.7494649,
        "altitude": 1506.061,
        "vario": -0.156833834
    },
    {
        "time": "2022-07-30T16:24:53.000Z",
        "latitude": 60.9232001,
        "longitude": 11.7491317,
        "altitude": 1505.329,
        "vario": -0.0188717451
    },
    {
        "time": "2022-07-30T16:24:54.000Z",
        "latitude": 60.9230823,
        "longitude": 11.7487814,
        "altitude": 1504.66,
        "vario": 0.1196226595
    },
    {
        "time": "2022-07-30T16:24:55.000Z",
        "latitude": 60.9229709,
        "longitude": 11.7484142,
        "altitude": 1504.811,
        "vario": 0.2539885551
    },
    {
        "time": "2022-07-30T16:24:56.000Z",
        "latitude": 60.9228646,
        "longitude": 11.7480322,
        "altitude": 1505.517,
        "vario": 0.3785101163
    },
    {
        "time": "2022-07-30T16:24:57.000Z",
        "latitude": 60.9227631,
        "longitude": 11.7476447,
        "altitude": 1506.504,
        "vario": 0.48660127
    },
    {
        "time": "2022-07-30T16:24:58.000Z",
        "latitude": 60.9226617,
        "longitude": 11.7472585,
        "altitude": 1507.126,
        "vario": 0.5712940841
    },
    {
        "time": "2022-07-30T16:24:59.000Z",
        "latitude": 60.9225539,
        "longitude": 11.7468811,
        "altitude": 1507.841,
        "vario": 0.6260548857
    },
    {
        "time": "2022-07-30T16:25:00.000Z",
        "latitude": 60.9224344,
        "longitude": 11.7465295,
        "altitude": 1509.215,
        "vario": 0.6457956284
    },
    {
        "time": "2022-07-30T16:25:01.000Z",
        "latitude": 60.9222961,
        "longitude": 11.746223,
        "altitude": 1511.031,
        "vario": 0.6279156704
    },
    {
        "time": "2022-07-30T16:25:02.000Z",
        "latitude": 60.9221344,
        "longitude": 11.7459723,
        "altitude": 1512.79,
        "vario": 0.5732241624
    },
    {
        "time": "2022-07-30T16:25:03.000Z",
        "latitude": 60.9219509,
        "longitude": 11.7457976,
        "altitude": 1513.541,
        "vario": 0.4864772403
    },
    {
        "time": "2022-07-30T16:25:04.000Z",
        "latitude": 60.9217564,
        "longitude": 11.7457409,
        "altitude": 1514.356,
        "vario": 0.3763136437
    },
    {
        "time": "2022-07-30T16:25:05.000Z",
        "latitude": 60.9215645,
        "longitude": 11.7458073,
        "altitude": 1516.228,
        "vario": 0.2545100793
    },
    {
        "time": "2022-07-30T16:25:06.000Z",
        "latitude": 60.9213831,
        "longitude": 11.7459755,
        "altitude": 1517.911,
        "vario": 0.1345523427
    },
    {
        "time": "2022-07-30T16:25:07.000Z",
        "latitude": 60.9212122,
        "longitude": 11.7462257,
        "altitude": 1518.309,
        "vario": 0.0296364035
    },
    {
        "time": "2022-07-30T16:25:08.000Z",
        "latitude": 60.9210525,
        "longitude": 11.7465445,
        "altitude": 1516.332,
        "vario": -0.0494932799
    },
    {
        "time": "2022-07-30T16:25:09.000Z",
        "latitude": 60.9209095,
        "longitude": 11.7469275,
        "altitude": 1512.701,
        "vario": -0.0963523051
    },
    {
        "time": "2022-07-30T16:25:10.000Z",
        "latitude": 60.9207834,
        "longitude": 11.7473624,
        "altitude": 1508.941,
        "vario": -0.1098094778
    },
    {
        "time": "2022-07-30T16:25:11.000Z",
        "latitude": 60.9206665,
        "longitude": 11.7478302,
        "altitude": 1507.173,
        "vario": -0.0941902125
    },
    {
        "time": "2022-07-30T16:25:12.000Z",
        "latitude": 60.9205592,
        "longitude": 11.7482958,
        "altitude": 1507.611,
        "vario": -0.058290571
    },
    {
        "time": "2022-07-30T16:25:13.000Z",
        "latitude": 60.9204586,
        "longitude": 11.7487405,
        "altitude": 1510.534,
        "vario": -0.013592339
    },
    {
        "time": "2022-07-30T16:25:14.000Z",
        "latitude": 60.9203527,
        "longitude": 11.7491698,
        "altitude": 1512.421,
        "vario": 0.0279004441
    },
    {
        "time": "2022-07-30T16:25:15.000Z",
        "latitude": 60.9202415,
        "longitude": 11.7495801,
        "altitude": 1513.491,
        "vario": 0.0557858821
    },
    {
        "time": "2022-07-30T16:25:16.000Z",
        "latitude": 60.9201319,
        "longitude": 11.7499718,
        "altitude": 1513.7,
        "vario": 0.0629494015
    },
    {
        "time": "2022-07-30T16:25:17.000Z",
        "latitude": 60.9200207,
        "longitude": 11.7503584,
        "altitude": 1513.551,
        "vario": 0.0465402431
    },
    {
        "time": "2022-07-30T16:25:18.000Z",
        "latitude": 60.9199049,
        "longitude": 11.7507518,
        "altitude": 1513.338,
        "vario": 0.0081775462
    },
    {
        "time": "2022-07-30T16:25:19.000Z",
        "latitude": 60.919789,
        "longitude": 11.7511535,
        "altitude": 1513.469,
        "vario": -0.0465170572
    },
    {
        "time": "2022-07-30T16:25:20.000Z",
        "latitude": 60.9196765,
        "longitude": 11.7515627,
        "altitude": 1514.29,
        "vario": -0.108894114
    },
    {
        "time": "2022-07-30T16:25:21.000Z",
        "latitude": 60.9195682,
        "longitude": 11.7519674,
        "altitude": 1514.736,
        "vario": -0.1685700446
    },
    {
        "time": "2022-07-30T16:25:22.000Z",
        "latitude": 60.9194598,
        "longitude": 11.7523625,
        "altitude": 1514.649,
        "vario": -0.2150005707
    },
    {
        "time": "2022-07-30T16:25:23.000Z",
        "latitude": 60.9193467,
        "longitude": 11.7527385,
        "altitude": 1514.271,
        "vario": -0.2391164878
    },
    {
        "time": "2022-07-30T16:25:24.000Z",
        "latitude": 60.9192269,
        "longitude": 11.7530882,
        "altitude": 1512.8,
        "vario": -0.2347281378
    },
    {
        "time": "2022-07-30T16:25:25.000Z",
        "latitude": 60.9190948,
        "longitude": 11.7534009,
        "altitude": 1510.606,
        "vario": -0.199590706
    },
    {
        "time": "2022-07-30T16:25:26.000Z",
        "latitude": 60.918949,
        "longitude": 11.7536656,
        "altitude": 1508.225,
        "vario": -0.1359223633
    },
    {
        "time": "2022-07-30T16:25:27.000Z",
        "latitude": 60.9187864,
        "longitude": 11.7538689,
        "altitude": 1506.941,
        "vario": -0.0501582934
    },
    {
        "time": "2022-07-30T16:25:28.000Z",
        "latitude": 60.9186097,
        "longitude": 11.7540088,
        "altitude": 1506.748,
        "vario": 0.048111025
    },
    {
        "time": "2022-07-30T16:25:29.000Z",
        "latitude": 60.918419,
        "longitude": 11.7540852,
        "altitude": 1507.674,
        "vario": 0.1477961822
    },
    {
        "time": "2022-07-30T16:25:30.000Z",
        "latitude": 60.918211,
        "longitude": 11.7541107,
        "altitude": 1509.524,
        "vario": 0.2382837605
    },
    {
        "time": "2022-07-30T16:25:31.000Z",
        "latitude": 60.9180025,
        "longitude": 11.7541176,
        "altitude": 1511.442,
        "vario": 0.3113660347
    },
    {
        "time": "2022-07-30T16:25:32.000Z",
        "latitude": 60.9178116,
        "longitude": 11.7541272,
        "altitude": 1512.541,
        "vario": 0.3626072691
    },
    {
        "time": "2022-07-30T16:25:33.000Z",
        "latitude": 60.9176296,
        "longitude": 11.7541343,
        "altitude": 1513.672,
        "vario": 0.3918445453
    },
    {
        "time": "2022-07-30T16:25:34.000Z",
        "latitude": 60.9174449,
        "longitude": 11.754134,
        "altitude": 1514.919,
        "vario": 0.4027604795
    },
    {
        "time": "2022-07-30T16:25:35.000Z",
        "latitude": 60.9172577,
        "longitude": 11.7541272,
        "altitude": 1515.854,
        "vario": 0.4015014074
    },
    {
        "time": "2022-07-30T16:25:36.000Z",
        "latitude": 60.9170687,
        "longitude": 11.7541183,
        "altitude": 1515.743,
        "vario": 0.3947857199
    },
    {
        "time": "2022-07-30T16:25:37.000Z",
        "latitude": 60.9168762,
        "longitude": 11.7541028,
        "altitude": 1514.898,
        "vario": 0.3880242399
    },
    {
        "time": "2022-07-30T16:25:38.000Z",
        "latitude": 60.9166832,
        "longitude": 11.7540744,
        "altitude": 1513.828,
        "vario": 0.3837232333
    },
    {
        "time": "2022-07-30T16:25:39.000Z",
        "latitude": 60.9164955,
        "longitude": 11.7540277,
        "altitude": 1513.051,
        "vario": 0.380667036
    },
    {
        "time": "2022-07-30T16:25:40.000Z",
        "latitude": 60.9163137,
        "longitude": 11.7539522,
        "altitude": 1512.443,
        "vario": 0.3740880312
    },
    {
        "time": "2022-07-30T16:25:41.000Z",
        "latitude": 60.9161346,
        "longitude": 11.7538212,
        "altitude": 1512.299,
        "vario": 0.3567401361
    },
    {
        "time": "2022-07-30T16:25:42.000Z",
        "latitude": 60.9159716,
        "longitude": 11.7536033,
        "altitude": 1514.692,
        "vario": 0.3205908518
    },
    {
        "time": "2022-07-30T16:25:43.000Z",
        "latitude": 60.9158385,
        "longitude": 11.7533259,
        "altitude": 1517.771,
        "vario": 0.2586851071
    },
    {
        "time": "2022-07-30T16:25:44.000Z",
        "latitude": 60.9157361,
        "longitude": 11.75302,
        "altitude": 1518.886,
        "vario": 0.1667619962
    },
    {
        "time": "2022-07-30T16:25:45.000Z",
        "latitude": 60.9156623,
        "longitude": 11.7526735,
        "altitude": 1519.849,
        "vario": 0.0442009096
    },
    {
        "time": "2022-07-30T16:25:46.000Z",
        "latitude": 60.9156132,
        "longitude": 11.7522868,
        "altitude": 1521.175,
        "vario": -0.1058113169
    },
    {
        "time": "2022-07-30T16:25:47.000Z",
        "latitude": 60.9155788,
        "longitude": 11.7518735,
        "altitude": 1521.197,
        "vario": -0.2768331528
    },
    {
        "time": "2022-07-30T16:25:48.000Z",
        "latitude": 60.9155567,
        "longitude": 11.7514374,
        "altitude": 1519.38,
        "vario": -0.4602664568
    },
    {
        "time": "2022-07-30T16:25:49.000Z",
        "latitude": 60.91556,
        "longitude": 11.7509922,
        "altitude": 1517.782,
        "vario": -0.6465381914
    },
    {
        "time": "2022-07-30T16:25:50.000Z",
        "latitude": 60.9155959,
        "longitude": 11.7505528,
        "altitude": 1516.339,
        "vario": -0.8261658078
    },
    {
        "time": "2022-07-30T16:25:51.000Z",
        "latitude": 60.9156635,
        "longitude": 11.7501215,
        "altitude": 1514.944,
        "vario": -0.9905645592
    },
    {
        "time": "2022-07-30T16:25:52.000Z",
        "latitude": 60.9157678,
        "longitude": 11.7496904,
        "altitude": 1514.382,
        "vario": -1.1324815029
    },
    {
        "time": "2022-07-30T16:25:53.000Z",
        "latitude": 60.9159061,
        "longitude": 11.7492567,
        "altitude": 1513.593,
        "vario": -1.2461473538
    },
    {
        "time": "2022-07-30T16:25:54.000Z",
        "latitude": 60.9160784,
        "longitude": 11.7488321,
        "altitude": 1512.188,
        "vario": -1.3272968917
    },
    {
        "time": "2022-07-30T16:25:55.000Z",
        "latitude": 60.9162819,
        "longitude": 11.7484591,
        "altitude": 1511.027,
        "vario": -1.3732456228
    },
    {
        "time": "2022-07-30T16:25:56.000Z",
        "latitude": 60.9165058,
        "longitude": 11.748153,
        "altitude": 1508.403,
        "vario": -1.3829921023
    },
    {
        "time": "2022-07-30T16:25:57.000Z",
        "latitude": 60.9167569,
        "longitude": 11.7479125,
        "altitude": 1504.376,
        "vario": -1.3572682015
    },
    {
        "time": "2022-07-30T16:25:58.000Z",
        "latitude": 60.9170467,
        "longitude": 11.747756,
        "altitude": 1501.619,
        "vario": -1.2984602668
    },
    {
        "time": "2022-07-30T16:25:59.000Z",
        "latitude": 60.9173619,
        "longitude": 11.7476928,
        "altitude": 1500.071,
        "vario": -1.210370137
    },
    {
        "time": "2022-07-30T16:26:00.000Z",
        "latitude": 60.917687,
        "longitude": 11.7477218,
        "altitude": 1499.806,
        "vario": -1.0978388946
    },
    {
        "time": "2022-07-30T16:26:01.000Z",
        "latitude": 60.9180118,
        "longitude": 11.7478287,
        "altitude": 1499.846,
        "vario": -0.9662541981
    },
    {
        "time": "2022-07-30T16:26:02.000Z",
        "latitude": 60.9183304,
        "longitude": 11.748009,
        "altitude": 1499.364,
        "vario": -0.8210907713
    },
    {
        "time": "2022-07-30T16:26:03.000Z",
        "latitude": 60.9186351,
        "longitude": 11.7482643,
        "altitude": 1498.482,
        "vario": -0.6675696695
    },
    {
        "time": "2022-07-30T16:26:04.000Z",
        "latitude": 60.9189126,
        "longitude": 11.7485842,
        "altitude": 1497.184,
        "vario": -0.5105280462
    },
    {
        "time": "2022-07-30T16:26:05.000Z",
        "latitude": 60.9191572,
        "longitude": 11.7489654,
        "altitude": 1496.234,
        "vario": -0.3544748775
    },
    {
        "time": "2022-07-30T16:26:06.000Z",
        "latitude": 60.9193629,
        "longitude": 11.7494062,
        "altitude": 1495.222,
        "vario": -0.2036362664
    },
    {
        "time": "2022-07-30T16:26:07.000Z",
        "latitude": 60.9195137,
        "longitude": 11.7499007,
        "altitude": 1495.367,
        "vario": -0.0619439199
    },
    {
        "time": "2022-07-30T16:26:08.000Z",
        "latitude": 60.9196092,
        "longitude": 11.7504276,
        "altitude": 1496.887,
        "vario": 0.0670674087
    },
    {
        "time": "2022-07-30T16:26:09.000Z",
        "latitude": 60.9196688,
        "longitude": 11.7509527,
        "altitude": 1496.745,
        "vario": 0.1805306289
    },
    {
        "time": "2022-07-30T16:26:10.000Z",
        "latitude": 60.9197173,
        "longitude": 11.7514636,
        "altitude": 1497.061,
        "vario": 0.2766520456
    },
    {
        "time": "2022-07-30T16:26:11.000Z",
        "latitude": 60.919754,
        "longitude": 11.7519841,
        "altitude": 1498.391,
        "vario": 0.3550391548
    },
    {
        "time": "2022-07-30T16:26:12.000Z",
        "latitude": 60.9197907,
        "longitude": 11.7525167,
        "altitude": 1499.948,
        "vario": 0.4168361401
    },
    {
        "time": "2022-07-30T16:26:13.000Z",
        "latitude": 60.9198287,
        "longitude": 11.7530495,
        "altitude": 1499.99,
        "vario": 0.4646660049
    },
    {
        "time": "2022-07-30T16:26:14.000Z",
        "latitude": 60.919875,
        "longitude": 11.7535615,
        "altitude": 1499.892,
        "vario": 0.5022605676
    },
    {
        "time": "2022-07-30T16:26:15.000Z",
        "latitude": 60.9199248,
        "longitude": 11.7540529,
        "altitude": 1501.031,
        "vario": 0.5338680275
    },
    {
        "time": "2022-07-30T16:26:16.000Z",
        "latitude": 60.9199743,
        "longitude": 11.7545409,
        "altitude": 1502.303,
        "vario": 0.5635836252
    },
    {
        "time": "2022-07-30T16:26:17.000Z",
        "latitude": 60.9200235,
        "longitude": 11.7550427,
        "altitude": 1502.597,
        "vario": 0.5946105148
    },
    {
        "time": "2022-07-30T16:26:18.000Z",
        "latitude": 60.9200775,
        "longitude": 11.7555551,
        "altitude": 1501.637,
        "vario": 0.6287373276
    },
    {
        "time": "2022-07-30T16:26:19.000Z",
        "latitude": 60.9201384,
        "longitude": 11.756067,
        "altitude": 1501.18,
        "vario": 0.6661876172
    },
    {
        "time": "2022-07-30T16:26:20.000Z",
        "latitude": 60.9201988,
        "longitude": 11.7565639,
        "altitude": 1501.985,
        "vario": 0.7056671916
    },
    {
        "time": "2022-07-30T16:26:21.000Z",
        "latitude": 60.9202571,
        "longitude": 11.7570436,
        "altitude": 1503.21,
        "vario": 0.744676855
    },
    {
        "time": "2022-07-30T16:26:22.000Z",
        "latitude": 60.920317,
        "longitude": 11.7575239,
        "altitude": 1504.718,
        "vario": 0.7800529379
    },
    {
        "time": "2022-07-30T16:26:23.000Z",
        "latitude": 60.9203819,
        "longitude": 11.7580172,
        "altitude": 1506.456,
        "vario": 0.8085270642
    },
    {
        "time": "2022-07-30T16:26:24.000Z",
        "latitude": 60.9204567,
        "longitude": 11.7585212,
        "altitude": 1507.614,
        "vario": 0.8272337965
    },
    {
        "time": "2022-07-30T16:26:25.000Z",
        "latitude": 60.9205416,
        "longitude": 11.7590266,
        "altitude": 1507.624,
        "vario": 0.8340771633
    },
    {
        "time": "2022-07-30T16:26:26.000Z",
        "latitude": 60.9206332,
        "longitude": 11.759525,
        "altitude": 1508.15,
        "vario": 0.8279227896
    },
    {
        "time": "2022-07-30T16:26:27.000Z",
        "latitude": 60.9207277,
        "longitude": 11.7600116,
        "altitude": 1509.603,
        "vario": 0.808598609
    },
    {
        "time": "2022-07-30T16:26:28.000Z",
        "latitude": 60.9208262,
        "longitude": 11.7604892,
        "altitude": 1511.115,
        "vario": 0.7767938646
    },
    {
        "time": "2022-07-30T16:26:29.000Z",
        "latitude": 60.9209298,
        "longitude": 11.7609717,
        "altitude": 1512.019,
        "vario": 0.7339174472
    },
    {
        "time": "2022-07-30T16:26:30.000Z",
        "latitude": 60.9210386,
        "longitude": 11.7614648,
        "altitude": 1512.655,
        "vario": 0.6818309509
    },
    {
        "time": "2022-07-30T16:26:31.000Z",
        "latitude": 60.9211504,
        "longitude": 11.7619594,
        "altitude": 1513.553,
        "vario": 0.6226237672
    },
    {
        "time": "2022-07-30T16:26:32.000Z",
        "latitude": 60.9212614,
        "longitude": 11.7624518,
        "altitude": 1514.338,
        "vario": 0.5584446731
    },
    {
        "time": "2022-07-30T16:26:33.000Z",
        "latitude": 60.9213699,
        "longitude": 11.7629437,
        "altitude": 1514.753,
        "vario": 0.4913456676
    },
    {
        "time": "2022-07-30T16:26:34.000Z",
        "latitude": 60.921473,
        "longitude": 11.7634373,
        "altitude": 1514.917,
        "vario": 0.4231964602
    },
    {
        "time": "2022-07-30T16:26:35.000Z",
        "latitude": 60.9215631,
        "longitude": 11.7639287,
        "altitude": 1514.298,
        "vario": 0.3557053481
    },
    {
        "time": "2022-07-30T16:26:36.000Z",
        "latitude": 60.9216264,
        "longitude": 11.7644111,
        "altitude": 1514.538,
        "vario": 0.2905377261
    },
    {
        "time": "2022-07-30T16:26:37.000Z",
        "latitude": 60.9216555,
        "longitude": 11.7648824,
        "altitude": 1516.241,
        "vario": 0.2294011177
    },
    {
        "time": "2022-07-30T16:26:38.000Z",
        "latitude": 60.9216581,
        "longitude": 11.7653507,
        "altitude": 1516.668,
        "vario": 0.1740683986
    },
    {
        "time": "2022-07-30T16:26:39.000Z",
        "latitude": 60.9216278,
        "longitude": 11.7658097,
        "altitude": 1516.287,
        "vario": 0.1262895681
    },
    {
        "time": "2022-07-30T16:26:40.000Z",
        "latitude": 60.9215601,
        "longitude": 11.7662208,
        "altitude": 1516.407,
        "vario": 0.0876087425
    },
    {
        "time": "2022-07-30T16:26:41.000Z",
        "latitude": 60.9214642,
        "longitude": 11.766557,
        "altitude": 1516.305,
        "vario": 0.0591307053
    },
    {
        "time": "2022-07-30T16:26:42.000Z",
        "latitude": 60.9213462,
        "longitude": 11.7668117,
        "altitude": 1515.654,
        "vario": 0.0412472115
    },
    {
        "time": "2022-07-30T16:26:43.000Z",
        "latitude": 60.9212072,
        "longitude": 11.766978,
        "altitude": 1514.888,
        "vario": 0.0334291882
    },
    {
        "time": "2022-07-30T16:26:44.000Z",
        "latitude": 60.9210532,
        "longitude": 11.7670495,
        "altitude": 1514.35,
        "vario": 0.0342188649
    },
    {
        "time": "2022-07-30T16:26:45.000Z",
        "latitude": 60.9208973,
        "longitude": 11.7670193,
        "altitude": 1514.185,
        "vario": 0.0413350828
    },
    {
        "time": "2022-07-30T16:26:46.000Z",
        "latitude": 60.9207454,
        "longitude": 11.7668853,
        "altitude": 1514.763,
        "vario": 0.0518324713
    },
    {
        "time": "2022-07-30T16:26:47.000Z",
        "latitude": 60.9206086,
        "longitude": 11.7666743,
        "altitude": 1516.042,
        "vario": 0.0623867839
    },
    {
        "time": "2022-07-30T16:26:48.000Z",
        "latitude": 60.9204988,
        "longitude": 11.7664231,
        "altitude": 1516.885,
        "vario": 0.069597854
    },
    {
        "time": "2022-07-30T16:26:49.000Z",
        "latitude": 60.9204176,
        "longitude": 11.7661452,
        "altitude": 1516.76,
        "vario": 0.0702182788
    },
    {
        "time": "2022-07-30T16:26:50.000Z",
        "latitude": 60.92037,
        "longitude": 11.765824,
        "altitude": 1515.727,
        "vario": 0.0614100079
    },
    {
        "time": "2022-07-30T16:26:51.000Z",
        "latitude": 60.9203655,
        "longitude": 11.7654537,
        "altitude": 1514.896,
        "vario": 0.0411408151
    },
    {
        "time": "2022-07-30T16:26:52.000Z",
        "latitude": 60.9204087,
        "longitude": 11.7650503,
        "altitude": 1514.963,
        "vario": 0.0086954449
    },
    {
        "time": "2022-07-30T16:26:53.000Z",
        "latitude": 60.9205045,
        "longitude": 11.7646328,
        "altitude": 1515.442,
        "vario": -0.0348240775
    },
    {
        "time": "2022-07-30T16:26:54.000Z",
        "latitude": 60.9206542,
        "longitude": 11.7642333,
        "altitude": 1516.65,
        "vario": -0.0862127391
    },
    {
        "time": "2022-07-30T16:26:55.000Z",
        "latitude": 60.9208594,
        "longitude": 11.7638951,
        "altitude": 1518.297,
        "vario": -0.140341342
    },
    {
        "time": "2022-07-30T16:26:56.000Z",
        "latitude": 60.921111,
        "longitude": 11.7636572,
        "altitude": 1519.582,
        "vario": -0.190931724
    },
    {
        "time": "2022-07-30T16:26:57.000Z",
        "latitude": 60.9213834,
        "longitude": 11.763523,
        "altitude": 1519.149,
        "vario": -0.231860278
    },
    {
        "time": "2022-07-30T16:26:58.000Z",
        "latitude": 60.9216719,
        "longitude": 11.7634775,
        "altitude": 1517.165,
        "vario": -0.2588402142
    },
    {
        "time": "2022-07-30T16:26:59.000Z",
        "latitude": 60.9219852,
        "longitude": 11.7635393,
        "altitude": 1514.8,
        "vario": -0.271139857
    },
    {
        "time": "2022-07-30T16:27:00.000Z",
        "latitude": 60.9223003,
        "longitude": 11.7637348,
        "altitude": 1512.576,
        "vario": -0.2726594328
    },
    {
        "time": "2022-07-30T16:27:01.000Z",
        "latitude": 60.9225864,
        "longitude": 11.7640432,
        "altitude": 1510.432,
        "vario": -0.2718892071
    },
    {
        "time": "2022-07-30T16:27:02.000Z",
        "latitude": 60.9228349,
        "longitude": 11.7644519,
        "altitude": 1509.319,
        "vario": -0.2806936896
    },
    {
        "time": "2022-07-30T16:27:03.000Z",
        "latitude": 60.9230458,
        "longitude": 11.7649522,
        "altitude": 1510.164,
        "vario": -0.3119866495
    },
    {
        "time": "2022-07-30T16:27:04.000Z",
        "latitude": 60.9232179,
        "longitude": 11.7655027,
        "altitude": 1511.939,
        "vario": -0.3767484206
    },
    {
        "time": "2022-07-30T16:27:05.000Z",
        "latitude": 60.9233406,
        "longitude": 11.7660785,
        "altitude": 1515.354,
        "vario": -0.481071171
    },
    {
        "time": "2022-07-30T16:27:06.000Z",
        "latitude": 60.9234043,
        "longitude": 11.7666481,
        "altitude": 1518.798,
        "vario": -0.6239351498
    },
    {
        "time": "2022-07-30T16:27:07.000Z",
        "latitude": 60.9234182,
        "longitude": 11.7671817,
        "altitude": 1519.776,
        "vario": -0.7962982537
    },
    {
        "time": "2022-07-30T16:27:08.000Z",
        "latitude": 60.9233892,
        "longitude": 11.7676709,
        "altitude": 1517.607,
        "vario": -0.9816410047
    },
    {
        "time": "2022-07-30T16:27:09.000Z",
        "latitude": 60.9233051,
        "longitude": 11.7681129,
        "altitude": 1514.459,
        "vario": -1.1579235844
    },
    {
        "time": "2022-07-30T16:27:10.000Z",
        "latitude": 60.923163,
        "longitude": 11.7684979,
        "altitude": 1511.878,
        "vario": -1.3006383892
    },
    {
        "time": "2022-07-30T16:27:11.000Z",
        "latitude": 60.9229776,
        "longitude": 11.7687934,
        "altitude": 1509.765,
        "vario": -1.3863512694
    },
    {
        "time": "2022-07-30T16:27:12.000Z",
        "latitude": 60.9227721,
        "longitude": 11.7689826,
        "altitude": 1507.177,
        "vario": -1.3961605405
    },
    {
        "time": "2022-07-30T16:27:13.000Z",
        "latitude": 60.9225593,
        "longitude": 11.7690653,
        "altitude": 1503.331,
        "vario": -1.3185520855
    },
    {
        "time": "2022-07-30T16:27:14.000Z",
        "latitude": 60.9223426,
        "longitude": 11.769022,
        "altitude": 1499.248,
        "vario": -1.151335654
    },
    {
        "time": "2022-07-30T16:27:15.000Z",
        "latitude": 60.9221339,
        "longitude": 11.7688213,
        "altitude": 1496.472,
        "vario": -0.9023651047
    },
    {
        "time": "2022-07-30T16:27:16.000Z",
        "latitude": 60.9219551,
        "longitude": 11.768487,
        "altitude": 1493.883,
        "vario": -0.5888770644
    },
    {
        "time": "2022-07-30T16:27:17.000Z",
        "latitude": 60.921823,
        "longitude": 11.7680462,
        "altitude": 1491.256,
        "vario": -0.2356126622
    },
    {
        "time": "2022-07-30T16:27:18.000Z",
        "latitude": 60.9217605,
        "longitude": 11.7675193,
        "altitude": 1490.438,
        "vario": 0.1281346378
    },
    {
        "time": "2022-07-30T16:27:19.000Z",
        "latitude": 60.921777,
        "longitude": 11.766943,
        "altitude": 1492.28,
        "vario": 0.4722223582
    },
    {
        "time": "2022-07-30T16:27:20.000Z",
        "latitude": 60.921876,
        "longitude": 11.7663701,
        "altitude": 1495.91,
        "vario": 0.7695931803
    },
    {
        "time": "2022-07-30T16:27:21.000Z",
        "latitude": 60.9220506,
        "longitude": 11.7658569,
        "altitude": 1500.184,
        "vario": 0.9998199533
    },
    {
        "time": "2022-07-30T16:27:22.000Z",
        "latitude": 60.9222891,
        "longitude": 11.7654592,
        "altitude": 1504.351,
        "vario": 1.1516999591
    },
    {
        "time": "2022-07-30T16:27:23.000Z",
        "latitude": 60.9225715,
        "longitude": 11.7651968,
        "altitude": 1507.464,
        "vario": 1.2244905937
    },
    {
        "time": "2022-07-30T16:27:24.000Z",
        "latitude": 60.9228834,
        "longitude": 11.7650576,
        "altitude": 1510.327,
        "vario": 1.2275403004
    },
    {
        "time": "2022-07-30T16:27:25.000Z",
        "latitude": 60.9232123,
        "longitude": 11.7650295,
        "altitude": 1512.185,
        "vario": 1.1783504674
    },
    {
        "time": "2022-07-30T16:27:26.000Z",
        "latitude": 60.9235403,
        "longitude": 11.7651231,
        "altitude": 1513.753,
        "vario": 1.0994034664
    },
    {
        "time": "2022-07-30T16:27:27.000Z",
        "latitude": 60.9238515,
        "longitude": 11.7653331,
        "altitude": 1515.122,
        "vario": 1.0143361094
    },
    {
        "time": "2022-07-30T16:27:28.000Z",
        "latitude": 60.924134,
        "longitude": 11.7656281,
        "altitude": 1514.177,
        "vario": 0.9441135302
    },
    {
        "time": "2022-07-30T16:27:29.000Z",
        "latitude": 60.9243835,
        "longitude": 11.7660128,
        "altitude": 1511.607,
        "vario": 0.9038883546
    },
    {
        "time": "2022-07-30T16:27:30.000Z",
        "latitude": 60.9245841,
        "longitude": 11.7665094,
        "altitude": 1509.519,
        "vario": 0.901113558
    },
    {
        "time": "2022-07-30T16:27:31.000Z",
        "latitude": 60.9247185,
        "longitude": 11.767098,
        "altitude": 1508.803,
        "vario": 0.9351285668
    },
    {
        "time": "2022-07-30T16:27:32.000Z",
        "latitude": 60.924778,
        "longitude": 11.767712,
        "altitude": 1509.729,
        "vario": 0.9981808425
    },
    {
        "time": "2022-07-30T16:27:33.000Z",
        "latitude": 60.9247594,
        "longitude": 11.7682859,
        "altitude": 1511.204,
        "vario": 1.0776002843
    },
    {
        "time": "2022-07-30T16:27:34.000Z",
        "latitude": 60.9246682,
        "longitude": 11.7687515,
        "altitude": 1513.949,
        "vario": 1.1585862417
    },
    {
        "time": "2022-07-30T16:27:35.000Z",
        "latitude": 60.9245267,
        "longitude": 11.7690842,
        "altitude": 1516.686,
        "vario": 1.2270289138
    },
    {
        "time": "2022-07-30T16:27:36.000Z",
        "latitude": 60.9243561,
        "longitude": 11.7692832,
        "altitude": 1518.813,
        "vario": 1.2717647528
    },
    {
        "time": "2022-07-30T16:27:37.000Z",
        "latitude": 60.9241753,
        "longitude": 11.7693413,
        "altitude": 1521.52,
        "vario": 1.2858291957
    },
    {
        "time": "2022-07-30T16:27:38.000Z",
        "latitude": 60.9240052,
        "longitude": 11.7692714,
        "altitude": 1523.825,
        "vario": 1.2666741413
    },
    {
        "time": "2022-07-30T16:27:39.000Z",
        "latitude": 60.9238579,
        "longitude": 11.7691041,
        "altitude": 1525.594,
        "vario": 1.2155623735
    },
    {
        "time": "2022-07-30T16:27:40.000Z",
        "latitude": 60.9237402,
        "longitude": 11.7688598,
        "altitude": 1526.437,
        "vario": 1.1364020491
    },
    {
        "time": "2022-07-30T16:27:41.000Z",
        "latitude": 60.9236569,
        "longitude": 11.7685497,
        "altitude": 1526.991,
        "vario": 1.0344278289
    },
    {
        "time": "2022-07-30T16:27:42.000Z",
        "latitude": 60.9236065,
        "longitude": 11.7681894,
        "altitude": 1526.947,
        "vario": 0.9151828541
    },
    {
        "time": "2022-07-30T16:27:43.000Z",
        "latitude": 60.9235928,
        "longitude": 11.7677852,
        "altitude": 1527.177,
        "vario": 0.7840099117
    },
    {
        "time": "2022-07-30T16:27:44.000Z",
        "latitude": 60.9236184,
        "longitude": 11.7673495,
        "altitude": 1527.994,
        "vario": 0.6460269045
    },
    {
        "time": "2022-07-30T16:27:45.000Z",
        "latitude": 60.923687,
        "longitude": 11.7669071,
        "altitude": 1529.224,
        "vario": 0.5064286062
    },
    {
        "time": "2022-07-30T16:27:46.000Z",
        "latitude": 60.9238058,
        "longitude": 11.7664884,
        "altitude": 1531.665,
        "vario": 0.3707448006
    },
    {
        "time": "2022-07-30T16:27:47.000Z",
        "latitude": 60.9239654,
        "longitude": 11.7661149,
        "altitude": 1533.476,
        "vario": 0.244777984
    },
    {
        "time": "2022-07-30T16:27:48.000Z",
        "latitude": 60.9241585,
        "longitude": 11.7658009,
        "altitude": 1533.54,
        "vario": 0.134152272
    },
    {
        "time": "2022-07-30T16:27:49.000Z",
        "latitude": 60.9243831,
        "longitude": 11.7655598,
        "altitude": 1531.924,
        "vario": 0.0434786282
    },
    {
        "time": "2022-07-30T16:27:50.000Z",
        "latitude": 60.9246401,
        "longitude": 11.7654078,
        "altitude": 1529.485,
        "vario": -0.0245753048
    },
    {
        "time": "2022-07-30T16:27:51.000Z",
        "latitude": 60.9249283,
        "longitude": 11.7653724,
        "altitude": 1527.61,
        "vario": -0.0699006475
    },
    {
        "time": "2022-07-30T16:27:52.000Z",
        "latitude": 60.9252344,
        "longitude": 11.7654785,
        "altitude": 1526.478,
        "vario": -0.0950053848
    },
    {
        "time": "2022-07-30T16:27:53.000Z",
        "latitude": 60.9255263,
        "longitude": 11.7657308,
        "altitude": 1526.389,
        "vario": -0.1043758492
    },
    {
        "time": "2022-07-30T16:27:54.000Z",
        "latitude": 60.925781,
        "longitude": 11.7660922,
        "altitude": 1526.983,
        "vario": -0.1032490773
    },
    {
        "time": "2022-07-30T16:27:55.000Z",
        "latitude": 60.9259979,
        "longitude": 11.7665288,
        "altitude": 1527.781,
        "vario": -0.0961053537
    },
    {
        "time": "2022-07-30T16:27:56.000Z",
        "latitude": 60.9261682,
        "longitude": 11.7670342,
        "altitude": 1529.414,
        "vario": -0.0853300956
    },
    {
        "time": "2022-07-30T16:27:57.000Z",
        "latitude": 60.9262762,
        "longitude": 11.7675791,
        "altitude": 1531.115,
        "vario": -0.070494615
    },
    {
        "time": "2022-07-30T16:27:58.000Z",
        "latitude": 60.9263278,
        "longitude": 11.7681199,
        "altitude": 1531.443,
        "vario": -0.0484295934
    },
    {
        "time": "2022-07-30T16:27:59.000Z",
        "latitude": 60.9263248,
        "longitude": 11.7686215,
        "altitude": 1530.06,
        "vario": -0.0141420896
    },
    {
        "time": "2022-07-30T16:28:00.000Z",
        "latitude": 60.9262668,
        "longitude": 11.769057,
        "altitude": 1528.196,
        "vario": 0.0376514977
    },
    {
        "time": "2022-07-30T16:28:01.000Z",
        "latitude": 60.9261451,
        "longitude": 11.7693893,
        "altitude": 1526.804,
        "vario": 0.1108483829
    },
    {
        "time": "2022-07-30T16:28:02.000Z",
        "latitude": 60.9259689,
        "longitude": 11.7695717,
        "altitude": 1526.019,
        "vario": 0.2065476773
    },
    {
        "time": "2022-07-30T16:28:03.000Z",
        "latitude": 60.9257829,
        "longitude": 11.7695812,
        "altitude": 1526.12,
        "vario": 0.3222493142
    },
    {
        "time": "2022-07-30T16:28:04.000Z",
        "latitude": 60.9256191,
        "longitude": 11.7694513,
        "altitude": 1526.258,
        "vario": 0.4519220162
    },
    {
        "time": "2022-07-30T16:28:05.000Z",
        "latitude": 60.9254845,
        "longitude": 11.7692225,
        "altitude": 1526.271,
        "vario": 0.58688392
    },
    {
        "time": "2022-07-30T16:28:06.000Z",
        "latitude": 60.9253864,
        "longitude": 11.7688927,
        "altitude": 1526.82,
        "vario": 0.7172227818
    },
    {
        "time": "2022-07-30T16:28:07.000Z",
        "latitude": 60.9253459,
        "longitude": 11.7684834,
        "altitude": 1528.61,
        "vario": 0.8335108248
    },
    {
        "time": "2022-07-30T16:28:08.000Z",
        "latitude": 60.9253649,
        "longitude": 11.7680475,
        "altitude": 1530.927,
        "vario": 0.9283683671
    },
    {
        "time": "2022-07-30T16:28:09.000Z",
        "latitude": 60.9254406,
        "longitude": 11.7676163,
        "altitude": 1533.041,
        "vario": 0.9975126102
    },
    {
        "time": "2022-07-30T16:28:10.000Z",
        "latitude": 60.9255706,
        "longitude": 11.7672213,
        "altitude": 1535.356,
        "vario": 1.0401454998
    },
    {
        "time": "2022-07-30T16:28:11.000Z",
        "latitude": 60.9257487,
        "longitude": 11.7668919,
        "altitude": 1537.341,
        "vario": 1.058572723
    },
    {
        "time": "2022-07-30T16:28:12.000Z",
        "latitude": 60.9259647,
        "longitude": 11.7666424,
        "altitude": 1538.592,
        "vario": 1.0571838972
    },
    {
        "time": "2022-07-30T16:28:13.000Z",
        "latitude": 60.9262065,
        "longitude": 11.7664726,
        "altitude": 1538.822,
        "vario": 1.0410704434
    },
    {
        "time": "2022-07-30T16:28:14.000Z",
        "latitude": 60.9264693,
        "longitude": 11.7663848,
        "altitude": 1538.602,
        "vario": 1.0146319327
    },
    {
        "time": "2022-07-30T16:28:15.000Z",
        "latitude": 60.9267477,
        "longitude": 11.7663938,
        "altitude": 1538.78,
        "vario": 0.9805285136
    },
    {
        "time": "2022-07-30T16:28:16.000Z",
        "latitude": 60.9270286,
        "longitude": 11.7665021,
        "altitude": 1539.293,
        "vario": 0.939226946
    },
    {
        "time": "2022-07-30T16:28:17.000Z",
        "latitude": 60.9272992,
        "longitude": 11.7667007,
        "altitude": 1540.425,
        "vario": 0.889244033
    },
    {
        "time": "2022-07-30T16:28:18.000Z",
        "latitude": 60.9275515,
        "longitude": 11.7669785,
        "altitude": 1542.038,
        "vario": 0.8279650026
    },
    {
        "time": "2022-07-30T16:28:19.000Z",
        "latitude": 60.9277802,
        "longitude": 11.7673186,
        "altitude": 1543.565,
        "vario": 0.7528007371
    },
    {
        "time": "2022-07-30T16:28:20.000Z",
        "latitude": 60.9279806,
        "longitude": 11.7677104,
        "altitude": 1545.179,
        "vario": 0.662420997
    },
    {
        "time": "2022-07-30T16:28:21.000Z",
        "latitude": 60.9281472,
        "longitude": 11.7681375,
        "altitude": 1546.176,
        "vario": 0.5577290691
    },
    {
        "time": "2022-07-30T16:28:22.000Z",
        "latitude": 60.9282742,
        "longitude": 11.7685973,
        "altitude": 1547.534,
        "vario": 0.4423051114
    },
    {
        "time": "2022-07-30T16:28:23.000Z",
        "latitude": 60.9283573,
        "longitude": 11.7690734,
        "altitude": 1548.637,
        "vario": 0.3222058976
    },
    {
        "time": "2022-07-30T16:28:24.000Z",
        "latitude": 60.9284042,
        "longitude": 11.7695452,
        "altitude": 1548.602,
        "vario": 0.2051726589
    },
    {
        "time": "2022-07-30T16:28:25.000Z",
        "latitude": 60.9284165,
        "longitude": 11.7700083,
        "altitude": 1547.928,
        "vario": 0.0994229462
    },
    {
        "time": "2022-07-30T16:28:26.000Z",
        "latitude": 60.928389,
        "longitude": 11.7704569,
        "altitude": 1547.363,
        "vario": 0.0122918592
    },
    {
        "time": "2022-07-30T16:28:27.000Z",
        "latitude": 60.9283222,
        "longitude": 11.770871,
        "altitude": 1546.455,
        "vario": -0.050940236
    },
    {
        "time": "2022-07-30T16:28:28.000Z",
        "latitude": 60.928224,
        "longitude": 11.7712405,
        "altitude": 1545.318,
        "vario": -0.087773441
    },
    {
        "time": "2022-07-30T16:28:29.000Z",
        "latitude": 60.9281012,
        "longitude": 11.7715447,
        "altitude": 1544.014,
        "vario": -0.0986410966
    },
    {
        "time": "2022-07-30T16:28:30.000Z",
        "latitude": 60.9279606,
        "longitude": 11.7717631,
        "altitude": 1542.875,
        "vario": -0.086469885
    },
    {
        "time": "2022-07-30T16:28:31.000Z",
        "latitude": 60.9278078,
        "longitude": 11.771894,
        "altitude": 1542.618,
        "vario": -0.0557960406
    },
    {
        "time": "2022-07-30T16:28:32.000Z",
        "latitude": 60.9276458,
        "longitude": 11.7719528,
        "altitude": 1543.474,
        "vario": -0.011719167
    },
    {
        "time": "2022-07-30T16:28:33.000Z",
        "latitude": 60.9274777,
        "longitude": 11.7719663,
        "altitude": 1544.818,
        "vario": 0.0409740152
    },
    {
        "time": "2022-07-30T16:28:34.000Z",
        "latitude": 60.9273075,
        "longitude": 11.7719598,
        "altitude": 1546.249,
        "vario": 0.0982633117
    },
    {
        "time": "2022-07-30T16:28:35.000Z",
        "latitude": 60.9271358,
        "longitude": 11.7719481,
        "altitude": 1546.812,
        "vario": 0.1568587862
    },
    {
        "time": "2022-07-30T16:28:36.000Z",
        "latitude": 60.9269631,
        "longitude": 11.7719391,
        "altitude": 1546.011,
        "vario": 0.2137667356
    },
    {
        "time": "2022-07-30T16:28:37.000Z",
        "latitude": 60.926791,
        "longitude": 11.7719352,
        "altitude": 1544.631,
        "vario": 0.2656412465
    },
    {
        "time": "2022-07-30T16:28:38.000Z",
        "latitude": 60.9266199,
        "longitude": 11.7719353,
        "altitude": 1543.773,
        "vario": 0.3082673181
    },
    {
        "time": "2022-07-30T16:28:39.000Z",
        "latitude": 60.9264481,
        "longitude": 11.7719349,
        "altitude": 1543.746,
        "vario": 0.3364714411
    },
    {
        "time": "2022-07-30T16:28:40.000Z",
        "latitude": 60.9262777,
        "longitude": 11.7719271,
        "altitude": 1544.499,
        "vario": 0.3445764039
    },
    {
        "time": "2022-07-30T16:28:41.000Z",
        "latitude": 60.9261114,
        "longitude": 11.7719079,
        "altitude": 1546.271,
        "vario": 0.3273725391
    },
    {
        "time": "2022-07-30T16:28:42.000Z",
        "latitude": 60.9259427,
        "longitude": 11.7718714,
        "altitude": 1548.498,
        "vario": 0.2813431958
    },
    {
        "time": "2022-07-30T16:28:43.000Z",
        "latitude": 60.9257721,
        "longitude": 11.7718233,
        "altitude": 1550.245,
        "vario": 0.2058725613
    },
    {
        "time": "2022-07-30T16:28:44.000Z",
        "latitude": 60.9256057,
        "longitude": 11.7717709,
        "altitude": 1551.219,
        "vario": 0.1041068498
    },
    {
        "time": "2022-07-30T16:28:45.000Z",
        "latitude": 60.9254469,
        "longitude": 11.7717085,
        "altitude": 1551.105,
        "vario": -0.0168261597
    },
    {
        "time": "2022-07-30T16:28:46.000Z",
        "latitude": 60.9252974,
        "longitude": 11.771634,
        "altitude": 1550.779,
        "vario": -0.1463328508
    },
    {
        "time": "2022-07-30T16:28:47.000Z",
        "latitude": 60.925153,
        "longitude": 11.7715488,
        "altitude": 1550.425,
        "vario": -0.2715992727
    },
    {
        "time": "2022-07-30T16:28:48.000Z",
        "latitude": 60.9250038,
        "longitude": 11.7714556,
        "altitude": 1550.249,
        "vario": -0.3794394969
    },
    {
        "time": "2022-07-30T16:28:49.000Z",
        "latitude": 60.9248428,
        "longitude": 11.7713601,
        "altitude": 1549.639,
        "vario": -0.4584782266
    },
    {
        "time": "2022-07-30T16:28:50.000Z",
        "latitude": 60.9246703,
        "longitude": 11.7712782,
        "altitude": 1548.233,
        "vario": -0.5012772807
    },
    {
        "time": "2022-07-30T16:28:51.000Z",
        "latitude": 60.9244925,
        "longitude": 11.7712259,
        "altitude": 1546.231,
        "vario": -0.5059823384
    },
    {
        "time": "2022-07-30T16:28:52.000Z",
        "latitude": 60.9243129,
        "longitude": 11.7712025,
        "altitude": 1543.204,
        "vario": -0.4771121575
    },
    {
        "time": "2022-07-30T16:28:53.000Z",
        "latitude": 60.9241289,
        "longitude": 11.7711986,
        "altitude": 1540.322,
        "vario": -0.4252323403
    },
    {
        "time": "2022-07-30T16:28:54.000Z",
        "latitude": 60.9239412,
        "longitude": 11.7712025,
        "altitude": 1538.704,
        "vario": -0.365423508
    },
    {
        "time": "2022-07-30T16:28:55.000Z",
        "latitude": 60.9237568,
        "longitude": 11.7712065,
        "altitude": 1538.706,
        "vario": -0.3147271742
    },
    {
        "time": "2022-07-30T16:28:56.000Z",
        "latitude": 60.9235818,
        "longitude": 11.7712015,
        "altitude": 1540.266,
        "vario": -0.2890879768
    },
    {
        "time": "2022-07-30T16:28:57.000Z",
        "latitude": 60.9234198,
        "longitude": 11.771187,
        "altitude": 1543.489,
        "vario": -0.3004486766
    },
    {
        "time": "2022-07-30T16:28:58.000Z",
        "latitude": 60.9232675,
        "longitude": 11.7711744,
        "altitude": 1547.045,
        "vario": -0.3546399144
    },
    {
        "time": "2022-07-30T16:28:59.000Z",
        "latitude": 60.9231122,
        "longitude": 11.7711712,
        "altitude": 1549.475,
        "vario": -0.4505394833
    },
    {
        "time": "2022-07-30T16:29:00.000Z",
        "latitude": 60.922952,
        "longitude": 11.7711838,
        "altitude": 1549.279,
        "vario": -0.5807143393
    },
    {
        "time": "2022-07-30T16:29:01.000Z",
        "latitude": 60.9227946,
        "longitude": 11.7712235,
        "altitude": 1547.004,
        "vario": -0.7333625322
    },
    {
        "time": "2022-07-30T16:29:02.000Z",
        "latitude": 60.9226431,
        "longitude": 11.7712776,
        "altitude": 1543.929,
        "vario": -0.8949512902
    },
    {
        "time": "2022-07-30T16:29:03.000Z",
        "latitude": 60.9224942,
        "longitude": 11.7713208,
        "altitude": 1541.125,
        "vario": -1.0528979141
    },
    {
        "time": "2022-07-30T16:29:04.000Z",
        "latitude": 60.9223463,
        "longitude": 11.7713436,
        "altitude": 1538.788,
        "vario": -1.1977141851
    },
    {
        "time": "2022-07-30T16:29:05.000Z",
        "latitude": 60.9221956,
        "longitude": 11.7713453,
        "altitude": 1536.938,
        "vario": -1.3242004065
    },
    {
        "time": "2022-07-30T16:29:06.000Z",
        "latitude": 60.9220425,
        "longitude": 11.7713317,
        "altitude": 1535.803,
        "vario": -1.4316012109
    },
    {
        "time": "2022-07-30T16:29:07.000Z",
        "latitude": 60.92189,
        "longitude": 11.7713141,
        "altitude": 1534.951,
        "vario": -1.5229031702
    },
    {
        "time": "2022-07-30T16:29:08.000Z",
        "latitude": 60.9217396,
        "longitude": 11.7712992,
        "altitude": 1533.804,
        "vario": -1.6036377667
    },
    {
        "time": "2022-07-30T16:29:09.000Z",
        "latitude": 60.9215916,
        "longitude": 11.7712924,
        "altitude": 1532.712,
        "vario": -1.6806770859
    },
    {
        "time": "2022-07-30T16:29:10.000Z",
        "latitude": 60.9214447,
        "longitude": 11.771295,
        "altitude": 1531.222,
        "vario": -1.7612674253
    },
    {
        "time": "2022-07-30T16:29:11.000Z",
        "latitude": 60.9212986,
        "longitude": 11.7713093,
        "altitude": 1529.037,
        "vario": -1.852371937
    },
    {
        "time": "2022-07-30T16:29:12.000Z",
        "latitude": 60.9211532,
        "longitude": 11.7713327,
        "altitude": 1526.79,
        "vario": -1.9602866129
    },
    {
        "time": "2022-07-30T16:29:13.000Z",
        "latitude": 60.9210086,
        "longitude": 11.7713617,
        "altitude": 1525.058,
        "vario": -2.0903400985
    },
    {
        "time": "2022-07-30T16:29:14.000Z",
        "latitude": 60.9208658,
        "longitude": 11.771394,
        "altitude": 1523.184,
        "vario": -2.2465441626
    },
    {
        "time": "2022-07-30T16:29:15.000Z",
        "latitude": 60.9207235,
        "longitude": 11.7714234,
        "altitude": 1521.012,
        "vario": -2.4310774565
    },
    {
        "time": "2022-07-30T16:29:16.000Z",
        "latitude": 60.92058,
        "longitude": 11.7714424,
        "altitude": 1519.086,
        "vario": -2.6435961459
    },
    {
        "time": "2022-07-30T16:29:17.000Z",
        "latitude": 60.9204363,
        "longitude": 11.7714436,
        "altitude": 1517.615,
        "vario": -2.8806087363
    },
    {
        "time": "2022-07-30T16:29:18.000Z",
        "latitude": 60.9202942,
        "longitude": 11.7714323,
        "altitude": 1516.33,
        "vario": -3.1350707453
    },
    {
        "time": "2022-07-30T16:29:19.000Z",
        "latitude": 60.9201523,
        "longitude": 11.7714159,
        "altitude": 1513.826,
        "vario": -3.3963505293
    },
    {
        "time": "2022-07-30T16:29:20.000Z",
        "latitude": 60.920008,
        "longitude": 11.7713854,
        "altitude": 1510.369,
        "vario": -3.6507623475
    },
    {
        "time": "2022-07-30T16:29:21.000Z",
        "latitude": 60.9198668,
        "longitude": 11.7713265,
        "altitude": 1506.285,
        "vario": -3.8825837565
    },
    {
        "time": "2022-07-30T16:29:22.000Z",
        "latitude": 60.9197374,
        "longitude": 11.771228,
        "altitude": 1500.942,
        "vario": -4.0753661995
    },
    {
        "time": "2022-07-30T16:29:23.000Z",
        "latitude": 60.9196242,
        "longitude": 11.7710763,
        "altitude": 1494.496,
        "vario": -4.2133334135
    },
    {
        "time": "2022-07-30T16:29:24.000Z",
        "latitude": 60.9195289,
        "longitude": 11.7708442,
        "altitude": 1487.965,
        "vario": -4.2826593725
    },
    {
        "time": "2022-07-30T16:29:25.000Z",
        "latitude": 60.9194699,
        "longitude": 11.7705035,
        "altitude": 1482.569,
        "vario": -4.2725226672
    },
    {
        "time": "2022-07-30T16:29:26.000Z",
        "latitude": 60.9194834,
        "longitude": 11.7700774,
        "altitude": 1478.044,
        "vario": -4.1759004585
    },
    {
        "time": "2022-07-30T16:29:27.000Z",
        "latitude": 60.9195937,
        "longitude": 11.7696362,
        "altitude": 1473.419,
        "vario": -3.9901457396
    },
    {
        "time": "2022-07-30T16:29:28.000Z",
        "latitude": 60.9197954,
        "longitude": 11.7692687,
        "altitude": 1467.62,
        "vario": -3.7174861306
    },
    {
        "time": "2022-07-30T16:29:29.000Z",
        "latitude": 60.9200731,
        "longitude": 11.7690409,
        "altitude": 1462.794,
        "vario": -3.3654711243
    },
    {
        "time": "2022-07-30T16:29:30.000Z",
        "latitude": 60.9203977,
        "longitude": 11.7690183,
        "altitude": 1458.342,
        "vario": -2.9472788546
    },
    {
        "time": "2022-07-30T16:29:31.000Z",
        "latitude": 60.9207135,
        "longitude": 11.7692374,
        "altitude": 1454.548,
        "vario": -2.4817664404
    },
    {
        "time": "2022-07-30T16:29:32.000Z",
        "latitude": 60.9209737,
        "longitude": 11.7696303,
        "altitude": 1450.992,
        "vario": -1.9929389236
    },
    {
        "time": "2022-07-30T16:29:33.000Z",
        "latitude": 60.9211683,
        "longitude": 11.7701367,
        "altitude": 1447.587,
        "vario": -1.5086107782
    },
    {
        "time": "2022-07-30T16:29:34.000Z",
        "latitude": 60.9212694,
        "longitude": 11.7707172,
        "altitude": 1446.266,
        "vario": -1.0582238368
    },
    {
        "time": "2022-07-30T16:29:35.000Z",
        "latitude": 60.9212694,
        "longitude": 11.7712837,
        "altitude": 1447.109,
        "vario": -0.6699335754
    },
    {
        "time": "2022-07-30T16:29:36.000Z",
        "latitude": 60.9212027,
        "longitude": 11.7717587,
        "altitude": 1449.137,
        "vario": -0.367402398
    },
    {
        "time": "2022-07-30T16:29:37.000Z",
        "latitude": 60.9210945,
        "longitude": 11.7721142,
        "altitude": 1453.369,
        "vario": -0.1668220644
    },
    {
        "time": "2022-07-30T16:29:38.000Z",
        "latitude": 60.9209692,
        "longitude": 11.7723599,
        "altitude": 1457.623,
        "vario": -0.0747911954
    },
    {
        "time": "2022-07-30T16:29:39.000Z",
        "latitude": 60.9208402,
        "longitude": 11.7725248,
        "altitude": 1460.379,
        "vario": -0.0875893857
    },
    {
        "time": "2022-07-30T16:29:40.000Z",
        "latitude": 60.9207163,
        "longitude": 11.77264,
        "altitude": 1462.002,
        "vario": -0.1920646327
    },
    {
        "time": "2022-07-30T16:29:41.000Z",
        "latitude": 60.9205939,
        "longitude": 11.772726,
        "altitude": 1462.215,
        "vario": -0.367962887
    },
    {
        "time": "2022-07-30T16:29:42.000Z",
        "latitude": 60.9204689,
        "longitude": 11.7727945,
        "altitude": 1461.275,
        "vario": -0.591269538
    },
    {
        "time": "2022-07-30T16:29:43.000Z",
        "latitude": 60.9203399,
        "longitude": 11.772858,
        "altitude": 1459.272,
        "vario": -0.8379317997
    },
    {
        "time": "2022-07-30T16:29:44.000Z",
        "latitude": 60.9202013,
        "longitude": 11.7729218,
        "altitude": 1456.237,
        "vario": -1.0871785088
    },
    {
        "time": "2022-07-30T16:29:45.000Z",
        "latitude": 60.9200568,
        "longitude": 11.7729885,
        "altitude": 1453.227,
        "vario": -1.3238062032
    },
    {
        "time": "2022-07-30T16:29:46.000Z",
        "latitude": 60.9199126,
        "longitude": 11.7730592,
        "altitude": 1450.455,
        "vario": -1.5390120963
    },
    {
        "time": "2022-07-30T16:29:47.000Z",
        "latitude": 60.9197697,
        "longitude": 11.7731284,
        "altitude": 1448.291,
        "vario": -1.7297337215
    },
    {
        "time": "2022-07-30T16:29:48.000Z",
        "latitude": 60.9196278,
        "longitude": 11.7731904,
        "altitude": 1446.666,
        "vario": -1.8968071441
    },
    {
        "time": "2022-07-30T16:29:49.000Z",
        "latitude": 60.9194866,
        "longitude": 11.7732426,
        "altitude": 1444.991,
        "vario": -2.0424516568
    },
    {
        "time": "2022-07-30T16:29:50.000Z",
        "latitude": 60.9193455,
        "longitude": 11.7732853,
        "altitude": 1443.535,
        "vario": -2.1677234232
    },
    {
        "time": "2022-07-30T16:29:51.000Z",
        "latitude": 60.9192027,
        "longitude": 11.7733235,
        "altitude": 1443.026,
        "vario": -2.2706856882
    },
    {
        "time": "2022-07-30T16:29:52.000Z",
        "latitude": 60.9190643,
        "longitude": 11.773364,
        "altitude": 1441.539,
        "vario": -2.3457437236
    },
    {
        "time": "2022-07-30T16:29:53.000Z",
        "latitude": 60.9189246,
        "longitude": 11.7734125,
        "altitude": 1439.62,
        "vario": -2.3842993127
    },
    {
        "time": "2022-07-30T16:29:54.000Z",
        "latitude": 60.918779,
        "longitude": 11.7734729,
        "altitude": 1436.481,
        "vario": -2.3766288184
    },
    {
        "time": "2022-07-30T16:29:55.000Z",
        "latitude": 60.9186217,
        "longitude": 11.7735526,
        "altitude": 1431.825,
        "vario": -2.3144462236
    },
    {
        "time": "2022-07-30T16:29:56.000Z",
        "latitude": 60.9184524,
        "longitude": 11.7736644,
        "altitude": 1426.733,
        "vario": -2.1936397679
    },
    {
        "time": "2022-07-30T16:29:57.000Z",
        "latitude": 60.9182802,
        "longitude": 11.7738133,
        "altitude": 1421.544,
        "vario": -2.0165354693
    },
    {
        "time": "2022-07-30T16:29:58.000Z",
        "latitude": 60.9181123,
        "longitude": 11.7739888,
        "altitude": 1417.149,
        "vario": -1.792977689
    },
    {
        "time": "2022-07-30T16:29:59.000Z",
        "latitude": 60.9179466,
        "longitude": 11.7741792,
        "altitude": 1414.76,
        "vario": -1.5399976914
    },
    {
        "time": "2022-07-30T16:30:00.000Z",
        "latitude": 60.917779,
        "longitude": 11.7743895,
        "altitude": 1414.13,
        "vario": -1.2801580506
    },
    {
        "time": "2022-07-30T16:30:01.000Z",
        "latitude": 60.9176041,
        "longitude": 11.7746271,
        "altitude": 1414.425,
        "vario": -1.038768929
    },
    {
        "time": "2022-07-30T16:30:02.000Z",
        "latitude": 60.917432,
        "longitude": 11.7748965,
        "altitude": 1415.197,
        "vario": -0.8406058945
    },
    {
        "time": "2022-07-30T16:30:03.000Z",
        "latitude": 60.9172788,
        "longitude": 11.7751731,
        "altitude": 1416.028,
        "vario": -0.7067589886
    },
    {
        "time": "2022-07-30T16:30:04.000Z",
        "latitude": 60.9171432,
        "longitude": 11.7754307,
        "altitude": 1417.319,
        "vario": -0.6521629176
    },
    {
        "time": "2022-07-30T16:30:05.000Z",
        "latitude": 60.9170146,
        "longitude": 11.7756703,
        "altitude": 1419.705,
        "vario": -0.6842853255
    },
    {
        "time": "2022-07-30T16:30:06.000Z",
        "latitude": 60.9168884,
        "longitude": 11.775903,
        "altitude": 1421.816,
        "vario": -0.8030495887
    },
    {
        "time": "2022-07-30T16:30:07.000Z",
        "latitude": 60.9167638,
        "longitude": 11.7761425,
        "altitude": 1422.729,
        "vario": -1.0019013561
    },
    {
        "time": "2022-07-30T16:30:08.000Z",
        "latitude": 60.9166396,
        "longitude": 11.7763948,
        "altitude": 1421.834,
        "vario": -1.2696305675
    },
    {
        "time": "2022-07-30T16:30:09.000Z",
        "latitude": 60.9165157,
        "longitude": 11.776657,
        "altitude": 1418.906,
        "vario": -1.5923989258
    },
    {
        "time": "2022-07-30T16:30:10.000Z",
        "latitude": 60.9163947,
        "longitude": 11.7769201,
        "altitude": 1415.383,
        "vario": -1.9554407542
    },
    {
        "time": "2022-07-30T16:30:11.000Z",
        "latitude": 60.9162768,
        "longitude": 11.7771746,
        "altitude": 1412.746,
        "vario": -2.3440387758
    },
    {
        "time": "2022-07-30T16:30:12.000Z",
        "latitude": 60.9161591,
        "longitude": 11.7774281,
        "altitude": 1410.927,
        "vario": -2.7436065977
    },
    {
        "time": "2022-07-30T16:30:13.000Z",
        "latitude": 60.9160386,
        "longitude": 11.7777046,
        "altitude": 1409.807,
        "vario": -3.1390720136
    },
    {
        "time": "2022-07-30T16:30:14.000Z",
        "latitude": 60.9159148,
        "longitude": 11.7780176,
        "altitude": 1407.581,
        "vario": -3.5138283236
    },
    {
        "time": "2022-07-30T16:30:15.000Z",
        "latitude": 60.9157938,
        "longitude": 11.7783738,
        "altitude": 1403.179,
        "vario": -3.8486337606
    },
    {
        "time": "2022-07-30T16:30:16.000Z",
        "latitude": 60.9156865,
        "longitude": 11.778759,
        "altitude": 1398.134,
        "vario": -4.121114258
    },
    {
        "time": "2022-07-30T16:30:17.000Z",
        "latitude": 60.9155844,
        "longitude": 11.7791558,
        "altitude": 1392.978,
        "vario": -4.3061429193
    },
    {
        "time": "2022-07-30T16:30:18.000Z",
        "latitude": 60.9154736,
        "longitude": 11.7795585,
        "altitude": 1387.443,
        "vario": -4.3775000636
    },
    {
        "time": "2022-07-30T16:30:19.000Z",
        "latitude": 60.9153495,
        "longitude": 11.779951,
        "altitude": 1381.045,
        "vario": -4.310958733
    },
    {
        "time": "2022-07-30T16:30:20.000Z",
        "latitude": 60.9152049,
        "longitude": 11.7803075,
        "altitude": 1374.875,
        "vario": -4.0883682
    },
    {
        "time": "2022-07-30T16:30:21.000Z",
        "latitude": 60.9150364,
        "longitude": 11.7805953,
        "altitude": 1368.318,
        "vario": -3.7021886773
    },
    {
        "time": "2022-07-30T16:30:22.000Z",
        "latitude": 60.9148412,
        "longitude": 11.7807792,
        "altitude": 1361.842,
        "vario": -3.1595120002
    },
    {
        "time": "2022-07-30T16:30:23.000Z",
        "latitude": 60.91463,
        "longitude": 11.7808363,
        "altitude": 1353.811,
        "vario": -2.4843714347
    },
    {
        "time": "2022-07-30T16:30:24.000Z",
        "latitude": 60.9144176,
        "longitude": 11.7807275,
        "altitude": 1345.157,
        "vario": -1.7173308417
    },
    {
        "time": "2022-07-30T16:30:25.000Z",
        "latitude": 60.9142247,
        "longitude": 11.7804302,
        "altitude": 1337.736,
        "vario": -0.9118020558
    },
    {
        "time": "2022-07-30T16:30:26.000Z",
        "latitude": 60.9140648,
        "longitude": 11.7799609,
        "altitude": 1334.56,
        "vario": -0.1272712486
    },
    {
        "time": "2022-07-30T16:30:27.000Z",
        "latitude": 60.9139288,
        "longitude": 11.7793822,
        "altitude": 1338.556,
        "vario": 0.579377626
    },
    {
        "time": "2022-07-30T16:30:28.000Z",
        "latitude": 60.9137867,
        "longitude": 11.7788486,
        "altitude": 1349.947,
        "vario": 1.162679904
    },
    {
        "time": "2022-07-30T16:30:29.000Z",
        "latitude": 60.9136066,
        "longitude": 11.7785052,
        "altitude": 1365.509,
        "vario": 1.5955146637
    },
    {
        "time": "2022-07-30T16:30:30.000Z",
        "latitude": 60.9133854,
        "longitude": 11.7783841,
        "altitude": 1378.845,
        "vario": 1.8723332194
    },
    {
        "time": "2022-07-30T16:30:31.000Z",
        "latitude": 60.9131556,
        "longitude": 11.7784882,
        "altitude": 1385.331,
        "vario": 2.0078940906
    },
    {
        "time": "2022-07-30T16:30:32.000Z",
        "latitude": 60.9129661,
        "longitude": 11.7788047,
        "altitude": 1383.526,
        "vario": 2.0319081179
    },
    {
        "time": "2022-07-30T16:30:33.000Z",
        "latitude": 60.9128649,
        "longitude": 11.779308,
        "altitude": 1377.248,
        "vario": 1.9810543133
    },
    {
        "time": "2022-07-30T16:30:34.000Z",
        "latitude": 60.9128814,
        "longitude": 11.779937,
        "altitude": 1371.152,
        "vario": 1.8905808796
    },
    {
        "time": "2022-07-30T16:30:35.000Z",
        "latitude": 60.9130212,
        "longitude": 11.7805696,
        "altitude": 1368.214,
        "vario": 1.787641045
    },
    {
        "time": "2022-07-30T16:30:36.000Z",
        "latitude": 60.9132687,
        "longitude": 11.7810625,
        "altitude": 1370.769,
        "vario": 1.6877643232
    },
    {
        "time": "2022-07-30T16:30:37.000Z",
        "latitude": 60.9135818,
        "longitude": 11.7814153,
        "altitude": 1374.623,
        "vario": 1.5949231485
    },
    {
        "time": "2022-07-30T16:30:38.000Z",
        "latitude": 60.9139261,
        "longitude": 11.7815369,
        "altitude": 1379.897,
        "vario": 1.504493822
    },
    {
        "time": "2022-07-30T16:30:39.000Z",
        "latitude": 60.9142505,
        "longitude": 11.7814272,
        "altitude": 1384.758,
        "vario": 1.4076966945
    },
    {
        "time": "2022-07-30T16:30:40.000Z",
        "latitude": 60.9145213,
        "longitude": 11.7811345,
        "altitude": 1388.025,
        "vario": 1.2959721926
    },
    {
        "time": "2022-07-30T16:30:41.000Z",
        "latitude": 60.9147246,
        "longitude": 11.78071,
        "altitude": 1389.557,
        "vario": 1.1640727079
    },
    {
        "time": "2022-07-30T16:30:42.000Z",
        "latitude": 60.9148507,
        "longitude": 11.7802161,
        "altitude": 1390.255,
        "vario": 1.0112746822
    },
    {
        "time": "2022-07-30T16:30:43.000Z",
        "latitude": 60.9149075,
        "longitude": 11.7797106,
        "altitude": 1390.238,
        "vario": 0.8408171361
    },
    {
        "time": "2022-07-30T16:30:44.000Z",
        "latitude": 60.9149136,
        "longitude": 11.7792189,
        "altitude": 1389.991,
        "vario": 0.6581836833
    },
    {
        "time": "2022-07-30T16:30:45.000Z",
        "latitude": 60.9148878,
        "longitude": 11.7787472,
        "altitude": 1389.371,
        "vario": 0.4690956967
    },
    {
        "time": "2022-07-30T16:30:46.000Z",
        "latitude": 60.9148424,
        "longitude": 11.7782914,
        "altitude": 1388.743,
        "vario": 0.2779460471
    },
    {
        "time": "2022-07-30T16:30:47.000Z",
        "latitude": 60.9147865,
        "longitude": 11.7778462,
        "altitude": 1389.172,
        "vario": 0.087059282
    },
    {
        "time": "2022-07-30T16:30:48.000Z",
        "latitude": 60.9147265,
        "longitude": 11.7774159,
        "altitude": 1390.005,
        "vario": -0.1031117331
    },
    {
        "time": "2022-07-30T16:30:49.000Z",
        "latitude": 60.914664,
        "longitude": 11.7769959,
        "altitude": 1390.613,
        "vario": -0.2931157695
    },
    {
        "time": "2022-07-30T16:30:50.000Z",
        "latitude": 60.9145987,
        "longitude": 11.7765809,
        "altitude": 1390.696,
        "vario": -0.4833874683
    },
    {
        "time": "2022-07-30T16:30:51.000Z",
        "latitude": 60.9145313,
        "longitude": 11.7761671,
        "altitude": 1390.375,
        "vario": -0.6732735082
    },
    {
        "time": "2022-07-30T16:30:52.000Z",
        "latitude": 60.9144625,
        "longitude": 11.7757543,
        "altitude": 1389.622,
        "vario": -0.8604297533
    },
    {
        "time": "2022-07-30T16:30:53.000Z",
        "latitude": 60.9143917,
        "longitude": 11.7753437,
        "altitude": 1388.884,
        "vario": -1.0406864464
    },
    {
        "time": "2022-07-30T16:30:54.000Z",
        "latitude": 60.9143171,
        "longitude": 11.7749356,
        "altitude": 1387.581,
        "vario": -1.2083555866
    },
    {
        "time": "2022-07-30T16:30:55.000Z",
        "latitude": 60.9142372,
        "longitude": 11.7745252,
        "altitude": 1385.412,
        "vario": -1.3568943827
    },
    {
        "time": "2022-07-30T16:30:56.000Z",
        "latitude": 60.9141517,
        "longitude": 11.7741098,
        "altitude": 1383.182,
        "vario": -1.4797765726
    },
    {
        "time": "2022-07-30T16:30:57.000Z",
        "latitude": 60.9140601,
        "longitude": 11.7736913,
        "altitude": 1381.255,
        "vario": -1.5713338388
    },
    {
        "time": "2022-07-30T16:30:58.000Z",
        "latitude": 60.9139634,
        "longitude": 11.7732719,
        "altitude": 1379.346,
        "vario": -1.6275844874
    },
    {
        "time": "2022-07-30T16:30:59.000Z",
        "latitude": 60.9138617,
        "longitude": 11.7728523,
        "altitude": 1376.968,
        "vario": -1.6468551745
    },
    {
        "time": "2022-07-30T16:31:00.000Z",
        "latitude": 60.9137562,
        "longitude": 11.7724309,
        "altitude": 1374.418,
        "vario": -1.6300992329
    },
    {
        "time": "2022-07-30T16:31:01.000Z",
        "latitude": 60.9136469,
        "longitude": 11.7720061,
        "altitude": 1372.217,
        "vario": -1.5810461134
    },
    {
        "time": "2022-07-30T16:31:02.000Z",
        "latitude": 60.9135338,
        "longitude": 11.7715778,
        "altitude": 1369.954,
        "vario": -1.506054797
    },
    {
        "time": "2022-07-30T16:31:03.000Z",
        "latitude": 60.913417,
        "longitude": 11.7711455,
        "altitude": 1368.176,
        "vario": -1.413635238
    },
    {
        "time": "2022-07-30T16:31:04.000Z",
        "latitude": 60.9132958,
        "longitude": 11.7707054,
        "altitude": 1366.485,
        "vario": -1.3136869863
    },
    {
        "time": "2022-07-30T16:31:05.000Z",
        "latitude": 60.9131717,
        "longitude": 11.7702603,
        "altitude": 1364.966,
        "vario": -1.2164802484
    },
    {
        "time": "2022-07-30T16:31:06.000Z",
        "latitude": 60.9130473,
        "longitude": 11.7698162,
        "altitude": 1364.309,
        "vario": -1.1315129329
    },
    {
        "time": "2022-07-30T16:31:07.000Z",
        "latitude": 60.9129246,
        "longitude": 11.7693776,
        "altitude": 1364.529,
        "vario": -1.0664105653
    },
    {
        "time": "2022-07-30T16:31:08.000Z",
        "latitude": 60.912803,
        "longitude": 11.7689445,
        "altitude": 1364.803,
        "vario": -1.0259749191
    },
    {
        "time": "2022-07-30T16:31:09.000Z",
        "latitude": 60.9126817,
        "longitude": 11.7685141,
        "altitude": 1364.491,
        "vario": -1.0116489263
    },
    {
        "time": "2022-07-30T16:31:10.000Z",
        "latitude": 60.9125604,
        "longitude": 11.7680888,
        "altitude": 1364.044,
        "vario": -1.0215693279
    },
    {
        "time": "2022-07-30T16:31:11.000Z",
        "latitude": 60.9124371,
        "longitude": 11.7676669,
        "altitude": 1363.451,
        "vario": -1.0512016622
    },
    {
        "time": "2022-07-30T16:31:12.000Z",
        "latitude": 60.9123126,
        "longitude": 11.7672489,
        "altitude": 1362.757,
        "vario": -1.0944888109
    },
    {
        "time": "2022-07-30T16:31:13.000Z",
        "latitude": 60.9121868,
        "longitude": 11.7668359,
        "altitude": 1361.394,
        "vario": -1.1453609103
    },
    {
        "time": "2022-07-30T16:31:14.000Z",
        "latitude": 60.9120591,
        "longitude": 11.7664241,
        "altitude": 1359.724,
        "vario": -1.1992788361
    },
    {
        "time": "2022-07-30T16:31:15.000Z",
        "latitude": 60.9119312,
        "longitude": 11.7660138,
        "altitude": 1357.979,
        "vario": -1.2544450252
    },
    {
        "time": "2022-07-30T16:31:16.000Z",
        "latitude": 60.9118034,
        "longitude": 11.765605,
        "altitude": 1355.597,
        "vario": -1.3123416076
    },
    {
        "time": "2022-07-30T16:31:17.000Z",
        "latitude": 60.9116761,
        "longitude": 11.7651945,
        "altitude": 1352.873,
        "vario": -1.3773554312
    },
    {
        "time": "2022-07-30T16:31:18.000Z",
        "latitude": 60.9115506,
        "longitude": 11.7647781,
        "altitude": 1350.958,
        "vario": -1.4555269105
    },
    {
        "time": "2022-07-30T16:31:19.000Z",
        "latitude": 60.9114277,
        "longitude": 11.7643526,
        "altitude": 1349.984,
        "vario": -1.5526023366
    },
    {
        "time": "2022-07-30T16:31:20.000Z",
        "latitude": 60.9113082,
        "longitude": 11.763927,
        "altitude": 1349.784,
        "vario": -1.6718348602
    },
    {
        "time": "2022-07-30T16:31:21.000Z",
        "latitude": 60.911188,
        "longitude": 11.7635112,
        "altitude": 1350.753,
        "vario": -1.8121159161
    },
    {
        "time": "2022-07-30T16:31:22.000Z",
        "latitude": 60.9110608,
        "longitude": 11.7631139,
        "altitude": 1351.922,
        "vario": -1.9669400193
    },
    {
        "time": "2022-07-30T16:31:23.000Z",
        "latitude": 60.9109239,
        "longitude": 11.762745,
        "altitude": 1351.662,
        "vario": -2.1245883038
    },
    {
        "time": "2022-07-30T16:31:24.000Z",
        "latitude": 60.9107818,
        "longitude": 11.7624116,
        "altitude": 1348.995,
        "vario": -2.269585828
    },
    {
        "time": "2022-07-30T16:31:25.000Z",
        "latitude": 60.9106362,
        "longitude": 11.7620972,
        "altitude": 1343.814,
        "vario": -2.3851347981
    },
    {
        "time": "2022-07-30T16:31:26.000Z",
        "latitude": 60.9104837,
        "longitude": 11.7617759,
        "altitude": 1338.313,
        "vario": -2.4559604963
    },
    {
        "time": "2022-07-30T16:31:27.000Z",
        "latitude": 60.9103245,
        "longitude": 11.7614413,
        "altitude": 1333.426,
        "vario": -2.4709607039
    },
    {
        "time": "2022-07-30T16:31:28.000Z",
        "latitude": 60.9101611,
        "longitude": 11.761097,
        "altitude": 1328.971,
        "vario": -2.4251322019
    },
    {
        "time": "2022-07-30T16:31:29.000Z",
        "latitude": 60.9099953,
        "longitude": 11.7607431,
        "altitude": 1325.231,
        "vario": -2.3203837354
    },
    {
        "time": "2022-07-30T16:31:30.000Z",
        "latitude": 60.9098275,
        "longitude": 11.7603765,
        "altitude": 1322.768,
        "vario": -2.1651937812
    },
    {
        "time": "2022-07-30T16:31:31.000Z",
        "latitude": 60.9096604,
        "longitude": 11.7600008,
        "altitude": 1321.058,
        "vario": -1.9733464402
    },
    {
        "time": "2022-07-30T16:31:32.000Z",
        "latitude": 60.909495,
        "longitude": 11.7596237,
        "altitude": 1319.537,
        "vario": -1.7620743907
    },
    {
        "time": "2022-07-30T16:31:33.000Z",
        "latitude": 60.9093328,
        "longitude": 11.759248,
        "altitude": 1318.466,
        "vario": -1.5499900661
    },
    {
        "time": "2022-07-30T16:31:34.000Z",
        "latitude": 60.9091735,
        "longitude": 11.7588713,
        "altitude": 1317.644,
        "vario": -1.3551213377
    },
    {
        "time": "2022-07-30T16:31:35.000Z",
        "latitude": 60.9090157,
        "longitude": 11.7584915,
        "altitude": 1316.826,
        "vario": -1.1932323856
    },
    {
        "time": "2022-07-30T16:31:36.000Z",
        "latitude": 60.9088589,
        "longitude": 11.7581095,
        "altitude": 1315.686,
        "vario": -1.0764499173
    },
    {
        "time": "2022-07-30T16:31:37.000Z",
        "latitude": 60.9086993,
        "longitude": 11.7577278,
        "altitude": 1315.222,
        "vario": -1.0122249412
    },
    {
        "time": "2022-07-30T16:31:38.000Z",
        "latitude": 60.9085289,
        "longitude": 11.7573619,
        "altitude": 1316.186,
        "vario": -1.0027161062
    },
    {
        "time": "2022-07-30T16:31:39.000Z",
        "latitude": 60.9083381,
        "longitude": 11.7570444,
        "altitude": 1317.234,
        "vario": -1.0446010955
    },
    {
        "time": "2022-07-30T16:31:40.000Z",
        "latitude": 60.908124,
        "longitude": 11.756802,
        "altitude": 1318.017,
        "vario": -1.1294205053
    },
    {
        "time": "2022-07-30T16:31:41.000Z",
        "latitude": 60.9078943,
        "longitude": 11.756659,
        "altitude": 1317.965,
        "vario": -1.2445465589
    },
    {
        "time": "2022-07-30T16:31:42.000Z",
        "latitude": 60.9076624,
        "longitude": 11.7566097,
        "altitude": 1316.581,
        "vario": -1.3747159084
    },
    {
        "time": "2022-07-30T16:31:43.000Z",
        "latitude": 60.9074356,
        "longitude": 11.7566125,
        "altitude": 1313.911,
        "vario": -1.5039979947
    },
    {
        "time": "2022-07-30T16:31:44.000Z",
        "latitude": 60.9072121,
        "longitude": 11.7566296,
        "altitude": 1311.243,
        "vario": -1.6179213188
    },
    {
        "time": "2022-07-30T16:31:45.000Z",
        "latitude": 60.9069928,
        "longitude": 11.7566254,
        "altitude": 1308.205,
        "vario": -1.7053753181
    },
    {
        "time": "2022-07-30T16:31:46.000Z",
        "latitude": 60.9067805,
        "longitude": 11.7565734,
        "altitude": 1304.478,
        "vario": -1.7599664861
    },
    {
        "time": "2022-07-30T16:31:47.000Z",
        "latitude": 60.9065789,
        "longitude": 11.7564496,
        "altitude": 1301.364,
        "vario": -1.7805525683
    },
    {
        "time": "2022-07-30T16:31:48.000Z",
        "latitude": 60.9063945,
        "longitude": 11.7562385,
        "altitude": 1299.375,
        "vario": -1.7709039624
    },
    {
        "time": "2022-07-30T16:31:49.000Z",
        "latitude": 60.9062305,
        "longitude": 11.7559521,
        "altitude": 1297.439,
        "vario": -1.7386744257
    },
    {
        "time": "2022-07-30T16:31:50.000Z",
        "latitude": 60.9060914,
        "longitude": 11.7555978,
        "altitude": 1295.788,
        "vario": -1.6938708918
    },
    {
        "time": "2022-07-30T16:31:51.000Z",
        "latitude": 60.9059799,
        "longitude": 11.7551921,
        "altitude": 1295.06,
        "vario": -1.64709436
    },
    {
        "time": "2022-07-30T16:31:52.000Z",
        "latitude": 60.9058918,
        "longitude": 11.7547547,
        "altitude": 1294.42,
        "vario": -1.6079215532
    },
    {
        "time": "2022-07-30T16:31:53.000Z",
        "latitude": 60.9058215,
        "longitude": 11.7542878,
        "altitude": 1293.503,
        "vario": -1.583660482
    },
    {
        "time": "2022-07-30T16:31:54.000Z",
        "latitude": 60.9057665,
        "longitude": 11.7537918,
        "altitude": 1292.279,
        "vario": -1.5785633801
    },
    {
        "time": "2022-07-30T16:31:55.000Z",
        "latitude": 60.9057252,
        "longitude": 11.7532822,
        "altitude": 1291.438,
        "vario": -1.5934950783
    },
    {
        "time": "2022-07-30T16:31:56.000Z",
        "latitude": 60.905692,
        "longitude": 11.7527704,
        "altitude": 1289.799,
        "vario": -1.6259569777
    },
    {
        "time": "2022-07-30T16:31:57.000Z",
        "latitude": 60.905663,
        "longitude": 11.7522473,
        "altitude": 1287.358,
        "vario": -1.6704256813
    },
    {
        "time": "2022-07-30T16:31:58.000Z",
        "latitude": 60.9056358,
        "longitude": 11.7517136,
        "altitude": 1285.75,
        "vario": -1.7189530147
    },
    {
        "time": "2022-07-30T16:31:59.000Z",
        "latitude": 60.9056056,
        "longitude": 11.7511854,
        "altitude": 1284.808,
        "vario": -1.7620244067
    },
    {
        "time": "2022-07-30T16:32:00.000Z",
        "latitude": 60.9055673,
        "longitude": 11.7506645,
        "altitude": 1283.902,
        "vario": -1.7897246068
    },
    {
        "time": "2022-07-30T16:32:01.000Z",
        "latitude": 60.9055205,
        "longitude": 11.7501491,
        "altitude": 1282.168,
        "vario": -1.7931540462
    },
    {
        "time": "2022-07-30T16:32:02.000Z",
        "latitude": 60.905468,
        "longitude": 11.7496366,
        "altitude": 1279.559,
        "vario": -1.7659784798
    },
    {
        "time": "2022-07-30T16:32:03.000Z",
        "latitude": 60.9054137,
        "longitude": 11.749126,
        "altitude": 1276.062,
        "vario": -1.7058545549
    },
    {
        "time": "2022-07-30T16:32:04.000Z",
        "latitude": 60.9053673,
        "longitude": 11.7486119,
        "altitude": 1272.116,
        "vario": -1.6153553048
    },
    {
        "time": "2022-07-30T16:32:05.000Z",
        "latitude": 60.9053468,
        "longitude": 11.7480853,
        "altitude": 1268.473,
        "vario": -1.5021342609
    },
    {
        "time": "2022-07-30T16:32:06.000Z",
        "latitude": 60.9053696,
        "longitude": 11.7475433,
        "altitude": 1266.047,
        "vario": -1.3781308923
    },
    {
        "time": "2022-07-30T16:32:07.000Z",
        "latitude": 60.905441,
        "longitude": 11.7469985,
        "altitude": 1264.743,
        "vario": -1.2577727547
    },
    {
        "time": "2022-07-30T16:32:08.000Z",
        "latitude": 60.9055685,
        "longitude": 11.7464792,
        "altitude": 1264.635,
        "vario": -1.1554340143
    },
    {
        "time": "2022-07-30T16:32:09.000Z",
        "latitude": 60.9057573,
        "longitude": 11.7460194,
        "altitude": 1266.164,
        "vario": -1.0827665368
    },
    {
        "time": "2022-07-30T16:32:10.000Z",
        "latitude": 60.9059911,
        "longitude": 11.7456209,
        "altitude": 1268.53,
        "vario": -1.0464854541
    },
    {
        "time": "2022-07-30T16:32:11.000Z",
        "latitude": 60.9062473,
        "longitude": 11.7452557,
        "altitude": 1269.729,
        "vario": -1.0470106099
    },
    {
        "time": "2022-07-30T16:32:12.000Z",
        "latitude": 60.9065146,
        "longitude": 11.7448961,
        "altitude": 1269.202,
        "vario": -1.0783769114
    },
    {
        "time": "2022-07-30T16:32:13.000Z",
        "latitude": 60.9067845,
        "longitude": 11.7445231,
        "altitude": 1267.257,
        "vario": -1.1295317504
    },
    {
        "time": "2022-07-30T16:32:14.000Z",
        "latitude": 60.9070453,
        "longitude": 11.7441248,
        "altitude": 1265.472,
        "vario": -1.186675508
    },
    {
        "time": "2022-07-30T16:32:15.000Z",
        "latitude": 60.9072941,
        "longitude": 11.7436972,
        "altitude": 1263.585,
        "vario": -1.2361013541
    },
    {
        "time": "2022-07-30T16:32:16.000Z",
        "latitude": 60.907528,
        "longitude": 11.7432387,
        "altitude": 1261.01,
        "vario": -1.2669766377
    },
    {
        "time": "2022-07-30T16:32:17.000Z",
        "latitude": 60.9077406,
        "longitude": 11.7427496,
        "altitude": 1258.058,
        "vario": -1.2734694824
    },
    {
        "time": "2022-07-30T16:32:18.000Z",
        "latitude": 60.9079299,
        "longitude": 11.742229,
        "altitude": 1255.286,
        "vario": -1.2557926236
    },
    {
        "time": "2022-07-30T16:32:19.000Z",
        "latitude": 60.9080952,
        "longitude": 11.7416807,
        "altitude": 1253.147,
        "vario": -1.2199514314
    },
    {
        "time": "2022-07-30T16:32:20.000Z",
        "latitude": 60.9082334,
        "longitude": 11.7411209,
        "altitude": 1251.288,
        "vario": -1.1762746468
    },
    {
        "time": "2022-07-30T16:32:21.000Z",
        "latitude": 60.908339,
        "longitude": 11.7405566,
        "altitude": 1250.481,
        "vario": -1.1370531888
    },
    {
        "time": "2022-07-30T16:32:22.000Z",
        "latitude": 60.9084058,
        "longitude": 11.7399886,
        "altitude": 1251.07,
        "vario": -1.1137649986
    },
    {
        "time": "2022-07-30T16:32:23.000Z",
        "latitude": 60.9084338,
        "longitude": 11.739419,
        "altitude": 1251.92,
        "vario": -1.1144903949
    },
    {
        "time": "2022-07-30T16:32:24.000Z",
        "latitude": 60.908419,
        "longitude": 11.73887,
        "altitude": 1252.051,
        "vario": -1.1420459351
    },
    {
        "time": "2022-07-30T16:32:25.000Z",
        "latitude": 60.9083632,
        "longitude": 11.7383693,
        "altitude": 1252.961,
        "vario": -1.1932265352
    },
    {
        "time": "2022-07-30T16:32:26.000Z",
        "latitude": 60.9082788,
        "longitude": 11.7379175,
        "altitude": 1253.357,
        "vario": -1.2593664997
    },
    {
        "time": "2022-07-30T16:32:27.000Z",
        "latitude": 60.9081784,
        "longitude": 11.7374983,
        "altitude": 1251.659,
        "vario": -1.3280996541
    },
    {
        "time": "2022-07-30T16:32:28.000Z",
        "latitude": 60.9080642,
        "longitude": 11.7371008,
        "altitude": 1248.032,
        "vario": -1.3859079072
    },
    {
        "time": "2022-07-30T16:32:29.000Z",
        "latitude": 60.9079403,
        "longitude": 11.7367266,
        "altitude": 1245.431,
        "vario": -1.4209575259
    },
    {
        "time": "2022-07-30T16:32:30.000Z",
        "latitude": 60.9078067,
        "longitude": 11.7363718,
        "altitude": 1242.862,
        "vario": -1.4255715811
    },
    {
        "time": "2022-07-30T16:32:31.000Z",
        "latitude": 60.9076614,
        "longitude": 11.7360303,
        "altitude": 1239.204,
        "vario": -1.3977864386
    },
    {
        "time": "2022-07-30T16:32:32.000Z",
        "latitude": 60.9075113,
        "longitude": 11.7357036,
        "altitude": 1235.587,
        "vario": -1.3417261823
    },
    {
        "time": "2022-07-30T16:32:33.000Z",
        "latitude": 60.9073654,
        "longitude": 11.7353764,
        "altitude": 1233.639,
        "vario": -1.2666581215
    },
    {
        "time": "2022-07-30T16:32:34.000Z",
        "latitude": 60.9072273,
        "longitude": 11.7350405,
        "altitude": 1233.23,
        "vario": -1.1850623466
    },
    {
        "time": "2022-07-30T16:32:35.000Z",
        "latitude": 60.9070971,
        "longitude": 11.7346943,
        "altitude": 1233.72,
        "vario": -1.1101570064
    },
    {
        "time": "2022-07-30T16:32:36.000Z",
        "latitude": 60.906975,
        "longitude": 11.7343394,
        "altitude": 1234.92,
        "vario": -1.0533815115
    },
    {
        "time": "2022-07-30T16:32:37.000Z",
        "latitude": 60.9068587,
        "longitude": 11.7339811,
        "altitude": 1235.134,
        "vario": -1.0225192804
    },
    {
        "time": "2022-07-30T16:32:38.000Z",
        "latitude": 60.9067458,
        "longitude": 11.7336195,
        "altitude": 1234.963,
        "vario": -1.0207665416
    },
    {
        "time": "2022-07-30T16:32:39.000Z",
        "latitude": 60.9066344,
        "longitude": 11.7332538,
        "altitude": 1234.812,
        "vario": -1.0468328059
    },
    {
        "time": "2022-07-30T16:32:40.000Z",
        "latitude": 60.9065226,
        "longitude": 11.7328825,
        "altitude": 1234.018,
        "vario": -1.0960273847
    },
    {
        "time": "2022-07-30T16:32:41.000Z",
        "latitude": 60.9064118,
        "longitude": 11.732512,
        "altitude": 1232.232,
        "vario": -1.1620340023
    },
    {
        "time": "2022-07-30T16:32:42.000Z",
        "latitude": 60.9063023,
        "longitude": 11.7321443,
        "altitude": 1229.889,
        "vario": -1.2388618299
    },
    {
        "time": "2022-07-30T16:32:43.000Z",
        "latitude": 60.9061924,
        "longitude": 11.7317734,
        "altitude": 1228.06,
        "vario": -1.322564687
    },
    {
        "time": "2022-07-30T16:32:44.000Z",
        "latitude": 60.9060819,
        "longitude": 11.7313991,
        "altitude": 1226.291,
        "vario": -1.4124513405
    },
    {
        "time": "2022-07-30T16:32:45.000Z",
        "latitude": 60.905973,
        "longitude": 11.7310258,
        "altitude": 1224.314,
        "vario": -1.5116045355
    },
    {
        "time": "2022-07-30T16:32:46.000Z",
        "latitude": 60.9058674,
        "longitude": 11.7306476,
        "altitude": 1222.888,
        "vario": -1.6266109627
    },
    {
        "time": "2022-07-30T16:32:47.000Z",
        "latitude": 60.9057659,
        "longitude": 11.7302594,
        "altitude": 1221.88,
        "vario": -1.7666495422
    },
    {
        "time": "2022-07-30T16:32:48.000Z",
        "latitude": 60.905668,
        "longitude": 11.729863,
        "altitude": 1220.416,
        "vario": -1.9422041615
    },
    {
        "time": "2022-07-30T16:32:49.000Z",
        "latitude": 60.9055753,
        "longitude": 11.7294594,
        "altitude": 1219.617,
        "vario": -2.1637046497
    },
    {
        "time": "2022-07-30T16:32:50.000Z",
        "latitude": 60.905487,
        "longitude": 11.7290492,
        "altitude": 1218.942,
        "vario": -2.4402237754
    },
    {
        "time": "2022-07-30T16:32:51.000Z",
        "latitude": 60.9053986,
        "longitude": 11.7286321,
        "altitude": 1217.808,
        "vario": -2.7782515064
    },
    {
        "time": "2022-07-30T16:32:52.000Z",
        "latitude": 60.9053068,
        "longitude": 11.7282091,
        "altitude": 1215.725,
        "vario": -3.1804916589
    },
    {
        "time": "2022-07-30T16:32:53.000Z",
        "latitude": 60.9052101,
        "longitude": 11.7277829,
        "altitude": 1212.189,
        "vario": -3.6445107648
    },
    {
        "time": "2022-07-30T16:32:54.000Z",
        "latitude": 60.9051067,
        "longitude": 11.727361,
        "altitude": 1209.705,
        "vario": -4.1613760087
    },
    {
        "time": "2022-07-30T16:32:55.000Z",
        "latitude": 60.9049925,
        "longitude": 11.7269434,
        "altitude": 1206.844,
        "vario": -4.7142852996
    },
    {
        "time": "2022-07-30T16:32:56.000Z",
        "latitude": 60.9048636,
        "longitude": 11.7265276,
        "altitude": 1202.165,
        "vario": -5.2772100044
    },
    {
        "time": "2022-07-30T16:32:57.000Z",
        "latitude": 60.9047241,
        "longitude": 11.7261195,
        "altitude": 1197.009,
        "vario": -5.8139658425
    },
    {
        "time": "2022-07-30T16:32:58.000Z",
        "latitude": 60.9045809,
        "longitude": 11.7257133,
        "altitude": 1191.362,
        "vario": -6.278550735
    },
    {
        "time": "2022-07-30T16:32:59.000Z",
        "latitude": 60.9044333,
        "longitude": 11.7252932,
        "altitude": 1184.518,
        "vario": -6.6174654511
    },
    {
        "time": "2022-07-30T16:33:00.000Z",
        "latitude": 60.9042787,
        "longitude": 11.7248512,
        "altitude": 1176.818,
        "vario": -6.7744226163
    },
    {
        "time": "2022-07-30T16:33:01.000Z",
        "latitude": 60.9041153,
        "longitude": 11.7243886,
        "altitude": 1167.96,
        "vario": -6.6977918333
    },
    {
        "time": "2022-07-30T16:33:02.000Z",
        "latitude": 60.9039423,
        "longitude": 11.723906,
        "altitude": 1156.757,
        "vario": -6.3504511673
    },
    {
        "time": "2022-07-30T16:33:03.000Z",
        "latitude": 60.9037585,
        "longitude": 11.7233996,
        "altitude": 1143.595,
        "vario": -5.7205683032
    },
    {
        "time": "2022-07-30T16:33:04.000Z",
        "latitude": 60.9035627,
        "longitude": 11.7228668,
        "altitude": 1129.313,
        "vario": -4.8310816693
    },
    {
        "time": "2022-07-30T16:33:05.000Z",
        "latitude": 60.903352,
        "longitude": 11.7223011,
        "altitude": 1115.772,
        "vario": -3.7454003658
    },
    {
        "time": "2022-07-30T16:33:06.000Z",
        "latitude": 60.9031266,
        "longitude": 11.7216971,
        "altitude": 1102.907,
        "vario": -2.5667773738
    },
    {
        "time": "2022-07-30T16:33:07.000Z",
        "latitude": 60.9028885,
        "longitude": 11.7210658,
        "altitude": 1091.081,
        "vario": -1.4293607844
    },
    {
        "time": "2022-07-30T16:33:08.000Z",
        "latitude": 60.9026393,
        "longitude": 11.7204127,
        "altitude": 1084.343,
        "vario": -0.4808858591
    },
    {
        "time": "2022-07-30T16:33:09.000Z",
        "latitude": 60.9024006,
        "longitude": 11.719795,
        "altitude": 1092.076,
        "vario": 0.1405464877
    },
    {
        "time": "2022-07-30T16:33:10.000Z",
        "latitude": 60.9022205,
        "longitude": 11.7193472,
        "altitude": 1116.183,
        "vario": 0.3315438683
    },
    {
        "time": "2022-07-30T16:33:11.000Z",
        "latitude": 60.9021479,
        "longitude": 11.7191996,
        "altitude": 1148.981,
        "vario": 0.0452652919
    },
    {
        "time": "2022-07-30T16:33:12.000Z",
        "latitude": 60.9021821,
        "longitude": 11.7193708,
        "altitude": 1176.815,
        "vario": -0.6951092739
    },
    {
        "time": "2022-07-30T16:33:13.000Z",
        "latitude": 60.9022717,
        "longitude": 11.7197101,
        "altitude": 1191.155,
        "vario": -1.7950690479
    },
    {
        "time": "2022-07-30T16:33:14.000Z",
        "latitude": 60.9023759,
        "longitude": 11.7200912,
        "altitude": 1192.219,
        "vario": -3.1008417021
    },
    {
        "time": "2022-07-30T16:33:15.000Z",
        "latitude": 60.9024759,
        "longitude": 11.720446,
        "altitude": 1180.498,
        "vario": -4.4228993973
    },
    {
        "time": "2022-07-30T16:33:16.000Z",
        "latitude": 60.9025524,
        "longitude": 11.7206678,
        "altitude": 1156.658,
        "vario": -5.5666475994
    },
    {
        "time": "2022-07-30T16:33:17.000Z",
        "latitude": 60.9025736,
        "longitude": 11.7206118,
        "altitude": 1125.676,
        "vario": -6.364626414
    },
    {
        "time": "2022-07-30T16:33:18.000Z",
        "latitude": 60.9025262,
        "longitude": 11.7202245,
        "altitude": 1097.785,
        "vario": -6.7042115799
    },
    {
        "time": "2022-07-30T16:33:19.000Z",
        "latitude": 60.9024329,
        "longitude": 11.7196054,
        "altitude": 1078.495,
        "vario": -6.5460005402
    },
    {
        "time": "2022-07-30T16:33:20.000Z",
        "latitude": 60.9023163,
        "longitude": 11.7188949,
        "altitude": 1064.459,
        "vario": -5.9299634169
    },
    {
        "time": "2022-07-30T16:33:21.000Z",
        "latitude": 60.9021916,
        "longitude": 11.7181566,
        "altitude": 1053.233,
        "vario": -4.9685221326
    },
    {
        "time": "2022-07-30T16:33:22.000Z",
        "latitude": 60.9020553,
        "longitude": 11.7173892,
        "altitude": 1044.704,
        "vario": -3.8279170727
    },
    {
        "time": "2022-07-30T16:33:23.000Z",
        "latitude": 60.9019131,
        "longitude": 11.7166061,
        "altitude": 1037.72,
        "vario": -2.7009772356
    },
    {
        "time": "2022-07-30T16:33:24.000Z",
        "latitude": 60.9017658,
        "longitude": 11.715826,
        "altitude": 1035.741,
        "vario": -1.7755289788
    },
    {
        "time": "2022-07-30T16:33:25.000Z",
        "latitude": 60.9016304,
        "longitude": 11.7151272,
        "altitude": 1047.587,
        "vario": -1.2035612197
    },
    {
        "time": "2022-07-30T16:33:26.000Z",
        "latitude": 60.9015527,
        "longitude": 11.7146891,
        "altitude": 1075.791,
        "vario": -1.0762908411
    },
    {
        "time": "2022-07-30T16:33:27.000Z",
        "latitude": 60.9015675,
        "longitude": 11.7146566,
        "altitude": 1107.195,
        "vario": -1.4095540966
    },
    {
        "time": "2022-07-30T16:33:28.000Z",
        "latitude": 60.9016528,
        "longitude": 11.7149466,
        "altitude": 1127.413,
        "vario": -2.1423458418
    },
    {
        "time": "2022-07-30T16:33:29.000Z",
        "latitude": 60.90176,
        "longitude": 11.7153493,
        "altitude": 1132.792,
        "vario": -3.1488638304
    },
    {
        "time": "2022-07-30T16:33:30.000Z",
        "latitude": 60.9018618,
        "longitude": 11.7157402,
        "altitude": 1124.336,
        "vario": -4.2618624469
    },
    {
        "time": "2022-07-30T16:33:31.000Z",
        "latitude": 60.9019423,
        "longitude": 11.7160165,
        "altitude": 1102.605,
        "vario": -5.3028679139
    },
    {
        "time": "2022-07-30T16:33:32.000Z",
        "latitude": 60.9019735,
        "longitude": 11.7160386,
        "altitude": 1071.605,
        "vario": -6.1132613969
    },
    {
        "time": "2022-07-30T16:33:33.000Z",
        "latitude": 60.9019375,
        "longitude": 11.7157121,
        "altitude": 1041.15,
        "vario": -6.5801354355
    },
    {
        "time": "2022-07-30T16:33:34.000Z",
        "latitude": 60.9018533,
        "longitude": 11.715103,
        "altitude": 1018.97,
        "vario": -6.6523556315
    },
    {
        "time": "2022-07-30T16:33:35.000Z",
        "latitude": 60.9017485,
        "longitude": 11.7143614,
        "altitude": 1006.27,
        "vario": -6.3442485136
    },
    {
        "time": "2022-07-30T16:33:36.000Z",
        "latitude": 60.9016354,
        "longitude": 11.71358,
        "altitude": 999.732,
        "vario": -5.7272445298
    },
    {
        "time": "2022-07-30T16:33:37.000Z",
        "latitude": 60.9015191,
        "longitude": 11.7127848,
        "altitude": 997.16,
        "vario": -4.9124568443
    },
    {
        "time": "2022-07-30T16:33:38.000Z",
        "latitude": 60.9014007,
        "longitude": 11.7119955,
        "altitude": 997.716,
        "vario": -4.0281978869
    },
    {
        "time": "2022-07-30T16:33:39.000Z",
        "latitude": 60.9012849,
        "longitude": 11.7112261,
        "altitude": 1000.669,
        "vario": -3.1968179377
    },
    {
        "time": "2022-07-30T16:33:40.000Z",
        "latitude": 60.9011724,
        "longitude": 11.7104781,
        "altitude": 1005.646,
        "vario": -2.514880653
    },
    {
        "time": "2022-07-30T16:33:41.000Z",
        "latitude": 60.9010656,
        "longitude": 11.7097578,
        "altitude": 1011.812,
        "vario": -2.0393978097
    },
    {
        "time": "2022-07-30T16:33:42.000Z",
        "latitude": 60.9009645,
        "longitude": 11.7090671,
        "altitude": 1018.447,
        "vario": -1.7812522965
    },
    {
        "time": "2022-07-30T16:33:43.000Z",
        "latitude": 60.9008687,
        "longitude": 11.7084072,
        "altitude": 1023.749,
        "vario": -1.7060095175
    },
    {
        "time": "2022-07-30T16:33:44.000Z",
        "latitude": 60.9007756,
        "longitude": 11.7077604,
        "altitude": 1025.22,
        "vario": -1.7416989062
    },
    {
        "time": "2022-07-30T16:33:45.000Z",
        "latitude": 60.9006823,
        "longitude": 11.707117,
        "altitude": 1023.13,
        "vario": -1.7922230115
    },
    {
        "time": "2022-07-30T16:33:46.000Z",
        "latitude": 60.9005866,
        "longitude": 11.7064826,
        "altitude": 1017.719,
        "vario": -1.7546371507
    },
    {
        "time": "2022-07-30T16:33:47.000Z",
        "latitude": 60.9004847,
        "longitude": 11.7058407,
        "altitude": 1010.534,
        "vario": -1.538363987
    },
    {
        "time": "2022-07-30T16:33:48.000Z",
        "latitude": 60.9003769,
        "longitude": 11.7051879,
        "altitude": 1001.305,
        "vario": -1.0839907419
    },
    {
        "time": "2022-07-30T16:33:49.000Z",
        "latitude": 60.9002636,
        "longitude": 11.7045192,
        "altitude": 989.841,
        "vario": -0.3785974861
    },
    {
        "time": "2022-07-30T16:33:50.000Z",
        "latitude": 60.9001423,
        "longitude": 11.7038188,
        "altitude": 977.961,
        "vario": 0.5356603768
    },
    {
        "time": "2022-07-30T16:33:51.000Z",
        "latitude": 60.900014,
        "longitude": 11.703085,
        "altitude": 966.566,
        "vario": 1.5621799274
    },
    {
        "time": "2022-07-30T16:33:52.000Z",
        "latitude": 60.8998746,
        "longitude": 11.7023267,
        "altitude": 956.679,
        "vario": 2.5607518967
    },
    {
        "time": "2022-07-30T16:33:53.000Z",
        "latitude": 60.8997146,
        "longitude": 11.7015708,
        "altitude": 954.89,
        "vario": 3.3680016308
    },
    {
        "time": "2022-07-30T16:33:54.000Z",
        "latitude": 60.8995601,
        "longitude": 11.7009449,
        "altitude": 971.337,
        "vario": 3.8250670982
    },
    {
        "time": "2022-07-30T16:33:55.000Z",
        "latitude": 60.8994648,
        "longitude": 11.7005991,
        "altitude": 1002.33,
        "vario": 3.8079399933
    },
    {
        "time": "2022-07-30T16:33:56.000Z",
        "latitude": 60.8994471,
        "longitude": 11.700563,
        "altitude": 1036.696,
        "vario": 3.2543728427
    },
    {
        "time": "2022-07-30T16:33:57.000Z",
        "latitude": 60.899483,
        "longitude": 11.7007397,
        "altitude": 1065.648,
        "vario": 2.1814880656
    },
    {
        "time": "2022-07-30T16:33:58.000Z",
        "latitude": 60.8995395,
        "longitude": 11.7009946,
        "altitude": 1083.081,
        "vario": 0.6897051866
    },
    {
        "time": "2022-07-30T16:33:59.000Z",
        "latitude": 60.8995983,
        "longitude": 11.7012595,
        "altitude": 1089.259,
        "vario": -1.0491205774
    },
    {
        "time": "2022-07-30T16:34:00.000Z",
        "latitude": 60.8996487,
        "longitude": 11.7015275,
        "altitude": 1085.859,
        "vario": -2.8182311303
    },
    {
        "time": "2022-07-30T16:34:01.000Z",
        "latitude": 60.8997011,
        "longitude": 11.7018152,
        "altitude": 1072.232,
        "vario": -4.392737356
    },
    {
        "time": "2022-07-30T16:34:02.000Z",
        "latitude": 60.899779,
        "longitude": 11.7021142,
        "altitude": 1047.107,
        "vario": -5.5796489251
    },
    {
        "time": "2022-07-30T16:34:03.000Z",
        "latitude": 60.8999172,
        "longitude": 11.7023747,
        "altitude": 1013.93,
        "vario": -6.2530646244
    },
    {
        "time": "2022-07-30T16:34:04.000Z",
        "latitude": 60.9001524,
        "longitude": 11.7025889,
        "altitude": 977.728,
        "vario": -6.3769878886
    },
    {
        "time": "2022-07-30T16:34:05.000Z",
        "latitude": 60.9005152,
        "longitude": 11.7027849,
        "altitude": 943.548,
        "vario": -6.01052135
    },
    {
        "time": "2022-07-30T16:34:06.000Z",
        "latitude": 60.9010016,
        "longitude": 11.7029541,
        "altitude": 919.073,
        "vario": -5.2938742188
    },
    {
        "time": "2022-07-30T16:34:07.000Z",
        "latitude": 60.9015555,
        "longitude": 11.7030965,
        "altitude": 911.471,
        "vario": -4.4178435794
    },
    {
        "time": "2022-07-30T16:34:08.000Z",
        "latitude": 60.9020846,
        "longitude": 11.7032143,
        "altitude": 924.286,
        "vario": -3.5833204841
    },
    {
        "time": "2022-07-30T16:34:09.000Z",
        "latitude": 60.9024715,
        "longitude": 11.7032995,
        "altitude": 954.482,
        "vario": -2.9599076303
    },
    {
        "time": "2022-07-30T16:34:10.000Z",
        "latitude": 60.9026391,
        "longitude": 11.7033304,
        "altitude": 990.85,
        "vario": -2.653135741
    },
    {
        "time": "2022-07-30T16:34:11.000Z",
        "latitude": 60.902627,
        "longitude": 11.703294,
        "altitude": 1017.111,
        "vario": -2.6876332572
    },
    {
        "time": "2022-07-30T16:34:12.000Z",
        "latitude": 60.9025441,
        "longitude": 11.7032104,
        "altitude": 1026.187,
        "vario": -3.0096490207
    },
    {
        "time": "2022-07-30T16:34:13.000Z",
        "latitude": 60.9024645,
        "longitude": 11.7031185,
        "altitude": 1019.322,
        "vario": -3.5074169735
    },
    {
        "time": "2022-07-30T16:34:14.000Z",
        "latitude": 60.9024435,
        "longitude": 11.7030525,
        "altitude": 998.086,
        "vario": -4.0432927678
    },
    {
        "time": "2022-07-30T16:34:15.000Z",
        "latitude": 60.9025561,
        "longitude": 11.7030568,
        "altitude": 966.111,
        "vario": -4.4887074167
    },
    {
        "time": "2022-07-30T16:34:16.000Z",
        "latitude": 60.9028508,
        "longitude": 11.7031566,
        "altitude": 933.277,
        "vario": -4.7530573512
    },
    {
        "time": "2022-07-30T16:34:17.000Z",
        "latitude": 60.9032982,
        "longitude": 11.7033152,
        "altitude": 908.416,
        "vario": -4.7997595783
    },
    {
        "time": "2022-07-30T16:34:18.000Z",
        "latitude": 60.9038281,
        "longitude": 11.7034336,
        "altitude": 896.858,
        "vario": -4.6463690472
    },
    {
        "time": "2022-07-30T16:34:19.000Z",
        "latitude": 60.9043674,
        "longitude": 11.703398,
        "altitude": 900.223,
        "vario": -4.3506069241
    },
    {
        "time": "2022-07-30T16:34:20.000Z",
        "latitude": 60.9048377,
        "longitude": 11.7031286,
        "altitude": 914.494,
        "vario": -3.9878624278
    },
    {
        "time": "2022-07-30T16:34:21.000Z",
        "latitude": 60.905168,
        "longitude": 11.7026267,
        "altitude": 932.769,
        "vario": -3.6275394161
    },
    {
        "time": "2022-07-30T16:34:22.000Z",
        "latitude": 60.9053258,
        "longitude": 11.7019872,
        "altitude": 945.857,
        "vario": -3.3151607434
    },
    {
        "time": "2022-07-30T16:34:23.000Z",
        "latitude": 60.905339,
        "longitude": 11.7013379,
        "altitude": 948.755,
        "vario": -3.0645552263
    },
    {
        "time": "2022-07-30T16:34:24.000Z",
        "latitude": 60.9052425,
        "longitude": 11.7007806,
        "altitude": 939.761,
        "vario": -2.8609141293
    },
    {
        "time": "2022-07-30T16:34:25.000Z",
        "latitude": 60.9050406,
        "longitude": 11.7003958,
        "altitude": 923.07,
        "vario": -2.672277501
    },
    {
        "time": "2022-07-30T16:34:26.000Z",
        "latitude": 60.9047595,
        "longitude": 11.7002042,
        "altitude": 906.372,
        "vario": -2.4648692805
    },
    {
        "time": "2022-07-30T16:34:27.000Z",
        "latitude": 60.9044299,
        "longitude": 11.7001568,
        "altitude": 894.506,
        "vario": -2.2170340027
    },
    {
        "time": "2022-07-30T16:34:28.000Z",
        "latitude": 60.9040773,
        "longitude": 11.7001795,
        "altitude": 888.881,
        "vario": -1.9277423505
    },
    {
        "time": "2022-07-30T16:34:29.000Z",
        "latitude": 60.9037209,
        "longitude": 11.7002232,
        "altitude": 888.203,
        "vario": -1.6178704176
    },
    {
        "time": "2022-07-30T16:34:30.000Z",
        "latitude": 60.9033721,
        "longitude": 11.7002654,
        "altitude": 891.722,
        "vario": -1.3247392955
    },
    {
        "time": "2022-07-30T16:34:31.000Z",
        "latitude": 60.9030398,
        "longitude": 11.7002861,
        "altitude": 898.296,
        "vario": -1.0923565466
    },
    {
        "time": "2022-07-30T16:34:32.000Z",
        "latitude": 60.9027291,
        "longitude": 11.7002863,
        "altitude": 905.35,
        "vario": -0.9605884892
    },
    {
        "time": "2022-07-30T16:34:33.000Z",
        "latitude": 60.9024341,
        "longitude": 11.7002629,
        "altitude": 910.333,
        "vario": -0.9561124751
    },
    {
        "time": "2022-07-30T16:34:34.000Z",
        "latitude": 60.9021499,
        "longitude": 11.7002121,
        "altitude": 913.204,
        "vario": -1.0871116798
    },
    {
        "time": "2022-07-30T16:34:35.000Z",
        "latitude": 60.9018763,
        "longitude": 11.7001389,
        "altitude": 912.857,
        "vario": -1.342442389
    },
    {
        "time": "2022-07-30T16:34:36.000Z",
        "latitude": 60.9016078,
        "longitude": 11.7000378,
        "altitude": 910.021,
        "vario": -1.6945548635
    },
    {
        "time": "2022-07-30T16:34:37.000Z",
        "latitude": 60.9013403,
        "longitude": 11.6998957,
        "altitude": 906.028,
        "vario": -2.1047043172
    },
    {
        "time": "2022-07-30T16:34:38.000Z",
        "latitude": 60.9010759,
        "longitude": 11.699708,
        "altitude": 902.156,
        "vario": -2.5288430757
    },
    {
        "time": "2022-07-30T16:34:39.000Z",
        "latitude": 60.900818,
        "longitude": 11.6994797,
        "altitude": 898.221,
        "vario": -2.9228970288
    },
    {
        "time": "2022-07-30T16:34:40.000Z",
        "latitude": 60.9005679,
        "longitude": 11.6992043,
        "altitude": 894.09,
        "vario": -3.2468247556
    },
    {
        "time": "2022-07-30T16:34:41.000Z",
        "latitude": 60.9003287,
        "longitude": 11.6988754,
        "altitude": 889.801,
        "vario": -3.4674248738
    },
    {
        "time": "2022-07-30T16:34:42.000Z",
        "latitude": 60.9001029,
        "longitude": 11.6984922,
        "altitude": 884.85,
        "vario": -3.5602741359
    },
    {
        "time": "2022-07-30T16:34:43.000Z",
        "latitude": 60.8998898,
        "longitude": 11.6980554,
        "altitude": 878.961,
        "vario": -3.5113480925
    },
    {
        "time": "2022-07-30T16:34:44.000Z",
        "latitude": 60.8996911,
        "longitude": 11.6975639,
        "altitude": 872.79,
        "vario": -3.3186323738
    },
    {
        "time": "2022-07-30T16:34:45.000Z",
        "latitude": 60.8995112,
        "longitude": 11.6970204,
        "altitude": 866.952,
        "vario": -2.9938322988
    },
    {
        "time": "2022-07-30T16:34:46.000Z",
        "latitude": 60.8993506,
        "longitude": 11.6964244,
        "altitude": 861.23,
        "vario": -2.5636265483
    },
    {
        "time": "2022-07-30T16:34:47.000Z",
        "latitude": 60.899206,
        "longitude": 11.6957801,
        "altitude": 855.244,
        "vario": -2.0694207456
    },
    {
        "time": "2022-07-30T16:34:48.000Z",
        "latitude": 60.8990708,
        "longitude": 11.6951019,
        "altitude": 849.846,
        "vario": -1.5649622907
    },
    {
        "time": "2022-07-30T16:34:49.000Z",
        "latitude": 60.8989385,
        "longitude": 11.6944066,
        "altitude": 846.69,
        "vario": -1.1111640663
    },
    {
        "time": "2022-07-30T16:34:50.000Z",
        "latitude": 60.8988052,
        "longitude": 11.6937046,
        "altitude": 846.772,
        "vario": -0.7683113276
    },
    {
        "time": "2022-07-30T16:34:51.000Z",
        "latitude": 60.8986749,
        "longitude": 11.6930229,
        "altitude": 851.621,
        "vario": -0.5863865684
    },
    {
        "time": "2022-07-30T16:34:52.000Z",
        "latitude": 60.8985511,
        "longitude": 11.6923816,
        "altitude": 859.304,
        "vario": -0.5948842072
    },
    {
        "time": "2022-07-30T16:34:53.000Z",
        "latitude": 60.8984366,
        "longitude": 11.6917918,
        "altitude": 869.043,
        "vario": -0.7943323884
    },
    {
        "time": "2022-07-30T16:34:54.000Z",
        "latitude": 60.8983308,
        "longitude": 11.6912474,
        "altitude": 878.546,
        "vario": -1.1515345377
    },
    {
        "time": "2022-07-30T16:34:55.000Z",
        "latitude": 60.8982299,
        "longitude": 11.6907287,
        "altitude": 883.944,
        "vario": -1.6003255569
    },
    {
        "time": "2022-07-30T16:34:56.000Z",
        "latitude": 60.8981204,
        "longitude": 11.690192,
        "altitude": 882.102,
        "vario": -2.0487663389
    },
    {
        "time": "2022-07-30T16:34:57.000Z",
        "latitude": 60.8980218,
        "longitude": 11.689686,
        "altitude": 876.668,
        "vario": -2.3924376283
    },
    {
        "time": "2022-07-30T16:34:58.000Z",
        "latitude": 60.8979183,
        "longitude": 11.6891691,
        "altitude": 867.302,
        "vario": -2.5323620109
    },
    {
        "time": "2022-07-30T16:34:59.000Z",
        "latitude": 60.8978073,
        "longitude": 11.6886309,
        "altitude": 854.849,
        "vario": -2.3947676194
    },
    {
        "time": "2022-07-30T16:35:00.000Z",
        "latitude": 60.8976865,
        "longitude": 11.6880518,
        "altitude": 841.044,
        "vario": -1.9491519837
    },
    {
        "time": "2022-07-30T16:35:01.000Z",
        "latitude": 60.8975543,
        "longitude": 11.6874253,
        "altitude": 826.713,
        "vario": -1.2209174539
    },
    {
        "time": "2022-07-30T16:35:02.000Z",
        "latitude": 60.8974107,
        "longitude": 11.6867594,
        "altitude": 812.189,
        "vario": -0.2952501197
    },
    {
        "time": "2022-07-30T16:35:03.000Z",
        "latitude": 60.8972515,
        "longitude": 11.6860552,
        "altitude": 799.407,
        "vario": 0.6896042067
    },
    {
        "time": "2022-07-30T16:35:04.000Z",
        "latitude": 60.8970706,
        "longitude": 11.6853317,
        "altitude": 793.429,
        "vario": 1.5597790396
    },
    {
        "time": "2022-07-30T16:35:05.000Z",
        "latitude": 60.8968783,
        "longitude": 11.6846848,
        "altitude": 803.509,
        "vario": 2.1319287252
    },
    {
        "time": "2022-07-30T16:35:06.000Z",
        "latitude": 60.896719,
        "longitude": 11.6842593,
        "altitude": 828.65,
        "vario": 2.2439067197
    },
    {
        "time": "2022-07-30T16:35:07.000Z",
        "latitude": 60.8966388,
        "longitude": 11.6841523,
        "altitude": 860.864,
        "vario": 1.7844915249
    },
    {
        "time": "2022-07-30T16:35:08.000Z",
        "latitude": 60.8966193,
        "longitude": 11.6842584,
        "altitude": 890.934,
        "vario": 0.7164878836
    },
    {
        "time": "2022-07-30T16:35:09.000Z",
        "latitude": 60.8966234,
        "longitude": 11.6844407,
        "altitude": 909.848,
        "vario": -0.911505378
    },
    {
        "time": "2022-07-30T16:35:10.000Z",
        "latitude": 60.8966388,
        "longitude": 11.6846748,
        "altitude": 920.068,
        "vario": -2.9674613873
    },
    {
        "time": "2022-07-30T16:35:11.000Z",
        "latitude": 60.8966543,
        "longitude": 11.6849213,
        "altitude": 919.947,
        "vario": -5.252551669
    },
    {
        "time": "2022-07-30T16:35:12.000Z",
        "latitude": 60.8966679,
        "longitude": 11.6851847,
        "altitude": 909.537,
        "vario": -7.5292790429
    },
    {
        "time": "2022-07-30T16:35:13.000Z",
        "latitude": 60.896689,
        "longitude": 11.6854759,
        "altitude": 888.377,
        "vario": -9.5561629025
    },
    {
        "time": "2022-07-30T16:35:14.000Z",
        "latitude": 60.8967417,
        "longitude": 11.6857773,
        "altitude": 856.571,
        "vario": -11.1227798709
    },
    {
        "time": "2022-07-30T16:35:15.000Z",
        "latitude": 60.8968504,
        "longitude": 11.6860824,
        "altitude": 819.456,
        "vario": -12.0789728644
    },
    {
        "time": "2022-07-30T16:35:16.000Z",
        "latitude": 60.897054,
        "longitude": 11.6864891,
        "altitude": 780.731,
        "vario": -12.3533048553
    },
    {
        "time": "2022-07-30T16:35:17.000Z",
        "latitude": 60.8973809,
        "longitude": 11.6870533,
        "altitude": 746.04,
        "vario": -11.9580270981
    },
    {
        "time": "2022-07-30T16:35:18.000Z",
        "latitude": 60.897807,
        "longitude": 11.6877205,
        "altitude": 721.827,
        "vario": -10.9803042404
    },
    {
        "time": "2022-07-30T16:35:19.000Z",
        "latitude": 60.8982967,
        "longitude": 11.688416,
        "altitude": 709.337,
        "vario": -9.5622556275
    },
    {
        "time": "2022-07-30T16:35:20.000Z",
        "latitude": 60.8988258,
        "longitude": 11.6890564,
        "altitude": 707.939,
        "vario": -7.8743140574
    },
    {
        "time": "2022-07-30T16:35:21.000Z",
        "latitude": 60.8993777,
        "longitude": 11.6895502,
        "altitude": 713.643,
        "vario": -6.0870903813
    },
    {
        "time": "2022-07-30T16:35:22.000Z",
        "latitude": 60.8999368,
        "longitude": 11.6898181,
        "altitude": 721.668,
        "vario": -4.3470077132
    },
    {
        "time": "2022-07-30T16:35:23.000Z",
        "latitude": 60.900477,
        "longitude": 11.6897866,
        "altitude": 730.173,
        "vario": -2.7596370426
    },
    {
        "time": "2022-07-30T16:35:24.000Z",
        "latitude": 60.9009523,
        "longitude": 11.6894503,
        "altitude": 736.173,
        "vario": -1.3827350398
    },
    {
        "time": "2022-07-30T16:35:25.000Z",
        "latitude": 60.9013238,
        "longitude": 11.6888701,
        "altitude": 738.483,
        "vario": -0.2288750923
    },
    {
        "time": "2022-07-30T16:35:26.000Z",
        "latitude": 60.9015536,
        "longitude": 11.6881196,
        "altitude": 738.12,
        "vario": 0.7244093613
    },
    {
        "time": "2022-07-30T16:35:27.000Z",
        "latitude": 60.9016351,
        "longitude": 11.6873061,
        "altitude": 737.542,
        "vario": 1.5198639348
    },
    {
        "time": "2022-07-30T16:35:28.000Z",
        "latitude": 60.9016066,
        "longitude": 11.6865178,
        "altitude": 736.737,
        "vario": 2.2045853309
    },
    {
        "time": "2022-07-30T16:35:29.000Z",
        "latitude": 60.9015148,
        "longitude": 11.6857833,
        "altitude": 735.187,
        "vario": 2.8163519433
    },
    {
        "time": "2022-07-30T16:35:30.000Z",
        "latitude": 60.9013879,
        "longitude": 11.6851005,
        "altitude": 733.816,
        "vario": 3.3743101999
    },
    {
        "time": "2022-07-30T16:35:31.000Z",
        "latitude": 60.9012471,
        "longitude": 11.6844627,
        "altitude": 734.776,
        "vario": 3.8751463016
    },
    {
        "time": "2022-07-30T16:35:32.000Z",
        "latitude": 60.9011018,
        "longitude": 11.6838661,
        "altitude": 739.25,
        "vario": 4.2944937207
    },
    {
        "time": "2022-07-30T16:35:33.000Z",
        "latitude": 60.9009576,
        "longitude": 11.6833167,
        "altitude": 746.522,
        "vario": 4.5925229841
    },
    {
        "time": "2022-07-30T16:35:34.000Z",
        "latitude": 60.9008218,
        "longitude": 11.6828281,
        "altitude": 756.169,
        "vario": 4.7222572393
    },
    {
        "time": "2022-07-30T16:35:35.000Z",
        "latitude": 60.9007,
        "longitude": 11.6824026,
        "altitude": 767.179,
        "vario": 4.6388703702
    },
    {
        "time": "2022-07-30T16:35:36.000Z",
        "latitude": 60.9005991,
        "longitude": 11.6820424,
        "altitude": 777.655,
        "vario": 4.3085739392
    },
    {
        "time": "2022-07-30T16:35:37.000Z",
        "latitude": 60.900511,
        "longitude": 11.6817304,
        "altitude": 787.787,
        "vario": 3.7157529654
    },
    {
        "time": "2022-07-30T16:35:38.000Z",
        "latitude": 60.900435,
        "longitude": 11.6814615,
        "altitude": 796.276,
        "vario": 2.8675518703
    },
    {
        "time": "2022-07-30T16:35:39.000Z",
        "latitude": 60.9003729,
        "longitude": 11.6812356,
        "altitude": 803.098,
        "vario": 1.7955837076
    },
    {
        "time": "2022-07-30T16:35:40.000Z",
        "latitude": 60.9003217,
        "longitude": 11.6810481,
        "altitude": 808.076,
        "vario": 0.5545157814
    },
    {
        "time": "2022-07-30T16:35:41.000Z",
        "latitude": 60.9002812,
        "longitude": 11.6808957,
        "altitude": 810.862,
        "vario": -0.782342525
    },
    {
        "time": "2022-07-30T16:35:42.000Z",
        "latitude": 60.9002481,
        "longitude": 11.6807649,
        "altitude": 810.797,
        "vario": -2.1300134598
    },
    {
        "time": "2022-07-30T16:35:43.000Z",
        "latitude": 60.9002167,
        "longitude": 11.6806374,
        "altitude": 806.819,
        "vario": -3.4007288737
    },
    {
        "time": "2022-07-30T16:35:44.000Z",
        "latitude": 60.9001809,
        "longitude": 11.6804889,
        "altitude": 798.724,
        "vario": -4.5136750478
    },
    {
        "time": "2022-07-30T16:35:45.000Z",
        "latitude": 60.900135,
        "longitude": 11.6802997,
        "altitude": 786.335,
        "vario": -5.4043961414
    },
    {
        "time": "2022-07-30T16:35:46.000Z",
        "latitude": 60.9000721,
        "longitude": 11.6800506,
        "altitude": 769.912,
        "vario": -6.0324536045
    },
    {
        "time": "2022-07-30T16:35:47.000Z",
        "latitude": 60.8999805,
        "longitude": 11.6797187,
        "altitude": 753.541,
        "vario": -6.3860173233
    },
    {
        "time": "2022-07-30T16:35:48.000Z",
        "latitude": 60.8998593,
        "longitude": 11.679309,
        "altitude": 739.412,
        "vario": -6.4825067486
    },
    {
        "time": "2022-07-30T16:35:49.000Z",
        "latitude": 60.8997145,
        "longitude": 11.6788419,
        "altitude": 728.418,
        "vario": -6.3650603624
    },
    {
        "time": "2022-07-30T16:35:50.000Z",
        "latitude": 60.8995528,
        "longitude": 11.678343,
        "altitude": 720.871,
        "vario": -6.0953503164
    },
    {
        "time": "2022-07-30T16:35:51.000Z",
        "latitude": 60.8993806,
        "longitude": 11.6778403,
        "altitude": 717.539,
        "vario": -5.7439327037
    },
    {
        "time": "2022-07-30T16:35:52.000Z",
        "latitude": 60.8991994,
        "longitude": 11.6773509,
        "altitude": 717.088,
        "vario": -5.3798137146
    },
    {
        "time": "2022-07-30T16:35:53.000Z",
        "latitude": 60.8990047,
        "longitude": 11.6768875,
        "altitude": 717.207,
        "vario": -5.0610191523
    },
    {
        "time": "2022-07-30T16:35:54.000Z",
        "latitude": 60.8987955,
        "longitude": 11.6764673,
        "altitude": 717.976,
        "vario": -4.8277216745
    },
    {
        "time": "2022-07-30T16:35:55.000Z",
        "latitude": 60.8985758,
        "longitude": 11.6760892,
        "altitude": 717.13,
        "vario": -4.6987689308
    },
    {
        "time": "2022-07-30T16:35:56.000Z",
        "latitude": 60.8983486,
        "longitude": 11.6757453,
        "altitude": 714.584,
        "vario": -4.6717972591
    },
    {
        "time": "2022-07-30T16:35:57.000Z",
        "latitude": 60.8981171,
        "longitude": 11.6754219,
        "altitude": 710.494,
        "vario": -4.7265202491
    },
    {
        "time": "2022-07-30T16:35:58.000Z",
        "latitude": 60.8978839,
        "longitude": 11.6750992,
        "altitude": 705.221,
        "vario": -4.8301797704
    },
    {
        "time": "2022-07-30T16:35:59.000Z",
        "latitude": 60.8976482,
        "longitude": 11.6747647,
        "altitude": 698.842,
        "vario": -4.9440196803
    },
    {
        "time": "2022-07-30T16:36:00.000Z",
        "latitude": 60.8974098,
        "longitude": 11.6744134,
        "altitude": 691.554,
        "vario": -5.0296970705
    },
    {
        "time": "2022-07-30T16:36:01.000Z",
        "latitude": 60.8971686,
        "longitude": 11.674047,
        "altitude": 684.311,
        "vario": -5.0547244569
    },
    {
        "time": "2022-07-30T16:36:02.000Z",
        "latitude": 60.896923,
        "longitude": 11.6736621,
        "altitude": 677.122,
        "vario": -4.9963851015
    },
    {
        "time": "2022-07-30T16:36:03.000Z",
        "latitude": 60.8966728,
        "longitude": 11.6732585,
        "altitude": 669.737,
        "vario": -4.8438545802
    },
    {
        "time": "2022-07-30T16:36:04.000Z",
        "latitude": 60.8964194,
        "longitude": 11.6728409,
        "altitude": 662.79,
        "vario": -4.5985428522
    },
    {
        "time": "2022-07-30T16:36:05.000Z",
        "latitude": 60.896161,
        "longitude": 11.6724085,
        "altitude": 656.23,
        "vario": -4.2728330019
    },
    {
        "time": "2022-07-30T16:36:06.000Z",
        "latitude": 60.8958992,
        "longitude": 11.6719653,
        "altitude": 650.244,
        "vario": -3.8875241018
    },
    {
        "time": "2022-07-30T16:36:07.000Z",
        "latitude": 60.8956369,
        "longitude": 11.6715147,
        "altitude": 645.948,
        "vario": -3.4684278896
    },
    {
        "time": "2022-07-30T16:36:08.000Z",
        "latitude": 60.8953747,
        "longitude": 11.6710551,
        "altitude": 643.74,
        "vario": -3.0425575251
    },
    {
        "time": "2022-07-30T16:36:09.000Z",
        "latitude": 60.8951154,
        "longitude": 11.6705916,
        "altitude": 643.069,
        "vario": -2.6345032889
    },
    {
        "time": "2022-07-30T16:36:10.000Z",
        "latitude": 60.8948611,
        "longitude": 11.6701309,
        "altitude": 643.08,
        "vario": -2.2635740995
    },
    {
        "time": "2022-07-30T16:36:11.000Z",
        "latitude": 60.8946102,
        "longitude": 11.669679,
        "altitude": 643.734,
        "vario": -1.9420584163
    },
    {
        "time": "2022-07-30T16:36:12.000Z",
        "latitude": 60.8943613,
        "longitude": 11.6692411,
        "altitude": 644.07,
        "vario": -1.6747941412
    },
    {
        "time": "2022-07-30T16:36:13.000Z",
        "latitude": 60.8941159,
        "longitude": 11.6688191,
        "altitude": 643.383,
        "vario": -1.4600770677
    },
    {
        "time": "2022-07-30T16:36:14.000Z",
        "latitude": 60.8938713,
        "longitude": 11.6684053,
        "altitude": 641.93,
        "vario": -1.2916430371
    },
    {
        "time": "2022-07-30T16:36:15.000Z",
        "latitude": 60.8936296,
        "longitude": 11.667998,
        "altitude": 639.609,
        "vario": -1.1611074102
    },
    {
        "time": "2022-07-30T16:36:16.000Z",
        "latitude": 60.8933919,
        "longitude": 11.6675906,
        "altitude": 637.218,
        "vario": -1.060393818
    },
    {
        "time": "2022-07-30T16:36:17.000Z",
        "latitude": 60.8931577,
        "longitude": 11.6671785,
        "altitude": 635.343,
        "vario": -0.9837176467
    },
    {
        "time": "2022-07-30T16:36:18.000Z",
        "latitude": 60.8929232,
        "longitude": 11.6667564,
        "altitude": 634.433,
        "vario": -0.9287580228
    },
    {
        "time": "2022-07-30T16:36:19.000Z",
        "latitude": 60.8926939,
        "longitude": 11.6663427,
        "altitude": 633.891,
        "vario": -0.8969740107
    },
    {
        "time": "2022-07-30T16:36:20.000Z",
        "latitude": 60.892471,
        "longitude": 11.6659235,
        "altitude": 633.997,
        "vario": -0.8932568986
    },
    {
        "time": "2022-07-30T16:36:21.000Z",
        "latitude": 60.892255,
        "longitude": 11.6655024,
        "altitude": 634.399,
        "vario": -0.925157063
    },
    {
        "time": "2022-07-30T16:36:22.000Z",
        "latitude": 60.8920467,
        "longitude": 11.6650822,
        "altitude": 634.531,
        "vario": -1.0019040794
    },
    {
        "time": "2022-07-30T16:36:23.000Z",
        "latitude": 60.8918429,
        "longitude": 11.6646629,
        "altitude": 633.94,
        "vario": -1.1334249977
    },
    {
        "time": "2022-07-30T16:36:24.000Z",
        "latitude": 60.8916429,
        "longitude": 11.6642405,
        "altitude": 632.902,
        "vario": -1.3294111452
    },
    {
        "time": "2022-07-30T16:36:25.000Z",
        "latitude": 60.891445,
        "longitude": 11.6638192,
        "altitude": 631.92,
        "vario": -1.5983374104
    },
    {
        "time": "2022-07-30T16:36:26.000Z",
        "latitude": 60.8912486,
        "longitude": 11.6634037,
        "altitude": 631.018,
        "vario": -1.9463158625
    },
    {
        "time": "2022-07-30T16:36:27.000Z",
        "latitude": 60.8910508,
        "longitude": 11.6629974,
        "altitude": 630.142,
        "vario": -2.3757862054
    },
    {
        "time": "2022-07-30T16:36:28.000Z",
        "latitude": 60.8908483,
        "longitude": 11.6626048,
        "altitude": 629.359,
        "vario": -2.8841201272
    },
    {
        "time": "2022-07-30T16:36:29.000Z",
        "latitude": 60.8906418,
        "longitude": 11.6622343,
        "altitude": 628.486,
        "vario": -3.4623491151
    },
    {
        "time": "2022-07-30T16:36:30.000Z",
        "latitude": 60.8904281,
        "longitude": 11.661889,
        "altitude": 627.019,
        "vario": -4.0943276448
    },
    {
        "time": "2022-07-30T16:36:31.000Z",
        "latitude": 60.8902017,
        "longitude": 11.6615719,
        "altitude": 624.212,
        "vario": -4.7566967074
    },
    {
        "time": "2022-07-30T16:36:32.000Z",
        "latitude": 60.8899568,
        "longitude": 11.6612899,
        "altitude": 619.334,
        "vario": -5.4198916752
    },
    {
        "time": "2022-07-30T16:36:33.000Z",
        "latitude": 60.8896894,
        "longitude": 11.6610627,
        "altitude": 613.153,
        "vario": -6.0502549758
    },
    {
        "time": "2022-07-30T16:36:34.000Z",
        "latitude": 60.8893984,
        "longitude": 11.6609079,
        "altitude": 605.66,
        "vario": -6.6131903692
    },
    {
        "time": "2022-07-30T16:36:35.000Z",
        "latitude": 60.8890891,
        "longitude": 11.6608221,
        "altitude": 596.364,
        "vario": -7.0769028174
    },
    {
        "time": "2022-07-30T16:36:36.000Z",
        "latitude": 60.8887647,
        "longitude": 11.6608044,
        "altitude": 585.378,
        "vario": -7.4161569888
    },
    {
        "time": "2022-07-30T16:36:37.000Z",
        "latitude": 60.8884239,
        "longitude": 11.6608579,
        "altitude": 574.157,
        "vario": -7.6155726885
    },
    {
        "time": "2022-07-30T16:36:38.000Z",
        "latitude": 60.8880679,
        "longitude": 11.6609712,
        "altitude": 562.785,
        "vario": -7.6718338464
    },
    {
        "time": "2022-07-30T16:36:39.000Z",
        "latitude": 60.8877011,
        "longitude": 11.6611406,
        "altitude": 551.298,
        "vario": -7.59433474
    },
    {
        "time": "2022-07-30T16:36:40.000Z",
        "latitude": 60.8873197,
        "longitude": 11.6613666,
        "altitude": 541.166,
        "vario": -7.4041602154
    },
    {
        "time": "2022-07-30T16:36:41.000Z",
        "latitude": 60.8869317,
        "longitude": 11.6616455,
        "altitude": 532.524,
        "vario": -7.1314507024
    },
    {
        "time": "2022-07-30T16:36:42.000Z",
        "latitude": 60.8865435,
        "longitude": 11.6619728,
        "altitude": 525.731,
        "vario": -6.8115310175
    },
    {
        "time": "2022-07-30T16:36:43.000Z",
        "latitude": 60.8861539,
        "longitude": 11.6623332,
        "altitude": 520.443,
        "vario": -6.4804482698
    },
    {
        "time": "2022-07-30T16:36:44.000Z",
        "latitude": 60.8857641,
        "longitude": 11.6627215,
        "altitude": 516.674,
        "vario": -6.170526586
    },
    {
        "time": "2022-07-30T16:36:45.000Z",
        "latitude": 60.8853742,
        "longitude": 11.6631312,
        "altitude": 513.658,
        "vario": -5.9066085909
    },
    {
        "time": "2022-07-30T16:36:46.000Z",
        "latitude": 60.8849871,
        "longitude": 11.6635534,
        "altitude": 509.965,
        "vario": -5.7035770356
    },
    {
        "time": "2022-07-30T16:36:47.000Z",
        "latitude": 60.8846035,
        "longitude": 11.6639867,
        "altitude": 505.932,
        "vario": -5.5654597818
    },
    {
        "time": "2022-07-30T16:36:48.000Z",
        "latitude": 60.8842224,
        "longitude": 11.6644277,
        "altitude": 502.187,
        "vario": -5.4861806146
    },
    {
        "time": "2022-07-30T16:36:49.000Z",
        "latitude": 60.8838421,
        "longitude": 11.6648727,
        "altitude": 498.182,
        "vario": -5.4517174667
    },
    {
        "time": "2022-07-30T16:36:50.000Z",
        "latitude": 60.8834613,
        "longitude": 11.6653208,
        "altitude": 492.611,
        "vario": -5.4431987271
    },
    {
        "time": "2022-07-30T16:36:51.000Z",
        "latitude": 60.8830794,
        "longitude": 11.6657757,
        "altitude": 485.898,
        "vario": -5.4404341072
    },
    {
        "time": "2022-07-30T16:36:52.000Z",
        "latitude": 60.882698,
        "longitude": 11.666238,
        "altitude": 478.44,
        "vario": -5.425269731
    },
    {
        "time": "2022-07-30T16:36:53.000Z",
        "latitude": 60.8823123,
        "longitude": 11.6667107,
        "altitude": 470.747,
        "vario": -5.3842017984
    },
    {
        "time": "2022-07-30T16:36:54.000Z",
        "latitude": 60.8819175,
        "longitude": 11.6671958,
        "altitude": 464.634,
        "vario": -5.3099457243
    },
    {
        "time": "2022-07-30T16:36:55.000Z",
        "latitude": 60.8815221,
        "longitude": 11.6676811,
        "altitude": 458.586,
        "vario": -5.2017757516
    },
    {
        "time": "2022-07-30T16:36:56.000Z",
        "latitude": 60.8811228,
        "longitude": 11.6681699,
        "altitude": 451.916,
        "vario": -5.0646840604
    },
    {
        "time": "2022-07-30T16:36:57.000Z",
        "latitude": 60.8807168,
        "longitude": 11.6686704,
        "altitude": 446.895,
        "vario": -4.9077295345
    },
    {
        "time": "2022-07-30T16:36:58.000Z",
        "latitude": 60.8803135,
        "longitude": 11.6691864,
        "altitude": 443.19,
        "vario": -4.7418848961
    },
    {
        "time": "2022-07-30T16:36:59.000Z",
        "latitude": 60.8799128,
        "longitude": 11.6697157,
        "altitude": 439.807,
        "vario": -4.5777868673
    },
    {
        "time": "2022-07-30T16:37:00.000Z",
        "latitude": 60.8795139,
        "longitude": 11.6702536,
        "altitude": 436.44,
        "vario": -4.4238505517
    },
    {
        "time": "2022-07-30T16:37:01.000Z",
        "latitude": 60.879116,
        "longitude": 11.6708001,
        "altitude": 432.3,
        "vario": -4.2849897814
    },
    {
        "time": "2022-07-30T16:37:02.000Z",
        "latitude": 60.8787206,
        "longitude": 11.6713596,
        "altitude": 428.248,
        "vario": -4.1620718676
    },
    {
        "time": "2022-07-30T16:37:03.000Z",
        "latitude": 60.8783277,
        "longitude": 11.6719282,
        "altitude": 424.959,
        "vario": -4.0519735791
    },
    {
        "time": "2022-07-30T16:37:04.000Z",
        "latitude": 60.8779377,
        "longitude": 11.6725033,
        "altitude": 421.323,
        "vario": -3.9481044474
    },
    {
        "time": "2022-07-30T16:37:05.000Z",
        "latitude": 60.877551,
        "longitude": 11.6730897,
        "altitude": 416.948,
        "vario": -3.8412889059
    },
    {
        "time": "2022-07-30T16:37:06.000Z",
        "latitude": 60.87717,
        "longitude": 11.6736817,
        "altitude": 412.479,
        "vario": -3.7207486835
    },
    {
        "time": "2022-07-30T16:37:07.000Z",
        "latitude": 60.8767887,
        "longitude": 11.6742746,
        "altitude": 408.065,
        "vario": -3.5749878524
    },
    {
        "time": "2022-07-30T16:37:08.000Z",
        "latitude": 60.8764071,
        "longitude": 11.6748724,
        "altitude": 404.597,
        "vario": -3.3924639648
    },
    {
        "time": "2022-07-30T16:37:09.000Z",
        "latitude": 60.8760273,
        "longitude": 11.6754724,
        "altitude": 401.12,
        "vario": -3.1619781744
    },
    {
        "time": "2022-07-30T16:37:10.000Z",
        "latitude": 60.8756469,
        "longitude": 11.6760721,
        "altitude": 396.801,
        "vario": -2.8728228659
    },
    {
        "time": "2022-07-30T16:37:11.000Z",
        "latitude": 60.8752651,
        "longitude": 11.67667,
        "altitude": 392.433,
        "vario": -2.5148766861
    },
    {
        "time": "2022-07-30T16:37:12.000Z",
        "latitude": 60.8748789,
        "longitude": 11.6772627,
        "altitude": 388.412,
        "vario": -2.0788380365
    },
    {
        "time": "2022-07-30T16:37:13.000Z",
        "latitude": 60.8744897,
        "longitude": 11.6778474,
        "altitude": 385.067,
        "vario": -1.5568851141
    },
    {
        "time": "2022-07-30T16:37:14.000Z",
        "latitude": 60.8740979,
        "longitude": 11.6784269,
        "altitude": 384.292,
        "vario": -0.9440043144
    },
    {
        "time": "2022-07-30T16:37:15.000Z",
        "latitude": 60.8737087,
        "longitude": 11.6789993,
        "altitude": 383.999,
        "vario": -0.239999672
    },
    {
        "time": "2022-07-30T16:37:16.000Z",
        "latitude": 60.8733254,
        "longitude": 11.6795628,
        "altitude": 383.021,
        "vario": 0.5479805024
    },
    {
        "time": "2022-07-30T16:37:17.000Z",
        "latitude": 60.872943,
        "longitude": 11.6801348,
        "altitude": 382.327,
        "vario": 1.4029581627
    },
    {
        "time": "2022-07-30T16:37:18.000Z",
        "latitude": 60.8725645,
        "longitude": 11.6806968,
        "altitude": 380.803,
        "vario": 2.2965027807
    },
    {
        "time": "2022-07-30T16:37:19.000Z",
        "latitude": 60.872189,
        "longitude": 11.6812452,
        "altitude": 378.189,
        "vario": 3.1886492892
    },
    {
        "time": "2022-07-30T16:37:20.000Z",
        "latitude": 60.8718131,
        "longitude": 11.6817471,
        "altitude": 377.415,
        "vario": 4.0299378001
    },
    {
        "time": "2022-07-30T16:37:21.000Z",
        "latitude": 60.8714339,
        "longitude": 11.6821311,
        "altitude": 382.762,
        "vario": 4.7657927452
    },
    {
        "time": "2022-07-30T16:37:22.000Z",
        "latitude": 60.8710683,
        "longitude": 11.6823546,
        "altitude": 394.921,
        "vario": 5.342702731
    },
    {
        "time": "2022-07-30T16:37:23.000Z",
        "latitude": 60.8707324,
        "longitude": 11.682444,
        "altitude": 409.561,
        "vario": 5.7152118128
    },
    {
        "time": "2022-07-30T16:37:24.000Z",
        "latitude": 60.8704298,
        "longitude": 11.6824452,
        "altitude": 423.64,
        "vario": 5.8524615979
    },
    {
        "time": "2022-07-30T16:37:25.000Z",
        "latitude": 60.8701601,
        "longitude": 11.6823882,
        "altitude": 436.143,
        "vario": 5.7429568224
    },
    {
        "time": "2022-07-30T16:37:26.000Z",
        "latitude": 60.8699169,
        "longitude": 11.6822882,
        "altitude": 446.273,
        "vario": 5.3966215631
    },
    {
        "time": "2022-07-30T16:37:27.000Z",
        "latitude": 60.8696985,
        "longitude": 11.6821519,
        "altitude": 453.672,
        "vario": 4.8438394948
    },
    {
        "time": "2022-07-30T16:37:28.000Z",
        "latitude": 60.869509,
        "longitude": 11.6819863,
        "altitude": 459.845,
        "vario": 4.1316978452
    },
    {
        "time": "2022-07-30T16:37:29.000Z",
        "latitude": 60.8693417,
        "longitude": 11.6817995,
        "altitude": 464.47,
        "vario": 3.3181648045
    },
    {
        "time": "2022-07-30T16:37:30.000Z",
        "latitude": 60.8691841,
        "longitude": 11.6815989,
        "altitude": 466.65,
        "vario": 2.4652071233
    },
    {
        "time": "2022-07-30T16:37:31.000Z",
        "latitude": 60.8690287,
        "longitude": 11.6813829,
        "altitude": 466.384,
        "vario": 1.6319513664
    },
    {
        "time": "2022-07-30T16:37:32.000Z",
        "latitude": 60.8688717,
        "longitude": 11.6811449,
        "altitude": 464.124,
        "vario": 0.8688616762
    },
    {
        "time": "2022-07-30T16:37:33.000Z",
        "latitude": 60.8687149,
        "longitude": 11.6808918,
        "altitude": 460.807,
        "vario": 0.2135422723
    },
    {
        "time": "2022-07-30T16:37:34.000Z",
        "latitude": 60.8685608,
        "longitude": 11.6806318,
        "altitude": 456.818,
        "vario": -0.3114691468
    },
    {
        "time": "2022-07-30T16:37:35.000Z",
        "latitude": 60.8684044,
        "longitude": 11.680358,
        "altitude": 453.367,
        "vario": -0.6988172628
    },
    {
        "time": "2022-07-30T16:37:36.000Z",
        "latitude": 60.8682397,
        "longitude": 11.6800728,
        "altitude": 450.093,
        "vario": -0.9546780056
    },
    {
        "time": "2022-07-30T16:37:37.000Z",
        "latitude": 60.8680634,
        "longitude": 11.6797848,
        "altitude": 446.806,
        "vario": -1.0957674008
    },
    {
        "time": "2022-07-30T16:37:38.000Z",
        "latitude": 60.8678752,
        "longitude": 11.6794918,
        "altitude": 444.594,
        "vario": -1.1454437229
    },
    {
        "time": "2022-07-30T16:37:39.000Z",
        "latitude": 60.8676872,
        "longitude": 11.6791915,
        "altitude": 444.251,
        "vario": -1.1296685817
    },
    {
        "time": "2022-07-30T16:37:40.000Z",
        "latitude": 60.8675079,
        "longitude": 11.678884,
        "altitude": 444.912,
        "vario": -1.0734421918
    },
    {
        "time": "2022-07-30T16:37:41.000Z",
        "latitude": 60.867335,
        "longitude": 11.678571,
        "altitude": 445.356,
        "vario": -0.9980922814
    },
    {
        "time": "2022-07-30T16:37:42.000Z",
        "latitude": 60.8671681,
        "longitude": 11.6782601,
        "altitude": 445.3,
        "vario": -0.9197126687
    },
    {
        "time": "2022-07-30T16:37:43.000Z",
        "latitude": 60.8670061,
        "longitude": 11.6779537,
        "altitude": 444.808,
        "vario": -0.8488442738
    },
    {
        "time": "2022-07-30T16:37:44.000Z",
        "latitude": 60.8668465,
        "longitude": 11.6776468,
        "altitude": 443.694,
        "vario": -0.79122723
    },
    {
        "time": "2022-07-30T16:37:45.000Z",
        "latitude": 60.8666904,
        "longitude": 11.6773428,
        "altitude": 442.162,
        "vario": -0.7491696907
    },
    {
        "time": "2022-07-30T16:37:46.000Z",
        "latitude": 60.8665354,
        "longitude": 11.6770354,
        "altitude": 441.327,
        "vario": -0.7230549467
    },
    {
        "time": "2022-07-30T16:37:47.000Z",
        "latitude": 60.8663836,
        "longitude": 11.6767266,
        "altitude": 440.717,
        "vario": -0.7126529801
    },
    {
        "time": "2022-07-30T16:37:48.000Z",
        "latitude": 60.8662333,
        "longitude": 11.6764227,
        "altitude": 439.932,
        "vario": -0.7179892918
    },
    {
        "time": "2022-07-30T16:37:49.000Z",
        "latitude": 60.8660886,
        "longitude": 11.6761187,
        "altitude": 439.158,
        "vario": -0.7396339254
    },
    {
        "time": "2022-07-30T16:37:50.000Z",
        "latitude": 60.8659538,
        "longitude": 11.6758083,
        "altitude": 438.892,
        "vario": -0.7785184551
    },
    {
        "time": "2022-07-30T16:37:51.000Z",
        "latitude": 60.865832,
        "longitude": 11.6754955,
        "altitude": 438.489,
        "vario": -0.8354186855
    },
    {
        "time": "2022-07-30T16:37:52.000Z",
        "latitude": 60.8657263,
        "longitude": 11.6751822,
        "altitude": 438.522,
        "vario": -0.9103102538
    },
    {
        "time": "2022-07-30T16:37:53.000Z",
        "latitude": 60.8656316,
        "longitude": 11.6748661,
        "altitude": 438.593,
        "vario": -1.001819288
    },
    {
        "time": "2022-07-30T16:37:54.000Z",
        "latitude": 60.8655458,
        "longitude": 11.6745442,
        "altitude": 437.87,
        "vario": -1.1069222868
    },
    {
        "time": "2022-07-30T16:37:55.000Z",
        "latitude": 60.8654732,
        "longitude": 11.6742143,
        "altitude": 436.242,
        "vario": -1.2209859509
    },
    {
        "time": "2022-07-30T16:37:56.000Z",
        "latitude": 60.8654191,
        "longitude": 11.6738682,
        "altitude": 434.572,
        "vario": -1.338119631
    },
    {
        "time": "2022-07-30T16:37:57.000Z",
        "latitude": 60.8653873,
        "longitude": 11.6735037,
        "altitude": 433.242,
        "vario": -1.451795315
    },
    {
        "time": "2022-07-30T16:37:58.000Z",
        "latitude": 60.8653758,
        "longitude": 11.6731255,
        "altitude": 431.846,
        "vario": -1.5556483133
    },
    {
        "time": "2022-07-30T16:37:59.000Z",
        "latitude": 60.8653838,
        "longitude": 11.6727384,
        "altitude": 430.3,
        "vario": -1.6442960889
    },
    {
        "time": "2022-07-30T16:38:00.000Z",
        "latitude": 60.8654093,
        "longitude": 11.6723414,
        "altitude": 428.105,
        "vario": -1.7140545504
    },
    {
        "time": "2022-07-30T16:38:01.000Z",
        "latitude": 60.8654524,
        "longitude": 11.6719391,
        "altitude": 425.343,
        "vario": -1.7634968457
    },
    {
        "time": "2022-07-30T16:38:02.000Z",
        "latitude": 60.8655165,
        "longitude": 11.6715301,
        "altitude": 422.367,
        "vario": -1.7936286718
    },
    {
        "time": "2022-07-30T16:38:03.000Z",
        "latitude": 60.8656056,
        "longitude": 11.6711162,
        "altitude": 419.775,
        "vario": -1.8076721985
    },
    {
        "time": "2022-07-30T16:38:04.000Z",
        "latitude": 60.8657175,
        "longitude": 11.6707083,
        "altitude": 417.596,
        "vario": -1.8104840571
    },
    {
        "time": "2022-07-30T16:38:05.000Z",
        "latitude": 60.8658489,
        "longitude": 11.6703046,
        "altitude": 416.343,
        "vario": -1.8076703435
    },
    {
        "time": "2022-07-30T16:38:06.000Z",
        "latitude": 60.8659972,
        "longitude": 11.6699079,
        "altitude": 415.588,
        "vario": -1.8045919189
    },
    {
        "time": "2022-07-30T16:38:07.000Z",
        "latitude": 60.8661583,
        "longitude": 11.6695215,
        "altitude": 414.501,
        "vario": -1.8053312121
    },
    {
        "time": "2022-07-30T16:38:08.000Z",
        "latitude": 60.8663287,
        "longitude": 11.669147,
        "altitude": 412.711,
        "vario": -1.8119122321
    },
    {
        "time": "2022-07-30T16:38:09.000Z",
        "latitude": 60.8665109,
        "longitude": 11.6687838,
        "altitude": 411.02,
        "vario": -1.8239955327
    },
    {
        "time": "2022-07-30T16:38:10.000Z",
        "latitude": 60.866704,
        "longitude": 11.6684338,
        "altitude": 409.83,
        "vario": -1.8389692025
    },
    {
        "time": "2022-07-30T16:38:11.000Z",
        "latitude": 60.8669017,
        "longitude": 11.6680934,
        "altitude": 407.975,
        "vario": -1.8524333833
    },
    {
        "time": "2022-07-30T16:38:12.000Z",
        "latitude": 60.8671024,
        "longitude": 11.667757,
        "altitude": 406.089,
        "vario": -1.859071343
    },
    {
        "time": "2022-07-30T16:38:13.000Z",
        "latitude": 60.867306,
        "longitude": 11.6674159,
        "altitude": 403.565,
        "vario": -1.8536314156
    },
    {
        "time": "2022-07-30T16:38:14.000Z",
        "latitude": 60.8675155,
        "longitude": 11.6670696,
        "altitude": 401.186,
        "vario": -1.8318356439
    },
    {
        "time": "2022-07-30T16:38:15.000Z",
        "latitude": 60.8677266,
        "longitude": 11.6667224,
        "altitude": 398.49,
        "vario": -1.7910626411
    },
    {
        "time": "2022-07-30T16:38:16.000Z",
        "latitude": 60.8679404,
        "longitude": 11.6663742,
        "altitude": 396.137,
        "vario": -1.7305967995
    },
    {
        "time": "2022-07-30T16:38:17.000Z",
        "latitude": 60.8681552,
        "longitude": 11.6660276,
        "altitude": 393.537,
        "vario": -1.6514449283
    },
    {
        "time": "2022-07-30T16:38:18.000Z",
        "latitude": 60.8683721,
        "longitude": 11.6656738,
        "altitude": 391.481,
        "vario": -1.5558202543
    },
    {
        "time": "2022-07-30T16:38:19.000Z",
        "latitude": 60.8685904,
        "longitude": 11.6653117,
        "altitude": 389.976,
        "vario": -1.4464807595
    },
    {
        "time": "2022-07-30T16:38:20.000Z",
        "latitude": 60.8688067,
        "longitude": 11.6649443,
        "altitude": 389.699,
        "vario": -1.3261136333
    },
    {
        "time": "2022-07-30T16:38:21.000Z",
        "latitude": 60.8690253,
        "longitude": 11.6645726,
        "altitude": 390.22,
        "vario": -1.1969855026
    },
    {
        "time": "2022-07-30T16:38:22.000Z",
        "latitude": 60.8692445,
        "longitude": 11.6641801,
        "altitude": 388.853,
        "vario": -1.0609596735
    },
    {
        "time": "2022-07-30T16:38:23.000Z",
        "latitude": 60.869464,
        "longitude": 11.6637777,
        "altitude": 387.073,
        "vario": -0.9198391968
    },
    {
        "time": "2022-07-30T16:38:24.000Z",
        "latitude": 60.8696755,
        "longitude": 11.6633671,
        "altitude": 384.796,
        "vario": -0.7759248124
    },
    {
        "time": "2022-07-30T16:38:25.000Z",
        "latitude": 60.8698903,
        "longitude": 11.6629595,
        "altitude": 383.545,
        "vario": -0.6325442454
    },
    {
        "time": "2022-07-30T16:38:26.000Z",
        "latitude": 60.8701084,
        "longitude": 11.6625463,
        "altitude": 383.187,
        "vario": -0.4943315314
    },
    {
        "time": "2022-07-30T16:38:27.000Z",
        "latitude": 60.8703274,
        "longitude": 11.6621352,
        "altitude": 382.224,
        "vario": -0.3671400829
    },
    {
        "time": "2022-07-30T16:38:28.000Z",
        "latitude": 60.8705462,
        "longitude": 11.6617324,
        "altitude": 381.79,
        "vario": -0.2575255143
    },
    {
        "time": "2022-07-30T16:38:29.000Z",
        "latitude": 60.8707711,
        "longitude": 11.6613319,
        "altitude": 383.249,
        "vario": -0.1718831159
    },
    {
        "time": "2022-07-30T16:38:30.000Z",
        "latitude": 60.870995,
        "longitude": 11.6609383,
        "altitude": 384.608,
        "vario": -0.1154735599
    },
    {
        "time": "2022-07-30T16:38:31.000Z",
        "latitude": 60.8712122,
        "longitude": 11.6605479,
        "altitude": 385.418,
        "vario": -0.0916100641
    },
    {
        "time": "2022-07-30T16:38:32.000Z",
        "latitude": 60.8714291,
        "longitude": 11.6601589,
        "altitude": 385.875,
        "vario": -0.1012424386
    },
    {
        "time": "2022-07-30T16:38:33.000Z",
        "latitude": 60.8716433,
        "longitude": 11.6597804,
        "altitude": 385.776,
        "vario": -0.1429572793
    },
    {
        "time": "2022-07-30T16:38:34.000Z",
        "latitude": 60.8718478,
        "longitude": 11.659411,
        "altitude": 386.08,
        "vario": -0.2133980625
    },
    {
        "time": "2022-07-30T16:38:35.000Z",
        "latitude": 60.8720462,
        "longitude": 11.6590352,
        "altitude": 386.497,
        "vario": -0.3080431723
    },
    {
        "time": "2022-07-30T16:38:36.000Z",
        "latitude": 60.8722417,
        "longitude": 11.6586523,
        "altitude": 386.289,
        "vario": -0.4220780631
    },
    {
        "time": "2022-07-30T16:38:37.000Z",
        "latitude": 60.8724352,
        "longitude": 11.6582712,
        "altitude": 385.559,
        "vario": -0.5511473439
    },
    {
        "time": "2022-07-30T16:38:38.000Z",
        "latitude": 60.8726214,
        "longitude": 11.6578924,
        "altitude": 384.217,
        "vario": -0.6917846445
    },
    {
        "time": "2022-07-30T16:38:39.000Z",
        "latitude": 60.8728037,
        "longitude": 11.6575109,
        "altitude": 382.749,
        "vario": -0.8413609706
    },
    {
        "time": "2022-07-30T16:38:40.000Z",
        "latitude": 60.8729883,
        "longitude": 11.6571352,
        "altitude": 381.412,
        "vario": -0.9976227168
    },
    {
        "time": "2022-07-30T16:38:41.000Z",
        "latitude": 60.8731765,
        "longitude": 11.6567696,
        "altitude": 381.036,
        "vario": -1.1579445119
    },
    {
        "time": "2022-07-30T16:38:42.000Z",
        "latitude": 60.8733697,
        "longitude": 11.6564172,
        "altitude": 380.979,
        "vario": -1.318543864
    },
    {
        "time": "2022-07-30T16:38:43.000Z",
        "latitude": 60.8735731,
        "longitude": 11.6560611,
        "altitude": 380.787,
        "vario": -1.473973022
    },
    {
        "time": "2022-07-30T16:38:44.000Z",
        "latitude": 60.8737805,
        "longitude": 11.6556971,
        "altitude": 379.846,
        "vario": -1.6171054712
    },
    {
        "time": "2022-07-30T16:38:45.000Z",
        "latitude": 60.8739859,
        "longitude": 11.6553354,
        "altitude": 377.515,
        "vario": -1.7397161974
    },
    {
        "time": "2022-07-30T16:38:46.000Z",
        "latitude": 60.8741916,
        "longitude": 11.6549771,
        "altitude": 374.575,
        "vario": -1.8335032579
    },
    {
        "time": "2022-07-30T16:38:47.000Z",
        "latitude": 60.8744019,
        "longitude": 11.6546233,
        "altitude": 371.958,
        "vario": -1.8914416294
    },
    {
        "time": "2022-07-30T16:38:48.000Z",
        "latitude": 60.8746169,
        "longitude": 11.6542696,
        "altitude": 368.727,
        "vario": -1.9091675366
    },
    {
        "time": "2022-07-30T16:38:49.000Z",
        "latitude": 60.8748386,
        "longitude": 11.6539208,
        "altitude": 364.743,
        "vario": -1.8859351869
    },
    {
        "time": "2022-07-30T16:38:50.000Z",
        "latitude": 60.8750731,
        "longitude": 11.6535938,
        "altitude": 360.811,
        "vario": -1.824995101
    },
    {
        "time": "2022-07-30T16:38:51.000Z",
        "latitude": 60.8753318,
        "longitude": 11.6533011,
        "altitude": 358.594,
        "vario": -1.7332800239
    },
    {
        "time": "2022-07-30T16:38:52.000Z",
        "latitude": 60.8756163,
        "longitude": 11.6530515,
        "altitude": 358.005,
        "vario": -1.6204682247
    },
    {
        "time": "2022-07-30T16:38:53.000Z",
        "latitude": 60.8759158,
        "longitude": 11.6528452,
        "altitude": 357.786,
        "vario": -1.4976227979
    },
    {
        "time": "2022-07-30T16:38:54.000Z",
        "latitude": 60.8762172,
        "longitude": 11.6526772,
        "altitude": 356.583,
        "vario": -1.375648103
    },
    {
        "time": "2022-07-30T16:38:55.000Z",
        "latitude": 60.8765232,
        "longitude": 11.6525472,
        "altitude": 355.409,
        "vario": -1.2638470994
    },
    {
        "time": "2022-07-30T16:38:56.000Z",
        "latitude": 60.8768292,
        "longitude": 11.6524513,
        "altitude": 353.741,
        "vario": -1.1688376802
    },
    {
        "time": "2022-07-30T16:38:57.000Z",
        "latitude": 60.877139,
        "longitude": 11.6523859,
        "altitude": 353.399,
        "vario": -1.0939638399
    },
    {
        "time": "2022-07-30T16:38:58.000Z",
        "latitude": 60.877452,
        "longitude": 11.6523482,
        "altitude": 353.431,
        "vario": -1.0391832462
    },
    {
        "time": "2022-07-30T16:38:59.000Z",
        "latitude": 60.8777657,
        "longitude": 11.6523321,
        "altitude": 353.557,
        "vario": -1.0014115649
    },
    {
        "time": "2022-07-30T16:39:00.000Z",
        "latitude": 60.8780764,
        "longitude": 11.6523282,
        "altitude": 353.333,
        "vario": -0.9752020021
    },
    {
        "time": "2022-07-30T16:39:01.000Z",
        "latitude": 60.8783896,
        "longitude": 11.6523243,
        "altitude": 352.064,
        "vario": -0.9537467671
    },
    {
        "time": "2022-07-30T16:39:02.000Z",
        "latitude": 60.8787051,
        "longitude": 11.6523196,
        "altitude": 349.857,
        "vario": -0.9300015015
    },
    {
        "time": "2022-07-30T16:39:03.000Z",
        "latitude": 60.8790196,
        "longitude": 11.6523173,
        "altitude": 346.767,
        "vario": -0.8977794268
    },
    {
        "time": "2022-07-30T16:39:04.000Z",
        "latitude": 60.8793313,
        "longitude": 11.6523218,
        "altitude": 346.314,
        "vario": -0.8528020441
    },
    {
        "time": "2022-07-30T16:39:05.000Z",
        "latitude": 60.8796398,
        "longitude": 11.652329,
        "altitude": 346.823,
        "vario": -0.7935060374
    },
    {
        "time": "2022-07-30T16:39:06.000Z",
        "latitude": 60.8799474,
        "longitude": 11.6523328,
        "altitude": 345.98,
        "vario": -0.721526505
    },
    {
        "time": "2022-07-30T16:39:07.000Z",
        "latitude": 60.8802528,
        "longitude": 11.6523281,
        "altitude": 344.739,
        "vario": -0.6417712104
    },
    {
        "time": "2022-07-30T16:39:08.000Z",
        "latitude": 60.8805591,
        "longitude": 11.6523213,
        "altitude": 342.451,
        "vario": -0.5619545994
    },
    {
        "time": "2022-07-30T16:39:09.000Z",
        "latitude": 60.8808633,
        "longitude": 11.6523191,
        "altitude": 340.463,
        "vario": -0.4915636877
    },
    {
        "time": "2022-07-30T16:39:10.000Z",
        "latitude": 60.8811675,
        "longitude": 11.6523341,
        "altitude": 340.472,
        "vario": -0.4403866045
    },
    {
        "time": "2022-07-30T16:39:11.000Z",
        "latitude": 60.881475,
        "longitude": 11.6523706,
        "altitude": 340.641,
        "vario": -0.4168127931
    },
    {
        "time": "2022-07-30T16:39:12.000Z",
        "latitude": 60.8817849,
        "longitude": 11.652442,
        "altitude": 342.616,
        "vario": -0.4261934162
    },
    {
        "time": "2022-07-30T16:39:13.000Z",
        "latitude": 60.8820896,
        "longitude": 11.6525354,
        "altitude": 345.38,
        "vario": -0.469718471
    },
    {
        "time": "2022-07-30T16:39:14.000Z",
        "latitude": 60.8823876,
        "longitude": 11.6526374,
        "altitude": 347.022,
        "vario": -0.5441392242
    },
    {
        "time": "2022-07-30T16:39:15.000Z",
        "latitude": 60.8826825,
        "longitude": 11.652744,
        "altitude": 346.622,
        "vario": -0.642347243
    },
    {
        "time": "2022-07-30T16:39:16.000Z",
        "latitude": 60.8829784,
        "longitude": 11.6528621,
        "altitude": 345.043,
        "vario": -0.7547761405
    },
    {
        "time": "2022-07-30T16:39:17.000Z",
        "latitude": 60.8832712,
        "longitude": 11.6529977,
        "altitude": 342.765,
        "vario": -0.8713358916
    },
    {
        "time": "2022-07-30T16:39:18.000Z",
        "latitude": 60.8835578,
        "longitude": 11.6531661,
        "altitude": 340.467,
        "vario": -0.9832516647
    },
    {
        "time": "2022-07-30T16:39:19.000Z",
        "latitude": 60.8838391,
        "longitude": 11.6533876,
        "altitude": 337.806,
        "vario": -1.0843869951
    },
    {
        "time": "2022-07-30T16:39:20.000Z",
        "latitude": 60.8841054,
        "longitude": 11.6536758,
        "altitude": 334.859,
        "vario": -1.1718861391
    },
    {
        "time": "2022-07-30T16:39:21.000Z",
        "latitude": 60.8843507,
        "longitude": 11.6540409,
        "altitude": 334.248,
        "vario": -1.2458963344
    },
    {
        "time": "2022-07-30T16:39:22.000Z",
        "latitude": 60.8845762,
        "longitude": 11.6544636,
        "altitude": 334.345,
        "vario": -1.3086554697
    },
    {
        "time": "2022-07-30T16:39:23.000Z",
        "latitude": 60.8847832,
        "longitude": 11.6549273,
        "altitude": 334.384,
        "vario": -1.3633655062
    },
    {
        "time": "2022-07-30T16:39:24.000Z",
        "latitude": 60.8849748,
        "longitude": 11.6554168,
        "altitude": 334.02,
        "vario": -1.4131324057
    },
    {
        "time": "2022-07-30T16:39:25.000Z",
        "latitude": 60.8851584,
        "longitude": 11.6559196,
        "altitude": 332.229,
        "vario": -1.4602527329
    },
    {
        "time": "2022-07-30T16:39:26.000Z",
        "latitude": 60.8853379,
        "longitude": 11.6564372,
        "altitude": 329.653,
        "vario": -1.50613562
    },
    {
        "time": "2022-07-30T16:39:27.000Z",
        "latitude": 60.8855147,
        "longitude": 11.6569578,
        "altitude": 327.795,
        "vario": -1.5517326497
    },
    {
        "time": "2022-07-30T16:39:28.000Z",
        "latitude": 60.8856903,
        "longitude": 11.6574732,
        "altitude": 326.323,
        "vario": -1.5979831323
    },
    {
        "time": "2022-07-30T16:39:29.000Z",
        "latitude": 60.8858629,
        "longitude": 11.6579944,
        "altitude": 323.883,
        "vario": -1.6462193965
    },
    {
        "time": "2022-07-30T16:39:30.000Z",
        "latitude": 60.886028,
        "longitude": 11.6585292,
        "altitude": 321.702,
        "vario": -1.6982688295
    },
    {
        "time": "2022-07-30T16:39:31.000Z",
        "latitude": 60.8861723,
        "longitude": 11.6590718,
        "altitude": 320.178,
        "vario": -1.7560752577
    },
    {
        "time": "2022-07-30T16:39:32.000Z",
        "latitude": 60.8862776,
        "longitude": 11.6596201,
        "altitude": 318.966,
        "vario": -1.8211061119
    },
    {
        "time": "2022-07-30T16:39:33.000Z",
        "latitude": 60.8863256,
        "longitude": 11.6601819,
        "altitude": 318.369,
        "vario": -1.8935883471
    },
    {
        "time": "2022-07-30T16:39:34.000Z",
        "latitude": 60.8863112,
        "longitude": 11.6607371,
        "altitude": 317.563,
        "vario": -1.9718102222
    },
    {
        "time": "2022-07-30T16:39:35.000Z",
        "latitude": 60.8862217,
        "longitude": 11.6612311,
        "altitude": 314.758,
        "vario": -2.0519098578
    },
    {
        "time": "2022-07-30T16:39:36.000Z",
        "latitude": 60.8860772,
        "longitude": 11.6616615,
        "altitude": 312.959,
        "vario": -2.1281859252
    },
    {
        "time": "2022-07-30T16:39:37.000Z",
        "latitude": 60.8858967,
        "longitude": 11.6620456,
        "altitude": 311.659,
        "vario": -2.193862814
    },
    {
        "time": "2022-07-30T16:39:38.000Z",
        "latitude": 60.8856955,
        "longitude": 11.6624173,
        "altitude": 309.277,
        "vario": -2.2422274845
    },
    {
        "time": "2022-07-30T16:39:39.000Z",
        "latitude": 60.8854855,
        "longitude": 11.6627839,
        "altitude": 304.92,
        "vario": -2.2679092684
    },
    {
        "time": "2022-07-30T16:39:40.000Z",
        "latitude": 60.8852691,
        "longitude": 11.6631445,
        "altitude": 301.515,
        "vario": -2.2679092684
    }
]

const wls37 = [
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:03:19Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-03-19_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:04:45Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-04-45_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:06:12Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-06-12_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:07:38Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-07-38_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:09:05Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-09-05_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:10:31Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-10-31_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:11:57Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-11-57_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:13:24Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-13-24_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:14:50Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-14-50_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:16:17Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-16-17_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:17:45Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-17-45_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:19:11Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-19-11_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:20:39Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-20-39_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:22:05Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-22-05_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:23:31Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-23-31_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:24:58Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-24-58_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:26:25Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-26-25_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:27:51Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-27-51_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:29:18Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-29-18_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:30:44Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-30-44_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:32:11Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-32-11_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:33:37Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-33-37_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:35:04Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-35-04_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:36:31Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-36-31_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:37:57Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-37-57_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:39:23Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-39-23_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:40:50Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-40-50_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:42:16Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-42-16_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:43:43Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-43-43_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:45:09Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-45-09_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:46:36Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-46-36_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls37",
    "start_time": "2022-07-23T12:48:02Z",
    "azimuth": 146.14,
    "latitude": 60.8808158,
    "longitude": 11.670337,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_2022-07-23_12-48-02_A146.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  }
];


const wls34 = [
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:00:21Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-00-21_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:01:47Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-01-47_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:03:13Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-03-13_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:04:40Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-04-40_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:06:06Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-06-06_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:07:32Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-07-32_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:08:58Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-08-58_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:10:24Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-10-24_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:11:50Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-11-50_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:13:17Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-13-17_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:14:43Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-14-43_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:16:09Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-16-09_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:17:35Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-17-35_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:19:01Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-19-01_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  },
  {
    "name": "wls34",
    "start_time": "2022-07-23T12:20:28Z",
    "azimuth": 326.2,
    "latitude": 60.8743572,
    "longitude": 11.6792349,
    "altitude": 212.6,
    "filename": "radial_vel_wls34_2022-07-23_12-20-28_A326.png",
    "im_width": 490,
    "im_height": 409,
    "px_to_m": 16.422,
    "start_offset": 3376.84729,
    "start_height": 1633
  }
];


Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNmI4NWRhZS05YzY2LTQ1NmYtYmQwMy0zZmY1N2EzNGI1ZjIiLCJpZCI6MzQ0NzIsImlhdCI6MTYwMDM0NTcxM30.ts9JCT1i27azCt9oix_rMb4hzBhdGBeUdn7tgRHZunU";

const worldTerrain = Cesium.createWorldTerrain({
  requestWaterMask: true,
  requestVertexNormals: true,
});

const viewer = new Cesium.Viewer("starmoenCesiumContainer", {
  homeButton: false,
  infoBox: false,
  imageryLayers: true,
  projectionPicker: false,
  geocoder: false,
  sceneModePicker: false,
  terrainProvider: worldTerrain,
  bottomContainer: 'bottomContainer',
  fullscreenElement: 'my-canvas-container',
});

// TODO: Set the clock from the available data range
const start = Cesium.JulianDate.fromIso8601("2022-07-23T12:00:00Z");
const stop = Cesium.JulianDate.fromIso8601("2022-07-23T13:00:00Z");

viewer.clock.startTime = start.clone();
viewer.clock.stopTime = stop.clone();
viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2022-06-06T12:00:00Z");
viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
viewer.clock.multiplier = 60;
viewer.timeline.zoomTo(start, stop);

const positionProperty = new Cesium.SampledPositionProperty();
const sizeProperty = new Cesium.SampledProperty(Number);
const colorProperty = new Cesium.SampledProperty(Cesium.Color);


const thermal_entities = thermal.map( function (dataPoint) {

  // Declare the time for this individual sample and store it in a new JulianDate instance.
  const time = dataPoint.time;
  const position = Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.altitude);
  // Store the position along with its timestamp.
  // Here we add the positions all upfront, but these can be added at run-time as samples are received from a server.
  positionProperty.addSample(time, position);
  sizeProperty.addSample(time, 10 * Math.abs(dataPoint.vario) + 10);
  colorProperty.addSample(time, Cesium.Color.multiplyByScalar(Cesium.Color.RED, dataPoint.vario / 3.0, new Cesium.Color()));

  var c = Cesium.Color.RED;
  if (dataPoint.vario < 0) {
    c = Cesium.Color.BLUE;
  }

  return viewer.entities.add({
          description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height}) Vario: ${dataPoint.vario}`,
          position: position,
          point: { 
            pixelSize: 2 * Math.abs(dataPoint.vario) + 5, 
            color: Cesium.Color.multiplyByScalar( c, dataPoint.vario/3.0, new Cesium.Color() ) 
          }
        });
});

var redBall =
  viewer.entities.add({
    description: `Thermal ball`,
    position: positionProperty,
    point: { pixelSize: sizeProperty, color: colorProperty }
  });


function createROIfromRotation(position, rotation, length) {
  // position: Cartographic - {latitude, longitude, altitude})
  // rotation: HeadingPitchRoll - {heading, pitch, roll}

  // Based on answer found here:
  // https://stackoverflow.com/questions/58021985/create-a-point-in-a-direction-in-cesiumjs

  var cartesianPosition = Cesium.Ellipsoid.WGS84.cartographicToCartesian(position);

  rotation.heading = rotation.heading - Cesium.Math.toRadians(90);
  var referenceFrame1 = Cesium.Transforms.headingPitchRollQuaternion(cartesianPosition, rotation);
  var rotationMatrix = Cesium.Matrix3.fromQuaternion(referenceFrame1, new Cesium.Matrix3());
  var rotationScaled = Cesium.Matrix3.multiplyByVector(rotationMatrix, new Cesium.Cartesian3(length, 0, 0), new Cesium.Cartesian3());
  var roiPos = Cesium.Cartesian3.add(cartesianPosition, rotationScaled, new Cesium.Cartesian3());
  return Cesium.Ellipsoid.WGS84.cartesianToCartographic(roiPos);
}

function getEndpoint(lidar_scan, range) {
  return createROIfromRotation(
    Cesium.Cartographic.fromDegrees(
      lidar_scan.longitude,
      lidar_scan.latitude,
      lidar_scan.altitude),
    new Cesium.HeadingPitchRoll(
      Cesium.Math.toRadians(lidar_scan.azimuth), 0, 0), range
  );
}

function makeBilboardForScan(viewer, lidar_scan) {

  var endRange = lidar_scan.im_width * lidar_scan.px_to_m - lidar_scan.start_offset;

  var endpoint = getEndpoint(lidar_scan, endRange);
  var startpoint = getEndpoint(lidar_scan, - lidar_scan.start_offset);

  var bottom = lidar_scan.altitude - lidar_scan.start_height;
  var top = lidar_scan.im_height * lidar_scan.px_to_m + bottom;

  return viewer.entities.add({
    name: "SCAN " + lidar_scan.lidar_id + lidar_scan.azimuth,
    wall: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        Cesium.Math.toDegrees(startpoint.longitude),
        Cesium.Math.toDegrees(startpoint.latitude),
        top,
        Cesium.Math.toDegrees(endpoint.longitude),
        Cesium.Math.toDegrees(endpoint.latitude),
        top,
      ]),
      minimumHeights: [bottom, bottom],
      material: new Cesium.ImageMaterialProperty({
        'image': 'http://158.39.77.131/public/starmoen/' + lidar_scan.filename,
        'color': Cesium.Color.WHITE.withAlpha(0.5)
      })
    },
  });
}

var callback = function (data, checkbox) {
  const entities = data.map(x => makeBilboardForScan(viewer, x));
  return function (currentTime) {
    for (let i = 0; i < data.length; i++) {
      var e = data[i];
      if (!checkbox.checked || currentTime < e.start_time || (i < data.length - 1 && currentTime > data[i + 1].start_time)) {
        entities[i].show = false;
      } else {
        entities[i].show = true;
      }
    }
  };
};

var f37 = callback(wls37, document.querySelector('#wls-37'));
var f34 = callback(wls34, document.querySelector('#wls-34'));

viewer.clock.onTick.addEventListener(function (clock) {

  var currentTime = clock.currentTime;
 
  f34(currentTime);
  f37(currentTime);  
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((cb) => {
    cb.checked = true;
});

// 
const cb = document.querySelector('#st-thermal');
cb.onclick = function () {
  thermal_entities.forEach( e => {
    e.show = cb.checked;
  });
};

// viewer.zoomTo(Cesium.Cartesian3.fromDegrees(wls34.longitude, wls34.latitude, wls34.altitude));
viewer.zoomTo(thermal_entities[100]);



})();


</script>
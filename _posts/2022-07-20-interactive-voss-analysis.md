---
layout: post
title: Interactive Analysis from Voss
category: PG
tags: [lidar, PG]
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
  <div id="cesiumContainer">
  </div>
  <div id='my-options'>
    <label for="wls-34">
      <input type="checkbox" id="wls-34" name="wls-34" value="yes"> WLS 34 
    </label>
    <label for="wls-37">
      <input type="checkbox" id="wls-37" name="wls-37" value="yes"> WLS 37 
    </label>
    <label for="thermal">
      <input type="checkbox" id="thermal" name="thermal" value="yes"> Thermal 
    </label>
  </div>
</div>  

<div id="toolbar"></div>
<div id='bottomContainer '></div>


Here is an example of the overlap between paragliding and LIDAR observations.


<script>

const thermal = [{ "time": "2022-06-06T10:26:28.000Z", "latitude": 60.6387166667, "longitude": 6.4073, "altitude": 629.0, "vario": 0.6314818946 }, { "time": "2022-06-06T10:26:29.000Z", "latitude": 60.6387333333, "longitude": 6.4074333333, "altitude": 630.0, "vario": 0.7258938849 }, { "time": "2022-06-06T10:26:30.000Z", "latitude": 60.6387, "longitude": 6.4075833333, "altitude": 631.0, "vario": 0.8077397356 }, { "time": "2022-06-06T10:26:31.000Z", "latitude": 60.63865, "longitude": 6.40765, "altitude": 632.0, "vario": 0.8752869486 }, { "time": "2022-06-06T10:26:32.000Z", "latitude": 60.6385666667, "longitude": 6.40765, "altitude": 633.0, "vario": 0.9275178068 }, { "time": "2022-06-06T10:26:33.000Z", "latitude": 60.6385, "longitude": 6.4076, "altitude": 634.0, "vario": 0.9638707902 }, { "time": "2022-06-06T10:26:34.000Z", "latitude": 60.6384333333, "longitude": 6.4074666667, "altitude": 635.0, "vario": 0.9841243122 }, { "time": "2022-06-06T10:26:35.000Z", "latitude": 60.6384, "longitude": 6.4073333333, "altitude": 636.0, "vario": 0.9882796186 }, { "time": "2022-06-06T10:26:36.000Z", "latitude": 60.6383833333, "longitude": 6.4071833333, "altitude": 637.0, "vario": 0.9766477189 }, { "time": "2022-06-06T10:26:37.000Z", "latitude": 60.6384, "longitude": 6.4070333333, "altitude": 639.0, "vario": 0.9500344114 }, { "time": "2022-06-06T10:26:38.000Z", "latitude": 60.6384, "longitude": 6.4068666667, "altitude": 640.0, "vario": 0.9098721787 }, { "time": "2022-06-06T10:26:39.000Z", "latitude": 60.6383666667, "longitude": 6.40675, "altitude": 641.0, "vario": 0.8584201819 }, { "time": "2022-06-06T10:26:40.000Z", "latitude": 60.6383166667, "longitude": 6.4067, "altitude": 643.0, "vario": 0.7987821071 }, { "time": "2022-06-06T10:26:41.000Z", "latitude": 60.63825, "longitude": 6.4067, "altitude": 643.0, "vario": 0.7346594498 }, { "time": "2022-06-06T10:26:42.000Z", "latitude": 60.6381833333, "longitude": 6.4067666667, "altitude": 644.0, "vario": 0.6701228786 }, { "time": "2022-06-06T10:26:43.000Z", "latitude": 60.6381333333, "longitude": 6.40685, "altitude": 644.0, "vario": 0.6092269123 }, { "time": "2022-06-06T10:26:44.000Z", "latitude": 60.6381166667, "longitude": 6.4069833333, "altitude": 644.0, "vario": 0.5555889628 }, { "time": "2022-06-06T10:26:45.000Z", "latitude": 60.6381333333, "longitude": 6.4071333333, "altitude": 645.0, "vario": 0.5120731543 }, { "time": "2022-06-06T10:26:46.000Z", "latitude": 60.6381666667, "longitude": 6.4073, "altitude": 645.0, "vario": 0.4805423525 }, { "time": "2022-06-06T10:26:47.000Z", "latitude": 60.6382333333, "longitude": 6.4074333333, "altitude": 645.0, "vario": 0.4618460979 }, { "time": "2022-06-06T10:26:48.000Z", "latitude": 60.6383333333, "longitude": 6.4074833333, "altitude": 645.0, "vario": 0.4559005348 }, { "time": "2022-06-06T10:26:49.000Z", "latitude": 60.6384166667, "longitude": 6.4074666667, "altitude": 646.0, "vario": 0.4618708429 }, { "time": "2022-06-06T10:26:50.000Z", "latitude": 60.6385, "longitude": 6.4073833333, "altitude": 646.0, "vario": 0.4784546262 }, { "time": "2022-06-06T10:26:51.000Z", "latitude": 60.6385666667, "longitude": 6.4072666667, "altitude": 646.0, "vario": 0.5041215073 }, { "time": "2022-06-06T10:26:52.000Z", "latitude": 60.6386166667, "longitude": 6.4070833333, "altitude": 647.0, "vario": 0.5373627974 }, { "time": "2022-06-06T10:26:53.000Z", "latitude": 60.6386166667, "longitude": 6.4069166667, "altitude": 648.0, "vario": 0.5767919445 }, { "time": "2022-06-06T10:26:54.000Z", "latitude": 60.6386, "longitude": 6.4067333333, "altitude": 648.0, "vario": 0.6211440177 }, { "time": "2022-06-06T10:26:55.000Z", "latitude": 60.63855, "longitude": 6.4066166667, "altitude": 649.0, "vario": 0.6692211861 }, { "time": "2022-06-06T10:26:56.000Z", "latitude": 60.6385, "longitude": 6.4065333333, "altitude": 649.0, "vario": 0.7196944646 }, { "time": "2022-06-06T10:26:57.000Z", "latitude": 60.6384333333, "longitude": 6.4065166667, "altitude": 650.0, "vario": 0.77098187 }, { "time": "2022-06-06T10:26:58.000Z", "latitude": 60.6383666667, "longitude": 6.4065166667, "altitude": 651.0, "vario": 0.8211498148 }, { "time": "2022-06-06T10:26:59.000Z", "latitude": 60.6383166667, "longitude": 6.4065833333, "altitude": 651.0, "vario": 0.8678239869 }, { "time": "2022-06-06T10:27:00.000Z", "latitude": 60.6383, "longitude": 6.4067166667, "altitude": 652.0, "vario": 0.9082557844 }, { "time": "2022-06-06T10:27:01.000Z", "latitude": 60.6383, "longitude": 6.4069, "altitude": 654.0, "vario": 0.9395509272 }, { "time": "2022-06-06T10:27:02.000Z", "latitude": 60.6383166667, "longitude": 6.40705, "altitude": 655.0, "vario": 0.9588704782 }, { "time": "2022-06-06T10:27:03.000Z", "latitude": 60.6383666667, "longitude": 6.4072, "altitude": 656.0, "vario": 0.9638026884 }, { "time": "2022-06-06T10:27:04.000Z", "latitude": 60.63845, "longitude": 6.4073, "altitude": 657.0, "vario": 0.9527613332 }, { "time": "2022-06-06T10:27:05.000Z", "latitude": 60.6385166667, "longitude": 6.4073666667, "altitude": 658.0, "vario": 0.9253356706 }, { "time": "2022-06-06T10:27:06.000Z", "latitude": 60.6386, "longitude": 6.40735, "altitude": 660.0, "vario": 0.8826965179 }, { "time": "2022-06-06T10:27:07.000Z", "latitude": 60.6386833333, "longitude": 6.4072833333, "altitude": 661.0, "vario": 0.8277130075 }, { "time": "2022-06-06T10:27:08.000Z", "latitude": 60.63875, "longitude": 6.4071666667, "altitude": 662.0, "vario": 0.7649613701 }, { "time": "2022-06-06T10:27:09.000Z", "latitude": 60.6388, "longitude": 6.4070166667, "altitude": 663.0, "vario": 0.700527666 }, { "time": "2022-06-06T10:27:10.000Z", "latitude": 60.6388166667, "longitude": 6.4068666667, "altitude": 664.0, "vario": 0.6415085629 }, { "time": "2022-06-06T10:27:11.000Z", "latitude": 60.6388166667, "longitude": 6.4067, "altitude": 665.0, "vario": 0.5953034565 }, { "time": "2022-06-06T10:27:12.000Z", "latitude": 60.6388, "longitude": 6.4065666667, "altitude": 664.0, "vario": 0.5687908749 }, { "time": "2022-06-06T10:27:13.000Z", "latitude": 60.6387666667, "longitude": 6.4064333333, "altitude": 664.0, "vario": 0.5675699375 }, { "time": "2022-06-06T10:27:14.000Z", "latitude": 60.6387166667, "longitude": 6.4063333333, "altitude": 663.0, "vario": 0.5952744394 }, { "time": "2022-06-06T10:27:15.000Z", "latitude": 60.63865, "longitude": 6.4063, "altitude": 663.0, "vario": 0.6531442671 }, { "time": "2022-06-06T10:27:16.000Z", "latitude": 60.6385833333, "longitude": 6.40635, "altitude": 664.0, "vario": 0.7399309667 }, { "time": "2022-06-06T10:27:17.000Z", "latitude": 60.6385666667, "longitude": 6.4064666667, "altitude": 664.0, "vario": 0.8520335604 }, { "time": "2022-06-06T10:27:18.000Z", "latitude": 60.6385333333, "longitude": 6.4066166667, "altitude": 665.0, "vario": 0.9839136535 }, { "time": "2022-06-06T10:27:19.000Z", "latitude": 60.6385333333, "longitude": 6.4067833333, "altitude": 666.0, "vario": 1.1287209857 }, { "time": "2022-06-06T10:27:20.000Z", "latitude": 60.63855, "longitude": 6.4069833333, "altitude": 667.0, "vario": 1.2788987674 }, { "time": "2022-06-06T10:27:21.000Z", "latitude": 60.6386, "longitude": 6.4071333333, "altitude": 668.0, "vario": 1.4268603767 }, { "time": "2022-06-06T10:27:22.000Z", "latitude": 60.6386666667, "longitude": 6.40725, "altitude": 670.0, "vario": 1.5656589616 }, { "time": "2022-06-06T10:27:23.000Z", "latitude": 60.6387666667, "longitude": 6.4072833333, "altitude": 672.0, "vario": 1.689429576 }, { "time": "2022-06-06T10:27:24.000Z", "latitude": 60.6388333333, "longitude": 6.4072333333, "altitude": 675.0, "vario": 1.79378834 }, { "time": "2022-06-06T10:27:25.000Z", "latitude": 60.6389, "longitude": 6.4071166667, "altitude": 677.0, "vario": 1.8761069652 }, { "time": "2022-06-06T10:27:26.000Z", "latitude": 60.63895, "longitude": 6.40695, "altitude": 679.0, "vario": 1.9354967297 }, { "time": "2022-06-06T10:27:27.000Z", "latitude": 60.63895, "longitude": 6.4067833333, "altitude": 682.0, "vario": 1.9726549717 }, { "time": "2022-06-06T10:27:28.000Z", "latitude": 60.63895, "longitude": 6.4066333333, "altitude": 684.0, "vario": 1.9895624343 }, { "time": "2022-06-06T10:27:29.000Z", "latitude": 60.6389166667, "longitude": 6.4064833333, "altitude": 686.0, "vario": 1.989032133 }, { "time": "2022-06-06T10:27:30.000Z", "latitude": 60.6388666667, "longitude": 6.40635, "altitude": 688.0, "vario": 1.9742825459 }, { "time": "2022-06-06T10:27:31.000Z", "latitude": 60.6388166667, "longitude": 6.4062833333, "altitude": 690.0, "vario": 1.9484365283 }, { "time": "2022-06-06T10:27:32.000Z", "latitude": 60.63875, "longitude": 6.4063333333, "altitude": 692.0, "vario": 1.914108677 }, { "time": "2022-06-06T10:27:33.000Z", "latitude": 60.6386833333, "longitude": 6.4064333333, "altitude": 694.0, "vario": 1.8731862237 }, { "time": "2022-06-06T10:27:34.000Z", "latitude": 60.6386666667, "longitude": 6.4065833333, "altitude": 696.0, "vario": 1.8267103198 }, { "time": "2022-06-06T10:27:35.000Z", "latitude": 60.6386666667, "longitude": 6.4067666667, "altitude": 697.0, "vario": 1.7749943018 }, { "time": "2022-06-06T10:27:36.000Z", "latitude": 60.6386833333, "longitude": 6.4069333333, "altitude": 699.0, "vario": 1.7179208252 }, { "time": "2022-06-06T10:27:37.000Z", "latitude": 60.63875, "longitude": 6.4070833333, "altitude": 701.0, "vario": 1.6554398828 }, { "time": "2022-06-06T10:27:38.000Z", "latitude": 60.6388333333, "longitude": 6.4072333333, "altitude": 703.0, "vario": 1.5880526537 }, { "time": "2022-06-06T10:27:39.000Z", "latitude": 60.6389166667, "longitude": 6.4073166667, "altitude": 704.0, "vario": 1.5173120472 }, { "time": "2022-06-06T10:27:40.000Z", "latitude": 60.639, "longitude": 6.4073333333, "altitude": 706.0, "vario": 1.4462008074 }, { "time": "2022-06-06T10:27:41.000Z", "latitude": 60.6390833333, "longitude": 6.40725, "altitude": 708.0, "vario": 1.3790835334 }, { "time": "2022-06-06T10:27:42.000Z", "latitude": 60.6391333333, "longitude": 6.4071166667, "altitude": 710.0, "vario": 1.3213966307 }, { "time": "2022-06-06T10:27:43.000Z", "latitude": 60.6391666667, "longitude": 6.4069, "altitude": 712.0, "vario": 1.2790305195 }, { "time": "2022-06-06T10:27:44.000Z", "latitude": 60.6391833333, "longitude": 6.4066666667, "altitude": 712.0, "vario": 1.2573857213 }, { "time": "2022-06-06T10:27:45.000Z", "latitude": 60.6391833333, "longitude": 6.4064333333, "altitude": 711.0, "vario": 1.2604616197 }, { "time": "2022-06-06T10:27:46.000Z", "latitude": 60.6391666667, "longitude": 6.4062333333, "altitude": 711.0, "vario": 1.2901484646 }, { "time": "2022-06-06T10:27:47.000Z", "latitude": 60.6391333333, "longitude": 6.4060833333, "altitude": 712.0, "vario": 1.3457702493 }, { "time": "2022-06-06T10:27:48.000Z", "latitude": 60.6390833333, "longitude": 6.40595, "altitude": 713.0, "vario": 1.4241892358 }, { "time": "2022-06-06T10:27:49.000Z", "latitude": 60.6390166667, "longitude": 6.40585, "altitude": 715.0, "vario": 1.5202034932 }, { "time": "2022-06-06T10:27:50.000Z", "latitude": 60.6389666667, "longitude": 6.4057833333, "altitude": 716.0, "vario": 1.6272433011 }, { "time": "2022-06-06T10:27:51.000Z", "latitude": 60.6388833333, "longitude": 6.4057833333, "altitude": 719.0, "vario": 1.7383175274 }, { "time": "2022-06-06T10:27:52.000Z", "latitude": 60.6388166667, "longitude": 6.4058166667, "altitude": 721.0, "vario": 1.8467620106 }, { "time": "2022-06-06T10:27:53.000Z", "latitude": 60.6387666667, "longitude": 6.40585, "altitude": 722.0, "vario": 1.9468361879 }, { "time": "2022-06-06T10:27:54.000Z", "latitude": 60.6387, "longitude": 6.40595, "altitude": 725.0, "vario": 2.0341086771 }, { "time": "2022-06-06T10:27:55.000Z", "latitude": 60.63865, "longitude": 6.4060833333, "altitude": 727.0, "vario": 2.1055692418 }, { "time": "2022-06-06T10:27:56.000Z", "latitude": 60.6386333333, "longitude": 6.40625, "altitude": 730.0, "vario": 2.1595604858 }, { "time": "2022-06-06T10:27:57.000Z", "latitude": 60.6386666667, "longitude": 6.4064333333, "altitude": 732.0, "vario": 2.1956183799 }, { "time": "2022-06-06T10:27:58.000Z", "latitude": 60.6387166667, "longitude": 6.4066, "altitude": 735.0, "vario": 2.2142626125 }, { "time": "2022-06-06T10:27:59.000Z", "latitude": 60.6388, "longitude": 6.4067666667, "altitude": 737.0, "vario": 2.2167713265 }, { "time": "2022-06-06T10:28:00.000Z", "latitude": 60.6388666667, "longitude": 6.4068666667, "altitude": 739.0, "vario": 2.2049717 }, { "time": "2022-06-06T10:28:01.000Z", "latitude": 60.6389333333, "longitude": 6.4069333333, "altitude": 742.0, "vario": 2.1810664251 }, { "time": "2022-06-06T10:28:02.000Z", "latitude": 60.6390166667, "longitude": 6.4069833333, "altitude": 744.0, "vario": 2.1474453878 }, { "time": "2022-06-06T10:28:03.000Z", "latitude": 60.6391, "longitude": 6.407, "altitude": 746.0, "vario": 2.1064741269 }, { "time": "2022-06-06T10:28:04.000Z", "latitude": 60.6391833333, "longitude": 6.4069666667, "altitude": 749.0, "vario": 2.0602495973 }, { "time": "2022-06-06T10:28:05.000Z", "latitude": 60.6392833333, "longitude": 6.4068833333, "altitude": 751.0, "vario": 2.0103587057 }, { "time": "2022-06-06T10:28:06.000Z", "latitude": 60.6393333333, "longitude": 6.40675, "altitude": 752.0, "vario": 1.9576807014 }, { "time": "2022-06-06T10:28:07.000Z", "latitude": 60.6393666667, "longitude": 6.4065666667, "altitude": 754.0, "vario": 1.9023121046 }, { "time": "2022-06-06T10:28:08.000Z", "latitude": 60.6393666667, "longitude": 6.40635, "altitude": 755.0, "vario": 1.8436394966 }, { "time": "2022-06-06T10:28:09.000Z", "latitude": 60.6393333333, "longitude": 6.40615, "altitude": 758.0, "vario": 1.7805724213 }, { "time": "2022-06-06T10:28:10.000Z", "latitude": 60.6392666667, "longitude": 6.4059833333, "altitude": 760.0, "vario": 1.711974441 }, { "time": "2022-06-06T10:28:11.000Z", "latitude": 60.6391833333, "longitude": 6.4058833333, "altitude": 761.0, "vario": 1.6371490563 }, { "time": "2022-06-06T10:28:12.000Z", "latitude": 60.6391, "longitude": 6.40585, "altitude": 763.0, "vario": 1.5564144258 }, { "time": "2022-06-06T10:28:13.000Z", "latitude": 60.6390333333, "longitude": 6.4059, "altitude": 765.0, "vario": 1.4715133382 }, { "time": "2022-06-06T10:28:14.000Z", "latitude": 60.6389833333, "longitude": 6.4060333333, "altitude": 767.0, "vario": 1.3856595908 }, { "time": "2022-06-06T10:28:15.000Z", "latitude": 60.63895, "longitude": 6.4061666667, "altitude": 769.0, "vario": 1.3034878332 }, { "time": "2022-06-06T10:28:16.000Z", "latitude": 60.6389666667, "longitude": 6.4063166667, "altitude": 770.0, "vario": 1.2305044968 }, { "time": "2022-06-06T10:28:17.000Z", "latitude": 60.639, "longitude": 6.4064666667, "altitude": 771.0, "vario": 1.1722896184 }, { "time": "2022-06-06T10:28:18.000Z", "latitude": 60.63905, "longitude": 6.4065833333, "altitude": 771.0, "vario": 1.1337179693 }, { "time": "2022-06-06T10:28:19.000Z", "latitude": 60.6391333333, "longitude": 6.4066166667, "altitude": 771.0, "vario": 1.1181502233 }, { "time": "2022-06-06T10:28:20.000Z", "latitude": 60.6392166667, "longitude": 6.4065666667, "altitude": 771.0, "vario": 1.1269236207 }, { "time": "2022-06-06T10:28:21.000Z", "latitude": 60.6392666667, "longitude": 6.4065, "altitude": 772.0, "vario": 1.1591724604 }, { "time": "2022-06-06T10:28:22.000Z", "latitude": 60.6393333333, "longitude": 6.4064833333, "altitude": 773.0, "vario": 1.2121100103 }, { "time": "2022-06-06T10:28:23.000Z", "latitude": 60.6394166667, "longitude": 6.40645, "altitude": 774.0, "vario": 1.2815537038 }, { "time": "2022-06-06T10:28:24.000Z", "latitude": 60.6394833333, "longitude": 6.4064, "altitude": 776.0, "vario": 1.3626003907 }, { "time": "2022-06-06T10:28:25.000Z", "latitude": 60.63955, "longitude": 6.4063, "altitude": 777.0, "vario": 1.4503941723 }, { "time": "2022-06-06T10:28:26.000Z", "latitude": 60.6396, "longitude": 6.4061666667, "altitude": 779.0, "vario": 1.5407414627 }, { "time": "2022-06-06T10:28:27.000Z", "latitude": 60.6396166667, "longitude": 6.4060166667, "altitude": 781.0, "vario": 1.6304285301 }, { "time": "2022-06-06T10:28:28.000Z", "latitude": 60.6396333333, "longitude": 6.4058666667, "altitude": 783.0, "vario": 1.7174120254 }, { "time": "2022-06-06T10:28:29.000Z", "latitude": 60.6396, "longitude": 6.4057, "altitude": 784.0, "vario": 1.8006596154 }, { "time": "2022-06-06T10:28:30.000Z", "latitude": 60.6395666667, "longitude": 6.4055333333, "altitude": 786.0, "vario": 1.8799217828 }, { "time": "2022-06-06T10:28:31.000Z", "latitude": 60.6395, "longitude": 6.4054333333, "altitude": 788.0, "vario": 1.955441619 }, { "time": "2022-06-06T10:28:32.000Z", "latitude": 60.6394166667, "longitude": 6.4054, "altitude": 790.0, "vario": 2.027572339 }, { "time": "2022-06-06T10:28:33.000Z", "latitude": 60.63935, "longitude": 6.4054833333, "altitude": 792.0, "vario": 2.096616375 }, { "time": "2022-06-06T10:28:34.000Z", "latitude": 60.6393166667, "longitude": 6.4056166667, "altitude": 795.0, "vario": 2.1626385365 }, { "time": "2022-06-06T10:28:35.000Z", "latitude": 60.6393166667, "longitude": 6.4057833333, "altitude": 796.0, "vario": 2.2254295809 }, { "time": "2022-06-06T10:28:36.000Z", "latitude": 60.63935, "longitude": 6.4059333333, "altitude": 799.0, "vario": 2.2845768384 }, { "time": "2022-06-06T10:28:37.000Z", "latitude": 60.6394, "longitude": 6.4060666667, "altitude": 801.0, "vario": 2.3395216281 }, { "time": "2022-06-06T10:28:38.000Z", "latitude": 60.6394666667, "longitude": 6.4061166667, "altitude": 803.0, "vario": 2.3896889689 }, { "time": "2022-06-06T10:28:39.000Z", "latitude": 60.6395333333, "longitude": 6.4060666667, "altitude": 806.0, "vario": 2.4346383863 }, { "time": "2022-06-06T10:28:40.000Z", "latitude": 60.6396, "longitude": 6.4059333333, "altitude": 809.0, "vario": 2.4741267545 }, { "time": "2022-06-06T10:28:41.000Z", "latitude": 60.63965, "longitude": 6.40575, "altitude": 812.0, "vario": 2.5081355347 }, { "time": "2022-06-06T10:28:42.000Z", "latitude": 60.6396666667, "longitude": 6.4055666667, "altitude": 814.0, "vario": 2.5368375499 }, { "time": "2022-06-06T10:28:43.000Z", "latitude": 60.6396333333, "longitude": 6.4054, "altitude": 816.0, "vario": 2.5604752113 }, { "time": "2022-06-06T10:28:44.000Z", "latitude": 60.6395833333, "longitude": 6.4052666667, "altitude": 819.0, "vario": 2.5792188198 }, { "time": "2022-06-06T10:28:45.000Z", "latitude": 60.6395166667, "longitude": 6.4051666667, "altitude": 822.0, "vario": 2.5931058539 }, { "time": "2022-06-06T10:28:46.000Z", "latitude": 60.6394333333, "longitude": 6.4050833333, "altitude": 824.0, "vario": 2.6018928944 }, { "time": "2022-06-06T10:28:47.000Z", "latitude": 60.6393666667, "longitude": 6.4050666667, "altitude": 827.0, "vario": 2.6050491997 }, { "time": "2022-06-06T10:28:48.000Z", "latitude": 60.6392833333, "longitude": 6.4051166667, "altitude": 829.0, "vario": 2.6018237837 }, { "time": "2022-06-06T10:28:49.000Z", "latitude": 60.6392, "longitude": 6.4051833333, "altitude": 833.0, "vario": 2.5912613879 }, { "time": "2022-06-06T10:28:50.000Z", "latitude": 60.6391333333, "longitude": 6.4052833333, "altitude": 835.0, "vario": 2.5723322326 }, { "time": "2022-06-06T10:28:51.000Z", "latitude": 60.6390833333, "longitude": 6.4054, "altitude": 838.0, "vario": 2.5440729686 }, { "time": "2022-06-06T10:28:52.000Z", "latitude": 60.6390833333, "longitude": 6.4055333333, "altitude": 840.0, "vario": 2.505773945 }, { "time": "2022-06-06T10:28:53.000Z", "latitude": 60.6390833333, "longitude": 6.4057333333, "altitude": 843.0, "vario": 2.4571775419 }, { "time": "2022-06-06T10:28:54.000Z", "latitude": 60.6391333333, "longitude": 6.40585, "altitude": 846.0, "vario": 2.3988114445 }, { "time": "2022-06-06T10:28:55.000Z", "latitude": 60.6391833333, "longitude": 6.40595, "altitude": 848.0, "vario": 2.3322944945 }, { "time": "2022-06-06T10:28:56.000Z", "latitude": 60.6392333333, "longitude": 6.406, "altitude": 850.0, "vario": 2.2604850991 }, { "time": "2022-06-06T10:28:57.000Z", "latitude": 60.6393, "longitude": 6.406, "altitude": 853.0, "vario": 2.1876849938 }, { "time": "2022-06-06T10:28:58.000Z", "latitude": 60.6393833333, "longitude": 6.4059333333, "altitude": 856.0, "vario": 2.1195395344 }, { "time": "2022-06-06T10:28:59.000Z", "latitude": 60.63945, "longitude": 6.4058333333, "altitude": 858.0, "vario": 2.0625953682 }, { "time": "2022-06-06T10:29:00.000Z", "latitude": 60.6395166667, "longitude": 6.4057, "altitude": 860.0, "vario": 2.023669857 }, { "time": "2022-06-06T10:29:01.000Z", "latitude": 60.63955, "longitude": 6.4055, "altitude": 861.0, "vario": 2.0089885415 }, { "time": "2022-06-06T10:29:02.000Z", "latitude": 60.6395666667, "longitude": 6.4053, "altitude": 862.0, "vario": 2.0232345146 }, { "time": "2022-06-06T10:29:03.000Z", "latitude": 60.6395166667, "longitude": 6.4051, "altitude": 863.0, "vario": 2.0687687397 }, { "time": "2022-06-06T10:29:04.000Z", "latitude": 60.6394666667, "longitude": 6.4049333333, "altitude": 864.0, "vario": 2.1451390794 }, { "time": "2022-06-06T10:29:05.000Z", "latitude": 60.6394, "longitude": 6.4048666667, "altitude": 865.0, "vario": 2.2489328157 }, { "time": "2022-06-06T10:29:06.000Z", "latitude": 60.6393166667, "longitude": 6.4048666667, "altitude": 868.0, "vario": 2.3741870999 }, { "time": "2022-06-06T10:29:07.000Z", "latitude": 60.63925, "longitude": 6.40495, "altitude": 870.0, "vario": 2.5131273092 }, { "time": "2022-06-06T10:29:08.000Z", "latitude": 60.6391833333, "longitude": 6.4050666667, "altitude": 873.0, "vario": 2.6571545941 }, { "time": "2022-06-06T10:29:09.000Z", "latitude": 60.63915, "longitude": 6.4051833333, "altitude": 876.0, "vario": 2.7979050996 }, { "time": "2022-06-06T10:29:10.000Z", "latitude": 60.6391333333, "longitude": 6.4053, "altitude": 879.0, "vario": 2.9282486827 }, { "time": "2022-06-06T10:29:11.000Z", "latitude": 60.63915, "longitude": 6.4054333333, "altitude": 883.0, "vario": 3.0429435777 }, { "time": "2022-06-06T10:29:12.000Z", "latitude": 60.6391833333, "longitude": 6.4055833333, "altitude": 887.0, "vario": 3.1390321885 }, { "time": "2022-06-06T10:29:13.000Z", "latitude": 60.6392333333, "longitude": 6.4057, "altitude": 891.0, "vario": 3.2158579115 }, { "time": "2022-06-06T10:29:14.000Z", "latitude": 60.6393, "longitude": 6.40575, "altitude": 893.0, "vario": 3.2747048882 }, { "time": "2022-06-06T10:29:15.000Z", "latitude": 60.6393833333, "longitude": 6.4057333333, "altitude": 897.0, "vario": 3.3183493701 }, { "time": "2022-06-06T10:29:16.000Z", "latitude": 60.6394666667, "longitude": 6.40565, "altitude": 901.0, "vario": 3.3503341551 }, { "time": "2022-06-06T10:29:17.000Z", "latitude": 60.6395333333, "longitude": 6.4055, "altitude": 904.0, "vario": 3.3743089183 }, { "time": "2022-06-06T10:29:18.000Z", "latitude": 60.6395666667, "longitude": 6.4053166667, "altitude": 907.0, "vario": 3.3934691038 }, { "time": "2022-06-06T10:29:19.000Z", "latitude": 60.63955, "longitude": 6.4051166667, "altitude": 910.0, "vario": 3.4100695927 }, { "time": "2022-06-06T10:29:20.000Z", "latitude": 60.6395, "longitude": 6.4049666667, "altitude": 914.0, "vario": 3.425116762 }, { "time": "2022-06-06T10:29:21.000Z", "latitude": 60.6394333333, "longitude": 6.4048666667, "altitude": 917.0, "vario": 3.4382897086 }, { "time": "2022-06-06T10:29:22.000Z", "latitude": 60.6393666667, "longitude": 6.4048, "altitude": 921.0, "vario": 3.4480050556 }, { "time": "2022-06-06T10:29:23.000Z", "latitude": 60.6392666667, "longitude": 6.4048, "altitude": 923.0, "vario": 3.4516542753 }, { "time": "2022-06-06T10:29:24.000Z", "latitude": 60.6392, "longitude": 6.4048666667, "altitude": 927.0, "vario": 3.4460735852 }, { "time": "2022-06-06T10:29:25.000Z", "latitude": 60.6391666667, "longitude": 6.4049666667, "altitude": 932.0, "vario": 3.4280910912 }, { "time": "2022-06-06T10:29:26.000Z", "latitude": 60.63915, "longitude": 6.4051166667, "altitude": 935.0, "vario": 3.395139613 }, { "time": "2022-06-06T10:29:27.000Z", "latitude": 60.63915, "longitude": 6.4052666667, "altitude": 938.0, "vario": 3.3459502395 }, { "time": "2022-06-06T10:29:28.000Z", "latitude": 60.6391666667, "longitude": 6.4054, "altitude": 942.0, "vario": 3.2810269795 }, { "time": "2022-06-06T10:29:29.000Z", "latitude": 60.6392166667, "longitude": 6.4054833333, "altitude": 946.0, "vario": 3.2029575702 }, { "time": "2022-06-06T10:29:30.000Z", "latitude": 60.6392666667, "longitude": 6.4055333333, "altitude": 950.0, "vario": 3.1164527148 }, { "time": "2022-06-06T10:29:31.000Z", "latitude": 60.63935, "longitude": 6.4055333333, "altitude": 954.0, "vario": 3.027900598 }, { "time": "2022-06-06T10:29:32.000Z", "latitude": 60.6394333333, "longitude": 6.4054833333, "altitude": 956.0, "vario": 2.9446506415 }, { "time": "2022-06-06T10:29:33.000Z", "latitude": 60.6395, "longitude": 6.4053833333, "altitude": 959.0, "vario": 2.8739911738 }, { "time": "2022-06-06T10:29:34.000Z", "latitude": 60.6395666667, "longitude": 6.4052166667, "altitude": 961.0, "vario": 2.822091134 }, { "time": "2022-06-06T10:29:35.000Z", "latitude": 60.6396, "longitude": 6.4050166667, "altitude": 962.0, "vario": 2.7930133277 }, { "time": "2022-06-06T10:29:36.000Z", "latitude": 60.6395833333, "longitude": 6.4048333333, "altitude": 964.0, "vario": 2.7881162024 }, { "time": "2022-06-06T10:29:37.000Z", "latitude": 60.6395333333, "longitude": 6.4046666667, "altitude": 966.0, "vario": 2.8059370347 }, { "time": "2022-06-06T10:29:38.000Z", "latitude": 60.6394666667, "longitude": 6.40455, "altitude": 969.0, "vario": 2.8424399069 }, { "time": "2022-06-06T10:29:39.000Z", "latitude": 60.6393833333, "longitude": 6.4045, "altitude": 972.0, "vario": 2.8917661569 }, { "time": "2022-06-06T10:29:40.000Z", "latitude": 60.6393, "longitude": 6.4044666667, "altitude": 975.0, "vario": 2.9471954815 }, { "time": "2022-06-06T10:29:41.000Z", "latitude": 60.6392166667, "longitude": 6.4044333333, "altitude": 978.0, "vario": 3.0021542268 }, { "time": "2022-06-06T10:29:42.000Z", "latitude": 60.63915, "longitude": 6.4044, "altitude": 982.0, "vario": 3.0509859039 }, { "time": "2022-06-06T10:29:43.000Z", "latitude": 60.6391, "longitude": 6.4044333333, "altitude": 986.0, "vario": 3.0895633273 }, { "time": "2022-06-06T10:29:44.000Z", "latitude": 60.63905, "longitude": 6.4045, "altitude": 989.0, "vario": 3.1155187968 }, { "time": "2022-06-06T10:29:45.000Z", "latitude": 60.639, "longitude": 6.4045666667, "altitude": 992.0, "vario": 3.1281504957 }, { "time": "2022-06-06T10:29:46.000Z", "latitude": 60.6389833333, "longitude": 6.4047166667, "altitude": 995.0, "vario": 3.1282644925 }, { "time": "2022-06-06T10:29:47.000Z", "latitude": 60.6390166667, "longitude": 6.4048666667, "altitude": 998.0, "vario": 3.1177191656 }, { "time": "2022-06-06T10:29:48.000Z", "latitude": 60.6390666667, "longitude": 6.4049166667, "altitude": 1002.0, "vario": 3.0990282269 }, { "time": "2022-06-06T10:29:49.000Z", "latitude": 60.63915, "longitude": 6.405, "altitude": 1005.0, "vario": 3.0750564389 }, { "time": "2022-06-06T10:29:50.000Z", "latitude": 60.6392333333, "longitude": 6.4049833333, "altitude": 1008.0, "vario": 3.0486256823 }, { "time": "2022-06-06T10:29:51.000Z", "latitude": 60.6393166667, "longitude": 6.4049166667, "altitude": 1011.0, "vario": 3.0222257521 }, { "time": "2022-06-06T10:29:52.000Z", "latitude": 60.6393833333, "longitude": 6.4047833333, "altitude": 1014.0, "vario": 2.9977756991 }, { "time": "2022-06-06T10:29:53.000Z", "latitude": 60.6394166667, "longitude": 6.4046, "altitude": 1017.0, "vario": 2.9763957759 }, { "time": "2022-06-06T10:29:54.000Z", "latitude": 60.6394166667, "longitude": 6.4044, "altitude": 1019.0, "vario": 2.9583015672 }, { "time": "2022-06-06T10:29:55.000Z", "latitude": 60.6393666667, "longitude": 6.4042166667, "altitude": 1022.0, "vario": 2.9427889559 }, { "time": "2022-06-06T10:29:56.000Z", "latitude": 60.6392833333, "longitude": 6.4041166667, "altitude": 1025.0, "vario": 2.9283370251 }, { "time": "2022-06-06T10:29:57.000Z", "latitude": 60.6392, "longitude": 6.4040666667, "altitude": 1028.0, "vario": 2.9129254316 }, { "time": "2022-06-06T10:29:58.000Z", "latitude": 60.6391333333, "longitude": 6.4041333333, "altitude": 1031.0, "vario": 2.8943974523 }, { "time": "2022-06-06T10:29:59.000Z", "latitude": 60.6390833333, "longitude": 6.4042, "altitude": 1034.0, "vario": 2.8709035492 }, { "time": "2022-06-06T10:30:00.000Z", "latitude": 60.63905, "longitude": 6.4043333333, "altitude": 1037.0, "vario": 2.8413378175 }, { "time": "2022-06-06T10:30:01.000Z", "latitude": 60.6390666667, "longitude": 6.4044833333, "altitude": 1040.0, "vario": 2.8056474462 }, { "time": "2022-06-06T10:30:02.000Z", "latitude": 60.6391, "longitude": 6.4046, "altitude": 1044.0, "vario": 2.7649824189 }, { "time": "2022-06-06T10:30:03.000Z", "latitude": 60.6391666667, "longitude": 6.4046833333, "altitude": 1046.0, "vario": 2.7216286757 }, { "time": "2022-06-06T10:30:04.000Z", "latitude": 60.63925, "longitude": 6.40465, "altitude": 1049.0, "vario": 2.6787129419 }, { "time": "2022-06-06T10:30:05.000Z", "latitude": 60.6393333333, "longitude": 6.4045666667, "altitude": 1052.0, "vario": 2.6396581465 }, { "time": "2022-06-06T10:30:06.000Z", "latitude": 60.6393833333, "longitude": 6.4044, "altitude": 1054.0, "vario": 2.6076403388 }, { "time": "2022-06-06T10:30:07.000Z", "latitude": 60.6394, "longitude": 6.4042166667, "altitude": 1056.0, "vario": 2.5850509597 }, { "time": "2022-06-06T10:30:08.000Z", "latitude": 60.6393833333, "longitude": 6.40405, "altitude": 1058.0, "vario": 2.5730358655 }, { "time": "2022-06-06T10:30:09.000Z", "latitude": 60.6393333333, "longitude": 6.4039, "altitude": 1060.0, "vario": 2.5713418348 }, { "time": "2022-06-06T10:30:10.000Z", "latitude": 60.6392666667, "longitude": 6.4037833333, "altitude": 1063.0, "vario": 2.5783970407 }, { "time": "2022-06-06T10:30:11.000Z", "latitude": 60.6391833333, "longitude": 6.4037166667, "altitude": 1065.0, "vario": 2.5916470553 }, { "time": "2022-06-06T10:30:12.000Z", "latitude": 60.6391, "longitude": 6.4037166667, "altitude": 1068.0, "vario": 2.608126981 }, { "time": "2022-06-06T10:30:13.000Z", "latitude": 60.6390166667, "longitude": 6.40375, "altitude": 1070.0, "vario": 2.625006144 }, { "time": "2022-06-06T10:30:14.000Z", "latitude": 60.6389666667, "longitude": 6.4038, "altitude": 1074.0, "vario": 2.6401510373 }, { "time": "2022-06-06T10:30:15.000Z", "latitude": 60.6389, "longitude": 6.4038833333, "altitude": 1077.0, "vario": 2.6524440072 }, { "time": "2022-06-06T10:30:16.000Z", "latitude": 60.6388833333, "longitude": 6.4039833333, "altitude": 1080.0, "vario": 2.6618320387 }, { "time": "2022-06-06T10:30:17.000Z", "latitude": 60.6388666667, "longitude": 6.4040833333, "altitude": 1082.0, "vario": 2.6691190967 }, { "time": "2022-06-06T10:30:18.000Z", "latitude": 60.6389166667, "longitude": 6.4042166667, "altitude": 1085.0, "vario": 2.6754851525 }, { "time": "2022-06-06T10:30:19.000Z", "latitude": 60.6389666667, "longitude": 6.4043, "altitude": 1087.0, "vario": 2.6818777349 }, { "time": "2022-06-06T10:30:20.000Z", "latitude": 60.6390333333, "longitude": 6.4043666667, "altitude": 1090.0, "vario": 2.6883900719 }, { "time": "2022-06-06T10:30:21.000Z", "latitude": 60.6391166667, "longitude": 6.4043833333, "altitude": 1092.0, "vario": 2.6938006856 }, { "time": "2022-06-06T10:30:22.000Z", "latitude": 60.6392166667, "longitude": 6.40435, "altitude": 1095.0, "vario": 2.6953063963 }, { "time": "2022-06-06T10:30:23.000Z", "latitude": 60.6393, "longitude": 6.4042333333, "altitude": 1097.0, "vario": 2.6886272114 }, { "time": "2022-06-06T10:30:24.000Z", "latitude": 60.6393666667, "longitude": 6.4041, "altitude": 1100.0, "vario": 2.6684246045 }, { "time": "2022-06-06T10:30:25.000Z", "latitude": 60.6393833333, "longitude": 6.4039166667, "altitude": 1103.0, "vario": 2.6290379576 }, { "time": "2022-06-06T10:30:26.000Z", "latitude": 60.6394, "longitude": 6.4037166667, "altitude": 1106.0, "vario": 2.5654924883 }, { "time": "2022-06-06T10:30:27.000Z", "latitude": 60.6393666667, "longitude": 6.4035166667, "altitude": 1109.0, "vario": 2.4744501769 }, { "time": "2022-06-06T10:30:28.000Z", "latitude": 60.63935, "longitude": 6.40335, "altitude": 1113.0, "vario": 2.3551765333 }, { "time": "2022-06-06T10:30:29.000Z", "latitude": 60.6392833333, "longitude": 6.4032, "altitude": 1116.0, "vario": 2.210201648 }, { "time": "2022-06-06T10:30:30.000Z", "latitude": 60.6392166667, "longitude": 6.4031166667, "altitude": 1119.0, "vario": 2.0454689414 }, { "time": "2022-06-06T10:30:31.000Z", "latitude": 60.6391333333, "longitude": 6.40305, "altitude": 1121.0, "vario": 1.8700727549 }, { "time": "2022-06-06T10:30:32.000Z", "latitude": 60.6390666667, "longitude": 6.40305, "altitude": 1123.0, "vario": 1.6954411594 }, { "time": "2022-06-06T10:30:33.000Z", "latitude": 60.639, "longitude": 6.4030666667, "altitude": 1125.0, "vario": 1.5341387486 }, { "time": "2022-06-06T10:30:34.000Z", "latitude": 60.63895, "longitude": 6.4031333333, "altitude": 1125.0, "vario": 1.3983991156 }, { "time": "2022-06-06T10:30:35.000Z", "latitude": 60.6389333333, "longitude": 6.4032333333, "altitude": 1125.0, "vario": 1.2987392293 }, { "time": "2022-06-06T10:30:36.000Z", "latitude": 60.63895, "longitude": 6.4033666667, "altitude": 1125.0, "vario": 1.242675845 }, { "time": "2022-06-06T10:30:37.000Z", "latitude": 60.639, "longitude": 6.4035, "altitude": 1125.0, "vario": 1.2338258593 }, { "time": "2022-06-06T10:30:38.000Z", "latitude": 60.6390666667, "longitude": 6.4036166667, "altitude": 1125.0, "vario": 1.2715120719 }, { "time": "2022-06-06T10:30:39.000Z", "latitude": 60.6391333333, "longitude": 6.4036833333, "altitude": 1126.0, "vario": 1.3508752446 }, { "time": "2022-06-06T10:30:40.000Z", "latitude": 60.6392166667, "longitude": 6.4036833333, "altitude": 1127.0, "vario": 1.4633937343 }, { "time": "2022-06-06T10:30:41.000Z", "latitude": 60.6392833333, "longitude": 6.40365, "altitude": 1128.0, "vario": 1.5977217997 }, { "time": "2022-06-06T10:30:42.000Z", "latitude": 60.63935, "longitude": 6.4035166667, "altitude": 1130.0, "vario": 1.7408102844 }, { "time": "2022-06-06T10:30:43.000Z", "latitude": 60.6394166667, "longitude": 6.4033333333, "altitude": 1132.0, "vario": 1.8790058825 }, { "time": "2022-06-06T10:30:44.000Z", "latitude": 60.63945, "longitude": 6.40315, "altitude": 1134.0, "vario": 1.9992354842 }, { "time": "2022-06-06T10:30:45.000Z", "latitude": 60.6394833333, "longitude": 6.40295, "altitude": 1137.0, "vario": 2.0900510605 }, { "time": "2022-06-06T10:30:46.000Z", "latitude": 60.6395, "longitude": 6.4027666667, "altitude": 1140.0, "vario": 2.142592466 }, { "time": "2022-06-06T10:30:47.000Z", "latitude": 60.6395, "longitude": 6.4025666667, "altitude": 1144.0, "vario": 2.1513539342 }, { "time": "2022-06-06T10:30:48.000Z", "latitude": 60.6395, "longitude": 6.4023666667, "altitude": 1146.0, "vario": 2.1147513009 }, { "time": "2022-06-06T10:30:49.000Z", "latitude": 60.6394666667, "longitude": 6.4021833333, "altitude": 1149.0, "vario": 2.0353923989 }, { "time": "2022-06-06T10:30:50.000Z", "latitude": 60.6394166667, "longitude": 6.4020333333, "altitude": 1152.0, "vario": 1.9199399544 }, { "time": "2022-06-06T10:30:51.000Z", "latitude": 60.63935, "longitude": 6.4019166667, "altitude": 1155.0, "vario": 1.7786375902 }, { "time": "2022-06-06T10:30:52.000Z", "latitude": 60.6392666667, "longitude": 6.4018333333, "altitude": 1157.0, "vario": 1.6243765915 }, { "time": "2022-06-06T10:30:53.000Z", "latitude": 60.6392, "longitude": 6.40185, "altitude": 1159.0, "vario": 1.4713765382 }, { "time": "2022-06-06T10:30:54.000Z", "latitude": 60.6391666667, "longitude": 6.4019166667, "altitude": 1160.0, "vario": 1.3337629346 }, { "time": "2022-06-06T10:30:55.000Z", "latitude": 60.63915, "longitude": 6.4020333333, "altitude": 1159.0, "vario": 1.2240431373 }, { "time": "2022-06-06T10:30:56.000Z", "latitude": 60.6391833333, "longitude": 6.4021666667, "altitude": 1159.0, "vario": 1.151848773 }, { "time": "2022-06-06T10:30:57.000Z", "latitude": 60.6392166667, "longitude": 6.4022666667, "altitude": 1158.0, "vario": 1.1231344402 }, { "time": "2022-06-06T10:30:58.000Z", "latitude": 60.6392833333, "longitude": 6.4023333333, "altitude": 1159.0, "vario": 1.1398436056 }, { "time": "2022-06-06T10:30:59.000Z", "latitude": 60.63935, "longitude": 6.4023833333, "altitude": 1159.0, "vario": 1.2001029633 }, { "time": "2022-06-06T10:31:00.000Z", "latitude": 60.6394333333, "longitude": 6.4024333333, "altitude": 1161.0, "vario": 1.2988794039 }, { "time": "2022-06-06T10:31:01.000Z", "latitude": 60.6395, "longitude": 6.40245, "altitude": 1162.0, "vario": 1.428865659 }, { "time": "2022-06-06T10:31:02.000Z", "latitude": 60.6395833333, "longitude": 6.4025, "altitude": 1163.0, "vario": 1.581338965 }, { "time": "2022-06-06T10:31:03.000Z", "latitude": 60.6396833333, "longitude": 6.40255, "altitude": 1165.0, "vario": 1.7470568534 }, { "time": "2022-06-06T10:31:04.000Z", "latitude": 60.6397833333, "longitude": 6.4026, "altitude": 1166.0, "vario": 1.9169263645 }, { "time": "2022-06-06T10:31:05.000Z", "latitude": 60.63985, "longitude": 6.4026666667, "altitude": 1169.0, "vario": 2.0824401914 }, { "time": "2022-06-06T10:31:06.000Z", "latitude": 60.6399, "longitude": 6.4028, "altitude": 1171.0, "vario": 2.2360103216 }, { "time": "2022-06-06T10:31:07.000Z", "latitude": 60.6399, "longitude": 6.40295, "altitude": 1174.0, "vario": 2.3711414481 }, { "time": "2022-06-06T10:31:08.000Z", "latitude": 60.6398833333, "longitude": 6.4031166667, "altitude": 1176.0, "vario": 2.4825655178 }, { "time": "2022-06-06T10:31:09.000Z", "latitude": 60.63985, "longitude": 6.4032666667, "altitude": 1180.0, "vario": 2.5663094529 }, { "time": "2022-06-06T10:31:10.000Z", "latitude": 60.6397833333, "longitude": 6.4033333333, "altitude": 1183.0, "vario": 2.6197498524 }, { "time": "2022-06-06T10:31:11.000Z", "latitude": 60.6397166667, "longitude": 6.4032833333, "altitude": 1186.0, "vario": 2.6416278026 }, { "time": "2022-06-06T10:31:12.000Z", "latitude": 60.63965, "longitude": 6.4031333333, "altitude": 1189.0, "vario": 2.6319055631 }, { "time": "2022-06-06T10:31:13.000Z", "latitude": 60.6396333333, "longitude": 6.40295, "altitude": 1193.0, "vario": 2.5916599964 }, { "time": "2022-06-06T10:31:14.000Z", "latitude": 60.6396333333, "longitude": 6.4027333333, "altitude": 1195.0, "vario": 2.5229772138 }, { "time": "2022-06-06T10:31:15.000Z", "latitude": 60.6397, "longitude": 6.40255, "altitude": 1198.0, "vario": 2.4288135741 }, { "time": "2022-06-06T10:31:16.000Z", "latitude": 60.6397666667, "longitude": 6.4023666667, "altitude": 1200.0, "vario": 2.3129030267 }, { "time": "2022-06-06T10:31:17.000Z", "latitude": 60.6398666667, "longitude": 6.4022166667, "altitude": 1203.0, "vario": 2.1798411684 }, { "time": "2022-06-06T10:31:18.000Z", "latitude": 60.6399666667, "longitude": 6.4021333333, "altitude": 1205.0, "vario": 2.0351294303 }, { "time": "2022-06-06T10:31:19.000Z", "latitude": 60.6400666667, "longitude": 6.4021166667, "altitude": 1208.0, "vario": 1.8852232822 }, { "time": "2022-06-06T10:31:20.000Z", "latitude": 60.6401666667, "longitude": 6.4021666667, "altitude": 1209.0, "vario": 1.7374593564 }, { "time": "2022-06-06T10:31:21.000Z", "latitude": 60.6402333333, "longitude": 6.40225, "altitude": 1211.0, "vario": 1.5997998331 }, { "time": "2022-06-06T10:31:22.000Z", "latitude": 60.6402833333, "longitude": 6.4023666667, "altitude": 1213.0, "vario": 1.4804096784 }, { "time": "2022-06-06T10:31:23.000Z", "latitude": 60.6403166667, "longitude": 6.4025, "altitude": 1214.0, "vario": 1.3869262682 }, { "time": "2022-06-06T10:31:24.000Z", "latitude": 60.6403166667, "longitude": 6.4026666667, "altitude": 1214.0, "vario": 1.32576172 }, { "time": "2022-06-06T10:31:25.000Z", "latitude": 60.6403, "longitude": 6.4028166667, "altitude": 1214.0, "vario": 1.3013328976 }, { "time": "2022-06-06T10:31:26.000Z", "latitude": 60.64025, "longitude": 6.40295, "altitude": 1214.0, "vario": 1.3154826797 }, { "time": "2022-06-06T10:31:27.000Z", "latitude": 60.6401833333, "longitude": 6.4030166667, "altitude": 1215.0, "vario": 1.3671932851 }, { "time": "2022-06-06T10:31:28.000Z", "latitude": 60.6401, "longitude": 6.4030166667, "altitude": 1216.0, "vario": 1.452576265 }, { "time": "2022-06-06T10:31:29.000Z", "latitude": 60.6400333333, "longitude": 6.40295, "altitude": 1217.0, "vario": 1.5651924156 }, { "time": "2022-06-06T10:31:30.000Z", "latitude": 60.6399666667, "longitude": 6.4028166667, "altitude": 1218.0, "vario": 1.6966760731 }, { "time": "2022-06-06T10:31:31.000Z", "latitude": 60.6399333333, "longitude": 6.40265, "altitude": 1220.0, "vario": 1.8374894816 }, { "time": "2022-06-06T10:31:32.000Z", "latitude": 60.6399166667, "longitude": 6.4024833333, "altitude": 1223.0, "vario": 1.9775998172 }, { "time": "2022-06-06T10:31:33.000Z", "latitude": 60.6399166667, "longitude": 6.4023, "altitude": 1225.0, "vario": 2.1072349295 }, { "time": "2022-06-06T10:31:34.000Z", "latitude": 60.6399333333, "longitude": 6.4021166667, "altitude": 1227.0, "vario": 2.2175467248 }, { "time": "2022-06-06T10:31:35.000Z", "latitude": 60.64, "longitude": 6.40195, "altitude": 1230.0, "vario": 2.3010413279 }, { "time": "2022-06-06T10:31:36.000Z", "latitude": 60.6400666667, "longitude": 6.4018, "altitude": 1233.0, "vario": 2.3520742811 }, { "time": "2022-06-06T10:31:37.000Z", "latitude": 60.64015, "longitude": 6.4017333333, "altitude": 1236.0, "vario": 2.3672288302 }, { "time": "2022-06-06T10:31:38.000Z", "latitude": 60.6402333333, "longitude": 6.4017666667, "altitude": 1239.0, "vario": 2.3455687896 }, { "time": "2022-06-06T10:31:39.000Z", "latitude": 60.6403, "longitude": 6.4018333333, "altitude": 1242.0, "vario": 2.2888561422 }, { "time": "2022-06-06T10:31:40.000Z", "latitude": 60.6403666667, "longitude": 6.4019333333, "altitude": 1245.0, "vario": 2.2015469692 }, { "time": "2022-06-06T10:31:41.000Z", "latitude": 60.6404333333, "longitude": 6.4020166667, "altitude": 1248.0, "vario": 2.0905220052 }, { "time": "2022-06-06T10:31:42.000Z", "latitude": 60.6404833333, "longitude": 6.4021166667, "altitude": 1250.0, "vario": 1.9645667506 }, { "time": "2022-06-06T10:31:43.000Z", "latitude": 60.6405333333, "longitude": 6.4022333333, "altitude": 1253.0, "vario": 1.8336257767 }, { "time": "2022-06-06T10:31:44.000Z", "latitude": 60.6405333333, "longitude": 6.4024166667, "altitude": 1254.0, "vario": 1.7078017856 }, { "time": "2022-06-06T10:31:45.000Z", "latitude": 60.6405, "longitude": 6.4026, "altitude": 1255.0, "vario": 1.5963846316 }, { "time": "2022-06-06T10:31:46.000Z", "latitude": 60.64045, "longitude": 6.40275, "altitude": 1255.0, "vario": 1.5069312846 }, { "time": "2022-06-06T10:31:47.000Z", "latitude": 60.6403666667, "longitude": 6.4028166667, "altitude": 1255.0, "vario": 1.4446184525 }, { "time": "2022-06-06T10:31:48.000Z", "latitude": 60.6403166667, "longitude": 6.4027833333, "altitude": 1256.0, "vario": 1.4118928618 }, { "time": "2022-06-06T10:31:49.000Z", "latitude": 60.6402666667, "longitude": 6.4026833333, "altitude": 1258.0, "vario": 1.4083696362 }, { "time": "2022-06-06T10:31:50.000Z", "latitude": 60.6402166667, "longitude": 6.40255, "altitude": 1259.0, "vario": 1.4309413013 }, { "time": "2022-06-06T10:31:51.000Z", "latitude": 60.6401666667, "longitude": 6.4024, "altitude": 1260.0, "vario": 1.4740354137 }, { "time": "2022-06-06T10:31:52.000Z", "latitude": 60.6401333333, "longitude": 6.4022166667, "altitude": 1262.0, "vario": 1.5299520532 }, { "time": "2022-06-06T10:31:53.000Z", "latitude": 60.6401333333, "longitude": 6.4020166667, "altitude": 1263.0, "vario": 1.5892247582 }, { "time": "2022-06-06T10:31:54.000Z", "latitude": 60.6401666667, "longitude": 6.4018, "altitude": 1264.0, "vario": 1.6410891637 }, { "time": "2022-06-06T10:31:55.000Z", "latitude": 60.6402333333, "longitude": 6.4016, "altitude": 1266.0, "vario": 1.6741442871 }, { "time": "2022-06-06T10:31:56.000Z", "latitude": 60.6403166667, "longitude": 6.4014666667, "altitude": 1267.0, "vario": 1.6773560412 }, { "time": "2022-06-06T10:31:57.000Z", "latitude": 60.6404166667, "longitude": 6.4014, "altitude": 1270.0, "vario": 1.6412541886 }, { "time": "2022-06-06T10:31:58.000Z", "latitude": 60.6405, "longitude": 6.4014, "altitude": 1273.0, "vario": 1.5592220412 }, { "time": "2022-06-06T10:31:59.000Z", "latitude": 60.64055, "longitude": 6.4014, "altitude": 1276.0, "vario": 1.4286431639 }, { "time": "2022-06-06T10:32:00.000Z", "latitude": 60.6406, "longitude": 6.4013833333, "altitude": 1279.0, "vario": 1.2516763649 }, { "time": "2022-06-06T10:32:01.000Z", "latitude": 60.64065, "longitude": 6.4013166667, "altitude": 1282.0, "vario": 1.0353915732 }, { "time": "2022-06-06T10:32:02.000Z", "latitude": 60.6407166667, "longitude": 6.4012666667, "altitude": 1284.0, "vario": 0.7910861862 }, { "time": "2022-06-06T10:32:03.000Z", "latitude": 60.6408166667, "longitude": 6.4012333333, "altitude": 1285.0, "vario": 0.5329699445 }, { "time": "2022-06-06T10:32:04.000Z", "latitude": 60.6409166667, "longitude": 6.4012166667, "altitude": 1284.0, "vario": 0.2763947235 }, { "time": "2022-06-06T10:32:05.000Z", "latitude": 60.6410166667, "longitude": 6.4012333333, "altitude": 1282.0, "vario": 0.0358934204 }];


const wls37 = [
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:20:29Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-20-29.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:21:54Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-21-54.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:23:20Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-23-20.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:24:46Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-24-46.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:26:12Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-26-12.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:27:37Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-27-37.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  { 
    "name": "wls37", 
    "start_time": "2022-06-06T10:29:03Z", 
    "azimuth": 46.14, 
    "latitude": 60.626648, 
    "longitude": 6.380351, 
    "altitude": 226.4, 
    "filename": "radial_vel_wls37_22-06-06_10-29-03.png", 
    "im_width": 1258, 
    "im_height": 1046, 
    "px_to_m": 3.489 / 1.019, 
    "start_offset": 95.274, 
    "start_height": 272.142 
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:30:28Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-30-28.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:31:54Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-31-54.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:33:19Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-33-19.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:34:45Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-34-45.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:36:11Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-36-11.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:37:37Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-37-37.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  },
  {
    "name": "wls37",
    "start_time": "2022-06-06T10:39:03Z",
    "azimuth": 46.14,
    "latitude": 60.626648,
    "longitude": 6.380351,
    "altitude": 226.4,
    "filename": "radial_vel_wls37_22-06-06_10-39-03.png",
    "im_width": 1278,
    "im_height": 1175,
    "px_to_m": 3.489,
    "start_offset": 230.274,
    "start_height": 272.142
  }
];


const wls34 = [
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:20:49Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-20-49.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:22:11Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-22-11.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:23:32Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-23-32.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:24:54Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-24-54.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:26:16Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-26-16.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:27:38Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-27-38.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  { 
    "name": "wls34", 
    "start_time": "2022-06-06T10:28:59Z", 
    "azimuth": 226.2, 
    "latitude": 60.648509, 
    "longitude": 6.426781, 
    "altitude": 163.8, 
    "filename": "radial_vel_wls34_22-06-06_10-28-59.png", 
    "im_width": 1258, 
    "im_height": 1135, 
    "px_to_m": 3.52689 / 1.03709849, 
    "start_offset": 120.51675, 
    "start_height": 222.19406999999998 
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:30:22Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-30-22.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:31:44Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-31-44.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:33:06Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-33-06.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:34:27Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-34-27.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:35:49Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-35-49.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:37:11Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-37-11.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:38:32Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-38-32.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  },
  {
    "name": "wls34",
    "start_time": "2022-06-06T10:39:54Z",
    "azimuth": 226.2,
    "latitude": 60.648509,
    "longitude": 6.426781,
    "altitude": 163.8,
    "filename": "radial_vel_wls34_22-06-06_10-39-54.png",
    "im_width": 1258,
    "im_height": 1163,
    "px_to_m": 3.52689,
    "start_offset": 264.51675,
    "start_height": 222.19406999999998
  }
];


Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNmI4NWRhZS05YzY2LTQ1NmYtYmQwMy0zZmY1N2EzNGI1ZjIiLCJpZCI6MzQ0NzIsImlhdCI6MTYwMDM0NTcxM30.ts9JCT1i27azCt9oix_rMb4hzBhdGBeUdn7tgRHZunU";

const worldTerrain = Cesium.createWorldTerrain({
  requestWaterMask: true,
  requestVertexNormals: true,
});

const viewer = new Cesium.Viewer("cesiumContainer", {
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
const start = Cesium.JulianDate.fromIso8601("2022-06-06T10:20:00Z");
const stop = Cesium.JulianDate.fromIso8601("2022-06-06T10:40:00Z");

viewer.clock.startTime = start.clone();
viewer.clock.stopTime = stop.clone();
viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2022-06-06T10:25:00Z");
viewer.clock.clockRange = Cesium.ClockRange.CLAMPED;
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
  sizeProperty.addSample(time, 10 * dataPoint.vario);
  colorProperty.addSample(time, Cesium.Color.multiplyByScalar(Cesium.Color.RED, dataPoint.vario / 3.0, new Cesium.Color()));
  
  return viewer.entities.add({
          description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height}) Vario: ${dataPoint.vario}`,
          position: position,
          point: { pixelSize: 3 * dataPoint.vario, color: Cesium.Color.multiplyByScalar( Cesium.Color.RED, dataPoint.vario/3.0, new Cesium.Color() ) }
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
        'image': 'http://158.39.77.131/public/test/' + lidar_scan.name + '/' + lidar_scan.filename,
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

viewer.zoomTo(thermal_entities[0]);


const cb = document.querySelector('#thermal');

cb.onclick = function () {
  thermal_entities.forEach( e => {
    e.show = cb.checked;
  });
};

console.log(cb.checked); // false
    

</script>
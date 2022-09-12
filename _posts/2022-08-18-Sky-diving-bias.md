---
layout: post
title: Biased Profiles
category: PG
---

|![CFD]({{'assets/img/imet-voss/plane_corrected.png' | relative_url}} "Corrected flight of a sailplane.")|

The temperature date measured by the sky-diving plane show a very curious characteristics. Since the airplane flies up and down in a short time span, one would expect the measured temperature to be approximately the same on the ascent and on the descent. Unfortunately, the instruments are not perfect and they need time to react to the changing temperature. Since the temperature decreases with altitude, we would expect a slightly warmer measurements during the ascent, and slightly colder measurements during the descent. Looking at the measured data, something unexpected happens at the altitude of 3900 meters and the measured temperature during the descent suddenly surges and gets much warmer than the ascent. 

|![CFD]({{'assets/img/imet-voss/iMet_22-04-22_11-51-01_delta_T.png' | relative_url}} "Corrected flight of a sailplane.")|

We have discovered that this surge in temperature corresponds to increased air speed of the plane and came up with the idea that the air inside the box is getting compressed. The faster the plane goes, the more compression occurs and the higher the temperature bias gets.  
Using the formula for the increased pressure due to drag, and assuming adiabatic heating, allows us to estimate the temperature bias. After subtracting this contribution, the whole profile gets colder, the extremely warm part is negated and the pressure shows the expected behaviour of warmer ascent and colder descent. 
We now need to estimate the relaxation time of the instrument to correct the lag as well. We will also try to confirm the adiabatic heating inside the box using a computational fluid dynamics simulation (CFD). 
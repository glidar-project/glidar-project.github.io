---
layout: category
title: About
---

Atmospheric convection is the engine that powers weather systems around the globe. From local effects such as valley winds and cumulus clouds, to deep towering cumulonimbuses in the tropic fueling cyclons. Every day it transports huge amounts of moisture and energy into atmosphere, yet, we can only guess at its shape and strengt from the clouds it forms. 
<!-- Simulating the convection in compuers is very difficult due to its turbulent behaviour.  -->
But no more! The goal of the gLidar project is to see the thermals!  

Using high end laser equipment (LIDARs) in combination with data collected by sailplanes, hang gliders and paragliders we map out the shape and strength of atmospheric convection.

Understanding atmospheric convection is essential for weather prediction and climate models. Unfortunately, the representation of convection in computers is very difficult due to its multiscale characteristics and turbulent behaviour. 

Luckily, every year thousands of pilots spend hundreds of hours flying in the convective air, trying to beat distance records, or just enjoying the view from a bird's prerspective. With each flight the pilots learn intricate details about finding the invisible streams of air to propell them upwards. 
Using this data the scientists can learn from what each pilot have discovered about the local convective patterns and piece together a complex image of this phenomenon. 

Since the pilots are only small dots in the skies; drifting, raising, and sinking in the turbulent air patterns, only aware of their immediate surroundigns, we combine the flight observation with a state of the art laser measurement system called LIDAR. This LIDAR is a line of sight, remote sensing instrument, that shoots laser beams into the air and detects wind speeds along the beam's direction. Using multiple such instruments, we are able to scan the air where the pilots fly and explain what is happening to the pilot turning a thermal. This data is essential for explaining and utilizing the large tracklog datasets. 

## LIDARs

\#TODO

## PARAGLIDERS

\#TODO


## Atmospheric convection model

Atmospheric convection is associated with rising and sinking air in the lower atmosphere. It is responsible for vertical mixing of the atmosphere and cloud formation. Unfortunately, due to its scale and turbulent behavior, it is impossible for numerical weather prediction models to fully resolve convective processes. Therefore, empirical parametrizations are commonly employed. These depend on many parameters, making them challenging to verify, as an exhaustive parameter space sampling would be beyond reasonable computational capacities. We tackle this complexity by extracting interdependencies between model parameters.

The analysis tool enables a multiparameter investigation of the atmospheric convection model. The model can be manually constrained using anchor points based on measurement data extracted from paragliding flights. The interdependencies between parameters arediscovered by constraining the modeland sampling along parameter-space iso-contours.


![image of a thermal]( {{ '/assets/img/tracing-profiles.png' | relative_url}} "Large example image")

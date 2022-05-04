---
layout: category
title: Model
---



## Atmospheric convection model

Atmospheric convection is associated with rising and sinking air in the lower atmosphere. It is responsible for vertical mixing of the atmosphere and cloud formation. Unfortunately, due to its scale and turbulent behaviour, it is impossible for numerical weather prediction models to fully resolve convective processes. Therefore, empirical parametrizations are commonly employed. These depend on many parameters, making them challenging to verify, as an exhaustive parameter space sampling would be beyond reasonable computational capacities. We tackle this complexity by extracting interdependencies between model parameters.

The analysis tool enables a multiparameter investigation of the atmospheric convection model. The model can be manually constrained using anchor points based on measurement data extracted from paragliding flights. The interdependencies between parameters are discovered by constraining the model and sampling along parameter-space iso-contours.


![image of a thermal]( {{ '/assets/img/tracing-profiles.png' | relative_url}} "Large example image")

You can find the code at our [GitHub](https://github.com/glidar-project/glidar-model).
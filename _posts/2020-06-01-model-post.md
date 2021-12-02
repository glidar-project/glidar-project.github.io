---
layout: post
title: Atmospheric Convection Model
---

![image of a thermal]({{ '/assets/img/tracing-profiles.png' | relative_url }} "Vertical velocity profiles")

Atmospheric convection is associated with rising and sinking air in the lower atmosphere. It is responsible for vertical mixing of the atmosphere and cloud formation. Unfortunately, due to its scale and turbulent behavior, it is impossible for numerical weather prediction models to fully resolve convective processes. Therefore, empirical parametrizations are commonly employed. These depend on many parameters, making them challenging to verify, as an exhaustive parameter space sampling would be beyond reasonable computational capacities. We tackle this complexity by extracting interdependencies between model parameters.

## Parameter space analysis

The analysis tool enables a multiparameter investigation of the atmospheric convection model. The model can be manually constrained using anchor points based on measurement data extracted from paragliding flights. The interdependencies between parameters arediscovered by constraining the modeland sampling along parameter-space iso-contours.

![image of a thermal]({{ '/assets/img/tracing-crop.png' | relative_url }} "Parameter space analysis")

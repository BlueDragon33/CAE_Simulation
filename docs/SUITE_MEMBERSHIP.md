# CAE_Simulation — Engineering Suite Membership

Status: **FOUNDATION-ACTIVE**

CAE_Simulation is the engineering-simulation member of the Blue Dragon Engineering Suite.

Canonical ownership remains inside CAE_Simulation:

- simulation study definition;
- geometry source provenance;
- material/load/fixture/contact intent;
- mesh policy and mesh provenance;
- solver configuration/run evidence;
- result fields and summaries.

It may consume CAD simulation geometry packages and publish simulation-result summaries through the suite interoperability contract. It must not import CAD source code or become the owner of CAD feature history.

Spatial interchange uses explicit millimeter units and a right-handed Z-up frame at suite boundaries. Solver adapters may convert to SI internally but must declare the conversion.

Application Management may coordinate operational policy/device metadata under namespace `CAE-`, but it may not own or mirror private study/result datasets.

No shared-core repository is permitted until at least two real suite consumers prove a stable neutral contract needs extraction.

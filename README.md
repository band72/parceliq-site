# ParcelIQ GIS — static demo

A read-only demo of the ParcelIQ Florida parcel & survey GIS, published with GitHub Pages at
https://band72.github.io/parceliq-site/.

This repository holds only the compiled site (no source code). Parcel data is a snapshot exported
from a local PostgreSQL 16 / PostGIS database: 704 real Duval County parcels and Northeast Florida
PLSS sections. FEMA flood zones and FIRM panels are queried live from FEMA's public NFHL service. Features that
need the ParcelIQ API server (FEMA assessments, LiDAR contours, statewide parcel tiles, document
downloads, exports, accounts) show as unavailable in this demo.

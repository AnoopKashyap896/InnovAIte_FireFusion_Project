/* CAMS Dataset Collection 
Purpose:
Extract CAMS atmospheric composition features for Victoria, Australia

Selected features: 
- cams_aod_550
- cams_pm25

These features are selected because they are available across the full 2018-2022 project period 
in the GEE CAMS dataset

Intended output schema:
- grid_id
- timestamp
- camps_aod_550
- cams_pm25

Notes: 
CAMS has coarser spatial resolution than the FireFusion 5 km grid. 
This script should align CAMS outputs with the same grid_id and timestamp structure used by ERA5-Land dataset
*/

/* To Do:
1. Load Victoria boundary
2. Load or create the shared 5 km grid
3. Load CAMS ImageCollection
4. Select AOD and PM2.5 bands
5. Rename bands to cams_aod_550 and cams_pm25
6. Align timestamps to 12 hour intervals
7. Reduce values by grid cell
8. Export CSV by year or time period
*/

# Output Filename Convention

## Combination Mask Files
Location: `outputs/combinations/`

Format: `bio{0|1}_whs{0|1}_land{1-4}_list{500|1000|1500}_bld{250|500|750|1000|1250}.tif`

### Parameters:
- **bio**: Biodiversity constraint (0=off, 1=on)
  - When on: Excludes Ramsar sites (2km buffer), SPA (2km buffer), SSSI, SAC
  
- **whs**: World Heritage Sites (0=off, 1=on)
  - When on: Excludes all UNESCO World Heritage Sites
  
- **land**: Landscape Protection Level (1-4)
  - 1: No landscape protection
  - 2: National Parks excluded
  - 3: National Parks + AONB excluded
  - 4: National Parks + AONB + Green Belt excluded
  
- **list**: Listed Building setback in meters (500, 1000, 1500)
  - Buffer distance around Grade I, II* (England/Wales) and Category A (Scotland) buildings
  
- **bld**: Building setback in meters (250, 500, 750, 1000, 1250)
  - Buffer distance around all residential buildings (UPRN data)

### Examples:
- `bio0_whs0_land1_list500_bld250.tif` - Most permissive (no hard constraints, no landscape protection, minimum setbacks)
- `bio1_whs1_land4_list1500_bld1250.tif` - Most restrictive (all constraints at maximum levels)

## Output CSV Files

### `outputs/combination_summary.csv`
Summary statistics for each combination:
- combination_id: Unique identifier
- filename: Combination filename (without .tif extension)
- biodiversity, world_heritage: Boolean constraint flags
- landscape_level, listed_buffer_m, building_buffer_m: Soft constraint settings
- valid_cells_raw: Pixel count before parcel filtering
- valid_cells_filtered: Pixel count after removing parcels < 5 hectares
- total_area_m2, total_area_hectares, total_area_km2: Total available area
- total_capacity_gw: Total onshore wind capacity in GW

### `outputs/zone_results/all_combinations_by_zone.csv`
Area breakdown by TNUOS zone for each combination:
- Same constraint columns as summary
- zone_N_ha: Available area in hectares for TNUOS zone N

### `outputs/zone_results/step_reductions_by_zone.csv`
Step-wise capacity reduction tracking for each combination and zone.
**All values in GW (gigawatts) of onshore wind capacity.**

Exclusions applied in order per README:
1. Geotechnical baseline (already applied)
2. Biodiversity (if enabled)
3. World Heritage (if enabled)  
4. Landscape protection
5. Listed buildings
6. Building setback
7. Minimum parcel filter

Columns per zone (N = zone number):
- zone_N_baseline_gw: Capacity after geotechnical constraints (starting point)
- zone_N_reduction_biodiversity_gw: Capacity removed by biodiversity constraint
- zone_N_reduction_world_heritage_gw: Capacity removed by world heritage constraint
- zone_N_reduction_landscape_gw: Capacity removed by landscape protection
- zone_N_reduction_listed_gw: Capacity removed by listed building setback
- zone_N_reduction_building_gw: Capacity removed by building setback
- zone_N_reduction_parcel_filter_gw: Capacity removed by minimum parcel size filter
- zone_N_final_gw: Final available capacity

Note: Reductions are cumulative - each step removes capacity from what remained after 
the previous step. If a constraint is disabled (e.g., biodiversity=False), 
the reduction for that step will be 0.

## Assumptions
- **Power density**: 10 MW/km² (configurable via POWER_DENSITY_MW_PER_KM2 variable)
- All masks are in EPSG:4326 (WGS84) to match the wind speed raster
- Pixel area is approximately 163m x 278m at 54°N latitude
- Minimum parcel size: 50,000 m² (5 hectares)
- Geotechnical constraints (wind speed, slope, airports, roads, waterways, forest, green spaces) are always applied as baseline

import { scaleOrdinal, schemeSet1 } from "d3";
import { REGIONS } from "./config.js";

export const color = scaleOrdinal()
  .domain(REGIONS)
  .range(schemeSet1);

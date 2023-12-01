import * as d3 from "d3";
import { width, height, MIN_VALUE, MAX_VALUE } from "./config.js";

export const size = d3.scaleLinear()
  .domain([MIN_VALUE, MAX_VALUE])
  .range([10, 60]);

export const simulation = d3.forceSimulation()
  .force("center", d3.forceCenter().x(width / 2).y(height / 2))
  .force("charge", d3.forceManyBody().strength(5))
  .force("collide", d3.forceCollide().strength(0.1).radius(d => (size(d.value) + 3)).iterations(3));

export const dragstarted = (event, d) => {
  if (!event.active) simulation.alphaTarget(0.03).restart();
  d.fx = d.x;
  d.fy = d.y;
};

export const dragged = (event, d) => {
  d.fx = event.x;
  d.fy = event.y;
};

export const dragended = (event, d) => {
  if (!event.active) simulation.alphaTarget(0.03);
  d.fx = null;
  d.fy = null;
};

export const dragController = d3.drag()
  .on("start", dragstarted)
  .on("drag", dragged)
  .on("end", dragended);

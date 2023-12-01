import * as d3 from "d3";
import { width, height } from "./modules/config.js";
import { color } from "./modules/palette.js";
import { mouseover, mousemove, mouseleave } from "./modules/tooltip.js";
import { size, simulation, dragController } from "./modules/simulation.js";

const svg = d3.select(".container")
  .append("svg")
  .attr("class", "graph")
  .attr("width", width)
  .attr("height", height)
  .style("background-color", "grey");

let data = await d3.csv("data.csv");
data = data.filter(d => d.value > 10_000_000);

const node = svg.append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", d => size(d.value))
  .attr("cx", width / 2) // () => Math.floor(Math.random() * width))
  .attr("cy", height / 2) // () => Math.floor(Math.random() * height))
  .style("fill", d => color(d.region))
  .style("fill-opacity", 0.8)
  .attr("stroke", "black")
  .style("stroke-width", 3)
  .on("mouseover", mouseover)
  .on("mousemove", mousemove)
  .on("mouseleave", mouseleave)
  .call(dragController);

simulation
  .nodes(data)
  .on("tick", d => {
    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });

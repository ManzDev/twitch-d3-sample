import { select } from "d3";

const Tooltip = select(".tooltip")
  .style("opacity", 0)
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "5px")
  .style("padding", "5px")
  .style("position", "absolute");

export const mouseover = (event, d) => Tooltip.style("opacity", 1);

export const mousemove = (event, d) => Tooltip
  .html(`<u>${d.key}</u><br>${d.value} inhabitants`)
  .style("left", `${event.x / 2 + 20}px`)
  .style("top", `${event.y / 2 - 30}px`);

export const mouseleave = (event, d) => Tooltip.style("opacity", 0);

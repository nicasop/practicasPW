// https://observablehq.com/@d3/seamless-zoomable-map-tiles@226
function _1(md){return(
md`# Seamless Zoomable Map Tiles

This notebook avoids the flickering in [Zoomable Map Tiles](/@d3/zoomable-map-tiles) by adding [low-resolution](/@d3/tile-zoomdelta) tiles under the main tiles. During zoom, these larger tiles may be visible while the new tiles load in lieu of the white background. This technique also mostly fixes the [subpixel gap issue](/d/32027f96a5d4aa89).

The marginal cost of the low-resolution tiles is negligible for a zoom delta less than -2; for -1 it is about a quarter the cost of 0. The deltas are defined below; -100 forces the use of the *z*=0 “world” tile. Try editing to see the effect of different deltas.`
)}

function _showlayers(html)
{
  const form = html`<form>
  <label><input type=checkbox name=i> Show low-resolution tiles</label>
</form>`;
  form.i.onchange = () => {
    form.value = form.i.checked;
    form.dispatchEvent(new CustomEvent("input"));
  };
  form.value = form.i.checked;
  return form;
}


function _deltas(){return(
[-100, -4, -1, 0]
)}

function _map(d3,width,height,deltas,showlayers,$0,url)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  const tile = d3.tile()
      .extent([[0, 0], [width, height]])
      .tileSize(512)
      .clampX(false);

  const zoom = d3.zoom()
      .scaleExtent([1 << 8, 1 << 22])
      .extent([[0, 0], [width, height]])
      .on("zoom", (event) => zoomed(event.transform));

  const levels = svg.append("g")
      .attr("pointer-events", "none")
    .selectAll("g")
    .data(deltas)
    .join("g")
      .style("opacity", showlayers ? 0.3 : null);

  svg
      .call(zoom)
      .call(zoom.transform, $0.value);

  function zoomed(transform) {
    $0.value = transform;

    levels.each(function(delta) {
      const tiles = tile.zoomDelta(delta)(transform);

      d3.select(this)
        .selectAll("image")
        .data(tiles, d => d)
        .join("image")
          .attr("xlink:href", d => url(...d3.tileWrap(d)))
          .attr("x", ([x]) => (x + tiles.translate[0]) * tiles.scale)
          .attr("y", ([, y]) => (y + tiles.translate[1]) * tiles.scale)
          .attr("width", tiles.scale)
          .attr("height", tiles.scale);
    });
  }

  return svg.node();
}


function _transform(d3,width,height){return(
d3.zoomIdentity.translate(width >> 1, height >> 1).scale(1 << 12)
)}

function _url(){return(
(x, y, z) => `https://tile.opentopomap.org/${z}/${x}/${y}.png`
)}

function _height(){return(
600
)}

function _d3(require){return(
require("d3@7", "d3-tile@1")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof showlayers")).define("viewof showlayers", ["html"], _showlayers);
  main.variable(observer("showlayers")).define("showlayers", ["Generators", "viewof showlayers"], (G, _) => G.input(_));
  main.variable(observer("deltas")).define("deltas", _deltas);
  main.variable(observer("map")).define("map", ["d3","width","height","deltas","showlayers","mutable transform","url"], _map);
  main.define("initial transform", ["d3","width","height"], _transform);
  main.variable(observer("mutable transform")).define("mutable transform", ["Mutable", "initial transform"], (M, _) => new M(_));
  main.variable(observer("transform")).define("transform", ["mutable transform"], _ => _.generator);
  main.variable(observer("url")).define("url", _url);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}

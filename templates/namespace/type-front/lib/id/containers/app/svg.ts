export const appendSvg = function(elString, parent?: string) {
  var div = document.createElement("div");
  div.innerHTML = elString;
  var svgEl = div.firstChild as SVGElement;
  svgEl.style["display"] = "none";
  const parentEl = document.querySelector(parent || "body");
  if (parentEl) {
    parentEl.appendChild(svgEl);
  }
};

export const getAppendSvgString = function(elString) {
  return `<div style="display: none">${elString}</div>`;
};

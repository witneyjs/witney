import React from "react";

export const svgSprite = function(svg) {
  const innerHtml = { __html: svg };

  return React.memo(function() {
    return (
      <div style={{ display: "none" }} dangerouslySetInnerHTML={innerHtml} />
    );
  });
};

export const SvgIcon = function({ icon, ...rest }) {
  return (
    <svg viewBox="0 0 25 25" {...rest}>
      <use href={"#" + icon} />
    </svg>
  );
};

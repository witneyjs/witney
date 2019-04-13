import fs from "fs";
import path from "path";
import { renderStylesToString } from "emotion-server";
import { renderToString } from "react-dom/server";
import React from "react";
import { frontDistDir, RouteContext } from ".";
import { SsrData } from "common/types";
import _ from "lodash";
const { frontNameSpaceId } = require("./index");
const FrontApp = require(`@lib/${frontNameSpaceId}/containers/app`).App;

export const ssr = function(url, routeContext: RouteContext) {
  let indexHtmlTemplate = fs.readFileSync(
    path.join(frontDistDir, "index.html"),
    { encoding: "utf8" }
  );

  const ssrData: SsrData = {
    routeData: routeContext.frontData,
    url,
    result: {
      appendToBody: [],
      pageFound: true,
      pageMeta: {
        title: "Default title",
        description: "",
        keywords: ""
      }
    }
  };

  indexHtmlTemplate = indexHtmlTemplate.replace(
    "<!-- SSR_YIELD_APP -->",
    renderStylesToString(renderToString(<FrontApp ssr={ssrData} />))
  );

  for (const [key, value] of Object.entries(ssrData.result.pageMeta)) {
    let templateKey = `SSR_PAGE_META_${key.toUpperCase()}`;
    if (key === "title") templateKey = `<!-- ${templateKey} -->`;
    indexHtmlTemplate = indexHtmlTemplate.replace(templateKey, _.escape(value));
  }

  indexHtmlTemplate = indexHtmlTemplate.replace(
    "<!-- SSR_BODY_START -->",
    ssrData.result.appendToBody.join("")
  );

  return {
    pageHtml: indexHtmlTemplate,
    pageFound: ssrData.result.pageFound
  };
};

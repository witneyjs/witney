import { SsrData } from "../../common/types";

export const createUpdate = function() {
  let pageMetaCache;

  return function(pageMeta: SsrData["result"]["pageMeta"]) {
    if (ENV.IS_NODE) {
      return;
    }

    for (const [key, value] of Object.entries(pageMeta)) {
      if (pageMetaCache && pageMetaCache[key] === value) continue;

      if (key === "title") {
        document.title = value;
        continue;
      }

      const el = document.querySelector(`meta[name="${key}"]`);
      if (!el) continue;
      el.setAttribute("content", value);
    }

    pageMetaCache = { ...pageMeta };
  };
};

export type SsrData = {
  routeData;
  routerCallBack?;
  url: string;
  result: {
    appendToBody: string[];
    pageFound: boolean;
    pageMeta: {
      title: string;
      description: string;
      keywords: string;
    };
  };
};

type WindowWithDataLayerProps = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayerProps;

export function pageview(url: string) {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  } else {
    console.log({
      event: "pageview",
      page: url,
    });
  }
}

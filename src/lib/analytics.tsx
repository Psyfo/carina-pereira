declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: 'pageview',
      page: path,
    });
  }
};

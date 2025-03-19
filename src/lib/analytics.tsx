import ReactGA from "react-ga4";

/* eslint-disable @typescript-eslint/no-explicit-any */

const TRACKING_ID = 'G-96K5SJQ89X'; // Replace with your Measurement ID

export const initAnalytics = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (path: any) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

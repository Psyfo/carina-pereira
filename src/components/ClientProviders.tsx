"use client";
import { useEffect } from "react";
import { useTrackPageView } from "@/hooks/useTrackPageView";
import { initAnalytics } from "@/lib/analytics";

export default function ClientProviders() {
  useEffect(() => {
    initAnalytics(); // Initialize Google Analytics
  }, []);

  useTrackPageView(); // Track page views correctly

  return null; // No UI needed
}

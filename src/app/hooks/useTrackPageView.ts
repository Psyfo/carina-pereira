"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

export const useTrackPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Construct the full URL
    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ''
    }`;

    // Track the page view
    trackPageView(url);
  }, [pathname, searchParams]);
};

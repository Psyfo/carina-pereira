'use client';
import { useTrackPageView } from '@/hooks/useTrackPageView';

export default function ClientProviders() {
  useTrackPageView(); // Push route changes to GTM dataLayer

  return null; // No UI needed
}

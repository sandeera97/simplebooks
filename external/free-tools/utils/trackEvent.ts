import { track } from "@/hooks/analytics";

export const trackEvent = (event: string, data?: Record<string, string>) => {
  track(event, data);
};

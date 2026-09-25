import ReactPixel from "react-facebook-pixel";

const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
if (!pixelId) {
  throw new Error("NEXT_PUBLIC_PIXEL_ID environment variable is not set");
}
const advancedMatching = undefined;
const options = {
  autoConfig: false,
  debug: false,
};

export const initPixel = () =>
  ReactPixel.init(pixelId, advancedMatching, options);
export const pageView = () => ReactPixel.pageView();
export const track = (event: string, data?: Record<string, string>) =>
  ReactPixel.trackCustom(event, data);

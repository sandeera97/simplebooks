/* Shared testimonial avatar photos (sourced from the live simplebooks.com site).
   Keyed by the exact display name used in testimonial data across pages.
   Names with no confirmed photo are intentionally absent — callers should fall
   back to the neutral circle rather than showing another person's face. */
export const AVATARS: Record<string, string> = {
  "Travel with Wife": "/images/avatars/travel-with-wife.jpg",
  "Damith Menaka": "/images/avatars/damith-menaka.jpg",
  "NAWRAN": "/images/avatars/nawran.jpg",
  "Ratta": "/images/avatars/ratta.jpg",
  "Chanux Bro": "/images/avatars/chanux-bro.jpg",
  "Jeevan Mendis": "/images/avatars/jeevan-mendis.jpg",
  "Dhanushka": "/images/avatars/dhanushka.jpg",
  "Tom Simpson": "/images/avatars/tom-simpson.jpg",
  "Ahamed Nizar": "/images/avatars/ahamed-nizar.jpg",
  "Kalana Muthumuni": "/images/avatars/kalana-muthumuni.jpg",
  "Sandul Perera": "/images/avatars/sandul-perera.jpg",
  "Sarath Senanayake": "/images/avatars/sarath-senanayake.jpg",
  "Bhanuka Harischandra": "/images/avatars/bhanuka-harischandra.jpg",
};

/** Returns the avatar path for a testimonial name, or undefined if none is known. */
export function avatarFor(name: string): string | undefined {
  return AVATARS[name.trim()];
}

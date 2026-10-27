/**
 * Brand and UI icons.
 *
 * The footer used to render its social links as the letters "f", "IG", "WA"
 * and a "▶" character, which read as text rather than icons. These are real
 * paths, sized by font-size so they inherit from whatever contains them.
 */

type IconProps = { className?: string; size?: number };

function Svg({ size = 16, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const FacebookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.5 8.5h2.2V5.6c-.4-.05-1.7-.17-3.2-.17-3.2 0-5.3 1.9-5.3 5.4v2.4H5.6v3.3h2.6V25h3.5v-8.5h2.6l.4-3.3h-3V11.2c0-1 .3-1.7 1.8-1.7Z" transform="translate(0 -2)" />
  </Svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.98c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.6-.07-4.74-.07Zm0 3.37a5.05 5.05 0 1 1 0 10.1 5.05 5.05 0 0 1 0-10.1Zm0 8.33a3.28 3.28 0 1 0 0-6.56 3.28 3.28 0 0 0 0 6.56Zm6.43-8.53a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0Z" />
  </Svg>
);

export const YouTubeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M23.5 6.9a3 3 0 0 0-2.1-2.1C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.4.5A3 3 0 0 0 .5 6.9C0 8.8 0 12 0 12s0 3.2.5 5.1a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.1.5-5.1s0-3.2-.5-5.1ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </Svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.76 9.76 0 0 1-4.97-1.36l-.36-.21-3.7.97.99-3.6-.23-.37A9.74 9.74 0 1 1 12.05 21.8ZM20.52 3.49A11.78 11.78 0 0 0 1.99 17.7L.3 23.88l6.33-1.66a11.77 11.77 0 0 0 5.63 1.43h.01a11.78 11.78 0 0 0 8.25-20.16Z" />
  </Svg>
);

/** Replaces the 🎉 emoji on form success states. */
export const SuccessIcon = ({ size = 44 }: IconProps) => (
  /* Tailwind's preflight sets svg { display: block }, so the text-align:center
     on every "Thank you" card has no effect on it and the tick sits hard left.
     Centred here rather than in each of the three cards, which are styled by
     two different systems and would otherwise each need their own rule. */
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
    focusable="false"
    style={{ display: "block", marginInline: "auto" }}
  >
    <circle cx="24" cy="24" r="23" fill="currentColor" opacity="0.1" />
    <circle cx="24" cy="24" r="16" fill="currentColor" />
    <path d="M17 24.5l4.8 4.8L31.5 19.5" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

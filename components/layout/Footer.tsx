import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sim_bk_footer">
      <div className="sim_bk_container">
        <Link href="/" className="sim_bk_footer_logo">simplebooks</Link>

        <div className="sim_bk_ft_grid">
          {/* Description + socials */}
          <div>
            <p className="sim_bk_footer_desc">
              simplebooks helps small business owners and entrepreneurs grow their
              businesses through financial consulting, registrations and legal
              services. Backed by local knowledge through our offices in Sri Lanka,
              Bangladesh and India, the team of consultants are ready to help you
              every step of the way
            </p>
            <div className="sim_bk_socials">
              <a href="https://www.facebook.com/teamsimplebooks/" target="_blank" rel="noopener noreferrer" className="sim_bk_social_ico" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/teamsimplebooks/" target="_blank" rel="noopener noreferrer" className="sim_bk_social_ico" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f1235" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#0f1235" stroke="none" />
                </svg>
              </a>
              <a href="https://www.youtube.com/c/Simplebooks" target="_blank" rel="noopener noreferrer" className="sim_bk_social_ico" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f1235">
                  <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.5 31 31 0 0 0-.4-4.5zM9.8 15.3V8.7l5.7 3.3z" />
                </svg>
              </a>
              <a href="https://whatsapp.com/channel/0029Vb7AGCL5a23w67Qh1U29" target="_blank" rel="noopener noreferrer" className="sim_bk_social_ico" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f1235">
                  <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.1c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.3.6-.6.7-.3 1.1.5.9 1.1 1.5 2 1.9.2.1.4.1.5-.1.2-.2.6-.7.8-.9.1-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.1.1.5-.1 1.1z" />
                </svg>
              </a>
            </div>
            <Link href="/privacy-policy" className="sim_bk_footer_link">
              Privacy Policy &amp; Terms and Conditions
            </Link>
          </div>

          {/* Sri Lanka office */}
          <div className="sim_bk_footer_addr">
            Simplebooks (Pvt) Ltd<br />
            Millennium Tower (Kelly Felder Building),<br />
            2nd Floor, 345 Galle Rd,<br />
            Colombo 00300,<br />
            Sri Lanka.<br />
            0117 555 878
          </div>

          {/* Bangladesh office */}
          <div className="sim_bk_footer_addr">
            REGUS – Dhaka, Crystal Palace,<br />
            House 22, 3rd Floor,<br />
            Crystal Palace Road, NO 140,<br />
            Gulshan Ave, Gulshan-1,<br />
            Dhaka 1212, Bangladesh.<br />
            +880-1312-329255
          </div>
        </div>

        {/* Copyright bar */}
        <div className="sim_bk_copyright">
          <span>© {new Date().getFullYear()} Simplebooks (Pvt) Ltd. All rights reserved.</span>
          <div className="sim_bk_copyright_links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/no-claim-certification">No Claim Certification</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

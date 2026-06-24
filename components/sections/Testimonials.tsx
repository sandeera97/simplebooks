import Link from "next/link";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  { quote: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply the saver.", name: "Damith Menaka", role: "Director, Animspire" },
  { quote: "Honest review. Thanks you simplebooks team for the amazing support on my company registration. Highly recommended this hassle-free service 👍", name: "NAWRAN", role: "Director, Social Media Academy" },
  { quote: "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta" },
  { quote: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chathura", role: "Director" },
  { quote: "They provided exactly what I needed. Very responsive and professional team to work with.", name: "Wickramawardena", role: "Manager" },
  { quote: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, follow-ups and overall knowledge of the field and pricing. Clearly an industry leader for company secretarial work in Sri Lanka.", name: "Kalana Muthumuni", role: "" },
  { quote: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
  { quote: "It's a superb experience that I got from Simple Books. I got the contract through on time, very good service. Responding via mails for my queries, updating the process etc. everything is good.", name: "Sarath Senanayake", role: "Director" },
  { quote: "I've registered over a dozen companies with simplebooks and would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
];

export default function Testimonials() {
  return (
    <div className="sim_bk_container">
      <div className="sim_bk_tg">
        {testimonials.map((t, i) => (
          <div key={i} className="sim_bk_tcard">
            <p className="sim_bk_tcard_quote">{t.quote}</p>
            <div className="sim_bk_tcard_author">
              <div className="sim_bk_avatar" />
              <div>
                <div className="sim_bk_tcard_name">{t.name}</div>
                {t.role && <div className="sim_bk_tcard_role">{t.role}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sim_bk_view_more">
        <Link href="/srilanka/testimonials" className="sim_bk_btn_dark">View more</Link>
      </div>
    </div>
  );
}

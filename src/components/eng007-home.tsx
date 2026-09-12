import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from "react";
import { ChevronLeft, ChevronRight, MapPin, Music, Music2, Phone, Sparkles, Utensils, Gem, GlassWater, Mic2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const assets = {
  aboutleft: "https://cdn-admin.invitationnation.in/media/eng007/assets/7c4eb5b8-a110-4d39-98aa-a0525259863f_aboutleft.svg",
  aboutright: "https://cdn-admin.invitationnation.in/media/eng007/assets/5e8570e2-9201-45c8-9dda-aaad1cffdffe_aboutright.svg",
  borderlong: "https://cdn-admin.invitationnation.in/media/eng007/assets/69576fd0-9069-45a7-aba3-2c29515ccac3_borderlong.svg",
  bordershort: "https://cdn-admin.invitationnation.in/media/eng007/assets/3dfa7ed1-9eca-44f9-9524-37e84f476a2b_bordershort.svg",
  bottomleft: "https://cdn-admin.invitationnation.in/media/eng007/assets/4c1fe158-9505-4c6e-bd29-ad1bbf808c42_bottomleft.svg",
  bottomright: "https://cdn-admin.invitationnation.in/media/eng007/assets/b65d0fc6-0c3b-4258-be70-e4c09ef5ec13_bottomright.svg",
  brideleaf: "https://cdn-admin.invitationnation.in/media/eng007/assets/85bb055e-6089-40eb-8576-ab74261de8b8_brideleaf.svg",
  brideside: "https://cdn-admin.invitationnation.in/media/eng007/assets/cd553f96-da13-4f61-a3dc-e26a920639b5_brideside.svg",
  countflowerleft: "https://cdn-admin.invitationnation.in/media/eng007/assets/fa949b60-5009-4ae2-88d9-4d618bd00e33_countdown_flowerleft.svg",
  countflowerright: "https://cdn-admin.invitationnation.in/media/eng007/assets/d6c42d02-09d7-4985-8091-2a16f134c961_countdown_flowerright.svg",
  groomleaf: "https://cdn-admin.invitationnation.in/media/eng007/assets/f8c96c73-2fc2-463e-ba43-89c45f631b91_groomleaf.svg",
  groomside: "https://cdn-admin.invitationnation.in/media/eng007/assets/affa1f4c-1740-4c64-a170-b3316f9dcec1_groomside.svg",
  herocouple: "https://cdn-admin.invitationnation.in/media/eng007/assets/229e2db8-1167-4335-91e0-b5a52714f56a_image.webp",
  quotes: "https://cdn-admin.invitationnation.in/media/eng007/assets/732d19d9-8728-4fb2-a7eb-cc21abaa9a88_quotation.svg",
  texture: "https://cdn-admin.invitationnation.in/media/eng007/assets/5d9e7989-b174-46e2-8a96-2afe4e6c23c8_texture.svg",
  topleft: "https://cdn-admin.invitationnation.in/media/eng007/assets/5ba05423-1b46-4cba-93fc-6ab478f23425_topleft.svg",
  topright: "https://cdn-admin.invitationnation.in/media/eng007/assets/bbbdddb2-2092-4fe8-b0ba-ceeb115c26d4_topright.svg",
  wishesbottom: "https://cdn-admin.invitationnation.in/media/eng007/assets/ea3cdcb6-46d8-401c-ae0c-afface019fe8_wishesbottom.svg",
  wishesflower: "https://cdn-admin.invitationnation.in/media/eng007/assets/93f28379-3f05-4b3a-a884-a8047df873c5_wishesflower.svg",
  wishesleft: "https://cdn-admin.invitationnation.in/media/eng007/assets/fd380f7b-a19a-49df-871f-0f099d22c5f8_wishesleft.svg",
  wishesright: "https://cdn-admin.invitationnation.in/media/eng007/assets/70ad2801-0e77-41c9-a507-56b9efb39b7e_wishesright.svg",
  wishestop: "https://cdn-admin.invitationnation.in/media/eng007/assets/c0e60ffa-27e6-403c-aced-928487cfcea8_wishestop.svg",
};

const eventDate = new Date("2026-09-14T10:00:00");
const mapUrl = "https://www.google.com/maps?q=royal+orchid+convention+center&ll=12.9716,77.5946&z=17";
const wishes = [
  { message: "May your life together be filled with endless love, laughter, and beautiful memories. Congratulations on your engagement!", author: "Priya & Rohan" },
  { message: "Wishing you both a lifetime of happiness as you begin this wonderful new chapter together.", author: "The Sharma Family" },
  { message: "Two beautiful souls, one beautiful promise. May every day bring you closer and make your love stronger.", author: "Meera" },
];
const schedule = [
  { name: "Ring Ceremony", time: "10:30 AM", Icon: Gem },
  { name: "Champagne Toast", time: "11:30 AM", Icon: GlassWater },
  { name: "Gala Lunch", time: "01:00 PM", Icon: Utensils },
  { name: "Live Music", time: "02:30 PM", Icon: Mic2 },
];

function useCountdown() {
  const calculate = () => {
    const distance = Math.max(0, eventDate.getTime() - Date.now());
    return {
      days: Math.floor(distance / 86_400_000),
      hrs: Math.floor((distance / 3_600_000) % 24),
      mins: Math.floor((distance / 60_000) % 60),
      secs: Math.floor((distance / 1_000) % 60),
    };
  };
  const [time, setTime] = useState(calculate);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculate()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

export function Eng007Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [wishIndex, setWishIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const countdown = useCountdown();
  const currentWish = wishes[wishIndex] ?? { message: "Wishing you a lifetime of happiness.", author: "With love" };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const hero = gsap.timeline({ defaults: { duration: 1.8, ease: "power2.out" } });
      hero.from(".hero-br", { scale: 0, opacity: 0, transformOrigin: "right bottom" }, 0)
        .from(".hero-tl", { scale: 0, opacity: 0, transformOrigin: "left top" }, 0)
        .from(".hero-tr", { scale: 0, opacity: 0, transformOrigin: "right top" }, 0)
        .from(".hero-bl", { scale: 0, opacity: 0, transformOrigin: "left bottom" }, 0)
        .from(".hero-copy > div", { scale: 0, opacity: 0, stagger: 0.1 }, 0)
        .from(".hero-couple", { y: 400, scale: 0.9, opacity: 0 }, 0);

      const timeline = (trigger: string) => gsap.timeline({ scrollTrigger: { trigger, start: "top 78%", toggleActions: "play none none reverse" } });
      timeline(".countdown-section")
        .fromTo(".countdown-section", { "--border-inset": "45%", opacity: 0 }, { "--border-inset": "25px", opacity: 1, duration: 2, ease: "expo.out" })
        .from(".count-flower-left", { scale: 0, rotation: -45, filter: "blur(10px)", opacity: 0, duration: 2.5 }, "-=1.5")
        .from(".count-flower-right", { scale: 0, rotation: 45, filter: "blur(10px)", opacity: 0, duration: 2.5 }, "-=2.5")
        .from(".count-title", { filter: "blur(12px)", opacity: 0, y: 20, duration: 2 }, "-=1.5")
        .from(".count-grid", { opacity: 0, y: 40, duration: 2 }, "-=1.2");
      gsap.from(".about-left-decor", { xPercent: -50, opacity: 0, duration: 2.5, ease: "power2.out", scrollTrigger: { trigger: ".about-section", start: "top 80%" } });
      gsap.from(".about-right-decor", { xPercent: 50, opacity: 0, duration: 2.5, ease: "power2.out", scrollTrigger: { trigger: ".about-section", start: "top 80%" } });
      timeline(".bride-row").from(".bride-photo", { x: -30, opacity: 0, duration: 1.8 }).from(".bride-info > *", { y: 20, opacity: 0, stagger: 0.2, duration: 1.5 }, "-=1.2");
      timeline(".groom-row").from(".groom-photo", { x: 30, opacity: 0, duration: 1.8 }).from(".groom-info > *", { y: 20, opacity: 0, stagger: 0.2, duration: 1.5 }, "-=1.2");
      timeline(".wishes-section").from(".wish-side", { scaleY: 0.8, opacity: 0, duration: 1.8 }).from(".wish-horizontal", { scaleX: 0.8, opacity: 0, duration: 1.8 }, "-=1.4").from(".wishes-inner", { y: 40, opacity: 0, duration: 1.5 }, "-=1");
      timeline(".send-section").from(".send-copy > *", { y: 30, opacity: 0, stagger: 0.2, filter: "blur(10px)", duration: 1.8 }).from(".send-box", { scale: 0.85, opacity: 0, filter: "blur(5px)", duration: 2.2 }, "-=1.4");
      timeline(".schedule-section").from(".schedule-title", { opacity: 0, filter: "blur(15px)", duration: 1.5 }).from(".schedule-card", { opacity: 0, filter: "blur(12px)", stagger: 0.15, duration: 1.4 }, "-=0.7");
      timeline(".location-section").from(".location-title", { opacity: 0, filter: "blur(15px)", duration: 1.5 }).from(".map-wrap", { opacity: 0, filter: "blur(10px)", scale: 0.98, duration: 1.4 }).from(".location-card", { opacity: 0, filter: "blur(10px)", duration: 1.4 }, "-=1");
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const submitWish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="eng007-page" ref={pageRef}>
      <nav className="eng007-nav" aria-label="Primary navigation">
        <a href="#home" className="active">Home</a><a href="#about">About</a><a href="#gallery">Gallery</a>
      </nav>
      <div className="floating-actions">
        <a className="round-action" href="tel:+911234567890" aria-label="Call"><Phone size={22} /></a>
        <button className="round-action" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Turn music on" : "Mute music"}>{muted ? <Music size={22} /> : <Music2 size={22} />}</button>
      </div>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-tilt" />
          <img className="corner hero-tl" src={assets.topleft} alt="" /><img className="corner hero-tr" src={assets.topright} alt="" />
          <img className="corner hero-bl" src={assets.bottomleft} alt="" /><img className="corner hero-br" src={assets.bottomright} alt="" />
          <div className="eng-container hero-inner">
            <div className="hero-copy">
              <div><p className="accent-copy">Save the date</p><h1><span>Ananya Sharma</span><span>&amp;</span><span>Aarav Verma</span></h1></div>
              <div><p className="accent-copy">are getting engaged on</p><p className="hero-date">Monday | 14th Sep | 2026</p></div>
              <div><p className="venue-name">Royal Orchid Convention Center</p><button className="script-button" onClick={() => window.open(mapUrl, "_blank")}>Open in Maps</button></div>
            </div>
            <div className="hero-visual"><img className="hero-couple" src={assets.herocouple} alt="Illustration of Ananya and Aarav" /></div>
          </div>
        </section>

        <section className="countdown-section">
          <img className="count-flower-left" src={assets.countflowerleft} alt="" /><img className="count-flower-right" src={assets.countflowerright} alt="" />
          <div className="eng-container countdown-inner"><h2 className="count-title">Let the countdown begin</h2><div className="count-grid">
            {Object.entries(countdown).map(([label, value]) => <div className="time-box" key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>)}
          </div></div>
        </section>

        <section id="about" className="about-section">
          <img className="section-texture" src={assets.texture} alt="" /><img className="about-left-decor" src={assets.aboutleft} alt="" /><img className="about-right-decor" src={assets.aboutright} alt="" />
          <div className="eng-container about-inner">
            <article className="couple-row bride-row"><div className="portrait bride-photo"><img className="photo" src="https://images.unsplash.com/photo-1542764824-4cdbd6c92dbe?auto=format&fit=crop&w=600&q=80" alt="Ananya Sharma" /><img className="portrait-sprig bride-sprig" src={assets.brideside} alt="" /></div><div className="couple-info bride-info"><h2>Ananya Sharma</h2><h3>D/o Mr. &amp; Mrs. Sharma</h3><p>A graceful, compassionate soul with a radiant smile, deeply rooted in family values while embracing new dreams.</p><img src={assets.brideleaf} alt="" /></div></article>
            <article className="couple-row groom-row"><div className="couple-info groom-info"><h2>Aarav Verma</h2><h3>S/o Mr. &amp; Mrs. Verma</h3><p>A warm-hearted and ambitious individual known for integrity, kindness, and a calm, reassuring presence.</p><img src={assets.groomleaf} alt="" /></div><div className="portrait groom-photo"><img className="photo" src="https://images.unsplash.com/photo-1541346160430-93fcee38d521?auto=format&fit=crop&w=600&q=80" alt="Aarav Verma" /><img className="portrait-sprig groom-sprig" src={assets.groomside} alt="" /></div></article>
          </div>
        </section>

        <section id="gallery" className="wishes-section">
          <img className="wish-side wish-left" src={assets.wishesleft} alt="" /><img className="wish-side wish-right" src={assets.wishesright} alt="" /><img className="wish-horizontal wish-top" src={assets.wishestop} alt="" /><img className="wish-horizontal wish-bottom" src={assets.wishesbottom} alt="" />
          <div className="wishes-inner"><img className="quote-mark" src={assets.quotes} alt="" /><h2>Wishes For The Couple</h2><div className="wish-copy"><p>{currentWish.message}</p><span>— {currentWish.author}</span></div><div className="wish-controls"><button onClick={() => setWishIndex((wishIndex + wishes.length - 1) % wishes.length)} aria-label="Previous wish"><ChevronLeft /></button><span>{wishIndex + 1}/{wishes.length}</span><button onClick={() => setWishIndex((wishIndex + 1) % wishes.length)} aria-label="Next wish"><ChevronRight /></button></div><img className="wishes-flower" src={assets.wishesflower} alt="" /></div>
        </section>

        <section className="send-section"><img className="section-texture" src={assets.texture} alt="" /><div className="eng-container send-inner"><div className="send-copy"><img src={assets.quotes} alt="" /><h2>Send your wishes</h2><p>“Leave your blessings and spread a little more love”</p></div><div className="send-box"><img className="form-top" src={assets.bordershort} alt="" /><img className="form-bottom" src={assets.bordershort} alt="" /><img className="form-left" src={assets.borderlong} alt="" /><img className="form-right" src={assets.borderlong} alt="" /><form onSubmit={submitWish}>{submitted ? <div className="thank-you"><Sparkles /><h3>Thank you!</h3><p>Your warm wishes mean so much.</p></div> : <><input aria-label="Your Name" placeholder="Your Name" required /><div className="textarea-wrap"><textarea aria-label="Your Wishes" placeholder="Your Wishes" required /><button type="button" aria-label="Help me write a wish"><Sparkles /></button></div><button className="submit-wish" type="submit">Submit</button></>}</form><img className="form-flower" src={assets.wishesflower} alt="" /></div></div></section>

        <section className="schedule-section"><div className="eng-container"><header className="schedule-header"><img src={assets.groomleaf} alt="" /><h2 className="schedule-title">Engagement celebration begins</h2><img src={assets.brideleaf} alt="" /></header><div className="schedule-grid">{schedule.map(({ name, time, Icon }) => <article className="schedule-card" key={name}><img src={assets.countflowerleft} alt="" /><div className="schedule-icon"><Icon size={38} /></div><h3>{name}</h3><p>{time}</p><img className="card-flower" src={assets.wishesflower} alt="" /></article>)}</div><div className="schedule-dots"><span className="active" /><span /><span /></div></div></section>

        <section className="location-section"><img className="location-decor loc-tl" src={assets.topleft} alt="" /><img className="location-decor loc-tr" src={assets.topleft} alt="" /><img className="location-decor loc-bl" src={assets.bottomright} alt="" /><img className="location-decor loc-br" src={assets.bottomright} alt="" /><div className="eng-container"><h2 className="location-title">Location</h2><div className="location-grid"><div className="map-wrap"><iframe title="Royal Orchid Convention Center map" src="https://www.google.com/maps?q=Royal%20Orchid%20Convention%20Center&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><article className="location-card"><p className="location-date">14th September, 2026</p><h3>Royal Orchid<br />Convention Center</h3><p>Royal Palace, HAL 2nd Stage, Bengaluru, Karnataka 560008</p><button className="map-pill" onClick={() => window.open(mapUrl, "_blank")}><MapPin /> <span>Open in maps</span></button></article></div></div></section>
      </main>
    </div>
  );
}
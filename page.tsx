'use client';

import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Facebook, Instagram, Leaf, MapPin, Menu, MessageCircle, Phone, ShoppingBag, Sprout, X, Youtube } from 'lucide-react';

const WA = 'https://wa.me/message/6OH3USK7QAHVD1';
const MEESHO = 'https://www.meesho.com/GreenHeavenNurseryNagaon?_ms=3.0.2';
const PHONE = 'tel:+919954277057';
const INSTAGRAM = 'https://instagram.com/green.heaven_nursery';
const FACEBOOK = 'https://www.facebook.com/';

const categories = [
  { title: 'Flower Plants', text: 'Bring colour, fragrance and seasonal beauty to your space.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Fruit Plants', text: 'Grow fresh, productive plants for home gardens and farms.', image: 'https://images.unsplash.com/photo-1599685315640-3c7c2f6d2d7f?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Indoor Plants', text: 'Easy greenery for desks, rooms, balconies and modern interiors.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Ornamental Plants', text: 'Statement foliage and beautiful plants for elevated landscapes.', image: 'https://images.unsplash.com/photo-1498814117408-e396f5507073?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Medicinal Plants', text: 'Explore useful traditional greenery for a home garden.', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Vegetable Plants', text: 'Start a productive kitchen garden with healthy seedlings.', image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1000&q=85' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  return (
    <main>
      <div className="topbar"><span>Fresh greenery, grown for Assam.</span><a href={WA}>Chat on WhatsApp <ArrowUpRight size={14}/></a></div>
      <nav className="nav shell">
        <a className="brand" href="#home"><span className="brandmark"><Leaf size={22}/></span><span><strong>Green Heaven</strong><small>Nursery</small></span></a>
        <div className={`links ${open ? 'show' : ''}`}>
          <a href="#plants" onClick={() => setOpen(false)}>Plants</a><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#shop" onClick={() => setOpen(false)}>Shop Online</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="navcta" href={WA}>WhatsApp <MessageCircle size={16}/></a>
        </div>
        <button className="menubtn" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </nav>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> KAWAI MARI · NAGAON · ASSAM</div>
          <h1>Grow a little<br/><em>heaven.</em></h1>
          <p className="lead">Beautiful plants for homes, gardens and farms — carefully selected to bring more life, shade and colour to everyday spaces.</p>
          <div className="actions"><a className="button primary" href="#plants">Explore plants <ArrowUpRight size={18}/></a><a className="button ghost" href={WA}><MessageCircle size={18}/> WhatsApp us</a></div>
          <div className="trust"><div><strong>6+</strong><span>plant categories</span></div><i></i><div><strong>Local</strong><span>Nagaon, Assam</span></div><i></i><div><strong>Online</strong><span>Meesho store</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image"></div><div className="float-card"><Sprout size={18}/><div><b>Rooted in nature</b><span>Fresh greenery, local care.</span></div></div><div className="circle-word">GREEN · GROW · GLOW ·</div>
        </div>
      </section>

      <section id="plants" className="section shell">
        <div className="section-head"><div><span className="eyebrow">OUR COLLECTION</span><h2>Find your kind of green.</h2></div><p>From flowering favourites to productive vegetable plants, discover greenery for every corner of life.</p></div>
        <div className="grid">{categories.map((c, i) => <article className={`plant-card card-${i}`} key={c.title}><div className="card-image" style={{backgroundImage:`url(${c.image})`}}></div><div className="card-body"><span>0{i+1}</span><h3>{c.title}</h3><p>{c.text}</p><a href={WA}>Enquire <ArrowUpRight size={15}/></a></div></article>)}</div>
      </section>

      <section id="about" className="about-wrap"><div className="about shell"><div className="about-image"></div><div className="about-copy"><span className="eyebrow">GREEN HEAVEN NURSERY</span><h2>More than plants.<br/><em>A greener everyday.</em></h2><p>Based in Kawaimari, Haibargaon, Nagaon, Green Heaven Nursery brings together beautiful and useful plants for homes, gardens, farms and green spaces.</p><p>Whether you are starting your first balcony garden or adding to a growing farm, our collection is designed to make choosing plants simple and enjoyable.</p><div className="signature"><div className="signature-mark">GH</div><div><b>গ্ৰীণ হেভেন নাৰ্চাৰী</b><span>Kawaimari, Haibargaon, Nagaon, Assam</span></div></div></div></div></section>

      <section id="shop" className="shop shell"><div className="shop-card"><div><span className="eyebrow">SHOP ONLINE</span><h2>Your next plant is<br/><em>just a click away.</em></h2><p>Browse Green Heaven Nursery on Meesho and order from wherever you are.</p><a className="button light" href={MEESHO} target="_blank">Visit Meesho Store <ShoppingBag size={17}/></a></div><div className="shop-art"><div className="pot"><div className="plant"><span></span><span></span><span></span></div><div className="pot-body"></div></div></div></div></section>

      <section className="faq shell"><div><span className="eyebrow">QUICK ANSWERS</span><h2>Planning your green space?</h2></div><div className="faq-list">{['What types of plants do you sell?','Can I order online?','Where is Green Heaven Nursery located?'].map((q,i)=><div className="faq-item" key={q}><button onClick={()=>setFaq(faq===i?null:i)}>{q}<ChevronDown className={faq===i?'rot':''} size={18}/></button>{faq===i&&<p>{i===0?'We offer flower, fruit, ornamental, indoor, medicinal and vegetable plants.':i===1?'Yes. You can browse and order through our Meesho shop.':'We are located at Kawaimari, Haibargaon, Nagaon, Assam.'}</p>}</div>)}</div></section>

      <section id="contact" className="contact shell"><div className="contact-copy"><span className="eyebrow">COME SAY HELLO</span><h2>Let’s make your space<br/><em>greener.</em></h2><p>For plant enquiries, availability or online orders, get in touch with Green Heaven Nursery.</p></div><div className="contact-box"><a href={PHONE}><Phone size={19}/><span><small>Call us</small><b>99542 77057</b></span></a><a href={WA}><MessageCircle size={19}/><span><small>WhatsApp</small><b>Chat with us</b></span></a><div><MapPin size={19}/><span><small>Visit us</small><b>Kawaimari, Haibargaon,<br/>Nagaon, Assam</b></span></div></div></section>

      <footer><div className="shell footer-grid"><div><a className="brand footer-brand" href="#home"><span className="brandmark"><Leaf size={22}/></span><span><strong>Green Heaven</strong><small>Nursery</small></span></a><p>Growing greener spaces, one plant at a time.</p></div><div><b>Explore</b><a href="#plants">Plants</a><a href="#about">About us</a><a href="#shop">Shop online</a></div><div><b>Connect</b><a href={INSTAGRAM}><Instagram size={15}/> Instagram</a><a href={FACEBOOK}><Facebook size={15}/> Facebook</a><a href="#"><Youtube size={15}/> Green Heaven Agriculture</a></div><div><b>Visit</b><span>Kawaimari, Haibargaon,<br/>Nagaon, Assam</span><a href={PHONE}>99542 77057</a></div></div><div className="shell copyright"><span>© 2026 Green Heaven Nursery</span><span>Made for a greener Assam.</span></div></footer>
    </main>
  );
}

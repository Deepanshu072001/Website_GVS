import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <h1>GVS</h1>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#focus">Focus</a></li>
          <li><a href="#initiatives">Initiatives</a></li>
          <li><a href="#news">News</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="slider">
          <img src="/images/image-1.jpg" alt="Hero 1" />
          <img src="/images/image-2.jpg" alt="Hero 2" />
        </div>
        <h1>Welcome to GVS – Gopthala Vikas Samiti</h1> 
        <p> <strong>“Aavo Chalo Gaon Ki Or” – Let’s return to our roots and build villages that thrive. </strong> </p>
      </section>

      {/* About Us */}
      <section id="about" className="section">
        <h2>📖 About Us</h2>
        <div className="card blue-card">
          <p>
            GVS is a grassroots NGO focused on empowering rural communities through education,
            sustainable development, and human dignity.
          </p>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section id="focus" className="section">
        <h2>🎯 Our Core Focus Areas</h2>
        <div className="card-grid">
          <div className="card green-card">
            <h3>Child Education</h3>
            <p>We ensure every rural child has access to quality education through learning centers.</p>
          </div>
          <div className="card orange-card">
            <h3>Village Development</h3>
            <p>We uplift villages with clean water, sanitation, and livelihood training projects.</p>
          </div>
          <div className="card pink-card">
            <h3>Migration & Reverse Migration</h3>
            <p>We help families return with dignity through training and employment support.</p>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section id="initiatives" className="section">
        <h2>🚀 Our Key Initiatives</h2>
        <div className="card-grid">
          <div className="card yellow-card">
            <h3>Shiksha Jyoti</h3>
            <p>Community learning centers & educational awareness in rural areas.</p>
          </div>
          <div className="card purple-card">
            <h3>Gaon Udaan</h3>
            <p>Infrastructure upliftment with solar lighting and sanitation projects.</p>
          </div>
          <div className="card teal-card">
            <h3>Ghar Wapsi</h3>
            <p>Support for migrant families to resettle with dignity and jobs.</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section">
        <h2>📰 Latest News</h2>
        <ul className="news-list">
          <li><a href="https://www.newspost.live/gopathalas-villagers-engaged-in-the-rehabilitation-of-villages-evacuated-from-the-migration/" target="_blank" rel="noopener noreferrer">Rehabilitation efforts in Gopathala</a></li>
          <li><a href="https://www.amarujala.com/uttarakhand/chamoli/elderly-people-have-to-bring-water-from-one-km-away-in-gopathala-village-karnpryag-news-drn3761169101" target="_blank" rel="noopener noreferrer">Water issues faced by elderly in Gopathala</a></li>
          <li><a href="https://www.amarujala.com/amp/uttarakhand/chamoli/in-dimmar-mother-uma-devi-was-offered-the-food-of-badi-bhat-karnpryag-news-c-48-1-kpg1003-115037-2025-05-25" target="_blank" rel="noopener noreferrer">Dimmar: Traditional offerings to Uma Devi</a></li>
          <li><a href="https://www.livehindustan.com/uttarakhand/chamoli/story-devra-yatra-of-jithai-devi-begins-7433911.amp.html" target="_blank" rel="noopener noreferrer">Jithai Devi Yatra begins</a></li>
          <li><a href="https://www.jagran.com/uttarakhand/chamoli-demand-to-alternate-route-21867805.html" target="_blank" rel="noopener noreferrer">Demand for alternate road routes</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <strong><p>📍 Gram Gopthala, Dimmar | 📞 9411353753 / 9568129892</p>
        <p>  GVS Since 2019 </p>
        © PS Paper Tech Solution</strong>
      </footer>
    </div>
  );
}

export default App;

import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>Hakkımda</h1>
          <p className="hero-subtitle">
            Psikoloji alanında uzun yıllar edindiğim deneyim ve birikimimle size hizmet veriyorum
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <section className="intro-section">
                <h2>Dr. Psikolog Kimdir?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </section>

              <section className="education-section">
                <h2>Eğitim ve Uzmanlaşma</h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>

                <div className="education-list">
                  <div className="education-item">
                    <h4>2008 - Lisans Derecesi</h4>
                    <p>Ankara Üniversitesi Psikoloji Bölümü</p>
                  </div>
                  <div className="education-item">
                    <h4>2011 - Yüksek Lisans</h4>
                    <p>Klinik Psikoloji Yüksek Lisans Programı</p>
                  </div>
                  <div className="education-item">
                    <h4>2015 - Doktora</h4>
                    <p>Psikoloji Doktora Programı - Bilişsel Davranışçı Terapi Uzmanlaşması</p>
                  </div>
                </div>
              </section>

              <section className="approach-section">
                <h2>Terapi Yaklaşımım</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia 
                  deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>

                <p>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                  impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </section>
            </div>

            <div className="about-sidebar">
              <div className="profile-card">
                <div className="profile-image">
                  <div className="placeholder-image">
                    <span>👩‍⚕️</span>
                  </div>
                </div>
                <h3>Dr.Psikolog</h3>
                <p className="title">Klinik İsmi</p>
              </div>

              <div className="qualifications-card">
                <h3>Nitelikler</h3>
                <ul>
                  <li>✓ Klinik Psikolog</li>
                  <li>✓ Bilişsel Davranışçı Terapi Uzmanı</li>
                  <li>✓ Çift ve Aile Terapisti</li>
                  <li>✓ Travma Odaklı Terapi (EMDR)</li>
                  <li>✓ 15+ Yıl Deneyim</li>
                </ul>
              </div>

              <div className="specialties-card">
                <h3>Uzmanlık Alanları</h3>
                <div className="specialty-tags">
                  <span className="tag">Kaygı Bozuklukları</span>
                  <span className="tag">Depresyon</span>
                  <span className="tag">İlişki Sorunları</span>
                  <span className="tag">Travma Terapisi</span>
                  <span className="tag">Öfke Yönetimi</span>
                  <span className="tag">Stres Yönetimi</span>
                  <span className="tag">Öz Güven</span>
                  <span className="tag">Aile Terapisi</span>
                </div>
              </div>

              <div className="contact-card">
                <h3>İletişim</h3>
                <p><strong>E-posta:</strong> info@drpsikolog.com</p>
                <p><strong>Telefon:</strong> +90 532 123 45 67</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import './Home.css'

function Home() {
  const caseExamples = [
    {
      title: "İlişkilerde İletişim",
      description: "Partnerler arası etkili iletişim kurma teknikleri ve çatışma çözüm yöntemleri hakkında uzman rehberliği.",
      icon: "💕"
    },
    {
      title: "İş Stresi ve Tükenmişlik",
      description: "Çalışma yaşamında karşılaşılan stres faktörleri ve bunlarla başa çıkma stratejileri üzerine detaylı değerlendirme.",
      icon: "💼"
    },
    {
      title: "Kaygı ve Panik Atak Yönetimi", 
      description: "Günlük yaşamı etkileyen kaygı bozuklukları ve panik atak durumları için etkili terapi yaklaşımları.",
      icon: "🧘‍♀️"
    },
    {
      title: "Öz Güven Geliştirme",
      description: "Düşük öz güven problemi yaşayan bireyler için kişisel gelişim ve öz değer artırma çalışmaları.",
      icon: "⭐"
    },
    {
      title: "Aile İçi İletişim Sorunları",
      description: "Aile bireyleri arasında yaşanan iletişim kopuklukları ve çözüm odaklı aile terapisi yaklaşımları.",
      icon: "👨‍👩‍👧‍👦"
    }
  ]

  return (
    <div className="home">
      {/* Header Bölümü */}
      <section className="hero">
        <div className="hero-content">
          <h1>Uzman Psikolog Çağla Çağla</h1>
          <p className="hero-subtitle">
            Yaşamınızdaki zorluklarla savaşmayın, profesyonel destek alın.
          </p>
        </div>
      </section>

      {/* Vaka Örnekleri Bölümü */}
      <section className="case-examples">
        <div className="container">
          <h2>Uzmanlık Alanlarım</h2>
          <p className="section-subtitle">
            Danışanlarımla çalıştığım başlıca konular ve yaklaşımlarım
          </p>
          <div className="cases-grid">
            {caseExamples.map((example, index) => (
              <div key={index} className="case-card">
                <div className="case-icon">{example.icon}</div>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ana İçerik Bölümü */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Psikolojik Destek Neden Önemli?</h2>
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

              <h3>Terapi Süreci Nasıl İşler?</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>

              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum 
                fugiat quo voluptas nulla pariatur?
              </p>
            </div>

            <div className="content-sidebar">
              <div className="info-card">
                <h3>Hızlı Bilgiler</h3>
                <ul>
                  <li>✓ 15+ yıl deneyim</li>
                  <li>✓ Bireysel terapi</li>
                  <li>✓ Çift terapisi</li>
                  <li>✓ Online danışmanlık</li>
                  <li>✓ Grup terapileri</li>
                </ul>
              </div>

              <div className="quote-card">
                <blockquote>
                  "Psikolojik iyilik halinin anahtarı, kendimizi anlamamız ve kabul etmemizdir."
                </blockquote>
                <cite>- Dr. Psikolog</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

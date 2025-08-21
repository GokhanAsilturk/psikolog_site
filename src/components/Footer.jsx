import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>İletişim Bilgileri</h3>
            <div className="contact-info">
              <p><strong>Telefon:</strong> +90 532 123 45 67</p>
              <p><strong>E-posta:</strong> info@drpsikolog.com</p>
              <p><strong>Adres:</strong> Atatürk Mahallesi, Psikoloji Sokak No:15/A, Ankara</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Çalışma Saatleri</h3>
            <div className="working-hours">
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 09:00 - 16:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Konum</h3>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2449822999!2d32.8540034!3d39.9208069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xaa18c7c956eb9c2!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2s!4v1234567890"
                width="250"
                height="150"
                style={{ border: 0, borderRadius: '8px', display: 'block', margin: '0 auto' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konum Haritası"
              ></iframe>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Dr. Psikolog. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

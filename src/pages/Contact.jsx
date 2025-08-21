import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Hata varsa temizle
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad zorunludur'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta zorunludur'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Konu seçimi zorunludur'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj zorunludur'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('')
    
    try {
      // Simülasyon için bekle
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form gönderildi:', formData)
      setSubmitStatus('success')
      
      // Formu sıfırla
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1>İletişim</h1>
          <p className="hero-subtitle">
            Sorularınız için bana ulaşabilir, randevu talep edebilirsiniz
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Mesaj Gönderin</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    ❌ Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Ad Soyad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınızı ve soyadınızı giriniz"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="E-posta adresinizi giriniz"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefon numaranızı giriniz"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Konu *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={errors.subject ? 'error' : ''}
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="randevu">Randevu Talebi</option>
                    <option value="bilgi">Genel Bilgi</option>
                    <option value="online">Online Terapi</option>
                    <option value="çift">Çift Terapisi</option>
                    <option value="aile">Aile Danışmanlığı</option>
                    <option value="diğer">Diğer</option>
                  </select>
                  {errors.subject && <span className="field-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Mesajınızı detaylı bir şekilde yazabilirsiniz..."
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="info-card">
                <h3>İletişim Bilgileri</h3>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Telefon</h4>
                    <p>+90 532 123 45 67</p>
                    <small>Mesai saatleri içinde arayabilirsiniz</small>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h4>E-posta</h4>
                    <p>info@drpsikolog.com</p>
                    <small>24 saat içinde yanıtlanır</small>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Adres</h4>
                    <p>Atatürk Mahallesi<br />Psikoloji Sokak No:15/A<br />Çankaya/Ankara</p>
                    <small>Randevu ile görüşme</small>
                  </div>
                </div>
              </div>

              <div className="hours-card">
                <h3>Çalışma Saatleri</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Pazartesi - Cuma</span>
                    <span className="time">09:00 - 18:00</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Cumartesi</span>
                    <span className="time">09:00 - 16:00</span>
                  </div>
                  <div className="hours-item closed">
                    <span className="day">Pazar</span>
                    <span className="time">Kapalı</span>
                  </div>
                </div>
              </div>

              <div className="emergency-card">
                <h3>⚠️ Acil Durum</h3>
                <p>
                  Acil psikolojik yardım gerekiyorsa, lütfen en yakın hastane acil servisine başvurun 
                  veya 112'yi arayın.
                </p>
                <p className="crisis-line">
                  <strong>Kriz Hattı:</strong> 0850 840 00 80
                </p>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Konum</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2449822999!2d32.8540034!3d39.9208069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xaa18c7c956eb9c2!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ofis Konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

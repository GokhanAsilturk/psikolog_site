import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    closeMobileMenu()
    // Eğer zaten ana sayfadaysak, üste çık
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNavLinkClick = (path) => {
    closeMobileMenu()
    // Eğer aynı sayfadaysak, üste çık
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLogoClick}>
          <h2>Dr. Psikolog</h2>
        </Link>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('/')}
            >
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/hakkimda" 
              className={`nav-link ${location.pathname === '/hakkimda' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('/hakkimda')}
            >
              Hakkımda
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/iletisim" 
              className={`nav-link ${location.pathname === '/iletisim' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('/iletisim')}
            >
              İletişim
            </Link>
          </li>
        </div>

        <button 
          className="hamburger" 
          onClick={toggleMobileMenu}
          aria-label="Menüyü aç/kapat"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  // Добавьте этот эффект внутрь компонента Header
useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  
  // Чистим при размонтировании компонента
  return () => { document.body.style.overflow = 'unset'; };
}, [mobileMenuOpen]);

  const icons = {
    menu: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    ),
    search: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    user: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    cart: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    )
  };

  return (
    <header>
      <div className="header-top">
        <div className="container container-top">
          <div className="logo">
            <div className="companyName">
              <h2>Black</h2>
              <h2>Pearl</h2>
            </div>
          </div>

          <div className="search-wrapper">
            <span className="search-icon">{icons.search}</span>
            <input
              type="text"
              className="search-input"
              placeholder="Enter the name of a product..."
            />
          </div>

          <div className="user-options">
            <div className="lang-dropdown" ref={dropdownRef}>
                <a 
                className={`lang-button ${langOpen ? 'active' : ''}`}
                onClick={() => setLangOpen(!langOpen)}
                >
                {currentLang}
                </a>
                
                {langOpen && (
                <div className="dropdown">
                    {[
                    { code: 'EN', name: 'English' },
                    { code: 'RU', name: 'Русский' },
                    { code: 'PL', name: 'Polski' },
                    { code: 'UA', name: 'Українська' }
                    ].map(lang => (
                    <a 
                        key={lang.code}
                        className="dropdown-item"
                        onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                        }}
                    >
                        {lang.name}
                    </a>
                    ))}
                </div>
                )}
            </div>

            <a href="#" className="icon-link">
                {icons.user}
                <span>Account</span>
            </a>
            <a href="#" className="icon-link">
                {icons.cart}
                <span>Cart</span>
            </a>

            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {icons.menu}
            </button>
            </div>
        </div>
      </div>
    {mobileMenuOpen && <div className="menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
      <div className={`header-bottom ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        
        <div className="container">
          <div className="nav-section categories">
            {['Apple', 'Samsung', 'Xiaomi', 'Honor', 'Motorola', 'Others'].map(cat => (
              <a key={cat} href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{cat}</a>
            ))}
          </div>

          <div className="nav-section gadgets">
            {['Accessories', 'Protection', 'Computing', 'Store'].map(cat => (
              <a key={cat} href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{cat}</a>
            ))}
          </div>

          <div className="nav-section electrical">
            {['Devices', 'Laptops'].map(cat => (
              <a key={cat} href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{cat}</a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
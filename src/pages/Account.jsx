import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Account.css';

export default function Account() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  // Данные пользователя
  const [userData, setUserData] = useState({
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@example.com',
    phone: '+48 123 456 789',
    birthDate: '1990-05-15',
  });

  // Адреса доставки
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: 'Dom',
      isDefault: true,
      name: 'Jan Kowalski',
      street: 'ul. Długa 12/5',
      city: 'Warszawa',
      postalCode: '00-001',
      country: 'Polska',
      phone: '+48 123 456 789',
    },
    {
      id: 2,
      label: 'Praca',
      isDefault: false,
      name: 'Jan Kowalski',
      street: 'ul. Krótka 3',
      city: 'Kraków',
      postalCode: '30-001',
      country: 'Polska',
      phone: '+48 987 654 321',
    },
  ]);

  // Заказы
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 5898.70,
      items: [
        { name: 'iPhone 15 Pro', quantity: 1, price: 4999 },
        { name: 'Ekran OLED Premium', quantity: 1, price: 899 },
      ],
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'processing',
      total: 249.00,
      items: [
        { name: 'Bateria Oryginalna', quantity: 1, price: 249 },
      ],
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-22',
      status: 'shipped',
      total: 178.00,
      items: [
        { name: 'Etui Silkonowe', quantity: 2, price: 79 },
      ],
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      delivered: { text: 'Dostarczono', class: 'status-delivered' },
      processing: { text: 'W realizacji', class: 'status-processing' },
      shipped: { text: 'Wysłano', class: 'status-shipped' },
      cancelled: { text: 'Anulowano', class: 'status-cancelled' },
    };
    return statusConfig[status] || { text: status, class: '' };
  };

  const handleLogout = () => {
    if (confirm('Czy na pewno chcesz się wylogować?')) {
      navigate('/');
    }
  };

  return (
    <div className="account-page">
      <div className="account-header">
        <h1>Moje konto</h1>
        <button className="btn-logout" onClick={handleLogout}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Wyloguj się
        </button>
      </div>

      <div className="account-content">
        {/* Sidebar с табами */}
        <div className="account-sidebar">
          <button
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Profil
          </button>

          <button
            className={`tab-btn ${activeTab === 'addresses' ? 'active' : ''}`}
            onClick={() => setActiveTab('addresses')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Adresy dostawy
          </button>

          <button
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            Moje zamówienia
          </button>

          <button
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m6-12h-6M6 12H1m20 0h-5" />
            </svg>
            Ustawienia
          </button>
        </div>

        {/* Контент табов */}
        <div className="account-main">
          {/* Профиль */}
          {activeTab === 'profile' && (
            <div className="tab-content">
              <h2>Informacje osobiste</h2>
              <div className="profile-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Imię</label>
                    <input type="text" value={userData.firstName} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Nazwisko</label>
                    <input type="text" value={userData.lastName} readOnly />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={userData.email} readOnly />
                </div>

                <div className="form-group">
                  <label>Telefon</label>
                  <input type="tel" value={userData.phone} readOnly />
                </div>

                <div className="form-group">
                  <label>Data urodzenia</label>
                  <input type="date" value={userData.birthDate} readOnly />
                </div>

                <button className="btn-edit">Edytuj profil</button>
              </div>
            </div>
          )}

          {/* Адреса */}
          {activeTab === 'addresses' && (
            <div className="tab-content">
              <div className="section-header">
                <h2>Adresy dostawy</h2>
                <button className="btn-add">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Dodaj adres
                </button>
              </div>

              <div className="addresses-grid">
                {addresses.map(address => (
                  <div key={address.id} className="address-card">
                    <div className="address-header">
                      <div className="address-label">
                        <span>{address.label}</span>
                        {address.isDefault && <span className="default-badge">Domyślny</span>}
                      </div>
                      <div className="address-actions">
                        <button className="btn-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                        <button className="btn-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="address-info">
                      <p className="address-name">{address.name}</p>
                      <p>{address.street}</p>
                      <p>{address.postalCode} {address.city}</p>
                      <p>{address.country}</p>
                      <p className="address-phone">{address.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Заказы */}
          {activeTab === 'orders' && (
            <div className="tab-content">
              <h2>Moje zamówienia</h2>
              <div className="orders-list">
                {orders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div className="order-info-left">
                        <h3>Zamówienie #{order.id}</h3>
                        <span className="order-date">
                          {new Date(order.date).toLocaleDateString('pl-PL')}
                        </span>
                      </div>
                      <span className={`status-badge ${getStatusBadge(order.status).class}`}>
                        {getStatusBadge(order.status).text}
                      </span>
                    </div>

                    <div className="order-items">
                      {order.items.map((item, index) => (
                        <div key={index} className="order-item">
                          <span className="item-name">{item.name}</span>
                          <span className="item-qty">x{item.quantity}</span>
                          <span className="item-price">{item.price.toFixed(2)} zł</span>
                        </div>
                      ))}
                    </div>

                    <div className="order-footer">
                      <span className="order-total">Razem: <strong>{order.total.toFixed(2)} zł</strong></span>
                      <div className="order-actions">
                        <button className="btn-order-detail">Zobacz szczegóły</button>
                        {order.status === 'delivered' && (
                          <button className="btn-order-again">Zamów ponownie</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Настройки */}
          {activeTab === 'settings' && (
            <div className="tab-content">
              <h2>Ustawienia konta</h2>
              
              <div className="settings-section">
                <h3>Powiadomienia</h3>
                <div className="settings-group">
                  <label className="setting-item">
                    <div className="setting-info">
                      <span className="setting-label">Powiadomienia email</span>
                      <span className="setting-desc">Otrzymuj aktualizacje o zamówieniach</span>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </label>

                  <label className="setting-item">
                    <div className="setting-info">
                      <span className="setting-label">Newsletter</span>
                      <span className="setting-desc">Oferty specjalne i promocje</span>
                    </div>
                    <input type="checkbox" className="toggle" />
                  </label>
                </div>
              </div>

              <div className="settings-section">
                <h3>Bezpieczeństwo</h3>
                <div className="settings-group">
                  <button className="btn-setting">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Zmień hasło
                  </button>
                  <button className="btn-setting">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Weryfikacja dwuetapowa
                  </button>
                </div>
              </div>

              <div className="settings-section danger-zone">
                <h3>Strefa niebezpieczna</h3>
                <button className="btn-danger">Usuń konto</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Checkout.css';

export default function Checkout() {
  const navigate = useNavigate();
  
  // Форма данных
  const [formData, setFormData] = useState({
    // Личные данные
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Адрес доставки
    address: '',
    city: '',
    postalCode: '',
    country: 'Poland',
    
    // Способ оплаты
    paymentMethod: 'card',
    
    // Комментарий
    notes: ''
  });

  const [errors, setErrors] = useState({});

  // Временные данные корзины (в реальном приложении - из стейта/контекста)
  const cartItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro - Nowy',
      price: 4999,
      quantity: 1,
      image: 'https://via.placeholder.com/80x80?text=iPhone'
    },
    {
      id: 2,
      name: 'Ekran OLED Premium',
      price: 899,
      quantity: 1,
      image: 'https://via.placeholder.com/80x80?text=Screen'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Darmowa dostawa
  const tax = subtotal * 0.23; // VAT 23%
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Убираем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Pole wymagane';
    if (!formData.lastName.trim()) newErrors.lastName = 'Pole wymagane';
    if (!formData.email.trim()) newErrors.email = 'Pole wymagane';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Nieprawidłowy email';
    if (!formData.phone.trim()) newErrors.phone = 'Pole wymagane';
    if (!formData.address.trim()) newErrors.address = 'Pole wymagane';
    if (!formData.city.trim()) newErrors.city = 'Pole wymagane';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Pole wymagane';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Order submitted:', { formData, cartItems, total });
      // Здесь отправка на сервер
      alert('Zamówienie zostało złożone!');
      navigate('/');
    }
  };

  return (
    <div className="checkout-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Powrót
      </button>

      <h1>Finalizacja zamówienia</h1>

      <div className="checkout-content">
        {/* Форма */}
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit}>
            {/* Личные данные */}
            <div className="form-section">
              <h2>Dane osobowe</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Imię *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Nazwisko *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Telefon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
            </div>

            {/* Адрес доставки */}
            <div className="form-section">
              <h2>Adres dostawy</h2>
              <div className="form-group">
                <label>Ulica i numer *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? 'error' : ''}
                  placeholder="np. ul. Długa 12/5"
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Miasto *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={errors.city ? 'error' : ''}
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                <div className="form-group">
                  <label>Kod pocztowy *</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={errors.postalCode ? 'error' : ''}
                    placeholder="00-000"
                  />
                  {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Kraj *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="Poland">Polska</option>
                  <option value="Germany">Niemcy</option>
                  <option value="Ukraine">Ukraina</option>
                  <option value="Czech">Czechy</option>
                </select>
              </div>
            </div>

            {/* Способ оплаты */}
            <div className="form-section">
              <h2>Metoda płatności</h2>
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <div className="payment-option-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    <span>Karta płatnicza</span>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="blik"
                    checked={formData.paymentMethod === 'blik'}
                    onChange={handleInputChange}
                  />
                  <div className="payment-option-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <line x1="12" y1="18" x2="12" y2="18" />
                    </svg>
                    <span>BLIK</span>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === 'transfer'}
                    onChange={handleInputChange}
                  />
                  <div className="payment-option-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span>Przelew bankowy</span>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleInputChange}
                  />
                  <div className="payment-option-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <span>Gotówka przy odbiorze</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Комментарий */}
            <div className="form-section">
              <h2>Uwagi do zamówienia (opcjonalnie)</h2>
              <div className="form-group">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Dodatkowe informacje..."
                />
              </div>
            </div>
          </form>
        </div>

        {/* Сводка заказа */}
        <div className="order-summary">
          <h2>Podsumowanie zamówienia</h2>

          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div className="summary-item-info">
                  <h4>{item.name}</h4>
                  <span className="summary-item-qty">Ilość: {item.quantity}</span>
                </div>
                <span className="summary-item-price">{item.price.toFixed(2)} zł</span>
              </div>
            ))}
          </div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Suma częściowa:</span>
              <span>{subtotal.toFixed(2)} zł</span>
            </div>
            <div className="summary-row">
              <span>Dostawa:</span>
              <span className="free-shipping">Darmowa</span>
            </div>
            <div className="summary-row">
              <span>VAT (23%):</span>
              <span>{tax.toFixed(2)} zł</span>
            </div>
            <div className="summary-row total-row">
              <span>Razem:</span>
              <span className="total-price">{total.toFixed(2)} zł</span>
            </div>
          </div>

          <button className="btn-place-order" onClick={handleSubmit}>
            Złóż zamówienie
          </button>

          <div className="security-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Bezpieczna płatność</span>
          </div>
        </div>
      </div>
    </div>
  );
}
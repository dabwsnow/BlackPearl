import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'product', 'category', 'brand'

  // Статистика
  const stats = {
    totalUsers: 1247,
    totalOrders: 3891,
    totalRevenue: 487650.50,
    pendingOrders: 23,
    newUsersToday: 12,
    ordersToday: 45,
    revenueToday: 12450.00,
    lowStockProducts: 8,
  };

  // Последние заказы
  const recentOrders = [
    { id: 'ORD-2024-156', customer: 'Jan Kowalski', date: '2024-01-24 14:30', total: 4999, status: 'pending' },
    { id: 'ORD-2024-155', customer: 'Anna Nowak', date: '2024-01-24 13:15', total: 899, status: 'processing' },
    { id: 'ORD-2024-154', customer: 'Piotr Wiśniewski', date: '2024-01-24 12:00', total: 1599, status: 'shipped' },
    { id: 'ORD-2024-153', customer: 'Maria Kowalczyk', date: '2024-01-24 10:45', total: 2499, status: 'delivered' },
    { id: 'ORD-2024-152', customer: 'Tomasz Zieliński', date: '2024-01-24 09:30', total: 399, status: 'pending' },
  ];

  // Пользователи
  const users = [
    { id: 1, name: 'Jan Kowalski', email: 'jan@example.com', orders: 15, spent: 12500, joined: '2023-06-15', status: 'active' },
    { id: 2, name: 'Anna Nowak', email: 'anna@example.com', orders: 8, spent: 6780, joined: '2023-08-20', status: 'active' },
    { id: 3, name: 'Piotr Wiśniewski', email: 'piotr@example.com', orders: 23, spent: 18900, joined: '2023-04-10', status: 'active' },
    { id: 4, name: 'Maria Kowalczyk', email: 'maria@example.com', orders: 5, spent: 3200, joined: '2023-11-05', status: 'inactive' },
  ];

  // Товары
  const [products, setProducts] = useState([
    { id: 1, name: 'iPhone 15 Pro Max', category: 'Phones', brand: 'Apple', price: 4999, stock: 45, status: 'active' },
    { id: 2, name: 'Galaxy S24 Ultra', category: 'Phones', brand: 'Samsung', price: 5499, stock: 32, status: 'active' },
    { id: 3, name: 'Ekran OLED Premium', category: 'Screens', brand: 'Apple', price: 899, stock: 5, status: 'active' },
    { id: 4, name: 'Bateria Oryginalna', category: 'Batteries', brand: 'Samsung', price: 249, stock: 120, status: 'active' },
    { id: 5, name: 'Etui Silkonowe', category: 'Cases', brand: 'Universal', price: 79, stock: 0, status: 'inactive' },
  ]);

  // Категории
  const [categories, setCategories] = useState([
    { id: 1, name: 'Phones', productsCount: 156, icon: '📱' },
    { id: 2, name: 'Screens', productsCount: 89, icon: '🖥️' },
    { id: 3, name: 'Batteries', productsCount: 67, icon: '🔋' },
    { id: 4, name: 'Cases', productsCount: 234, icon: '🛡️' },
    { id: 5, name: 'Chargers', productsCount: 45, icon: '🔌' },
  ]);

  // Бренды
  const [brands, setBrands] = useState([
    { id: 1, name: 'Apple', productsCount: 125, models: 20 },
    { id: 2, name: 'Samsung', productsCount: 98, models: 15 },
    { id: 3, name: 'Xiaomi', productsCount: 67, models: 12 },
    { id: 4, name: 'Honor', productsCount: 34, models: 8 },
    { id: 5, name: 'Motorola', productsCount: 28, models: 6 },
  ]);

  const getStatusBadge = (status) => {
    const config = {
      pending: { text: 'Oczekuje', class: 'status-pending' },
      processing: { text: 'W realizacji', class: 'status-processing' },
      shipped: { text: 'Wysłano', class: 'status-shipped' },
      delivered: { text: 'Dostarczono', class: 'status-delivered' },
      cancelled: { text: 'Anulowano', class: 'status-cancelled' },
      active: { text: 'Aktywny', class: 'status-active' },
      inactive: { text: 'Nieaktywny', class: 'status-inactive' },
    };
    return config[status] || { text: status, class: '' };
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Czy na pewno chcesz usunąć ten produkt?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleDeleteCategory = (id) => {
    if (confirm('Czy na pewno chcesz usunąć tę kategorię?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  const handleDeleteBrand = (id) => {
    if (confirm('Czy na pewno chcesz usunąć tę markę?')) {
      setBrands(brands.filter(b => b.id !== id));
    }
  };

  const openAddModal = (type) => {
    setModalType(type);
    setShowAddModal(true);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
        </div>

        <nav className="admin-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </button>

          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            Zamówienia
            {stats.pendingOrders > 0 && <span className="badge">{stats.pendingOrders}</span>}
          </button>

          <button 
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Użytkownicy
          </button>

          <button 
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            Produkty
          </button>

          <button 
            className={`nav-item ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Kategorie
          </button>

          <button 
            className={`nav-item ${activeTab === 'brands' ? 'active' : ''}`}
            onClick={() => setActiveTab('brands')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            Marki
          </button>

          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="20" x2="12" y2="10" />
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="6" y1="20" x2="6" y2="16" />
            </svg>
            Analityka
          </button>
        </nav>

        <button className="btn-logout" onClick={() => navigate('/')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Wyjdź
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="admin-content">
            <h1>Dashboard</h1>
            
            {/* Статистика */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-label">Użytkownicy</span>
                  <span className="stat-value">{stats.totalUsers.toLocaleString()}</span>
                  <span className="stat-change positive">+{stats.newUsersToday} dzisiaj</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-label">Zamówienia</span>
                  <span className="stat-value">{stats.totalOrders.toLocaleString()}</span>
                  <span className="stat-change positive">+{stats.ordersToday} dzisiaj</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-label">Przychody</span>
                  <span className="stat-value">{stats.totalRevenue.toLocaleString()} zł</span>
                  <span className="stat-change positive">+{stats.revenueToday.toLocaleString()} zł dzisiaj</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-label">Oczekujące</span>
                  <span className="stat-value">{stats.pendingOrders}</span>
                  <span className="stat-change warning">Wymaga uwagi</span>
                </div>
              </div>
            </div>

            {/* Последние заказы */}
            <div className="section">
              <h2>Ostatnie zamówienia</h2>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID Zamówienia</th>
                      <th>Klient</th>
                      <th>Data</th>
                      <th>Kwota</th>
                      <th>Status</th>
                      <th>Akcje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map(order => (
                      <tr key={order.id}>
                        <td><strong>{order.id}</strong></td>
                        <td>{order.customer}</td>
                        <td>{order.date}</td>
                        <td><strong>{order.total.toLocaleString()} zł</strong></td>
                        <td>
                          <span className={`status-badge ${getStatusBadge(order.status).class}`}>
                            {getStatusBadge(order.status).text}
                          </span>
                        </td>
                        <td>
                          <button className="btn-action">Szczegóły</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === 'orders' && (
          <div className="admin-content">
            <div className="section-header">
              <h1>Zamówienia</h1>
              <div className="header-actions">
                <input type="search" placeholder="Szukaj zamówienia..." className="search-input" />
                <select className="filter-select">
                  <option value="all">Wszystkie</option>
                  <option value="pending">Oczekujące</option>
                  <option value="processing">W realizacji</option>
                  <option value="shipped">Wysłane</option>
                  <option value="delivered">Dostarczone</option>
                </select>
              </div>
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Klient</th>
                    <th>Data</th>
                    <th>Kwota</th>
                    <th>Status</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map(order => (
                    <tr key={order.id}>
                      <td><strong>{order.id}</strong></td>
                      <td>{order.customer}</td>
                      <td>{order.date}</td>
                      <td><strong>{order.total.toLocaleString()} zł</strong></td>
                      <td>
                        <span className={`status-badge ${getStatusBadge(order.status).class}`}>
                          {getStatusBadge(order.status).text}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-action">Edytuj</button>
                          <button className="btn-action danger">Anuluj</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users */}
        {activeTab === 'users' && (
          <div className="admin-content">
            <div className="section-header">
              <h1>Użytkownicy</h1>
              <input type="search" placeholder="Szukaj użytkownika..." className="search-input" />
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Imię i nazwisko</th>
                    <th>Email</th>
                    <th>Zamówienia</th>
                    <th>Wydane</th>
                    <th>Data dołączenia</th>
                    <th>Status</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td><strong>{user.name}</strong></td>
                      <td>{user.email}</td>
                      <td>{user.orders}</td>
                      <td><strong>{user.spent.toLocaleString()} zł</strong></td>
                      <td>{user.joined}</td>
                      <td>
                        <span className={`status-badge ${getStatusBadge(user.status).class}`}>
                          {getStatusBadge(user.status).text}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-action">Edytuj</button>
                          <button className="btn-action danger">Blokuj</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Products */}
        {activeTab === 'products' && (
          <div className="admin-content">
            <div className="section-header">
              <h1>Produkty</h1>
              <div className="header-actions">
                <input type="search" placeholder="Szukaj produktu..." className="search-input" />
                <button className="btn-add" onClick={() => openAddModal('product')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Dodaj produkt
                </button>
              </div>
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>Marka</th>
                    <th>Cena</th>
                    <th>Stan</th>
                    <th>Status</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td><strong>{product.name}</strong></td>
                      <td>{product.category}</td>
                      <td>{product.brand}</td>
                      <td><strong>{product.price.toLocaleString()} zł</strong></td>
                      <td>
                        <span className={product.stock === 0 ? 'stock-out' : product.stock < 10 ? 'stock-low' : 'stock-ok'}>
                          {product.stock} szt.
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${getStatusBadge(product.status).class}`}>
                          {getStatusBadge(product.status).text}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-action">Edytuj</button>
                          <button className="btn-action danger" onClick={() => handleDeleteProduct(product.id)}>Usuń</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Categories */}
        {activeTab === 'categories' && (
          <div className="admin-content">
            <div className="section-header">
              <h1>Kategorie</h1>
              <button className="btn-add" onClick={() => openAddModal('category')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Dodaj kategorię
              </button>
            </div>

            <div className="cards-grid">
              {categories.map(category => (
                <div key={category.id} className="category-card">
                  <div className="category-icon-large">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>{category.productsCount} produktów</p>
                  <div className="card-actions">
                    <button className="btn-action">Edytuj</button>
                    <button className="btn-action danger" onClick={() => handleDeleteCategory(category.id)}>Usuń</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Brands */}
        {activeTab === 'brands' && (
          <div className="admin-content">
            <div className="section-header">
              <h1>Marki</h1>
              <button className="btn-add" onClick={() => openAddModal('brand')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Dodaj markę
              </button>
            </div>

            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nazwa marki</th>
                    <th>Liczba produktów</th>
                    <th>Liczba modeli</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map(brand => (
                    <tr key={brand.id}>
                      <td>{brand.id}</td>
                      <td><strong>{brand.name}</strong></td>
                      <td>{brand.productsCount}</td>
                      <td>{brand.models}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-action">Edytuj</button>
                          <button className="btn-action">Modele</button>
                          <button className="btn-action danger" onClick={() => handleDeleteBrand(brand.id)}>Usuń</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <div className="admin-content">
            <h1>Analityka i raporty</h1>
            <div className="analytics-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
              <h2>Wykresy i raporty</h2>
              <p>Sekcja w budowie - wkrótce szczegółowe wykresy sprzedaży</p>
            </div>
          </div>
        )}
      </main>

      {/* Modal for Adding */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Dodaj {modalType === 'product' ? 'produkt' : modalType === 'category' ? 'kategorię' : 'markę'}</h2>
            <form className="modal-form">
              {modalType === 'product' && (
                <>
                  <input type="text" placeholder="Nazwa produktu" required />
                  <select required>
                    <option value="">Wybierz kategorię</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                  <select required>
                    <option value="">Wybierz markę</option>
                    {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                  </select>
                  <input type="number" placeholder="Cena" required />
                  <input type="number" placeholder="Stan magazynowy" required />
                  <textarea placeholder="Opis produktu" rows="4"></textarea>
                </>
              )}
              {modalType === 'category' && (
                <>
                  <input type="text" placeholder="Nazwa kategorii" required />
                  <input type="text" placeholder="Ikona (emoji)" required />
                </>
              )}
              {modalType === 'brand' && (
                <>
                  <input type="text" placeholder="Nazwa marki" required />
                </>
              )}
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowAddModal(false)}>Anuluj</button>
                <button type="submit" className="btn-submit">Dodaj</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
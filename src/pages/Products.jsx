import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Products.css';

export default function Products() {
  const { brand, modelId } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const brandName = brand ? brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase() : '';
  
  // Данные модели (в реальном приложении получать из API)
  const modelName = 'iPhone 15 Pro'; // Временно, потом брать из стейта/API

  // Категории товаров
  const categories = [
    { id: 'all', name: 'Wszystko', icon: '📦' },
    { id: 'phones', name: 'Telefony', icon: '📱' },
    { id: 'screens', name: 'Ekrany', icon: '🖥️' },
    { id: 'batteries', name: 'Baterie', icon: '🔋' },
    { id: 'cases', name: 'Etui', icon: '🛡️' },
    { id: 'chargers', name: 'Ładowarki', icon: '🔌' },
    { id: 'accessories', name: 'Akcesoria', icon: '🎧' },
  ];

  // Товары для конкретной модели
  const products = [
    { 
      id: 1, 
      name: `${modelName} - Nowy`, 
      price: 4999, 
      category: 'phones',
      image: 'https://via.placeholder.com/200x200?text=Phone',
      description: 'Fabrycznie nowy telefon z gwarancją',
      inStock: true,
    },
    { 
      id: 2, 
      name: `${modelName} - Odnowiony`, 
      price: 3999, 
      category: 'phones',
      image: 'https://via.placeholder.com/200x200?text=Phone',
      description: 'Odnowiony telefon w idealnym stanie',
      inStock: true,
    },
    { 
      id: 3, 
      name: 'Ekran OLED Premium', 
      price: 899, 
      category: 'screens',
      image: 'https://via.placeholder.com/200x200?text=Screen',
      description: 'Oryginalny wyświetlacz OLED',
      inStock: true,
    },
    { 
      id: 4, 
      name: 'Ekran LCD Zamiennik', 
      price: 499, 
      category: 'screens',
      image: 'https://via.placeholder.com/200x200?text=Screen',
      description: 'Wysokiej jakości zamiennik',
      inStock: true,
    },
    { 
      id: 5, 
      name: 'Bateria Oryginalna', 
      price: 249, 
      category: 'batteries',
      image: 'https://via.placeholder.com/200x200?text=Battery',
      description: 'Oryginalna bateria Apple',
      inStock: true,
    },
    { 
      id: 6, 
      name: 'Etui Silkonowe', 
      price: 79, 
      category: 'cases',
      image: 'https://via.placeholder.com/200x200?text=Case',
      description: 'Miękkie silikonowe etui',
      inStock: true,
    },
    { 
      id: 7, 
      name: 'Etui Clear', 
      price: 99, 
      category: 'cases',
      image: 'https://via.placeholder.com/200x200?text=Case',
      description: 'Przezroczyste etui ochronne',
      inStock: true,
    },
    { 
      id: 8, 
      name: 'Ładowarka USB-C 20W', 
      price: 89, 
      category: 'chargers',
      image: 'https://via.placeholder.com/200x200?text=Charger',
      description: 'Szybka ładowarka 20W',
      inStock: true,
    },
    { 
      id: 9, 
      name: 'Kabel USB-C', 
      price: 49, 
      category: 'chargers',
      image: 'https://via.placeholder.com/200x200?text=Cable',
      description: 'Wzmocniony kabel 1m',
      inStock: true,
    },
    { 
      id: 10, 
      name: 'Szkło Hartowane', 
      price: 39, 
      category: 'accessories',
      image: 'https://via.placeholder.com/200x200?text=Glass',
      description: 'Ochronne szkło 9H',
      inStock: true,
    },
    { 
      id: 11, 
      name: 'Uchwyt Samochodowy', 
      price: 69, 
      category: 'accessories',
      image: 'https://via.placeholder.com/200x200?text=Holder',
      description: 'Magnetyczny uchwyt do auta',
      inStock: false,
    },
  ];

  // Фильтрация по категории
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="products-page">
      <div className="products-header">
        <button className="back-btn" onClick={() => navigate(`/categories/${brand}/models`)}>
          ← Powrót do modeli
        </button>
        <h1>{modelName}</h1>
        <p>Wybierz produkt dla swojego urządzenia</p>
      </div>

      {/* Категории */}
      <div className="categories-filter">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="category-icon">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Товары */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => navigate(`/categories/${brand}/model/${modelId}/product/${product.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {/* Бейдж категории */}
            <div className="product-badge">
              {categories.find(c => c.id === product.category)?.icon} {categories.find(c => c.id === product.category)?.name}
            </div>
            
            {/* Изображение */}
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>

            {/* Информация */}
            <div className="product-details">
              <div className="product-price">{product.price} zł</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              
              {/* Кнопка */}
              <button 
                className="add-to-cart-btn"
                disabled={!product.inStock}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {product.inStock ? 'Dodaj do koszyka' : 'Niedostępny'}
              </button>
            </div>

            {!product.inStock && <div className="out-of-stock-overlay">Brak w magazynie</div>}
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>Brak produktów w tej kategorii</p>
        </div>
      )}
    </div>
  );
}
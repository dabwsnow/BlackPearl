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
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
              {!product.inStock && <span className="out-of-stock-badge">Brak w magazynie</span>}
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price} zł</span>
                <button 
                  className="add-to-cart-btn"
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Dodaj do koszyka' : 'Niedostępny'}
                </button>
              </div>
            </div>
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
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ProductDetail.css';

export default function ProductDetail() {
  const { brand, modelId, productId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Временные данные товара (в реальном приложении - из API)
  const product = {
    id: productId,
    name: 'Complete Screen Blue Night Galaxy Z Fold7 (F966B)',
    price: 472.70,
    oldPrice: 520.00,
    inStock: true,
    sku: 'F966B-SCREEN-BN',
    brand: 'Samsung',
    category: 'Screens',
    description: 'Original Samsung Complete Screen for Galaxy Z Fold7. Premium OLED display with perfect color reproduction and touch sensitivity. Includes all necessary components for installation.',
    images: [
      'https://via.placeholder.com/600x600?text=Main+Image',
      'https://via.placeholder.com/600x600?text=Image+2',
      'https://via.placeholder.com/600x600?text=Image+3',
      'https://via.placeholder.com/600x600?text=Image+4',
    ],
    features: [
      'Original Samsung OLED Display',
      'Blue Night Color',
      'Complete Screen Assembly',
      'Easy Installation',
      '12 Month Warranty',
      'Touch Sensitivity Test Passed',
    ],
    specifications: [
      { label: 'Brand', value: 'Samsung' },
      { label: 'Model', value: 'Galaxy Z Fold7 (F966B)' },
      { label: 'Type', value: 'Complete Screen' },
      { label: 'Color', value: 'Blue Night' },
      { label: 'Warranty', value: '12 Months' },
      { label: 'Condition', value: 'New - Original' },
    ],
  };

  const relatedProducts = [
    { id: 1, name: 'Screen Protector', price: 29.99, image: 'https://via.placeholder.com/200x200?text=Protector' },
    { id: 2, name: 'Battery', price: 89.99, image: 'https://via.placeholder.com/200x200?text=Battery' },
    { id: 3, name: 'Case', price: 39.99, image: 'https://via.placeholder.com/200x200?text=Case' },
  ];

  const handleAddToCart = () => {
    console.log('Add to cart:', { product, quantity });
    // Здесь добавить в корзину
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { product, quantity });
    // Перейти к оформлению заказа
    navigate('/checkout');
  };

  return (
    <div className="product-detail-page">
      {/* Кнопка назад */}
      <button className="back-btn" onClick={() => navigate(`/categories/${brand}/model/${modelId}/products`)}>
        ← Powrót do produktów
      </button>

      {/* Основной контент */}
      <div className="product-detail-content">
        {/* Галерея изображений */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="image-thumbnails">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Информация о товаре */}
        <div className="product-info">
          <div className="product-badge-tag">Service Pack</div>
          <h1>{product.name}</h1>
          <div className="product-meta">
            <span className="sku">SKU: {product.sku}</span>
            <span className={`stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </span>
          </div>

          <div className="product-pricing">
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice.toFixed(2)}€</span>
            )}
            <span className="current-price">{product.price.toFixed(2)}€</span>
            {product.oldPrice && (
              <span className="discount">
                Save {((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(0)}%
              </span>
            )}
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {/* Основные характеристики */}
          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Выбор количества */}
          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="product-actions">
            <button className="btn-add-cart" onClick={handleAddToCart} disabled={!product.inStock}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </button>
            <button className="btn-buy-now" onClick={handleBuyNow} disabled={!product.inStock}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Характеристики */}
      <div className="product-specifications">
        <h2>Specifications</h2>
        <div className="specs-grid">
          {product.specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}:</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Похожие товары */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.map(item => (
            <div key={item.id} className="related-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <span className="related-price">{item.price.toFixed(2)}€</span>
              <button className="btn-view">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
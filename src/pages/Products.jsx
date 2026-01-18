import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Products.css';

export default function Products() {
  const { brand } = useParams();
  const navigate = useNavigate();
  
  const brandName = brand ? brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase() : '';

  const products = [
    { id: 1, name: `${brandName} iPhone 14 Pro`, price: 'od 99 zł', icon: 'IP', category: 'Smartphones' },
    { id: 2, name: `${brandName} iPhone 14`, price: 'od 89 zł', icon: 'IP', category: 'Smartphones' },
    { id: 3, name: `${brandName} iPhone 13 Pro Max`, price: 'od 129 zł', icon: 'IP', category: 'Smartphones' },
    { id: 4, name: `${brandName} MacBook Air M2`, price: 'od 149 zł', icon: 'MB', category: 'Laptops' },
    { id: 5, name: `${brandName} MacBook Pro 14"`, price: 'od 199 zł', icon: 'MB', category: 'Laptops' },
    { id: 6, name: `${brandName} Watch Series 9`, price: 'od 79 zł', icon: 'AW', category: 'Watches' },
    { id: 7, name: `${brandName} Watch Ultra`, price: 'od 99 zł', icon: 'AW', category: 'Watches' },
    { id: 8, name: `${brandName} iPad Pro 12.9"`, price: 'od 159 zł', icon: 'ID', category: 'Tablets' },
    { id: 9, name: `${brandName} iPad Air`, price: 'od 119 zł', icon: 'ID', category: 'Tablets' },
    { id: 10, name: `${brandName} AirPods Pro 2`, price: 'od 69 zł', icon: 'AP', category: 'Accessories' },
    { id: 11, name: `${brandName} AirPods Max`, price: 'od 89 zł', icon: 'AP', category: 'Accessories' },
    { id: 12, name: `${brandName} iMac 24"`, price: 'od 179 zł', icon: 'IM', category: 'Computers' },
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <button className="back-btn" onClick={() => navigate('/categories')}>
          ← Powrót do kategorii
        </button>
        <h1>Serwis {brandName}</h1>
        <p>Wybierz swój model, aby zobaczyć cennik napraw</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <span className="product-price">{product.price}</span>
              <button className="view-repairs-btn">Sprawdź naprawy →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
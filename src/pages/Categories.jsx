import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Categories.css';

export default function Categories() {
  const navigate = useNavigate();
  const { brand } = useParams();
  const [activeBrand, setActiveBrand] = useState(null);

  const brands = [
    { name: 'Apple', icon: 'AP' },
    { name: 'Samsung', icon: 'SS' },
    { name: 'Xiaomi', icon: 'XI' },
    { name: 'Honor', icon: 'HN' },
    { name: 'Motorola', icon: 'MT' },
    { name: 'Google', icon: 'GG' },
    { name: 'Huawei', icon: 'HW' },
    { name: 'OnePlus', icon: 'OP' },
    { name: 'Sony', icon: 'SN' },
    { name: 'Realme', icon: 'RM' },
    { name: 'Oppo', icon: 'OP' },
    { name: 'Vivo', icon: 'VV' },
    { name: 'Nothing', icon: 'NT' },
    { name: 'Asus', icon: 'AS' },
    { name: 'TCL', icon: 'TC' },
    { name: 'Nokia', icon: 'NK' },
    { name: 'LG', icon: 'LG' },
    { name: 'Lenovo', icon: 'LN' },
    { name: 'Microsoft', icon: 'MS' },
    { name: 'Blackview', icon: 'BV' },
  ];

  useEffect(() => {
    if (brand) {
      const formattedBrand = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
      setActiveBrand(formattedBrand);
    }
  }, [brand]);

  const handleBrandChange = (brandName) => {
    // Переход на страницу выбора модели вместо Products
    navigate(`/categories/${brandName.toLowerCase()}/models`);
  };

  return (
    <div className="categories-page">
      <div className="brand-section">
        <h2>Wybierz markę urządzenia</h2>
        <div className="brand-grid">
          {brands.map(brand => (
            <div
              key={brand.name}
              className={`brand-card ${activeBrand === brand.name ? 'active' : ''}`}
              onClick={() => handleBrandChange(brand.name)}
            >
              <div className="brand-card-content">
                <div className="brand-icon">{brand.icon}</div>
                <div className="brand-name">{brand.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
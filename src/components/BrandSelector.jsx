import '../styles/BrandSelector.css';

export default function BrandSelector({ activeBrand, onBrandChange }) {
  const brands = [
    'Apple', 'Samsung', 'Xiaomi', 'Honor', 'Motorola', 'Google', 
    'Huawei', 'OnePlus', 'Sony', 'Realme', 'Oppo', 'Vivo', 
    'Nothing', 'Asus', 'TCL', 'Nokia', 'LG', 'Lenovo', 
    'Microsoft', 'Blackview'
  ];

  return (
    <div className="brand-selector">
      <div className="brand-container">
        {brands.map(brand => (
          <button
            key={brand}
            className={`brand-btn ${activeBrand === brand ? 'active' : ''}`}
            onClick={() => onBrandChange(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}
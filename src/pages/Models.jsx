import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Models.css';

export default function Models() {
  const { brand } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const brandName = brand ? brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase() : '';

  // Модели для каждого бренда
  const modelsData = {
    apple: [
      { id: 1, name: 'iPhone 15 Pro Max', series: 'iPhone 15', year: 2023, icon: '15PM' },
      { id: 2, name: 'iPhone 15 Pro', series: 'iPhone 15', year: 2023, icon: '15P' },
      { id: 3, name: 'iPhone 15 Plus', series: 'iPhone 15', year: 2023, icon: '15+' },
      { id: 4, name: 'iPhone 15', series: 'iPhone 15', year: 2023, icon: '15' },
      { id: 5, name: 'iPhone 14 Pro Max', series: 'iPhone 14', year: 2022, icon: '14PM' },
      { id: 6, name: 'iPhone 14 Pro', series: 'iPhone 14', year: 2022, icon: '14P' },
      { id: 7, name: 'iPhone 14 Plus', series: 'iPhone 14', year: 2022, icon: '14+' },
      { id: 8, name: 'iPhone 14', series: 'iPhone 14', year: 2022, icon: '14' },
      { id: 9, name: 'iPhone 13 Pro Max', series: 'iPhone 13', year: 2021, icon: '13PM' },
      { id: 10, name: 'iPhone 13 Pro', series: 'iPhone 13', year: 2021, icon: '13P' },
      { id: 11, name: 'iPhone 13', series: 'iPhone 13', year: 2021, icon: '13' },
      { id: 12, name: 'iPhone 13 Mini', series: 'iPhone 13', year: 2021, icon: '13m' },
      { id: 13, name: 'iPhone 12 Pro Max', series: 'iPhone 12', year: 2020, icon: '12PM' },
      { id: 14, name: 'iPhone 12 Pro', series: 'iPhone 12', year: 2020, icon: '12P' },
      { id: 15, name: 'iPhone 12', series: 'iPhone 12', year: 2020, icon: '12' },
      { id: 16, name: 'iPhone 12 Mini', series: 'iPhone 12', year: 2020, icon: '12m' },
      { id: 17, name: 'iPhone SE (2022)', series: 'iPhone SE', year: 2022, icon: 'SE3' },
      { id: 18, name: 'iPhone 11 Pro Max', series: 'iPhone 11', year: 2019, icon: '11PM' },
      { id: 19, name: 'iPhone 11 Pro', series: 'iPhone 11', year: 2019, icon: '11P' },
      { id: 20, name: 'iPhone 11', series: 'iPhone 11', year: 2019, icon: '11' },
    ],
    samsung: [
      { id: 1, name: 'Galaxy S24 Ultra', series: 'S24', year: 2024, icon: 'S24U' },
      { id: 2, name: 'Galaxy S24+', series: 'S24', year: 2024, icon: 'S24+' },
      { id: 3, name: 'Galaxy S24', series: 'S24', year: 2024, icon: 'S24' },
      { id: 4, name: 'Galaxy S23 Ultra', series: 'S23', year: 2023, icon: 'S23U' },
      { id: 5, name: 'Galaxy S23+', series: 'S23', year: 2023, icon: 'S23+' },
      { id: 6, name: 'Galaxy S23', series: 'S23', year: 2023, icon: 'S23' },
      { id: 7, name: 'Galaxy Z Fold 5', series: 'Fold', year: 2023, icon: 'F5' },
      { id: 8, name: 'Galaxy Z Flip 5', series: 'Flip', year: 2023, icon: 'Fl5' },
      { id: 9, name: 'Galaxy A54', series: 'A Series', year: 2023, icon: 'A54' },
      { id: 10, name: 'Galaxy A34', series: 'A Series', year: 2023, icon: 'A34' },
      { id: 11, name: 'Galaxy S22 Ultra', series: 'S22', year: 2022, icon: 'S22U' },
      { id: 12, name: 'Galaxy S22+', series: 'S22', year: 2022, icon: 'S22+' },
      { id: 13, name: 'Galaxy S22', series: 'S22', year: 2022, icon: 'S22' },
      { id: 14, name: 'Galaxy Z Fold 4', series: 'Fold', year: 2022, icon: 'F4' },
      { id: 15, name: 'Galaxy Z Flip 4', series: 'Flip', year: 2022, icon: 'Fl4' },
    ],
    xiaomi: [
      { id: 1, name: 'Xiaomi 14 Pro', series: 'Xiaomi 14', year: 2024, icon: '14P' },
      { id: 2, name: 'Xiaomi 14', series: 'Xiaomi 14', year: 2024, icon: '14' },
      { id: 3, name: 'Xiaomi 13 Pro', series: 'Xiaomi 13', year: 2023, icon: '13P' },
      { id: 4, name: 'Xiaomi 13', series: 'Xiaomi 13', year: 2023, icon: '13' },
      { id: 5, name: 'Redmi Note 13 Pro', series: 'Redmi Note', year: 2023, icon: 'RN13P' },
      { id: 6, name: 'Redmi Note 13', series: 'Redmi Note', year: 2023, icon: 'RN13' },
      { id: 7, name: 'Poco X6 Pro', series: 'Poco X', year: 2024, icon: 'X6P' },
      { id: 8, name: 'Poco F5 Pro', series: 'Poco F', year: 2023, icon: 'F5P' },
    ],
  };

  const models = modelsData[brand?.toLowerCase()] || [];

  const filteredModels = models.filter(model =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedModels = filteredModels.reduce((acc, model) => {
    if (!acc[model.series]) {
      acc[model.series] = [];
    }
    acc[model.series].push(model);
    return acc;
  }, {});

  const handleModelClick = (modelId) => {
    navigate(`/categories/${brand}/model/${modelId}/products`);
  };

  return (
    <div className="models-page">
      <div className="models-header">
        <button className="back-btn" onClick={() => navigate('/categories')}>
          ← Powrót do marek
        </button>
        <h1>Wybierz model {brandName}</h1>
        <p>Znajdź swój telefon, aby zobaczyć dostępne produkty</p>

        {/* Поиск */}
        <div className="search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Szukaj modelu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="models-content">
        {Object.keys(groupedModels).length === 0 ? (
          <div className="no-models">
            <p>Nie znaleziono modeli</p>
          </div>
        ) : (
          Object.entries(groupedModels).map(([series, seriesModels]) => (
            <div key={series} className="model-series">
              <h3 className="series-title">{series}</h3>
              <div className="models-grid">
                {seriesModels.map(model => (
                  <div
                    key={model.id}
                    className="model-card"
                    onClick={() => handleModelClick(model.id)}
                  >
                    <div className="model-icon">{model.icon}</div>
                    <div className="model-info">
                      <h4>{model.name}</h4>
                      <span className="model-year">{model.year}</span>
                    </div>
                    <div className="model-arrow">→</div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
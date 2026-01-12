import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import CompareModal from './components/CompareModal';
import Header from './components/Header';
import ComparisonPage from './components/ComparisonPage';

function App() {
  const navigate = useNavigate();
  const [comparedIds, setComparedIds] = useState(() => {
    const saved = localStorage.getItem('comparedProducts');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('comparedProducts', JSON.stringify(comparedIds));
  }, [comparedIds]);

  const toggleCompare = (productId) => {
    setComparedIds(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        if (prev.length >= 3) {
          return prev;
        }
        return [...prev, productId];
      }
    });
  };

  const removeProduct = (productId) => {
    setComparedIds(prev => {
      const newIds = prev.filter(id => id !== productId);
      return newIds;
    });
  };

  const clearAll = () => {
    setComparedIds([]);
  };

  const handleCompareNow = () => {
    navigate('/compare');
  };

  const filteredProducts = products.filter(product => {
    const searchLower = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower)
    );
  });

  const comparedProducts = products.filter(product =>
    comparedIds.includes(product.id)
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Header showSearch={true} searchTerm={searchTerm} onSearchChange={setSearchTerm} title="Phone Compare" />

            <div className="container">
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSelected={comparedIds.includes(product.id)}
                    onToggleCompare={toggleCompare}
                    canAdd={comparedIds.length < 3}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="empty-state">
                  <p>No products found matching "{searchTerm}"</p>
                </div>
              )}
            </div>

            <CompareModal
              comparedProducts={comparedProducts}
              onRemoveProduct={removeProduct}
              onCompareNow={handleCompareNow}
              onClearAll={clearAll}
            />
          </div>
        }
      />
      <Route
        path="/compare"
        element={
          <ComparisonPage
            comparedProducts={comparedProducts}
            onRemoveProduct={removeProduct}
            onClearAll={clearAll}
          />
        }
      />
    </Routes>
  );
}

export default App;
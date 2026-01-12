import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function ComparisonPage({ comparedProducts, onRemoveProduct, onClearAll }) {
  const navigate = useNavigate();

  const handleClearAll = () => {
    onClearAll();
    navigate('/');
  };

  if (comparedProducts.length < 2) {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <button
            className="back-btn"
            onClick={() => navigate('/')}
            aria-label="Go back"
          >
            ← Back
          </button>
          <div className="empty-state">
            <p>Please select at least 2 products to compare</p>
          </div>
        </div>
      </div>
    );
  }

  const allFeatures = new Set();
  comparedProducts.forEach(product => {
    Object.keys(product.features).forEach(key => allFeatures.add(key));
  });

  const featureKeys = Array.from(allFeatures);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <button
          className="back-btn"
          onClick={() => navigate('/')}
          aria-label="Go back"
        >
          ← Back
        </button>

        <section className="comparison-section" aria-label="Product comparison">
          <div className="comparison-header">
            <h2>Compare Products ({comparedProducts.length}/3)</h2>
            <button
              className="clear-btn"
              onClick={handleClearAll}
              aria-label="Clear all comparisons"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClearAll();
                }
              }}
            >
              Clear All
            </button>
          </div>

          <div className="comparison-grid">
            {comparedProducts.map((product) => (
              <div key={product.id} className="comparison-card">
                <button
                  className="remove-btn"
                  onClick={() => onRemoveProduct(product.id)}
                  aria-label={`Remove ${product.name} from comparison`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onRemoveProduct(product.id);
                    }
                  }}
                >
                  ×
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  style={{ marginBottom: '1rem' }}
                />
                <h3 className="product-name">{product.name}</h3>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">₹{product.price.toLocaleString('en-IN')}</div>
                <table className="comparison-table">
                  <tbody>
                    {featureKeys.map((key) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td className={getValueClass(comparedProducts, key)}>
                          {product.features[key] || 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function getValueClass(products, featureKey) {
  const values = products.map(p => p.features[featureKey]).filter(v => v);
  const uniqueValues = new Set(values);
  
  if (uniqueValues.size > 1) {
    return 'different-value';
  }
  return '';
}

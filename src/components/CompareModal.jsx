export default function CompareModal({ comparedProducts, onRemoveProduct, onCompareNow, onClearAll }) {
  if (comparedProducts.length === 0) {
    return null;
  }

  return (
    <div className="compare-modal">
      <div className="compare-modal-content">
        <div className="compare-modal-items">
          <span className="compare-modal-label">
            Selected ({comparedProducts.length}/3):
          </span>
          <div className="compare-modal-product-list">
            {comparedProducts.map((product) => (
              <div key={product.id} className="compare-modal-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="compare-modal-item-image"
                />
                <div className="compare-modal-item-info">
                  <span className="compare-modal-item-name">{product.name}</span>
                  <span className="compare-modal-item-brand">{product.brand}</span>
                </div>
                <button
                  className="compare-modal-remove-btn"
                  onClick={() => onRemoveProduct(product.id)}
                  aria-label={`Remove ${product.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onRemoveProduct(product.id);
                    }
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="compare-modal-actions">
          <button
            className="compare-modal-clear-btn"
            onClick={onClearAll}
            aria-label="Clear all"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClearAll();
              }
            }}
          >
            Clear
          </button>
          {comparedProducts.length >= 2 && (
            <button
              className="compare-modal-compare-btn"
              onClick={onCompareNow}
              aria-label="Compare now"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onCompareNow();
                }
              }}
            >
              Compare
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
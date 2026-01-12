export default function ProductCard({ product, isSelected, onToggleCompare, canAdd }) {
  const handleClick = () => {
    if (!isSelected && !canAdd) {
      return;
    }
    onToggleCompare(product.id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="product-card"
      tabIndex={0}
      role="button"
      aria-label={`${product.name} by ${product.brand}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        loading="lazy"
      />
      <div className="product-brand">{product.brand}</div>
      <h3 className="product-name">{product.name}</h3>
      <div className="product-price">₹{product.price.toLocaleString('en-IN')}</div>
      <ul className="product-features">
        {Object.entries(product.features).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button
        className={`compare-btn ${isSelected ? 'selected' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.stopPropagation();
            handleClick();
          }
        }}
        disabled={!isSelected && !canAdd}
        aria-label={isSelected ? 'Remove from comparison' : 'Add to comparison'}
      >
        {isSelected ? '✓ Selected' : canAdd ? 'Add to Compare' : 'Max 3 products'}
      </button>
    </div>
  );
}
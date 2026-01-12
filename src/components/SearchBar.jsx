export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products by name or brand..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            onSearchChange('');
          }
        }}
        aria-label="Search products"
      />
    </div>
  );
}
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function Header({ showSearch = false, searchTerm = '', onSearchChange, title = 'Phone Compare' }) {
  return (
    <header className="header">
      <div className="header-top">
        <h1><span className="phone-icon">📱</span> {title}</h1>
        <ThemeToggle />
      </div>
      {showSearch && (
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      )}
    </header>
  );
}

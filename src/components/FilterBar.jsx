import "../styles/FilterBar.css";

export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Filtrar projetos por categoria">
      {categories.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={active === category}
          className={`filter-bar__item ${active === category ? "is-active" : ""}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

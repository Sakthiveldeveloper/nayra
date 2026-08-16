type Props = { value: string; onChange: (value: string) => void; onSubmit?: () => void };

export function SearchBar({ value, onChange, onSubmit }: Props) {
  return (
    <div className="search-box">
      <span>⌕</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit?.()}
        placeholder="Search a situation, topic or ask NAYRA..."
        aria-label="Search NAYRA"
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
}

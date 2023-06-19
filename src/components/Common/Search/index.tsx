interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps): JSX.Element => {
  return (
    <>
      <div className="form-control w-full max-w-xs pb-5 m-auto">
        <span className="sr-only">Search</span>
        <label className="label">
          <p>Search the image you desire...</p>
        </label>

        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search images by name..."
          type="text"
          name="search"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default SearchInput;

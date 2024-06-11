import "./App.css";
import { Countries } from "./components/countrie";
import { useCountries } from "./hooks/useCountries";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { countriesMapped } = useCountries();
  const { search, setSearch, alert } = useSearch();

  function handleSubmite(e) {
    e.preventDefault();
  }
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <header>
        <h1>Search Country</h1>
        <form onSubmit={handleSubmite}>
          <input value={search} onChange={handleChange} />
          <button>Search</button>
        </form>
      </header>
      <main>
        <p style={{ color: "red", padding: "3px" }}> {alert && alert}</p>
        <Countries country={countriesMapped} />
      </main>
    </>
  );
}

export default App;

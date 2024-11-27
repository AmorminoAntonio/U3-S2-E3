import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import History from "./components/books/history.json"

function App() {
  return (
    <>
      <MyNav
        navstyle="text-light mx-2 my-2 rounded-pill fw-lighter"
        link1="Home"
        link2="About"
        link3="Browse"
      />
      <Welcome  />
      <BookList books={History} />

      <MyFooter />
    </>
  );
}

export default App;

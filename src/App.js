import "./styles.css";
import { useState } from "react";

var booksDb = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],
  fiction: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" }
  ],
  business: [
    { name: "Never Split the Difference", rating: "3.5/5" },
    { name: "Loonshots", rating: "5/5" }
  ]
};

var booksGenre = Object.keys(booksDb);

export default function App() {
  var [selectedGenre, setGenre] = useState("javascript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>📚 goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      {booksGenre.map((books) => {
        return (
          <button onClick={() => genreClickHandler(books)}>{books}</button>
        );
      })}

      <hr />
      <ul>
        {booksDb[selectedGenre].map((book) => (
          <li>
            <div>{book.name}</div>
            <div>{book.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

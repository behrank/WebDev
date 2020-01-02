import React, { Component } from "react";
import { Link } from "react-router-dom";
import GenreMovies from "../pages/GenreDetail";

class MovieGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serials: []
    };
  }
 
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ serials: data.genres });
        //console.log(data);
      });
  }
  
  render() { 
    const { serials } = this.state;
    return (
      <div>
        <ul className="serial-list">
          {serials.map(serial => (
            <li key={serial.id}>
              <Link to={`/genre/${serial.id}`}>{serial.name}</Link>
            </li>
          ))}
        </ul>
        
      </div>
    );
  }
}


export default MovieGenre;




/*function MovieGenre() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=2761666cfb827ef7f1eaaa23c8aab037&language=en-US"
    );

    const items = await data.json();
    setItems(items.genres);
    //console.log(items.genres);
  };

  return (
    <div>
      <ul className="serial-list">
          {items.map(serial => (
            <li key={serial.id}>
              <Link to={`/genre/${serial.id}`}>{serial.name}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}*/
import React, {useState} from "react";
import "./style.scss";

export default function HeroBanner() {
   const [background, setBackground] = useState("");
   const [query, setQuery] = useState("");

  const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length>0){
          
        }
  }

  return(
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subtitle">Millions of movies, TV shows and people
             to discover.
            Explore now.</span>

            <div className="searchInput">
              <input type="text" placeholder="Search for a movie or tv show...." onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler}/>
              <button>Search</button>
            </div>
        </div>
      </div>
    </div>
  );
}







import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import './Banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
    return request;
  }
  console.log(movie);
  function truncate (str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  const list = document.querySelector('.list');;
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

list.addEventListener('click', function(){
  modalOverlay.classList.add('open-modal');

})


closeBtn.addEventListener('click', function(){
if(modalOverlay.classList.contains('open-modal')){
  modalOverlay.classList.remove('open-modal');
};

})
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org//t//p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className = 'banner_title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className = 'banner_buttons'>
            <button className = 'banner_button'>Play</button>
            <button className = 'banner_button list'>My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom"/>
      <div className = 'modal_overlay'>
      <div className = 'modal_container'>
        <h3>my movie list</h3>
        <button>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
    </header>
    
  );
};

export default Banner;

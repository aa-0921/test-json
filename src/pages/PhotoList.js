import "../assets/App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

export const PhotoList = () => {
  const [images, setImages] = useState([]);
  //検索フォームの文字列
  const [text, setText] = useState("");
  //今なんの検索文字列で検索しているか
  const [query, setQuery] = useState("apple");

  useEffect(() => {
    console.log("useEffectが走りました");
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}apple&client_id=${process.env.REACT_APP_CLIENT_ID}`
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setImages(data.results);
        })
    );
  }, [query]);
  return <div className="App"></div>;
};

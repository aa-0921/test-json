import "../assets/App.css";

import React, { useState, useEffect } from "react";
import { Button, CardColumns, Card } from "react-bootstrap";
import { Tags } from "../components/Tags";

export const PhotoList = () => {
  const [images, setImages] = useState([]);
  //検索フォームの文字列
  const [text, setText] = useState("");
  //今なんの検索文字列で検索しているか
  const [query, setQuery] = useState("apple");

  useEffect(() => {
    console.log("useEffectが走りました");
    console.log(process.env.REACT_APP_CLIENT_ID);

    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImages(data.results);
      });
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault(); //submitボタンにもともと備わっている画面遷移を打ち消す
    setQuery(text); //inputタグに入れられた文字が入る
    setText(""); //フォームはまっさらな状態に戻したい
    console.log("onSubmitが呼ばれました。");
  };

  return (
    <div className="App">
      <div className="main">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>
        <Button type="submit">Search</Button>

        {/* <button>Search</button> */}
      </div>
      <div className="container">
        <CardColumns>
          {images.map((image) => (
            <div key={image.id}>
              <Card>
                <Card.Img variant="top" src={image.urls.regular} />
                <Card.Body>
                  <Card.Title>{image.alt_description}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Text>
                    <Tags image={image} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardColumns>
      </div>
    </div>
  );
};

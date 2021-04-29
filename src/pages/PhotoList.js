import "../assets/App.css";

import React, { useState, useEffect } from "react";
import { Button, CardColumns, Card, Form, Image } from "react-bootstrap";
import { Tags } from "../components/Tags";

export const PhotoList = () => {
  const [images, setImages] = useState([]);
  //検索フォームの文字列
  const [text, setText] = useState("");
  //今なんの検索文字列で検索しているか
  const [query, setQuery] = useState("girl");

  useEffect(() => {
    console.log("useEffectが走りました");
    console.log(process.env.REACT_APP_CLIENT_ID);

    //表示するページ数をランダムに
    var min = 1;
    var max = 5;
    var page_num = Math.floor(Math.random() * (max + 1 - min)) + min;

    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page_num}&client_id=${process.env.REACT_APP_CLIENT_ID}` // `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      // `https://api.unsplash.com/search/collections?query=${query}&page="5"&client_id=${process.env.REACT_APP_CLIENT_ID}`
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
        <Form onSubmit={onSubmit}>
          <Form.Control
            size="lg"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Large text"
          />
          <Button type="submit">Search</Button>
        </Form>
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
                    <Tags image={image} />
                  </Card.Text>
                  <Card.Text>{image.user.bio}</Card.Text>
                  <Card.Text>
                    <a href={image.user.portfolio_url}>
                      {image.user.portfolio_url}
                    </a>
                  </Card.Text>

                  <Card.Text>{image.likes}</Card.Text>
                  <Card.Text>
                    <a href={image.links.html}>{image.links.html}</a>
                  </Card.Text>
                  <Image
                    src={image.user.profile_image.large}
                    rounded
                    className="w-16 h-16"
                  />
                  {/* <Card.Img
                    variant="bottom"
                    src={image.user.profile_image.large}
                  /> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardColumns>
      </div>
    </div>
  );
};

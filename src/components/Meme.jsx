import React from "react";
import memesData from "../memesData.jsx";

export default function Meme() {
  const getMemeImage = (e) => {
    e.preventDefault(); // ! So page doesn't refresh
    const randomNumber = Math.floor(
      Math.random() * memesData.data.memes.length
    );
    const imageUrl = memesData.data.memes[randomNumber].url;

    console.log(randomNumber, imageUrl);
  };

  return (
    <main>
      <form>
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button type="submit" className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </form>
    </main>
  );
}

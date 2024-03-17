import React from "react";

export default function Meme() {
  return (
    <main>
      <form>
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button type="submit" className="form--button">
          Get a new meme image 🖼️
        </button>
      </form>
    </main>
  );
}

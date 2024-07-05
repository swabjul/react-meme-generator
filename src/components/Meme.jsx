import { useState, useId } from "react"
import memesData from "../utils/memesData"


export default function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const {url} = memesArray[randomNumber]
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  const id = useId()


  return (
      <div className="form">
          <div className="form--input-2col" >
              <div className="col">
                  <label htmlFor={id + "top-text"}>Top Text</label>
                  <input 
                    id={id + "top-text"}
                    type="text" 
                    placeholder="Top Text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                  />
              </div>
              <div className="col">
                  <label htmlFor={id + "bottom-text"}>Top Text</label>
                  <input 
                    id={id + "bottom-text"}
                    type="text" 
                    placeholder="Bottom Text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                  />
              </div>
          </div>
          <button 
            className="form--button"
            onClick={getMemeImage}
          >Get a new meme image </button>
          <div className="meme--image">
            <img src={meme.randomImage} alt="" />
            <h2 className="meme--top-text">{meme.topText}</h2>
            <h2 className="meme--bottom-text">{meme.bottomText}</h2>
          </div>
          
      </div>
  )
}

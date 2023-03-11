import React, { useEffect, useState } from "react";
import dots from "../res/dots.gif";
import { useLocation } from "react-router-dom";
import { generateImage } from "../api";

const styl = {
  url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
  text: "Abstract",
};

const dum1 = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    prompt: "Abstract",
  },
  {
    url: "https://static.fotor.com/app/features/img/aiimage/advance/a%20beautiful%20girl%20illustration%20style%20image%20created%20by%20ai%20art.jpg",
    prompt: "Abstract",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
    prompt: "Abstract",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    prompt: "Abstract",
  },
  {
    url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
    prompt: "Abstract",
  },
];

function Generate() {
  const location = useLocation();
  const [style, setStyle] = useState(styl);
  const [history, setHistory] = useState(dum1);
  const [painting, setPainting] = useState(true);
  const [prompt, setPrompt] = useState(true);
  const [image, setImage] = useState({});
  const [input, setInput] = useState("")

  useEffect(() => {
    setPrompt(location.state.prompt);
  
    getImage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImage = async () => {
    setPainting(true);
    const image = await generateImage(prompt);

    console.log("api image", image);
    setPainting(false);
    setImage({ prompt: prompt, url: image.data[0].url });
  }

  console.log("gen image", image);

  return (
    <div className="p-4 h-screen">
      <div className="grid grid-cols-4">
        <div className="col-start-1 overflow-y-scroll h-screen col-span-1 border-r ">
          <div className="mx-auto pt-8 px-4">
            <h1 className="text-justify py-2 font-medium">
              What do you have in mind ?
            </h1>
            <div className="text-justify pb-4">
              <textarea
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                type="text"
                id="description"
                className="bg-gray-200 w-full p-2.5 border shadow-md border-white text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block"
                placeholder="Eg. Master Kung-Fu Cat "
                required
              />
            </div>
            <span className="text-sm font-light text-gray-600">
              Describe what you would like to be generated
            </span>
            <div className="py-4">
              <span className="text-lg pt-2">Theme and Style</span>
              <div className="flex items-center border rounded cursor-pointer">
                <img className="w-24" src={style.url} alt={style.text} />
                <div className="flex items-center ml-2 w-full justify-around">
                  <span className="">{style.text}</span>
                  <img
                    className="w-4 h-4"
                    src="https://img.icons8.com/material-rounded/24/000000/more-than.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setPrompt(input);
                getImage();
              }}
              className="py-2.5 text-center cursor-pointer text-white rounded bg-pink-600 hover:bg-pink-500"
            >
              GENERATE
            </div>
            <div className="pt-6">
              <span className="text-3xl border-b">Latest Searches</span>
              {history.slice(0, 4).map((history, index) => (
                <div className="p-2" key={index}>
                  Prompt: {history.prompt}
                  <img className="w-28 mx-auto" src={history.url} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-3 p-4">
          <div className="flex justify-between w-full border p-2 text-2xl">
            <span>Prompt: {image.prompt}</span>
            {painting && (
              <div className="flex items-center gap-2">
                Painting
                <img src={dots} alt="loading" />
              </div>
            )}
          </div>
          <div className="min-h-[24rem] md:min-h-[30rem] items-center mt-4 border">
            <img
              className="h-[24rem] md:min-h-[30rem] py-2 mx-auto"
              src={image.url}
              alt={prompt}
              onLoad={() => {
                setPainting(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate;

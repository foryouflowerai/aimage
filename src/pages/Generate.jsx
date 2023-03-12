import React, { useEffect, useState } from "react";
import dots from "../res/dots.gif";
import { useLocation } from "react-router-dom";
import { generateImage } from "../api";
import axios from "axios";

const cards = [
  {
    url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
    text: "Abstract",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    text: "Anime",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
    text: "Photo",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
    text: "Photo",
  },
  {
    url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
    text: "Abstract",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    text: "Anime",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
    text: "Photo",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    text: "Anime",
  },
];

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

// const dum3 = {
//   title: "Cat and mouse",
//   fields: {
//     url: "https://thumbs.dreamstime.com/b/cat-mouse-looking-each-other-generative-ai-cat-mouse-looking-each-other-generative-ai-271514770.jpg",
//     prompt: "Cat and mouse",
//     style: "Abstract",
//     creator: 22,
//   },
// };

function Generate() {
  const location = useLocation();
  // const [user, setUser] = useState(null);
  const [style, setStyle] = useState(cards[0]);
  const [isStyle, setIsStyle] = useState(false);
  const [history, setHistory] = useState(dum1);
  const [painting, setPainting] = useState(false);
  const [prompt, setPrompt] = useState({});
  const [image, setImage] = useState({});
  const [input, setInput] = useState({ style: style.text });
  // const [imageData, setImageData] = useState(dum3);

  useEffect(() => {
    // const user = JSON?.parse(localStorage?.getItem("aimageuser"));
    // user && setUser(user);

    const getHistory = async () => {
      fetch(`https://aimage-sheh.onrender.com/images`)
        .then((res) => res.json())
        .then((data) => {
          console.log("hist", data);
          setHistory(data.edges)
        });
    }

    getHistory()

    if (!location.state?.prompt) {
      return;
    }
    setPrompt(location.state.prompt);
    const homePrompt = location.state.prompt;

    const getImage1 = async () => {
      console.log("gens1 prompt", homePrompt);
      setPainting(true);
      const image = await generateImage(homePrompt);

      console.log("api1 image", image);
      setPainting(false);
      setImage({ prompt: prompt.text, url: image.data[0].url });

      
      const newImage = {node: {
        url: image.data[0].url,
        prompt: homePrompt.text,
        style: homePrompt.style,
        creator_id: "clf5ly87qf6o60bmr6yqbb762",
      }};
      setHistory((history) => [newImage, ...history]);
      addImage(newImage);
    };

    getImage1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImage = async () => {
    console.log("gens prompt", prompt);
    setPainting(true);
    const image = await generateImage(prompt);

    console.log("api image", image);
    setPainting(false);
    setImage({ prompt: prompt.text, url: image.data[0].url });
    const newImage = {node: {
      url: image.data[0].url,
      prompt: prompt.text,
      style: prompt.style,
      creator_id: "clf5ly87qf6o60bmr6yqbb762",
    }};
    setHistory((history) => [newImage, ...history]);
    addImage(newImage);
  };

  const addImage = (image) => {
    console.log("add image", image);
    axios.post("https://aimage-sheh.onrender.com/images", image).then((res) => {
      console.log(res.data)
    });
  };

  function downloadImage(src) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // This tells the browser to request cross-origin access when trying to download the image data.
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
    img.src = src;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement("a");
      a.download = "download.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
  }

  console.log("gen image", image);
  console.log("gen history", history);
  console.log("gens2 prompt", prompt);

  const ImageCard = () => {
    return (
      <div className="text-justify mb-4">
        <span className="text-2xl">Choose a Preset Theme</span>
        <div className="flex justify-around md:justify-start flex-wrap gap-4 py-2">
          {cards.map((card, index) => {
            return (
              <div
                onClick={() => {
                  setInput({ ...input, style: card.text });
                  setIsStyle(false);
                  setStyle(card);
                }}
                className=" md:w-44 cursor-pointer relative rounded hover:opacity-80 hover:bg-black hover:ring-blue-500 focus:ring-blue-500 focus:border-blue-500"
                key={index}
              >
                <div
                  className="absolute -z-10"
                  style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    filter: "brightness(40%)",
                    width: window.innerWidth <= 768 ? "8rem" : "11rem",
                    height: window.innerWidth <= 768 ? "5.5rem" : "7rem",
                    backgroundBlendMode: "darken",
                    borderRadius: "3px",
                  }}
                ></div>
                <div className="pt-16 w-36 text-white md:pt-20 px-2 py-4">
                  {card.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 md:h-screen">
      <div className="md:grid grid-cols-4">
        <div className="col-start-1 pb-24 md:overflow-y-scroll md:h-screen col-span-1 md:border-r ">
          <div className="mx-auto pt-8 px-4">
            <h1 className="text-justify py-2 font-medium">
              What do you have in mind ?
            </h1>
            <div className="text-justify pb-4">
              <textarea
                onChange={(e) => {
                  setInput({ ...input, text: e.target.value });
                }}
                type="text"
                id="description"
                className="bg-gray-200  w-full p-2.5 border shadow-md text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block"
                placeholder="Eg. Master Kung-Fu Cat "
                required
              />
            </div>
            <span className="text-sm font-light text-gray-600">
              Describe what you would like to be generated
            </span>
            <div className="py-4">
              <span className="text-lg pt-2">Theme and Style</span>
              <div
                onClick={() => {
                  setIsStyle(true);
                }}
                className="flex items-center border rounded cursor-pointer"
              >
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
            <div className="pt-6 hidden md:block">
              <span className="text-3xl border-b">Latest Searches</span>
              {history.length && history.slice(0, 4).map((history, index) => (
                <div className="p-2" key={index}>
                  Prompt: {history.node?.prompt}
                  <img
                    className="w-28 mx-auto"
                    src={history.node?.url}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-3 p-4">
          {isStyle ? (
            <ImageCard />
          ) : (
            <div className="">
              <div className="">
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
                    alt={prompt?.text}
                    onLoad={() => {
                      setPainting(false);
                    }}
                  />
                </div>
              </div>
              <div
                onClick={() => {
                  downloadImage(image.url);
                }}
                className="float-right hidden cursor-pointer bg-green-600 mt-2 p-2 px-4 rounded "
              >
                Download
              </div>
            </div>
          )}
        </div>
        <div className="pt-6 md:hidden">
          <span className="text-3xl border-b">Latest Searches</span>
          {history.slice(0, 4).map((history, index) => (
            <div className="p-2" key={index}>
              Prompt: {history.node?.prompt}
              <img className="w-28 mx-auto" src={history.node?.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Generate;

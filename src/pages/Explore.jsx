import React, { useEffect, useState } from "react";

const dum1 = [
  {
    node: {
      url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
      name: "Abstract",
    },
  },
  {
    node: {
      url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
      name: "Abstract",
    },
  },
  {
    node: {
      url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
      name: "Abstract",
    },
  },
  {
    node: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
      name: "Abstract",
    },
  },
  {
    node: {
      url: "https://static.fotor.com/app/features/img/aiimage/advance/a%20beautiful%20girl%20illustration%20style%20image%20created%20by%20ai%20art.jpg",
      name: "Abstract",
    },
  },
  {
    node: {
      url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
      name: "Abstract",
    },
  },
  {
    node: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
      name: "Abstract",
    },
  },
  {
    node: {
      url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
      name: "Abstract",
    },
  },
];

function Explore() {
  const [images, setImages] = useState(dum1);

  useEffect(() => {
    const getImages = async () => {
      fetch(`https://aimage-sheh.onrender.com/images`)
        .then((res) => res.json())
        .then((data) => {
          console.log("hist", data);
          setImages((arts) => arts.concat(data.edges));
        });
    };

    getImages();
  }, []);

  const ArtCard = () => {
    return (
      //   <div className="flex gap-3 justify-between flex-wrap">
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.map((image, index) => {
          return (
            <div className="relative grow" key={index}>
              <img
                className="w-full h-60 object-cover"
                src={image.node.url}
                alt={image.node.name}
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
                <div className="text-white absolute inset-0 flex justify-center items-center">
                  <p>{image.node.name}</p>
                </div>
              </div>
              <div className="text-white opacity-70 px-2 bg-black rounded absolute flex items-center cursor-pointer font-medium -mt-8 ">
                <img
                  className="ml-3 w-8 h-8 "
                  src="https://img.icons8.com/ios/50/FFFFFF/visible--v1.png"
                  alt=""
                />{" "}
                1300
                <img
                  className="ml-3 w-6 h-6"
                  src="https://img.icons8.com/pastel-glyph/64/FFFFFF/hearts--v1.png"
                  alt=""
                />{" "}
                246
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className=" p-4">
      <div className="text-4xl py-4 font-bold">Explore Arts</div>
      <h3 className="pb-4 text-gray-400">
        See what other amazing designers and artist have come up with {":)"}
      </h3>
      <div className="">
        <ArtCard />
      </div>
    </div>
  );
}

export default Explore;

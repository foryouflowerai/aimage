import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login({setLogin}) {
   const navigate = useNavigate();
  const [creatorData, setCreatorData] = useState({
    email: "janedoe@gmail.com",
    name: "Jane Doe",
    title: "Jane Doe",
  });
  const [invalid, setInvalid] = useState(false);
  const [user, setUser] = useState({ password: "" });
  const [submit, setSubmit] = useState(false);
  const [passView, setPassView] = useState(false);

  const yourAccessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYWltYWdlLmxvY2FsIiwiaWF0IjoxNjc4NTQ3NjQ1LCJuYmYiOjE2Nzg1NDc2NDUsImV4cCI6MTY3OTE1MjQ0NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.6svM4-Buvny4gnJcc5UMH111HLHNJbZUtzfMoebYaVw";

  const handleSubmit = () => {
    console.log("adding", creatorData);
    setSubmit(true);
    fetch(`http://aimage.local/wp-json/wp/v2/creators`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${yourAccessToken}`,
      },
      body: JSON.stringify({
        title: creatorData.title,
        fields: {
          email: creatorData.email,
          name: creatorData.name,
        },
      }),
    })
      .then((response) => {
        const res = response.json();
        if (res.data) {
          setLogin({ ...res.data[user.group], type: user.group });
          localStorage.setItem(
            "user",
            JSON.stringify({ ...res.data[user.group], type: user.group })
          );
          res.json();
          navigate("/");
        } else {
          setInvalid(true);
        }
        setSubmit(false);
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleInput = (event) => {
     const target = event.target;
     // const value = target.type === "checkbox" ? target.checked : target.value;
     const value = target.value;
     const name = target.name;

     setUser({ ...user, [name]: value });
  }

  return (
    <div className="h-screen p-2 flex justify-center w-full text-black">
      <div
        className="mt-4"
        onClick={() => {
          setInvalid(false);
        }}
      >
        <div className="mb-4">
          <label>
            Your Email <span className="text-red-500">*</span>
          </label>
          <div className="flex relative items-center cursor-pointer">
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              name="email"
              value={user.email}
              className="block shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="eg: johndoe@gmail.com"
            />
            <div className="cursor-pointer right-0 absolute px-2 text-gray-700">
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png"
                alt="user"
                className="fill-current w-8"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label>
            userName <span className="text-red-500">*</span>
          </label>
          <div className="flex relative items-center cursor-pointer">
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              name="userName"
              value={user.userName}
              className="block shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="eg: 01john"
            />
            <div className="cursor-pointer right-0 absolute px-2 text-gray-700">
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png"
                alt="user"
                className="fill-current w-8"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 ">
          <label>
            Password <span className="text-red-500">*</span>
          </label>
          <div className="flex relative items-center">
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              name="password"
              value={user.password}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pass-input"
              type={`${passView ? "text" : "password"}`}
            />
            <div className="cursor-pointer right-0 absolute px-2 text-gray-700">
              <img
                onClick={() => {
                  setPassView(!passView);
                }}
                src={`${
                  passView
                    ? "https://img.icons8.com/ios-filled/50/000000/visible--v2.png"
                    : "https://img.icons8.com/ios/50/000000/closed-eye.png"
                }`}
                alt="user"
                className="fill-current w-8 p-1"
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          {submit ? (
            <Button />
          ) : (
            <div>
              <button
                onClick={() => handleSubmit()}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                type="submit"
              >
                Login
              </button>
              {!window.navigator.onLine && (
                <span className="text-sm mt-2 flex flex-col">
                  <span className="text-red-600">Error!</span> Please check your
                  network connection
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

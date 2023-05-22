import React from "react";
import { GoogleLogin } from '@react-oauth/google';

function Navbar() {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
  return (
    <>
      <div className={`fixed bg-[#141e30] top-0 left-0 w-full flex items-center justify-between`}>
        <div className="flex">
          <div className="flex items-center">
            <img src="camera.svg" className="w-20 pl-4" alt="" />
            <p className="font-logo text-emerald-400 text-2xl">TypeTweak</p>
          </div>
          <ul className="flex items-center ml-10">
            <li className="px-4 py-3 text-white  hover:text-emerald-400">
              <a href="/text2img">Text to Image</a>
            </li>
            <li className="px-4 py-3 text-white  hover:text-emerald-400">
              <a href="/pix2pix">Prompt Editing</a>
            </li>
            <li className="px-4 py-3 text-white  hover:text-emerald-400">
              <a href="/img-restoration">Image Restoration</a>
            </li>
            <li className="px-4 py-3 text-white  hover:text-emerald-400">
              <a href="/makeover">AI Face Makeover</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end px-4 w-1/5">
        <GoogleLogin useOneTap={true} type="standard" text="signin_with" onSuccess={responseMessage} onError={errorMessage} />
        </div>
      </div>
    </>
  );
}

export default Navbar;

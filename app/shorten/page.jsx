"use client";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        // alert(result.message);
        toast.success("Successfully Added!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mt-60 rounded-lg p-8 flex flex-col gap-12 relative bg-slate-900 mx-auto max-w-lg my-16">
      <h1 className="font-bold text-center text-3xl">
        Generate your Short URLs
      </h1>
      <div className="flex flex-col gap-5">
        <input
          onChange={(e) => {
            seturl(e.target.value);
          }}
          value={url}
          className="px-4 py-4 focus:outline-purple-800 rounded-2xl bg-white text-black"
          type="text"
          placeholder="Enter URL"
        />
        <input
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
          value={shorturl}
          type="text"
          className="px-4 py-4 focus:outline-purple-800 rounded-2xl bg-white text-black"
          placeholder="Enter preferred Short URL"
        />
        <button
          onClick={generate}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
        >
          Generate
        </button>
      </div>
      {generated && (
        <code className="hover:text-purple-500 text-center">
          Your Link:{" "}
          <Link target="_blank" href={generated}>
            {generated}
          </Link>
        </code>
      )}
    </div>
  );
};

export default Shorten;

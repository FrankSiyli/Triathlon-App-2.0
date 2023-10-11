"use client";
import Alert from "@/app/components/Alerts/Alert";
import BackButton from "@/app/components/Buttons/BackButton/BackButton";
import NavBar from "@/app/components/NavBar/NavBar";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Page = () => {
  const { data, isLoading: fetchingPosts } = useSWR(
    "/api/mongoDbFetchPosts",
    fetcher
  );
  const fetchedPosts = data?.posts;
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPost, setUserPost] = useState("");
  const [error, setError] = useState("");

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const session = await getSession();
    if (!userPost) {
      setShowAlert(true);
      setError("Bitte fülle alle Felder aus.");
      setIsLoading(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    try {
      const user = session.user.name;

      const res = await fetch("/api/mongoDbSendPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "createPost",
          name: session.user.name,
          email: session.user.email,
          post: userPost,
        }),
      });

      if (res.ok) {
        setUserPost("");
      }
    } catch (error) {
      setIsLoading(false);
      setShowAlert(true);
      setError("Etwas ist schief gelaufen.");
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    setIsLoading(false);
  };

  const handleLikePost = async (postId) => {
    try {
      const response = await fetch("/api/mongoDbSendPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "updateLikes",
          id: postId,
        }),
      });
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <>
      <BackButton href="/profil" />
      <p className="mx-auto w-40 text-center -mt-10">Wünsch dir was!</p>
      <div className="mb-20">
        <div className="w-11/12   border border-first/50 linear-background rounded-md p-4 my-20 mx-auto max-w-xl text-center">
          <p>
            Du wünscht dir eine neue Funktion, oder einen neuen Trainingsplan in
            der App?
          </p>
          <p>Dann entscheide einfach mit, was als nächstes kommt.</p>
          <input
            className="input border border-transparent m-5 text-center"
            type="string"
            value={userPost}
            placeholder="Wunsch"
            onChange={(e) => setUserPost(e.target.value)}
          />

          <button
            onClick={handleCreatePost}
            className="btn btn-sm flex w-40 mx-auto m-5 border border-transparent bg-third text-first shadow-xl"
          >
            Senden
          </button>
        </div>
        {fetchedPosts?.map((post) => (
          <div
            key={post._id}
            className="relative w-11/12 my-5 shadow-md p-2 rounded-md mx-5 max-w-xl text-center "
          >
            <div className="absolute top-0 left-2 ">{post.name}:</div>
            <div className="mb-10 mt-5 mx-3  overflow-hidden">{post.post}</div>
            <div className="text-sm absolute bottom-1 left-2">
              gefällt {post.likes} mal
            </div>

            <button
              className="absolute bottom-1 right-2"
              onClick={() => handleLikePost(post._id)}
            >
              <span className="text-xl">👍</span>
            </button>
          </div>
        ))}
      </div>
      {error && showAlert && <Alert alertText={error} />}
      <NavBar />
    </>
  );
};

export default Page;

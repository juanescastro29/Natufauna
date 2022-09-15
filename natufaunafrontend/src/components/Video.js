import React from "react";

function Video() {
  return (
    <div className="container text-center p-4">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VkWGzzXIgJg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border border-2 border-dark rounded"
      ></iframe>
    </div>
  );
}

export default Video;

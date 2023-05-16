import React from "react";


interface MediaProps {
  videoUrl: string;
  imageUrls: string[];
}

const Media: React.FC<MediaProps> = ({ videoUrl, imageUrls }) => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Media ${index}`} />
      ))}
    </div>
  );
};

export default Media;

import React from "react";

import "./Home.scss";
import ImageHero from "../../components/ImageHero";
import HomeBlogPost from "../../components/HomeBlogPost";
import Media from "../../components/Media";

const heroImageUrl =
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const articleImageUrl =
  "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Home: React.FC = () => {
  return (
    <div className="page home">
      <ImageHero imageUrl={heroImageUrl} title={"Lorem Ipsum"} />
      <HomeBlogPost articleImageUrl={articleImageUrl} />
      <Media videoUrl={"null"} imageUrls={["null"]} />
    </div>
  );
};

export default Home;

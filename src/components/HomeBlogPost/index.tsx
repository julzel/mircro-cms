import React from "react";
import TextBlock from "../TextBlock";

import "./HomeBlogPost.scss";

interface HomeBlogPostProps {
  articleImageUrl: string;
}

const HomeBlogPost: React.FC<HomeBlogPostProps> = ({ articleImageUrl }) => {
  return (
    <article className="article">
      <h2 className="article-title">Est esse culpa aliquip eu</h2>
      <div className="article-content">
        <div>
          <TextBlock>
            Cillum deserunt nisi labore laboris. Anim tempor pariatur do magna
            consequat mollit cillum deserunt do cupidatat laborum eu.
            Consectetur laboris fugiat cupidatat dolore voluptate minim sint non
            ex. Incididunt ipsum excepteur proident occaecat amet nulla sint est
            Lorem cupidatat.
          </TextBlock>
          <TextBlock>
            Duis deserunt occaecat aliqua Lorem laboris eu ut ut minim dolor
            laborum. Cillum minim dolor ullamco exercitation laborum do
            adipisicing. Fugiat et ipsum nostrud id excepteur amet. Velit minim
            amet veniam eiusmod tempor. Amet pariatur ea fugiat ut cillum
            proident elit adipisicing. Veniam tempor labore cillum incididunt eu
            elit nostrud eu eu occaecat non fugiat id. Aliqua magna ex nostrud
            incididunt ullamco velit non.
          </TextBlock>
        </div>
        <div>
          <img
            src={articleImageUrl}
            alt="HomeBlogPost"
            className="article-image"
          />
        </div>
        <div>
          <TextBlock>
            Duis deserunt occaecat aliqua Lorem laboris eu ut ut minim dolor
            laborum. Cillum minim dolor ullamco exercitation laborum do
            adipisicing. Fugiat et ipsum nostrud id excepteur amet. Velit minim
            amet veniam eiusmod tempor. Amet pariatur ea fugiat ut cillum
            proident elit adipisicing. Veniam tempor labore cillum incididunt eu
            elit nostrud eu eu occaecat non fugiat id. Aliqua magna ex nostrud
            incididunt ullamco velit non.
          </TextBlock>
        </div>
      </div>
    </article>
  );
};

export default HomeBlogPost;

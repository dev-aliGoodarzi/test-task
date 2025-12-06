// React
import React from "react";
// React

// Models
import { I_WorkArticle } from "@/Models/Work/Work.interfaces";
// Models

// Components
import Accordion from "@/Components/Common/Accordion/Accordion";
import Article from "../Article/Article";
// Components

// Animations
import { Fade } from "react-awesome-reveal";
// Animations

type T_LocalArticleProps = {
  articles: I_WorkArticle[];
  writerName: string;
};

const LocalArticle: React.FunctionComponent<T_LocalArticleProps> = ({
  articles,
  writerName,
}) => {
  return (
    <Accordion title={`${writerName} (${articles.length})`}>
      {articles.map((item, index) => (
        <Fade
          direction={"left"}
          key={`${index}${item.DOI}${item.abstract}`}
          delay={index * 200}
        >
          <Article data={item} disableDND />
        </Fade>
      ))}
    </Accordion>
  );
};

export default LocalArticle;

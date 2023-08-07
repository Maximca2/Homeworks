import React from "react";
import ContentLoader from "react-content-loader";

import style from "./SkeletonForMainpageCards.module.scss";

const SkeletonForMainpageCards = ({ cardsLength }) => {
  return Array(cardsLength)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={style.card}>
          <Skeleton />
        </div>
      );
    });
};

export default SkeletonForMainpageCards;

const Skeleton = (props) => (
    <ContentLoader 
    speed={3}
    width={500}
    height={600}
    viewBox="0 0 500 600"
    backgroundColor="#d4d4d4"
    foregroundColor="#a8a4a4"
    {...props}
  >
    <rect x="48" y="40" rx="3" ry="3" width="150" height="150" /> 
    <rect x="60" y="198" rx="4" ry="4" width="127" height="21" /> 
    <rect x="14" y="240" rx="6" ry="6" width="220" height="21" /> 
    <rect x="40" y="300" rx="6" ry="6" width="165" height="44" bbox={10}/>
    <rect x="40" y="400" rx="7" ry="7" width="165" height="44" bbox={10}/> 
  </ContentLoader>
);

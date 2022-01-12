import React from "react";

const Data = ({ data }) => {
  return (
    <>
      <div>
        <a href={data.formattedUrl} target="blank">
          {data.displayLink}
        </a>
        <a href={data.formattedUrl} target="blank">
          <h3>{data.title}</h3>
        </a>
        <p>{data.snippet}</p>
      </div>
    </>
  );
};

export default Data;

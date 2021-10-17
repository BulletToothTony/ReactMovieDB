import React, { useContext } from "react";
import { AppContext } from "../context";
import Film from "./Film";

const Filmlist = () => {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <section className="section">
        <h2 className="section-title">
            Films
        </h2>

      <div className="films-centre">
        {data.films.map((item) => {
          return <Film key={item.imdbID} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Filmlist;

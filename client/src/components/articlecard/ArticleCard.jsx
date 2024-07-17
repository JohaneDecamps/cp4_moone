import PropTypes from "prop-types";
import "./ArticleCard.css"

export default function ArticleCard({ article }) {
  const { reference, image, description, date } = article;

  return (
    
    <section className="container-card">
 

      <img src={image} alt="" className="image-card" />
      <div className="explication-card">
        <h1 className="reference-card"> {reference} </h1>
        <h2 className="description-card"> {description} </h2>
        <p> {date}</p>
      </div> 
    </section>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  const { reference, image, imagetwo, description } = article;

  return (
    <section className="container-card">
      <img src={image} alt="" className="image-card" />
      <img src={imagetwo} alt="" className="image-two" />
      <div className="explication-card">
        <h1 className="reference-card"> {reference} </h1>
        <h2 className="description-card"> {description} </h2>
      </div>
    </section>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

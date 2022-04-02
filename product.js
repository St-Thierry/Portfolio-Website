import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-outine">
        <div className="p-dec"></div>
        <div className="p-dec"></div>
        <div className="p-dec"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;

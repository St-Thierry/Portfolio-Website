import "./productlist.css";
import Product from "../product/product.js";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pd">
      <div className="pd-texts">
        <h1 className="pd-title">Develop & Design. It's What I Do.</h1>
        <p className="pd-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pd-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

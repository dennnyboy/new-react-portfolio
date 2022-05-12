import "./productlist.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Work</h1>
        <p className="pl-desc">
          These are just a couple examples of my recent work! To view more
          please follow me on Github.
        </p>
      </div>
      <div className="pl-list">
        {products.map((products) => (
          <Product
            key={products.id}
            img={products.img}
            link={products.link}
            text={products.text}
            title={products.title}
            button1={products.button1}
            button2={products.button2}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "Sandwich",
    description: "With beef and salad",
  },
  {
    id: "p2",
    price: 10,
    title: "Fettuccine Alfredo",
    description: "With cream cheese",
  },
  {
    id: "p3",
    price: 15,
    title: "Beef with vegetables",
    description: "With souce",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

import Styles from "../../styles/home/products.module.css";
import Product from "./_product";
export function Products({ allProducts }) {
  console.log({ allProducts });

  return (
    <div className={Styles.wrapper}>
      {/* Here Dynamic Filters will be Rendered */}
      {/* Contain Few Common Filters and some user based or content based or location based filters */}
      <div id="filters" className={Styles.filtersWrapper}>
        Hello
      </div>
      <div className={Styles.productListWrappers}>
        {Array.isArray(allProducts) && allProducts.length > 0
          ? allProducts.map(
              (
                { name, slideViewImages, price, ratting, productId, voteCount },
                index
              ) => {
                return (
                  <Product
                    key={index}
                    name={name}
                    slideViewImages={slideViewImages}
                    price={price}
                    ratting={ratting}
                    productId={productId}
                    voteCount={voteCount}
                  />
                );
              }
            )
          : null}
      </div>
    </div>
  );
}

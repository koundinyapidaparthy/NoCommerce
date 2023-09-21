import Styles from "../../styles/home/products.module.css";
import Image from "next/image";
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
          ? allProducts.map(({ name, slideViewImages, price }, index) => {
              console.log(slideViewImages);
              return (
                <div key={index} className={Styles.eachProduct}>
                  <Image
                    src={`${slideViewImages[0]}`}
                    alt={"product" + name}
                    width={300}
                    height={300}
                    objectFit="cover"
                    className={Styles.productImage}
                  />
                  <div className={Styles.title}>
                    {name} - {price}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Styles from "../../styles/home/products.module.css";
import clsx from "clsx";

export default function ProductImage({
  name,
  slideViewImages,
  price,
  ratting,
  productId,
  voteCount,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let clearImageUpdate;
  console.log(currentImageIndex);
  function imageUpdateOnHover() {
    if (currentImageIndex === 2) {
      setCurrentImageIndex(currentImageIndex - currentImageIndex);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }
  const noOfRattings = [0, 1, 2, 3, 4];
  return (
    <Link
      href={`/product?id=${productId}`}
      className={Styles.eachProduct}
      onMouseOver={() => {
        clearImageUpdate = setTimeout(imageUpdateOnHover, 1000);
      }}
      onMouseLeave={() => {
        clearTimeout(clearImageUpdate);
      }}
    >
      <div className={Styles.productImageWrapper}>
        <Image
          src={`${slideViewImages[currentImageIndex]}`}
          alt={"product" + name}
          width={300}
          height={300}
          objectFit="cover"
          className={Styles.productImage}
        />
        <div
          className={clsx(
            Styles.scrollButton1,
            currentImageIndex === 0 ? Styles.activeScrollButtonBackGround : ""
          )}
        ></div>
        <div
          className={clsx(
            Styles.scrollButton2,
            currentImageIndex === 1 ? Styles.activeScrollButtonBackGround : ""
          )}
        ></div>
        <div
          className={clsx(
            Styles.scrollButton3,
            currentImageIndex === 2 ? Styles.activeScrollButtonBackGround : ""
          )}
        ></div>
      </div>
      <div className={Styles.title}>
        {name} - {price}
      </div>
      <div className={Styles.rattingwrapper}>
        {/* <div className={Styles.rattingText}>
                        Ratting - {ratting}
                      </div> */}
        <div className={Styles.ratting} title={`${ratting} of 5`}>
          {noOfRattings.map(({}, index) => {
            if (index <= ratting - 1) {
              return (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  fontSize={10}
                  className={Styles.listOfStars}
                />
              );
            }
          })}
          {ratting % 2 != 0 ? (
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              fontSize={10}
              className={Styles.listOfStars}
            />
          ) : null}
        </div>
        <div className={Styles.voteCount}>{voteCount}</div>
      </div>
    </Link>
  );
}

import { useState, createRef, useRef, useEffect, useMemo } from "react";
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
  const noOfRattings = [0, 1, 2, 3, 4];
  const imageInstance = useRef(null);
  const [currentHighlightedImageIndex, setCurrentHighlightedImageIndex] =
    useState(0);
  const currentMemorizedIndex = useRef(0);
  function imageUpdateOnHover() {
    const nextImageIndex =
      currentMemorizedIndex.current === slideViewImages.length - 1
        ? 0
        : currentMemorizedIndex.current + 1;
    setCurrentHighlightedImageIndex(nextImageIndex);
    currentMemorizedIndex.current = nextImageIndex;
  }
  return (
    <Link
      href={`/product?id=${productId}`}
      className={Styles.eachProduct}
      onMouseOver={() => {
        if (!imageInstance.current) {
          imageInstance.current = setInterval(imageUpdateOnHover, 1500);
        }
      }}
      onMouseOut={() => {
        clearInterval(imageInstance.current);
        imageInstance.current = null;
      }}
    >
      <div className={Styles.productImageWrapper}>
        <Image
          src={`${slideViewImages[currentHighlightedImageIndex]}`}
          alt={"product" + name}
          width={300}
          height={300}
          objectFit="cover"
          className={Styles.productImage}
        />
        <div
          className={clsx(
            Styles.scrollButton1,
            currentHighlightedImageIndex === 0
              ? Styles.activeScrollButtonBackGround
              : ""
          )}
        ></div>
        <div
          className={clsx(
            Styles.scrollButton2,
            currentHighlightedImageIndex === 1
              ? Styles.activeScrollButtonBackGround
              : ""
          )}
        ></div>
        <div
          className={clsx(
            Styles.scrollButton3,
            currentHighlightedImageIndex === 2
              ? Styles.activeScrollButtonBackGround
              : ""
          )}
        ></div>
      </div>
      <div className={Styles.title}>
        {name} - {price}
      </div>
      <div className={Styles.rattingwrapper}>
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

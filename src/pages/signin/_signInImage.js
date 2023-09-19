import { createRef, useState } from "react";
import styles from "../../styles/signin.module.css";
import Image from "next/image";
export default function SiginImage({ userImageRef }) {
  const [userImageStyleValue, setUserImageStyleValue] = useState(null);
  const [showImage, setShowImage] = useState(false);
  return (
    <div className={styles.userImage}>
      <>
        <Image
          src={"/Images/Edit.png"}
          alt="Edit Icon"
          width={20}
          height={20}
          className={styles.editImage}
        />
        <input
          ref={userImageRef}
          type="file"
          placeholder="Upload Your Image"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(event) => {
            const image = URL.createObjectURL(event.target.files[0]);
            console.log(image);
            setUserImageStyleValue(image);
          }}
          style={
            userImageStyleValue
              ? {
                  backgroundImage: `url('${userImageStyleValue}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.5,
                }
              : {}
          }
        />
      </>
      {userImageStyleValue ? (
        <>
          <Image
            src={"/Images/eye.png"}
            width={17}
            height={17}
            className={styles.eyeImage}
            alt={"EyeImaeg"}
            onClick={() => {
              setShowImage(true);
            }}
          />
        </>
      ) : null}
      {showImage ? (
        <div className={styles.viewImage}>
          <Image
            src={userImageStyleValue}
            width={250}
            height={250}
            className={styles.editViewImage}
          />
          <div
            className={styles.closeViewImage}
            onClick={() => {
              setShowImage(false);
            }}
          >
            close
          </div>
        </div>
      ) : null}
    </div>
  );
}

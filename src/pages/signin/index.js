import { createRef, useEffect } from "react";
import styles from "../../styles/signin.module.css";
import { title } from "../login";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import SiginImage from "./_signInImage";
import { useRouter } from "next/navigation";
const SignIn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const userImage = createRef(null);
  const firstName = createRef(null);
  const lastName = createRef(null);
  const phoneNumber = createRef(null);
  const countryCode = createRef(null);
  const email = createRef(null);
  const password = createRef(null);
  const reEnterPassword = createRef(null);
  function signInByDetails() {
    const userImageVal = userImage.current.value;
    const firstNameVal = firstName.current.value;
    const lastNameVal = lastName.current.value;
    const phoneNumberVal = phoneNumber.current.value;
    const countryCodeVal = countryCode.current.value;
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const reEnterPasswordVal = reEnterPassword.current.value;
    console.log({
      userImageVal,
      firstNameVal,
      lastNameVal,
      phoneNumberVal,
      countryCodeVal,
      emailVal,
      passwordVal,
      reEnterPasswordVal,
    });
  }
  useEffect(() => {
    if (userName) {
      router.push("/home");
    }
  }, [userName]);
  if (userName) {
    console.log({ userName });
    return <div>Hi {userName} WelcomeBack!</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.divWrapper}>
        <div className={clsx(styles.welcome, title.className)}>No Commerce</div>
        <SiginImage userImageRef={userImage} />
        <div className={styles.userName}>
          <input type="text" placeholder="First Name" ref={firstName} />
          <input type="text" placeholder="Last Name" ref={lastName} />
        </div>
        <div className={styles.phoneNumber}>
          {/* Select Option for Country Code Selection */}
          <select ref={countryCode}>
            <option value={"+1"}>+1</option>
            <option value={"+91"}>+91</option>
          </select>
          <input type="number" placeholder="Phone Number" ref={phoneNumber} />
        </div>
        <div className={styles.email}>
          <input type="email" placeholder="Email" ref={email} />
        </div>
        <div className={styles.passwords}>
          <input type="password" placeholder="Create Password" ref={password} />
          {/* Password Icon */}
          <input
            type="text"
            placeholder="Re-Enter Password"
            ref={reEnterPassword}
          />
        </div>
        <div className={styles.signIn}>
          <input type="button" value="Sign In" onClick={signInByDetails} />
        </div>
        <div
          className={styles.googleLoginWrapper}
          onClick={() =>
            signIn("google", {
              callbackUrl: "'http://localhost:3000/home",
              redirect: false,
            })
          }
        >
          <Image
            src={"/Images/Google.png"}
            width={20}
            height={20}
            alt="Google.Png"
          />
          <div className={styles.signInWithGoogle}>Signin with google</div>
        </div>
        <div className={styles.section2}>
          Already have an account ?{" "}
          <Link href={"/login"} className={styles.anchorRef}>
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

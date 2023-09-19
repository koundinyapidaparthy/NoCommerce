import { createRef, useEffect } from "react";
import styles from "../../styles/login.module.css";
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
export const title = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const userName = session?.user?.name;
  const email = createRef(null);
  const password = createRef(null);
  function loginNow() {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    console.log({ emailValue, passwordValue });
    signIn("email", { email: emailValue, password: passwordValue });
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
      <div className={clsx(styles.section0, title.className)}>No Commerce</div>
      <div className={styles.section1}>
        <div className={styles.inputFieldWrapper}>
          <input type="text" placeholder="Email" ref={email} />
          <input type="password" placeholder="Password" ref={password} />
          <input type="button" value={"Login"} onClick={loginNow} />
        </div>
        <div
          className={styles.googleLoginWrapper}
          onClick={() => signIn("google")}
        >
          <Image
            src={"/Images/Google.png"}
            width={20}
            height={20}
            alt="Google.Png"
          />
          <div className={styles.signInWithGoogle}>Login with google</div>
        </div>
      </div>
      <div className={styles.section2}>
        Create an account ?{" "}
        <Link href={"/signin"} className={styles.anchorRef}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Login;

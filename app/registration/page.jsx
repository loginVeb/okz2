
import styles from "./registration.module.css";

import Header from "@/components/header/header";
import H1 from "@/components/forma/registration/h1";
import DivForm from "@/components/forma/registration/divForm";
// import apiPost from "../api/post"; apiPost={apiPost}

export default function Home() {

  return (
    <main className={styles.mainPageDiv}>
      <Header styles={styles}/>
      <H1/>
      <DivForm styles={styles}/>
    </main>
  );
}

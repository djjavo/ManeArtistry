import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          fill={true}
          src="/logo.jpeg"
          alt="The logo for Mane Artistry by Jay"
        />
      </main>
    </div>
  );
}

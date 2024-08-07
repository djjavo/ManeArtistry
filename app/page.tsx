import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.topContainer}>
      <div>
        <div className={styles.container}>
          <Image
            className={styles.logo}
            src='/logo.jpeg'
            alt='The logo for Mane Artistry by Jay'
            fill={true}
          />
        </div>
        <div className={styles.linkContainer}>
          <li className={styles.links}>
            <ul>
              <Link href={'https://www.instagram.com/maneartistrybyjay/'}>
                Instagram
              </Link>
            </ul>
            <ul>
              <Link href={'/assets/price-list.pdf'}>Price list</Link>
            </ul>
            <ul>
              <Link href={'mailto:maneartistrybyjay@gmail.com'}>Contact</Link>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Based and Non-Fungible Free Mint!</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/based.png" alt="token" width={256} height={256} />
          <h2 className={styles.selectBoxTitle}>Need to try out using Base? Here you go!</h2>
          <p className={styles.selectBoxDescription}>
            Mint a collectible here. Interacting on the Base testnet is a great way to show you are an early adopter. 
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token2.svg" alt="token" width={256} height={256} />
          <h2 className={styles.selectBoxTitle}>Learn about Base</h2>
          <p className={styles.selectBoxDescription}>
            Base is poised to onboard 1 billion users to web3
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
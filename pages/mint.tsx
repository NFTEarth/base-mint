import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { basedNftContract } from "../constants/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Want to interact with Base L2? </h1>
      
      <p className={styles.explain}>
        Mint one of the limited supply BASED NFTs! 
        </p>

      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="dark"
        contractAddress={basedNftContract}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Mint Now!
      </Web3Button>
    </div>
  );
};

export default Mint;
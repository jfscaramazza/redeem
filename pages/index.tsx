import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import { SmartContract } from "@thirdweb-dev/sdk/dist/declarations/src/contracts/smart-contract";
import { BaseContract } from "ethers";
import type { NextPage } from "next";
import { MAYC_ADDRESS, SERUM_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Theme.module.css";

const Home: NextPage = () => {
  
  const address = useAddress();

  const { contract: serumContract } = useContract(SERUM_ADDRESS);

  const mintMutantNft = async (maycContract: SmartContract<BaseContract>) => {
    // 1. Check the approval of the mayc contract to burn the user's serum tokens
    const hasApproval = await serumContract?.call(
      "isApprovedForAll",
      address,
      maycContract?.getAddress()
    );
    const balance = await serumContract?.call("balanceOf", address, 0);

    if (!hasApproval) {
      // Set approval
      await serumContract?.call(
        "setApprovalForAll",
        maycContract?.getAddress(),
        true
      );
    }

    if (balance < 1) {

      return alert("Not enough serum tokens");
    }

    await maycContract?.call("claim", address!, 1);
  };

  return (
    <div className={styles.container} style={{ marginTop: "3rem" }}>
      <img alt="logo" src="https://ucticketswap.carrd.co/assets/images/image01.png?v=2b11c39f" />
      <h1>PFP TICKET REDEMPTION</h1>
      <Web3Button
        contractAddress={MAYC_ADDRESS}
        action={(contract) => mintMutantNft(contract)}
      >
      APPROVE AND REDEEM
      </Web3Button>
      <p> 
      This button will ask you to approve two transactions: <br />
      1. Approve All Your Store Credit Tokens (Not: only one time and only from that contract, the rest of your wallet will remain untouched.)<br/>
      2. Redeem your Store Credit Token, one by one, to receive your PFP Ticket.
      </p>
    </div>
  );
};

export default Home;

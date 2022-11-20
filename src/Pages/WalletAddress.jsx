import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/WalletAddress.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import qrcode from '../assets/wallet-qr-code.svg';
import copyIcon from '../assets/copy-icon.svg';
import arrowLeft from '../assets/arrow-left.svg';

const WalletAdress = () => {
  const [copied, setIsCopied] = useState(false);
  const walletAdress = '3CDJNfdWX8m2NwuGUV3nhXHXEeLygMXoAjAjinsjbbjbugq1234';

  return (
    <div className="wallet">
      <div className="wallet-container">
        <div className="wallet-title">
          <h3>SEND NFT</h3>
          <p>
            Open your crypto wallet and scan QR code, or copy the NFT address
            below to send NFT,Only send NFTs to this address. Sending any other
            asset to this address may result in the loss of your deposit!
          </p>
        </div>
        <div className="wallet-address-container">
          <div className="wallet-address-left">
            <h4>NFT address</h4>
            <div className="wallet-copy-address">
              <p>{walletAdress}</p>
              <CopyToClipboard text={walletAdress} onCopy={() => setIsCopied(true)}>
                <img src={copyIcon} alt="" title="copy address" />
              </CopyToClipboard>
              {copied ? <span className='copied'>Copied</span> : null}
            </div>
          </div>
          <div className="wallet-address-right">
            <h4>NFT amount</h4>
            <p>20</p>
          </div>
        </div>
        <div className="wallet-qrcode">
          <img src={qrcode} alt="" />
        </div>
      </div>
      <div className="wallet-links">
        <Link to="/">
          <img src={arrowLeft} alt="" />
          <span>Back</span>
        </Link>
        <Link to="/waiting">Go to Arena</Link>
      </div>
    </div>
  );
};

export default WalletAdress;

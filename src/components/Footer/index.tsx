import React from 'react';

import { FaFacebook, FaDiscord, FaInstagram, FaHeart } from 'react-icons/fa';

import './styles.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = props => {
  const { children } = props;
  return (
    <div className="footer-container">
      <div className="left-content">
        <p>
          Promoção por tempo limitado. Contate nossa equipe se estiver com
          alguma dúvida.
        </p>
        <p>
          © 2020 WeSports. All Rights Reserved. Made with &nbsp;
          <FaHeart size={13} color="#6CE0DB" />
        </p>
      </div>
      <div className="mid-content">
        <h1>Contato</h1>
        <p>contato@wesportsgg.com</p>
      </div>
      <div className="right-content">
        <h1>Redes Sociais</h1>
        <div className="row-icons">
          <a href="https://www.facebook.com/wesportsapp ">
            <FaFacebook size={40} color="#6CE0DB" />
          </a>
          <a href="https://discord.gg/czS2UAr">
            <FaDiscord size={40} color="#6CE0DB" />
          </a>
          <a href="https://www.instagram.com/appwesports/">
            <FaInstagram size={40} color="#6CE0DB" />
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Footer;

/*
 */

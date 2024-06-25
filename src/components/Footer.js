import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <div className="link-container">
            <a
              className="App-link"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`${process.env.PUBLIC_URL}/github.png`} alt="깃허브" className="link-image" />
              <span>깃허브</span>
            </a>
          </div>
          <div className="link-container">
            <a
              className="App-link"
              href="https://hyunbin95.notion.site/Kang-Hyun-Bin_-bcde693cacf7460caeafb4f08cc73192?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`${process.env.PUBLIC_URL}/notion.png`} alt="Notion" className="link-image" />
              <span>Notion</span>
            </a>
          </div>
          <div className="link-container">
            <a
              className="App-link"
              href="https://wikidocs.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`${process.env.PUBLIC_URL}/wikidocs.png`} alt="WikiDocs" className="link-image" />
              <span>WikiDocs</span>
            </a>
          </div>
        </div>
        <div className="contact-info">
          <p>이메일: twonkang00@naver.com</p>
          <p>오픈 카카오톡 링크: <img src={`${process.env.PUBLIC_URL}/kakao.png`} alt="오픈 카카오톡 링크" /></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import User from '../components/User';
import Content from '../components/Content';
import Footer from '../components/Footer'; 

interface InfoHeader {
  company: string;
}

interface UserInfo {
  name: string;
  lastEntry: string;
}

interface TitleInfo {
  titles: string[];
  options: string[];
}

interface InfoSlider {
  title: string;
  numberid: string;
  subtitle1: string;
  subtitle2: string;
}

interface InfoCuentas {
  title: string;
  description: string;
}

interface FooterOptions {
  options: string[];
}

const Home: React.FC = () => {
  const [infoHeader, setInfoHeader] = useState<InfoHeader | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [titleInfo, setTitleInfo] = useState<TitleInfo | null>(null);
  const [infoSlider, setInfoSlider] = useState<InfoSlider | null>(null);
  const [infoCuentas, setInfoCuentas] = useState<InfoCuentas | null>(null);
  const [footerOptions, setFooterOptions] = useState<FooterOptions | null>(null); 

  useEffect(() => {
    fetch("/info.json")
      .then(response => response.json())
      .then(data => {
        setInfoHeader(data.header);
        setUserInfo(data.user);
        setTitleInfo(data.title);
        setInfoSlider(data.infoSlider);
        setInfoCuentas(data.infoCuentas);
        setFooterOptions(data.footer); 
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="homepage-container">
      <div className='homepage-header'>
        <Header infoHeader={infoHeader}/>
      </div>
      <div className='homepage-userInfo'>
        <User userInfo={userInfo}/>
      </div>
      <div className='homepage-content'>
        <Content title={titleInfo} infoSlider={infoSlider} infoCuentas={infoCuentas} /> 
      </div>
      <div className='homepage-footer'>
        <Footer footerOptions={footerOptions} /> 
      </div>
    </div>
  );
};

export default Home;

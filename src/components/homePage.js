import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logos from '../Frame 22605.svg'
import graph from '../Frame 22602.svg'
import graph2 from '../Screenshot 2024-01-06 at 15.16.48.png'
import mainImage from '../Rectangle 22487.png'
import video from '../Screenshot 2024-01-06 at 15.38.04.png'
import rectangle from '../Rectangle 22493.png'
import line from '../Vector 91.svg'
import '../css/hompePage.css';
import { Button } from 'antd';
import { SearchOutlined, GlobalOutlined, ArrowRightOutlined, RightOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';


function App() {
  const [isDropdown, setisDropdown] = useState(false);
  const [isList, setisList] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setisDropdown(window.innerWidth > 900);
      setisList(window.innerWidth > 900)
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };
  console.log(isDropdown, isList);

  return (
    <div style={{ margin: 50 }}>
      <div className='title'>
       <img src={logos} className="logos" alt="logo" />
       {isDropdown && (
       <div className='search'>
        <CloseOutlined tlined className='menu' style={{ float: "left", marginLeft: 10}} onClick={() => setisDropdown(!isDropdown)}/>
       <Button type="none" className="read" style={{ marginRight: 20 }}><SearchOutlined />Search</Button>
       {isList? <Button type="primary" className="read" shape="round" style={{ marginRight: 20, backgroundColor: 'darkblue' }} onClick={handleClick}>Login</Button> : 
       <Button type="none" className="login" shape="round" style={{ marginRight: 20, backgroundColor: 'transparent' }} onClick={handleClick}>Login</Button>}
       <Button type="none" className="read" ><GlobalOutlined /></Button>
      </div>)}
      <MenuOutlined className='menu'onClick={() => setisDropdown(!isDropdown)}/>
      </div>
       <hr />
     <div className='intro-card'>
      <div >
      <h1 className='intro'>YEGO YACU</h1>
      <p>This system will help Youth Centers to effectively offer high-quality youth-friendly services among young people and adolescents aged between 10 to 24 years. Key interventions include the provision of high-quality ...</p>
      <br />
      <Button type="none" className="read" style={{ marginRight: 20, color: 'darkblue' }}><ArrowRightOutlined />Read More</Button>
      </div>
      <img src={mainImage} className="main" alt="logo" />
      </div>
      <br />
      <div className='parent'>
      <img src={line} className="vector" alt="logo" />
      <div className='materials'>
      <h1 className='education'>Education Materials</h1>
      <div className='intro-1'>
      <div lassName='intro-11'>
      <h3>ASRH for 10-14 Years Old</h3>
      <br />
      <p>Adolescent Sexual and Reproductive Health document message for 10-14 Years old.</p>
      <br />
      <Button type="none" className="read" style={{ color: 'darkblue' }}><ArrowRightOutlined />Read More</Button>
      <Button type="none" className="read" style={{color: 'blue', float: 'right' }}>Download</Button>
      </div>
      </div>
      <div className='intro-2'>
      <h3 style={{color: 'white' }}>ASRH for 15-24 Years Old</h3>
      <br />
      <p style={{color: 'white' }}>Adolescent Sexual and Reproductive Health document message for 15-24 Years old.</p>
      <br />
      <Button type="none" className="read" style={{color: 'white' }}><ArrowRightOutlined />Read More</Button>
      <Button type="none" className="read" style={{ color: 'blue', float: 'right' }}>Download</Button>
      </div>
      </div>
      </div>
      <div className='graph'>
      <img src={graph} className="image1" alt="logo" />
      <img src={graph2} className="image2" alt="logo" />
      </div>
      <br />
      <div className='video'>
        <h1 style={{textAlign: 'center' }}> Visual Educaction</h1>
        <img src={video} className="image3" alt="logo" />
        <img src={rectangle} className="image4" alt="logo" />
        <div className='footer'>
        <h1 style={{textAlign: 'center', color: 'white' }}> Empowering Rwandan Communities</h1>
        <div className='links'>
          <div>
            <h1 className='one'>SFH Rwanda</h1>
            <p>Kacyiru KG 501 St P.O Box: 3040,<p> Kigali, Rwanda</p></p>
            <p>info@sfhrwanda.org</p>
            <p>+250 788 305 684</p>
          </div>
          <div>
            <h4 className='two'>About SFH</h4>
            <p><RightOutlined />  Who We Are</p>
            <p><RightOutlined />  Publications</p>
            <p><RightOutlined />  SFH Reports</p>
            <p><RightOutlined />  Press Release</p>
          </div>
          <div>
          <h4 className='three'>Our Partners</h4>
            <p><RightOutlined />  Ministry of Health</p>
            <p><RightOutlined />  My Culture</p>
            <p><RightOutlined />  Enabel</p>
            <p><RightOutlined />  USAID</p>
          </div>
        </div>
        <hr className='copyright'/>
        <p style={{textAlign: 'center'}}>© 2024 All right reserved by SFH-Rwanda. Developed By Azul Tech Ltd.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

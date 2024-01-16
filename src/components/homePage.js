import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import logos from '../Frame 22605.svg'
import graph from '../assets/Group 2.svg'
import graph2 from '../assets/Group 1.svg'
import mainImage from '../assets/Yego-Yacu team pic.jpeg'
import video from '../assets/image.png'
import line from '../Vector 91.svg'
import pdfFile from '../assets/ASRHR10-14.pdf'
import pdfFile2 from '../assets/ASRHR15-24.pdf'
import miniYouth from '../assets/miniyouth2 1.svg'
import enabel from '../assets/enabel 1.svg'
import sfh from '../assets/sfhlogo1 1.svg'
import '../css/hompePage.css';
import { Button } from 'antd';
import { SearchOutlined, GlobalOutlined, ArrowRightOutlined, RightOutlined, MenuOutlined, CloseOutlined, LoginOutlined } from '@ant-design/icons';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Modal from 'react-modal';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


function App() {
  const [isDropdown, setisDropdown] = useState(false);
  const [showMore, setshowMore] = useState(true);
  const [ReadTwo, setReadTwo] = useState(false);
  const [isPdfPreviewVisible, setIsPdfPreviewVisible] = useState(false);
  const [isList, setisList] = useState(false);
  const [isTranslate, setisTranslate] = useState(false);
  const [numPages, setNumPages] = useState();
  const navigate = useNavigate();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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

  const handlePdfPreview = () => {
    setIsPdfPreviewVisible(true);
    setReadTwo(true)
  };
  const handlePdfPreview2 = () => {
    setIsPdfPreviewVisible(true);
    setReadTwo(false)
  };
  const closeModal = () => {
    setIsPdfPreviewVisible(false);
  };
  const handlePdfDownload = (props) => {
    window.open((props), '_blank');
  };
  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className='container'>
      <div className='upper'>
      <div className='title'>
        <div className="logos">
       <img src={miniYouth} className="logo" alt="logo" />
       <span className='lineV'></span>
       <img src={enabel} className="logo enabel" alt="logo" />
       <span className='lineV'></span>
       <img src={sfh} className="logo sfh" alt="logo" />
       </div>
       <div className={`search ${isDropdown ? 'dropdown-transition' : 'dropdown-hidden'}`}>
        <CloseOutlined className='menu' style={{ float: "left", marginLeft: 10,}} onClick={() => setisDropdown(!isDropdown)}/>
       <Button type="none" className="read" style={{ marginRight: 5 }}><SearchOutlined />Search</Button>
       {isList? <Button type="primary" className="read" shape="round" style={{ marginRight: 5 , backgroundColor: 'darkblue' }} onClick={handleClick}>Login</Button> : 
       <Button type="none" className="login" shape="round" style={{ marginRight: 5, backgroundColor: 'transparent' }} onClick={handleClick}><LoginOutlined />Login</Button>}
       <Button type="none" className="read global" onClick={() => setisTranslate(!isTranslate)}><GlobalOutlined /></Button> 
       {isList ?
  (isTranslate &&
    <div className='translate'>
      <Button type="none" className="read language">EN</Button>
      <span className='lineV s'></span>
      <Button type="none" className="read language">FR</Button>
      <span className='lineV s'></span>
      <Button type="none" className="read language">RW</Button>
    </div>
  ) :
  (
    <div className='translate small'>
      <Button type="none" className="read language2">EN</Button>
      {isTranslate &&<div style={{display:'Flex', flexDirection: "column"}}>
      <Button type="none" className="read language2">FR</Button>
      <Button type="none" className="read language2">RW</Button></div>}
    </div>
  )
}

      </div>
      <MenuOutlined className='menu'onClick={() => setisDropdown(!isDropdown)}/>
      </div>
       <hr />
     <div className='intro-card'>
      <div >
      <h1 className='intro-title'>YEGO YACU</h1>
      <p className='intro' style={{ textAlign: 'start'}}> This system will help Youth Centers to effectively offer high-quality youth-friendly services among young people and adolescents aged between 10 to 24 years. Key interventions include the provision of high-quality {showMore ? '...' : 'Adolescent Sexual and Reproductive Health (ASRH) services and information including Family Planning, unwanted pregnancies, safe abortion, sexuality, safe sex, STIs & pre-nuptial consultation, drug and substance abuse and on gender-based violence.'}</p>
      <Button type="none" className="read" style={{ fontSize:16,fontWeight: 600, color: 'darkblue' }} onClick={() => setshowMore(!showMore)}><ArrowRightOutlined />Read {showMore ? ' More' : 'Less'}</Button>
      </div>
      <img src={mainImage} className="main" alt="Yego-Yacu Team" />
      </div>
      <br />
      <div className='parent'>
      <img src={line} className="vector" alt="logo" />
      <div className='materials'>
      <h1 className='education'>Education Materials</h1>
      <div className='intro-1'>
      <div className='intro-11'>
      <h3>ASRH for 10-14 Years Old</h3>
      <br />
      <p>Adolescent Sexual and Reproductive Health document message for 10-14 Years old.</p>
      <br />
      <Button type="none" className="read" style={{ fontSize:14,fontWeight: 600, color: 'darkblue' }}onClick={handlePdfPreview} ><ArrowRightOutlined />Read More</Button>
      <Button type="none" className="read" style={{ fontSize:14,fontWeight: 600, color: 'blue', float: 'right' }} onClick={() => handlePdfDownload(pdfFile)}>Download</Button>
      </div>
      </div>
      <div className='intro-2'>
      <h3 style={{color: 'white' }}>ASRH for 15-24 Years Old</h3>
      <br />
      <p style={{color: 'white' }}>Adolescent Sexual and Reproductive Health document message for 15-24 Years old.</p>
      <br />
      <Button type="none" className="read" style={{fontSize:14, fontWeight: 600, color: 'white' }} onClick={handlePdfPreview2}><ArrowRightOutlined />Read More</Button>
      <Button type="none" className="read" style={{ fontSize:14,fontWeight: 600, color: 'blue', float: 'right' }} onClick={() => handlePdfDownload(pdfFile2)}>Download</Button>
      </div>
      </div>
      </div>
      <div className='graph'>
      <img src={graph} className="image1" alt="logo" />
      <img src={graph2} className="image2" alt="logo" />
      </div>
      <br />
      </div>
      <div className='video'>
        <h1 style={{textAlign: 'center' }}> Visual Education</h1>
        <footer className='footer'>
        <video className="image3" controls poster={video}>
        <source src={require('../assets/srh-video.mp4')} type="video/mp4" />
             Your browser does not support the video tag.
        </video>
        <h1 style={{textAlign: 'center', color: 'white' }}> Empowering Rwandan Communities</h1>
        <div className='links'>
          <div>
            <h1 className='one'>SFH Rwanda</h1>
            <p>Kacyiru KG 501 St P.O Box: 3040,<span className="break-line"> Kigali, Rwanda</span></p>
            <p>info@sfhrwanda.org<span className="break-line">+250 788 305 684</span></p>
          </div>
          <div className='two-header'>
            <h4 className='two'>About SFH</h4>
            <p><RightOutlined /> &nbsp; Who We Are</p>
            <p><RightOutlined /> &nbsp; Publications</p>
            <p><RightOutlined />  &nbsp; SFH Reports</p>
            <p><RightOutlined />  &nbsp; Press Release</p>
          </div>
          <div className='three-header'>
          <h4 className='three'>Our Partners</h4>
            <p><RightOutlined />  &nbsp; Ministry of Health</p>
            <p><RightOutlined />  &nbsp; My Culture</p>
            <p><RightOutlined />  &nbsp; ENABEL</p>
            <p><RightOutlined />  &nbsp; USAID</p>
          </div>
        </div>
        <hr className='copyright'/>
        <p className='copyright-text' style={{textAlign: 'center'}}>© 2024 All right reserved by SFH-Rwanda. Developed By Azul Tech Ltd.</p>
        </footer>
      </div>

      <Modal
        isOpen={isPdfPreviewVisible}
        onRequestClose={closeModal}
        contentLabel="PDF Preview"
        ariaHideApp={false} // To suppress a warning related to accessibility
        className='modal'
      >
        <div>
          <Button type='danger' shape='round' style={{backgroundColor: 'rgb(229, 88, 88)', marginBottom: '20px'}} onClick={closeModal}><CloseOutlined />Close</Button>
          {ReadTwo ? (
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => (
          <Page
            key={page}
            pageNumber={page}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    ) : (
      <Document file={pdfFile2} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => (
          <Page
            key={page}
            pageNumber={page}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    )}
        </div>
      </Modal>
    </div>
    
  );
}

export default App;

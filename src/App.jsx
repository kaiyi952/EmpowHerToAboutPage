import './App.css';
import BlurText from './component/blurText/BlurText';
import Footer from './component/footer/Footer';
import CircularGallery from './component/gallery/Gallery';
import RollingGallery from './component/gallery/Gallery';
import Navbar from './component/navbar/Navbar';
import ScrollElements from './component/scroll/ScrollElements';

function App() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="intro">
          <div>
            <BlurText
              text="About EmpowHERto"
              delay={150}
              animateBy="words"
              direction="top"
              className="w-[200px] text-9xl "
            />
            <div className="introPara">
              EmpowHERto (Toronto) is a federally incorporated nonprofit
              organization that has obtained Articles of Continuance in Ontario
              as part of the process to secure charitable status. We are
              currently finalizing our charitable registration. At this time,
              donations to EmpowHERto are not eligible for tax receipts.
            </div>
          </div>

          <img
            src="https://www.empowherto.org/images/empowherto-icon-big.png
"
            alt="empowherto"
            className="logo2"
          />
        </div>
        <div className="scroll">
          <ScrollElements />
        </div>
        <div
          style={{ height: '600px', position: 'relative' }}
          className="boardGallery"
        >
          <p className="boardTitle">BOARD OF DIRECTORS - TORONTO</p>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <div
          style={{ height: '600px', position: 'relative' }}
          className="boardGallery"
        >
          <p className="boardTitle">BOARD OF DIRECTORS - FORT LAUDERDALE</p>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

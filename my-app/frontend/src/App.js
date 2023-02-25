import './App.css';
import Logo from './Images/logo1.png';
import FunctionalText from './components/FunctionalText';
import logo2 from './Images/logo2.png';
import logo3 from './Images/logo3.png';
import logo4 from './Images/logo4.png';

function AnakGambar(){
  return(
    <>
    <div>
    <div class="absolute lg:w-[393.88px] lg:h-[484.07px] lg:left-[900px] lg:top-[148.43px]">
          <img src={logo2} alt="" />
        </div>
    </div>
    </>
  );
}


function AnakGambar4(){
  return(
<>
    <div class="absolute lg:w-[534px] lg:h-[720px] lg:left-[824px] lg:top-[30px]">
      <img src={logo4} alt="" />
    </div>
</>
  );
}
function AnakGambar3(){
  return(
    <>
    <div class="absolute lg:w-[183px] lg:h-[215px] lg:left-[880px] lg:top-[400px]">
          <img src={logo3} alt="" />
        </div>
    </>
  );
}

function App() {
  return (
    <div>
    <body>
      <div class="absolute lg:w-[431px] lg:h-[198px] lg:left-[60px] lg:top-[49px]">
        <img src={Logo} alt="" />
        </div>
        <FunctionalText />
        <AnakGambar />
        <AnakGambar3 />
        <AnakGambar4 />
            </body> 
        </div>
  );
}


export default App;




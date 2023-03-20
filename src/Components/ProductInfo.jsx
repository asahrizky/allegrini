import React from 'react'
import LogoOliva from '../Assets/LogoOliva.png';
import Elips from '../Assets/Elips.png';
import BotolOlive from '../Assets/BotolOlive.png';
import BotolProduk from '../Assets/BotolProduk.png';

const ProductInfo = () => {
  return (
    // <div className='bg-red-400 h-screen lg:w-[431px] lg:h-[198px] lg:left-[60px] lg:top-[49px]'>
    //  <img src={LogoOliva} alt="Logo Oliva" />
    //     <div className='bg-yellow-300'>
    //         <p class="lg:w-[636px] lg:h-[180px] left-14 top-72 font-poppins font-normal text-xl text-justify #7D794F"> 
    //         A delicate celebration of the most precious Mediterranean fruit: the olive and its organic oil. A formula that enhances and renews the ancient secret of Italian beautyness, rediscovering its brightest and most harmonious sensations. All the elegance of Italian nature to nourish, cleanse, perfume and tone not only the body, but also the hair.</p>
    //         <p class="lg:w-[636px] lg:h-[180px] left-14 top-96 font-poppins font-normal text-xl text-justify  #7D794F"><br/>
    //         <br/><br/>A blend of fragrances with a Mediterranean flavor. The freshness of bergamot, orange blossom and eucalyptus leaves are enhanced by the heart notes of olive, thyme, ylang and floral bouquet. The base of patchouli, musk and honey accord gives the fragrance a sweet and woody echo</p>
    //     </div>
    //     <div className='bg-purple-400 lg:w-[393.88px] lg:h-[484.07px] lg:left-[900px] lg:top-[148.43px]'>
    //         <img src={Elips} alt="Elips" />
    //     </div>
    //     <div className='lg:w-[534px] lg:h-[720px] lg:left-[824px] lg:top-[30px]'>
    //         <img src={BotolProduk} alt="Botol Produk" />
    //     </div>
    //     <div className='lg:w-[183px] lg:h-[215px] lg:left-[880px] lg:top-[400px]'>
    //         <img src={BotolOlive} alt="Botol Olive" />
    //     </div>
    // </div>
    <>
        <div className=' h-full flex mx-14 my-24'>
            <div className="flex flex-1 flex-col font-['Poppins'] text-[#7D794F]">
                <div className=' flex'>
                  <img src={LogoOliva} alt="Logo Oliva" className='w-60 h- pb-14 basis-3/4 ' />
                  <div className='basis-1/2'></div>
                </div>
          
                <div className='flex font-poppins font-normal text-2xl text-justify  py-10 pr-20'>
                A delicate celebration of the most precious Mediterranean fruit: the olive and its organic oil. A formula that enhances and renews the ancient secret of Italian beautyness, rediscovering its brightest and most harmonious sensations. All the elegance of Italian nature to nourish, cleanse, perfume and tone not only the body, but also the hair.
                </div>
                <div className='flex pb-10 font-poppins font-normal text-2xl text-justify  py-10 pr-20'>
                A blend of fragrances with a Mediterranean flavor. The freshness of bergamot, orange blossom and eucalyptus leaves are enhanced by the heart notes of olive, thyme, ylang and floral bouquet. The base of patchouli, musk and honey accord gives the fragrance a sweet and woody echo. 
                </div>
            </div>
            <div className='flex flex-1 bg-yellow-300'>
                <div className='bg-red-400 flex h-max'>
                  <img src={Elips} alt = "Elips"/>
                </div>
                <div>

                </div>
                <div>
                  
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ProductInfo

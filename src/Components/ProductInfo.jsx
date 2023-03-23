import React from 'react'
import LogoOliva from '../Assets/LogoOliva.png';
import Elips from '../Assets/Elips.png';
import BotolOlive from '../Assets/BotolOlive.png';
import BotolProduk from '../Assets/BotolProduk.png';

const ProductInfo = () => {
  return (
    <>
        <div className='h-full flex mx-20 my-24'>
            <div className="flex flex-1 flex-col font-['Poppins'] text-[#7D794F]">
                <div className=' flex'>
                  <img src={LogoOliva} alt="Logo Oliva" className='w-60 h- pb-14 basis-3/4 ' />
                  <div className='basis-1/2'></div>
                </div>
          
                <div className='flex font-poppins font-normal text-2xl text-justify  py-5 pr-20'>
                A delicate celebration of the most precious Mediterranean fruit: the olive and its organic oil. A formula that enhances and renews the ancient secret of Italian beautyness, rediscovering its brightest and most harmonious sensations. All the elegance of Italian nature to nourish, cleanse, perfume and tone not only the body, but also the hair.
                </div>
                <div className='flex pb-10 font-poppins font-normal text-2xl text-justify  py-5 pr-20'>
                A blend of fragrances with a Mediterranean flavor. The freshness of bergamot, orange blossom and eucalyptus leaves are enhanced by the heart notes of olive, thyme, ylang and floral bouquet. The base of patchouli, musk and honey accord gives the fragrance a sweet and woody echo. 
                </div>
            </div>
            <div className='flex flex-1 place-content-center items-center relative'>
                <div className='flex h-full w-3/4 place-content-center relative'>
                  <img className='absolute h-full w-full' src={Elips} alt = "Elips"/>
                  <img className=' bottom-24 left-5 h-80' src={BotolOlive} alt = "Botol Olive"/>

                </div>
                <img className='absolute w-full' src={BotolProduk} alt = "Botol Produk"/>
                <img className='absolute bottom-10 left-20 h-96' src={BotolOlive} alt = "Botol Olive"/>
            </div>
            
        </div>
    </>
  )
}

export default ProductInfo

import React from 'react'
import LogoOliva from '../Assets/logoOliva';
import Elips from '../Assets/Elips';
import BotolOlive from '../Assets/BotolOlive';
import BotolProduk from '../Assets/BotolProduk';

const ProductInfo = () => {
  return (
    <div className='absolute lg:w-[431px] lg:h-[198px] lg:left-[60px] lg:top-[49px]'>
     <img src={LogoOliva} alt="Logo Oliva" />
        <div>
            <p class="absolute lg:w-[636px] lg:h-[180px] left-14 top-72 font-poppins font-normal text-xl text-justify #7D794F"> 
            A delicate celebration of the most precious Mediterranean fruit: the olive and its organic oil. A formula that enhances and renews the ancient secret of Italian beautyness, rediscovering its brightest and most harmonious sensations. All the elegance of Italian nature to nourish, cleanse, perfume and tone not only the body, but also the hair.</p>
            <p class="absolute lg:w-[636px] lg:h-[180px] left-14 top-96 font-poppins font-normal text-xl text-justify  #7D794F"><br/>
            <br/><br/>A blend of fragrances with a Mediterranean flavor. The freshness of bergamot, orange blossom and eucalyptus leaves are enhanced by the heart notes of olive, thyme, ylang and floral bouquet. The base of patchouli, musk and honey accord gives the fragrance a sweet and woody echo</p>
        </div>
        <div className='absolute lg:w-[393.88px] lg:h-[484.07px] lg:left-[900px] lg:top-[148.43px]'>
            <img src={Elips} alt="Elips" />
        </div>
        <div className='absolute lg:w-[534px] lg:h-[720px] lg:left-[824px] lg:top-[30px]'>
            <img src={BotolProduk} alt="Botol Produk" />
        </div>
        <div className='absolute lg:w-[183px] lg:h-[215px] lg:left-[880px] lg:top-[400px]'>
            <img src={BotolOlive} alt="Botol Olive" />
        </div>
    </div>
  )
}

export default ProductInfo

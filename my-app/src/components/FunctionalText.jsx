//contoh selanjut ke2 (untuk menghilangkan merah) pake tagfregment dan bisa disusul dengan <></> yaitu JSX
//Reference mentor lebih familiar dengan Functional Komponen

function AnakText(){
    return(
        <div>
        <p class="absolute lg:w-[636px] lg:h-[180px] left-14 top-72 font-poppins font-normal text-xl text-justify #7D794F"> 
         A delicate celebration of the most precious Mediterranean fruit: the olive and its organic oil. A formula that enhances and renews the ancient secret of Italian beautyness, rediscovering its brightest and most harmonious sensations. All the elegance of Italian nature to nourish, cleanse, perfume and tone not only the body, but also the hair.</p>
        <p class="absolute lg:w-[636px] lg:h-[180px] left-14 top-96 font-poppins font-normal text-xl text-justify  #7D794F"><br/>
        <br/><br/>A blend of fragrances with a Mediterranean flavor. The freshness of bergamot, orange blossom and eucalyptus leaves are enhanced by the heart notes of olive, thyme, ylang and floral bouquet. The base of patchouli, musk and honey accord gives the fragrance a sweet and woody echo</p>
        </div>
    );
}

//Atau Penulisan kedua bisa pake ECMAScript (ada kaidah bakunya) 
//Latihan ini


function FunctionalComponent(){
    return(
        <> 
        <div>
        </div>
        <AnakText/>
        </>
        );
}

export default FunctionalComponent;
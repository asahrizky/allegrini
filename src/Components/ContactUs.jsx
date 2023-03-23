import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div className="bg-[#F6F2E4] font-['Poppins'] flex flex-col h-full text-[#7D794F]">
        <div className='flex place-content-center  py-6 text-2xl font-bold '>
        <span className=' py-2 px-10 border-2 border-[#7D794F]'>
            Contact Us
        </span>
        </div>
      <div className='flex py-7'>
        <div className=' place-items-center text-center flex-1 flex-grow grid text-2xl font-medium pt-5 pb-10'>
            <span>
                www.allegriniamenities.com
                <br/>
                <br/>
                Tel.: +39.035.4242111<br/>
                Fax: +39.035.526943<br/>
                Vicolo Salvo d’Acquisto, <br/>
                2 - 24050 Grassobbio (BG)
            </span>
        </div>
        <div className='flex flex-col relative items-center flex-grow-0 py-3'>
            <div className='flex-grow border-r-2 border-[#7D794F]'>
                
            </div>
            <div className='flex-shrink mx-4 my-3 text-xl'>
                or
            </div>
            <div className='flex-grow border-r-2 border-[#7D794F]'>
                
            </div>
        </div>
        <div className='text-center flex-grow flex-1 text-2xl py-5 font-medium'>
            allegrini.indonesia@gmail.com<br/><br/>
            Cel.: +62 811 9624932<br/>
            Tel.: +62 251 7540380<br/>
            Bukit Cimanggu City S2/16, Tanah Sareal,<br/> Bogor 16166
        </div>
      </div>  
    
      
    </div>
    </>

  )
}

export default ContactUs

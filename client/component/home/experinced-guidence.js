import Image from 'next/image'
import React from 'react'

export default function ValuableClient() {

  const GuideBox = [
    {
        icon:'/assets/images/banner/flight-icon.png',
        heading:'Trust in Safety',
        cnt:'At Ath-Theen, your safety and security are our top priorities during your sacred journey. We ensure comprehensive measures are in place for a worry-free pilgrimage. Trust us to guide you every step of the way, so you can focus on your spiritual experience.'
    },
    {
        icon:'/assets/images/banner/flight-icon.png',
        heading:'Experienced Guidance',
        cnt:'Navigate the sacred rites of Hajj and Umrah with our personalized guidance. Our experienced team is dedicated to making your pilgrimage smooth and enriching. Trust Ath-Theen to help you create cherished memories in the heart of Islam.'
    },
  ]  

  return (
    <>
    <section className="bg-card">
              {/* Cards Div */}
              <div className="container">

              <h4 className="fs-33 mfs-24 fw7 tac pdb50 mpdb0 logo-clr">How We Create <span className='fwb green-clr'> Valuable Clients! </span></h4>

          <div className='mt-5 row'>

            {GuideBox.map((items,index)=>{
                return(
                    <div className="col-12 col-lg-6 mpdt100" key={index}>  
        <div className='card pos-r  pdt80 pdb30' >
          <div className='img-pos'>
          <Image className='' src={items.icon} width="100" height="100" alt='Flight-Icon' loading='lazy'/>
          </div>
           <h6 className={`fs-24 mfs-19 tac`} > <span className="logo-clr">{items.heading.split(' ')[0]} </span>
                    {items.heading.split(' ').slice(1).join(' ')}
                  </h6>
           <p className={`fs14 lnh27 ls04 mfs-14 pdt16 mpdt10 taj`}>{items.cnt}</p>
        </div>
 
        </div>
                )
            })}
       </div>
       </div>
    </section>
    <style jsx>
        {`
        
    .bg-card{
          background-image: url('/assets/images/banner/worldmap.jpg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          padding: 40px;
    }
      .card{
              background-color: #FFFFFF;
              border-radius: 10px;
              // box-shadow: 0px 4px 16px 0px #00000040;
              height: 100%;
              padding-left: 20px;
              padding-right: 20px;
              }
 
              .img-pos{
              position: absolute;
              top: 2%;
              left: 50%;
                  transform: translate(-50%, -50%);
              border-radius: 50%;
              padding: 10px;
              border: 1px dashed #006c35;
              background: #fff;
              }
              @media only screen and (max-width:550px){
                                          .card{
              background-color: #FFFFFF;
              border-radius: 10px;
              box-shadow: 0px 4px 16px 0px #00000040;
              width: auto;
              height: auto;
              }        
    .bg-card{
          background-image: url('/assets/images/banner/worldmap.jpg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          padding: 40px 0px;

    }

              }

        `}
    </style>
    </>
  )
}

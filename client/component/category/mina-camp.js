import Image from 'next/image'
import React from 'react'

export default function MinaCamp() {

    const MinaData =[
        {
            heading:"Mina: The Tent City of Hajj",
            cnt:`Mina, also known as the "Tent City," is a vital stop during the Hajj pilgrimage, situated just outside of Mecca. Pilgrims stay in Mina for several days, living in air-conditioned tents that provide comfort and shelter. This site plays a central role in the spiritual journey, where pilgrims engage in prayers and reflections, and prepare for key rituals like the stoning of the devil (Ramy al-Jamarat).`
        },
        {
            heading:"Significance of Mina in Hajj Rituals",
            cnt:"Mina holds deep historical and religious importance. It is the place where Prophet Ibrahim (Abraham) was tested by Allah, a moment that is commemorated during Hajj. Pilgrims spend time here fulfilling religious duties and engaging in acts of worship. Ath-Theen ensures a well-organized and comfortable experience for all pilgrims, providing essential services while preserving the sacred atmosphere of Mina."
        }
    ]

  return (
    <>
    <section className='container-fluid'>
       <h6 className={`fs-24 pdt24 tac`}>Mina Camp – An Essential Stop on Your Hajj Journey with Ath-Theen</h6>
    <p className='fs18 mfs16 lnh33 ls05 drk-clr  fw5 pdt16'>At Ath-Theen, we are committed to providing a spiritually fulfilling and comfortable experience for pilgrims during Hajj. Our Mina camp offers the perfect blend of essential services and spiritual serenity, ensuring that your stay is smooth and focused on worship. Here’s what you can expect at Mina with Ath-Theen.</p>
    <div className='row mt-2 mt-lg-5 align-items-center '>
        <div className='col-12 col-md-6 col-lg-6 '>
            {MinaData.map((items,index)=>{
                return(
            <div className='mt24' key={index}>
            <h5 className='fs-22 mfs-19 drk-vclr fw5'>{items.heading}</h5>
            <p className='fs16 lnh27 ls05 mfs14 drk-clr fw5 pdt16 mpdt10'>{items.cnt}</p>
        </div>
        )
    })}
        </div>
        <div className='col-12 col-md-6 col-lg-6 mt-5 mt-lg-0'>
         <Image layout='responsive' className='br20' src={"/assets/images/tabs-places/mina-camp.png"} width={500} height={500} alt='Mina-camp' loading='lazy' quality={100}/>
        </div>
    </div>
    </section>
    </>
  )
}

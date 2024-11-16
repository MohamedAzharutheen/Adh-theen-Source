import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Subscripe() {
  return (
    <>

        <section className="subscribe-area mt70">
            <div className="container">
                <div className="subscribe-two theme-bg">
                 <Image className="cta-shape shape_01" src="/assets/images/shape/c1.svg" style={{maxWidth:"100%",height:"auto"}} width={232} height={232}   alt="Shape-Circle"/>
                    <Image className="cta-shape shape_02" src="/assets/images/shape/c2.svg" style={{maxWidth:"100%",height:"auto"}} width={74} height={74}   alt="Shape-triangle"/>
                    <Image className="cta-shape shape_03" src="/assets/images/shape/c3.svg"style={{maxWidth:"100%",height:"auto"}} width={20} height={20}   alt="Shape-Circle"/>
                    <Image className="cta-shape shape_04" src="/assets/images/shape/c4.svg" style={{maxWidth:"100%",height:"auto"}} width={74} height={74}  alt="Shape-triangle"/>
                    <Image className="cta-shape shape_05" src="/assets/images/shape/c5.svg" style={{maxWidth:"100%",height:"auto"}} width={303} height={272}  alt="Shape-snake"/>
                    <Image className="cta-shape shape_06" src="/assets/images/shape/c6.svg" style={{maxWidth:"100%",height:"auto"}} width={112} height={103}  alt="Shape-Circle"/>
                    <Image className="cta-shape shape_07" src="/assets/images/shape/c7.svg"style={{maxWidth:"100%",height:"auto"}} width={41} height={38}   alt="Shape-triangle"/>
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="subscribe-wrapper text-center text-xl-start mb-30">
                                <h6 className='fs-33 mfs-24 lnh50 cw  '>Ready for Unforgatable Travel. Remember US!</h6>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="subscribe-wrapper text-center mb-30">
                                <div className="subscribe-form-box pos-rel">
                                    <form className="subscribe-form sub-form-2">
                                        <input className='fs-19 fwb ls05' type="text" readOnly placeholder="Get It Instant Call "/>
                                    </form>
                                 <Link href={"tel:950077 1134"}>   <button className="sub_btn">Call Now</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

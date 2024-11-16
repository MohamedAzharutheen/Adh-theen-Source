import Image from 'next/image';
import React, { Component } from 'react'
import EnquiryForm from '../popup-form';
import { MdOutlineArrowForward } from 'react-icons/md';
class HeroSec extends Component {
  constructor(props){
    super(props);
    this.state={
        showForm: false,
    };
    this.formRef = React.createRef();
} 
handleFormPopup=()=>{
  this.setState({showForm:true});
  document.addEventListener('mousedown',this.handleClickOutside);
  }
  
  handleCloseForm =()=>{
      this.setState({showForm:false})
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
  
  handleClickOutside=(event)=>{
      if(this.formRef.current && !this.formRef.current.contains(event.target)){
          this.handleCloseForm();
      }
  }
  render() {
    const { courseName } = this.props;



  
    const BoxContainerData = [
        {
        icon:"🕋",
        title:" Choose the Right Package",
        cnt:"Choose the right academy"
       },
       {
        icon:"🔄",
        title:"Familiarize Yourself with the Rituals",
        cnt:"Practice as much as possible"
       },
       {
        icon:"🧳",
        title:"Pack Wisely",
        cnt:"Acquire the interview Skills"
       },
    ]

  return (
    <>
    <section className='bg-img mt70'>
        <div className='container'>
            <h1 className='fs-33 tac fwb'>Welcome to <span className='logo-clr fwb'> Adh-Theen </span> Hajj and Umrah Services!</h1>
            <p className='fs19 lnh33 ls025 mt-4'>At Ath-Theen, we are dedicated to providing a comprehensive and enriching experience for pilgrims embarking on their spiritual journey of Hajj and Umrah. <strong>Since our inception in 2008 </strong>, we have successfully assisted thousands of individuals and families in fulfilling their religious obligations with ease and comfort.</p>
            <div className='df fjsb fac fw mfdc tfdc '>
                 
                 {/* content Div */}

                <div className='box-container pd20 mmt40'>
              <div className='df  fdc gap20 mgap5 mbdf'>
                {BoxContainerData.map((items,index)=>{
                    return(
                 <div className='df gap16 mpdt10' key={index}>
                      <p className='fs-19'>{items.icon}</p>
                     <div className=''>
                        <p className={`fs-16 mfs-14`}>{items.title}</p>
                        <p className={`fs-16 mfs-12 dim-clr pdt8`}>{items.cnt}</p>
                    </div>

                 </div>
                 )
                })}
              </div>
            </div>
            
            <div className='mt40 '>
                {/* <h4 className={`fs-45 mfs-24  ${extrapopins.className}`}>Become <span className='ylw-clr'> A proffesional <br/> </span>UI UX Designer</h4> */}
                
                <div className='total-box mt32 pos-r'>
                    <div className='df fjse  mfw '>
                       <div className=''>
                        <p className={`fs-24 mfs-19 tac fwb`}>3900+</p>
                        <p className={`fs-24 mfs-16 pdt20 mpdt10 `}>Satisfied Pilgrims</p>
                        </div> 
                        <div className='line'></div>
                        <div className=''>
                        <p className={`fs-24 mfs-19 tac fwb`}>100%</p>
                        <p className={`fs-24 mfs-16 pdt20 mpdt10 `}>Client Satisfaction</p>
                        </div> 
                        <div className='line'></div>
                        <div className=''>
                        <p className={`fs-24 mfs-19 tac fwb`}>3500+</p>
                        <p className={`fs-24 mfs-16 pdt20 mpdt10 `}>Journey Facilitated</p>
                        </div> 
                        
                    </div>
                    <div className={`prem-box pos-a tac cw fs-24 mfs-16`}>Our Achievements</div>

                </div>

                <div className='df  mt32 mfw fjs gap20 mfji ' >
                    <div className='df fdc '>
                <div className='df gap20 fac'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14`}>Tailored Travel Solutions</p> 
                 </div> 
                 <div className='df gap20 fac mt32 mmt10'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14 `}>Expert Guidance</p> 
                 </div>   
                 </div>

                 <div className='df fdc mmt10'>
                <div className='df gap20 fac'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14 `}>Reliable Partnerships</p> 
                 </div> 
                 <div className='df gap20 fac mt32 mmt10'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14`}>Best Travels In Tirunelveli</p> 
                 </div>   
                 </div>

                 </div>
                 
                 {/* Button Div */}

                 <div className='mt32 df gap20 fjfe'>

                    <div className='enrl-btn'>
                    <p onClick={this.handleFormPopup} className={` cursor cw fs-18 mfs-16 fwb`}>Get It Now
                       &nbsp;
                       <span className=''>
                      <MdOutlineArrowForward size={34} />
                      </span>
                      </p> 
                      </div>
                 </div>
               
                </div>
            </div>

        </div>
    </section>
    {this.state.showForm && <div ref={this.formRef}><EnquiryForm close={this.handleCloseForm}/></div>}
    <style jsx>
        {`
        .hvz:hover{
        color: #000 !important;
        }
        .box-container{
        background-color: #FFFFFF;
        box-shadow: 0px 2px 8px 3px #00000040;
        border-radius: 10px;
        }
        .prem-box{
        padding: 10px;
        border-radius: 8px;
        background-color: #006c35;
        width: auto;
        top: -20%;
        left: 55%;
        }
        .bg-img{
            background-image: url('/master-training/prev-page/hero-section/bg-img.webp');
            width:100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-position: cover;
            background-size: 100% 100%;
            
        }
            .enrl-btn{
            background-color: #D0AB17;
            border-radius: 8px;
            padding: 10px 29px;
            border:1px solid #D0AB17;
             transition: all 0.4s linear;
            }
             .enrl-btn:hover {
             background-color: transparent;
             border: 1px solid #D0AB17;
             color: #e9c751;
             }
              .enrl-btn:hover p,span{
               color: #e9c751;
               
             }
             .demo-btn{
            background-color: transparent;
            border-radius: 8px;
            padding: 10px 29px;
            transition: all 0.4s linear;
            border : 1px solid;
            
            }
            .demo-btn:hover{
            background-color: #FDBB39;
            color: #FFFFFF;
            border: 1px solid #FDBB39;
            }
        .total-box{
        background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: 700px;
        padding: 24px 10px 24px 10px;
        }
        .line{
        border-right: 1px solid #000000;
        }
        @media only screen and (max-width: 800px){
        
                .total-box{
        background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: 100%;
        padding: 24px 10px 24px 10px;
        }
        
        }
         @media only screen and (max-width: 665px){
         .total-box{
           background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: auto;
        padding: 24px 0px 24px 10px;
         }
        .prem-box{
        padding: 5px;
        border-radius: 8px;
        background-color: #006c35;
        width: 180px;
        top: -20%;
        left: 15%;
        }
        }
             @media only screen and (max-width: 523px){
                 .prem-box{
        padding: 5px;
        border-radius: 8px;
        background-color: #006c35;
        width: 180px;
        top: -10%;
        left: 20%;

        }
             }
          @media only screen and (max-width: 400px){
         .total-box{
           background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: auto;
        padding: 24px 0px 24px 10px;
        
         }
          .box-container{
        background-color: #FFFFFF;
        box-shadow: 0px 2px 8px 3px #00000040;
        border-radius: 10px;
        width: auto;
       
        }
        .pd20{
        padding: 10px;
        }
        .mbdf{
        flex-direction: column;
        }
        .prem-box{
        padding: 5px;
        border-radius: 8px;
        background-color: #006c35;
        width: 180px;
        top: -10%;
        left: 20%;

        }
        }
           @media only screen and (max-width: 1255px){
          .tfdc{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          }
               .bg-img{
            background-image: url('/master-training/prev-page/hero-section/bg-img.webp');
            width:100%;
            height: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-position: cover;
            background-size: 100% 100%;
            
        }
        }
        `}
    </style>
    </>
  )
  
  }}export default HeroSec;


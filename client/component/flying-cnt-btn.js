    import Link from 'next/link';
import React from 'react'
    import { MdLocalPhone } from "react-icons/md";
    export default function FlyingCntBtn() {
    return (
    <>
    <section>
        <Link href={"tel:+91 8124289972"}>
        <div className='enq-btn df  fjc gap5'>
        <MdLocalPhone size={16} color='#fff'/>
        <p className={`fs-12 cw tac  `}>Schedule A Call</p>
        </div>
        </Link>
    </section>
    <style jsx>
        {`
        .enq-btn{
        background: red;
        width: 10rem;
        border-radius: 8px 0px 8px 0px;
        transform:rotate(90deg);
        position: fixed;
        top: 45%;
        right: -55px;
        z-index: 9999;
        padding: 10px 7px;
        }
        
        `}
    </style>
    </>
    )
    }

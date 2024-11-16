import Guidance from '@/component/guidance/guide';
import Layout from '@/component/layout';
import React from 'react'

export default function UmrahGuide() {

    const timelineItems = [

        {
            date: 'Ihram',
            cnt: 'Before entering the sacred state, pilgrims don the Ihram clothing, which consists of two white, unstitched garments for men and a simple dress for women. This attire symbolizes purity, equality, and the unity of all Muslims. Pilgrims recite the Talbiyah, expressing their readiness to respond to Allah’s call. This phase marks the start of their spiritual journey.',
            imageUrl: '/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
        {
            date: 'Tawaf',
            cnt: 'Upon arriving in Mecca, pilgrims perform Tawaf by circling the Kaaba seven times in a counter-clockwise direction. This act represents the unity of believers in worshiping the One God. Pilgrims often touch or kiss the Black Stone (Hajr al-Aswad) during their Tawaf, which is believed to bring blessings.',
            imageUrl:'/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
        {
            date: 'Sa’i: Walking Between Safa and Marwah',
            cnt: 'Walking between Safa and Marwah seven times, pilgrims reflect on Hagar’s search for water.This ritual symbolizes perseverance, trust in Allah, and unwavering faith.', // Replace with your image URL
            imageUrl: '/assets/images/guide/ihram-.svg' 
        },
        {
            date: 'Wuquf at Arafat: The Pinnacle of Hajj',
            cnt: 'Pilgrims gather at Arafat on the 9th of Dhul-Hijjah, the pinnacle of Hajj, to seek forgiveness.It is a day of reflection, prayer, and a profound connection with Allah.',
            imageUrl: '/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
        {
            date: 'Muzdalifah: Spending the Night and Collecting Pebbles',
            cnt: 'After sunset, pilgrims travel to Muzdalifah, collecting pebbles for the stoning ritual.They spend the night in prayer under the stars, reflecting on humility and unity.',
            imageUrl: '/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
        {
            date: 'Rami al-Jamarat: Stoning the Devil',
            cnt: 'Pilgrims throw pebbles at pillars symbolizing the devil, rejecting evil and temptation. This act is followed by the sacrifice of an animal in remembrance of Prophet Ibrahim’s story.',
           imageUrl: '/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
        {
            date: 'Tawaf al-Ifadah: Revisiting the Kaaba',
            cnt: 'Pilgrims return to the Kaaba to perform Tawaf al-Ifadah, completing the primary Hajj rituals.This act marks the fulfillment of their spiritual journey, bringing great joy.',
            imageUrl: '/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
        {
            date: 'Halq or Taqsir: Shaving or Cutting Hair',
            cnt: 'Male pilgrims shave or trim their hair, while women cut a small portion, symbolizing humility.This act signifies spiritual renewal and submission to Allah after completing Hajj.',
            imageUrl: '/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
        {
            date: 'Return to Mina: Days of Tashreeq and Eid al-Adha',
            cnt: 'Pilgrims spend time in Mina for prayer and reflection, celebrating Eid al-Adha.The days are marked by communal worship, sacrifice, and sharing in the blessings of Hajj.',
            imageUrl: '/assets/images/guide/ihram-.svg' // Replace with your image URL
        },
    ];
  return (
    <>
   <Layout>
        <h4 className='fs-24 tac mt40'>Umrah Guidance</h4>
        <Guidance timelineItems={timelineItems}/>
    </Layout>

    </>     
  )
}

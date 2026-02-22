import React from 'react'
import Head from '../sections/Head'
import Hero from '../sections/Hero'
import Team from '../sections/Team'
import SpecialOffer from '../sections/SpecialOffer'
import Fleet1 from '../sections/Fleet1'
import Fleet2 from '../sections/Fleet2'
import Tour from '../sections/Tour'
import Services from '../sections/Services'
import Booking from '../sections/Booking'
import FAQS from '../sections/FAQS'
import Subcribe from '../sections/Subcribe'

const Home = () => {
    return (
        <main>
            <section><Head /></section>
            <section><Hero /></section>
            <section><Team /></section>
            <section><SpecialOffer /></section>
            <section><Fleet1 /></section>
            <section><Services /></section>
            <section><Booking /></section>
            <section><FAQS /></section>
            <section><Subcribe /></section>
        </main>
    )
}

export default Home
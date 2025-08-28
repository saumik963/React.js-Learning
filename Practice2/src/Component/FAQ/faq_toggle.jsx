import React, { useState } from 'react'
import data from "./data.json";
import FAQ from './FAQ';
import style from "./faqs.module.css"

export default function FAQS() {
    const [faqs,setfaqs] = useState(data)
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>FAQs</h1>
        {faqs.map((faq)=> <FAQ key={faq.id} {... faq} /> )}
      </section>
    </main>
  )
}

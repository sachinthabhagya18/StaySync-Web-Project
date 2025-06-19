// app/contact/page.tsx (for Next.js 13+ with App Router)
'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>

      {/* Header Section */}
      <div className="relative h-[400px] bg-cover bg-center" 
        style={{ backgroundImage: 'url("/images/bilderboken-rlwE8f8anOc-unsplash.jpg")', }}>
        <div className="absolute top-0 w-full p-4 text-white flex justify-between items-center">
          <div>
            <p>742, Nuwaraeliya, Sri Lanka</p>
            <p>+94 76 351 8076</p>
            <p>contact.ct@gmail.com</p>
          </div>
          <div className="flex gap-4 items-start">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold">Contact Us </h1>
          <p className="mt-2 text-lg max-w-2xl">
            Have a question or need assistance with your booking? Our dedicated team is available around the clock to provide you with prompt and friendly service.
          </p>
            
            <span className="text-xl font-bold ml-4"> Home &gt; Contact Us</span>
          
          
        </div>
      </div>


        

      {/* Form Section */}
      <div className="bg-white py-20 px-4 sm:px-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">Write a Message</h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="border p-3" />
          <textarea placeholder="Your Message" className="border p-3 h-32 sm:row-span-3" />
          <input type="email" placeholder="Your Email" className="border p-3" />
          <input type="text" placeholder="Your Phone" className="border p-3" />
          <div className="col-span-1 sm:col-span-2">
            <button type="submit" className="bg-[#8B6A4D] text-white px-6 py-3 mt-4">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

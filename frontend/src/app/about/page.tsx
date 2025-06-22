import React from 'react';
import Image from 'next/image';
import { url } from 'inspector';

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url("/images/background/3.webp")',}}>
        
         <div className="flex flex-col justify-center items-center text-white text-center ">
            <h1 className="text-5xl font-bold mb-2 mt-45 ">About Us</h1>
          <p className="text-xl">Home / About Us</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6 lg:px-24 bg-white  ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="mb-1 leading-relaxed">
          <h2 className="text-2xl font-semibold ">Welcome</h2>
          <h3 className="text-5xl font-bold mt-10">History of Our Hotel</h3>
          <p className="text-gray-600 text-xm leading-relaxed md:w-2/3">
              For almost 30 years we have offered a refined experience of comfort,
              blending tradition with modern amenities. From the moment you step in,
              you'll feel at home in a place designed with elegance and care.
            </p>
        </div>
        
          <div className="flex gap-4">
            <div className="text-center mb-8" style={{ backgroundColor: '#AB8965' }} >
            <h4 className="text-4xl font-bold text-white mt-5">105%</h4>
            <p className='text-white'>Menu Selection</p>
            <div className='mt-12'>
            <Image
                src="/images/misc/8.webp"
                alt=''
                width={400}
                height={200}
                
              />
              </div>
            </div>
            <div className="text-center mt-8" style={{ backgroundColor: '#AB8965' }} >
            <Image
                src="/images/misc/7.webp"
                alt=''
                width={400}
                height={200}
                
              />
              <h4 className="text-4xl font-bold text-white mt-10">120+</h4>
              <p className='text-white '>Rooms Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-6 lg:px-24 bg-gradient-to-b from-[#AB8965] to-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Behind the Scene</h2>
          <h3 className="text-4xl font-bold mt-2">Our Team</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         
            <div className=" shadow-md rounded-lg p-4 text-center"style={{ backgroundColor: '#FFF5ED' }}>
              <Image
                src="/images/team/1.webp"
                alt="Team member"
                width={400}
                height={200}
                
              />
              <h4 className="text-lg font-semibold mt-4">Jeffery Mixman</h4>
              <p className="text-sm text-gray-500">Senior Manager</p>
            </div>
            <div className="shadow-md rounded-lg p-4 text-center"style={{ backgroundColor: '#FFF5ED' }}>
              <Image
                src="/images/team/2.webp"
                alt="Team member"
                width={350}
                height={200}
                
              />
              <h4 className="text-lg font-semibold mt-4">Jeffery Mixman</h4>
              <p className="text-sm text-gray-500">Senior Manager</p>
            </div>
            <div className="shadow-md rounded-lg p-4 text-center"style={{ backgroundColor: '#FFF5ED' }}>
              <Image
                src="/images/team/3.webp"
                alt="Team member"
                width={350}
                height={200}
                
              />
              <h4 className="text-lg font-semibold mt-4">Jeffery Mixman</h4>
              <p className="text-sm text-gray-500">Senior Manager</p>
            </div>
            <div className="shadow-md rounded-lg p-4 text-center"style={{ backgroundColor: '#FFF5ED' }}>
              <Image
                src="/images/team/4.webp"
                alt="Team member"
                width={350}
                height={200}
                
              />
              <h4 className="text-lg font-semibold mt-4">Jeffery Mixman</h4>
              <p className="text-sm text-gray-500">Senior Manager</p>
            </div>

          
        </div>
      </section>

      {/* Room Facilities Section */}
      <section className="py-16 px-6 lg:px-24 bg-white">
      
        <div className="text-left mb-12">
          
          <h3 className="text-4xl font-bold mt-2">Room Facilities</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              {name:'Cable TV', icon:"/images/icons/tv.png"},
              {name:'Free Wifi',icon:"/images/icons/wifi.png"},
              {name:'Balcony',icon:'/images/icons/balcony.png'},
              
            ].map((facility, index) => (
              <div key={index} className="flex items-start gap-4">
                 <img src={facility.icon} alt={facility.name + ' icon'} className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">{facility.name}</h4>
                  <p className="text-gray-500 text-sm">Some description about {facility.name} facility.</p>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              {name:'Work Desk', icon:"/images/icons/desk.png"},
              {name:'Safebox',icon:"/images/icons/safebox.png"},
              {name:'City View',icon:'/images/icons/city.png'},
              
            ].map((facility, index) => (
              <div key={index} className="flex items-start gap-4">
                 <img src={facility.icon} alt={facility.name + ' icon'} className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">{facility.name}</h4>
                  <p className="text-gray-500 text-sm">Some description about {facility.name} facility.</p>
                </div>
              </div>
            ))}
          </div>
          </div>


          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className='mb-8'><Image src="/images/misc/9.webp" alt="Room" width={400} height={300} className="rounded-lg" /></div>
            <div className='mt-8'><Image src="/images/misc/10.webp" alt="Room" width={400} height={300} className="rounded-lg" /></div>
          </div>
        
        
        </div>
      </section>

      {/* Footer/Instagram Preview */}
      <section className="py-6 text-center ">
        <h3 className=" font-semibold text-4xl mb-8">@_hotel_theme</h3>
        <div className="mt-4 flex flex-row leading-relaxded">
        <div className="flex flex-row md:flex-row items-center justify-center">
       
         <Image src="/images/misc/2.webp" alt="Preview" width={190} height={80}/>
         <Image src="/images/misc/5.webp" alt="Preview" width={190} height={80}/>
         <Image src="/images/misc/3.webp" alt="Preview" width={190} height={80}/>  
         <Image src="/images/misc/6.webp" alt="Preview" width={190} height={80}/> 
         </div> 
         <div className="flex flex-row md:flex-row items-center justify-center">
         <Image src="/images/misc/4.webp" alt="Preview" width={190} height={80}/>
         <Image src="/images/misc/18.webp" alt="Preview" width={190} height={80}/>
         <Image src="/images/misc/12.webp" alt="Preview" width={190} height={80}/>
         <Image src="/images/misc/14.webp" alt="Preview" width={190} height={80}/>
         </div>
         </div>
      </section>
    </div>
  );
};

export default About;

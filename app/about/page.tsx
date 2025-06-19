"use client"; // Required for framer-motion and useEffect to work

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Scroll animation utility
const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay = 0) => {
  const x = direction === "left" ? -100 : direction === "right" ? 100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.7,
        delay,
      },
    },
  };
};

const AboutPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative bg-[#021717] text-white pt-24 pb-32 px-6 md:px-16 overflow-hidden rounded-b-[60px]">
        <div className="max-w-6xl mx-auto  z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About Us
          </motion.h1>
          <p className="mt-4 text-sm text-blue-400">Home / <span className="text-white">About</span></p>
        </div>

        {/* Hero Image */}
        <motion.div
          className="absolute right-10 top-10 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image src="/images/image1.png" alt="Hero Woman" width={180} height={280} />
        </motion.div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-10">
        {/* Left Images */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <div className="flex space-x-4">
            <Image src="/images/image2.png" alt="Team" width={160} height={140} className="rounded-md" />
            <Image src="/images/image3.png" alt="Work" width={160} height={140} className="rounded-md" />
          </div>
          <div className="bg-white text-blue-600 px-5 py-2 rounded-md w-fit shadow">
            <strong>1.83k+</strong> Complete Project
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-blue-500 text-sm mb-2">OUR ABOUT NOW</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            About is Over 291+ Company Business Solution.
          </h2>
          <p className="text-gray-600 mb-4">
            At CAPYNGEN, we believe that every brand has a unique story that is being told. Since our establishment, we have been on a mission to empower businesses with new digital strategies that increase their appearance, connect with our audience, and give average results
          </p>

          {/* Progress Bar */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Company and Research</span>
              <span>45%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="w-[45%] h-full bg-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* Quote Box */}
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
            “If you are accused of committing a crime, you will the very best criminal defense attorney.”
          </blockquote>

          {/* Founder & Play */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-4"
          >
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition">
              ▶️ Watching Video
            </button>
            <div>
              <p className="font-semibold">Smith Pol</p>
              <p className="text-sm text-gray-500">Founder</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section with CountUp */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto px-4 py-10"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          [426000, 'Completed Project'],
          [1425000, 'Happy Clients'],
          [750000, 'Business Partners'],
          [884000, 'Award Wins'],
        ].map(([value, label], i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={+value} duration={2} separator=',' />+
            </h3>
            <p className="text-gray-600">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section */}
      <div className="bg-[#021717] text-white py-16 rounded-t-[60px] mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 md:px-10">
          {/* Left Content */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2">Who We Are</h3>
            <p className="text-sm text-gray-300">
              We are a team of passionate, creative thinkers and technical enthusiasts who are dedicated to convert ideas into effective campaigns. With specialization in SEO, social media marketing, content creation and web development, we ensure that your brand shines in today's competitive digital scenario.
            </p>
            <h3 className=" mt-4 text-lg font-semibold mb-2">What Sets Us Apart</h3>
            <div className="mt-4 text-sm">
              Our approach is simple yet effective: we hear, analyze and distribute the solutions to your goals. By combining data-operated insights with the creative story, we crafts strategies echoed with our target audiences and enhance your brand identity.
The digital marketing agency is filled with endless options. But do you know what sets us apart from the competitors? At Capyngen, we have a proven track record of success and a unique approach to driving high-quality leads, efficiently and affordably.
 {/* <span className="underline cursor-pointer">Let's Started</span> */}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src="/images/image4.png" alt="Discussion" width={400} height={300} className="rounded-md" />
          </motion.div>
        </div>
      </div>
       <div className="bg-white text-black">
      {/* Hero Section */}
      

      {/* Services Section */}
      <motion.div className="py-16 text-center" variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {/* <p className="text-blue-500 font-medium">What Sets Us Apart</p> */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {["Skills", "Innovation", "Custom solutions","Results Driven", "Customer centricity", "Collaborative Approach"].map((title, i) => (
            <motion.div key={i} className="w-[280px] bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-[160px]">
                <Image src={`/Service${i + 1}`} alt={title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto">🔵</div>
                <p className="font-semibold text-blue-600">{title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-20 text-center">
        {/* <p className="text-blue-500 font-medium mb-2">OUR TESTIMONIAL SAY</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">What Customers Awesome Reviews</h2> */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {["Our Vision"].map((name, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.2 + i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-md shadow-md w-full md:w-[300px]"
            >
              <p className="text-sm italic text-gray-600 mb-4">
                To become a global recognized leader in digital solutions, changes and development for all sizes of businesses. In CAPYNGEN, we imagine a future where innovation, creativity and technology basically integrate to empower brands, promote meaningful connections and give unique results.
              </p>
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-gray-400">{i === 0 ? "Founder" : "Manager"}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#021717] text-white py-16 px-6 md:px-16 rounded-t-[60px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-blue-400 text-sm">SEE OUR FAQS</p>
            <h2 className="text-2xl md:text-3xl font-bold my-4">We Fast Frequently Asked The Questions Now</h2>
            <p className="text-sm text-gray-300 mb-6">Donec quis felis commodo lorem ipsum in simply free text dlamat, passage of consectetur notted.</p>
            <h3 className="text-3xl font-bold text-blue-500">36+</h3>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="space-y-4">
            {["What happens to my data if I cancel?", "What are the different types of marketing solutions?", "How often should I work on the digital marketing?", "Are social media good for the business growth?"]
              .map((q, i) => (
                <motion.div key={i} variants={fadeIn("up", i * 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white text-black rounded-md">
                  <details className="p-4 cursor-pointer">
                    <summary className="font-semibold text-blue-600">{q}</summary>
                    <p className="mt-2 text-sm text-gray-600">There are many variations of passages of available but the have suffered alteration in some form...</p>
                  </details>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>

              {/* Team Section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 md:px-10 py-16 text-center"
      >
        <p className="text-blue-500 text-sm mb-2">OUR TEAM MEMBER</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Meet Great Customer Service</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Lorata Barsa", "Moras Batas", "Korata Mana"].map((name, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f3f6fd] p-4 rounded-lg shadow text-center"
            >
              <Image
                src={`/team${index + 3}.jpg`}
                alt={name}
                width={200}
                height={200}
                className="mx-auto rounded-md"
              />
              <p className="font-semibold mt-4">{name}</p>
              <p className="text-sm text-gray-500">{index === 1 ? "Manager" : "Founder"}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#021717] text-white py-16 px-4 md:px-10"
      >
        <div className="max-w-6xl mx-auto rounded-lg bg-gradient-to-r from-[#396] to-[#021717] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-4 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.94 6.06a8 8 0 0111.32 0l1.36 1.36a8 8 0 010 11.32l-1.36 1.36a8 8 0 01-11.32 0L2.94 17.5a8 8 0 010-11.32L4.3 4.88a8 8 0 0111.32 0l1.36 1.36a8 8 0 010 11.32l-1.36 1.36a8 8 0 01-11.32 0L2.94 17.5a8 8 0 010-11.32z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold">Subscribe To Our Newsletter</h3>
          </div>
          <form className="flex w-full md:w-auto">
            <input type="email" placeholder="Email address" className="px-4 py-2 rounded-l-full text-black focus:outline-none w-full md:w-64" />
            <button type="submit" className="bg-blue-600 px-6 py-2 rounded-r-full text-white font-semibold hover:bg-blue-700">Subscribe</button>
          </form>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-[#011617] text-white py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h4 className="font-bold text-lg">Tolak</h4>
            <p className="text-sm text-gray-400 mt-2">Automotive’s four Frederick locations continues its years tradition of quality auto repair services.</p>
            <div className="flex gap-3 mt-4">
              {["facebook", "twitter", "instagram", "youtube"].map((icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Why choose us</li>
              <li>Our Service</li>
              <li>Partners</li>
              <li>Core values</li>
              <li>Our projects</li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Gallery</li>
              <li>Packages</li>
              <li>Team</li>
              <li>Contact</li>
              <li>News</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="font-semibold mb-4">Recent Posts</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <strong>23 Jun 2023</strong><br />
                We round solution york Blog
              </li>
              <li>
                <strong>23 Jun 2023</strong><br />
                We Should be Descriptive
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
          © Copyright 2024 by Tolak NextJS Template.
        </div>
      </footer>
    
    </div>

    

  );
};

export default AboutPage;

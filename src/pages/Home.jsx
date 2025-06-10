import React from 'react';
import logo from '../assets/kaizen-studio.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <header className="text-center py-8">
        <img src={logo} alt="Kaizen Studio Logo" className="mx-auto h-32 w-auto mb-4" />
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Kaizen Studio</h1>
        <p className="text-xl text-gray-600">Your Partner in Continuous Improvement</p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Unlock Your Potential with Kaizen Studio</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            At Kaizen Studio, we believe in the power of small, continuous improvements to achieve monumental results. 
            Whether you're a startup looking to optimize processes, a growing business aiming for efficiency, 
            or an individual seeking personal development, our tailored solutions are designed to help you 
            thrive in a rapidly evolving world.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Strategic Consulting</h3>
            <p className="text-gray-700">Expert guidance to streamline your operations and enhance productivity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Innovative Solutions</h3>
            <p className="text-gray-700">Cutting-edge tools and technologies to drive your growth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Personal Development</h3>
            <p className="text-gray-700">Programs designed to foster continuous learning and skill enhancement.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Ready to Transform?</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Join countless others who have embraced the Kaizen philosophy with us. 
            Let's build a future of efficiency, innovation, and sustained success together.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </section>
      </main>

      <footer className="w-full bg-blue-800 text-white py-6 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Kaizen Studio. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy-policy" className="text-blue-200 hover:text-blue-100 mx-2">Privacy Policy</a>
            <span className="text-blue-200">|</span>
            <a href="/terms-of-use" className="text-blue-200 hover:text-blue-100 mx-2">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
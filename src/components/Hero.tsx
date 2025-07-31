import { MagicWandIcon } from '@phosphor-icons/react';

const Hero = () => {
  return (
    <section className="relative text-white text-center py-20 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <span className="absolute text-red-600 text-2xl top-10 left-10">✦</span>
        <span className="absolute text-red-600 text-2xl top-20 right-10">
          ✦
        </span>
        <span className="absolute text-red-600 text-2xl bottom-10 left-10">
          ✦
        </span>
        <span className="absolute text-red-600 text-2xl bottom-20 right-10">
          ✦
        </span>
      </div>
      <div className="relative z-10">
        <p className="text-sm text-gray-400 mb-2">Who we are</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We Turn Big Ideas into <br /> Scalable Business <br /> Results.
        </h1>
        <p className="text-sm text-gray-300 mb-6 w-3/6 text-center mx-auto">
          From strategy to execution, we help innovative companies unlock growth
          through tailored technology, design, data, and digital marketing.
        </p>
        <div className="space-x-4">
          <button className="bg-transparent outline outline-[#dfc2c2] text-[#dfc2c2] px-6 py-2 rounded-full hover:bg-gray-200 hover:text-black cursor-pointer">
            <p className="inline pr-3">Build With Us</p>
            <MagicWandIcon size={18} className="inline" />
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
      <div className="absolute inset-auto w-full flex place-content-center left-0 -bottom-20">
        <div className="bg-red-900 blur-[150px] rounded-full h-96 w-3/6 backdrop-blur-[200px]" />
      </div>
    </section>
  );
};

export default Hero;

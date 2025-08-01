import { ArrowUpRightIcon, MagicWandIcon } from '@phosphor-icons/react';
import ParentDashboard from '../assets/ParentDashboard.png';
import AspectRatioBlock from '../assets/AspectRatioBlock.png';
import AspectRatioBlock2 from '../assets/AspectRatioBlock2.png';
import AspectRatioBlock3 from '../assets/AspectRatioBlock3.png';
import AspectRatioBlock4 from '../assets/AspectRatioBlock4.png';
import AspectRatioBlock5 from '../assets/AspectRatioBlock5.png';
import Column from '../assets/column.png';

const HomeBody = () => {
  return (
    <>
      {/* Some of our works */}
      <section className="mt-32">
        <div className="w-4/6 mx-auto mb-14">
          <p className="text-3xl text-center mb-7">Some of Our Works</p>
          <p className="text-center text-[#ffffffb3]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 9 }).map(() => (
            <div className="bg-[#1b1b1b] px-3 py-3 rounded-md">
              <div className="flex items-center space-x-2 text-sm">
                <p>Write a attractive hero title for the following website </p>
                <ArrowUpRightIcon size={20} />
              </div>
              <a href="#linked" className="text-blue-600">
                https://zeltalabs.com/
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Our leading product */}
      <section className="mt-32">
        <div className="w-4/6 mx-auto mb-14">
          <p className="text-3xl text-center mb-7">Our Leading Product</p>
          <p className="text-center text-[#ffffffb3]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
          <div className="space-x-4 flex justify-center items-center mt-5">
            <button className="bg-transparent outline outline-[#fff] text-[#fff] px-6 py-2 rounded-full hover:bg-gray-200 hover:text-black cursor-pointer">
              <p className="inline pr-3">View Project</p>
              <MagicWandIcon size={18} className="inline" />
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-red-700 cursor-pointer hover:text-white">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-5/6 mx-auto mt-24">
          <img src={ParentDashboard} alt="Parent Dashboard of TCM" />
        </div>
      </section>

      {/* And More Magic */}
      <section className="mt-32">
        <div className="w-4/6 mx-auto mb-14">
          <p className="text-3xl text-center mb-7">And More Magic</p>
          <p className="text-center text-[#ffffffb3]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </div>

        <div className="w-5/6 mx-auto mt-24">
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <img src={Column} alt="Column" />
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              <img src={AspectRatioBlock} alt="Aspect Ratio Block" />
              <img src={AspectRatioBlock2} alt="Aspect Ratio Block 2" />
              <img src={AspectRatioBlock3} alt="Aspect Ratio Block 3" />
              <img src={AspectRatioBlock4} alt="Aspect Ratio Block 4" />
            </div>
          </div>
        </div>
      </section>

      {/* This is what our clients are saying */}
      <section className="mt-32">
        <div className="w-4/6 mx-auto mb-14">
          <p className="text-3xl text-center mb-7">
            This is What Our Clients Are Saying
          </p>
          <p className="text-center text-[#ffffffb3]">
            Discover endless creativity with PromptVerse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            trends, automate tasks, and extract insights from any document or
            URL. All within a sleek, futuristic design. Create more,
            effortlessly.
          </p>
        </div>

        <div className="w-5/6 mx-auto mt-24 grid grid-cols-2 gap-x-2 bg-[#0E0E0E] p-10 rounded-sm">
          <div>
            <p className="text-3xl mb-10">
              Enhance Your Projects with Ultra-Realistic AI Voices
            </p>
            <p className="text-[#ffffffb3]  mb-4">
              Create engaging voice content with unique AI Voices perfect for
              your audience.
            </p>
            <p className="text-[#ffffffb3]  mb-4">
              Generate Conversational, Long-form or Short-form Voice Content
              With Consistent Quality and Performances.
            </p>
            <p className="text-[#ffffffb3]  mb-4">
              Secure and Private Voice Generations with Full Commercial and
              Copyrights
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <p className="outline outline-white rounded-full px-7 py-2">
                Train Voice Models
              </p>
              <p className="outline outline-white rounded-full px-7 py-2">
                Text-to-speech
              </p>
              <p className="outline outline-white rounded-full px-7 py-2">
                AI Voice Generation
              </p>
              <p className="outline outline-white rounded-full px-7 py-2">
                AI music Production
              </p>
              <p className="outline outline-white rounded-full px-7 py-2">
                AI Composition
              </p>
              <button className="outline outline-white rounded-full px-7 py-2 bg-white hover:bg-[#ffffffdb] text-black cursor-pointer">
                Generate Now
              </button>
            </div>
          </div>
          <div>
            <img src={AspectRatioBlock5} alt="Random Image" />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="mt-32">
        <div className="w-5/6 mx-auto mb-14">
          <p className="text-4xl mb-7 text-[#ffffff94]">
            <span className="block">What </span>
            <span className="text-white">Xpathedge </span>
            Offers You
          </p>
          <hr className="border-gray-500" />

          <div className="grid grid-cols-3 gap-x-10 mt-10 gap-y-7">
            <div>
              <p className="mb-3">Product Design</p>
              <p className="text-[#828282]">
                We are visionaries We will tell you everything you need about
                the market at the moment, but also predict how the cost of
                housing and your areawill change in a few years
              </p>
            </div>
            <div>
              <p className="mb-3">Brand Design</p>
              <p className="text-[#828282]">
                We do not want to sell you any specific object, our goal is to
                find the “right” apartment for you and remain partners for many
                years.
              </p>
            </div>
            <div>
              <p className="mb-3">Scans Images</p>
              <p className="text-[#828282]">
                We provide a full range of services for the purchase and sale of
                real estate, from searching for an object and ending with
                paperwork.
              </p>
            </div>
            <div>
              <p className="mb-3">Software Engineering</p>
              <p className="text-[#828282]">
                The housing should make your life better. Therefore, when
                selecting real estate, we carefully learn your request and find
                only what is ideal.
              </p>
            </div>
            <div>
              <p className="mb-3">Research</p>
              <p className="text-[#828282]">
                We have more than 130 objects in our portfolio, but for you we
                will make an individual selection with only suitable options.
              </p>
            </div>
            <div>
              <p className="mb-3">Automation</p>
              <p className="text-[#828282]">
                Whether it's the legal execution of a transaction, interior
                design or the technical details of a building, our brokers will
                tell you everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 text-center mb-32">
        <div className="w-5/6 mx-auto mb-14 bg-[#0E0E0E] p-20 relative overflow-hidden">
          <div className="absolute inset-auto flex place-content-center top-0 right-0">
            <div className="bg-white blur-[130px] rounded-full h-36 w-36" />
          </div>
          <p className="text-5xl mb-10">
            Xpathedge has no limitation. Get started on a journey with
            Xpathedge.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#f0f0f0] cursor-pointer">
            Book A Consultation Call
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeBody;

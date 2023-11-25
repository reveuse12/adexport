import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-8">
        {/* Header Section */}
        <header className="col-span-2 hover:shadow-xl text-black py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[#0f2b7f]">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Our success is a testament to the trust our clients place in us.
            Collaborating with esteemed international companies, we have not
            just delivered projects; we have built lasting partnerships. From
            supplying cutting-edge industrial parts to facilitating seamless
            logistics, our portfolio showcases a diverse range of successfully
            completed projects that underscore our capabilities and commitment
            to client satisfaction.
          </p>
        </header>

        {/* Meet Our Founders Section */}
        <section className="col-span-2 py-6 hover:shadow-xl border rounded-xl text-black">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0f2b7f]">
              Meet Our Founders
            </h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              AD Export is a trusted partner for global businesses. Our team is
              comprised of highly skilled professionals with a passion for
              international trade.
            </p>
            <div className="flex flex-wrap justify-center my-8 gap-8">
              {/* Add team members or images here */}
              <Image
                src="/found.jpeg"
                width={300}
                height={100}
                loading="lazy"
                alt="founders"
                className="object-cover shadow-xl rounded-xl mb-4 md:mb-0"
              />
              <Image
                src="/founder2.jpg"
                width={300}
                height={100}
                loading="lazy"
                alt="founders"
                className="object-cover shadow-xl rounded-xl"
              />
            </div>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              At the helm of AD Export is Amit Dhameilya & Bhargav Kathiriya, a
              visionary leader whose passion for international trade has been
              the driving force behind our success. Amit Dhameilya & Bhargav
              Kathiriya expertise and commitment to delivering quality solutions
              have shaped AD Export into a dynamic and trustworthy partner for
              global businesses. With a keen understanding of the industry, Amit
              Dhameilya & Bhargav Kathiriya leads by example, instilling in our
              team the values that define AD Export.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="col-span-2 hover:shadow-xl rounded-xl border py-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-[#0f2b7f]">
              Our Story
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At AD Export, our journey is woven with a commitment to excellence
              and a passion for international trade. Established with a vision
              to bridge global industries, we have evolved into a reliable name
              in the export sector. Our story is one of unwavering dedication,
              meticulous attention to detail, and a relentless pursuit of
              delivering top-notch solutions to our clients.
            </p>
          </div>
        </section>
        {/* Award Logo List Section */}
        <section className="col-span-2 hover:shadow-xl border rounded-xl py-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#0f2b7f]">
              Award Logos
            </h2>
            <p className="max-w-2xl mx-auto">
              Recognition is a reflection of our commitment to excellence. AD
              Export takes pride in the accolades we have earned on our journey.
              These awards stand as a testament to our industry leadership,
              innovation, and the trust we have garnered from our clients and
              peers alike. We believe in setting benchmarks, and our awards
              validate our continuous pursuit of excellence.
            </p>
            <div className="flex flex-wrap justify-center mt-8">
              {/* Add award logos or images here
            <img src="award1.png" alt="Award 1" className="m-4" />
            <img src="award2.png" alt="Award 2" className="m-4" />
            <img src="award3.png" alt="Award 3" className="m-4" /> */}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="col-span-2 py-6 border hover:shadow-xl rounded-xl">
          <div className="container mx-auto flex justify-center">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Clients
                </h3>
                <p className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                  500+
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Projects
                </h3>
                <p className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                  1000+
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="col-span-2 hover:shadow-xl border  rounded-xl py-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-[#0f2b7f]">
              Why Trust AD Export?
            </h2>
            <p className="max-w-3xl mx-auto">
              AD Export is not just a company; it's a promise. A promise of
              reliability, quality, and a partnership that goes beyond business
              transactions. Our story, client successes, awards, and leadership
              are not just words on a page; they are the foundation of the trust
              our clients place in us. Join hands with AD Export, where every
              project is a testament to our commitment to delivering excellence
              on a global scale.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

import Image from "next/image";
import React from "react";
import Card from "../components/Card";

const page = () => {
  const openingSize = [
    { title: "155 MM" },
    { title: "305 MM" },
    { title: "205 MM" },
    { title: "355 MM" },
    { title: "255 MM" },
    { title: "4055 MM" },
  ];
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold underline decoration-pink-500 mb-16 md:text-5xl">
        Machine List
      </h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-12">Precision Modular Vice</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <Image
            src="/the-laser-cuts-4398315_1280.jpg"
            alt="Precision Modular Vice"
            width={500}
            height={500}
            className="rounded-lg h-full w-full object-contain shadow-lg"
          />
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold underline decoration-pink-500 mb-4">
              Modular Vice Opening
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {openingSize.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  content={item.content}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* section 1 */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Product E2710</h3>
          <p className="underline text-lg font-semibold decoration-pink-500 mb-4">
            Key Features
          </p>
          <ul className="list-disc leading-8">
            <li>
              This Vice designed for precision milling, grinding and widely used
              with CNC and standard milling machines.
            </li>
            <li>
              Both moving and fixed blocks are precision ground with parallelism
              accuracy 0.01 mm and thus a precise and safely clamping
            </li>
            <li>
              All components of the vice are interchangeable with perfect
              alignment to provide different workholding solutions.
            </li>
            <li>
              The space-saving design and solid construction allow a maximum
              blocking ratio to the total overall dimension of the vice.
            </li>
            <li>
              Four extra tapped holes in moving and fixed rear blocks in front
              and top for optional jaws and fixtures.
            </li>
            <li>
              High alloyed quality resistance steel, case hardened HRC 60 ±2 is
              used in all body and accessories of the vice to give maximum
              rigidity. High performance & no wear.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 p-8 w-full">
          <Image
            src="/2710.png"
            alt="Product E2710"
            width={500}
            height={500}
            className="rounded-lg h-full w-full shadow-lg"
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/blueprint.png"
            alt="Product E2710"
            width={500}
            height={500}
            className="rounded-lg h-full w-full object-contain shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-xl font-semibold mb-12 underline decoration-pink-500">
            Standard Accessories
          </p>
          <ul className="list-disc leading-12">
            <li>
              1 Work Stopper, 1 Pair of standard 16mm positioning key nuts
            </li>
            <li>4 Clamps, T Allen Key, 1 box Wrench</li>
          </ul>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="">
          <h3 className="text-xl font-bold mb-8">Product E2711</h3>
          <p className="text-lg mb-8 underline decoration-pink-500 font-semibold">
            Scope Of Application
          </p>
          <ul className="list-disc">
            <li>VMC Machine - For efficient precision machining</li>
            <li>Horizontal installation - great variability & flexibility</li>
          </ul>
          <p>Key Features</p>
          <h3>this key hightlight od this product is:</h3>
          <ul className="list-disc leading-12">
            <li>
              Modular Vice designed for precision milling, grinding and widely
              used with CNC milling machines
            </li>
            <li>
              Both jaws plates are in pull-down angle. This ensures, during the
              clamping operation a down load run of the workpiece against the
              vice base and thus a precise and safe clamping.
            </li>
            <li>
              All components of vice are interchangeable with perfect alignment
              o provide differently work to hold solutions.
            </li>
            <li>
              The space-saving design and solid construction allow a maximum
              blocking ratio to total overall dimension of the vice.
            </li>
            <li>
              Four extra tapped holes with ground back jaw rear face increase
              maximum opening capacity with the addition of jaws extensions.
            </li>
            <li>
              Four extra tapped holes with ground back jaw rear face increase
              maximum opening capacity with the addition of jaws extensions.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src="/2711.png"
            alt="Product E2710"
            width={500}
            height={500}
            className="rounded-lg w-full h-full object-contain shadow-lg"
          />
        </div>
      </div>

      {/* section 4 */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/blueprint.png"
            alt="Product E2710"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-lg font-semibold underline decoration-pink-500">
            Standard Accessories
          </p>
          <ul className="list-disc leading-12">
            <li>
              1 Work Stopper, 1 Pair of standard 16mm positioning key nuts
            </li>
            <li>4 Clamps, T Allen Key, 1 box Wrench</li>
          </ul>
        </div>
      </div>

      {/* section 5 */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div>
          <h3 className="text-xl font-bold mb-12">Product E2712</h3>
          <p className="underline font-semibold text-lg decoration-pink-500">
            Scope Of Application
          </p>
          <ul className="list-disc">
            <li>VMC Machine - For efficient precision machining</li>
            <li>Horizontal installation - great variability & flexibility</li>
          </ul>
          <p>Key Features</p>
          <h3>this key hightlight od this product is:</h3>
          <ul className="list-disc leading-12">
            <li>
              Two Piece Modular Vice designed for precision milling, grinding
              and widely used with CNC and standard milling machines.
            </li>
            <li>
              Modular elements allow you perfect clamping even of big workpieces
              which need heaviest machining using the machine table as surface.
            </li>
            <li>
              This vice is a solution for a lot of applications and a perfect
              complement or alternative to single or double vices.
            </li>
            <li>
              Both jaws plates are in pull-down angle. This ensures, during the
              clamping operation a down load run of the workpiece against the
              vice base and thus a precise and safely clamping.
            </li>
            <li>
              All components of vice are interchangeable with perfect alignment
              to provide different work to hold solutions.
            </li>
            <li>
              The space-saving design and solid construction allow a maximum
              blocking ratio to total overall dimension of the vice.
            </li>
            <li>
              For extra tapped hole with ground back jaw rear face increase
              maximum opening capacity with the addition of jaws extensions.
            </li>
            <li>
              High alloyed quality resistance steel, case hardened HRC 60 ±2 is
              used in all body and accessories of vice to give maximum rigidity,
              high performance & no wear.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image
            src="/2712.png"
            alt="Product E2710"
            width={500}
            height={500}
            className="rounded-lg h-full w-full object-contain shadow-lg"
          />
        </div>
      </div>

      {/* section 6 */}
      <div className="flex flex-col lg:flex-row mb-12">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/blueprint12.png"
            alt="Product E2710"
            width={500}
            height={500}
            className="rounded-lg h-full w-full object-contain shadow-lg"
          />
        </div>
        <div>
          <p className="text-lg underline decoration-pink-500">
            Standard Accessories
          </p>
          <ul className="list-disc leading-12">
            <li>
              1 Work Stopper, 1 Pair of standard 16mm positioning key nuts
            </li>
            <li>4 Clamps, T Allen Key, 1 box Wrench</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;

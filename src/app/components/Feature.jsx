import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Make every step user-centric
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10">
              <Image
                width={100}
                height={150}
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bd6f8819ea49d9990848_Frame%2047885-7.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl font-semibold">Support</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            <div className="grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10">
              <Image
                width={100}
                height={150}
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bc975b21e904613ae60d_Frame%2047885-2.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl font-semibold">Organise</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            <div className="grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10">
              <Image
                width={100}
                height={150}
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bc9157ec9794f99cb7a1_Frame%2047885-3.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl font-semibold">Flexibility</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>

            <div className="grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10">
              <Image
                width={100}
                height={150}
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bc900f798334430e6064_Frame%2047885-4.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl font-semibold">Speed</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>

            <div className="grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10">
              <Image
                width={100}
                height={150}
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bc8843648dc8b08bbea1_Frame%2047885-5.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl font-semibold">Quality</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>

            <div className="grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10">
              <Image
                width={100}
                height={150}
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bc86b3c62b1933cdce49_Frame%2047885-6.svg"
                alt=""
                className="inline-block h-16"
              />
              <p className="text-xl font-semibold">Resource</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;

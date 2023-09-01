import React from "react";
import services from "@/assets/images/services.jpg";
import team from "@/assets/images/team_2.jpg";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex justify-center bg-white">
      <div className="max-w-6xl mt-16">
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-0 pb-16">
          <div className="col-span-1 ">
            <p className=" text-4xl pb-8">Company Overview</p>
            <p className="text-xl">
              We have over 15 years of experience Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the power
              of consectetur adi pisi cing elit, sed do eiusmod tempor
              xercitationemut labore. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aenean bibendum nec risus et suscipit Curabitur
              metus ipsum. But I must explain to you how all this mistaken idea
              of denouncing pleasure and praising pain was born and I will give
              you a complete account of the system.
            </p>
          </div>

          <div className="col-span-1  shadow-xl shadow-black">
            <Image src={services} />
          </div>
        </div>

        <div className=" bg-slate-100 p-4 ">
          <div>
            <h1 className="text-4xl font-bold mb-4">COMPANY HISTORY</h1>
            <p>
              IT IS PLEASURE, BUT BECAUSE THOSE WHO DO NOT KNOW HOW TO PURSUE
              PLEASURE RATIONALLY ENCOUNTER CONSEQUENCES THAT ARE EXTREMELY
              PAINFUL. NOR AGAIN IS THERE ANYONE WHO LOVES OR PURSUES OR DESIRES
              TO OBTAIN PAIN OF ITSELF.
            </p>

            <ul className="p-16 list-disc  ">
              <li>
                <h1 className="text-2xl  mb-4">start with a small Business</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum.</p>
              </li>
              <li>
                <h1 className="text-2xl  mb-4">start with a small Business</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum.</p>
              </li>
              <li>
                <h1 className="text-2xl  mb-4">start with a small Business</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum.</p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 text-white max-md:grid-cols-1 max-md:gap-4">
            <div className="col-span-1 bg-green-800  text-center p-16">
              <h1 className="text-2xl  mb-4">Advisor</h1>
              <p>Lorem ipsum dolor sit amet, Let it it floats back to you.</p>
            </div>
            <div className="col-span-1 bg-green-700  text-center p-16">
              <h1 className="text-2xl  mb-4">Advisor</h1>
              <p>Lorem ipsum dolor sit amet, Let it it floats back to you.</p>
            </div>
            <div className="col-span-1 bg-green-600  text-center p-16">
              <h1 className="text-2xl  mb-4">Advisor</h1>
              <p>Lorem ipsum dolor sit amet, Let it it floats back to you.</p>
            </div>
            <div className="col-span-1 bg-green-500  text-center p-16">
              <h1 className="text-2xl  mb-4">Advisor</h1>
              <p>Lorem ipsum dolor sit amet, Let it it floats back to you.</p>
            </div>
            <div className="col-span-1 bg-green-400  text-center p-16">
              <h1 className="text-2xl  mb-4">Advisor</h1>
              <p>Lorem ipsum dolor sit amet, Let it it floats back to you.</p>
            </div>
            <div className="col-span-1 bg-green-300  text-center p-16">
              <h1 className="text-2xl  mb-4">Advisor</h1>
              <p>Lorem ipsum dolor sit amet, Let it it floats back to you.</p>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">OUR EXPERT TEAM</h1>
            <p>Lorem ipsum dolor sit amet, Let it it floats back to you.</p>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 ">
            <div className="col-span-1 ">
              <Image className="m-4" width={370} src={team} />
              <h1 className="text-2xl  text-green-500 mb-4">Amanda Seyfried</h1>
              <p>Head of Innovation</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been…
              </p>
              <ul className="flex gap-5 font-bold">
                <li className="m-2">faceBook</li>
                <li className="m-2">twitter</li>
                <li className="m-2">Youtube</li>
              </ul>
            </div>

            <div className="col-span-1 ">
              <Image className="m-4" width={370} src={team} />
              <h1 className="text-2xl  text-green-500 mb-4">Amanda Seyfried</h1>
              <p>Head of Innovation</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been…
              </p>
              <ul className="flex gap-5 font-bold">
                <li className="m-2">faceBook</li>
                <li className="m-2">twitter</li>
                <li className="m-2">Youtube</li>
              </ul>
            </div>

            <div className="col-span-1 ">
              <Image className="m-4" width={370} src={team} />
              <h1 className="text-2xl  text-green-500 mb-4">Amanda Seyfried</h1>
              <p>Head of Innovation</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been…
              </p>
              <ul className="flex gap-5 font-bold">
                <li className="m-2">faceBook</li>
                <li className="m-2">twitter</li>
                <li className="m-2">Youtube</li>
              </ul>
            </div>

            <div className="col-span-1 ">
              <Image className="m-4" width={370} src={team} />
              <h1 className="text-2xl  text-green-500 mb-4">Amanda Seyfried</h1>
              <p>Head of Innovation</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been…
              </p>
              <ul className="flex gap-5 font-bold">
                <li className="m-2">faceBook</li>
                <li className="m-2">twitter</li>
                <li className="m-2">Youtube</li>
              </ul>
            </div>

            <div className="col-span-1 ">
              <Image className="m-4" width={370} src={team} />
              <h1 className="text-2xl  text-green-500 mb-4">Amanda Seyfried</h1>
              <p>Head of Innovation</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been…
              </p>
              <ul className="flex gap-5 font-bold">
                <li className="m-2">faceBook</li>
                <li className="m-2">twitter</li>
                <li className="m-2">Youtube</li>
              </ul>
            </div>

            <div className="col-span-1 ">
              <Image className="m-4" width={370} src={team} />
              <h1 className="text-2xl  text-green-500 mb-4">Amanda Seyfried</h1>
              <p>Head of Innovation</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been…
              </p>
              <ul className="flex gap-5 font-bold">
                <li className="m-2">faceBook</li>
                <li className="m-2">twitter</li>
                <li className="m-2">Youtube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

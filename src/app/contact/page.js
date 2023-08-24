"use client";

import React, { formState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "primeicons/primeicons.css";
import { useForm } from "react-hook-form";


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center  bg-slate-50">
      <div className="max-w-5xl">

        <div className="grid grid-cols-2">
          <div className="col-span-1 ">
            <div className="flex ">
              <div className="py-4">
                <h2 className=" text-3xl">Sales Queries</h2>

                <img
                  className="py-2"
                  src="http://advisor.brighthemes.biz/demo/wp-content/uploads/2016/08/sales-quries-img.jpg"
                />

                <h2 className=" text-3xl">Follow Us</h2>

                <ul className="flex justify-center ">
                  <li className="p-1   rounded-full hover:bg-blue-800 border-4">
                    <a href="mailto:support@avisor-theme.com">
                      <i
                        className="pi pi-facebook m-2 "
                        style={{ color: "black", fontSize: "1rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="p-1   rounded-full hover:bg-blue-500 border-4">
                    <a href="mailto:support@avisor-theme.com">
                      <i
                        className="pi pi-twitter m-2"
                        style={{ color: "slateblue", fontSize: "1rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="p-1   rounded-full hover:bg-blue-600 border-4">
                    <a href="mailto:support@avisor-theme.com">
                      <i
                        className="pi pi-google m-2 hover:bg-slate-500 "
                        style={{ color: "slateblue", fontSize: "1rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="p-1   rounded-full hover:bg-blue-600 border-4">
                    <a href="mailto:support@avisor-theme.com">
                      <i
                        className="pi pi-linkedin m-2"
                        style={{ color: "slateblue", fontSize: "1rem" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-row  p-4 ">
                <p className=" flex items-center text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper
                  ac dolor Eaque ipsa quae. ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. luptas sit
                  aspernatur.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
              <div className="flex flex-col py-2">
                <InputText
                  placeholder="Your Names"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && <p>İsim alanı zorunludur.</p>}
              </div>
              <div className="flex flex-col py-2">
                <InputText
                  placeholder="Email Address"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>email alanı zorunludur.</p>}
              </div>
              <div className="flex flex-col py-2">
                <InputText
                  type="number"
                  placeholder="Phone No"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <p>phone alanı zorunludur.</p>}
              </div>
              <div className="flex flex-col py-2">
                <InputTextarea
                  className="col-span-2"
                  {...register("text", { required: true })}
                  rows={5}
                  cols={30}
                />
                {errors.text && <p>text alanı zorunludur.</p>}
              </div>
              <Button
                className="w-1/2"
                label="Send Message"
                onClick={handleSubmit}
                type="submit"
                severity="success"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

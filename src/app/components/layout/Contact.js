import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "primeicons/primeicons.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {

    console.log(name,email,phone,text);



  }, [name,email,phone,text]);
  





  return (
    <div className="flex justify-center">
      <div className="max-w-5xl">
        <div className="container flex  justify-around align-middle p-10 bg-slate-200 ">
          <div className="float-left clearfix flex">
            <h2 className=" text-4xl">Contact Us</h2>
            <br />
            <ul className="breadcrumbs float-right">
              <li>
                <a href="http://advisor.brighthemes.biz/demo/">Home</a>
              </li>
              <li>/Contact Us</li>
            </ul>
          </div>
          <Button severity="success" rounded>
            <i
              className="pi pi-phone m-2 "
            ></i>
            Contact Us
          </Button>
        </div>

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
                        style={{ color: "black", fontSize: "2rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="p-1   rounded-full hover:bg-blue-500 border-4">
                    <a href="mailto:support@avisor-theme.com">
                      <i
                        className="pi pi-twitter m-2"
                        style={{ color: "slateblue", fontSize: "2rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="p-1   rounded-full hover:bg-blue-600 border-4">
                    <a href="mailto:support@avisor-theme.com">
                      <i
                        className="pi pi-google m-2 hover:bg-slate-500 "
                        style={{ color: "slateblue", fontSize: "2rem" }}
                      ></i>
                    </a>
                  </li>
                  <li className="p-1   rounded-full hover:bg-blue-600 border-4">
                    <a href="mailto:support@avisor-theme.com">
                      <i
                        className="pi pi-linkedin m-2"
                        style={{ color: "slateblue", fontSize: "2rem" }}
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
            <div className="grid grid-cols-2 gap-4">
              <InputText
                placeholder="Your Names"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputText
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputText
                placeholder="Phone No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <InputTextarea
                className="col-span-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                cols={30}
              />

              <Button label="Send Message" severity="success" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

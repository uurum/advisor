import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    console.log(name,email);



  }, [name,email]);
  

  

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 max-w-5xl gap-4">
        <div className="col-span-3 flex">
          <div className=" p-5">
            <img
              src="http://advisor.brighthemes.biz/demo/wp-content/uploads/2016/07/footer-logo.png"
              alt=""
            />
          </div>
          <div className=" p-5 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
              eiusmod tempor Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipis civelit sed quia non qui
              dolorem or phone +11 987 654 3210 ipsum quia dolor sit amet,
              consectetur.
            </p>
          </div>
        </div>

        <div className="col-span-2 p-4 bg-gray-200">
          <ul className=" flex">
            <li>
              <i className="pi pi-phone" style={{ fontSize: "2rem" }}></i>

              <a href="mailto:support@avisor-theme.com">
                +1 900 234 567 support@avisor-theme.com
              </a>
            </li>

            <li>
              Manhatta Hall
              <span>Advisor Ltd 1258, Melbourne, australia</span>
            </li>
          </ul>
        </div>

        <div className=" row-span-3 p-4 bg-gray-300">
          <h4 className="p-5">Newsletter</h4>
          <div className="flex flex-col">
            <div className="card flex justify-center m-2">
              <InputText
              placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="card flex justify-center m-2">
              <InputText
              placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <ul className="flex justify-center " >
            <li>
              <a href="mailto:support@avisor-theme.com">
                <i className="pi pi-facebook m-2 " style={{  color: 'slateblue' , fontSize: "2rem" }}></i>
              </a>
            </li>
            <li>
              <a href="mailto:support@avisor-theme.com">
                <i className="pi pi-twitter m-2" style={{ color: 'slateblue' , fontSize: "2rem" }}></i>
              </a>
            </li>
            <li>
              <a href="mailto:support@avisor-theme.com">
                <i className="pi pi-instagram m-2 hover:bg-slate-500   transition-all"   style={{ color: 'slateblue' , fontSize: "2rem"}}></i>
              </a>
            </li>
            <li>
              <a href="mailto:support@avisor-theme.com">
                <i className="pi pi-linkedin m-2" style={{ color: 'slateblue' , fontSize: "2rem" }}></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="p-4 flex">
          <ul className="list-disc	w-6/12">
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
          </ul>

          <ul className="list-disc	">
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { AccordionTab } from "primereact/accordion";
import { Accordion } from "primereact/accordion";
import SimpleSlider from "../components/layout/SimpleSlider";
import services from "@/assets/images/services.jpg";
import "primeicons/primeicons.css";
import Link from "next/link";

import Image from "next/image";

function Financial() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const slides = [
    <Image src={services} />,
    <Image src={services} />,
    <Image src={services} />,
  ];

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="flex justify-center bg-white">
      <div className="max-w-6xl">
        <div className="flex justify-center">
          <div className="flex flex-col w-1/4 mr-8">
            <ul>
              <li className="p-4 flex justify-between items-center bg-slate-200 border-l-8  border-transparent hover:border-l-8 hover:border-green-600">
                <Link href="/contact">Contact</Link>
                <i className="pi pi-chevron-right "></i>
              </li>
              <li className="p-4 flex justify-between items-center bg-slate-200 border-l-8  border-transparent hover:border-l-8 hover:border-green-600">
                <Link href="/financial">Financial</Link>
                <i className="pi pi-chevron-right "></i>
              </li>
              <li className="p-4 flex justify-between items-center bg-slate-200 border-l-8  border-transparent hover:border-l-8 hover:border-green-600">
                <Link href="/contact">Contact</Link>
                <i className="pi pi-chevron-right "></i>
              </li>
              <li className="p-4 flex justify-between items-center bg-slate-200 border-l-8  border-transparent hover:border-l-8 hover:border-green-600">
                <Link href="/contact">Contact</Link>
                <i className="pi pi-chevron-right "></i>
              </li>
            </ul>

            <Card
              title="Title"
              className="mt-4"
              style={{ backgroundColor: "#09a223", color: "white" }}
            >
              <p className="m-0 text-white">
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod tempor.
              </p>

              <Button severity="success" rounded>
                <i className="pi pi-phone m-2 "></i>
                Contact Us
              </Button>
            </Card>

            <Card
              title="Title"
              className=" bg-white text-black mt-4 border text-center"
            >
              <p className="m-0 p-4">
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod tempor.
              </p>
            </Card>
          </div>

          <div className="flex flex-col  w-3/4">
            <SimpleSlider slides={slides} />

            <div className="mt-8">
              <p className="text-lg">
                We have over 15 years of experience Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the
                power of consectetur adi pisi cing elit, sed do eiusmod tempor
                xercitationemut labore. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Aenean bibendum nec risus et suscipit Curabitur
                metus ipsum. But I must explain to you how all this mistaken
                idea of denouncing. expound the actual teachings. of the great
                explorer of the truth, the master-builder of No one rejects,
                dislikes, or human happiness.
              </p>

              <h1 className="text-3xl mt-4"> Business plan market</h1>

              <p className="text-lg">
                Expound the actual teachings. of the great explorer of the
                truth, the master-builder of No one rejects, dislikes, or human
                happiness.
              </p>

              <div className="card p-4 mt-4 text-lg border-l-4  bg-gray-200 border-green-500">
                consectetur adipiscing elit. Aenean Lorem ipsm dolor sit the
                power of consectetur adi pisi cing elit, sed do eiusmod tempor
                xercitationemut labore
              </div>

              <h1 className="text-3xl my-4">Safety Wealth</h1>

              <div className="grid  grid-cols-2 gap-16 px-24">
                <div className="chart">
                  <div className="card flex justify-content-center"></div>
                  <Chart
                    type="doughnut"
                    data={chartData}
                    options={chartOptions}
                    className="w-full md:w-30rem"
                  />
                  <p>cing elit, sed do eiusmod tempor xercitationemut labore</p>
                </div>

                <div className="chart">
                  <Chart
                    type="doughnut"
                    data={chartData}
                    options={chartOptions}
                    className="w-full md:w-30rem"
                  />

                  <p>cing elit, sed do eiusmod tempor xercitationemut labore</p>
                </div>

                <div className="chart">
                  <Chart
                    type="doughnut"
                    data={chartData}
                    options={chartOptions}
                    className="w-full md:w-30rem"
                  />
                  <p>cing elit, sed do eiusmod tempor xercitationemut labore</p>
                </div>

                <div className="chart">
                  <Chart
                    type="doughnut"
                    data={chartData}
                    options={chartOptions}
                    className="w-full md:w-30rem"
                  />

                  <p>cing elit, sed do eiusmod tempor xercitationemut labore</p>
                </div>
              </div>

              <h1 className="text-3xl my-4">Business Strategy</h1>

              <div className="flex">
                <p className="text-xl">
                  We have over 15 years of experience Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aenean Lorem ipsm dolor sit
                  the power. of consectetur adi pisi cing elit, sed do eiusmod
                  tempor xercitationemut labore. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean bibendum nec risus et
                  suscipit Curabitur metus ipsum.
                </p>

                <img src="http://advisor.brighthemes.biz/demo/wp-content/uploads/2016/08/services-img.jpg"></img>
              </div>

              <h1 className="text-3xl my-4">Business plan market</h1>

              <div className="card">
                <Accordion activeIndex={0}>
                  <AccordionTab header="Header I">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </AccordionTab>
                  <AccordionTab header="Header II">
                    <p className="m-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Consectetur,
                      adipisci velit, sed quia non numquam eius modi.
                    </p>
                  </AccordionTab>
                  <AccordionTab header="Header III">
                    <p className="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionTab>
                </Accordion>
              </div>

              <div className="flex flex-row">
                <div className="felx felx-col w-1/2">
                  <h1 className="text-3xl my-4">Safety wealth</h1>

                  <div className="chart">
                    <Chart
                      type="doughnut"
                      data={chartData}
                      options={chartOptions}
                      className="w-full md:w-30rem"
                    />

                    <p>
                      cing elit, sed do eiusmod tempor xercitationemut labore
                    </p>
                  </div>
                </div>

                <div className="felx felx-col w-1/2">
                  <h1 className="text-3xl my-4">Business planning</h1>

                  <ul>
                    <li className="text-xl list-disc m-4 ">
                      There are many variations of passages
                    </li>
                    <li className="text-xl list-disc m-4 ">
                      There are many variations of passages
                    </li>
                    <li className="text-xl list-disc m-4 ">
                      There are many variations of passages
                    </li>
                    <li className="text-xl list-disc m-4 ">
                      There are many variations of passages
                    </li>
                    <li className="text-xl list-disc m-4 ">
                      There are many variations of passages
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-4">
                <h1 className="text-3xl my-4">
                  Enhance your Financial Portfolio
                </h1>

                <p className="text-lg">
                  Expound the actual teachings. of the great explorer of the
                  truth, the master-builder of No one rejects, dislikes, or
                  human happiness.
                </p>
                <TabView className="mt-8">
                  <TabPanel header="Header I">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </TabPanel>
                  <TabPanel header="Header II">
                    <p className="m-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Consectetur,
                      adipisci velit, sed quia non numquam eius modi.
                    </p>
                  </TabPanel>
                  <TabPanel header="Header III">
                    <p className="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </TabPanel>
                </TabView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financial;

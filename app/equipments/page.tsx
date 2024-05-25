"use client";
import { useEffect } from "react";
import Link from "next/link";

import pic from "../../public/images/Pages/Pumps/pump3.jpeg";

import pageStyle from "@/styles/pageStyles/pageStyle";

import InfoBlockInPage from "@/components/InfoBlock/InfoBlockInPage";
import appearing from "@/tools/appearing";
import createMetadata from "@/tools/createMetadata";

const Equipments = () => {
  useEffect(() => {
    appearing();
    createMetadata({ text: "Оборудование для бассейнов" });
  });
  return (
    <div className={pageStyle.pageStyle}>
      <hr className={pageStyle.pageHr} />
      <h1 className={pageStyle.pageH1}>Оборудование</h1>

      <Link href="/equipments/pumps">
        <InfoBlockInPage img={pic.src} header="Насосы" text="Насосы" />
      </Link>
      <InfoBlockInPage img={pic.src} header="Станции" text="Станции" />
    </div>
  );
};
export default Equipments;

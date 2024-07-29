"use client";
import { useEffect } from "react";
import Link from "next/link";

import pic from "../../public/images/Pages/Pumps/pump3.jpeg";

import pageStyle from "@/styles/pageStyle";

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
      <InfoBlockInPage img={pic.src} header="Фильтры" text="Станции" />
      <InfoBlockInPage img={pic.src} header="Тепловые насосы" text="Станции" />
      <InfoBlockInPage img={pic.src} header="Теплообменники" text="Станции" />
      <InfoBlockInPage
        img={pic.src}
        header="Электронагреватели"
        text="Станции"
      />
      <InfoBlockInPage img={pic.src} header="Закладные" text="Станции" />
      <InfoBlockInPage
        img={pic.src}
        header="Лестницы и поручни"
        text="Станции"
      />
      <InfoBlockInPage img={pic.src} header="Освещение" text="Станции" />
      <InfoBlockInPage img={pic.src} header="Аттракционы" text="Станции" />
      <InfoBlockInPage
        img={pic.src}
        header="Подводные пылесосы"
        text="Станции"
      />
      <InfoBlockInPage
        img={pic.src}
        header="Системы управления и дозирования"
        text="Станции"
      />
      <InfoBlockInPage img={pic.src} header="Дезинфекция" text="Станции" />
      <InfoBlockInPage
        img={pic.src}
        header="Химия для бассейнра"
        text="Станции"
      />
      <InfoBlockInPage
        img={pic.src}
        header="Отделочные материалы"
        text="Станции"
      />
      <InfoBlockInPage
        img={pic.src}
        header="Защитные покрытия"
        text="Станции"
      />
      <InfoBlockInPage
        img={pic.src}
        header="Сматывающие устройства"
        text="Станции"
      />
    </div>
  );
};
export default Equipments;

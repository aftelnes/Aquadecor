"use client";
import Link from "next/link";
import { Menu } from "@mantine/core";

const Header = () => {
  return (
    <div
      className="m-auto pt-5 grid
      xl:flex xl:justify-between xl:h-26 xl:w-[1200px] xl:mb-6
      lg:flex lg:justify-between lg:w-full lg:h-26 lg:container lg:mb-4
      md:flex md:justify-between md:w-full md:h-26 md:container md:mb-2
      "
    >
      <Link
        href="/main"
        className="font-bold text-center mb-2 text-2xl h-[30px] xl:text-4xl lg:text-3xl md:text-2xl md:pt-7 "
      >
        Аквадекор
      </Link>
      <div
        className="flex flex-col 
      xl:flex xl:justify-between xl:pt-10 xl:space-x-7 xl:flex-row
      lg:flex lg:justify-between lg:pt-10 lg:space-x-7 lg:flex-row 
      md:flex md:justify-between md:pt-8 md:space-x-7 md:flex-row"
      >
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <div className="h-7 text-center text-xl mb-1 hover:text-cyan-500 xl:text-xl lg:text-lg md:text-base">
              <button>Услуги</button>
            </div>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Бассейны</Menu.Label>
            <Menu.Item>
              <Link href="/servicies/overflowPools">Бассейны переливные</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/servicies/skimmerPools">Бассейны скиммерные</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/servicies/childPools">Бассейны детские</Link>
            </Menu.Item>
            <Menu.Label>Изготовление</Menu.Label>
            <Menu.Item>
              <a href="">Изготовление чаш</a>
            </Menu.Item>
            <Menu.Item>
              <a href="">Изготовление купелей</a>
            </Menu.Item>
            <Menu.Item>
              <a href="">Изготовление ёмкостей из полипропилена</a>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Link
          href="/equipments"
          className="h-7 text-center text-xl mb-1 hover:text-cyan-500 xl:text-xl lg:text-lg md:text-base"
        >
          Оборудование
        </Link>
        <Link
          className="h-7 text-center text-xl mb-1 hover:text-cyan-500 xl:text-xl lg:text-lg md:text-base"
          href="/ourworks"
        >
          Наши работы
        </Link>
        <Link
          href="/about"
          className="h-7 text-center text-xl mb-1 hover:text-cyan-500 xl:text-xl lg:text-lg md:text-base"
        >
          Про нас
        </Link>
        <Link
          className="h-7 text-center text-xl mb-1 hover:text-cyan-500 xl:text-xl lg:text-lg md:text-base"
          href="/contacts"
        >
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { Menu } from "@mantine/core";

const Header = () => {
  return (
    <div className="xl:flex xl:justify-between xl:w-full xl:h-26 m-auto pt-5 sm:w-full sm:container md:container lg:container xl:container sm:grid sm:grid-rows-1">
      <Link
        href="/main"
        className="font-bold text-lg md:pt-7 text-base xl:text-3xl"
      >
        Аквадекор
      </Link>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 sm:gap-1">
        <div className="grid space-x-7 md:flex md:pt-7 ">
          <div className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl sm:mb-2">
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <button className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl">
                  Услуги
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Бассейны</Menu.Label>
                <Menu.Item>
                  <Link href="/servicies/overflowPools">
                    Бассейны перелевные
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/servicies/skimmerPools">
                    Бассейны скиммерные
                  </Link>
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
          </div>
          <Link
            href="/equipments"
            className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl sm:mb-2"
          >
            Оборудование
          </Link>
          <Link
            className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl sm:mb-2"
            href="/contacts"
          >
            Наши работы
          </Link>
          <Link
            href="/about"
            className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl sm:mb-2"
          >
            Про нас
          </Link>
          <Link
            className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl sm:mb-2"
            href="/contacts"
          >
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { Menu } from "@mantine/core";

const Header = () => {
  return (
    <div
      className="m-auto pt-5 
      xl:flex xl:justify-between xl:h-26 xl:w-[1200px]
      lg:flex lg:justify-between lg:w-full lg:h-26 lg:container
      md:flex md:justify-between md:w-full md:h-26 lg:container
      sm:w-full sm:grid sm:grid-rows-1 sm:container "
    >
      <Link
        href="/main"
        className="font-bold text-lg md:pt-7 text-base xl:text-4xl lg:text-3xl md:text-2xl"
      >
        Аквадекор
      </Link>
      <div>
        <div className="grid space-x-7 xl:pt-10 lg:pt-10 md:flex md:pt-8">
          <div className="w-20px h-7 text-base hover:opacity-60 xl:text-xl sm:mb-2 sm:text-right">
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <button>Услуги</button>
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
            className="w-20px h-7 text-base hover:opacity-60 xl:text-xl sm:text-right sm:mb-2"
          >
            Оборудование
          </Link>
          <Link
            className="w-20px h-7 text-base hover:opacity-60 xl:text-xl sm:text-right sm:mb-2"
            href="/ourworks"
          >
            Наши работы
          </Link>
          <Link
            href="/about"
            className="w-20px h-7 text-base hover:opacity-60 xl:text-xl sm:text-right sm:mb-2"
          >
            Про нас
          </Link>
          <Link
            className="w-20px h-7 text-base hover:opacity-60 xl:text-xl sm:text-right sm:mb-2"
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

"use client";
import Link from "next/link";
import { Menu, MenuDropdown } from "@mantine/core";

const Header = () => {
  return (
    <div className="flex justify-between w-full h-26 m-auto pt-5 sm:w-full md:container lg:container xl:container">
      <Link
        href="/main"
        className="font-bold text-lg md:pt-7 md:text-base xl:text-3xl"
      >
        Аквадекор
      </Link>
      <div className="grid space-x-7 md:flex md:pt-7 ">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl">
              Услуги
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Бассейны</Menu.Label>
            <Menu.Item>
              <Link href="/servicies/concretePools">Бетонные бассейны</Link>
            </Menu.Item>
            <Menu.Item>
              <a href="/liner_pools">Бассейны из лайнера</a>
            </Menu.Item>
            <Menu.Item>
              <a href="">Бассейны скиммерные</a>
            </Menu.Item>
            <Menu.Item>
              <a href="">Бассейны переливные</a>
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
        <Menu shadow="md" width={150}>
          <Menu.Target>
            <button className="h-7 text-base hover:opacity-60 sm:text-right xl:text-xl">
              Оборудование
            </button>
          </Menu.Target>
          <MenuDropdown>
            <Menu.Label>Оборудование</Menu.Label>
            <Menu.Item>
              <Link href="/equipments/pumps">Насосы</Link>
            </Menu.Item>
            <Menu.Item>
              <a href="/">Станции</a>
            </Menu.Item>
            <Menu.Item></Menu.Item>
          </MenuDropdown>
        </Menu>

        <Link
          href="/test"
          className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl"
        >
          Про нас
        </Link>
        <Link
          className="w-20px h-7 text-base hover:opacity-60 sm:text-right xl:text-xl"
          href="/contacts"
        >
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default Header;

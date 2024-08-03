import Link from "next/link";

const footerLink = "pl-2 hover:underline hover:text-cyan-500";

const Footer = () => {
  return (
    <div className="mt-2">
      <hr className="border-1 border-black" />
      <div
        className="flex justify-center w-full h-64 mt-1 m-auto w-[200px] pt-5
        xl:container xl:space-x-16
        lg:container lg:space-x-14
        md:container md:space-x-8
        "
      >
        <div
          className="grid grid-cols-1 
        xl:grid-cols-4
        lg:grid-cols-4
        md:grid-cols-4"
        >
          <h1
            className="font-bold text-3xl m-auto
         xl:text-3xl
         lg:text-3xl
         md:text-3xl "
          >
            <Link href="/">Аквадекор</Link>
          </h1>
          <div
            className="grid grid-rows-6 grid-flow-col gap-0.5
        xl:w-[200px]"
          >
            <h3 className="m-auto pt-2 font-semibold">Бассейны</h3>
            <hr className="border-1 border-black m-auto w-11/12" />
            <Link href="/servicies/overflowPools" className={footerLink}>
              Переливные
            </Link>
            <Link href="/servicies/skimmerPools" className={footerLink}>
              Скиммерные
            </Link>
            <Link href="/servicies/childPools" className={footerLink}>
              Детские
            </Link>
            <Link href="/equipments" className={footerLink}>
              Оборудование
            </Link>
          </div>
          <div
            className="grid grid-rows-6 grid-flow-col gap-0.5
        xl:w-[200px]"
          >
            <h3 className="m-auto pt-2 font-semibold">Изготовление</h3>
            <hr className="border-1 border-black m-auto w-11/12" />
            <Link href="/" className={footerLink}>
              Каркасов для бассейна
            </Link>
            <Link href="/" className={footerLink}>
              Ёмкостей из полипропилена
            </Link>
            <Link href="/" className={footerLink}>
              Купелей
            </Link>
          </div>
          <div
            className="grid grid-rows-6 grid-flow-col gap-0.5
        xl:w-[200px]"
          >
            <h3 className="m-auto pt-2 font-semibold">Другое</h3>
            <hr className="border-1 border-black m-auto w-11/12" />
            <Link href="/contacts" className={footerLink}>
              Контакты
            </Link>
            <Link href="/about" className={footerLink}>
              Про нас
            </Link>
            <Link href="/ourworks" className={footerLink}>
              Наши работы
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

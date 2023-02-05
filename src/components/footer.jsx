import React from "react";

export default function footer() {
  return (
    <div className="bg-[#0e0b14] w-full flex-row p-6">
      <div className="items-center justify-center flex">
        <img
          src="https://cdn.worldvectorlogo.com/logos/disney--1.svg"
          alt="Disney SVG"
          className="h-14 cursor-pointer"
        />
      </div>

      <ul className="flex justify-center gap-6 py-2 text-white text-xs">
        <li className="cursor-pointer">Gizlilik Politikası</li>
        <li className="cursor-pointer">Tanımlama bilgileri Politikası</li>
        <li className="cursor-pointer">EMEA Gizlilik Hakları</li>
        <li className="cursor-pointer">Üyelik Sözleşmesi</li>
        <li className="cursor-pointer">Yardım</li>
        <li className="cursor-pointer">Desteklenen Cihazlar</li>
        <li className="cursor-pointer">Hakkımızda</li>
        <li className="cursor-pointer">İlgi Alanına Dayalı Reklamlar</li>
        <li className="cursor-pointer">Tercihleri Yönetin</li>
      </ul>

      <div className="text-[#cacaca] flex items-center justify-center text-xs pt-4 pb-2">
        © Disney. Tüm Hakları Saklıdır.
      </div>
    </div>
  );
}

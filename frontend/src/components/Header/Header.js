import React from "react";



export default function Header() {
  return (
    <div class="h-500 w-full bg-green-100 ">
      <div class="flex flex-row bg-green-100 flex-no-wrap">
        <h1 className='flex-1 flex-shrink font-bold text-black text-center text-3xl px-4 py-8 lg:text-5xl'>Linne bibliotek</h1>
        <h1 className='flex-1 flex-shrink-0 font-bold text-black text-center text-3xl px-4 py-8 lg:text-5xl'>Recommended Books & Movies  </h1>
      </div>
    </div>
  );
}

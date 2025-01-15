import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">Kantin_Penus</div>
        <ul className="flex space-x-6 text-lg">
          <li className="font-medium">Logo</li>
          <li className="font-medium">Loogo</li>
        </ul>
      </nav>

      {/* Content Grid */}
      <div className="container mx-auto mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
        {/* Item 1 */}
        <div className="p-8 bg-green-600 rounded-xl text-white transform hover:bg-green-700 transition-all">
          <a href="#" className="block text-white">
            <h1 className="text-3xl font-bold">Advertisement</h1>
          </a>
          <p className="mt-2 text-white">For attracting customers</p>
        </div>

        {/* Item 2 */}
        <div className="p-8 bg-blue-600 rounded-xl text-white transform hover:bg-blue-700 transition-all">
          <a href="#" className="block text-white">
            <h1 className="text-3xl font-bold text-center">TEH POCI MAS NARJI</h1>
          </a>
        </div>

        {/* Item 3 */}
        <div className="p-8 bg-red-600 rounded-xl text-white transform hover:bg-red-700 transition-all">
          <a href="#" className="block text-white">
            <h1 className="text-3xl font-bold text-center">FOOD.</h1>
          </a>
        </div>
      </div>
    </>
  );
}

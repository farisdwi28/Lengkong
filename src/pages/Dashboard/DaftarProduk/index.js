import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { images } from "../../../constans";
import InputSearch from "../../../components/InputSearch";
import ButtonExcel from "../../../components/ButtonExel";
import TableProduct from "../../../components/TableProduct";
import { clearDataLogin } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../utils/storage";

const Produk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearDataLogin();
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex page-container min-w-screen">
        <Sidebar />
        <main className="flex-grow container mx-auto p-6">
            <div className="flex justify-between items-center h-auto mt-10">
              <h1 className="font-semibold text-primary1 text-3xl">
                Daftar Produk UMKM Desa sukabirus
              </h1>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-800 bg-white border border-none rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  onClick={toggleDropdown}
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src={images.profil1}
                    alt="Profile"
                  />
                  <span className="ml-2">{getUserData().name || "Desa sukabirus"}</span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M6 8l4 4 4-4h-8z" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="py-1">
                      <a
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          {/* table produk */}
          <div className="flex flex-wrap gap-2 pt-4">
            <div className="w-full md:w-auto">
              <InputSearch placeholder="Cari Produk" width="10" />
            </div>
            <div className="w-full md:w-auto">
              <ButtonExcel />
            </div>
            <div className="">{/* Show Entries */}</div>
          </div>
          <div className="py-20 max-w-screen overscroll-x-auto">
            <TableProduct />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Produk;

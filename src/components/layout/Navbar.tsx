"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "../ui/Button";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Features", "Resources", "Pricing", "Blog"];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white">
              <Icon icon="lucide:briefcase" />
            </div>
            <span className="ml-2 text-xl font-bold">EmployeeSide</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-700 hover:text-blue-500">
                {item}
              </a>
            ))}
          </div>

          {/* Right Side - Login & Get Started */}
          <div className="hidden sm:flex space-x-4 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Login
            </a>
            <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
            <Icon icon="lucide:menu" className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-700 hover:text-blue-500">
                {item}
              </a>
            ))}
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Login
            </a>
            <Button intent="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;

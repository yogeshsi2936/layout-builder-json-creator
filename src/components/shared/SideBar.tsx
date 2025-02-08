import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonClasses = (path: string): string => {
    const isActive = location.pathname === path;
    return `w-full py-2 text-left px-4 rounded cursor-pointer ${
      isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
    }`;
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <button onClick={() => navigate("/home")} className={getButtonClasses("/home")}>
        Home
      </button>
      <button onClick={() => navigate("/organisms")} className={getButtonClasses("/organisms")}>
        Organisms
      </button>
      <button onClick={() => navigate("/templates")} className={getButtonClasses("/templates")}>
        Templates
      </button>
      <button onClick={() => navigate("/tokens")} className={getButtonClasses("/tokens")}>
        Tokens
      </button>
    </div>
  );
};

export default Sidebar;

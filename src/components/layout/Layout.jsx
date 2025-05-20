import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow p-4 sm:p-6 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

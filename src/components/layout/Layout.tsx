import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";
import { CookieConsent } from "@/components/CookieConsent";
import { PageLoader } from "@/components/PageLoader";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageLoader />
      <TopBar />
      <Navbar />
      <main className="flex-grow relative">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

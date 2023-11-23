import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
export default function Home() {
  return (
    <>
      <div className="font-Poppins h-screen relative bg-white px-8 ">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
}

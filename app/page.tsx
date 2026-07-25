import SideBar from "@/components/sidebar";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="m-16">
      <div className="flex flex-wrap justify-between">
        <Header />
        <SideBar />
      </div>
    </div>
  );
}

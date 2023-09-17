import InputBox from "./components/InputBox";
import Navigation from "./components/navigation";


export default function Home() {
  return (
    <>
    <main className="bgHolder">
      <div className="container mx-auto px-4">
      <Navigation />
        <div className="w-full h-screen"></div>
        <InputBox />
      </div>
    </main>
    </>
  );
}
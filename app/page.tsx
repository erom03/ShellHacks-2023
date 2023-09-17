import InputBox from "./components/InputBox";
import Navigation from "./components/navigation";


export default function Home() {
  
  return (
    <>
    <header><Navigation /></header>
    <main className="bgHolder">
      <div className="container mx-auto px-4">
        <InputBox />
        <div className="w-full h-screen"></div>
      </div>
    </main>
    </>
  );
}
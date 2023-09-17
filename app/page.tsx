import InputBox from "./components/InputBox";

export default function Home() {
  return (
    <>
    <main className="bgHolder">
      <div className="container mx-auto px-4">
        <InputBox />
        <div className="w-full h-screen"></div>
      </div>
    </main>
    </>
  );
}
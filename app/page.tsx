import InputBox from "./components/InputBox";
import Navigation from "./components/navigation";


export default function Home() {
  
  return (
    <section>
      <header><Navigation /></header>
      <main className="bgHolder">
          <InputBox />
      </main>
    </section>
  );
}
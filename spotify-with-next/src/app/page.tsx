import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { YourLibrary } from '@/components/YourLibrary';

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-full flex flex-row">
        <aside className="w-1/4 h-full p-2 flex flex-col">
          <NavBar />

          <YourLibrary />
        </aside>

        <main className="w-full h-full p-2 flex flex-col justify-center items-center">
          <p>ToDo</p>
        </main>
      </div>

      <Footer />
    </div>
  );
}

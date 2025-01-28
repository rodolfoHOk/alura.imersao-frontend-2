import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { YourLibrary } from '@/components/YourLibrary';

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

      <div className="w-full h-full flex flex-row">
        <aside className="w-1/4 h-full min-w-64 p-2 flex flex-col">
          <YourLibrary />
        </aside>

        <main className="w-full h-full py-2 pr-2">
          <div className="w-full h-full bg-secondary_bg flex flex-col justify-center items-center rounded-lg">
            <p>ToDo</p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

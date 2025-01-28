import { NavBar } from '@/components/NavBar';
import { YourLibrary } from '@/components/YourLibrary';

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-3">
      <aside className="fixed top-0 bottom-0 left-0 p-3 w-[300px] h-full flex flex-col">
        <NavBar />

        <YourLibrary />
      </aside>
    </div>
  );
}

import { NavBar } from '@/components/NavBar';
import { YourLibrary } from '@/components/YourLibrary';

export default function Home() {
  return (
    <div>
      <aside className="fixed top-0 bottom-0 left-0 p-3 w-[300px]">
        <NavBar />

        <YourLibrary />
      </aside>
    </div>
  );
}

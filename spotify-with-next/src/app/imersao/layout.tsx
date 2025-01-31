import { YourLibrary } from '@/components/YourLibrary';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';

export default function ImmersionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen sm:h-screen flex flex-col">
      <div className="w-full sm:flex-1 flex flex-col sm:flex-row">
        <aside className="w-full sm:w-1/4 h-full min-w-64 p-2 flex flex-col gap-2">
          <NavBar />

          <YourLibrary />
        </aside>

        <main className="w-full h-full py-2 pr-2 pl-2 sm:pl-0">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

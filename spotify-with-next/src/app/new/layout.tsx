import { Header } from '@/components/Header';
import { YourLibrary } from '@/components/YourLibrary';
import { Footer } from '@/components/Footer';

export default function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />

      <div className="w-full h-full flex flex-row">
        <aside className="w-1/4 h-full min-w-64 p-2 flex flex-col">
          <YourLibrary />
        </aside>

        <main className="w-full h-full py-2 pr-2">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

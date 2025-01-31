import { Header } from '@/components/Header';
import { YourLibrary } from '@/components/YourLibrary';
import { Footer } from '@/components/Footer';

export default function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen sm:h-screen flex flex-col">
      <Header />

      <div className="w-full h-[calc(100%-128px)] flex flex-col sm:flex-row">
        <aside className="w-full sm:w-1/4 h-full min-w-64 p-2 flex flex-col">
          <YourLibrary />
        </aside>

        <main className="w-full h-full py-2 pr-2 pl-2 sm:pl-0">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

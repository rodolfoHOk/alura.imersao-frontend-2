import { ContentHeader } from '@/components/ContentHeader';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <ContentHeader />

      <div className="w-full h-full px-6 py-12 flex flex-col bg-secondary_bg rounded-lg">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-4xl">Boa tarde</h1>

          <h2 className="font-bold text-2xl">Navegar por todas as seções</h2>
        </div>

        <div className="mt-6">To do cards</div>
      </div>
    </div>
  );
}

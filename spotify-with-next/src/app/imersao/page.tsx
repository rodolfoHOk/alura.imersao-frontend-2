import { ContentHeader } from '@/components/ContentHeader';
import { OfferList } from '@/components/OfferList';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <ContentHeader />

      <div className="w-full h-[calc(100%-72px)] px-6 py-12 flex flex-col bg-secondary_bg rounded-lg overflow-y-scroll">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-4xl">Boa tarde</h1>

          <h2 className="font-bold text-2xl">Navegar por todas as seções</h2>
        </div>

        <OfferList />
      </div>
    </div>
  );
}

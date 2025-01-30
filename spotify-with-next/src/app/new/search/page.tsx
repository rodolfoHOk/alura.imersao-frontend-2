import { OfferList } from '@/components/OfferList';

export default function SearchPageMain() {
  return (
    <div className="w-full h-full px-6 py-[60px] flex flex-col bg-secondary_bg rounded-lg overflow-y-scroll">
      <h2 className="font-bold text-2xl">Navegar por todas as seções</h2>

      <OfferList />
    </div>
  );
}

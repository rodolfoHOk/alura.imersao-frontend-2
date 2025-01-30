import { OfferCard } from './OfferCard';

export function OfferList() {
  return (
    <div className="pt-6 pb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center">
      <OfferCard
        className="bg-card_1"
        title="Boas festas"
        imageUrl="/assets/playlist/1.jpeg"
      />

      <OfferCard
        className="bg-card_2"
        title="Feitos para você"
        imageUrl="/assets/playlist/2.png"
      />

      <OfferCard
        className="bg-card_3"
        title="Lançamentos"
        imageUrl="/assets/playlist/3.jpeg"
      />

      <OfferCard
        className="bg-card_4"
        title="Creators"
        imageUrl="/assets/playlist/4.jpeg"
      />

      <OfferCard
        className="bg-card_5"
        title="Para treinar"
        imageUrl="/assets/playlist/5.jpeg"
      />

      <OfferCard
        className="bg-card_6"
        title="Podcasts"
        imageUrl="/assets/playlist/6.jpeg"
      />

      <OfferCard
        className="bg-card_7"
        title="Sertanejo"
        imageUrl="/assets/playlist/7.jpeg"
      />

      <OfferCard
        className="bg-card_8"
        title="Samba e pagode"
        imageUrl="/assets/playlist/8.jpeg"
      />

      <OfferCard
        className="bg-card_9"
        title="Funk"
        imageUrl="/assets/playlist/9.jpeg"
      />

      <OfferCard
        className="bg-card_10"
        title="MPB"
        imageUrl="/assets/playlist/10.jpeg"
      />

      <OfferCard
        className="bg-card_11"
        title="Rock"
        imageUrl="/assets/playlist/11.jpeg"
      />

      <OfferCard
        className="bg-card_12"
        title="Hip Hop"
        imageUrl="/assets/playlist/12.jpeg"
      />

      <OfferCard
        className="bg-card_13"
        title="Indie"
        imageUrl="/assets/playlist/13.jpeg"
      />

      <OfferCard
        className="bg-card_14"
        title="Relax"
        imageUrl="/assets/playlist/14.jpeg"
      />

      <OfferCard
        className="bg-card_15"
        title="Música Latina"
        imageUrl="/assets/playlist/15.jpeg"
      />
    </div>
  );
}

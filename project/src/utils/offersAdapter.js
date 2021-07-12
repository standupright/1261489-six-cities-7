const OfferAdapter = {
  getOffer: (offer) => ({
    ...offer,
    previewImage: offer['preview_image'],
    maxAdults: offer['max_adults'],
    isFavorite: offer['is_favorite'],
    isPremium: offer['is_premium'],
    host: {
      ...offer.host,
      avatarUrl: offer['host']['avatar_url'],
      isPro: offer['host']['is_pro'],
    },
  }),
  getOffers: (offers) => offers.map((offer) => OfferAdapter.getOffer(offer)),
};

export default OfferAdapter;

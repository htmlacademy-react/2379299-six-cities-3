import { Offer } from '../types/offer';
import { citis, titles, typeHousing } from './const';
import { getRandomCoordinates, getRandomInRange, getRandomValue } from './utils';

export function getRandomoffer(){
  const offers = [];
  for(let i = 1; i <= 4; i++){
    const newOffer: Offer = {
      id: self.crypto.randomUUID(),
      title: getRandomValue(titles),
      type: getRandomValue(typeHousing),
      price: getRandomInRange(50, 3000),
      city: {
        name: getRandomValue(citis),
        location: {
          latitude: getRandomCoordinates(),
          longitude: getRandomCoordinates(),
          zoom: getRandomInRange(1, 11)
        }
      },
      isFavorite: Math.random() < 0.5,
      isPremium: Math.random() < 0.5,
      rating: getRandomInRange(1, 5),
      previewImage: 'https://url-to-image/image.png'
    };
    offers.push(newOffer);
  }
  return offers;
}

export const offers = getRandomoffer();


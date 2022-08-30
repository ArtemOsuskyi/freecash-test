import { Offer }     from "./entities/offer.entity";
import { OfferData } from "./offer-data.type";

export const offerDataMapper = (offer: Offer): OfferData => {
  const {
    id,
    slug,
    boxSize,
    externalOfferId,
    name,
    description,
    requirements,
    offerUrlTemplate,
    thumbnail,
    isDesktop,
    isAndroid,
    isIos
  } = offer

  return {
    id,
    slug,
    externalOfferId,
    name,
    description,
    requirements,
    offerUrlTemplate,
    thumbnail,
    boxSize,
    isDesktop,
    isAndroid,
    isIos,
    providerName:''
  }
}
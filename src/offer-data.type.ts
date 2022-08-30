import { OfferBoxSizeEnum } from "./entities/offer.entity";

export type OfferData = {
  id: number;
  name: string;
  slug: string;
  description: string;
  requirements: string;
  thumbnail: string;
  boxSize: OfferBoxSizeEnum;
  isDesktop: number;
  isAndroid: number;
  isIos: number;
  offerUrlTemplate: string;
  providerName: string;
  externalOfferId: string;
}
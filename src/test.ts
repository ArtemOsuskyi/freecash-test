import { Offer, OfferBoxSizeEnum } from './entities/offer.entity';
import { offerDataMapper }         from './offer.data-mapper';

export const payload1 = {
  query: {
    pubid: '1',
    appid: 1,
    country: '',
    platform: 'all',
  },
  response: {
    currency_name: 'Coins',
    offers_count: 2729,
    offers: [
      {
        offer_id: '19524555',
        offer_name: 'MyGym - iOS',
        offer_desc: 'Play and reach level 23 within 14 days.',
        call_to_action: 'Play and reach level 23 within 14 days.',
        disclaimer: 'This offer rewards within 24 hours. New users only.',
        offer_url: 'https://some.url',
        offer_url_easy: 'https://some.url',
        payout: 10.675,
        payout_type: 'cpe',
        amount: 8873,
        image_url: 'https://some.url',
        image_url_220x124: 'https://some.url',
        countries: ['NZ'],
        platform: 'mobile',
        device: 'iphone_ipad',
        category: {
          '9': 'Mobile Apps',
        },
        last_modified: 1645095666,
        preview_url: 'https://some.url',
        package_id: 'idnumbers',
        verticals: [
          {
            vertical_id: '4',
            vertical_name: 'Lifestyle',
          },
          {
            vertical_id: '11',
            vertical_name: 'Health',
          },
        ],
      },
    ],
  },
};
export const payload2 = {
  status: 'success',
  data: {
    // offers from offer2 provider
    '15828': {
      Offer: {
        // should be mapped to `externalOfferId`
        campaign_id: 15828,
        store_id: null,
        tracking_type: 'CPA',
        campaign_vertical: 'professional_finance',
        currency_name_singular: 'coin',
        currency_name_plural: 'coins',
        network_epc: '4.8359',
        // should be mapped to `icon`
        icon: 'https://some.url',
        // should be mapped to `name`
        name: 'Sofi',
        // should be mapped to `offerUrlTemplate`
        tracking_url: 'https://some.url',
        // should be mapped to `requirements`
        instructions:
          'Register with VALID personal information, Make a minimum deposit of $50,Redeem your points! *New Users Only!',
        disclaimer: null,
        // should be mapped to `description`
        description:
          'SoFi is a one-stop shop for your finances, designed to help you Get Your Money Right.',
        short_description: 'Make a Deposit to Earn!',
        offer_sticker_text_1: 'RECOMMENDED',
        offer_sticker_text_2: null,
        offer_sticker_text_3: null,
        offer_sticker_color_1: 'D100BC',
        offer_sticker_color_2: 'FFFFFF',
        offer_sticker_color_3: 'FFFFFF',
        sort_order_setting: null,
        category_1: 'free',
        category_2: null,
        amount: 53550,
        payout_usd: 69.25,
        start_datetime: '2022-04-19 11:58:30',
        end_datetime: '2042-04-19 04:59:00',
        is_multi_reward: false,
      },
      Country: {
        include: {
          US: {
            id: 243,
            code: 'US',
            name: 'United States',
          },
        },
        exclude: [],
      },
      State: {
        include: [],
        exclude: [],
      },
      City: {
        include: [],
        exclude: [],
      },
      Connection_Type: {
        cellular: true,
        wifi: true,
      },
      Device: {
        include: [],
        exclude: [],
      },
      OS: {
        // this should be mapped to `isAndroid`
        android: false,
        // this should be mapped to `isIos`
        ios: true,
        // this should be mapped to `isDesktop`
        web: true,
        min_ios: null,
        max_ios: null,
        min_android: null,
        max_android: null,
      },
    },
  },
};

const test = (object) => {
  const offer = new Offer();
  if (object.hasOwnProperty('response')) {
    const result = object.response.offers.reduce((acc, currentValue) => {
      acc = currentValue;
      return acc;
    });
    offer.name = result.offer_name;
    offer.description = result.offer_desc;
    offer.requirements = result.call_to_action;
    offer.offerUrlTemplate = result.offer_url;
    offer.thumbnail = result.image_url;
    offer.boxSize = OfferBoxSizeEnum.LARGE;
    result.platform === 'mobile'
      ? !result.device.includes('iphone') || !result.device.includes('ipad')
        ? (offer.isAndroid = 1)
        : (offer.isIos = 1)
      : (offer.isDesktop = 1);
    offer.externalOfferId = result.offer_id;
  } else {
    const result = Object.keys(object.data).reduce(
      (acc, value) => ({ ...acc, [value]: object.data[value] }),
      {},
    );
    for (const key in object.data) {
      const obj = result[key]
      offer.externalOfferId = obj.Offer.campaign_id
      offer.thumbnail = obj.Offer.icon
      offer.name = obj.Offer.name
      offer.offerUrlTemplate = obj.Offer.tracking_url
      offer.requirements = obj.Offer.instructions
      offer.description = obj.Offer.description
      obj.OS.android === false ? offer.isAndroid = 0 : offer.isAndroid = 1
      obj.OS.ios === false ? offer.isIos = 0 : offer.isIos = 1
      obj.OS.web === false ? offer.isDesktop = 0 : offer.isDesktop = 1
    }
  }

  return offerDataMapper(offer);
};

// const result = payload2.data[]
// console.log(result);
console.log(test(payload2));
// console.log(test(payload1));

import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutusAboutus extends Schema.Component {
  collectionName: 'components_aboutus_aboutuses';
  info: {
    displayName: 'Aboutus';
    icon: 'car';
  };
  attributes: {
    name: Attribute.String;
    img: Attribute.Media & Attribute.Required;
    Description: Attribute.String;
  };
}

export interface FlipkartFlipkart extends Schema.Component {
  collectionName: 'components_flipkart_flipkarts';
  info: {
    displayName: 'Flipkart';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media & Attribute.Required;
    price: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'aboutus.aboutus': AboutusAboutus;
      'flipkart.flipkart': FlipkartFlipkart;
    }
  }
}

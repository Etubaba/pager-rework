import { TMarkers, TOurValueState } from '@/@types/app.types';
import serviceIcon_01 from '@/assets/img/service/serviceicon_01.png';
import serviceIcon_02 from '@/assets/img/service/serviceicon_02.png';
import serviceIcon_03 from '@/assets/img/service/serviceicon_03.png';
import serviceIcon_04 from '@/assets/img/service/serviceicon_04.png';
import serviceIcon_05 from '@/assets/img/service/serviceicon_05.png';
import test_1 from '@/assets/img/gallery/gallery_01.png';
import test_2 from '@/assets/img/gallery/gallery_02.jpeg';
import { TOtherServicesImages, TTestimonies } from '@/@types/components.types';

export const isWordExist: string[] = [
  'Recruitment,',
  'Software',
  'IT',
  'Training',
];

export const ourValueState: TOurValueState = {
  galleryCount: 0,
  servicesTitleCount: 0,
};

export const ourValueTitles: string[] = [
  'our mission',
  'our vision',
  'our culture',
];
export const serviceTitles: string[] = [
  'Software development',
  'IT Consultation ',
  'software training',
  'software maintenance',
  'Tech Recruitment',
  'Quality assurance',
];
export const serviceNotes: string[] = [
  'First bibendum diam non justo eleifend, sed tincidunt justo tincidunt. Pellentesque ullamcorper a odio nec bibendum. Suspendisse potenti.',
  'Second bibendum diam non justo eleifend, sed tincidunt justo tincidunt. Pellentesque ullamcorper a odio nec bibendum. Suspendisse potenti.',
  'Third bibendum diam non justo eleifend, sed tincidunt justo tincidunt. Pellentesque ullamcorper a odio nec bibendum. Suspendisse potenti.',
  'four bibendum diam non justo eleifend, sed tincidunt justo tincidunt. Pellentesque ullamcorper a odio nec bibendum. Suspendisse potenti.',
  'five bibendum diam non justo eleifend, sed tincidunt justo tincidunt. Pellentesque ullamcorper a odio nec bibendum. Suspendisse potenti.',
  'six bibendum diam non justo eleifend, sed tincidunt justo tincidunt. Pellentesque ullamcorper a odio nec bibendum. Suspendisse potenti.',
];

export const ourValueNote: string[] = [
  'From captivating websites to dynamic web applications, we breathe life into your digital presence by harnessing the latest technologies to create seamless online experiences that engage and inspire.',
  'second captivating websites to dynamic web applications, we breathe life into your digital presence by harnessing the latest technologies to create seamless online experiences that engage and inspire.',
  'third captivating websites to dynamic web applications, we breathe life into your digital presence by harnessing the latest technologies to create seamless online experiences that engage and inspire.',
];

export const otherServicesImages: TOtherServicesImages[] = [
  { imageSrc: serviceIcon_01, text: 'Google Ads' },
  { imageSrc: serviceIcon_02, text: 'SEO Services' },
  { imageSrc: serviceIcon_03, text: 'SEO Copywriting' },
  { imageSrc: serviceIcon_04, text: 'Social Media Marketing' },
  { imageSrc: serviceIcon_05, text: 'SEO Copywriting' },
];

export const markers: TMarkers[] = [
  { latLng: [41.9, 12.45], name: 'Vendo,Germany' },
  { latLng: [38.5, -77.2], name: 'Coloe,France' },
  { latLng: [-33.9, 151.2], name: 'Malama,Belgium' },
  { latLng: [51.5, -0.1], name: 'David,Italy' },
  { latLng: [34.0, -118.2], name: 'Eve,Germany' },
  { latLng: [40.7, -74.0], name: 'Clisha,Germany' },
  { latLng: [-22.9, -43.2], name: 'Grace,Germany' },
  { latLng: [35.7, 139.8], name: 'Hannah,Germany' },
  { latLng: [52.5, 13.4], name: 'Isabel,USA' },
  { latLng: [48.9, 2.3], name: 'Jack,Germany' },
  { latLng: [-37.8, 145.0], name: 'Kate,Canada' },
  { latLng: [32.7, -117.2], name: 'Liam,Germany' },
  { latLng: [51.1, 17.0], name: 'Mia,Luxemburg' },
  { latLng: [42.4, -71.1], name: 'Noah,Germany' },
  { latLng: [55.7, 12.6], name: 'Olivia,Germany' },
  { latLng: [-33.5, -70.7], name: 'Peter,Germany' },
  { latLng: [45.5, 9.2], name: 'Quinn,Germany' },
  { latLng: [48.9, 2.4], name: 'Rachel,Germany' },
  { latLng: [37.8, -122.4], name: 'Sam,Germany' },
  { latLng: [41.9, 12.4], name: 'Tom,Germany' },
];

export const testimoniesData: TTestimonies[] = [
  {
    imageSrc: test_1,
    note: 'first Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sintmolestiae doloremque ad expedita labore. Totam, dolor omnisveritatis minima distinctio maiores saepe tempora suscipit odiodolores. Asperiores, saepe. Explicabo, maiores',
    name: 'Carlo Roudriguez',
  },
  {
    imageSrc: test_2,
    note: 'secondLorem ipsum dolor sit, amet consectetur adipisicing elit. Sintmolestiae doloremque ad expedita labore. Totam, dolor omnisveritatis minima distinctio maiores saepe tempora suscipit odiodolores. Asperiores, saepe. Explicabo, maiores',
    name: 'Carlo Roudriguez II',
  },
];

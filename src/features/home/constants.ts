export const HOMEPAGE_SCHEMA = {
  banner: {
    image: { src: '/home/banner.png', alt: 'แบนเนอร์' },
  },
  search: {
    dropdown: ['กรุงเทพฯ', 'ชลบุรี'],
  },
  categories: [
    {
      src: '/home/cat1.svg',
      alt: 'โรงแรม',
      categoryName: 'โรงแรม',
      description: 'โรงแรม',
    },
    {
      src: '/home/cat2.svg',
      alt: 'ร้านอาหาร',
      categoryName: 'ร้านอาหาร',
      description: 'ร้านอาหาร',
    },
    {
      src: '/home/cat3.svg',
      alt: 'ท่องเที่ยว',
      categoryName: 'ท่องเที่ยว',
      description: 'ท่องเที่ยว',
    },
    {
      src: '/home/cat4.svg',
      alt: 'อื่นๆ',
      categoryName: 'อื่นๆ',
      description: 'อื่นๆ',
    },
  ],
  tasks: [
    {
      imageUrl: ['/home/mock_location1.png'],
      title: 'ส่วนลดสวนสยามค่าเข้า สวนน้ำและสวนสนุก',
      name: { th: 'สวนสยาม' },
      rates: [
        {
          commissionType: 'THAI',
          commissionValue: 40,
        },
        {
          commissionType: 'FOREIGNER',
          commissionValue: 80,
        },
      ],
    },
    {
      imageUrl: ['/home/mock_location2.png'],
      title: 'รีสอร์ทติดหาด โรงแรม อาณา อานันท์ รีสอร์ท',
      name: { th: 'อานันท์ รีสอร์ท' },
      rates: [
        {
          commissionType: 'THAI',
          commissionValue: 500,
        },
        {
          commissionType: 'FOREIGNER',
          commissionValue: 1000,
        },
      ],
    },
    {
      imageUrl: ['/home/mock_location3.png'],
      title: 'Lanna Massage คูปอง ส่วนลด นวดเพื่อสุขภาพ',
      name: { th: 'Lanna Massage' },
      rates: [
        {
          commissionType: 'THAI',
          commissionValue: 100,
        },
        {
          commissionType: 'FOREIGNER',
          commissionValue: 200,
        },
      ],
    },
  ],

  sectionWhy: {
    image: {
      src: '/home/section-why.svg',
      alt: 'section-registration',
    },
    content: {
      main: { primary: 'พาไปเที่ยว...', secoundary: 'พาไปกิน' },
      reward: 'ได้รับอั่งเปาทันที',
    },
  },
  sectionBenefit: {
    main: { primary: 'สร้างรายได้', secoundary: 'กับเราง่ายๆ' },
    reward: 'เพียงพานักท่องเที่ยว มาหน้าร้าน',
    section: [],
  },

  footer: {
    alt: 'angpao-icon',
    icon: '/icons/angpao-icons-white.svg',
    description:
      'อั่งเปาแหล่งรวมโปรโมชั่น ส่วนลด สร้างรายได้กับเราง่ายๆ เพียงพานักท่องเที่ยว มาซื้อตั๋ว ซื้อสินค้า รับอั่งเปาทันที',
  },
};

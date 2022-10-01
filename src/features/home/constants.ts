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
      image: '/home/mock_location1.png',
      title: 'ส่วนลดสวนสยามค่าเข้า สวนน้ำและสวนสนุก',
      name: 'สวนสยาม',
      types: [
        {
          name: 'คนไทย',
          price: 40,
        },
        {
          name: 'ต่างชาติ',
          price: 80,
        },
      ],
    },
    {
      image: '/home/mock_location2.png',
      title: 'รีสอร์ทติดหาด โรงแรม อาณา อานันท์ รีสอร์ท',
      name: 'อานันท์ รีสอร์ท',
      types: [
        {
          name: 'คนไทย',
          price: 500,
        },
        {
          name: 'ต่างชาติ',
          price: 1000,
        },
      ],
    },
    {
      image: '/home/mock_location3.png',
      title: 'Lanna Massage คูปอง ส่วนลด นวดเพื่อสุขภาพ',
      name: 'Lanna Massage',
      types: [
        {
          name: 'คนไทย',
          price: 100,
        },
        {
          name: 'ต่างชาติ',
          price: 200,
        },
      ],
    },
    {
      image: '/home/mock_location4.png',
      alt: 'วัดร่องขุ่น',
      title: 'ทัวร์ในประเทศ เชียงราย ภูชี้ฟ้า วัดร่องขุ่น',
      name: 'วัดร่องขุ่น',
      types: [
        {
          name: 'คนไทย',
          price: 400,
        },
        {
          name: 'ต่างชาติ',
          price: 800,
        },
      ],
    },
    {
      image: '/home/mock_location5.png',
      title: 'ส่วนลดสวนสยามค่าเข้า สวนน้ำและสวนสนุก',
      name: 'DreamWorld',
      types: [
        {
          name: 'คนไทย',
          price: 200,
        },
        {
          name: 'ต่างชาติ',
          price: 400,
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

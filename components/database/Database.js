export const COLOURS = {
  white: "#ffffff",
  black: "#000000",
  green: "#00AC76",
  red: "#C04345",
  blue: "#0043F9",
  backgroundLight: "#F0F0F3",
  backgroundMedium: "#B9B9B9",
  backgroundDark: "#777777",
};

export const Items = [
  {
    id: 1,
    category: "product",
    productName: "Rolex Cosmograph Daytona 116595RBOW",
    productPrice: 10000,
    description:
      "Origin: Rolex - Switzerland | Size: 40mm | Ref: 116595RBOW-0002 | Movement: Automatic, caliber 4130 | Function: Hours, minutes, seconds, chronograph | Material: 18k rose gold and diamonds",
    // isOff: true,
    // offPercentage: 10,
    productImage: require("../database/images/products/rolex1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/products/rolex1.png"),
      require("../database/images/products/rolex2.png"),
      require("../database/images/products/rolex3.png"),
    ],
  },
  {
    id: 2,
    category: "product",
    productName: "Chronoswiss Quarter Repeater CH1643-MP",
    productPrice: 14999,
    description:
      "Origin: Chronoswiss - Switzerland | Size: 40mm | Ref: CH1643-MP | Movement: Automatic, Cal C.126 | Function: Hours, minutes, seconds, Repeater | Material: Stainless Steel",
    isOff: false,
    productImage: require("../database/images/products/chronoswiss1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/products/chronoswiss1.png"),
      require("../database/images/products/chronoswiss2.png"),
      require("../database/images/products/chronoswiss3.png"),
    ],
  },
  {
    id: 3,
    category: "product",
    productName: "Cosmograph Daytona Black Dial Automatic Men's",
    productPrice: 9999,
    description:
      "Origin: Rolex - Switzerland | Size: 40mm | Model: 116515BKPSR | Movement: Automatic, Rolex Calibre 4130 | Function: Chronograph, Hour, Minute, Small Second | Material: Everose Gold",
    productImage: require("../database/images/products/cosm1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/products/cosm1.png"),
      require("../database/images/products/cosm2.png"),
      require("../database/images/products/cosm3.png"),
    ],
  },
  {
    id: 4,
    category: "product",
    productName: "Rolex Daytona 116599 12SA",
    productPrice: 13999,
    description:
      "Origin: Chronoswiss - Switzerland | Size: 40mm | Ref: 11659912SA | Movement: Automatic, Cal 4130 | Function: Hours, minutes, seconds, Repeater | Material: 18K While Gold",
    isOff: false,
    productImage: require("../database/images/products/rl1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/products/rl1.png"),
      require("../database/images/products/rl2.png"),
      require("../database/images/products/rl3.png"),
    ],
  },
  {
    id: 5,
    category: "accessory",
    productName: "boAt Rockerz 255 Pro+",
    productPrice: 1499,
    description:
      "The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.",
    isOff: false,
    productImage: require("../database/images/accessories/boatrockerz1.png"),
    isAvailable: false,
    productImageList: [
      require("../database/images/accessories/boatrockerz1.png"),
      require("../database/images/accessories/boatrockerz2.png"),
      require("../database/images/accessories/boatrockerz3.png"),
    ],
  },
  {
    id: 6,
    category: "accessory",
    productName: "Boult Audio AirBass Propods TWS",
    productPrice: 1299,
    description:
      "One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant",
    isOff: false,
    productImage: require("../database/images/accessories/boultairbass1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/accessories/boultairbass1.png"),
      require("../database/images/accessories/boultairbass2.png"),
      require("../database/images/accessories/boultairbass3.png"),
    ],
  },
];

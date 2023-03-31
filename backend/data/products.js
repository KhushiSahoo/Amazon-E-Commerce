const products = [
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Solid Crew Neck Blue T-Shirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/w/w/s/-original-imagk3ffwwtmchtx.jpeg?q=70",
    description:
      "PRODUCT STOR :Simple style exudes confidence and this understated tee is the epitome of cool. You can wear it with pride, knowing your fashion choices are helping to support the Forever Better Initiative. FEATURES & BENEFITS :By buying cotton products from PUMA, youre supporting more sustainable cotton farming. Learn more at PUMA.COM/FOREVERBETTER: DETAILS :Regular fit,Ribbed crew neck,PUMA No. 1 Logo rubber print at left chest,Cotton and elastane.",
    brand: "PUMA",
    category: "tshirt",
    price: 521,
    amazonPrice: 999,
    countInStock: 11,
    rating: 4.5,
    numReviews: 12,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Solid Crew Neck Green T-Shirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/w/b/4/-original-imagk3ffhrxzpztz.jpeg?q=70",
    description:
      "The polo shirt is an enduring silhouette with endless functionality. It gives you the comfort of a tee, but is upgraded with refined details for a slightly stepped-up look.",
    brand: "PUMA",
    category: "tshirt",
    price: 570,
    amazonPrice: 999,
    countInStock: 2,
    rating: 4,
    numReviews: 13,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Solid Round Neck Beige T-Shirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/o/2/u/m-58666967-puma-original-imaghesvrpwnz2jh.jpeg?q=70",
    description:
      "The polo shirt is an enduring silhouette with endless functionality. It gives you the comfort of a tee, but is upgraded with refined details for a slightly stepped-up look.",
    brand: "PUMA",
    category: "tshirt",
    price: 570,
    amazonPrice: 999,
    countInStock: 11,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Striped Polo Neck Multicolor T-Shirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/v/e/k/-original-imagnu3z7kzua62n.jpeg?q=70",
    description:
      "The polo shirt is an enduring silhouette with endless functionality. It gives you the comfort of a tee, but is upgraded with refined details for a slightly stepped-up look.",
    brand: "LEVIS",
    category: "tshirt",
    price: 770,
    amazonPrice: 999,
    countInStock: 1,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Women Printed Crew Neck Black T-Shirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/l1ch4sw0/t-shirt/t/r/4/l-hg3077-adidas-original-imagcxz8fzb2uavk.jpeg?q=70",
    description:
      "Country club style with a contemporary twist. Showing off horizontal 3-Stripes on one sleeve, this adidas Club tennis tee is built for comfort. Mesh panels and soft, ventilated fabric keep you cool and dry through the most intense rallies. An underarm gusset provides the freedom you need to nail every shot. This product is made with Primegreen, a series of high-performance recycled materials.",
    brand: "ADIDAS",
    category: "tshirt",
    price: 750,
    amazonPrice: 999,
    countInStock: 4,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Tapered Light Green Cotton Blend Trousers",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/r/t/p/-original-imaghm9areuszpah.jpeg?q=70",
    description:
      "Country club style with a contemporary twist. Showing off horizontal 3-Stripes on one sleeve, this adidas Club tennis tee is built for comfort. Mesh panels and soft, ventilated fabric keep you cool and dry through the most intense rallies. An underarm gusset provides the freedom you need to nail every shot. This product is made with Primegreen, a series of high-performance recycled materials.",
    brand: "VAN HEUSEN SPORT",
    category: "trouser",
    price: 1350,
    amazonPrice: 1999,
    countInStock: 4,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Slim Fit Grey Cotton Blend Trousers",
    image:
      "https://rukminim1.flixcart.com/image/832/832/kfcv6vk0-0/trouser/w/q/y/32-astfwsrf640246-allen-solly-original-imafvtr3paath9g6.jpeg?q=70",
    description:
      "Country club style with a contemporary twist. Showing off horizontal 3-Stripes on one sleeve, this adidas Club tennis tee is built for comfort. Mesh panels and soft, ventilated fabric keep you cool and dry through the most intense rallies. An underarm gusset provides the freedom you need to nail every shot. This product is made with Primegreen, a series of high-performance recycled materials.",
    brand: "Allen Solly ",
    category: "trouser",
    price: 1350,
    amazonPrice: 1999,
    countInStock: 1,
    rating: 4,
    numReviews: 1,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Women Relaxed Blue Linen Blend Trousers",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/6/u/t/34-t704245tnavy-marks-spencer-original-imagmndw47bpnzrd.jpeg?q=70",
    description: "Linen Mix Plain Loose Trouser.",
    brand: "MARKS & SPENCER",
    category: "trouser",
    price: 1350,
    amazonPrice: 1999,
    countInStock: 3,
    rating: 4,
    numReviews: 3,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Full Sleeve Solid Hooded Sweatshirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sweatshirt/c/f/0/l-unisex-stylish-latest-solid-hoodie-sweatshirt-fleece-cotton-original-imagbf99hjtsfhvk.jpeg?q=70",
    description:
      "Cotton Fleece Regular Hooded Sweatshirt Full Sleeves Solid Sweatshirt for Men",
    brand: "MARKS & SPENCER",
    category: "pullover",
    price: 650,
    amazonPrice: 1999,
    countInStock: 4,
    rating: 4,
    numReviews: 0,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Full  blue Sleeve Solid Hooded Sweatshirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/n/8/3/m-men-full-sleeve-solid-hooded-sweatshirt-aeshaproduction-original-imagbf998pbmskym.jpeg?q=70",
    description:
      "Cotton Fleece Regular Hooded Sweatshirt Full Sleeves Solid Sweatshirt for Men",
    brand: "MARKS & SPENCER",
    category: "pullover",
    price: 650,
    amazonPrice: 1999,
    countInStock: 2,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Women Maxi Dress",
    image:
      "https://rukminim1.flixcart.com/image/832/832/kixgtjk0-0/dress/h/a/o/xxl-8iqgwnblck-iqraar-original-imafyhwvhmaqgz2x.jpeg?q=70",
    description:
      "We are presents this beautiful Flared bottom Printed Maxi Dress With short Sleeves . This Maxi Dress has all to give comfort and looks is best for Both Festive And Party Wear Looking Dress. It can be worn with , Leggings, Pants, etc.",
    brand: "RUHI FASHION ",
    category: "dress",
    price: 650,
    amazonPrice: 1999,
    countInStock: 2,
    rating: 4,
    numReviews: 1,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Women Maxi Pink Dress",
    image:
      "https://rukminim1.flixcart.com/image/832/832/kyj0vbk0/dress/q/x/0/m-60iqgwnbpnk-iqraar-original-imagaqs7chzxvg3x.jpeg?q=70",
    description:
      "We are presents this beautiful Flared bottom Printed Maxi Dress With short Sleeves . This Maxi Dress has all to give comfort and looks is best for Both Festive And Party Wear Looking Dress. It can be worn with , Leggings, Pants, etc.",
    brand: "RUHI FASHION ",
    category: "dress",
    price: 1650,
    amazonPrice: 1999,
    countInStock: 4,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "POLY COTTON FLEECE Coat For Women",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/coat/p/e/g/s-wfcb002-roarers-original-imagg6j5efxrzkh9.jpeg?q=70",
    description:
      "This Collection Present A Unique Collection Of Women's Long Coat Which Is Perfect For Coming Season .",
    brand: "ROARERS ",
    category: "coat",
    price: 1650,
    amazonPrice: 1999,
    countInStock: 8,
    rating: 4,
    numReviews: 19,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "POLY COTTON Coat For Women",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/coat/p/s/s/xxl-wfcb-roarers-original-imaghgptzjee8eya.jpeg?q=70",
    description:
      "Blush Collection Present A Unique Collection Of Women's Long Coat Which Is Perfect For Coming Season .",
    brand: "ROADSTERS",
    category: "coat",
    price: 2650,
    amazonPrice: 4999,
    countInStock: 5,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Navy, Red Sports Sandal",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/f/o/1/9-star-12-n-airson-drak-blue-red-original-imagm2gdhysnypzh.jpeg?q=70",
    description:
      "Fusing contemporary style and traditional craftsmanship, the Airson collection is the perfect companion for your off-duty look or smart casual attire. Constructed with premium niwar on a durable rubber sole they offer unparalleled levels of comfort.",
    brand: "Airson",
    category: "sandal",
    price: 650,
    amazonPrice: 999,
    countInStock: 8,
    rating: 4,
    numReviews: 9,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "SandTop Sandal",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/k/w/c/8-star-10-n-airson-navy-white-original-imagm2gdrq6jvc9k.jpeg?q=70",
    description:
      "Fusing contemporary style and traditional craftsmanship, the Airson collection is the perfect companion for your off-duty look or smart casual attire. Constructed with premium niwar on a durable rubber sole they offer unparalleled levels of comfort.",
    brand: "ROADSTERS",
    category: "sandal",
    price: 850,
    amazonPrice: 999,
    countInStock: 6,
    rating: 3,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Regular Fit Solid Spread Collar Casual Shirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/l1tmf0w0/shirt/q/p/o/l-st2-vebnor-original-imagdaz7gpzqhpzm.jpeg?q=70",
    description:
      "This shirt for men is one of the top selling product from premium quality casual shirts collection exclusively manufactured by VeBNoR brand. Long lasting fabric and trendy colors make it evergreen for casual and formal usage. You can use it on jeans as well as it is appropriate as formal office wear.",
    brand: "VeBNoR ",
    category: "shirt",
    price: 850,
    amazonPrice: 999,
    countInStock: 5,
    rating: 3,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Regular Fit Solid Spread Collar Casual Shirt",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/j/8/v/xl-st2-vebnor-original-imagd2wkbmk7vcne-bb.jpeg?q=70",
    description:
      "This shirt for men is one of the top selling product from premium quality casual shirts collection exclusively manufactured by VeBNoR brand. Long lasting fabric and trendy colors make it evergreen for casual and formal usage. You can use it on jeans as well as it is appropriate as formal office wear.",
    brand: "ROADSTERS",
    category: "shirt",
    price: 850,
    amazonPrice: 999,
    countInStock: 9,
    rating: 3,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Men Regular Fit Solid Spread Collar Casual Shirt",
    image:
      "https://rukminim1.flixcart.com/image/612/612/l1pc3gw0/shirt/c/i/t/l-st2-vebnor-original-imagd7b7aeybhxvs.jpeg?q=70",
    description:
      "This shirt for men is one of the top selling product from premium quality casual shirts collection exclusively manufactured by VeBNoR brand. Long lasting fabric and trendy colors make it evergreen for casual and formal usage. You can use it on jeans as well as it is appropriate as formal office wear.",
    brand: "ROADSTERS",
    category: "shirt",
    price: 850,
    amazonPrice: 999,
    countInStock: 7,
    rating: 3,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Sneakers For Men  (White)",
    image:
      "https://rukminim1.flixcart.com/image/832/832/kq6yefk0/shoe/2/j/z/10-pns8563416-44-robbie-jones-white-original-imag496yf8zh53ux.jpeg?q=70",
    description:
      "Casual Shoes Perfect & Affordable Sneakers Outdoor Loafer Sneakers For Men",
    brand: "ROADSTERS",
    category: "sneaker",
    price: 850,
    amazonPrice: 999,
    countInStock: 8,
    rating: 3,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Sneakers For Men  (BLACK)",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/k/k/gm1251-43-good-minar-black-original-imaft34ej4zx2z63-bb.jpeg?q=70",
    description:
      "Casual Shoes Perfect & Affordable Sneakers Outdoor Loafer Sneakers For Men",
    brand: "PUMA",
    category: "sneaker",
    price: 1850,
    amazonPrice: 3999,
    countInStock: 3,
    rating: 5,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Women Black Shoulder Bag - Mini",
    image:
      "https://rukminim1.flixcart.com/image/832/832/ju79hu80/hand-messenger-bag/f/h/s/shoulder-bag-bc-006-black-shoulder-bag-blush-collection-original-imaffd8wx4jtwp84.jpeg?q=70",
    description:
      "Blush Collection Is A Brand Which Is Specialized In Providing Varied Bags, Simple But Utility, Classical But Fashionable Bags. Providing High-Quality Material, Elaborate Craftsmanship And Multipurpose Design Is The Most Important Pursuit Of Blush Collection. Every Bag You Will Receive Has Been Through Hundreds Of Procedures To Ensure Its Excellent Quality",
    brand: "Blush Collection ",
    category: "bag",
    price: 450,
    amazonPrice: 999,
    countInStock: 5,
    rating: 3,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Women Brown Shoulder Bag - Mini",
    image:
      "https://rukminim1.flixcart.com/image/832/832/ju79hu80/hand-messenger-bag/q/m/a/shoulder-bag-bc-006-brown-shoulder-bag-blush-collection-original-imaffd8wyeretr7g.jpeg?q=70",
    description:
      "Blush Collection Is A Brand Which Is Specialized In Providing Varied Bags, Simple But Utility, Classical But Fashionable Bags. Providing High-Quality Material, Elaborate Craftsmanship And Multipurpose Design Is The Most Important Pursuit Of Blush Collection. Every Bag You Will Receive Has Been Through Hundreds Of Procedures To Ensure Its Excellent Quality",
    brand: "Blush Collection ",
    category: "bag",
    price: 450,
    amazonPrice: 999,
    countInStock: 7,
    rating: 3,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Girls Stylish & Comfortable | Casual | Party Wear Boots For Women  (Brown)",
    image:
      "https://rukminim1.flixcart.com/image/832/832/k5vcya80pkrrdj/shoe/a/z/6/5-dc-9607-dicy-original-imafaw3a3h7rc9zh.jpeg?q=70",
    description:
      "Made from Best Quality Material which Is Durable and Comfortable to Wear, We offer you Variety of Designs and Styles with Unique Straps and Soles. These stylish footwear are the perfect inspiration for a fashionable look. The comfortable sole makes sure that your feet stay comfortable throughout the day and you enjoy optimal Grip. Designed to offer comfort at its best, without compromising on style. We are committed to deliver the finest footwear ever made.",
    brand: "RINDAS",
    category: "boot",
    price: 2450,
    amazonPrice: 4999,
    countInStock: 8,
    rating: 4,
    numReviews: 5,
  },
  {
    user: "61d3d620228033e046bfb573",
    name: "Girls Stylish & Comfortable Boot",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/m/q/6/sn-9613-8-shoenstring-black-original-imaftzd8d7qmuejs-bb.jpeg?q=70",
    description:
      "Blush Collection Is A Brand Which Is Specialized In Providing Varied Bags, Simple But Utility, Classical But Fashionable Bags. Providing High-Quality Material, Elaborate Craftsmanship And Multipurpose Design Is The Most Important Pursuit Of Blush Collection. Every Bag You Will Receive Has Been Through Hundreds Of Procedures To Ensure Its Excellent Quality",
    brand: "INCH5",
    category: "boot",
    price: 450,
    amazonPrice: 999,
    countInStock: 3,
    rating: 3,
    numReviews: 5,
  },
];

export default products;

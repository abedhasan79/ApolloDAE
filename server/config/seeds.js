const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: '🥨 Snacks' },
    { name: '🧻 Household Supplies' },
    { name: '📱 Electronics' },
    { name: '🎮 Video Games' },
    { name: '🧸 Toys' },
    { name: '🧢👒Clothes'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Box of Candy',
      description:
        'A mix of every chocolate bar. Snickers, Corny, Kinder, Bounty, Hanula, Duplo, Mars, Twix && more',
      image: 'candy.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 10
    },
    {
      name: 'Chips',
      description:
        'Old Dutch Ridgies extra ketchup chip.',
      image: 'chips.jpg',
      category: categories[0]._id,
      price: 4.99,
      quantity: 100
    },
     {
      name: 'Pocky',
      description:
        'Japanese snack with different flavours',
      image: 'pocky.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 80
    },
     {
      name: 'Hichew',
      description:
        'Sweet and chewy',
      image: 'hichew.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 130
    },
     {
      name: 'Cheesecake',
      description:
        'Classic Cheesecake',
      image: 'cheesecake.jpg',
      category: categories[0]._id,
      price: 4.99,
      quantity: 10
    },
     {
      name: 'Strawberry Boba Powder',
      description:
        'Strawberry flavoured bubble tea.',
      image: 'boba.jpg',
      category: categories[0]._id,
      price: 4.99,
      quantity: 100
    },
    {
      name: 'Star Theme Bed sheet',
      category: categories[1]._id,
      description:
        'A very nice decorative bed sheet designed with stars to give that comforting feel at night',
      image: 'starbedsheet.jpg',
      price: 17.99,
      quantity: 2
    },
    {
      name: 'Scented Candles',
      category: categories[1]._id,
      description:
        'Beautiful vanilla flavoured candles decorated with floral petals and cactuses.',
      image: 'duocandles.jpg',
      price: 10.99,
      quantity: 20
    },
    {
      name: 'Fluff Snow White Carpet',
      category: categories[1]._id,
      description:
        'Fluffy and warm.',
      image: 'carpet.jpeg',
      price: 14.99,
      quantity: 100
    },
     {
      name: 'Modern Lamp',
      category: categories[1]._id,
      description:
        'Add a nice modern touch to your home with our modern lamp.',
      image: 'lamp.jpg',
      price: 20.99,
      quantity: 4
    },
     {
      name: 'Hero Academia Poster',
      category: categories[1]._id,
      description:
        'Decorate your wall with this Hero Academia Poster!',
      image: 'anime.jpg',
      price: 17.99,
      quantity: 1
    },
     {
      name: 'Mirror',
      category: categories[1]._id,
      description:
        'Mirror mirror on the wall....',
      image: 'mirror.jpg',
      price: 7.99,
      quantity: 2
    },
    {
      name: 'Iphone 11',
      category: categories[2]._id,
      description:
        'Apple product Iphones with multiple of colors to choose from.',
      image: 'iphones.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'BenQ Monitor',
      category: categories[2]._id,
      description:
        'Watch everything in 4k.',
      image: 'monitor.jpg',
      price: 199.99,
      quantity: 30
    },
      {
      name: 'Mario Kart ',
      category: categories[3]._id,
      description:
        'Nintendo games.',
      image: 'mariok.jpg',
      price: 19.99,
      quantity: 33
    },
      {
      name: 'Zelda Breath of The Wild',
      category: categories[3]._id,
      description:
        'Nintendo games.',
      image: 'zelda.jpg',
      price: 19.99,
      quantity: 2
    },
    {
      name: 'Fidget Spinner',
      category: categories[4]._id,
      description:
        'For all your distracted needs, a fidget spinner is nice and user friendly.',
      image: 'fidget.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Nintendo Switch',
      category: categories[4]._id,
      description: 'Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap.',
      image: 'switch.jpg',
      price: 599.99,
      quantity: 1000
    },
    {
      name: 'Play Doh',
      category: categories[4]._id,
      description:
        'Welcome to the official Play-Doh website! Find Play-Doh sets, videos, apps, arts & crafts toys for creative kids here.',
      image: 'playdoh.jpg',
      price: 2.99,
      quantity: 1000
    },
      {
      name: 'Yoyo',
      category: categories[4]._id,
      description:
        'Just some good ole yoyo.',
      image: 'yoyo.jpg',
      price: 1.99,
      quantity: 100
    },
    {
      name: 'Cardigans',
      category: categories[5]._id,
      description:
        'Wool material felt cardigans comes in different colors.',
      image: 'clothes.jpg',
      price: 17.99,
      quantity: 100
    },
    {
      name: 'Baseball Hat',
      category: categories[5]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'baseballhat.jpg',
      price: 9.99,
      quantity: 600
    },
      {
      name: 'Sweater',
      category: categories[5]._id,
      description:
        'Just a warm comfy sweater.',
      image: 'sweater.jpg',
      price: 9.99,
      quantity: 600
    },
      {
      name: 'Socks',
      category: categories[5]._id,
      description:
        'Winter socks, keeps you warm.',
      image: 'socks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@apollodae.com',
    password: 'admindae',
    isAdmin:true
  });

  console.log('users seeded');

  process.exit();
});

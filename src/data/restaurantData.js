export const brandColors = {
  primaryOrange: '#FB6218',
  crimsonRed: '#BF2A2E',
  jetBlack: '#090909',
  pureWhite: '#FFFFFF',
};

export const socialLinks = {
  instagram: 'https://www.instagram.com/paradise___27/',
  facebook: 'https://www.facebook.com/p/Paradise-27-61581372972762/',
  whatsapp: 'https://wa.me/919910210318',
  phone: '+919910210318',
  email: 'paradise27gnpk2@gmail.com',
};

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const signatureDishes = [
  {
    id: 'wagyu',
    name: 'Truffle Wagyu Medallion',
    subtitle: 'Signature Charcoal & Wood-Fired Cut',
    category: 'Chef’s Selection',
    description: 'Prime A5 wagyu tenderloin seared over cherry wood coals, served with Perigord black truffle shavings, silky parsnip purée, and an aged vintage port glaze.',
    image: '/images/signature_wagyu.jpg',
    price: '$78',
    prepTime: '22 mins',
    rating: '4.98',
    tags: ['Wood-Fired', 'A5 Wagyu', 'Black Truffle'],
    pairing: 'Cabernet Sauvignon, Napa Valley 2018',
  },
  {
    id: 'salmon',
    name: 'Blood Orange Wild King Salmon',
    subtitle: 'Crispy Skin & Charred Ember Greens',
    category: 'Ocean Harvest',
    description: 'Pan-roasted Pacific king salmon with golden crackling skin, Sicilian blood orange reduction, ember-charred jumbo asparagus, and delicate 24k gold leaf.',
    image: '/images/signature_salmon.jpg',
    price: '$54',
    prepTime: '18 mins',
    rating: '4.95',
    tags: ['Wild Caught', 'Gluten Free', 'Citrus Glaze'],
    pairing: 'Domaine Leflaive Puligny-Montrachet',
  },
  {
    id: 'cocktail',
    name: 'Smoked Ember Old Fashioned',
    subtitle: 'Artisan Crystal & Flaming Citrus Twist',
    category: 'Craft Mixology',
    description: 'Aged small-batch bourbon infused with Madagascar vanilla bean, charred orange peel oils, flamed organic rosemary sprig, served over hand-carved crystal ice.',
    image: '/images/signature_cocktail.jpg',
    price: '$24',
    prepTime: '5 mins',
    rating: '4.99',
    tags: ['House Specialty', 'Flamed Citrus', 'Aged Bourbon'],
    pairing: 'Dark Chocolate Ganache Tart',
  },
];

export const restaurantStats = [
  { label: 'Michelin Guide', value: 'Selected 2026' },
  { label: 'Guest Rating', value: '4.9 ★ (1.4k Reviews)' },
  { label: 'Service Style', value: 'Wood-Fired & Ember' },
  { label: 'Hours', value: 'Daily 7:00 AM – 10:00 PM' },
];

export const menuHighlights = [
  {
    category: 'Starters & Crudo',
    items: [
      { name: 'Hokkaido Scallop Carpaccio', price: '$26', desc: 'Yuzu kosho, finger lime, white truffle emulsion, crispy nori' },
      { name: 'Smoked Bone Marrow Tartine', price: '$28', desc: 'Sourdough brioche, caramelized shallot jam, charred parsley gremolata' },
      { name: 'Heirloom Burrata & Charred Figs', price: '$22', desc: 'Aged balsamic reduction, toasted pistachios, sourdough crisps' },
    ]
  },
  {
    category: 'Wood-Fired Mains',
    items: [
      { name: 'Truffle Wagyu Medallion (A5)', price: '$78', desc: 'Cherry wood coals, Perigord truffle shavings, port demi-glace' },
      { name: 'Blood Orange King Salmon', price: '$54', desc: 'Crisp skin, blood orange reduction, charred asparagus, gold leaf' },
      { name: 'Roasted Magret Duck Breast', price: '$48', desc: 'Spiced honey glaze, braised endive, tart cherry jus' },
    ]
  },
  {
    category: 'Craft Libations & Desserts',
    items: [
      { name: 'Smoked Ember Old Fashioned', price: '$24', desc: 'Flaming orange peel, flamed rosemary, hand-carved crystal sphere' },
      { name: 'Paradise 27 Velvet Soufflé', price: '$19', desc: 'Single-origin Valrhona dark chocolate, Grand Marnier crème anglaise' },
      { name: 'Passionfruit & Crimson Sorbet', price: '$16', desc: 'Hibiscus gelée, crystallized mint, toasted hazelnut crumble' },
    ]
  }
];

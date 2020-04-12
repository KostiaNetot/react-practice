
export default class StoreService {

  data = [
    {
      id: 1,
      title: 'Buckwheat',
      price: 2,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325042/325042_1100.jpg'
    },
    {
      id: 2,
      title: 'Toilet paper',
      price: 3,
      description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown',
      img: 'https://i.insider.com/5d250c0ea17d6c20573d32b2?width=1136&format=jpeg'
    },
    {
      id: 3,
      title: 'Eggs',
      price: 1,
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://images.megapixl.com/5703/57031776.jpg'
    },
    {
      id: 4,
      title: 'Beef canned',
      price: 14,
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51msFT1t3gL._SX385_.jpg'
    },
  ];

  getGoods() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          rej(new Error('Lazhaa!!!'));
        } else {
          res(this.data);
        }
      }, 700);
    });
  }
}

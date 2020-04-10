
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
      img: 'https://lh3.googleusercontent.com/proxy/rfudU_FUjkvFhJXqnSY4nzeHUFo4V-VhNDFwGTOk73SFIwvalpqhdI2nMibLoQITzYHxZm6ur20P5vRxJDbuMUEpFNdai0VTDd1lXacv2U_9rb0kflxTQUK16NqgNRY'
    },
    {
      id: 4,
      title: 'Eggs',
      price: 1,
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://lh3.googleusercontent.com/proxy/rfudU_FUjkvFhJXqnSY4nzeHUFo4V-VhNDFwGTOk73SFIwvalpqhdI2nMibLoQITzYHxZm6ur20P5vRxJDbuMUEpFNdai0VTDd1lXacv2U_9rb0kflxTQUK16NqgNRY'
    },
  ];

  getGoods() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // res(this.data)
        rej(new Error('Errorrrrrrr'))
      }, 700);
    });
  }
}

const goods = [
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
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: 'https://i.insider.com/5d250c0ea17d6c20573d32b2?width=1136&format=jpeg'
  },
  {
    id: 3,
    title: 'Eggs',
    price: 1,
    description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    img: 'https://previews.123rf.com/images/marimadesign/marimadesign1410/marimadesign141000097/32489083-green-egg-box-with-10-eggs.jpg'
  },
];





// {
//   goods.map(item => {
//     return(
//       <Card key={item.id}>
//         <Image size='small' src={item.img} wrapped ui={false} />
//         <Card.Content>
//           <Card.Header>{item.title}</Card.Header>
//           <Card.Meta>
//             <span className='date'>Price:<b className='font-black'>{item.price}$</b></span>
//           </Card.Meta>
//           <Card.Description>{item.description}</Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <Button animated='vertical'>
//             <Button.Content visible>Add to cart</Button.Content>
//             <Button.Content hidden>
//               <Icon name='shop' />
//             </Button.Content>
//           </Button>
//         </Card.Content>
//       </Card>
//     )
//   })
// }

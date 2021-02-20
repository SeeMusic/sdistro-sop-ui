import Card from './main';

Card.install = (Vue) => {
  Vue.component(Card.name, Card);
};

export default Card;

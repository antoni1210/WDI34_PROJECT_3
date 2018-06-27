const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Place = require('../models/place');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'Brad',
    email: 'brad@brad.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'Josh',
    email: 'josh@josh.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }, {
    username: 'Ant',
    email: 'ant@ant.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }])
    .then(users => {
      console.log('User created');
      return Place.create([{
        name: 'Juju\'s',
        image: 'http://cdn.ltstatic.com/2017/April/IU843017_942long.jpg',
        type: 'Bar',
        price: 3,
        address: 'E1 6QR',
        location: { lat: 51.4965546, lng: -0.2326328 },
        owner: users[0],
        comments: [{
          content: 'Worst bar in London',
          rating: 1,
          author: users[1]
        }, {
          content: 'Best bar in London',
          rating: 5,
          author: users[2]
        }]
      }, {
        name: 'Campania',
        image: 'https://i.guim.co.uk/img/media/182a60fe758a6e9054d83f316ed61480fa44035e/0_651_4381_2629/master/4381.jpg?w=620&q=20&auto=format&usm=12&fit=max&dpr=2&s=11dc55d8266e78bf90f87db665aa0152',
        type: 'Restaurant',
        price: 4,
        address: 'E2 7RH',
        location: {
          lat: 51.5297036,
          lng: -0.0696633
        },
        owner: users[1],
        comments: [{
          content: 'Amazing homemade pasta',
          rating: 4,
          author: users[0]
        }]
      }, {
        name: 'Genesis',
        image: 'https://images.savoysystems.co.uk/GEN/33521.jpg',
        type: 'Cinema',
        price: 3,
        address: 'E1 4UJ',
        location: {
          lat: 51.5211587,
          lng: -0.0511273
        },
        owner: users[1],
        comments: [{
          content: 'All tickets a fiver on Wednesdays!',
          rating: 4,
          author: users[0]
        }]
      }, {
        name: 'Borough Market',
        image: 'http://earthyphotography.com/wp-content/uploads/2012/07/120721-borough-market-london-01(pp_w768_h512).jpg',
        type: 'Market',
        price: 3,
        address: 'SE1 1TL',
        location: {
          lat: 51.50544,
          lng: -0.0910606
        },
        owner: users[1],
        comments: [{
          content: 'Best food market in London',
          rating: 4,
          author: users[0]
        }]
      }, {
        name: 'Hackney City Farm',
        image: 'http://2.bp.blogspot.com/-EB3KFXMO-rY/U1Ziyp3yCDI/AAAAAAAAH9k/LV3szd-hJ9M/s1600/London-Hackney-City-Farm.jpg',
        type: 'Farm',
        price: 1,
        address: 'E2 8QA',
        location: {
          lat: 51.5316725,
          lng: -0.0668395
        },
        owner: users[1],
        comments: [{
          content: 'Free farm filled with all the animals you can imagine... right in the middle of the city!',
          rating: 5,
          author: users[0]
        }]
      }, {
        name: 'Bang Bang Oriental Foodhall',
        image: 'http://www.highlivingbarnet.com/wp-content/uploads/2017/07/Bang-Bang-2.jpg',
        type: 'Market',
        price: 1,
        address: 'NW9 0FH',
        location: {
          lat: 51.593471,
          lng: -0.261697
        },
        owner: users[2],
        comments: [{
          content: 'Amazing selection of Asian cuisine, come hungry!',
          rating: 5,
          author: users[2]
        }]
      }, {
        name: 'Backyard Cinema',
        image: 'https://media.timeout.com/images/103143454/630/472/image.jpg',
        type: 'Cinema',
        price: 2,
        address: 'SE1 6DR',
        location: {
          lat: 51.4987099,
          lng: -0.0985963
        },
        owner: users[2],
        comments: [{
          content: 'Variety of iconic, unusual and immersive locations both in and outdoors around London, each show is  totally unique!',
          rating: 5,
          author: users[2]
        }]
      }, {
        name: 'Mother Clucker',
        image: 'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2015/10/IMG_3554-1050x700.jpg',
        type: 'Restaurant',
        price: 2,
        address: 'E1 6NJ',
        location: {
          lat: 51.5210851,
          lng: -0.07317
        },
        owner: users[1],
        comments: [{
          content: 'Unreal tea brined, twice fried chicken',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'The Mayor of Scaredy Cat Town',
        image: 'http://finchinteriors.co.uk/wp-content/uploads/2014/06/finch-interiors-breakfast-club-spitalfields-2.jpg',
        type: 'Bar',
        price: 2,
        address: 'E1 7LS',
        location: {
          lat: 51.5183722,
          lng: -0.0809602
        },
        owner: users[1],
        comments: [{
          content: 'Cocktails served in this basement bar, hidden THROUGH a fridge door in the restaurant',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'Kyoto Garden',
        image: 'https://thumbs.dreamstime.com/b/japanese-garden-london-kyoto-holland-park-uk-53662723.jpg',
        type: 'Park',
        price: 2,
        address: 'E1 7LS',
        location: {
          lat: 51.5029922,
          lng: -0.2046902
        },
        owner: users[1],
        comments: [{
          content: 'Secret Japanese garden in Holland Park, hopefully you come across the Peacocks! ',
          rating: 4,
          author: users[1]
        }]
      }, {
        name: 'Hootananny Brixton',
        image: 'https://www.theupcoming.co.uk/wp-content/uploads/2012/09/Hootananny.jpg',
        type: 'Bar',
        price: 2,
        address: 'SW2 1DF',
        location: {
          lat: 51.4553793,
          lng: -0.11325
        },
        owner: users[1],
        comments: [{
          content: 'Late night bar and music venue, several acts a night ranging from reggae to punk',
          rating: 5,
          author: users[1]
        }]
      }, {
        name: 'Netil 360',
        image: 'http://madeinshoreditch.co.uk/wp-content/uploads/2014/07/Netil-360-2.jpg',
        type: 'Bar',
        price: 2,
        address: 'E8 3RL',
        location: {
          lat: 51.5375831,
          lng: -0.05771
        },
        owner: users[1],
        comments: [{
          content: 'Rooftop bar with amazing views and a wood oven for Pizzas',
          rating: 5,
          author: users[1]
        }]
      }]);

    })
    .then(places => console.log(`${places.length} place(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});

const models = require('../models');

exports.get_landing = function (req, res, next) {
  res.render('landing', { title: 'Express', user: req.user });
};

exports.submit = function (req, res, next) {
  return models.User.create({
    email: req.body.user_email,
    name: req.body.name,
    pay_method: req.body.pay_method,
    contact: req.body.contact
  }).then(user => {
    console.log("id:", user.id);
    res.redirect('/users');
  })
};

exports.show_add_room = function (req, res, next) {
  res.render('room/add_room', { title: 'Express', user: req.user });
};

exports.submit_room = function (req, res, next) {
  let amenities = req.body['amenities[]'];

  if (!Array.isArray(amenities)) {
    amenities = [amenities].filter(Boolean); // Filter out empty values
  } else {
    amenities = amenities.filter(Boolean); // Filter out empty values
  }

  const price = req.body.price;
  const frequency = req.body.frequency;

  return models.Room.create({
    size: req.body.size,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    floor_number: req.body.floor_number,
    door_number: req.body.door_number,
    type: req.body.type,
    description: req.body.description,
    UserId: req.body.UserId
  })
    .then(room => {
      const roomId = room.id; // Get the newly created roomId

      // Create amenities and associate them with the roomId
      const amenityPromises = amenities.map(amenity => {
        return models.Amenity.create({
          name: amenity,
          RoomId: roomId // Associate with the respective roomId
        });
      });

      // Create price and associate it with the roomId
      const pricePromise = models.Price.create({
        price: price,
        frequency: frequency
      }).then(price => {
        room.setPrice(price); // Associate the created price with the room
      });

      // Wait for all promises to resolve
      return Promise.all([...amenityPromises, pricePromise])
        .then(() => {
          res.redirect('/rooms');
        })
        .catch(error => {
          // Handle the error
          console.error(error);
          next(error);
        });
    })
    .catch(error => {
      // Handle the error
      console.error(error);
      next(error);
    });
};


exports.show_users = function (req, res, next) {
  models.User.findAll().then(users => {
    res.render('user/users', { title: 'Express', users: users, user: req.user });
  })
};

exports.show_rooms = function (req, res, next) {
  models.Room.findAll({ include: [{ model: models.Amenity, as: 'amenities' }, { model: models.Price }] })
    .then(rooms => {
      res.render('room/rooms', { title: 'Express', rooms: rooms, user: req.user });
    })
    .catch(err => {
      // Handle the error if any
      console.error(err);
      // Render an error view or redirect as needed
    });
};

exports.show_room = function (req, res, next) {
  models.Room.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: models.Amenity, as: 'amenities' },
      models.Price
    ]
  })
    .then(room => {
      res.render('room/room', { room: room, user: req.user });
    })
    .catch(error => {
      // Handle the error
      console.error(error);
      next(error);
    });
};

exports.delete_room = function (req, res, next) {
  if (req.user.RoleID == 1) {
    console.log("Called delete room function");
    return models.Room.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.redirect('/rooms');
    });
  }
};

exports.show_purchase_room = function (req, res, next) {
  models.Room.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: models.Amenity, as: 'amenities' },
      models.Price
    ]
  })
    .then(room => {
      res.render('room/purchase', { room: room, user: req.user });
    })
    .catch(error => {
      // Handle the error
      console.error(error);
      next(error);
    });
};

exports.purchase_room = function (req, res, next) {
  console.log("\n\n\ncalled purchase room final\n\n\n" + req.user.id);
  return models.Payment.create({
    customer_id: req.user.id,
    RoomId: req.room.id,
  }).then(payment => {
    res.redirect('/');
  }).catch(error => {
    console.error(error);
    res.redirect('/error');
  });
};

exports.show_user = function (req, res, next) {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(user => {
    res.render('user/user', { user: user });
  });
};

exports.show_edit_user = function (req, res, next) {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(user => {
    res.render('user/edit_user', { user: user });
  });
};

exports.edit_user = function (req, res, next) {
  if (req.user.id == req.params.id || req.user.RoleID == 1) {
    return models.User.update({
      email: req.body.user_email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      country: req.body.country,
      city: req.body.city,
      address: req.body.address,
      preferred_pay_method: req.body.preferred_pay_method
    }, {
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.redirect('/user/' + req.params.id);
    });
  }
};

exports.delete_user = function (req, res, next) {
  if (req.user.RoleID == 1) {
    return models.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.redirect('/users');
    });
  }
};

exports.delete_user_json = function (req, res, next) {
  return models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.send({ msg: "Success" });
  });
};
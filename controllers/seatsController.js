var Seat = require('../models/Seats');

module.exports =
{
  create: function(req, res, next) {
    var seat = new Seat(req.body);
      seat.save(function(err, seat) {
        if(err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(seat);
        }
      });

  },
  read: function(req, res, next) {
    Seat.find().exec(function(err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      });
  },
  update: function(req, res, next) {
    Seat.Update({_id: req.params.id}, req.body, function(error, seat){
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(seat)
      }
    });
  },
  show: function(req, res, next) {
    Seat.findById(req.params.id, function(err, seat){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(seat)
        }
      });
  },
  destroy: function(req, res, next) {
    console.log(req.params.id);
    Seat.findByIdAndRemove(req.params.id, function(error, seat){
      console.log(seat);
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(seat)
      }
    });
  },
};

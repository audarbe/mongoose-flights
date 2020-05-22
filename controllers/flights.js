const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
};

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = `${dt.getFullYear()}-${dt.getMonth().toString().padStart(2, '0')}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
    res.render('flights/new', {departsDate});
};

function create (req, res) {
    const flight = new Flight(req.body);
    flight.save(function() {
        console.log(flight);
        res.redirect('/flights');
    });
};


/*
Code these additional User Stories:
AAU, I want to view the list of flights by departure date in ascending order.
AAU, I want the flights in the list to be displayed using red text if the flight's departure date has passed.
Style the index and new views.
*/
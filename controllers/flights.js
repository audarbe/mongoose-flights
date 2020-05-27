const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = `${dt.getFullYear()}-${dt.getMonth().toString().padStart(2, '0')}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
    res.render('flights/new', {
        title: 'New Flight',
        departsDate
    });
};

function create (req, res) {
    const flight = new Flight(req.body);
    flight.save(function() {
        if (!req.body.departs) return res.redirect('flights/new');
        res.redirect('flights')
    });
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            title: 'Mongoose Flights',
            flights,
        });
    }).sort({
        departs: 1,
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {
                title: 'Flight Details',
                flight,
                tickets
            })
        }).sort({
            seat: 1
        });
    }).sort({
        'flight.destinations.arrival': 1
    });
};
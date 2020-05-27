const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    addToFlight,
    delete: deleteTicket
};

function addToFlight(req, res) {
    req.body.flight = req.params.id;
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.create(req.body, function(err) {
                res.redirect(`/flights/${flight._id}`);
        });
    });
}

function newTicket(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('tickets/new', {
        title: 'Add Ticket',
        flights
        });
    })
}

function create(req, res) {
    Ticket.create(req.body, function(err, ticket) {
        Flight.find({},
            function (err, flights) {
                res.render('tickets/new', {
                title: 'Add Ticket',
                flights
            });
        })
    });
}

function deleteTicket(req, res) {
    Ticket.findOneAndDelete(req.params.id, function(err, ticket) {
        const flightId = ticket.flight.toString()
        res.redirect(`/flights/${flightId}`)
    })
}
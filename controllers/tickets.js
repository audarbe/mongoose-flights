const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
};

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
        console.log(req.body, 'ticket')
    });
}
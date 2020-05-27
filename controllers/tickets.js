const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
};

function newTicket(req, res) {
Flight.find({}, function (err, flights) {
    res.render('tickets/new', {
    title: 'Add Ticket',
    flights
    });
})
}
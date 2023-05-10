const routes = require('express').Router();
const userController = require('../controllers/user.controller')

routes.post('/appointmentbook',userController.bookAppointment)
routes.get('/listappointments',userController.getBookingDetails);
routes.put('/editbooking',userController.editAppointment)
routes.delete('/deleteappointment',userController.deleteAppointment)


module.exports = routes;
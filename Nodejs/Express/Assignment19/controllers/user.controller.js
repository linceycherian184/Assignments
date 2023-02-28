const user = require('../models/user.model')

module.exports.getBookingDetails = async(req,res)=>{
    try{
        let data = await user.findAll()
        res.status(200).json({success:true,message:'Successfully fetched data',data})

    }catch(err){
        res.status(500).json({success:false,message:`${err}`})
    }
}

module.exports.bookAppointment =async(req,res)=>{
  console.log(req.body)
    let  amount =req.body.amount,
    description =req.body.description,
    date =new Date(),
    email = req.body.email
    user.create({
        amount: amount,
        description: description,
        date: date,
        email: email
      })
        .then(result => {
          console.log('Appointment booked',result);
          res.status(200).json({success:true,message:'Successfully booked appointment'})
        })
        .catch(err => {
          console.log(err);
        });
   
}
        

module.exports.deleteAppointment =async(req,res)=>{
    let id = req.body.id
    user.findById(id)
    .then(data => {
      return data.destroy();
    })
    .then(result => {
     res.status(200).json({success:true,message:"Successfully deleted data"})
    })
    .catch(err => console.log(err));
}

module.exports.editAppointment = async(req,res)=>{
    let id = req.body.id;
    let  amount =req.body.amount,
      description =req.body.description,
      date = req.body.date,
      email = req.body.email
    user.findById(id)
    .then(async(result)=>{
        result.amount = amount
        result.description = description,
        result.date = date,
        result.email=email
        await result.save()
        res.status(200).json({success:true,message:'Successfully updated data'})
    }).catch(err => console.log(err));
}
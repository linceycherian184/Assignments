const Expense = require('../models/expense.model')

exports.getAddexpense = (req, res, next) => {
  res.render('edit-expense', {
    pageTitle: 'Add expense',
    path: '/add-expense',
    editing: false
  });
};

exports.postAddExpense = (req, res, next) => {
  const expense = req.body.expense;
  const amount = req.body.amount;
  const description = req.body.description;
  const data = new Expense(null, expense, amount, description);
  data.save().then(()=>{
    res.redirect('/')
  }).catch(err=>{
    console.log('Error',err)
  });
 
};

exports.getEditexpense = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.expenseId;
  expense.findById(prodId).then((expense)=>{
    if (!expense) {
      return res.redirect('/');
    }else{
      res.render('expense/edit-expense', {
        pageTitle: 'Edit expense',
        path: '/expense/edit-expense',
        editing: editMode,
        expense: expense
      });
    }
  }).catch(err=>{
    console.log(err)
  })
  
};

exports.postEditexpense = (req, res, next) => {
  const prodId = req.body.expenseId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedexpense = new expense(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedexpense.save();
  res.redirect('/admin/expenses');
};

exports.getexpenses = (req, res, next) => {
  Expense.findAll().then((expenses)=>{
   console.log(expenses[0].dataValues)
    res.render('expense', {
      expense: expenses,
      pageTitle: 'All expenses',
      path: '/expense/expenses'
    });
  }).catch(err=>{
    console.log(err)
})
 
};

exports.postDeleteexpense = (req, res, next) => {
  const expId = req.body.expenseId;
  expense.deleteById(prodId).then(()=>{
    res.redirect('/expense/expenses')}
  ).catch(err=>{
    console.log(err)
  })
 
};
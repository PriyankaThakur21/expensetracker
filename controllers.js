const Expense = require('./models');

exports.postExpenses = async (req, res, next)=>{
    const expense = req.body.expense;
    const description = req.body.description;
    const category = req.body.category;
    try{
    const data = await Expense.create({
        expense: expense,
        description: description,
        category: category
    });
    console.log(data);
    res.json(data);
}
catch(error){
    console.log(error);
}
}

exports.getExpenses = async (req, res, next)=>{
    try{
    const expenses = await Expense.findAll();
    res.status(201).json(expenses);
    }
    catch(error){
        console.log(error);
    }
}

exports.deleteExpenses = async(req, res, next)=>{
    const ExpenseId = req.params.id;
    try{
    const deleteExpense = await Expense.destroy({where: {id: ExpenseId}});
    res.json(deleteExpense);
    }
    catch(error){
        console.log(error);
    }
}

exports.editExpense = async(req, res, next)=>{
    const editid = req.params.id;
    try{
        const data = await Expense.findByPk(editid);
        res.status(203).json(data);
    }
    catch(error){
        console.log(error);
    }
}

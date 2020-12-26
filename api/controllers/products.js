const Pizza = require('@/models/pizza');

async function getPizza(req, res) {
  try {
    const pizzas = await Pizza.find({});
    res.status(200).json({
      success: true,
      message: 'Pizzas found',
      pizzas,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      message: e.message,
    });
  }
}

module.exports = {
  getPizza,
};
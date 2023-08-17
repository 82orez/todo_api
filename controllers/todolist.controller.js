const { TodoList } = require('../models');

const getAll = async (req, res) => {
  try {
    const result = await TodoList.findAll();
    // res.json({ result });
    res.send(result);
  } catch (e) {
    console.error(e);
    res.json({ result: 'failed' });
  }
};

const insert = async (req, res) => {
  try {
    await TodoList.create({
      isDone: req.body.isDone,
      content: req.body.content,
      createdDate: req.body.createdDate,
    });
    res.json({ result: 'Insert success' });
  } catch (e) {
    console.error(e);
  }
};

const remove = async (req, res) => {
  const { id } = req.body;
  try {
    await TodoList.destroy({ where: { id } });
    res.json({ result: 'Remove success' });
  } catch (e) {
    console.error(e);
  }
};

const update = async (req, res) => {
  const { id, isDone } = req.body;
  try {
    await TodoList.update(
      {
        isDone: isDone,
      },
      {
        where: { id },
      },
    );
    res.json({ result: 'Update success' });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAll,
  insert,
  remove,
  update,
};

// {
//   "isDone":"false",
//   "content":"English"
// }


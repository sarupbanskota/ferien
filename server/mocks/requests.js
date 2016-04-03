/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var requestsRouter = express.Router();

  requestsRouter.get('/', function(req, res) {
    res.send({
      'requests': [{
        'id': 1,
        'from': '2/11/2015',
        'to': '4/11/2015',
        'notes': 'The beach was missing me'
      },{
        'id': 2,
        'from': '2/11/2015',
        'to': '4/11/2015',
        'notes': 'The cat ate my work clothes'
      },{
        'id': 3,
        'from': '2/11/2015',
        'to': '4/11/2015',
        'notes': 'I want a vacation; what do you mean why?'
      }]
    });
  });

  requestsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  requestsRouter.get('/:id', function(req, res) {
    res.send({
      'requests': {
        id: req.params.id
      }
    });
  });

  requestsRouter.put('/:id', function(req, res) {
    res.send({
      'requests': {
        id: req.params.id
      }
    });
  });

  requestsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/requests', require('body-parser').json());
  app.use('/api/requests', requestsRouter);
};

const kue = require('kue');

kue.createQueue({
  redis: process.env.REDIS_URL
});

kue.app.listen(3000);

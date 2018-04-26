const app = require('./app');
const db = require('./database');
const CONFIG = require('./config');

db()
  .then(() => {
    console.log(`Connect to database`);

    app.listen(CONFIG.PORT, function() {
      console.log(`http://localhost:${CONFIG.PORT}/`);
    });
  })
  .catch((error) => {
    console.log('error connect'+error);
    process.exit(1);
  });

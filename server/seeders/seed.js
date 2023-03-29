const connection = require('../config/connection');
const { Carrier, Broker, Invoice } = require('../models');
const carrierSeeds = require('./carrierSeeds.json');
const brokerSeeds = require('./brokerSeeds.json');
const invoiceSeeds = require('./invoiceSeeds.json');
connection.on('error', (err) => err);

connection.once('open', async () => {

  console.log('Database Connected');
  await Carrier.deleteMany({});
  await Carrier.create(carrierSeeds);
  await Broker.deleteMany({});
  await Broker.create(brokerSeeds);
  await Invoice.deleteMany({});
  await Invoice.create(invoiceSeeds);

  console.info('Seeding complete! 🌱');
  process.exit(0);

});

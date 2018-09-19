console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

const user = os.userInfo();

// Main 

// require('dotenv').config();
// console.log(process.env.API_KEY);


import { kreAuthorize } from './kapi.js';
kreAuthorize();
import { ksreAuthorize } from './ksapi.js';
ksreAuthorize();
import { zreAuthorize } from './zapi.js';
zreAuthorize();
import { sreAuthorize } from './sapi.js';
sreAuthorize();
import { creAuthorize } from './capi.js';
creAuthorize();
import { indPlot } from './comb.js';
indPlot();






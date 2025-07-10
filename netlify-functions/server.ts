import 'zone.js/node';

import { app } from '../server';
import serverless from 'serverless-http';

exports.handler = serverless(app());

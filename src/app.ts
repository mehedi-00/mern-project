import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
const app: Application = express();
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';

// parser
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// application route
app.use('/api/v1/studetns', studentRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;

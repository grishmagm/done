import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://grishma:Grishma@10@cluster0.k6qis.mongodb.net/<dbname>?retryWrites=true&w=majority'),
  },
];
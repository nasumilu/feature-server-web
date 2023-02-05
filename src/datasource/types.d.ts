interface Datasource {
  name: string;
  comment?: string;
  host: string;
  port: number;
  user: string;
  driver: string;
  password: string;
  dbname: string;
}

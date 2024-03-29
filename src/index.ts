import { env } from "node:process";
import { createPool } from "mysql2";

const host: string = env["MYSQL_HOST"]!;
const user: string = env["MYSQL_USER"]!;
const password: string = env["MYSQL_PASSWORD"]!;
const database: string = env["MYSQL_DATABASE"]!;

const pool = createPool({
  host,
  user,
  password,
  database
}).promise();

const result = await pool.query("SELECT * FROM notes");
console.log(result);
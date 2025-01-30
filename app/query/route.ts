// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
//   const data = await client.sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

//   return data.rows;
// }

// export async function GET() {
//   // return Response.json({
//   //   message:
//   //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   // });
//   try {
//     return Response.json(await listInvoices());
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

import { createClient } from "@supabase/supabase-js";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const data = await sql`SELECT * FROM customers where name = `;
// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// const { data, error } = await supabase.from("revenue").select();

export async function GET() {
  try {
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

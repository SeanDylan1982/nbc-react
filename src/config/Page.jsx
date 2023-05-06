import { db } from "@vercel/postgres";

const userData = localStorage.getItem("auth");
console.log(userData);

export default async function handler(request, response) {
  const psql = "postgres://default:rbc1eqQ2lmEo@ep-misty-shape-441597.eu-central-1.postgres.vercel-storage.com:5432/verceldb"
  const client = await db.connect(psql);
  try {
    await client.sql`CREATE TABLE Users ( Username varchar(255), Email varchar(255), Password varchar(255), ConfirmPassword varchar(255), Club varchar(255), District varchar(255), Position varchar(255), Skill varchar(255), Experience varchar(255), Social varchar(255), Competition varchar(255), League varchar(255) );`;

    const { Username, Email, Password, ConfirmPassword, Club, District, Position, Skill, Experience, Social, Competition, League } = userData;

    await client.sql`INSERT INTO Users (Username, Email, Password, ConfirmPassword, Club, District, Position, Skill, Experience, Social, Competition, League) VALUES (${Username}, ${Email}, ${Password}, ${ConfirmPassword}, ${Club}, ${District}, ${Position}, ${Skill}, ${Experience}, ${Social}, ${Competition}, ${League} });`;

  } catch (error) {
    return response.status(500).json({ error });
  }
  const users = await client.sql`SELECT * FROM Users;`;
  return response.status(200).json({ users });
}

// export default async function users({ params }) {
//   const { rows } = await sql`SELECT * from users where user_id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }
import { neon } from '@neondatabase/serverless';
import { json } from '@sveltejs/kit';
import { DATABASE_URL } from "$env/static/private"

export async function GET() {
    const sql = neon(DATABASE_URL);
    const notes = await sql('SELECT * FROM notes');
    return json(notes)
}

export async function POST(event) {
    const data = await event.request.json()
    const topic = data.topic
    const content = data.content
    const approvedOnly = data.approvedOnly
    const signedInOnly = data.signedInOnly

    const sql = neon(DATABASE_URL);
    await sql`
      INSERT INTO notes (signedIn, approvedOnly, topic, content)
      VALUES (${signedInOnly}, ${approvedOnly}, ${topic}, ${content})`;
  

    return new Response(JSON.stringify({ success: true, 'status':'200' }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
}
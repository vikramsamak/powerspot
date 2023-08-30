import { Client, Databases, ID } from "appwrite";
import { NextResponse } from "next/server";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.projectid);

const databases = new Databases(client);

export async function POST(request, response) {
  try {
    const payload = await request.json();

    const createDocumentPromise = databases.createDocument(
      process.env.doc_id,
      process.env.collection_id,
      ID.unique(),
      {
        name: payload.name,
        email: payload.email,
        sub: payload.sub,
        msg: payload.msg,
      }
    );

    await createDocumentPromise;

    return NextResponse.json(
      {
        msg: "Thank you for giving your valuable feedback",
      },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Something went wrong",
      },
      { status: 500, statusText: "Internal server error" }
    );
  }
}

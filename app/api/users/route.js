// // This DOES NOT run automatically
// export async function GET(request) {
//   console.log("This only runs when someone calls /api/users");
//   return Response.json({ users: ["Varad","sharvari","adt"] });
// }


import clientPromise from '@/app/lib/mongodb';

export async function GET(request) {
  try {
    // Connect
    const client = await clientPromise;
    const db = client.db("mydatabase"); // Your DB name
    
    // Get users collection
    const users = await db.collection("users").find({}).toArray();
    
    console.log("Fetched from MongoDB (native driver)");
    return Response.json({ 
      success: true,
      users: users.map(user => user.name) 
    });
    
  } catch (error) {
    console.error("MongoDB error:", error);
    return Response.json({ 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("mydatabase");
    
    const { name, email } = await request.json();
    
    const result = await db.collection("users").insertOne({
      name,
      email,
      createdAt: new Date()
    });
    
    return Response.json({ 
      success: true,
      id: result.insertedId 
    });
    
  } catch (error) {
    return Response.json({ 
      success: false,
      expectedfields: ['name', 'email'],
      error: error.message 
    }, { status: 500 });
  }
}
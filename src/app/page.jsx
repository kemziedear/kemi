import db from '@fake-db/db';



export default function Home () {
  const articles = db.post
  const users = db.users;
return(
    <>
    <ul>
      {post.map((post) =>(
        <li key={post.id}> {post.title}</li>
      ) )}
    </ul>
    <ul>
      {user.map((user) =>(
        <li key={user.id}> {user.title}</li>
      ) )}
    </ul>
    
    </>
)
}

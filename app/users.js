export default async function Users() {
    let data = await fetch('http://localhost:8080/users');
    let users = await data.json();
    return(
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>

    );
}
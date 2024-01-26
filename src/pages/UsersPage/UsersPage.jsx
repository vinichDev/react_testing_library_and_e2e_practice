import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersPage = () => {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <div data-testid={'users-page'}>
            {users.map(user => (
                <Link
                    key={user.id}
                    to={`/users/${user.id}`}
                    data-testid={'user-item'}
                >
                    {user.name}
                </Link>
            ))}
        </div>
    );
};

export default UsersPage;
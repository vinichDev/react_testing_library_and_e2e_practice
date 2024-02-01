import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';

const UsersForTest = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadUsers = async () => {
        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // setTimeout(() => {
                //     setUsers(response.data);
                //     setIsLoading(false);
                // }, 1);
                setUsers(response.data);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const onDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div>
            {isLoading && <h1 id={'users-loading'}>Идет загрузка...</h1>}
            <div id={'users-list'}>
                {users.map(user => (
                    <User onDelete={onDelete} user={user}/>
                ))}
            </div>
        </div>
    );
};

export default UsersForTest;
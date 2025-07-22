import { UserProps, UserData } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import Header from '@/components/layout/Header';
import { useState } from 'react';

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [users, setUsers] = useState(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers(prev => [...prev, { ...newUser, id: prev.length + 1 }]);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {users.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;

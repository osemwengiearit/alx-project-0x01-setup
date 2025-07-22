// pages/users/index.tsx
import Header from '@/components/layout/Header';

const Users: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-semibold">Users Page</h1>
        {/* You can add UserCard components here later */}
      </main>
    </div>
  );
};

export default Users;

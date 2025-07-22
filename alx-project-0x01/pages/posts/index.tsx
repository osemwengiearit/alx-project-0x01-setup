// pages/posts/index.tsx
import Header from '@/components/layout/Header';

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-semibold">Posts Page</h1>
        {/* You can add PostCard components here later */}
      </main>
    </div>
  );
};

export default Posts;

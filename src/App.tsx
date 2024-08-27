import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";
import { toast } from "./components/utils";
import { testRange } from "./components/Range/Generator/generator";
import { fetchPosts, Post } from "./components/Api/api";
import { sumIntegersAndFractions } from "./components/Functions/Sum/sum";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const integers: Integer[] = [1, 2, 3, 4];
  const fractions: Fraction[] = [
    { numerator: 1, denominator: 2 },
    { numerator: 3, denominator: 4 },
  ];

  const total = sumIntegersAndFractions(integers, fractions);
  console.log(`The total sum is: ${total}`);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();

        setPosts(data.slice(0, 10));
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    testRange();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-10 p-4">
      <h1 className="text-7xl font-bold text-center">Posts</h1>

      <div className="space-x-2 mb-4">
        <Button onClick={() => toast("Toast with Default message")}>
          Default
        </Button>
        <Button onClick={() => toast.success("Toast with Success message")}>
          Success ✅
        </Button>
        <Button onClick={() => toast.error("Toast with Error message")}>
          Error ❌
        </Button>
        <Button onClick={() => toast.warning("Toast with Warning message")}>
          Warning ⚠️
        </Button>
        <Button onClick={() => toast.dismissAll()}>Dismiss All</Button>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">User ID</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="py-2 px-4 border-b">{post.userId}</td>
                <td className="py-2 px-4 border-b">{post.id}</td>
                <td className="py-2 px-4 border-b">{post.title}</td>
                <td className="py-2 px-4 border-b">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;

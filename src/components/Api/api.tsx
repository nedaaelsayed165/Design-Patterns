export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export async function fetchPosts(): Promise<Post[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`Could not fetch data: ${response.statusText}`);
      }
      const data: Post[] = await response.json();
      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }
  
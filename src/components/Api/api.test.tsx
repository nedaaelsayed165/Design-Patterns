import { fetchPosts, Post } from './api';

(globalThis as any).fetch = jest.fn() as jest.Mock;

beforeEach(() => {

  (globalThis.fetch as jest.Mock).mockClear();
});

describe('fetchPosts', () => {
  it('should fetch and return posts data', async () => {
  
    (globalThis.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            userId: 1,
            id: 1,
            title: 'Title 1',
            body: 'Body 1',
          },
          {
            userId: 1,
            id: 2,
            title: 'Title 2',
            body: 'Body 2',
          },
      
        ]),
    });

    const posts: Post[] = await fetchPosts();

    expect(posts).toBeDefined();
    expect(posts).toHaveLength(2);
    expect(posts[0]).toHaveProperty('userId', 1);
    expect(posts[0]).toHaveProperty('id', 1);
    expect(posts[0]).toHaveProperty('title', 'Title 1');
    expect(posts[0]).toHaveProperty('body', 'Body 1');
  });

  it('should handle fetch errors', async () => {

    (globalThis.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchPosts()).rejects.toThrow('Network error');
  });
});

const mockData = {
  // users: [
  //   {
  //     id: 201,
  //     username: 'user1',
  //     email: 'user1@example.com',
  //     createdAt: '2023-01-01T00:00:00Z',
  //   },
  //   {
  //     id: 202,
  //     username: 'user2',
  //     email: 'user2@example.com',
  //     createdAt: '2023-01-02T00:00:00Z',
  //   },
  // ],
  // communities: [
  //   {
  //     id: 101,
  //     name: 'community1',
  //     description: 'This is the first community',
  //     createdAt: '2023-01-01T00:00:00Z',
  //     creator_id: 1,
  //   },
  //   {
  //     id: 102,
  //     name: 'community2',
  //     description: 'This is the second community',
  //     createdAt: '2023-01-02T00:00:00Z',
  //     creator_id: 2,
  //   },
  // ],
  posts: [
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post',
      createdAt: '2023-01-01T00:00:00Z',
      votes: 10,
      replies: [
        {
          id: 12340,
          content: 'This is a comment on the first post',
          createdAt: '2023-01-01T00:00:00Z',
          votes: 3,
          replies: [
            {
              id: 12341,
              content: 'This is a reply to the first comment',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: [
                {
                  id: 12342,
                  content: 'This is a reply to the first comment',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: 12350,
          content: 'This is another reply on the first post',
          createdAt: '2023-01-01T00:00:00Z',
          votes: 3,
          replies: [
            {
              id: 3,
              content: 'This is a reply to the first comment',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of the second post',
      createdAt: '2023-01-02T00:00:00Z',
      author_id: 2,
      community_id: 2,
      votes: 5,
      replies: [],
    },
  ],
} as const

export default mockData

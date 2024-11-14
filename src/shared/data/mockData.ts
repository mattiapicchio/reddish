const mockData = {
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
          content: 'reply 1',
          createdAt: '2023-01-01T00:00:00Z',
          votes: 3,
          replies: [
            {
              id: 12348,
              content: 'reply 01',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: null,
            },
            {
              id: 12341,
              content: 'reply 11',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: [
                {
                  id: 12342,
                  content: 'reply 112',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: [
                    {
                      id: 1234243,
                      content: 'reply 1121',
                      createdAt: '2023-01-03T00:00:00Z',
                      votes: 1,
                      replies: [
                        {
                          id: 123424343,
                          content: 'reply 11211',
                          createdAt: '2023-01-03T00:00:00Z',
                          votes: 1,
                          replies: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 12346,
              content: 'reply 12',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: [
                {
                  id: 1234211,
                  content: 'reply 121',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: null,
                },
                {
                  id: 1234212,
                  content: 'reply 122',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: null,
                },
                {
                  id: 1234213,
                  content: 'reply 123',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: null,
                },
                {
                  id: 1234214,
                  content: 'reply 124',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: null,
                },
              ],
            },
            {
              id: 1234448,
              content: 'reply 13',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: null,
            },
          ],
        },
        {
          id: 12350,
          content: 'reply 2',
          createdAt: '2023-01-01T00:00:00Z',
          votes: 3,
          replies: [
            {
              id: 3,
              content: 'reply 21',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: null,
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
      votes: 5,
      replies: null,
    },
  ],
}

export default mockData

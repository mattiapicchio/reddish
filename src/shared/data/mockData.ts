const mockData = {
  posts: [
    {
      id: 1,
      title: 'First Post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada felis eget auctor volutpat. In aliquet iaculis tempor. Mauris pretium sapien eget commodo vestibulum. Cras sed tellus nec dui vulputate ullamcorper id vel mauris. Aenean lobortis pellentesque dapibus. In sodales lorem vulputate ipsum venenatis, at imperdiet orci eleifend. Curabitur quis auctor sapien, at laoreet ligula. Praesent congue euismod est, eu venenatis nisi maximus sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla mollis sit amet quam sed ornare. Nulla ut ex sed ante posuere varius ut at nibh. Vestibulum tempor est nec accumsan pellentesque. Cras fermentum nibh ac nunc tempus malesuada. Pellentesque suscipit, nunc ac gravida pharetra, nisi erat ultrices nulla, vitae rutrum urna lorem ac ligula. Vestibulum sit amet ultrices quam, vitae aliquam sem. Proin quis nulla quis elit congue lacinia nec sed lectus. Etiam ut porttitor ante, at viverra lorem. Nullam sit amet lacus sagittis, sodales augue a, luctus nibh. Curabitur rutrum ipsum tellus, vitae laoreet elit pharetra at. Vestibulum sit amet dui fermentum, faucibus tortor vitae, ornare quam. Nam quis felis erat. Vestibulum tellus est, finibus sit amet sem ac, imperdiet gravida augue. Suspendisse fermentum consectetur ligula, quis feugiat velit finibus in. Ut at laoreet ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi euismod placerat venenatis.',
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
              replies: [],
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
                          replies: [],
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
                  replies: [],
                },
                {
                  id: 1234212,
                  content: 'reply 122',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: [],
                },
                {
                  id: 1234213,
                  content: 'reply 123',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: [],
                },
                {
                  id: 1234214,
                  content: 'reply 124',
                  createdAt: '2023-01-03T00:00:00Z',
                  votes: 1,
                  replies: [],
                },
              ],
            },
            {
              id: 1234448,
              content: 'reply 13',
              createdAt: '2023-01-03T00:00:00Z',
              votes: 1,
              replies: [],
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
      votes: 5,
      replies: [],
    },
  ],
}

export default mockData

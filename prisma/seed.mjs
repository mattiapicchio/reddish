/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()
  const mockUser_Mattia = await prisma.user.create({ data: { name: 'Mattia' } })
  const mockUser_Rasmus = await prisma.user.create({ data: { name: 'Rasmus' } })

  const post1 = await prisma.post.create({
    data: {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat urna vel ante volutpat, ut elementum mi placerat. Phasellus varius nisi a nisl interdum, at ultrices ex tincidunt.',
      title: 'Post 1',
    },
  })
  const post2 = await prisma.post.create({
    data: {
      body: 'Duis nec nunc vel urna ullamcorper eleifend ac id dolor. Phasellus vitae tortor ac metus laoreet rutrum. Aenean condimentum consequat elit, ut placerat massa mattis vitae. Vivamus dictum faucibus massa, eget euismod turpis pretium a. Aliquam rutrum rhoncus mi, eu tincidunt mauris placerat nec. Nunc sagittis libero sed facilisis suscipit. Curabitur nisi lacus, ullamcorper eu maximus quis, malesuada sit amet nisi. Proin dignissim, lacus vitae mattis fermentum, dui dolor feugiat turpis, ut euismod libero purus eget dui.',
      title: 'Post 2',
    },
  })

  const comment1 = await prisma.comment.create({
    data: {
      message: 'I am a root comment',
      userId: mockUser_Mattia.id,
      postId: post1.id,
    },
  })

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      message: 'I am a nested comment',
      userId: mockUser_Rasmus.id,
      postId: post1.id,
    },
  })

  const comment3 = await prisma.comment.create({
    data: {
      message: 'I am another root comment',
      userId: mockUser_Rasmus.id,
      postId: post1.id,
    },
  })
}

seed()

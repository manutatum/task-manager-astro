import type { APIRoute } from 'astro';
import prisma from '../../lib/prisma';

export const GET: APIRoute = async ({ locals }) => {

    const { userId } = locals.auth();

    if (!userId) return new Response('Unauthorized', { status: 401 });

    const tasks = await prisma.task.findMany({
        where: {
            clerkUserId: userId,
            archived: false
        }
    });

    return Response.json(tasks, { status: 200 });
};
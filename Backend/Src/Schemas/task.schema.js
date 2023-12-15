import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description must be a string' }),
    dispositive: z.string({ required_error: 'Dispositive must be a string' }),
    date: z.string().datetime().optional(),
    imgUrl: z.object({ required_error: 'Title is required' }),
});
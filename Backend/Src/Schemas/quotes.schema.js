import {z} from 'zod';

export const quoteSchema = z.object({
    dropDown: z.string({ required_error: 'Must be a string the dropDown'}),
    textArea: z.string({ required_error: 'Must be a string the textArea'}),
    date: z.string().datetime().optional(),
});
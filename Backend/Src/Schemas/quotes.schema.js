import {z} from 'zod';

export const quoteSchema = z.object({
    dropDown: z.string({ required_error: 'Must be a string the dropDown'}),
    textArea: z.string({ required_error: 'Must be a string the textArea'}),
    tecnico_name: z.string({ required_error: 'Must be a string the tecnico_name'}),
    tecnico_email: z.string({ required_error: 'Must be a string the tecnico_email'}),
    date: z.string().datetime().optional(),
});
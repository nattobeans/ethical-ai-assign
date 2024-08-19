import crypto from 'crypto';
import 'dotenv/config';

const SECRET = String(process.env.AI_EDUCATOR_SECRET);

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}; 
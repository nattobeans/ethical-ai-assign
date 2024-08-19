import express from 'express';

import  { getUserByEmail, createUser } from '../db/users';
import { random, authentication } from '../helpers'


export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        
        if ( !email || !password ) {
            return res.sendStatus(400);
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

        if (!user || user.authentication === undefined) {
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if (user.authentication.password !== expectedHash) {
            return res.sendStatus(403);
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie("AI-EDU-AUTH", user.authentication.sessionToken, {domain: 'localhost', path: '/'});

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, name} = req.body;

        if (!email || !password || !name) {
            return res.sendStatus(400);
        }

        if (!email.includes("aucklanduni.ac.nz")) {
            return res.sendStatus(403);
        }

        const existingUser = await getUserByEmail(email);

        if(existingUser){
            return res.sendStatus(400);
        }
        
        const salt =  random();
        const user = await createUser({
            email,
            name,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        });

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
import express from 'express';

import { getUsers } from '../db/users'

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    };
};

export const progressTracking = async (req: express.Request, res: express.Response) => {
    try {
        const module = req.params.module;
        const user = res.locals.user;
        let progress = new Map();

        if (module === "deepFake") {
            progress.set("progress", user.modules.deepFake);
        }
        else if (module === "ethics") {
            progress.set("progress", user.modules.ethics);
        }
        else if (module === "security") {
            progress.set("progress", user.modules.security);
        }
        else if (module === "misInfo") {
            progress.set("progress", user.modules.misInfo);
        }

        return res.status(200).json(Object.fromEntries(progress));

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    };
};

export const progressUpdate = async (req: express.Request, res: express.Response) => {
    try {
        const module = req.params.module;
        const level = Number(req.params.level);
        const user = res.locals.user;
        let progress = new Map();

        if (module === "deepFake") {
            user.modules.deepFake += level;
            progress.set("progress", user.modules.deepFake);
        }
        else if (module === "ethics") {
            user.modules.ethics += level;
            progress.set("progress", user.modules.ethics);
        }
        else if (module === "security") {
            user.modules.security += level;
            progress.set("progress", user.modules.security);
        }
        else if (module === "misInfo") {
            user.modules.misInfo += level; 
            progress.set("progress", user.modules.misInfo);
        }

        user.save();

        return res.status(200).json(Object.fromEntries(progress));

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    };
};
import express from "express";

import { getAllUsers, progressTracking, progressUpdate } from '../controllers/users'
import { isAuthenticated } from '../middleware';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.get('/progress/:module', isAuthenticated, progressTracking);
    router.get('/progress/:module/:level', isAuthenticated, progressUpdate);
};
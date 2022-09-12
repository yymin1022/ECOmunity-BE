import express, { Request, Response } from "express";

const boardRouter = express.Router();

boardRouter.post("/getPost", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;

    res.send("Func : Get Post")
});

boardRouter.post("/getPostList", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;

    res.send("Func : Get Post")
});

boardRouter.post("/updatePost", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;
    const POST_DATA = req.body.POST_DATA;

    res.send("Func : Update Post")
});

boardRouter.post("/deletePost", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;

    res.send("Func : Delete Post")
});

boardRouter.post("/getRecommend", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;

    res.send("Func : Get Recommend")
});

boardRouter.post("/updateRecommend", async (req: Request, res: Response) => {
    const USER_UID = req.body.USER_UID;
    const USER_TOKEN = req.body.USER_TOKEN;

    const POST_ID = req.body.POST_ID;
    const POST_RECOMMEND = req.body.POST_RECOMMEND;

    res.send("Func : Update Recommend")
});

export default boardRouter;
import express, { Request, Response } from "express";

const boardRouter = express.Router();

boardRouter.post("/getPost", (req: Request, res: Response) => {
    res.send("Func : Get Post")
});

boardRouter.post("/updatePost", (req: Request, res: Response) => {
    res.send("Func : Update Post")
});

boardRouter.post("/deletePost", (req: Request, res: Response) => {
    res.send("Func : Delete Post")
});

boardRouter.post("/getRecommend", (req: Request, res: Response) => {
    res.send("Func : Get Recommend")
});

boardRouter.post("/updateRecommend", (req: Request, res: Response) => {
    res.send("Func : Update Recommend")
});

boardRouter.post("/deleteRecommend", (req: Request, res: Response) => {
    res.send("Func : Delete Recommend")
});

export default boardRouter;
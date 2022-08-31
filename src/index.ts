import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.post("/board/getPost", (req: Request, res: Response) => {
    res.send("Func : Get Post")
});

app.post("/board/updatePost", (req: Request, res: Response) => {
    res.send("Func : Update Post")
});

app.post("/board/deletePost", (req: Request, res: Response) => {
    res.send("Func : Delete Post")
});

app.post("/board/getComment", (req: Request, res: Response) => {
    res.send("Func : Get Comment")
});

app.post("/board/updateComment", (req: Request, res: Response) => {
    res.send("Func : Update Comment")
});

app.post("/board/deleteComment", (req: Request, res: Response) => {
    res.send("Func : Delete Comment")
});

app.post("/board/getRecommend", (req: Request, res: Response) => {
    res.send("Func : Get Recommend")
});

app.post("/board/updateRecommend", (req: Request, res: Response) => {
    res.send("Func : Update Recommend")
});

app.post("/board/deleteRecommend", (req: Request, res: Response) => {
    res.send("Func : Delete Recommend")
});

app.post("/profile/getPersonalInfo", (req: Request, res: Response) => {
    res.send("Func : Get Personal Info")
});

app.post("/profile/getPersonalImage", (req: Request, res: Response) => {
    res.send("Func : Get Personal Image")
});

app.post("/profile/updatePersonalInfo", (req: Request, res: Response) => {
    res.send("Func : Update Personal Info")
});

app.post("/profile/updatePersonalImage", (req: Request, res: Response) => {
    res.send("Func : Update Personal Image")
});

app.listen(8080, () => {
    console.log("Server Listening on Port 8080");
});

import { Request, Response } from "express";
import { controller, get, post } from "./decorators";

@controller('/')
class LoginController{
    @get('login')
    getLogin(req: Request, res: Response):void{
        res.send(`
            <form method = "POST">
                <label>Email</label><br>
                <input type = "email" name = "email"/><br>
                <label>Password</label><br>
                <input type = "password" name = "password"/><br>
                <button>Button</button>
            </form>
        `)
    }

    @post('login')
    postLogin(req:Request, res:Response):void{
        const {email, password} = req.body;
        res.send({email, password})
    }
}
import express from 'express';
import { AppRoute } from "./AppRoute";
import cookieSession from 'cookie-session';
import './controllers/LoginController'

const PORT = 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieSession({keys:["secret"]}))

app.use(AppRoute.getInstance())

app.listen(PORT, ()=>{
    console.log(`...listening port ${PORT}`)
})

export default app;

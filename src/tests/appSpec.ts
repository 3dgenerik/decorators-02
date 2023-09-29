import jasmine from "jasmine";
import app from "../app";
import supertest from "supertest";

const request = supertest(app);

describe('Testing endopoint:', ()=>{
    let email: string;
    let password: string;
    beforeAll(()=>{
        email = "milesoda@yahoo.com"
        password = "pass"
    })
    it('GET endpoint', async()=>{
        const result = await request.get('/login')
        expect(result.status).toBe(200)
    })
    it('POST endpoint', async ()=>{
        const result = await request.post('/login').send({email, password})
        console.log('RESULT: ', result.body)
        expect(result.body).toEqual({email, password})
    })
})
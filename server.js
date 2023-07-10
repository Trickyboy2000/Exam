const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
    const statement = `select * from Employee_TB`;
    db.query(statement, (error, data) => {
      if (error) {
        response.send('error')
      } else {
        response.send(data)
      }
    })
  })

app.post("/", (request, response)=>{
    console.log("hii from POST");
    var query = `insert into Employee_TB values(${request.body.id},'${request.body.ename}','${request.body.email}','${request.body.password}',${request.body.empId},'${request.body.dname}','${request.body.doj}')`;
    db.query(query, (error, result) => {
        if (error == null) {
            var res = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(res);
        }
        else {
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
}) 

app.put("/", (request, response)=>{
    console.log("hii from PUT");
    var query = `update Employee_TB set dname = '${request.body.dname}' , doj = '${request.body.doj}' where id = ${request.body.id} `;
    db.query(query, (error, result) => {
        if (error == null) {
            var res = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(res);
        }
        else {
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
}) 

app.delete("/", (request, response)=>{
    console.log("hii from DELETE");
    var query = `delete from Employee_TB where doj = '${request.body.doj}' `;
    db.query(query, (error, result) => {
        if (error == null) {
            var res = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(res);
        }
        else {
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
}) 

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
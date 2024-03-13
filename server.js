const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const CryptoJS = require("crypto-js");
app.use(cors());
app.use(express.json());
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: 'viaduct.proxy.rlwy.net',
  user: 'root',
  password: 'g46DBf6c22B-HDEC1bGCE2hCE2e4C1g3',
  port: 38033, // Adjust as needed
  database: 'railway',
  waitForConnections: true,
  queueLimit: 0
});
app.get("/api/questions", (req, res) => {
  pool.query(`SELECT * FROM questions`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});
app.post("/login/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("first");
  pool.query("Select * from students where email=?", email, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length < 1) {
      res.send("NOT exists");
    } else {
      const sp = result[0].password;
      const hp = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
      if (sp == hp) {
        res.send(result);

      } else {
        res.send("no match");
      }
    }
  });
});

app.post("/register/", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const dept = req.body.dept;
  const year = req.body.year;
  const hp = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);

  pool.query("Select * from students where email=?", [email], (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send("exists");
    } else {
      pool.query(
        "insert into students(name,email,password,year,dept,registerno) values(?,?,?,?,?,?)",
        [name, email, hp, year, dept, req.body.registerno],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("ok");
          }
        }
      );
    }
  });
});

app.post("/api/addquestion/", (req, res) => {
  pool.query(
    "insert into questions(question,options,multipleselect,answer,category,department) values(?,?,?,?,?,?)",
    [
      req.body.question,
      JSON.stringify(req.body.options),
      req.body.multipleselect,
      JSON.stringify(req.body.answer),
      req.body.difficulty,
      req.body.department
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("ok");
      }
    }
  );
});

app.post("/eep", (req, res) => {
  console.log([
    req.body.question,
    JSON.stringify(req.body.options),
    req.body.multipleselect,
    JSON.stringify(req.body.answer),
    req.body.difficulty,
    req.body.department,
  ]);
})

app.get("/", (req, res) => {
  res.send("yes");
});
const mysqlPromise = require('mysql2/promise'); 
const e = require("express");

const promisePool = mysqlPromise.createPool({
    connectionLimit: 10,
    host: 'viaduct.proxy.rlwy.net',
    user: 'root',
    password: 'g46DBf6c22B-HDEC1bGCE2hCE2e4C1g3',
    port: 38033,
    database: 'railway',
    waitForConnections: true,
    queueLimit: 0
});

app.post("/questions/spec/", async (req, res) => {
    const { hard, medium, easy } = req.body;

    try {
        const [h] = await promisePool.query("SELECT * FROM questions WHERE category = 'hard' ORDER BY RAND() LIMIT ?", [hard]);
        const [m] = await promisePool.query("SELECT * FROM questions WHERE category = 'medium' ORDER BY RAND() LIMIT ?", [medium]);
        const [e] = await promisePool.query("SELECT * FROM questions WHERE category = 'easy' ORDER BY RAND() LIMIT ?", [easy]);

        res.json({
            "hard": h,
            "medium": m,
            "easy": e
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get("/",(req,res)=>{
pool.query("SELECT * FROM questions",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        res.json(result)
    }
})    
})
app.post("/login/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("first");
  pool.query("Select * from students where email=?", email, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length < 1) {
      res.send("NOT exists");
    } else {
      const sp = result[0].password;
      const hp = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
      if (sp == hp) {
        res.send(result);

      } else {
        res.send("no match");
      }
    }
  });
});
app.post("/api/questions/",(req,res)=>{
    pool.query("insert into questions(question,options,multipleselect,answer) values(?,?,?,?)",[req.body.question,JSON.stringify(req.body.options),req.body.multipleselect,JSON.stringify(req.body.answer)]
    ,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("ok")
        }
    })
})
app.post("/register/",(req,res)=>{
    const b=req.body;
    const email=req.body.email;
    const name=req.body.name
    const password=req.body.password
    const dept=req.body.dept
    const year=req.body.year
    const hp = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
    
    pool.query("Select * from students where email=?",[email],(err,result)=>{
        if(err){
            console.log(err)
        }
        else if(result.length>0){
            res.send("exists")
        }
        else{
            pool.query("insert into students(name,email,password,year,dept,registerno) values(?,?,?,?,?,?)",[name,email,hp,year,dept,req.body.registerno],(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.send("ok")
                }
            })
        }
    })
})
app.get("/",(req,res)=>{
    pool.query("Select * from questions",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(result)
        }
    })
})
app.post("/test/schedule",(req,res)=>{
    const {testid,hard,medium,easy}=req.body;
    const newarr=hard.concat(medium,easy);
    console.log(newarr)
    pool.query("select * from test_question where test_id=?",testid,(err4,result5)=>{
        if(err4){
            console.log(err4)
        }
        else if(result5.length>0){
            res.send("exisit")
        }
        else{
        
            pool.query("insert into test_question(test_id,question_id) values(?,?)",[testid,JSON.stringify(newarr)],(err,result)=>{
                if(err){
                    console.log(err)
                    res.send("entering err")
                }
                else{
                    pool.query("alter table test_analysis add column ?? int default 0",[testid],(err2,result2)=>{
                        if(err2){
                            console.log(err2)
                            res.send("analysis err")
                        }
                        else{
                            pool.query("alter table test_completion add column ?? boolean default false",[testid],(err3,result)=>{
                                if(err3){
                                    console.log(err3)
                                }
                                else{
                                    res.send("ok")
                                }
                            })
                        }
                    })
                }
            })
        }
        })
})
app.get("/get_test/:email", (req, res) => {
  const email = req.params.email;
  console.log(email);

  pool.query("SELECT * FROM test_completion WHERE email=?", [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    if (result.length < 1) {
      console.log(result);
      res.send("No test scheduled");
    } else {
      // Get column names with values false
      const falseColumns = Object.keys(result[0]).filter((key) => result[0][key] === 0);

      console.log("Columns with values false:", falseColumns);
      console.log(result);

      res.send(falseColumns);
    }
  });
});
app.get("/get_question/:id", (req, res) => {
  const id = req.params.id;

  pool.query("SELECT question_id FROM test_question WHERE test_id=?", id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log(result)
      const testIds = result[0].question_id;
      console.log(testIds)
      // Check if testIds is an array before using join
      if (Array.isArray(testIds)) {
        pool.query(`SELECT * FROM questions WHERE id IN (${testIds.join(",")})`, (err2, result2) => {
          if (err2) {
            console.error(err2);
            res.status(500).send("Internal Server Error");
          } else {
            res.json(result2);
          }
        });
      } else {
        res.status(500).send("Invalid response from the database");
      }
    }
  });
});
app.post("/addscore/:id/:id2", (req, res) => {
  const id1 = req.params.id;
  const id2 = req.params.id2;
  const score = req.body.score;

  // Use parameterized queries to prevent SQL injection
  pool.query('UPDATE test_completion SET ?? = 1 WHERE email = ?', [id1, id2], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // Use parameterized queries for the second update as well
      pool.query('UPDATE test_analysis SET ?? = ? WHERE email = ?', [id1, score, id2], (err2, result2) => {
        if (err2) {
          console.log(err2);
        } else {
          res.send("ok");
        }
      });
    }
  });
});

app.listen(5000,()=>{
    console.log("connected")
})
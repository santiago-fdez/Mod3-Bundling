var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run (`DROP TABLE IF EXISTS course`)
        db.run (`DROP TABLE IF EXISTS lesson`)
        db.run(`CREATE TABLE IF NOT EXISTS course (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text UNIQUE, 
            description text, 
            type text
            )`
            ,(err) => {
        if (err) {
            console.log(err);
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO course (name, description, type) VALUES (?,?,?)'
            db.run(insert, ["Course A","Description course A","public"])
        }
    })  
    db.run(`CREATE TABLE IF NOT EXISTS lesson (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text UNIQUE, 
        description text, 
        course number,
        position number
        )`
        ,(err) => {
    if (err) {
        console.log(err);
        // Table already created
    }else{
        // Table just created, creating some rows
        var insert = 'INSERT INTO lesson (name, description, course,position) VALUES (?,?,?,?)'
        db.run(insert, ["Lesson 1","Description Lesson 1",1,1])
    }
    })  
    }
})


module.exports = db

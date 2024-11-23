import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

// Create an in memory table to use
const db = new sqlite3.Database(':memory:')

 db.run(`CREATE TABLE IF NOT EXISTS party_comments (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   text TEXT NOT NULL
 )`); // Added by Chandler

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))


// Added by Chandler ---------------------------------------------

// Fetch the comments page
app.get('/comments', (req, res) => {
   db.all('SELECT * FROM party_comments', (err, rows) => {
     if (err) throw err;
     res.render('student1/comments', { comments: rows });
   });
 });


// Add comment
 app.post('/comments/add', (req, res) => {
   const { comment } = req.body;
   db.run('INSERT INTO party_comments (text) VALUES (?)', [comment], function (err) {
     if (err) {
       console.error(err.message);
       res.status(500).send('Error adding comment');
       return;
     }
     res.redirect('/comments');
   });
 });


 // Delete comment
 app.get('/comments/delete/:id', (req, res) => {
   const id = req.params.id;
   db.run('DELETE FROM party_comments WHERE id = ?', id, (err) => {
     if (err) throw err;
     res.redirect('/comments');
   });
 });


 // Edit comment
 app.get('/comments/edit/:id', (req, res) => {
   const id = req.params.id;
   db.get('SELECT * FROM party_comments WHERE id = ?', id, (err, row) => {
     if (err) {
       console.error('Error fetching comment:', err.message);
       res.status(500).send('Error fetching comment');
       return;
     }
     if (!row) {
       res.status(404).send('Comment not found');
       return;
     }
     res.render('student1/edit', { comment: row });
   });
 });

 app.post('/comments/edit/:id', (req, res) => {
   const id = req.params.id;
   const updatedText = req.body.comment;

   db.run('UPDATE party_comments SET text = ? WHERE id = ?', [updatedText, id], (err) => {
     if (err) {
       console.error('Error updating comment:', err.message);
       res.status(500).send('Error updating comment');
       return;
     }
     res.redirect('/comments'); // Redirect back to the comments page
   });
 });


 //For Debugging 
 db.all('SELECT * FROM party_comments', (err, rows) => {
   if (err) {
     console.error('Error fetching all comments:', err.message);
   } else {
     console.log('Comments in database:', rows);
   }
 });

 // ---------------------------------------------------------------

 app.get('/', function (req, res) {
   console.log('GET called')
   res.render('index')
 })

 app.get('/student1', function (req, res) {
   console.log('GET called to fetch random comments');
  
   const local = { comments_array: [] }; // array to store fetched comments

   // query to get up to 5 random comments
   db.each(
       'SELECT * FROM party_comments ORDER BY RANDOM() LIMIT 5',
       function (err, row) {
           if (err) {
               console.error('Error fetching comment:', err);
           } else {
               local.comments_array.push({ id: row.id, text: row.text });
           }
       },
       function (err) {
           if (!err) {
               console.log('Rendering index with comments:', local.comments_array);
               res.render('student1/index', local); // comments to the template
           } else {
               console.error('Error finalizing query:', err);
               res.render('student1/index', { comments: [] }); // without comments on error
           }
       }
   );
 })

app.get('/student2', function (req, res) {
  console.log('GET called')
  res.render('student2')
})

app.get('/student3', function (req, res) {
  console.log('GET called')
  res.render('student3')
})

///////////////////////////////////////////////////////////////////
// Davina's code
//////////////////////////////////////////////////////////////////
db.run(`CREATE TABLE IF NOT EXISTS s2_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  submission TEXT NOT NULL
)
`);
//Pulling in the comments page
app.get('/commentsPage', (req, res) => {
  db.all('SELECT * FROM s2_comments', (err, rows) => {
    if (err) throw err;
    res.render('student2/commentsPage', { comments2: rows });
  });
});

// Adding a comment
app.post('/commentsPage/add', (req, res) => {
  const { comment } = req.body;
  
  db.run('INSERT INTO s2_comments (submission) VALUES (?)', [comment], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error adding comment');
      return;
    }
    res.redirect('/commentsPage');
  });
});

// Deleting a comment
app.get('/commentsPage/delete/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM s2_comments WHERE id = ?', id, (err) => {
    if (err) throw err;
    res.redirect('/commentsPage');
  });
});

// Editing a comment
app.get('/commentsPage/edit/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM s2_comments WHERE id = ?', id, (err, row) => {
    if (err) {
      console.error('Error fetching comment:', err.message);
      res.status(500).send('Error fetching comment');
      return;
    }
    if (!row) {
      res.status(404).send('Comment not found');
      return;
    }
    res.render('student2/editComment', { comment2: row });
  });
});

app.post('/commentsPage/edit/:id', (req, res) => {
  const id = req.params.id;
  const updatedSubmission = req.body.comment;

  db.run('UPDATE s2_comments SET submission = ? WHERE id = ?', [updatedSubmission, id], (err) => {
    if (err) {
      console.error('Error updating comment:', err.message);
      res.status(500).send('Error updating comment');
      return;
    }
    res.redirect('/commentsPage');
  });
});

// Query to get 5 random comments
app.get('/student2', function (req, res) {
  console.log('GET called to fetch random comments');

  const local = { comments_array: [] }; // array to store fetched comments

  db.each(
    'SELECT * FROM s2_comments ORDER BY RANDOM() LIMIT 5',
    function (err, row) {
      if (err) {
        console.error('Error fetching comment:', err);
      } else {
        local.comments_array.push({ id: row.id, submission: row.submission });
      }
    },
    function (err) {
      if (!err) {
        console.log('Rendering index with comments:', local.comments_array);
        res.render('student2/index', local); // comments to the template
      } else {
        console.error('Error finalizing query:', err);
        res.render('student2/index', { comments: [] }); // without comments on error
      }
    }
  );
});

///////////////////////////////////////////////////////////////////


// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
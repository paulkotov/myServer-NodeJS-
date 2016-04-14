
app.all("/create", mustBeAuthentificated);
app.all("/edit", mustBeAuthentificated);
app.all("delete", mustBeAuthentificated);

app.get("/view/:id", (req, res) =>{
  db.view(req.params.id, (err, article) => {
  
  });
});

app.get("/edit/:id", (req, res) =>{
  db.edit(req.params.id, (err, article) => {
  
  });
});


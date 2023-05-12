var upload = multer({ storage: storage })

app.post('/register', upload.single('avatar'), (req, res, next) => {
  const file = req.file
  if (!file) {
    error = new Error ('Hubo un error!')
    return next(error)
  }
  res.send (file)
})
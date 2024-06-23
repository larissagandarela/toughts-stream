const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");
const path = require("path");

const app = express();

const conn = require("./db/conn");

// Models
const Tought = require("./models/tought");
const User = require("./models/user");

// Import  Routes
const toughtsRoutes = require("./routes/toughtsRoutes");
const authRoutes = require("./routes/authRoutes");



const ToughtController = require("./controllers/ToughtController");


// View engine setup
const hbs = exphbs.create({
  extname: '.handlebars',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts')
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing request bodies
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Session middleware
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: path.join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  })
);

// Flash messages
app.use(flash());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Set session to response
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }
  next();
});

// Routes
app.use("/toughts", toughtsRoutes);
app.use("/", authRoutes);


app.get("/", ToughtController.showToughts);


// Database connection and server startup
conn
  .sync()
  // .sync({force: true})
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((err) => console.log('Erro ao conectar com o banco de dados:', err));

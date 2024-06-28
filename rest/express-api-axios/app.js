const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const app = express();
const errorRoutes = require('./routes/errorRoutes');

// 使用 morgan 中间件来记录 HTTP 请求
app.use(morgan("dev"));
// 使用 CORS 中间件
app.use(cors());

// 路由
app.use('/api', errorRoutes);

app.get("/", (req, res) => {
  res.send("Hi Guys");
});

app.get("/api/posts", async (req, res) => {
  res.json([
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

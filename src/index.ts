import express from "express" // import ESModules
// const express = requiere("express")-> commonjs


import diaryRouter from "./routes/diaries"


const app = express()
app.use(express.json()) // middleware que transforma la req.doby a un json

const PORT = 3000
app.get("/ping", (_req, res) => {
  console.log("Someone pinged here!!")
  res.send("pong")
})


app.use("/api/diaries", diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

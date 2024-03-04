import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './Route/auth.route.js'
import messageRoutes from './Route/Message.Route.js'
import userRoutes from './Route/user.Routes.js'

import connect_mongoDb from './db/Connect_mongoDb.js'
import { app, server } from './socket.io/socket.js'

const PORT = process.env.PORT || 1997

const __dirname = path.resolve();

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.use(express.static(path.join(__dirname, "frontEnd/dist")))

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "frontEnd", "dist", "index.html"))
})

server.listen(PORT, (err) => {
    connect_mongoDb()
    if(err) throw err;
    console.log(`The Server is running on PORT ${PORT}`);
})

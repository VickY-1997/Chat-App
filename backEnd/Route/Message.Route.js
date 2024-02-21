import express from 'express'
import { sendMessage, getMessages } from '../Controller/Msg.controller.js'
import protectRoute from '../Middleware/Protect.route.js'


const router = express.Router()

router.get('/:id', protectRoute, getMessages)
router.post('/send/:id', protectRoute, sendMessage)


export default router;
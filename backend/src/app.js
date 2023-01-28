import express from 'express'
import TFGListRoutes from './routes/tfg-list.routes'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use('/api', TFGListRoutes);

app.get('/', (req, res) => {
    res.json('Welcome to my application!');
})

export default app;
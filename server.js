import express from 'express';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
import postRoutes from './routes/PostRoutes.js';
import commentRoutes from './routes/CommentRoutes.js';

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/comment', commentRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

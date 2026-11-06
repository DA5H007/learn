import express from 'express';
import noteModel from './models/note.model.js';

const app = express();

app.use(express.json());

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json(notes);
})

app.post('/notes', async (req, res) => {
    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description
    });
    res.status(201).json({ message: 'Note created successfully' })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await noteModel.findOneAndUpdate({ _id: id }, data);
    res.status(200).json({ message: 'Note updated successfully' });
});

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id: id
    });
    res.status(200).json({ message: 'Note deleted successfully' });
});

export default app;
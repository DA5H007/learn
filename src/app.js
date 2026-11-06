import express from 'express';

const app = express();

app.use(express.json());

const notes = [];

app.post('/', (req, res) => {
    notes.push(req.body);
    res.status(201).json({ message: 'Note added successfully' });
    console.log(req.body);
})

app.get('/', (req, res) => {
    res.json(notes);
})

app.delete('/:index', (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.json({ message: 'Note deleted successfully' });
});

export default app;
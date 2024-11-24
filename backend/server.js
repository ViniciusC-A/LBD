const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// CRUD para Hotel
app.post('/hotels', async (req, res) => {
  const hotel = await prisma.hotel.create({ data: req.body });
  res.json(hotel);
  console.log('teste');
});

app.get('/hotels', async (req, res) => {
  try {
    const hotels = await prisma.hotel.findMany();
    res.json(hotels);
  } catch (error) {
    console.error('Erro ao buscar hotéis:', error);
    res.status(500).json({ error: 'Erro ao buscar hotéis' });
  }
});

app.put('/hotels/:id', async (req, res) => {
  const { id } = req.params;
  const hotel = await prisma.hotel.update({ where: { id: Number(id) }, data: req.body });
  res.json(hotel);
});

app.delete('/hotels/:id', async (req, res) => {
  const { id } = req.params;
  const hotel = await prisma.hotel.delete({ where: { id: Number(id) } });
  res.json(hotel);
});

// Adicione CRUDs para Quarto, Hospede, Reserva e Log

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
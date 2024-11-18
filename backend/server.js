const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/calculate/future-value', (req, res) => {
    const { principal, rate, periods } = req.body;
    const futureValue = principal * Math.pow(1 + rate / 100, periods);
    res.json({ futureValue });
});

app.post('/calculate/loan', (req, res) => {
    const { loanAmount, rate, periods } = req.body;
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -periods));
    res.json({ monthlyPayment });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

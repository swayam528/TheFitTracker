const express = require('express')
const {startChat } = require('../controllers/chatController')
const router = express.Router();


// POST endpoint to handle incoming requests
router.post('/chat', startChat);

// Start the Express.js server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
module.exports = router;
const express = require('express') 
const cors = require('cors') 

const server = express();
const PORT = 5000

server.use(cors({origin: true}));

server.get('/image', (req, res) => {
  
  console.log(`Should fetch in the database the home image url`); // @todo
  
  res.status(200).json(
    {
      homeUrl: 'https://www.mastrantonio.com/wp-content/uploads/2020/05/wine-7.jpg',
      message: "Url retrieved with success"
  });

})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
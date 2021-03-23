import * as express from 'express'; 
import * as cors from 'cors';

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

server.get('/wines', (req, res) => {
  
  console.log(`Should fetch in the database the wines' information`); // @todo
  
  const wines = [
    {name: 'Cabernet', description: 'Very good', price: 2000},
    {name: 'Sauvignon', description: 'Amzing', price: 3000}]

  res.status(200).json(
    {
      wines: wines,
      message: "Wines retrieved with success"
  });

})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
import express from 'express';

const app = express();

// Je permet à mon application express de comprendre le JSON
app.use(express.json());

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
];
// Admettons j'ai une entité Product
app.get('/products', (req, res) => {
  // Je veux récupérer tous les produits de ma base de données

  // Je renvoie les données
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  // Je veux récupérer un produit en particulier
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  // Je renvoie les données
  res.json(product);
});

app.post('/products', (req, res) => {
  // Je veux créer un produit
  const product = req.body;

  // J'ajoute le produit à ma base de données
  product.id = products.length + 1;
  products.push(product);

  // Je renvoie les données
  res.json(product);
});

app.patch('/products/:id', (req, res) => {
  // Je veux modifier un produit
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  // Je modifie le produit dans ma base de données
  Object.assign(product, req.body);

  // Je renvoie les données
  res.json(product);
});

app.delete('/products/:id', (req, res) => {
  // Je veux supprimer un produit
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  // Je supprime le produit de ma base de données
  products.splice(products.indexOf(product), 1);

  // Je renvoie les données
  res.json({ message: 'Product deleted' });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

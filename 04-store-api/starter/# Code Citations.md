# Code Citations

## License: unknown
https://github.com/tomlim2/til/tree/cd322cd02a5e6e8e190695f391b564feb2b9285e/_posts/node/22-01-05-query-sort.md

```
async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company
```


## License: unknown
https://github.com/snoopysaurav/store-api/tree/c7aa062a5ad6a49e58a7961556ee9e45f4ac8ca5/controllers/products.js

```
, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject
```


## License: unknown
https://github.com/muku0605/storeApi/tree/3187bf537b8223e80bb500bf93eb233cc81f5f2d/controllers/products.js

```
{};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options:
```


## License: unknown
https://github.com/eylommaayan/stor-API/tree/78c65cd17615af4905496a8bc0e347f3ca1cd47e/controllers/products.js

```
if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i"
```


## License: unknown
https://github.com/satyapsr13/job_api/tree/8bbd8da04f1de997b3bdc86fa4f12371d976feff/Controllers/product.js

```
featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product
```


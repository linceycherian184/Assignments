const db = require('../util/database')
const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products(title,price,description,imageURL) VALUES(?,?,?,?)',[this.title,this.price,this.description,this.description,this.imageUrl])
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products where id=?',[this.id])
   
  }

  static fetchAll() {
   return db.execute('SELECT * FROM products')
   
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE id=?',[this.id])
  }
};

const router = require('express').Router()
const connection = require('../connectionDb')


// const typeQuery = `SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id WHERE products.product_type = ?`;
// const priceHighToLow = `SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id ORDER BY price.price DESC;`
// const priceLowToHigh = `SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id ORDER BY price.price ASC;`
 
// router.get('/productFilter', (req, res) => {
//     let type = req.query.type //returns type as mens or womens
//     let priceMax = req.query.priceMax //returns highest price
//     let priceMin = req.query.priceMin //returns lowest price

//     if(type && !priceMax && !priceMin) {
//         connection.query(typeQuery,[type], function (err, data) {
//             if(err) throw err;
//             res.send(data)
//         })
//     } else if (priceMax && !type && !priceMin) {
//         connection.query(priceHighToLow,[priceMax], function(err, data) {
//             if(err) throw err;
//             res.send(data)
//         })
//     } else if (priceMin && !type && !priceMax) {
//         connection.query(priceLowToHigh, [priceMin], function(err, data) {
//             if(err) throw err;
//             res.send(data)
//         })
//     }
//     }
//     )


//Setting a basequery for use later 
const baseQuery = 'SELECT products.*, price.price FROM products LEFT JOIN price ON products.product_id = price.product_id WHERE 1 ';

router.get('/productFilter', (req, res) => {
    //requesting the query
    let type = req.query.type //returns type as mens or womens
    let priceMax = req.query.priceMax //returns highest price
    let priceMin = req.query.priceMin //returns lowest price
    let dbQuery = baseQuery
    let dbParams = []
    //if gender is selected append query to basequery
    if(type) {
        dbQuery += 'AND products.product_type = ? '
        dbParams.push(type)
       
    } 
    //if high to low is selected, order by price
    if (priceMax) {
        dbQuery += 'ORDER BY price.price DESC'
        
    //else order by price low to high
    } else if (priceMin) {
        dbQuery += 'ORDER BY price.price ASC'
    }
    //running the query defined in this api and sending the data to the body
    connection.query(dbQuery,dbParams, function (err, data) {
        if(err) throw err;
        res.send(data)
    })
    }
    )

    

module.exports=router;
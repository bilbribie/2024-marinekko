const express = require('express');
const session = require('express-session');

require('dotenv').config();
const path = require('path');
const cors = require('cors');
const app = express();
let webOrigin = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE'
}
app.use(cors(webOrigin));
app.use('/picture', express.static(path.join(__dirname,'assets')));
const port=2999;
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

app.use('/' ,router);
router.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true
}));
// my database
// et colorsArray = ["Blue","Green","Red","Black","White","Purple","Yellow","Brown","Gray","Pink"
//                       ,"Orange","Magenta","Teal"] color : "Green" ,
 
const BI = ["https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_wht600_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
"https://www.lynaround.com/media/catalog/product/a/2/a24c2wg011_beg000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
"https://www.lynaround.com/media/catalog/product/a/2/a24c6wg001_red000_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg",
"https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf180_blk000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg"]
const desp = "The Mono Mini Tote is made of organic cotton. The large Marimekko “M” is printed in the front. The small bag has handles and an open pocket on the outside\nSIZE\nHeight: 23.00 cm\nWidth: 31.00 cm\nDepth: 14.50 cm\nMain Material: 100 % Cotton\n";
let products = [{bagId : 1,name : "Bag1", category : "Tota Bag", stock : 3, price : 2000, color : "Red" ,img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 2,name : "Bag2", category : "Tota Bag", stock : 30, price : 2100, color : "Blue" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 3,name : "Bag3", category : "Shoulder Bag", stock : 1, price : 2200, color : "Yellow" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 4,name : "Bag4", category : "Shoulder Bag", stock : 5, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 5,name : "Bag5", category : "Tota Bag", stock : 30, price : 2000,color : "Purple" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 6,name : "Bag6", category : "Tota Bag", stock : 10, price : 2100, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 7,name : "Bag7", category : "Shoulder Bag", stock : 67, price : 2200,color : "Pink" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 8,name : "Bag8", category : "Shoulder Bag", stock : 45, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 9,name : "Bag9", category : "Tota Bag", stock : 5, price : 2000,color : "Purple" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 10,name : "Bag10", category : "Tota Bag", stock : 23, price : 2100,color : "Purple" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 11,name : "Bag11", category : "Tota Bag", stock : 6534, price : 2100,color : "Pink" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 12,name : "Bag12", category : "Shoulder Bag", stock : 234, price : 2200,color : "Orange" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 13,name : "Bag13", category : "Shoulder Bag", stock : 213, price : 6300,color : "Orange" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 14,name : "Bag14", category : "Tota Bag", stock : 10, price : 2000,color : "Green" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 15,name : "Bag15", category : "Tota Bag", stock : 355, price : 2100,color : "Pink" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 16,name : "Bag16", category : "Shoulder Bag", stock : 4, price : 2200, color : "Red" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 17,name : "Bag17", category : "Shoulder Bag", stock : 43, price : 6300, color : "Red" , img : "/bagSample2.jpg",BagImages : BI,description : desp},
                          {bagId : 18,name : "Bag18", category : "Tota Bag", stock : 63, price : 2000,color : "Orange" , img : "/bagSample1.jpg",BagImages : BI,description : desp},
                          {bagId : 19,name : "Bag19", category : "Tota Bag", stock : 24, price : 2100,color : "Green" , img : "/bagSample2.jpg",BagImages : BI,description : desp}]


// CREATE TABLE AdminAccount (
// `AdminID` int(10) NOT NULL,
// `AdminRole` varchar(50) NOT NULL,
// `AdminUsername` varchar(50) NOT NULL,
// `AdminFirstName` varchar(50) NOT NULL,
// `AdminSurname` varchar(50) NOT NULL,
// `AdminEmail` varchar(50) NOT NULL,
// `AdminPassword` varchar(50) NOT NULL,
// PRIMARY KEY (`AdminID`) /* add account ID as a foreign key duayyyyyyy*/
// );

let adminAccounts = [{AdminID : 1,AdminRole : "edit product",AdminUsername : "U1",AdminFirstName : "F1",AdminSurname : "S1", AdminEmail : "E1", AdminPassword : "PW1"}
                    ,{AdminID : 2,AdminRole : "edit product",AdminUsername : "U2",AdminFirstName : "F2",AdminSurname : "S2", AdminEmail : "E2", AdminPassword : "PW2"}
                    ,{AdminID : 3,AdminRole : "edit account",AdminUsername : "U3",AdminFirstName : "F3",AdminSurname : "S3", AdminEmail : "E3", AdminPassword : "PW3"}
                    ,{AdminID : 4,AdminRole : "remove product",AdminUsername : "U4",AdminFirstName : "F4",AdminSurname : "S4", AdminEmail : "E4", AdminPassword : "PW4"}
                    ,{AdminID : 5,AdminRole : "add product",AdminUsername : "U5",AdminFirstName : "F5",AdminSurname : "S5", AdminEmail : "E5", AdminPassword : "PW5"}
                    ,{AdminID : 6,AdminRole : "edit product",AdminUsername : "U1",AdminFirstName : "F1",AdminSurname : "S1", AdminEmail : "E1", AdminPassword : "PW1"}
                    ,{AdminID : 7,AdminRole : "edit product",AdminUsername : "U2",AdminFirstName : "F2",AdminSurname : "S2", AdminEmail : "E2", AdminPassword : "PW2"}
                    ,{AdminID : 8,AdminRole : "edit account",AdminUsername : "U3",AdminFirstName : "F3",AdminSurname : "S3", AdminEmail : "E3", AdminPassword : "PW3"}
                    ,{AdminID : 9,AdminRole : "remove product",AdminUsername : "U4",AdminFirstName : "F4",AdminSurname : "S4", AdminEmail : "E4", AdminPassword : "PW4"}
                    ,{AdminID : 10,AdminRole : "add product",AdminUsername : "U5",AdminFirstName : "F5",AdminSurname : "S5", AdminEmail : "E5", AdminPassword : "PW5"}
                    ,{AdminID : 11,AdminRole : "edit product",AdminUsername : "U1",AdminFirstName : "F1",AdminSurname : "S1", AdminEmail : "E1", AdminPassword : "PW1"}
                    ,{AdminID : 12,AdminRole : "edit product",AdminUsername : "U2",AdminFirstName : "F2",AdminSurname : "S2", AdminEmail : "E2", AdminPassword : "PW2"}
                    ,{AdminID : 13,AdminRole : "edit account",AdminUsername : "U3",AdminFirstName : "F3",AdminSurname : "S3", AdminEmail : "E3", AdminPassword : "PW3"}
                    ,{AdminID : 14,AdminRole : "remove product",AdminUsername : "U4",AdminFirstName : "F4",AdminSurname : "S4", AdminEmail : "E4", AdminPassword : "PW4"}
                    ,{AdminID : 15,AdminRole : "add product",AdminUsername : "U5",AdminFirstName : "F5",AdminSurname : "S5", AdminEmail : "E5", AdminPassword : "PW5"}];



// my database

router.get('/alladmin_api',cors(webOrigin),(req,res) => {
    console.log("success fetch all admin");
    res.send(JSON.stringify(adminAccounts));
})



// http API to search all bags data
router.get('/searchAdminId_api',cors(webOrigin),(req,res) => {

    const id = req.query.id;
    if(!id){
        return res.status(400).send({ error: true, message: 'Please provide id' })
    }
    console.log("success fetch admin by id");
    const filteredArray = [];
    for(let i = 0;i < adminAccounts.length;i++){
        if(id == adminAccounts[i].AdminID){
            filteredArray.add(adminAccounts[i]);
        }
    }
    res.send(JSON.stringify(filteredArray));
})

router.delete('/delete_api_admin',cors(webOrigin),(req,res) => {
    const id = req.body.id;
    console.log(req.body)
    let found = -1;
    for(let i =0 ;i < adminAccounts.length;i++){
        if(adminAccounts[i].AdminID == id){
            found = i;
            break;
        }
    }
    const newAdmins = [];

    for(let i =0 ;i < adminAccounts.length && found != -1;i++){
        if(adminAccounts[i].AdminID != id){
            newAdmins.push(adminAccounts[i]);
        }
    }
    if(found != -1){
        adminAccounts = newAdmins;
    }

    if(found != -1){
        res.json({ error : false , message: 'successful'})
    }else{
        res.json({ error : true , message: 'unsuccessful'})
    }

})

router.get('/search_api_bag',cors(webOrigin),(req,res) => {
    console.log("success fetch all bag");
    res.send(JSON.stringify(products));
})

router.delete('/delete_api_bag',cors(webOrigin),(req,res) => {
    const id = req.body.id;
    console.log(req.body)
    let found = -1;
    for(let i =0 ;i < products.length;i++){
        if(products[i].bagId == id){
            found = i;
            break;
        }
    }
    const newProducts = [];

    for(let i =0 ;i < products.length && found != -1;i++){
        if(products[i].bagId != id){
            newProducts.push(products[i]);
        }
    }
    if(found != -1){
        products = newProducts;
    }

    if(found != -1){
        res.json({ error : false , message: 'successful'})
    }else{
        res.json({ error : true , message: 'unsuccessful'})
    }

})




// http API to search bag by name
router.get('/search_api_query',cors(webOrigin),(req,res) => {
    // `http://localhost:2999/search_api_query/?name=${name}&category=${category}&color=${color}&priceRange=${priceRange}`

    const name = req.query.name;
    const category = req.query.category;
    const color = req.query.color;
    const priceRange = req.query.priceRange;

    
    const filteredArray = [];
    let q1;
    let q2;
    let q3;
    let q4;
    for(let i = 0;i < products.length;i++){
        q1 = (!name || products[i].name === name);
        q2 = (category === "none" || products[i].category === category);
        q3 = (color === "none" || products[i].color === color);
        q4 = (priceRange == "none" || (Number(priceRange.split("-")[0]) <= products[i].price && products[i].price <= Number(priceRange.split("-")[1])));
        if(q1 && q2 && q3 && q4){
            filteredArray.push(products[i]);
        }
    }
    console.log("success search on filter");
    res.send(JSON.stringify(filteredArray));
})

router.get('/getUser_api',cors(webOrigin),(req,res) => {
    console.log("\n\n");
    console.log(req.session.user);
    if(req.session.user){
        console.log("has login");
        res.send(JSON.stringify(req.session.user));
    }else{
        console.log("no login");
        res.send(JSON.stringify(null));
    }
    
})

// router.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     connection.query(
//       'SELECT * FROM AdminAccount WHERE AdminUsername = ? AND AdminPassword = ?',
//       [username, password],
//       (error, results) => {
//         if (error) {
//           return res.status(500).json({ error });
//         }
//         if (results.length > 0) {
//           console.log(`Login attempt with username: ${username} and password: ${password}`);
//           res.json({ message: 'Login successful', user: results[0] });
//         } else {
//           res.status(401).json({ message: 'Login failed' });
//         }
//       }
//     );
//   });


router.post('/login_api',cors(webOrigin),(req,res) => {
    // once found generate login log in the sql
    console.log("\n\n");
    console.log("Login..." + req.url);
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    console.log(userName + "  " + passWord);

    for(let i = 0;i < adminAccounts.length;i++){
        if(adminAccounts[i].AdminUsername === userName && adminAccounts[i].AdminPassword === passWord){
            console.log("an user found");
            console.log(req.session.user);
            res.json({ message: 'Login successful', user: adminAccounts[i] });
        }
    }
    res.status(401).json({ message: 'Login failed' });
})

router.post('/post_bag_api',cors(webOrigin),(req,res) =>{
    console.log(req.body);

    res.json({ message: 'successful' });

    // for unsucessful case
    // res.json({ message: 'unsuccessful' });

    // maybe need to query inorder to find id that is not in the table
    // insert bag on database usign SQL
    // req.body.Bag.BagID  WRONG!!
    // req.body.BagID  CORRECT!!!
})


router.put('/put_bag_api',cors(webOrigin),(req,res) =>{
    console.log(req.body);

    res.json({ error : false ,message: 'successful'});


    // for unsucessful case
    // res.json({ message: 'unsuccessful'});



    // the bag id is given in the body
    // insert bag on database usign SQL
    // req.body.Bag.BagID  WRONG!!
    // req.body.BagID  CORRECT!!!
})


router.post('/post_admin_api',cors(webOrigin),(req,res) =>{
    console.log(req.body);

    res.json({ error : false , message: 'successful' });

    // for unsucessful case
    // res.json({ message: 'unsuccessful' });

    // maybe need to query inorder to find id that is not in the table
    // insert bag on database usign SQL
    // req.body.Bag.BagID  WRONG!!
    // req.body.BagID  CORRECT!!!
})


router.put('/put_admin_api',cors(webOrigin),(req,res) =>{
    console.log(req.body);

    res.json({ error : false , message: 'successful'});


    // for unsucessful case
    // res.json({ message: 'unsuccessful'});



    // the bag id is given in the body
    // insert bag on database usign SQL
    // req.body.Bag.BagID  WRONG!!
    // req.body.BagID  CORRECT!!!
})


app.listen(port,() => {console.log(`app is listening on ${port}`)});
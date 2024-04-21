DROP DATABASE IF EXISTS sec3_gr4_database;
CREATE DATABASE sec3_gr4_database;
/* URL picture, many side of the bag picture*/
USE sec3_gr4_database;

DROP TABLE IF EXISTS `Bag`;

/* table bag structure*/
CREATE TABLE Bag (
  `BagID` int(10) NOT NULL,
  `BagName` varchar(100) NOT NULL,
  `BagCategory` varchar(20) NOT NULL,
  `BagColor` varchar(20) NOT NULL,
  `BagPrice` decimal(10,2) NOT NULL,
  `stock` int(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  PRIMARY KEY (`BagID`)
  );

/* insert bag info*/
INSERT INTO Bag (`BagID`, `BagName`, `BagCategory`, `BagColor`, `BagPrice`, `stock`, `description`) VALUES

(018801, 'PILLOW WEEKENDER TAIFUUNI', 'Shoulder Bag', 'Pink', 9900, 32, 'The padded Pillow Weekender bag is made of recycled polyester and it features the topstitched Taifuuni pattern. The quilted bag has padded handles and a long, padded shoulder strap that can be tied to the right length. The bag closes with a zipper and has a zipper pocket on the inside. The Marimekko “M” is embroidered on the front. SIZE Height: 33.00 cm Width: 45.00 cm Depth: 19.50 cm Main Material: 100 % Polyester'),

(018802, 'PLAY TOTE SOLID', 'Shoulder Bag', 'Green', 7110, 19, 'The Play Tote bag is made from recycled polyester. It has zipper closure and a zipper pocket inside. In the front of the bag there is one pocket with the zipper closure. SIZE Height: 33.00 cm Width: 33.00 cm Depth: 14.00 cm Strap length: 60.00 cm Main Material: 100 % Polyester'),

(018803, 'CARRIER MIDI UNIKKO', 'Tote Bag', 'Orange', 4410, 23, 'The Carrier Midi tote bag is made of an unbleached cotton and linen blend, and it features the large Unikko pattern flower, which is printed in Helsinki. The "Unikko 60th anniversary" printed cotton straps run along the sides of the bag to form the handles. This product includes 46% recycled cotton and 21% recycled linen. This product celebrates the 60th anniversary of the Unikko pattern. SIZE Height: 43.00 cm Width: 41.00 cm Strap length: 54.00 cm Main Material: 79 % Cotton, 21 % Linen'),

(018804, 'CARRIER MIDI UNIKKO', 'Tote Bag', 'Green', 4410, 16, 'The Carrier Midi tote bag is made of an unbleached cotton and linen blend, and it features the large Unikko pattern flower, which is printed in Helsinki. The "Unikko 60th anniversary" printed cotton straps run along the sides of the bag to form the handles. This product includes 46% recycled cotton and 21% recycled linen. This product celebrates the 60th anniversary of the Unikko pattern. SIZE Height: 43.00 cm Width: 41.00 cm Strap length: 54.00 cm Main Material: 79 % Cotton, 21 % Linen'),

(018805, 'CARRIER MIDI UNIKKO', 'Tote Bag', 'Black', 4410, 8, 'The Carrier Midi tote bag is made of an unbleached cotton and linen blend, and it features the large Unikko pattern flower, which is printed in Helsinki. The "Unikko 60th anniversary" printed cotton straps run along the sides of the bag to form the handles. This product includes 46% recycled cotton and 21% recycled linen. This product celebrates the 60th anniversary of the Unikko pattern. SIZE Height: 43.00 cm Width: 41.00 cm Strap length: 54.00 cm Main Material: 79 % Cotton, 21 % Linen'),

(018806, 'VIHKIRUUSU BAG 43X44', 'Tote Bag', 'White', 1530, 12, 'A Vihkiruusu patterned fabric bag with a wedding rose motif. Not only can it be used for everyday outings, but the flat type can also be folded and carried, so it can be used as a secondary bag while traveling. SIZE Length: 43.00 cm Width: 44.00 cm Main Material: 100 % Cotton'),

(018807, 'MONO MINI TOTE SOLID', 'Handbag', 'Cream', 4950, 6, 'The Mono Mini Tote is made of unbleached organic cotton which is printed in Helsinki. The small bag has an open pocket on the outside. This product is made of 100% organic cotton. SIZE Height: 23.00 cm Width: 31.00 cm Depth: 13.00 cm'),

(018808, 'Smartbag Pieni Unikko', 'Market Bag', 'Black', 1170, 48, 'The Smartbag is made of polyester in the Unikko pattern. When not in use, the bag can be folded up and stored in the inside pocket. The main material of this product is made of 100% recycled polyester.'),

(018809, 'SMARTBAG MARILOGO', 'Market Bag', 'Black', 1170, 12, 'The classic Marilogo pattern in black and white decorates the ultra light Smartbag. The foldable shopping bag fits into a small pocket on the inside of the bag, which makes it a good accessory for on the go. Height: 40.00 cm Width: 35.00 cm Strap length: 66.00 cm'),

(018810, 'MONO BACKPACK MINI UNIKKO', 'Backpack', 'Brown', 10710, 36, 'The Mono Backpack is made of unbleached organic cotton, which is printerd in Helsinki. The backpack has a zipper closure, adjustable shoulder straps, and two open pockets on the front. There is a large open pocket on the inside big enough to fit a laptop. The ends of the zipper can be attached to the sides of the bag with snap buttons. SIZE Height: 42.50 cm Width: 38.50 cm Depth: 14.00 cm Main Material: 100 % Cotton Component: 100 % Cotton'),

(018811, 'SMARTSACK PIKKUINEN UNIKKO','Backpack', 'Blue', 1530, 26, 'The classic Unikko pattern decorates the Smart Sack that closes by pulling and tightening the shoulder straps. There is a zipper pocket on the inside, in which the whole bag itself can be folded and stored when not in use. The main material is made of 100% recycled polyester. SIZE Height: 42.00 cm Width: 37.00 cm Strap length: 86.00 cm Main Material: 100 % Polyester'),

(018812, 'MONO BACKPACK SOLID', 'Backpack', 'Cream', 12150, 14, 'The Mono Backpack is made of unbleached organic cotton. The backpack has a zipper closure, adjustable shoulder straps, and two open pockets on the front. There is a large open pocket on the inside big enough to fit a laptop. The ends of the zipper can be attached to the sides of the bag with snap buttons. This product is made of 100% organic cotton. SIZE Height: 47.50 cm Width: 38.50 cm Depth: 14.00 cm'),

(018813, 'SMARTSACK LOGO', 'Backpack', 'Brown', 1530, 14, 'The classic Unikko pattern decorates the Smart Sack that closes by pulling and tightening the shoulder straps. There is a zipper pocket on the inside, in which the whole bag itself can be folded and stored when not in use. The main material is made of 100% recycled polyester. SIZE Height: 42.00 cm Width: 37.00 cm Strap length: 86.00 cm Main Material: 100 % Polyester'),

(028801, 'Braylynn Backpack', 'Backpack', 'Black', 1912, 23, 'Introducing the Braylynn Backpack: your ideal partner for any lifestyle, enhancing your style effortlessly. A fresh addition from our latest collection, destined for your closet. Showcasing a sleek backpack design with logo-plaque zippers, handles, front and main compartments - all crowned with detachable straps. Discover it in elegant Black.'),

(028802, 'Sera L Tote Bag', 'Tote Bag', 'Red', 3590, 9, 'Elevated further with a pleated finish at the top, this multifunctional classic item ensures you look luxurious and beautiful from every angle. It comes with an open top detailed by a magnetic closure, a rectangular shape, a front brand logo, chain handle grips with a leather strap, a detachable long shoulder strap, and a spacious compartment with separate storage compartments. It is available in one color: dark red. Dimension: Width 30.3 cm. X Depth 14 cm. x High 24.5 cm'),

(028803, 'Zinnia Tote Bag', 'Tote Bag', 'Yellow', 2392, 44, 'This bag is the single essential piece that will effortlessly elevate your look, no matter the occasion. With its sleek rectangular design, accessible open top, sturdy handles, and a spacious main compartment, it is your all-in-one solution for turning heads. Not to mention the bold, chunky chain detailing gracing the front and the iconic logo plaque. Dimension: Width 42 cm. X Depth 12.3 cm. x High 28.8 cm.'),

(028804, 'Zinnia Tote Bag', 'Tote Bag', 'Black', 2392, 32, 'This bag is the single essential piece that will effortlessly elevate your look, no matter the occasion. With its sleek rectangular design, accessible open top, sturdy handles, and a spacious main compartment, it is your all-in-one solution for turning heads. Not to mention the bold, chunky chain detailing gracing the front and the iconic logo plaque. Dimension: Width 42 cm. X Depth 12.3 cm. x High 28.8 cm.'),

(028805, 'Piazza S Top Handle Bag', 'Handbag', 'Red', 2390, 5, 'Unveil a striking addition to the latest collection, seamlessly blending functionality with a touch of futuristic flair. Your ensemble achieves perfection with this iconic piece boasting a top handle design, flap magnetic closure, front logo plaque, and a spacious main compartment. For versatility, it comes with a detachable long strap. Dimension: Width 19.8 cm. X Depth 8.2 cm. x High 14.8 cm'),

(028806, 'Piazza S Top Handle Bag', 'Handbag', 'White', 2390, 15, 'Unveil a striking addition to the latest collection, seamlessly blending functionality with a touch of futuristic flair. Your ensemble achieves perfection with this iconic piece boasting a top handle design, flap magnetic closure, front logo plaque, and a spacious main compartment. For versatility, it comes with a detachable long strap. Dimension: Width 19.8 cm. X Depth 8.2 cm. x High 14.8 cm'),

(028807, 'Arisa S Handbag', 'Handbag', 'Green', 2232, 18, 'Sleek rectangular design, easy-open magnetic button snap, comfortable handle, iconic front logo, roomy main compartment, and a stylish quilt pattern, it is everything you need. Plus, it comes with a detachable long chain strap for extra versatility. Width 23.5 cm. X Depth 11 cm. x High 15.7 cm'),

(028808, 'Mellow S Shoulder Bag', 'Handbag', 'Yellow', 1752, 26, 'Meet your versatile partner for a busy day: the Mellow Shoulder Bag S. With its sleek rectangular shape, handy top zip, soft fur details, a chic logo plaque, a comfy handle, and smart compartments, it is a blend of style and functionality. Pick from two elegant shades Dimension: Width 26.5 cm. X Depth 5 cm. x High 12 cm.'),

(028809, 'Mellow S Shoulder Bag', 'Handbag', 'Grey', 1752, 5, 'Meet your versatile partner for a busy day: the Mellow Shoulder Bag S. With its sleek rectangular shape, handy top zip, soft fur details, a chic logo plaque, a comfy handle, and smart compartments, it is a blend of style and functionality. Pick from two elegant shades Dimension: Width 26.5 cm. X Depth 5 cm. x High 12 cm.'),

(028810, 'Braylynn Top Handle M Bag', 'Handbag', 'Brown', 2072, 18, 'Introducing the Braylynn Top Handle M: your chic partner for both day and night. A fresh icon from our latest collection, blending function with elegance. With its sleek rectangular shape, convenient top-zip closure and magnetic flap, adorned with a front logo plaque. It boasts a roomy main compartment, a handle, and a detachable long strap.'),

(038801, 'Denimdos Bag', 'Shoulder Bag', 'Blue', 1790, 16, 'Add a pop of fun to your style with this knit hobo bag. The spacious design in a neutral color combo with Lyn Around Collectibles embroidery brings a playful element to your wardrobe, making it a go-to tote for an easy casual look. Materials :FABRIC Dimension :Width 11 cm. X Length 37 cm. X High 28 cm.'),

(038802, 'Dalia Bag','Shoulder Bag','Cream', 2990, 28, 'This casually chic raffia tote bag featuring whimsical sea-themed embroidery and an adorable dolphin and boat keychains is your next go-to. Materials :PU Dimension :Width 10 cm. X Length 27 cm. X High 20 cm.'),

(038803, 'Draguno Bag', 'Shoulder Bag', 'Red', 1290, 15, 'Elevate your Lunar New Year style with this chic shoulder bag adorned with festive pompoms, a delightful accessory that radiates joy and prosperity. Features a chain strap, zipper closure, one main compartment, and graphic print of "Lyn Around" text and a dragon. Materials :FABRIC Dimension :Width 4.5 cm. X Length 24 cm. X High 14 cm.'),

(038804, 'Blossania Bag', 'Shoulder Bag', 'Purple', 2990, 6, 'Carry your essentials in style with this bag shaped like delicate flower petals. Features multi-colored, front pocket with a closure, shoulder length straps. Fill it with your daily essentials - wallet, lipstick, and phone. Materials :FABRIC Dimension :Width 7 cm. X Length 53 cm. X High 43 cm.'),

(038805, 'Blysee Wallet', 'Wallet', 'Pink', 1990, 20, 'Celebrate the beauty of the sea with this square wallet featuring seashells and pearls, a must-have accessory that brings a hint of underwater charm to your everyday look. Features shell-shaped zipper pull, 2 zipped compartments, 5 card slots, magnetic clasp closure, and Lyn Around "LA" initials. Materials :PU Dimension :Width 3 cm. X Length 12 cm. X High 10 cm.'),

(038806, 'Elvie Wallet', 'Wallet', 'Black', 2290, 23, 'Upgrade your accessory game with a fabulous wallet. Long wallet featuring cute 3D roses embellishments with Lyn Around gold logo plaque, zipper pull, 6 card slots, two main compartments, and a larger compartment for photo or ID. Perfect as a gift for yourself and loved ones. Materials :PU Dimension :Width 3 cm. X Length 18 cm. X High 10 cm.'),

(038807, 'Kolby Bag', 'Wallet', 'White', 1990, 12, 'Accessorize with flair using this super cute seashell-shaped bag, featuring chain shoulder strap, charming pearl and starfish details, Lyn Around logo, zipper pull, magnetic clasp closure, 2 main compartments, and 4 card slots. The delightful details make it a fashion-forward choice for those who love to make a statement Materials :PU Dimension :Width 4 cm. X Length 16 cm. X High 13 cm.'),

(038808, 'Mae Wallet', 'Wallet', 'Blue', 1790, 8, 'If you are looking for multi-function wallet, this one is perfect! Features denim details, gold hardware, removable adjustable shoulder strap, zipped comparment, card holders, glitterry embellishment, Lyn Around logo, and magnetic clasp. This wallet goes well with your casual looks or night-out looks. Materials :PU Dimension :Width 3 cm. X Length 11 cm. X High 9 cm.'),

(038809, 'Emille Wallet', 'Wallet', 'Pink', 2790, 4, 'Up your look in a floral fantasy with this stunning tote – a garden-inspired accessory that complements your style with a touch of nature. Features multiple floral prints, Lyn Around logo plaque, rectangular design, dual top handles, removable chain strap, removable satin rose keychain, zipper, and two main compartments. Materials :PU Dimension :Width 3 cm. X Length 21 cm. X High 21 cm.');

DROP TABLE IF EXISTS `AdminAccount`;

/*table admin information structure*/
CREATE TABLE AdminAccount (
  `AdminID` int(10) NOT NULL,
  `AdminRole` varchar(50) NOT NULL,
  `AdminUsername` varchar(50) NOT NULL,
  `AdminFirstName` varchar(50) NOT NULL,
  `AdminSurname` varchar(50) NOT NULL,
  `AdminEmail` varchar(50) NOT NULL,
  `AdminPassword` varchar(50) NOT NULL,
  PRIMARY KEY (`AdminID`) /* add account ID as a foreign key duayyyyyyy*/
);

/****** make it 20 rows up ********/
/* might be better if can make seperate table for role, if possible*/
INSERT INTO AdminAccount (`AdminID`, `AdminRole` ,`AdminUsername`, `AdminFirstName`, `AdminSurname`, `AdminEmail`, `AdminPassword`) VALUES

(012201, 'Add Bag' ,'Admin_John', 'John', 'Doe', 'JohnDoe@gmail.com', 'AdminJohnd22'),

(012202, 'Edit Bag Description' ,'Admin_Alice', 'Alice', 'Smith', 'AliceSmith@gmail.com', 'Alice2235Smi'),

(012203, 'Remove Bag', 'Admin_James', 'James', 'Johnson', 'JamesJohnson@gmail.com', 'JamesJohn859*'),

(012204, 'Edit email address','Admin_Emily', 'Emily', 'Brown', 'EmilyBrown@gmail.com', 'Emily8292'),

(012205, 'Add Bag','Admin_Liam', 'Liam', 'Davis', 'LiamDavis@gmail.com', 'DavisLiamStar22'),

(012206, 'Add Bag' ,'Admin_Sophia', 'Sophia', 'Wilson', 'SophiaWilson@gmail.com', 'Sophiee39*'),

(012207, 'Edit admin password','Admin_Olivia', 'Olivia', 'Miller', 'OliviaMiller@gmail.com', 'Millerad33'),

(012208, 'Remove Bag','Admin_Ethan', 'Ethan', 'Taylor', 'EthanTaylor@gmail.com', 'TaylorAdm88*'),

(012209, 'Edit username','Admin_Ava', 'Ava', 'Martinez', 'AvaMartinez@gmail.com', 'AvaaaAd581'),

(012210, 'Edit Bag Description','Admin_Noah', 'Noah', 'Lee', 'NoahLee@gmail.com', 'LeeNoah56098'),

(012211, 'Edit email address','Admin_Nar', 'Nar', 'Flora', 'NarFlora@gmail.com', '32569NarFlora'),

(012212, 'Edit password','Admin_Paul', 'Paul', 'Smith', 'PaulSmith@gmail.com', 'Paul25Smith/'),

(012213, 'Edit username','Admin_Cream', 'Cream', 'Supa', 'CreamSupa@gmail.com', 'CreamSupaa54'),

(012214, 'Edit email address','Admin_Fah', 'Fah', 'Supan', 'FahSupan@gmail.com', 'FahhhSupanmm859'),

(012215, 'Add email address','Admin_Jeab', 'Jeab', 'Monthon', 'JeabMothon@gmail.com', 'MonthonJJ8730'),

(012216, 'Edit username','Admin_Muthita', 'Muthita', 'Jarean', 'MuthitaJarean@gmail.com', 'Muhitaa8165'),

(012217, 'Edit username','Admin_Pao', 'Pao', 'Suchart', 'PaoSuchart@gmail.com', 'PaooSuchart47'),

(012218, 'Add Bag','Admin_Khongkwan', 'Khongkwan', 'Roy', 'KhongkwanRoy@gmail.com', 'Royee4589'),

(012219, 'Remove Bag','Admin_Coffee', 'Coffee', 'Preaw', 'CoffeePreaw@gmail.com', 'Preaww2366'),

(012220, 'Edit bag description','Admin_Bas', 'Bas', 'Flora', 'BasFlora@gmail.com', 'Floraa655');

DROP TABLE IF EXISTS `LoginHistory`;

/*login hostory of admin*/
CREATE TABLE LoginHistory (
  `AdminID` int(10) NOT NULL,
  `LoginType` varchar(50) NOT NULL,
  `LogTime` datetime NOT NULL,
  FOREIGN KEY (`AdminID`) REFERENCES `AdminAccount` (`AdminID`) 
);

INSERT INTO LoginHistory (`AdminID`, `LoginType`, `LogTime`) VALUES
/*login type according to Figma there is only one type which is username and password,
caanot be a guest login because to make modification on products or admin information
there is a requirement for admin ID*/

(012201, 'username and password' , '2024-01-14 23:40:10'),

(012202, 'username and password' , '2024-01-22 18:10:15'),

(012203, 'username and password' , '2024-02-05 21:00:08'),

(012204, 'username and password' , '2024-02-15 09:45:00'),

(012205, 'username and password' , '2024-03-08 12:30:45'),

(012206, 'username and password' , '2024-03-29 16:05:55'),

(012207, 'username and password' , '2024-04-03 14:20:30'),

(012208, 'username and password' , '2024-04-18 08:25:40'),

(012209, 'username and password' , '2024-05-01 10:15:33'),

(012210, 'username and password' , '2024-05-10 07:55:22'),

(012211, 'username and password' , '2024-08-15 14:27:03'),

(012212, 'username and password' , '2024-02-20 21:43:09'),

(012213, 'username and password' , '2024-12-08 06:36:45'),

(012214, 'username and password' , '2024-03-29 16:05:55'),

(012215, 'username and password' , '2024-04-03 14:20:30'),

(012216, 'username and password' , '2024-04-18 08:25:40'),

(012217, 'username and password' , '2024-05-01 10:15:33'),

(012218, 'username and password' , '2024-07-10 08:55:22'),

(012219, 'username and password' , '2024-12-01 10:18:33'),

(012220, 'username and password' , '2024-06-10 07:45:22');

DROP TABLE IF EXISTS `ModifyAdmin`;

/* admin modification table*/
CREATE TABLE ModifyAdmin (
   `ModifierAdminID` int(10) PRIMARY KEY NOT NULL,
   `ModifiedAdminID` int(10) NOT NULL,
   `ModifyType` varchar(50) NOT NULL,
   `ModifyDate` date NOT NULL,
   `ModifyDescription` varchar(50) NOT NULL,
  FOREIGN KEY (`ModifiedAdminID`) REFERENCES `AdminAccount` (`AdminID`)
);

/* insert into admin modification table*/

INSERT INTO ModifyAdmin (`ModifierAdminID`, `ModifiedAdminID`, `ModifyType`, `ModifyDate`, `ModifyDescription`) VALUES
(017701, 012204, 'Edit', '2024-01-12', 'Edit email address'),
(017702, 012207, 'Edit', '2024-02-08', 'Edit admin password'),
(017703, 012209, 'Edit', '2024-03-23', 'Edit username'),
(017704, 012211, 'Edit', '2024-03-26', 'Edit admin password'),
(017705, 012212, 'Edit', '2024-03-27', 'Edit username'),
(017706, 012213, 'Edit', '2024-03-27', 'Edit email address'),
(017707, 012214, 'Edit', '2024-03-29', 'Edit email address'),
(017708, 012215, 'Add', '2024-03-31', 'Added email address'),
(017709, 012216, 'Edit', '2024-04-01', 'Edit username'),
(017710, 012217, 'Edit', '2024-04-02', 'Edit username');

DROP TABLE IF EXISTS `ModifyBag`;

/*table of modify bag*/
CREATE TABLE ModifyBag (
   `BagID` int(10) NOT NULL,
   `AdminID` int(10) NOT NULL,
   `ModifyType` varchar(50) NOT NULL,
   `ModifyDate` date NOT NULL,
   `ModifyDescription` varchar(50) NOT NULL,
  FOREIGN KEY (`BagID`) REFERENCES `Bag` (`BagID`)
);

/*insert information of bag modification*/

INSERT INTO ModifyBag (`BagID`, `AdminID`, `ModifyType`, `ModifyDate`, `ModifyDescription`) VALUES
(018804, 012201, 'Add', '2024-01-14', 'Added the bag'),

(028808, 012202, 'Edit', '2024-01-22', 'Editted the bag description'),

(038803, 012205, 'Add', '2024-03-08', 'Added the bag'),

(038806, 012210, 'Edit', '2024-05-10', 'Editted the bag description'),

(028809, 012203, 'Remove', '2024-02-05', 'Removed the bag'),

(018801, 012208, 'Remove', '2024-04-18', 'Removed the bag'),

(018804, 012206, 'Edit', '2024-03-29', 'Edited the bag description and color'),

(018812, 012218, 'Add', '2024-05-19', 'Added the bag'),

(018813, 012219, 'Remove', '2024-06-17', 'Removed the bag'),

(028805, 012220, 'Edit bag description', '2024-06-26', 'Edited the bag description and color');


DROP TABLE IF EXISTS `Images`;

CREATE TABLE Images (
    `ImageID` INT AUTO_INCREMENT PRIMARY KEY, /*auto generate id for image*/
    `BagID` INT(10),
    `imagename` VARCHAR(255),
    `image_data1` VARCHAR(500),
    `image_data2` VARCHAR(500),
    `image_data3` VARCHAR(500),
    FOREIGN KEY (`BagID`) REFERENCES `Bag` (`BagID`)
);


INSERT INTO Images (`BagID`, `imagename`, `image_data1`, `image_data2`, `image_data3`) VALUES
(018801, 'PILLOW WEEKENDER TAIFUUNI', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/ea103a3245974f23b6d4793707e057f3.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/0c1755407f1443a0a6b89ec87a2f9c27.jpg', NULL),
(018802, 'PLAY TOTE SOLID', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/6a78eec842b44bcabf729dc4a3a2631f.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/248dd352a09544eab00823065600f999.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/b559135f2a804a2dad74aa6e00f1b603.jpg'),
(018803, 'CARRIER MIDI UNIKKO', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/0dc524ffc3a542feafba01fdaf066942.jpg', NULL, NULL),
(018804, 'CARRIER MIDI UNIKKO', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/d3992366813a44278ab2bea4e62fd766.jpg', NULL, NULL),
(018805, 'CARRIER MIDI UNIKKO', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/0de69e50c35f4d7f8fdf3f07ff14c223.jpg', NULL, NULL),
(018806, 'VIHKIRUUSU BAG 43X44', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/cb212f5bca0b40e6af03c9f35c88f338.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/81ee843edbdb4caa8b5f37c3272bc618.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/44a4ab7adb114c3fb5ac192f8a8a1d7d.jpg'),
(018807, 'MONO MINI TOTE SOLID', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/1515580f7ba34335a1ad88d965d3ea1b.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/15856857dd004a32a2552e9259f2a09e.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/3d2bb7801ae1477b8e026469296d887b.jpg'),
(018808, 'Smartbag Pieni Unikko', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/728d0f4b08b4452d91f6a08fd243850d.webp', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/23cb42aae6b042e08ec6ac0b22ac2778.webp', NULL),
(018809, 'SMARTBAG MARILOGO', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/69bcb4b304d7404ab9d47575011b44a8.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/da682b46faca46ca879fb659e4af03ea.jpg', NULL),
(018810, 'MONO BACKPACK MINI UNIKKO', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/694db011e52a40e584bbfbea53589477.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/8a3a4d4597474ef49f7e7860d215f4f5.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/03ae5a20a069415a942ad4ab79427f35.jpg'),
(018811, 'SMARTSACK PIKKUINEN UNIKKO', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/fd9a4a78c7d8422883cfa5de0c0101d5.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/3d5dca745b4742fbadea1791b1ef1830.jpg', NULL),
(018812, 'MONO BACKPACK SOLID', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/22dcf3ca4e734f87ab69f7ff6bbf4338.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/a12723142a804c6c9d27f0924a03152c.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/879b7f6cffa5427e84f3f141bfc75d86.jpg'),
(018813, 'SMARTSACK LOGO', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/fdc7fe197a314ccfa8a0e8c60fb77d11.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/3f1c9d0f5215457380179d66ad11d24e.jpg', 'https://media.tanachira.co.th/rec/production/marimekko/media/products/e81ef7c288dd4a33ac3819b0220fee15.jpg'),

(028801, 'Braylynn Backpack', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf180_blk000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf180_blk000_3_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', NULL),
(028802, 'Sera L Tote Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs044_red200_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs044_red200_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs044_red200_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028803, 'Zinnia Tote Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf269_ylw000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf269_ylw000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf269_ylw000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028804, 'Zinnia Tote Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf269_blk000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf269_blk000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf269_blk000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028805, 'Piazza S Top Handle Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_red200_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_red200_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_red200_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028806, 'Piazza S Top Handle Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_wht600_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_wht600_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs165_wht600_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028807, 'Arisa S Handbag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs014_grn000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs014_grn000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll24cbs014_grn000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028808, 'Mellow S Shoulder Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23wbf058_ylw000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23wbf058_ylw000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23wbf058_ylw000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028809, 'Mellow S Shoulder Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23wbf058_gry100_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23wbf058_gry100_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23wbf058_gry100_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(028810, 'Braylynn Top Handle M Bag', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf179_beg100_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf179_beg100_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaccs.com/media/catalog/product/l/l/ll23fbf179_beg100_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),

(038801, 'Denimdos Bag', 'https://www.lynaround.com/media/catalog/product/a/2/a24c6wg007_blu000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c6wg007_blu000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c6wg007_blu000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038802, 'Dalia Bag', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wg011_beg000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wg011_beg000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wg011_beg000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038803, 'Draguno Bag', 'https://www.lynaround.com/media/catalog/product/a/2/a24c6wg001_red000_1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c6wg001_red000_2_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c6wg001_red000_3_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038804, 'Blossania Bag', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wg022_ppl100_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wg022_ppl100_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wg022_ppl100_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038805, 'Blysee Wallet', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wl002_pnk000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wl002_pnk000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wl002_pnk000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038806, 'Elvie Wallet', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wl002_blk000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wl002_blk000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wl002_blk000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038807, 'Kolby Bag', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wl001_wht000_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wl001_wht000_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c2wl001_wht000_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038808, 'Mae Wallet', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wl001_blu800_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wl001_blu800_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wl001_blu800_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg'),
(038809, 'Emille Wallet', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wg009_wht010_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', 'https://www.lynaround.com/media/catalog/product/a/2/a24c1wg009_wht010_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1123&width=795&canvas=795:1123.jpg', NULL);

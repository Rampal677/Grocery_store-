
const productImage=[
    "assets/image/Product/product1.jpg",
    "assets/image/Product/product2.jpg",
    "assets/image/Product/product3.jpg",
    "assets/image/Product/product4.jpg",
    "assets/image/Product/product5.jpg",
    "assets/image/Product/product6.jpg",
    "assets/image/Product/product7.jpg",
    "assets/image/Product/product8.jpg",
    "assets/image/Product/product9.jpg",
    "assets/image/Product/product10.jpg",
    "assets/image/Product/product11.jpg",
    "assets/image/Product/product12.jpg",
    "assets/image/Product/product13.jpg",
    "assets/image/Product/product14.jpg",
    "assets/image/Product/product15.jpg",
    "assets/image/Product/product16.jpg",
    "assets/image/Product/product17.jpg",
    "assets/image/Product/product18.jpg",
    "assets/image/Product/product19.jpg",
    "assets/image/Product/product20.jpg",
    "assets/image/Product/product21.jpg",
    "assets/image/Product/product22.jpg",
    "assets/image/Product/product23.jpg",
    "assets/image/Product/product24.jpg",
    "assets/image/Product/product25.jpg",
    "assets/image/Product/product26.jpg",
    "assets/image/Product/product27.jpg",
    "assets/image/Product/product28.jpg",
    "assets/image/Product/product29.jpg",
    "assets/image/Product/product30.jpg",
    "assets/image/Product/product31.jpg",
    "assets/image/Product/product32.jpg",
    "assets/image/Product/product33.jpg",
    "assets/image/Product/product34.jpg",
    "assets/image/Product/product35.jpg",
    "assets/image/Product/product36.jpg",
      
];
 
const product =[              
   {
   name:"Chili ",
   img:productImage[0],    
   price:50
},
{
    name:"Tomato",
    img:productImage[1],     
    price:80
 },
 {
    name:"Butterhead lettuce",
    img:productImage[2],   
    price:100
 },
 {
    name:"Green Apple",
    img:productImage[3],   
    price:120
 },
 {
    name:"Passion fruit",
    img:productImage[4],   
    price:55
 },
 {
    name:"Key lime",
    img:productImage[5],   
    price:33
 },
 {
    name:"Broccoli",
    img:productImage[6],   
    price:55
 },
 {
    name:"Olive",
    img:productImage[7],   
    price:66
 },
 {
    name:"Cabbage",
    img:productImage[8],   
    price:77
 },
 {
    name:"Brinjal",
    img:productImage[9],   
    price:66
 },
 {
    name:"Calabacin blanco",
    img:productImage[10],   
    price:14
 },
 {
    name:"Mango",
    img:productImage[11],   
    price:36
 },
 {
    name:"White broccoli",
    img:productImage[12],   
    price:75
 },
 {
    name:"Grapes",
    img:productImage[13],   
    price:200
 },
 {
    name:"Papaya",
    img:productImage[14],   
    price:150
 },
 {
    name:"Stawberrie",
    img:productImage[15],   
    price:500
 },
 {
    name:"kiwi fruit",
    img:productImage[16],   
    price:80
 },
 {
    name:"Orange",
    img:productImage[17],   
    price:100
 },
 {
    name:"Pineapple",
    img:productImage[18],   
    price:60
 },
 {
    name:"Pomogranate",
    img:productImage[19],   
    price:300
 },
 {
    name:"Pear",
    img:productImage[20],   
    price:120
 },
 {
    name:"Kabocha Squash",
    img:productImage[21],   
    price:124
 },
 {
    name:"Green peas",
    img:productImage[22],   
    price:80
 },
 {
    name:"Potato",
    img:productImage[23],   
    price:32
 },
 {
    name:"Garlic",
    img:productImage[24],   
    price:45
 },
 {
    name:"Calabash",
    img:productImage[25],   
    price:50
 },
 {
    name:"Okra",
    img:productImage[26],   
    price:30
 },
 {
    name:"Zanahoria",
    img:productImage[27],   
    price:60
 },
 {
    name:"Galangal",
    img:productImage[28],   
    price:64
 },
 {
    name:"Star fruit",
    img:productImage[29],   
    price:85
 },
 {
    name:"Onion",
    img:productImage[30],   
    price:50
 },
 {
    name:"Bitter melon",
    img:productImage[31],   
    price:80
 },
 {
    name:"Apple",
    img:productImage[32],   
    price:140
 },
 {
    name:"white melon",
    img:productImage[33],   
    price:100
 },
 {
    name:"radish",
    img:productImage[34],   
    price:80
 },
 {
    name:"chinese lychee",
    img:productImage[35],   
    price:90
 }, 
];
//card 1
document.getElementById("p1-card-img").src = product[0].img;
document.getElementById("p1-card-title").innerHTML = product[0].name;
document.getElementById("p1-card-price").innerHTML = "₹"+product[0].price+" kg";

//card 2
document.getElementById("p2-card-img").src = product[1].img;
document.getElementById("p2-card-title").innerHTML = product[1].name;
document.getElementById("p2-card-price").innerHTML = "₹"+product[1].price+" kg";

//card 3
document.getElementById("p3-card-img").src = product[2].img;
document.getElementById("p3-card-title").innerHTML = product[2].name;
document.getElementById("p3-card-price").innerHTML = "₹"+product[2].price+" kg";

//card 4
document.getElementById("p4-card-img").src = product[3].img;
document.getElementById("p4-card-title").innerHTML = product[3].name;
document.getElementById("p4-card-price").innerHTML = "₹"+product[3].price+" kg";

//card 5
document.getElementById("p5-card-img").src = product[4].img;
document.getElementById("p5-card-title").innerHTML = product[4].name;
document.getElementById("p5-card-price").innerHTML = "₹"+product[4].price+" kg";

//card 6
document.getElementById("p6-card-img").src = product[5].img;
document.getElementById("p6-card-title").innerHTML = product[5].name;
document.getElementById("p6-card-price").innerHTML = "₹"+product[5].price+" kg";

//card 7
document.getElementById("p7-card-img").src = product[6].img;
document.getElementById("p7-card-title").innerHTML = product[6].name;
document.getElementById("p7-card-price").innerHTML = "₹"+product[6].price+" kg";

//card 8
document.getElementById("p8-card-img").src = product[7].img;
document.getElementById("p8-card-title").innerHTML = product[7].name;
document.getElementById("p8-card-price").innerHTML = "₹"+product[7].price+" kg";

//card 9
document.getElementById("p9-card-img").src = product[8].img;
document.getElementById("p9-card-title").innerHTML = product[8].name;
document.getElementById("p9-card-price").innerHTML = "₹"+product[8].price+" kg";

//card 10
document.getElementById("p10-card-img").src = product[9].img;
document.getElementById("p10-card-title").innerHTML = product[9].name;
document.getElementById("p10-card-price").innerHTML = "₹"+product[9].price+" kg";

//card 11
document.getElementById("p11-card-img").src = product[10].img;
document.getElementById("p11-card-title").innerHTML = product[10].name;
document.getElementById("p11-card-price").innerHTML = "₹"+product[10].price+" kg";

//card 12
document.getElementById("p12-card-img").src = product[11].img;
document.getElementById("p12-card-title").innerHTML = product[11].name;
document.getElementById("p12-card-price").innerHTML = "₹"+product[11].price+" kg";

//card 13
document.getElementById("p13-card-img").src = product[12].img;
document.getElementById("p13-card-title").innerHTML = product[12].name;
document.getElementById("p13-card-price").innerHTML = "₹"+product[12].price+" kg";

//card 14
document.getElementById("p14-card-img").src = product[13].img;
document.getElementById("p14-card-title").innerHTML = product[13].name;
document.getElementById("p14-card-price").innerHTML = "₹"+product[13].price+" kg";

//card 15
document.getElementById("p15-card-img").src = product[14].img;
document.getElementById("p15-card-title").innerHTML = product[14].name;
document.getElementById("p15-card-price").innerHTML = "₹"+product[14].price+" kg";

//card 16
document.getElementById("p16-card-img").src = product[15].img;
document.getElementById("p16-card-title").innerHTML = product[15].name;
document.getElementById("p16-card-price").innerHTML = "₹"+product[15].price+" kg";

//card 17
document.getElementById("p17-card-img").src = product[16].img;
document.getElementById("p17-card-title").innerHTML = product[16].name;
document.getElementById("p17-card-price").innerHTML = "₹"+product[16].price+" kg";

//card 18
document.getElementById("p18-card-img").src = product[17].img;
document.getElementById("p18-card-title").innerHTML = product[17].name;
document.getElementById("p18-card-price").innerHTML = "₹"+product[17].price+" kg";

//card 19
document.getElementById("p19-card-img").src = product[18].img;
document.getElementById("p19-card-title").innerHTML = product[18].name;
document.getElementById("p19-card-price").innerHTML = "₹"+product[18].price+" kg";

//card 20
document.getElementById("p20-card-img").src = product[19].img;
document.getElementById("p20-card-title").innerHTML = product[19].name;
document.getElementById("p20-card-price").innerHTML = "₹"+product[19].price+" kg";

//card 21
document.getElementById("p21-card-img").src = product[20].img;
document.getElementById("p21-card-title").innerHTML = product[20].name;
document.getElementById("p21-card-price").innerHTML = "₹"+product[20].price+" kg";

//card 22
document.getElementById("p22-card-img").src = product[21].img;
document.getElementById("p22-card-title").innerHTML = product[21].name;
document.getElementById("p22-card-price").innerHTML = "₹"+product[21].price+" kg";

//card 23
document.getElementById("p23-card-img").src = product[22].img;
document.getElementById("p23-card-title").innerHTML = product[22].name;
document.getElementById("p23-card-price").innerHTML = "₹"+product[22].price+" kg";

//card 24
document.getElementById("p24-card-img").src = product[23].img;
document.getElementById("p24-card-title").innerHTML = product[23].name;
document.getElementById("p24-card-price").innerHTML = "₹"+product[23].price+" kg";

//card 25
document.getElementById("p25-card-img").src = product[24].img;
document.getElementById("p25-card-title").innerHTML = product[24].name;
document.getElementById("p25-card-price").innerHTML = "₹"+product[24].price+" kg";

//card 26
document.getElementById("p26-card-img").src = product[25].img;
document.getElementById("p26-card-title").innerHTML = product[25].name;
document.getElementById("p26-card-price").innerHTML = "₹"+product[25].price+" kg";

//card 27
document.getElementById("p27-card-img").src = product[26].img;
document.getElementById("p27-card-title").innerHTML = product[26].name;
document.getElementById("p27-card-price").innerHTML = "₹"+product[26].price+" kg";

//card 28
document.getElementById("p28-card-img").src = product[27].img;
document.getElementById("p28-card-title").innerHTML = product[27].name;
document.getElementById("p28-card-price").innerHTML = "₹"+product[27].price+" kg";

//card 29
document.getElementById("p29-card-img").src = product[28].img;
document.getElementById("p29-card-title").innerHTML = product[28].name;
document.getElementById("p29-card-price").innerHTML = "₹"+product[28].price+" kg";

//card 30
document.getElementById("p30-card-img").src = product[29].img;
document.getElementById("p30-card-title").innerHTML = product[29].name;
document.getElementById("p30-card-price").innerHTML = "₹"+product[29].price+" kg";

//card 31
document.getElementById("p31-card-img").src = product[30].img;
document.getElementById("p31-card-title").innerHTML = product[30].name;
document.getElementById("p31-card-price").innerHTML = "₹"+product[30].price+" kg";

//card 32
document.getElementById("p32-card-img").src = product[31].img;
document.getElementById("p32-card-title").innerHTML = product[31].name;
document.getElementById("p32-card-price").innerHTML = "₹"+product[31].price+" kg";

//card 33
document.getElementById("p33-card-img").src = product[32].img;
document.getElementById("p33-card-title").innerHTML = product[32].name;
document.getElementById("p33-card-price").innerHTML = "₹"+product[32].price+" kg";

//card 34
document.getElementById("p34-card-img").src = product[33].img;
document.getElementById("p34-card-title").innerHTML = product[33].name;
document.getElementById("p34-card-price").innerHTML = "₹"+product[33].price+" kg";

//card 35
document.getElementById("p35-card-img").src = product[34].img;
document.getElementById("p35-card-title").innerHTML = product[34].name;
document.getElementById("p35-card-price").innerHTML = "₹"+product[34].price+" kg";

//card 36
document.getElementById("p36-card-img").src = product[35].img;
document.getElementById("p36-card-title").innerHTML = product[35].name;
document.getElementById("p36-card-price").innerHTML = "₹"+product[35].price+" kg";



// for mobile view

//card 1
document.getElementById("p1-card-img-sm").src = product[0].img;
document.getElementById("p1-card-title-sm").innerHTML = product[0].name;
document.getElementById("p1-card-price-sm").innerHTML = "₹"+product[0].price+" kg";

//card 2
document.getElementById("p2-card-img-sm").src = product[1].img;
document.getElementById("p2-card-title-sm").innerHTML = product[1].name;
document.getElementById("p2-card-price-sm").innerHTML = "₹"+product[1].price+" kg";

//card 3
document.getElementById("p3-card-img-sm").src = product[2].img;
document.getElementById("p3-card-title-sm").innerHTML = product[2].name;
document.getElementById("p3-card-price-sm").innerHTML = "₹"+product[2].price+" kg";

//card 4
document.getElementById("p4-card-img-sm").src = product[3].img;
document.getElementById("p4-card-title-sm").innerHTML = product[3].name;
document.getElementById("p4-card-price-sm").innerHTML = "₹"+product[3].price+" kg";

//card 5
document.getElementById("p5-card-img-sm").src = product[4].img;
document.getElementById("p5-card-title-sm").innerHTML = product[4].name;
document.getElementById("p5-card-price-sm").innerHTML = "₹"+product[4].price+" kg";

//card 6
document.getElementById("p6-card-img-sm").src = product[5].img;
document.getElementById("p6-card-title-sm").innerHTML = product[5].name;
document.getElementById("p6-card-price-sm").innerHTML = "₹"+product[5].price+" kg";

//card 7
document.getElementById("p7-card-img-sm").src = product[6].img;
document.getElementById("p7-card-title-sm").innerHTML = product[6].name;
document.getElementById("p7-card-price-sm").innerHTML = "₹"+product[6].price+" kg";

//card 8
document.getElementById("p8-card-img-sm").src = product[7].img;
document.getElementById("p8-card-title-sm").innerHTML = product[7].name;
document.getElementById("p8-card-price-sm").innerHTML = "₹"+product[7].price+" kg";

//card 9
document.getElementById("p9-card-img-sm").src = product[8].img;
document.getElementById("p9-card-title-sm").innerHTML = product[8].name;
document.getElementById("p9-card-price-sm").innerHTML = "₹"+product[8].price+" kg";

//card 10
document.getElementById("p10-card-img-sm").src = product[9].img;
document.getElementById("p10-card-title-sm").innerHTML = product[9].name;
document.getElementById("p10-card-price-sm").innerHTML = "₹"+product[9].price+" kg";

//card 11
document.getElementById("p11-card-img-sm").src = product[10].img;
document.getElementById("p11-card-title-sm").innerHTML = product[10].name;
document.getElementById("p11-card-price-sm").innerHTML = "₹"+product[10].price+" kg";

//card 12
document.getElementById("p12-card-img-sm").src = product[11].img;
document.getElementById("p12-card-title-sm").innerHTML = product[11].name;
document.getElementById("p12-card-price-sm").innerHTML = "₹"+product[11].price+" kg";

//card 13
document.getElementById("p13-card-img-sm").src = product[12].img;
document.getElementById("p13-card-title-sm").innerHTML = product[12].name;
document.getElementById("p13-card-price-sm").innerHTML = "₹"+product[12].price+" kg";

//card 14
document.getElementById("p14-card-img-sm").src = product[13].img;
document.getElementById("p14-card-title-sm").innerHTML = product[13].name;
document.getElementById("p14-card-price-sm").innerHTML = "₹"+product[13].price+" kg";

//card 15
document.getElementById("p15-card-img-sm").src = product[14].img;
document.getElementById("p15-card-title-sm").innerHTML = product[14].name;
document.getElementById("p15-card-price-sm").innerHTML = "₹"+product[14].price+" kg";

//card 16
document.getElementById("p16-card-img-sm").src = product[15].img;
document.getElementById("p16-card-title-sm").innerHTML = product[15].name;
document.getElementById("p16-card-price-sm").innerHTML = "₹"+product[15].price+" kg";

//card 17
document.getElementById("p17-card-img-sm").src = product[16].img;
document.getElementById("p17-card-title-sm").innerHTML = product[16].name;
document.getElementById("p17-card-price-sm").innerHTML = "₹"+product[16].price+" kg";

//card 18
document.getElementById("p18-card-img-sm").src = product[17].img;
document.getElementById("p18-card-title-sm").innerHTML = product[17].name;
document.getElementById("p18-card-price-sm").innerHTML = "₹"+product[17].price+" kg";

//card 19
document.getElementById("p19-card-img-sm").src = product[18].img;
document.getElementById("p19-card-title-sm").innerHTML = product[18].name;
document.getElementById("p19-card-price-sm").innerHTML = "₹"+product[18].price+" kg";

//card 20
document.getElementById("p20-card-img-sm").src = product[19].img;
document.getElementById("p20-card-title-sm").innerHTML = product[19].name;
document.getElementById("p20-card-price-sm").innerHTML = "₹"+product[19].price+" kg";

//card 21
document.getElementById("p21-card-img-sm").src = product[20].img;
document.getElementById("p21-card-title-sm").innerHTML = product[20].name;
document.getElementById("p21-card-price-sm").innerHTML = "₹"+product[20].price+" kg";

//card 22
document.getElementById("p22-card-img-sm").src = product[21].img;
document.getElementById("p22-card-title-sm").innerHTML = product[21].name;
document.getElementById("p22-card-price-sm").innerHTML = "₹"+product[21].price+" kg";

//card 23
document.getElementById("p23-card-img-sm").src = product[22].img;
document.getElementById("p23-card-title-sm").innerHTML = product[22].name;
document.getElementById("p23-card-price-sm").innerHTML = "₹"+product[22].price+" kg";

//card 24
document.getElementById("p24-card-img-sm").src = product[23].img;
document.getElementById("p24-card-title-sm").innerHTML = product[23].name;
document.getElementById("p24-card-price-sm").innerHTML = "₹"+product[23].price+" kg";

//card 25
document.getElementById("p25-card-img-sm").src = product[24].img;
document.getElementById("p25-card-title-sm").innerHTML = product[24].name;
document.getElementById("p25-card-price-sm").innerHTML = "₹"+product[24].price+" kg";

//card 26
document.getElementById("p26-card-img-sm").src = product[25].img;
document.getElementById("p26-card-title-sm").innerHTML = product[25].name;
document.getElementById("p26-card-price-sm").innerHTML = "₹"+product[25].price+" kg";

//card 27
document.getElementById("p27-card-img-sm").src = product[26].img;
document.getElementById("p27-card-title-sm").innerHTML = product[26].name;
document.getElementById("p27-card-price-sm").innerHTML = "₹"+product[26].price+" kg";

//card 28
document.getElementById("p28-card-img-sm").src = product[27].img;
document.getElementById("p28-card-title-sm").innerHTML = product[27].name;
document.getElementById("p28-card-price-sm").innerHTML = "₹"+product[27].price+" kg";

//card 29
document.getElementById("p29-card-img-sm").src = product[28].img;
document.getElementById("p29-card-title-sm").innerHTML = product[28].name;
document.getElementById("p29-card-price-sm").innerHTML = "₹"+product[28].price+" kg";

//card 30
document.getElementById("p30-card-img-sm").src = product[29].img;
document.getElementById("p30-card-title-sm").innerHTML = product[29].name;
document.getElementById("p30-card-price-sm").innerHTML = "₹"+product[29].price+" kg";

//card 31
document.getElementById("p31-card-img-sm").src = product[30].img;
document.getElementById("p31-card-title-sm").innerHTML = product[30].name;
document.getElementById("p31-card-price-sm").innerHTML = "₹"+product[30].price+" kg";

//card 32
document.getElementById("p32-card-img-sm").src = product[31].img;
document.getElementById("p32-card-title-sm").innerHTML = product[31].name;
document.getElementById("p32-card-price-sm").innerHTML = "₹"+product[31].price+" kg";

//card 33
document.getElementById("p33-card-img-sm").src = product[32].img;
document.getElementById("p33-card-title-sm").innerHTML = product[32].name;
document.getElementById("p33-card-price-sm").innerHTML = "₹"+product[32].price+" kg";

//card 34
document.getElementById("p34-card-img-sm").src = product[33].img;
document.getElementById("p34-card-title-sm").innerHTML = product[33].name;
document.getElementById("p34-card-price-sm").innerHTML = "₹"+product[33].price+" kg";

//card 35
document.getElementById("p35-card-img-sm").src = product[34].img;
document.getElementById("p35-card-title-sm").innerHTML = product[34].name;
document.getElementById("p35-card-price-sm").innerHTML = "₹"+product[34].price+" kg";

//card 36
document.getElementById("p36-card-img-sm").src = product[35].img;
document.getElementById("p36-card-title-sm").innerHTML = product[35].name;
document.getElementById("p36-card-price-sm").innerHTML = "₹"+product[35].price+" kg";


//code for suggestion box for mobile device

//card 1
document.getElementById("p1-card-img-sm-s").src = product[0].img;
document.getElementById("p1-card-title-sm-s").innerHTML = product[0].name;
document.getElementById("p1-card-price-sm-s").innerHTML = "₹"+product[0].price+" kg";

//card 2
document.getElementById("p2-card-img-sm-s").src = product[1].img;
document.getElementById("p2-card-title-sm-s").innerHTML = product[1].name;
document.getElementById("p2-card-price-sm-s").innerHTML = "₹"+product[1].price+" kg";

//card 3
document.getElementById("p3-card-img-sm-s").src = product[2].img;
document.getElementById("p3-card-title-sm-s").innerHTML = product[2].name;
document.getElementById("p3-card-price-sm-s").innerHTML = "₹"+product[2].price+" kg";

//card 4
document.getElementById("p4-card-img-sm-s").src = product[3].img;
document.getElementById("p4-card-title-sm-s").innerHTML = product[3].name;
document.getElementById("p4-card-price-sm-").innerHTML = "₹"+product[3].price+" kg";

//card 5
document.getElementById("p5-card-img-sm-s").src = product[4].img;
document.getElementById("p5-card-title-sm-s").innerHTML = product[4].name;
document.getElementById("p5-card-price-sm-s").innerHTML = "₹"+product[4].price+" kg";

//card 6
document.getElementById("p6-card-img-sm-s").src = product[5].img;
document.getElementById("p6-card-title-sm-s").innerHTML = product[5].name;
document.getElementById("p6-card-price-sm-s").innerHTML = "₹"+product[5].price+" kg";

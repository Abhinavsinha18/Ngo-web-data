const app = require('./app');
// const Razorpay = require('razorpay');
const connect = require('./db')
const Petmodel = require('./models/Pets.model')

// const instance = new Razorpay({
//     key_id :  process.env.RAZORPAY_API_KEY ,
//     key_secret : process.env.RAZORPAY_API_SECRET
// })


app.get('/',async (req,res)=>{
    // await Petmodel.insertMany( [
    //     {
    //       "id" : 1,
    //       "img":  "https://user-images.githubusercontent.com/94513021/220204205-5ff17b1b-8f56-458d-9e02-3b3d61f4b1dc.JPG",
    //       "name": "Browny",
    //       "Status" : "Undergoing Treatment",
    //       "Species" : "Dog",
    //       "Breed" : "Indie",
    //       "Color" : "Brown",
    //       "age":"1 Year",
    //       "about":
    //         "Browny has become another victim of brutality. This 2-month-old was found on the streets of Mumbai with horrific bites on his tiny body, even his private parts were not spared. Please help this little boy by donating towards his treatment."
    //     },
    //     {  "id":2,
    //       "img": "https://user-images.githubusercontent.com/94513021/220204151-65b63da1-e651-4998-9161-096ccba83c8a.JPG",
    //       "name": "Lily",
    //       "Color" : "Grey and black",
    //       "Species" : "Dog",
    //       "age" : 1,
    //       "Breed" : "Indie",
    //       "Status" :"Undergoing Treatment",
    //       "about":
    //         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eius eveniet cupiditate fugiat modi repellendus earum labore dolorem quas officia."
    //     },
    //     { 
    //       "id":3,
    //       "img": "https://user-images.githubusercontent.com/94513021/220204143-cc9dd7f1-c34c-46a3-9ded-4a3c7c4baded.JPG",
    //       "Species" : "Dog",
    //       "Status" :"Undergoing Treatment",
    //       "Color" : "Grey and black",
    //       "Breed" : "Indie",
    //       "age" : 1,
    //       "name": "Chikki",
    //       "about":
    //         "Chikki was found injured in Malad West, Mumbai. She was found in severe pain with her tail completely severed from her body. Please support her on her road to recovery by donating towards her treatment."
    //     },
    //     {  
    //       "id": 4,
    //       "img": "https://user-images.githubusercontent.com/94513021/220204124-944a8c3a-8d4b-4a88-b5b4-748aa05cb9d8.JPG",
    //       "Species" : "Dog",
    //       "Status" :"Undergoing Treatment",
    //       "Color" : "Grey and black",
    //       "Breed" : "Indie",
    //       "age" : 1,
    //       "name": "Nemo",
    //       "about":
    //         "Nemo is a 2-month-old puppy with a fractured leg who was abandoned and left to die. This courageous girl is currently receiving treatment at our hospital. Please donate to help her get better. All contributions will be used to fund her treatment and care."
    //     },
    //     {  
    //       "id": 5,
    //       "img": "https://user-images.githubusercontent.com/94513021/220204164-3a68fced-52cf-4687-9d3b-f8b5220a7963.JPG",
    //       "Species" : "Dog",
    //       "Status" :"Undergoing Treatment",
    //       "Color" : "Grey and black",
    //       "Breed" : "Indie",
    //       "age" : 1,
    //       "name": "Shega",
    //       "about":
    //         "Nemo is a 2-month-old puppy with a fractured leg who was abandoned and left to die. This courageous girl is currently receiving treatment at our hospital. Please donate to help her get better. All contributions will be used to fund her treatment and care."
    //     },
    //     {  
    //       "id": 6,
    //       "img": "https://user-images.githubusercontent.com/94513021/220204195-7cbf86a1-b1b5-40c3-b708-ed7e223f2aee.jpg",
    //       "Species" : "Dog",
    //       "Status" :"Undergoing Treatment",
    //       "Color" : "Grey and black",
    //       "Breed" : "Indie",
    //       "age" : 1,
    //       "name": "Sheru",
    //       "about":
    //         "Nemo is a 2-month-old puppy with a fractured leg who was abandoned and left to die. This courageous girl is currently receiving treatment at our hospital. Please donate to help her get better. All contributions will be used to fund her treatment and care."
    //     },
    //     {  
    //       "id": 7,
    //       "img": "https://user-images.githubusercontent.com/94513021/220204225-d2ea9fb3-8929-4fbf-82ae-2a2744e89470.JPG",
    //       "Species" : "Dog",
    //       "Status" :"Undergoing Treatment",
    //       "Color" : "Grey and black",
    //       "Breed" : "Indie",
    //       "age" : 1,
    //       "name": "Sheru",
    //       "about":
    //         "Nemo is a 2-month-old puppy with a fractured leg who was abandoned and left to die. This courageous girl is currently receiving treatment at our hospital. Please donate to help her get better. All contributions will be used to fund her treatment and care."
    //     },
    //     {  
    //       "id": 8,
    //       "img": "https://user-images.githubusercontent.com/94513021/220204235-6eff7e5d-6fd5-41f0-be79-3cd050ecedbd.JPG",
    //       "Species" : "Dog",
    //       "Status" :"Undergoing Treatment",
    //       "Color" : "Grey and black",
    //       "Breed" : "Indie",
    //       "age" : 1,
    //       "name": "Ruby",
    //       "about":
    //         "Nemo is a 2-month-old puppy with a fractured leg who was abandoned and left to die. This courageous girl is currently receiving treatment at our hospital. Please donate to help her get better. All contributions will be used to fund her treatment and care."
    //     },
    //     {
    //       "id" : 9,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/browny/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2023/01/Browny_Animal-Case.jpg",
    //       "name": "Browny",
    //       "about": "Browny has become another victim of brutality. This 2-month-old was found on the streets of Mumbai with horrific bites on his tiny body, even his private parts were not spared. Please help this little boy by donating towards his treatment."
    //     },
    //     {
    //       "id" : 10,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/chikki/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2023/01/Animal-Case-Chikki02.jpg",
    //       "name": "Chikki",
    //       "about": "Chikki was found injured in Malad West, Mumbai. She was found in severe pain with her tail completely severed from her body. Please support her on her road to recovery by donating towards her treatment."
    //     },
    //     {
    //       "id" : 11,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/patch/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/11/Web_Animal-Case-Patch.jpg",
    //       "name": "Patch",
    //       "about": "Patch was found with a terrible wound on his paw. He is doing everything he can to recover from his injury, but needs your support. Please help Patch by donating towards his treatment and care."
    //     },
    //     {
    //       "id" : 12,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/cindy/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/11/Animal-Cases-copy_Cindy-.jpg",
    //       "name": "Cindy",
    //       "about": "Cindy was admitted with a gruesome maggot-infested wound and a paralysed body. She desperately needs your help to get the treatment and care she needs. Please help Cindy by donating towards her recovery."
    //     },
    //     {
    //       "id" : 13,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/nemo/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/11/Animal-Case-web-10.jpg",
    //       "name": "Nemo",
    //       "about": "Nemo is a 2-month-old puppy with a fractured leg who was abandoned and left to die. This courageous girl is currently receiving treatment at our hospital. Please donate to help her get better. All contributions will be used to fund her treatment and care."
    //     },
    //     {
    //       "id" : 14,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/luca/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/10/Luca-web.jpg",
    //       "name": "Luca",
    //       "about": "Luca was brought in with a horrific abscess wound which is causing him immense pain and discomfort. He is currently admitted in hospital, receiving treatment. Please donate towards his recovery."
    //     },
    //     {
    //       "id" : 15,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/phelp/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/10/Phelp-web.jpg",
    //       "name": "Phelp",
    //       "about": "Phelp was found with a severe maggot infestation with parts of his leg eaten away. This poor guy is also suffering from a viral infection. He is trying his best to brave the pain but desperately needs your help to survive. Please help Phelp receive medical treatment and care, donate now."
    //     },
    //     {
    //       "id" : 16,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/nano/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/10/Nano-web-03.jpg",
    //       "name": "Nano",
    //       "about": "Nano was admitted after sustaining a severe head injury. He is currently receiving medical attention and his condition is stable. Please assist him in making a full recovery. All contributions will be used to fund his treatment and care."
    //     },
    //     {
    //       "id" : 9,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/johny/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/10/John-web.jpg",
    //       "name": "Johny",
    //       "about": "Johny is suffering from excruciating maggot-infested wounds. He is trying his best to stay strong and survive but he’s in desperate need of your support. Please help Johnny by donating towards his treatment and care."
    //     },
    //     {
    //       "id" : 17,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/missy/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/09/Missy-web.jpg",
    //       "name": "Missy",
    //       "about": "Missy was admitted to our hospital with a wound on her neck and requires immediate treatment. She is braving the pain but needs your help to recover. Please donate towards Missy’s treatment and care."
    //     },
    //     {
    //       "id" : 18,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/munmun/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/07/AnimalCase-Munmun-web.jpg",
    //       "name": "Munmun",
    //       "about": "Munmun was found with severe injuries after getting into a train accident. She is pregnant and risks losing her life as well as those of her unborn pups. Please help Munmum in her recovery."
    //     },
    //     {
    //       "id" : 19,
    //       "elementor-post__thumbnail__link href": "https://www.amtmindia.org/animal/monty/",
    //       "img": "https://www.amtmindia.org/wp-content/uploads/2022/04/Monty-08.jpeg",
    //       "name": "Monty",
    //       "about": "Found with a broken leg, he is recovering at our hospital & needs funds for treatment."
    //     }
    
    //   ]
    // )
    let  data = await Petmodel.find();

    res.send(data);
})


app.listen(5000,async()=>{
try {
    await connect;
    console.log("Connected");
} catch (error) {
    console.log(error);
}

    console.log("server is listining " );
})

// module.exports = instance;
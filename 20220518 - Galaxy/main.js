let pageData={
    productName:"訂張票到月球",
    productDescription:"月球之旅",
    imageSrc:[
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg"
    ],
    h2ClassController:{
        centered:true,
        colorFont:true
    },
    pStyleController:{
        color:'blue',
        'margin-left':'50px',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        wigth:'50%'
    },
    imageAlt:"Photo from space",
    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatsAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvailable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvailable:2,
            earlyBird:false
        },
    ]
};

const App = Vue.createApp({
    data(){
        return pageData;
    }
});

App.mount("#app");
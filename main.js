const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:1, size:'sm'},
                {id:2, size:'m'},
                {id:3, size:'l'},
                {id:4, size:'x'},
                {id:5, size:'xl'}
            ]
        }
    }
})

<template>
<div class="container">
  <div class="card" style="padding: 10px; margin-top:10px; margin-bottom:10px;">
    <div id="app">
        <header>
          <h3>{{sitename}}</h3>
          <button @click="showCheckout">{{this.cart.length}} Checkout</button>
        </header>
        <div v-if="showProduct">
        <product-list :products ="products" @addProduct='addToCart'></product-list>
        </div>
        <div v-else>
        <checkout :cart="cart" @removeProduct='removeFromCart'></checkout>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkout from './components/Form.vue'
import productList from './components/Products.vue'

export default {
  
        components: {
            productList,
            Checkout
        },
        name: "App",
        data() {
            return {
              showProduct: true,
              sitename:"Afterschool Application",
                cart: [],
                products: [{
                        subject: "Entertainment",
                        location: "Magboro",
                        price: 3220,
                        description: "Come and learn the art of music production",
                        image: 'ent.jpg',
                        inventory: 10,
                        inCart: 0
                    },
                    {
                        subject: "Martial Arts",
                        location: "Costain",
                        price: 2300,
                        description: "Martial arts helps to keep you ready for the battle ahead",
                        image: 'karate.jpg',
                        inventory: 10,
                        inCart: 0
                    },
                    {
                        subject: "Literature",
                        location: "Cameroun",
                        price: 500,
                        description: "Literature helps to build our vocabularies",
                        image: 'product.jpg',
                        inventory: 10,
                        inCart: 0
                    },
                    {
                        subject: "Cultivation",
                        location: "Somolu",
                        price: 980,
                        description: "Cultivating crops",
                        image: 'farm.jpg',
                        inventory: 10,
                        inCart: 0
                    }
                ]
            }
        },
        methods: {
            showCheckout: function(){
                    this.showProduct = this.showProduct ? false : true;
                },
            addToCart(product){
                let added = false;
                this.cart.forEach((product2) => {
                    if(product2.id === product.id){
                         product.inCart++
                         added = true
                    }
                });
                    if(!added){
                      
                        this.cart.push(product)
                        product.inCart = 1
                    }    
                        product.inventory--; 
             
            },
            removeFromCart(product){
                this.cart.forEach((product2) => {
                    if(product2.id === product.id) {
                        product.inventory++;
                        product.inCart--
                    }
                })
            }    
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

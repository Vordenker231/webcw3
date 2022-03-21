<template>
    <main>
        
        <div v-for="product in products" :key="product.id">
            <h5>{{product.subject}}</h5>
            <figure>
                <img v-bind:src="product.image">
            </figure>
            <p> Description:{{product.description}}</p>
            <p> Location: {{product.location}}</p>
            <p> Price: {{ product.price }} </p>
            <p> Spaces: {{product.inventory}}
        
            </p>
                <!-- The button will display when 'Add to Cart is True -->                        
                 <!--When we click the Add To Cart are now passing the product and its ID to the function as parameters-->
            <button @click='addToCart(product)'> Add to Cart </button>  
         </div>
        
    </main>
</template>

<script>
    export default {
        name: "productList",
        props: ['products'],
        data() {
            
            return {
               
            };
        },
        methods: {
            addToCart(product){
                this.$emit('addProduct',product)
            }
        }
    };
</script>

<style>
</style>
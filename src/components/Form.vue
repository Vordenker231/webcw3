<template>
    <div>
        <h3>Checkout</h3>
        <h4>Added Products</h4>
        <div v-for="product in cart" :key="product.id">
            {{product.subject}} {{product.inCart}}
            <button @click="removeProduct(product)">Remove</button>
        </div>
        <p>
            <strong> Name </strong> <input v-model="name"/>
            <strong> Address </strong> <input v-model="address"/>
            <button > Submit </button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Checkout",
        props: ['cart'],
        data() {
            return {
                name:"",
                address:"",
            };
        },
        methods: {
            removeProduct(product) {
                this.$emit("removeProduct", product);
            },
            submitOrder() {
                alert("Order Placed by " + this.name + " at " + this.address);
            }
        }
    };
</script>

<style>
</style>
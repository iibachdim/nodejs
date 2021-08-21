<template>
    <div>
        <div class="control">
            <router-link :to="{ name: 'Index-Account' }" class="button is-info mt-5">
                Account
            </router-link>
        </div>
        <div class="control">
            <router-link :to="{ name: 'Index-Product' }" class="button is-secondary mt-5">
                Product
            </router-link>
        </div>
        <div class="control">
            <router-link :to="{ name: 'Index-Users' }" class="button is-dark mt-5">
                User
            </router-link>
        </div>
    </div>
</template>

<style>
</style>
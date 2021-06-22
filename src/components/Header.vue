<template>
    <b-navbar class="foo" >
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img class="foo" style="height: 300px"
                    src="https://res.cloudinary.com/duvzhauq9/image/upload/c_crop,h_227,w_204,x_0,y_0/v1624148557/logo_bfuoal.png"
                    alt="Logo"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#" label="List">
            <router-link to="/list">List</router-link> 

            </b-navbar-item>
            <b-navbar-item label="Events" class="foo" href="#">
            <router-link clas="foo" :to="{ path: '/home' }">Events</router-link>
                
            </b-navbar-item>
            <b-navbar-dropdown class="foo" label="">
                <b-navbar-item href="#">
                   <router-link to="/about">About</router-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                    <router-link to="/contact">Contact</router-link>
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item >
                <div >
                 <router-link to="/register" v-bind:URL="URL" v-if="!loggedIn"><button class="button is-success is-light">Register</button></router-link> 
                    
                        <router-link to="/login" v-bind:URL="URL" v-if="!loggedIn"><button class="button is-success">Login</button></router-link> 
                        <button class="button is-danger" v-if="loggedIn" @click="logout">Logout</button> 
                  
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
.foo a, nav-burg {
color: #151515;
background-color: white;
}
.foo  a:hover {
color: limegreen;
}
.foo  a:focus {
color: limegreen;
}

.foo .navbar-link:not(.is-arrowless)::after {
	border-color: #151515;
	margin-top: -0.55em;
	right: 1.125em;
}
.foo .navbar-item img {
max-height: 64px;
}
a.navbar-burger {
margin-top: 10px;
color:#151515;
}
</style>

<script>

export default {
    name: 'Header',
    props: ['URL', 'loggedIn'],
    methods: {
        logout: function() {
            this.$emit('logout')
        }
    }
    
}
</script>

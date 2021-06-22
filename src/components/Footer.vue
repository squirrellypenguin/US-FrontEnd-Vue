<template>
<footer style="height: 0px" class="navbar footer">
  <div class="content has-text-centered">
    <p class="title-font">
    Urban Safari
  
    </p>
 <i style="padding-top: 10px; font-size: 24px;" v-on:click="scrollToTop" class="fas fa-arrow-up"></i>


    
  </div>
</footer>
</template>


<style>
.content {
display: flex;
flex-grow: 1;
justify-content: space-between;
height:0px;

}
.navbar.footer {
padding-top: 0px;
  background-color: #333;
  color: beige;
  position: fixed;
  bottom: -50px;

  width: 100%;
}

/* Style the links inside the navigation bar */
.navbar.footer a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.navbar.footer a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.navbar.footer a.active {
}
i:hover {
color: limegreen;
}
.title-font {
    padding-top: 5px;
    font-size: 28px;
    font-family: 'Chivo';
    
}
</style>


<script> 

export default {
name: 'Footer',
components: {
  
},
 methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        },
}
</script>









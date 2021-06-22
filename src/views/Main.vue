<!-- <template>

  <div class="main">
  <div class="container">
  <div class="notification" style="background-color:limegreen;">
  <h1>Urban Safari</h1>
  <div class="columns">
  <div class="column">
  <p style="padding: 10px; padding-right: 20px; text-align: justify; background-color: white; border-radius: 10px; color: #151515">Welomce to UrbanSafari, your desittion to catalog the ever increaing invasion of human space from these animal invaders.  Whether it's turkies on the highway or pizz stealing rodent you will find the space to detail these adventures here.</p>
  </div>
  <div class="column">
</div>
</div>
  <p>Explore the reports! If you want to contribute please signup.</p>
  </div>
  </div>
  
  </div>
</template> -->
<template>
  
<div class="font">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification">
          <p style="padding-top: 10px; margin-right: -25px" class="title-font title">Urban Safari</p>
          <p style="padding-left: 20px;  text-align: justify; font-size: 14px" class="mono subtitle">your desittion to catalog the ever increaing incursion on human space from these animal invaders.</p>
        </article>
        <article class="tile shadow is-child notification is-warning">
        
          <p style="text-align: justify ;font-size:14px" class="subtitle">Whether it's turkeys on the highway or a pizza stealing rodent, you will find the space to detail these adventures here.</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
       
          <p class="shadow subtitle">Animals being jerks</p>
          <figure class=" image is-4by3">
            <img src="https://res.cloudinary.com/duvzhauq9/image/upload/v1624370742/6BVNprzp_lbctdu.jpg">
          </figure>
            <figure class="image is-4by3">
            <img src="https://res.cloudinary.com/duvzhauq9/image/upload/v1624370965/jer7_guagsb.jpg">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-dark">
        <p style="font-size: 24px" class="title">Explore the reports! </p>
        <p style="margin-left: -15px;     line-height: 20px;text-align: left; margin-right: -75px" class="mono subtitle">If you want to contribute please signup.</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notifications">
      <div class="content">
        <p class="title"></p>
        <p class="subtitle"></p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</template>
<style scoped src="@/assets/main.css">
.title-font {
    font-family: 'Chivo';
}
.shadow {
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #000;  
  filter: drop-shadow(.5rem .5rem 1rem #e23)/* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
</style>
<script>


  export default {
    //Name property names the component
    name: "main",
    components: {
        
        // ItemMap
      },
      props: ['URL', 'tokens', 'uuid', 'loggedIn'],
    // data property has a function that returns an object with app data
   
  }
</script>
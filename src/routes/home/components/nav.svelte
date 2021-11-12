<script>
    let gradelystars;
    getGradelyStars()
 async function  getGradelyStars(){
    let response = (await fetch("https://api.github.com/repos/generalxhd/gradely2")).json()
  gradelystars = (await response)["stargazers_count"]
}
</script>
<nav class="navbar navbar-light">
    <a class="navbar-brand" href="/">
      <img src="/img/gradely2logo.png" width="50" height="50" class="d-inline-block align-center" alt="">
    <e class="d-none d-sm-inline d-md-inline">Gradely 2</e> 
    </a>
    <div>
    <a href="#download">Download</a>
    <a target="_blank" href="https://github.com/generalxhd/gradely2"> <i class="fab fa-github fa-lg"></i> <id class="d-none d-sm-none d-md-inline small"> {gradelystars} ☆</id> </a>
    </div>
  </nav>

<style>
  a{
    text-decoration: none !important;
    color: black;
    margin-right: 40px ;
  }
  a:hover{
    text-decoration: none !important;
    color: rgb(58, 58, 58);

  }
    .navbar-brand{
        font-size: 15px;
        margin: 8px;
    }

</style>
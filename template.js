// document.writeln("<script type='text/javascript' src='data.js'></script>");
var navbar = `
<!-- Image and text -->
<nav class="navbar navbar-light bg-primary">
  <a class="navbar-brand text-center d-flex " href="#" onclick="render()">
    <img src="${image.purple}" width="30" height="30" class="d-inline-block align-top " alt="" loading="lazy">
  </a>
  <a class="navbar-brand text-center d-flex " href="#" onclick="render2()">
    <img src="${image.purple}" width="30" height="30" class="d-inline-block align-top " alt="" loading="lazy">
  </a>
</nav><br/>`;

var page1 = `
${navbar}
<div class="container">
<div class="row">
  <div class="col-sm">
    <!-- One of three columns -->
  </div>
  <div class="col-sm">

  <div class="card">
  <img src="${image.purple}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Page 1</h5>
    <p class="card-text">render content one from variable 1 so that we can go to number 2. We need to get the content</p>
    <a href="#" class="btn btn-primary" onclick="render2()">Go somewhere</a>
  </div>
</div>
  </div>

  <div class="col-sm">
    <!-- One of three columns -->
  </div>
</div>
</div>

`;

var page2 = `
${navbar}
<div class="container">
<div class="row">
  <div class="col-sm">
    <!-- One of three columns -->
  </div>
  <div class="col-sm">

  <div class="card">
  <img src="${image.purple}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Page 2</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" onclick="render()">Go somewhere</a>
  </div>
</div>
  </div>

  <div class="col-sm">
    <!-- One of three columns -->
  </div>
</div>
</div>

`;
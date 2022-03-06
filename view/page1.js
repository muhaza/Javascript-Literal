 function literal1() {
     document.getElementById("card").innerHTML = `
    <div   div class="card" style="width: 100%;">
    <!--<img src="..." class="card-img-top" alt="..."-->
    <div class="card-body">
        <h5 class="card-title">DYNAMIC HTML ${Dname}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" onclick="literal2()" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
`;
 }
 //this render as default
 literal1()
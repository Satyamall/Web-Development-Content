function Navbar({title="Title"}){
    console.log(window.location.pathname)
    const currentPath = 
       window.location.pathname === "/myapp/indexIE.html" ?
            "Home Page" : window.location.pathname === "/myapp/users.html" ? 
            "Users Page" : "others"

  
    return ` <div id="navbar">
    <div class="left">${title}</div>
    <div>${currentPath}</div>
    <div class="right">
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
</div>`
}

export default Navbar;
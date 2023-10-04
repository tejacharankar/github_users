fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data)=>{
    console.log(data[25].html_url)
    
    document.getElementById("profileimage1").setAttribute("src",data[1].avatar_url);
    document.getElementById("username1").innerText = data[1].login;
    document.getElementById("visitprofile1").setAttribute("href",data[1].html_url)

    document.getElementById("profileimage2").setAttribute("src",data[2].avatar_url);
    document.getElementById("username2").innerText = data[2].login;
    document.getElementById("visitprofile2").setAttribute("href",data[2].html_url)

    document.getElementById("profileimage3").setAttribute("src",data[3].avatar_url);
    document.getElementById("username3").innerText = data[3].login;
    document.getElementById("visitprofile3").setAttribute("href",data[3].html_url)

    document.getElementById("profileimage4").setAttribute("src",data[4].avatar_url);
    document.getElementById("username4").innerText = data[4].login;
    document.getElementById("visitprofile4").setAttribute("href",data[4].html_url)

    document.getElementById("profileimage5").setAttribute("src",data[5].avatar_url);
    document.getElementById("username5").innerText = data[5].login;
    document.getElementById("visitprofile5").setAttribute("href",data[5].html_url)

});
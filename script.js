function classToggle(){
    const nav = document.querySelectorAll('.nav-links');
    nav.forEach(nav => nav.classList.toggle('navbar-toggle'));

}

document.getElementById('navbar').addEventListener('click',classToggle);

// document.getElementById('navbar').addEventListener('click',function(){
//     let navigation = document.getElementById('nav-links');
//     if(navigation.style.display == 'none'){
//         navigation.style.display = 'block';
//     } else{
//         navigation.style.display = 'none';
//     }
    
//     console.log('clicked');
    
// })


// Fetching from Server

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET'
})
.then(function(response){
    if(response.status !== 200){
        throw response.status;
    }
    return response.json();
})
.then(function(responseData){
    let ul = document.createElement('ul');
    let fragment = document.createDocumentFragment();

    console.log(responseData[0]);
    
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    li1.innerHTML = responseData[0].userId + 'st' + " " + 'user:' + '<br>' + responseData[0].body;
    li2.innerHTML = responseData[10].userId + 'nd' + " " + 'user:' + '<br>' + responseData[10].body;
    li3.innerHTML = responseData[20].userId + 'rd' + " " + 'user:' + '<br>' + responseData[20].body;

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    document.getElementById('posts').appendChild(ul);
    
})




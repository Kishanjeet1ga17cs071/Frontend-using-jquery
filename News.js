function getNews(){
    fetch('http://localhost:3000/articles')
    .then((res)=>{
        res.json()
        .then((data)=>{
             NewsList = data;
             displayNews();
        });
    })
    .catch((err)=>{
        console.log(err)
    });
}







function displayNews(){
    let NewsDetail = NewsList.map((N)=>`<li><h3>${N.author}</h3></br><p>${N.title}</br>${N.description}</p></br><img src="${N.urlToImage}" width="800" height="600"></br><a class="button" href="${N.url}">Know More</a></br><p>${N.publishedAt}</br> ${N.content}</p></li></br>`);
    console.log(NewsDetail);
    let element = document.getElementById('NewsList');
   
    let innerHTML = "";
    
     for(let index = 0; index<NewsDetail.length; index++){
     innerHTML = innerHTML.concat(NewsDetail[index]);
    }
    
    element.innerHTML = innerHTML; 
    

 }

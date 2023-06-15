
let url = new URL(window.location.href);
let postId = parseInt(url.searchParams.get('postId'))
console.log(postId)

let buttonMain = document.getElementById('main');
buttonMain.onclick = function (){
    location.href = `index.html`;
}
fetch(`https://jsonplaceholder.typicode.com/posts?postId=${postId}`)
    .then(value => value.json())
    .then(value => {
        for (let item of value) {
            if (postId === item.id) {
                console.log(item.id);
                let buttonBack = document.getElementById('back');
                buttonBack.onclick = function (){
                    location.href = `user-details.html?userId=${item.userId}`;
                }
                let div = document.createElement('div');
                let h1 = document.createElement('h1');
                h1.innerText = `User id: ${item.userId}
                Post id: ${item.id}
                
                Title: ${item.title}`;

                let h2 = document.createElement('h2');
                h2.innerText = `${item.body}`;

                let button = document.createElement('button');
                button.innerText = `Comments`;
                div.classList.add('info');

                let container = document.getElementById('container');

                button.addEventListener('click', function(event) {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                        .then(value => value.json())
                        .then(value => {
                            for (let item of value) {

                                let div = document.createElement('div');
                                div.classList.add('block');

                                let h1 = document.createElement('h1');
                                h1.innerText =`Id: ${item.id}`;
                                div.appendChild(h1);

                                let h2 = document.createElement('h2');
                                h2.innerText = `Name: ${item.name}`
                                div.appendChild(h2);

                                let h4 = document.createElement('h4');
                                h4.innerText = `Email: ${item.email}`
                                div.appendChild(h4);

                                let h3 = document.createElement('h3');
                                h3.innerText = `${item.body}`
                                div.appendChild(h3)

                                container.appendChild(div);
                                document.body.append(container);
                            }
                        })
                }, {once: true}
                )
                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(button);
                document.body.append(div);
            }
        }})






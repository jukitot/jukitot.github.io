let url = new URL(window.location.href);
let userId = parseInt(url.searchParams.get('userId'))
console.log(userId);

let buttonBack = document.getElementById('back');
buttonBack.onclick = function (){
    location.href = `index.html`;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (let item of value) {
            if (userId === item.id) {
                let div = document.createElement('div');
                let h1 = document.createElement('h1');
                h1.innerText = `ID: ${item.id}`;

                let h2 = document.createElement('h2');
                h2.innerText = `Name: ${item.name}`;

                let h3 = document.createElement('h3');
                h3.innerText = `Email: ${item.email}
                Address:
                Street: ${item.address.street}
                Suite: ${item.address.suite}
                City: ${item.address.city}
                Zip Code: ${item.address.zipcode}
                Phone: ${item.phone}
                Company:
                Name: ${item.company.name}
                Catch Phrase: ${item.company.catchPhres}
                BS: ${item.company.bs}`;

                let a = document.createElement('a');
                a.innerText = `Site: ${item.website}`
                a.href = `http://${item.website}`

                let button = document.createElement('button');
                button.innerText = `Post of current user`;
                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(h3)
                div.appendChild(a);
                div.classList.add('info');

                let container = document.getElementById('container');

                button.addEventListener('click', function(event) {
                    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                        .then(value => value.json())
                        .then(value => {
                            for (let item of value) {

                                let div = document.createElement('div');
                                div.classList.add('block');

                                let h1 = document.createElement('h1');
                                h1.innerText =`Title: ${item.title}`;
                                div.appendChild(h1);

                                let button = document.createElement('button');
                                button.innerText = `Post details`;

                                button.onclick = function (){
                                    location.href = `post-details.html?postId=${item.id}`;
                                }
                                div.appendChild(button);

                                container.appendChild(div);
                                document.body.append(container);
                            }
                        })
                }, {once: true})
                div.appendChild(button);
                document.body.append(div);
            }
        }
    })






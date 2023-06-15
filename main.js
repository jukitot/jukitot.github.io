fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (let item of value) {
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            h1.innerText = `ID: ${item.id}`;

            let h2 = document.createElement('h2');
            h2.innerText =`Name: ${item.name}`;

            let button = document.createElement('button');
            button.innerText = `User details`;

            button.onclick = function (){
                location.href = `user-details.html?userId=${item.id}`;
            }

            div.appendChild(h1);
            div.appendChild(h2);
            div.appendChild(button);
            document.body.append(div);
        }
    })

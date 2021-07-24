const file = "../json/directory.json"


fetch(file)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const businesses = jsonObject["businesses"];

        for (let i = 0; i < businesses.length; i++) {
            if (i >= 0) {
                let card = document.createElement("section");

                let busdiv = document.createElement('div');
                busdiv.classList.add("busdiv");
                card.appendChild(busdiv)

                let name = document.createElement("h2");
                name.innerHTML = `${businesses[i].name}`;
                name.classList.add("name");
                busdiv.appendChild(name);

                let busphone = document.createElement('p');
                busphone.innerHTML = `Phone Number: ${businesses[i].phone}`;
                busphone.classList.add("busphone");
                busdiv.appendChild(busphone);

                let busaddress = document.createElement('p');
                busaddress.innerHTML = `Address: ${businesses[i].address}`;
                busaddress.classList.add("busaddress");
                busdiv.appendChild(busaddress);

                let bussite = document.createElement('p');
                bussite.innerHTML = `Website: ${businesses[i].site}`;
                bussite.classList.add("bussite");
                busdiv.appendChild(bussite);



                let busimage = document.createElement('img');

                if (i == 0) {
                    busimage.setAttribute('src', '../images/lawyer.jpg')
                    busimage.setAttribute('alt', 'Image of ' + businesses[i].name)
                    card.setAttribute('id', 'lawyer')
                    card.appendChild(busimage);
                }

                if (i == 1) {
                    busimage.setAttribute('src', '../images/nf.jpg')
                    busimage.setAttribute('alt', 'Image of ' + businesses[i].name)
                    card.setAttribute('id', 'navy')
                    card.appendChild(busimage);
                }

                if (i == 2) {
                    busimage.setAttribute('src', '../images/pepsi.jpg')
                    busimage.setAttribute('alt', 'Image of ' + businesses[i].name)
                    card.setAttribute('id', 'pepsi')
                    card.appendChild(busimage);
                }

                if (i == 3) {
                    busimage.setAttribute('src', '../images/craven.png')
                    busimage.setAttribute('alt', 'Image of ' + businesses[i].name)
                    card.setAttribute('id', 'ccc1')
                    card.appendChild(busimage);
                }

                if (i == 4) {
                    busimage.setAttribute('src', '../images/craven.png')
                    busimage.setAttribute('alt', 'Image of ' + businesses[i].name)
                    card.setAttribute('id', 'ccc2')
                    card.appendChild(busimage);
                }

                if (i == 5) {
                    busimage.setAttribute('src', '../images/fisher.jpg')
                    busimage.setAttribute('alt', 'Image of ' + businesses[i].name)
                    card.setAttribute('id', 'fisher')
                    card.appendChild(busimage);
                }

                if (i == 6) {
                    busimage.setAttribute('src', '../images/hospitable.png')
                    busimage.setAttribute('alt', 'Image of ' + businesses[i].name)
                    card.setAttribute('id', 'carolina')
                    card.appendChild(busimage);
                }

                document.querySelector("div.cards").appendChild(card);
            }
        }
    });
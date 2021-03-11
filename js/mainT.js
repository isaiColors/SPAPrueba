let mainContent = document.getElementById('root');

// Enrutamiento
async function router(rout) {
    mainContent.innerHTML = '';
    /* console.log(rout); */
    switch (rout) {
        case '#/':
            return mainContent.appendChild(home());
        case '#/posts':
            return mainContent.appendChild(await posts());
        case '#/products':
            return mainContent.appendChild(slide());
        default:
            return mainContent.appendChild(fyf());
    }
}

// URL
router(window.location.hash);
window.addEventListener('hashchange', () => {
    /* console.log(window.location.hash); */

    router(window.location.hash);
});

// home
function home() {
    const views = `
        <h1>Hola perros</h1>
        <p>Hola mundillo</p>

        <button id="btnClick" class="btn btn-primary">
            Cliqueame plocs
        </button>
    `;

    const divElement = document.createElement('div');
    divElement.classList = 'heading';
    divElement.innerHTML = views;

    const btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('click', () => {
        alert('Te asusto yobabas');
    })

    return divElement;
}

// Products

function slide() {
    const views = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://nathansearles.github.io/slidesjs/img/example-slide-350-4.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://www.intervalor.com/images/slideshow/slide-img-sthlm.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://alfaplusgo.com/assets/images/slides/1601007464.jpg" class="d-block w-100" alt="...">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    return divElement;
}

// Posts

async function posts() {

    const getPosts = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    }

    const views = `
        <h2 class="text-center text-white">Total de kesos: <span id="total"></span></h2>
        <ul class="list-group postes container" id="posts"></ul>
    `;

    const divElement = document.createElement('div');
    divElement.innerHTML = views;



    const postElements = divElement.querySelector('#posts');
    let totalPosts = divElement.querySelector('#total');

    const posts = await getPosts();
    console.log(posts);

    totalPosts.innerHTML = posts.length;

    posts.forEach(post => {
        postElements.innerHTML += `
            <li class="list-group-item border-prymary bg-li text-white">
                <h5>${post.title}</h5>
                <p>${post.budy}</p>
            </li>
        `;
    });

    return divElement;
}

// 404
function fyf() {
    const views = `
        <h2 class="text-center text-grey">404!</h2>
    `;

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    return divElement;
}
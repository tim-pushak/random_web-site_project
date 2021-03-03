'use strict';


document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    /////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////

    const ad = document.querySelectorAll('.promo__adv img'),
        adTitle = document.querySelector('.promo__adv-title'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

        
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`; // тут я кажу що воно вмістить тільки букви від 0 до 22 (не включаючи 22)
            }

            if (favorite) {
                console.log('Add to favorite films)');
                alert('Add to favorite films)');
            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            
            createMovieList(movieDB.movies, movieList);
        } else {
            alert('just type smth');
        }
        addForm.reset(); // для того щоб після ентер форма була чиста
    });

    
    const deleteAd = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    adTitle.remove();

    //OR

    // ad.forEach(function (item) {
    //     item.remove();
    // });

    
    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")'; // 'url("../../")';
    };
    


    const sortArr = (arr) => {
        arr.sort();
    };
    
    



    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);


        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); // спочатку я пишу який саме елемент треба видалити(і - там воно розуміє і підставляє шо це то на шо я нажав), а потім скільки їх треба видалити
            
                // this
                createMovieList(movieDB.movies, movieList); // для того щоб нумерація кожен раз мерестройувалась (це я викликав функцію всередині функції)
                // or that
                // createMovieList(films, parent);
            });
        });
    }
    
    
    deleteAd(ad);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});


























/* 
//my code
/* ///
    genre: [
        "Films",
        "TV Series",
        "Cartoons",
        "Clips",
        "Trailers"    
    ],

    style: [
        "drama"
    ],
    title: [
        "MARTIAN"
    ],
    description: [
        "THE STORY OF A MAN SURVIVING ON ANOTHER PLANET ALONE"
    ],
    rateSpan1: [
        "IMDb: 8.0"
    ],
    rateSpan2: [
        "Film Search: 7.7"
    ] */

/*
const films = document.querySelector('.promo__menu');

films.innerHTML = "";

movieDB.genre.forEach((genre) => {
    films.innerHTML += `
        <a class="promo__menu-item" href="#">${genre}</a>
    `;
});


// poster.innerHTML = "";

// movieDB.header.forEach((header) => {
//     poster.innerHTML += `
//     <div class="promo__genre">${header}</div>
//     `;
// });


const genr = document.querySelector('.promo__genre'),
      bigTitle = document.querySelector('.promo__title'),
      disc = document.querySelector('.promo__descr'),
      span1 = document.querySelector('.span1'),
      span2 = document.querySelector('.span2');

genr.innerHTML = "";
movieDB.style.forEach((style) => {
    genr.innerHTML +=  `
        <div class="promo__genre">${style}</div>
    `;
});


bigTitle.innerHTML = "";
movieDB.title.forEach((title) => {
    bigTitle.innerHTML += `
        <div class="promo__title">${title}</div>
    `;
});


disc.innerHTML = "";
movieDB.description.forEach((description) => {
    disc.innerHTML += `
        <div class="promo__descr">${description}</div>
    `;
});



span1.innerHTML = "";
movieDB.rateSpan1.forEach((rateSpan1) => {
    span1.innerHTML += `
            <span class="span1">${rateSpan1}</span>
    `;
});

span2.innerHTML = "";
movieDB.rateSpan2.forEach((rateSpan2) => {
    span2.innerHTML += `       
        <span class="span2">${rateSpan2}</span>
    `;
});

 */
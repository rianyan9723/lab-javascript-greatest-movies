// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const allMovies = require("./data.js");

function getAllDirectors(movies) {
    const directorArray = movies.map((item)=> item.director);
    return directorArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const hasSS = movies.filter((item)=>{return item.director === "Steven Spielberg" && item.genre.includes("Drama");});
    const counter = hasSS.length; 
    return counter; 
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0){
        return 0;
    }

    const scoreSum = movies.reduce((accumulator, currentValue)=>{
        if (!currentValue.score) {
            return accumulator;
        }
        return accumulator + currentValue.score;
    },0); 

    const avg = scoreSum / movies.length;
    const finalAvg = Math.round(avg*100)/100;

    return finalAvg; 
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

        const dramaArray = movies.filter ((items)=>{
            return items.genre.includes("Drama");
        })

        if (dramaArray.length === 0){
            return 0;
        }

        const scoreSum2 = dramaArray.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue.score;
        },0); 

        const avg2 = scoreSum2 / dramaArray.length;
        const finalAvg2 = Math.round(avg2*100)/100;

        return finalAvg2; 

    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    const clonedMovies = movies.map((item)=>item);

    return clonedMovies.sort((a,b)=>{

        if (a.year === b.year){
            return a.title.localeCompare(b.title);
        }

        return a.year - b.year;
    })

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
     const titleArray = moviesArray.map((item)=> {
        return item.title;
    })
/*
    if (titleArray.length <= 20) {

        let result1 = titleArray.sort((c,d)=>{
            return c.title.localeCompare(d.title);
        })
        return result1

    }

    if (titleArray.length > 20){

        let title2 = titleArray.slice(0,20);

        return result2 = title2.sort((e,f)=>{
            return e.title2.localeCompare(f.title2);
        })

    } */
    return titleArray.sort((a,b)=>{
        return a.localeCompare(b);
    }).slice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



let movie ={ Name : "John Wick",
            Director : "Chad Stahelski",
            Cast : { Hero : "Keanu Reeves",
                    Villan : "Bill Skarsgård",
                    Friend : "Donnie Yen",
                    ECast :["Scott Adkins","Lance Reddick","Ian McShane","Hiroyuki Sanada"],
            },
            DateofRelease : "24/03/2023",
            Budget : 100000000,
}

console.log(movie)
console.log(movie.Budget)
console.log(movie.Cast)
console.log(movie.Cast.ECast)
console.log(typeof(movie.Cast.ECast))
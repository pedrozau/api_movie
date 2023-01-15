import MovieDB from "node-themoviedb";


export class GEtMoviesUserCase {
        
    async execute() {
        const mdb = new MovieDB("268b077d27200eb541c0e6febae84bc7")

        const args = {
            pathParameters: {
              // path parameters for query, i.e. tv_id
            },
            query: {
              // query string, i.e. session_id
              // NOTE: api_key and language will be added to query by default, don't need specify these values
            },
            body: {
              // data for request body
            },
          };

        const movie = await  mdb.movie.getPopular(args)

       return movie.data 
    }

}

const m = new GEtMoviesUserCase() 

 m.execute()
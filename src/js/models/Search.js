import axios from "axios";

class Search{
    constructor(query){
        this.query = query;
    }
    async getResutls() {
        const apiKey = "66bdd2ec39d9591c3a9a10b507f104b9";
        try {
          const res = await axios(
            `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
          );
          this.result = res.data.recipes;
        //   console.log(this.result);
        } catch (error) {
          alert(error);
        }
      }
}

export default Search;
//CREATE A HERO

import axios from 'axios';
import {API_URL} from "../constants";


function NewMCUCharacter() {

    async function handleSubmit(e) {
        e.preventDefault();


        let name = e.target.newName.value; //this is pointing to what is in the name field
        let debut = e.target.debut.value;
        let debutYear = e.target.debutYear.value;

        console.log("name: " + name + ", debut: " + debut + ", debutYear: " + debutYear);

        try {
            await axios.post(
                // "http://localhost:3001/api/createMcuCharacter",
                API_URL+"/createMcuCharacter/",
                {
                    name,
                    debut,
                    debutYear
                }
            );
            alert("Character: " + name + " has been inserted successfully.");
        }
        catch (e) {
            console.log("error:" + e);
            alert("Something went wrong, character not inserted");
        }
    }



    return (
        //can add Bootstrap or Tailwind coded form here if want it to look great but just using regular form here.
        <form onSubmit={handleSubmit}>
            <label>Let's add a new MCU Hero.</label>
            Name:
            <input type="text" name="newName" />
            <br />
            Debut:
            <input type="text" name="debut" />
            Debut Year:
            <input type="number" name="debutYear" />


            <button>Submit</button>
        </form>
    );
}

export default NewMCUCharacter;
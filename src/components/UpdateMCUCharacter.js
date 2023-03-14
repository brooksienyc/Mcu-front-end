//UPDATE A HERO's debut or debut year.

import axios from 'axios';
import {API_URL} from "../constants";


function UpdateMCUCharacter() {

    async function handleSubmit(e) {
        e.preventDefault();


        let name = e.target.newName.value; //this is pointing to what is in the name field
        let debut = e.target.debut.value;
        let debutYear = e.target.debutYear.value;

        console.log("name: " + name + ", debut: " + debut + ", debutYear: " + debutYear);


        try {
            await axios.put(
                // "http://localhost:3001/api/deleteMcuCharacter/"+name); - this was hardcoded - best practice is right below:
                API_URL+"/updateMcuCharacter/",
                {
                    name,
                    debut,
                    debutYear
                }
            )

            alert("Character: " + name + " has been successfully updated.");
        }
        catch (e) {
            console.log("error:" + e);
            alert("Something went wrong, character not updated.");
        }
    }



    return (
        //can add Bootstrap or Tailwind coded form here if want it to look great but just using regular form here.
        <form onSubmit={handleSubmit}>
           <label>Let's update an MCU Hero's debut and/or debut year. </label>
            <br/>
            Enter Existing MCU Hero Name:
            <input type="text" name="newName" />
            <br />
            Enter a new Debut:
            <input type="text" name="debut" />
            <br />
            Enter a new Debut Year:
            <input type="number" name="debutYear" />
            <br />
            <button>Update</button>
        </form>
    );
}

export default UpdateMCUCharacter;
//DELETE A HERO

import axios from 'axios';
import {API_URL} from "../constants";


function DeleteMCUCharacter() {

    async function handleSubmit(e) {
        e.preventDefault();


        let name = e.target.newName.value; //this is pointing to what is in the name field


        try {
            await axios.delete(
                // "http://localhost:3001/api/deleteMcuCharacter/"+name); - this was hardcoded - best practice is right below:
                API_URL+"/deleteMcuCharacter/"+name);

            alert("Character: " + name + " has been successfully deleted.");
        }
        catch (e) {
            console.log("error:" + e);
            alert("Something went wrong, character not deleted.");
        }
    }



    return (
        //can add Bootstrap or Tailwind coded form here if want it to look great but just using regular form here.
        <form onSubmit={handleSubmit}>
            <label>Let's delete an MCU Hero. </label>
            Name:
            <input type="text" name="newName" />
            {/* <br />
            Debut:
            <input type="text" name="debut" />
            Debut Year:
            <input type="number" name="debutYear" /> */}


            <button>Delete</button>
        </form>
    );
}

export default DeleteMCUCharacter;
import {Student} from "./Student";
import { addRow } from "./Drawing";

export function validate() : void {
        let id : string = (document.getElementById('id') as HTMLInputElement).value;
        let firstName : string = (document.getElementById('firstName') as HTMLInputElement).value;
        let lastName : string = (document.getElementById('lastName') as HTMLInputElement).value;
        let email : string = (document.getElementById('email') as HTMLInputElement).value;
        let phone : string = (document.getElementById('phone') as HTMLInputElement).value;
        let note : string = (document.getElementById('note') as HTMLInputElement).value;
        let age : string = (document.getElementById('age') as HTMLInputElement).value;

        let idInt = parseInt(id), ageInt = parseInt(age);
        if(id === ''){ alert('Id is required :)'); }
        else if(isNaN(idInt)){ alert('Id must contain only digits'); }
        else if(id.length != 6){ alert('Id has to be a 6 digit number'); }
        else if(firstName === ''){ alert('Firstname is required :)'); }
        else if(lastName === ''){ alert('Lastname is required :)'); }
        else if(email === ''){ alert('Email is required :)'); }
        else if(!/\S+@\S+\.\S/.test(email)){ alert('Email is not valid :)'); }
        else if(phone === ''){ alert('Phone is required :)'); }
        else if(!(/^[+]*[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/.test(phone) || /^[+]*[(][0-9]{3}[)][-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/.test(phone))){ alert('Phone is not valid :)'); }
        else if(age === '' || age === 'Select the age'){ alert('Age is required :)'); }
        else if(isNaN(ageInt)){ alert('Age must contain only digits'); }
        else if(ageInt < 16 || ageInt > 40){ alert('Age must be between 16 and 40'); }
        else {
            let table = document.getElementById("table");
            let modal = document.getElementById("addStudentModal");
            addRow(table, new Student(idInt, firstName, lastName, email, phone, note, ageInt));
            (document.getElementById('form') as HTMLFormElement).reset();
            modal.style.display = 'none';
        }
}
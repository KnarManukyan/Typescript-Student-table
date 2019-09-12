import {Person} from "./Person";
import {Student} from "./Student";
import {validate} from "./Validation";

export function addTable() : void {
    const elt = document.getElementById('studentsTable');
    let table = document.createElement('Table');
    table.setAttribute('id', 'table');
    let mainRow = document.createElement('Tr');
    mainRow.setAttribute('id', 'mainRow');
    let headers : string[] = ['id', 'firstname', 'lastname', 'email', 'phone', 'note', 'age', ''];
    for(let header of headers){
        let result = addHeader(header);
        mainRow.appendChild(result);
    }
    table.appendChild(mainRow);
    elt.appendChild(table);
    let s : Student = new Student(1, 'Knarik', 'Manukyan', 'knarmanukyan23@gmail.com', '077283264', 'dgbndgknh', 19);
    addRow(table, s);
    addRow(table, s);
}

export function addHeader(name: string) : Node {
    let header = document.createElement('Th');
    header.innerText = name;
    return header;
}

export function addCell(name: string) : Node {
    let data = document.createElement('Td');
    data.innerText = name;
    return data;
}

export function addRow(table: Node, p : Person): void {
    let row = document.createElement('Tr');
    let content = [p.id, p.firstName, p.lastName, p.email, p.phone, p.note, p.age];
    for(let info of content){
        let result = addCell(info.toString());
        row.appendChild(result);
    }
    let deleteCell = addCell('');
    (deleteCell as HTMLTableHeaderCellElement).width = '100px';
    let Icon = document.createElement('I');
    Icon.setAttribute('class', 'fas fa-user-minus');
    Icon.style.display = 'none';
    Icon.style.color = '#ff6161';
    row.onmouseover = function (event) { Icon.style.display = 'block'; };
    row.onmouseout = function (event) { Icon.style.display = 'none'; };
    Icon.addEventListener('click', function(event){ table.removeChild((event.target as HTMLElement).parentNode.parentNode); });
    deleteCell.appendChild(Icon);
    row.appendChild(deleteCell);
    table.appendChild(row);
}

export function modifyModal() : void {
    let modal = document.getElementById('addStudentModal');
    let select = document.getElementById('age');
    let newOption = document.createElement('Option');
    newOption.innerText = 'Select the age';
    select.appendChild(newOption);
    for(let i = 16; i <= 40; i++){
        newOption = document.createElement('Option');
        newOption.innerText = i.toString();
        select.appendChild(newOption);
    }

    document.getElementById('addStudentButton').addEventListener('click', function() {
        modal.style.display = 'block';
    });

    function cancel() {
        (document.getElementById('form') as HTMLFormElement).reset();
        modal.style.display = 'none';
    }

    document.getElementById('cancelButton1').addEventListener('click', cancel);
    document.getElementById('cancelButton2').addEventListener('click', cancel);
    document.getElementById('addButton').addEventListener('click', validate);
}
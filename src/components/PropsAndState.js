import React, { Component } from 'react';
import Persons from './Person'
class TextStateAndprops  extends Component {


    render() {  
        const Person = [
           {id : '1',name : "KaviRasa" ,age :29},
           {id : '2',name : "thari" ,age :59},
           {id : '3',name : "mala" ,age :49}

        ];
        const ListOfpersons = Person.map(person => <Persons key={person.id} persons = {person.name}/>)
        return( 
        <div>
          {ListOfpersons}
        </div>
         );
    }
}
 
export default TextStateAndprops;


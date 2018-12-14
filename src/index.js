import React from 'react'
import ReactDOM from 'react-dom'



const Otsikko = (props) => {
    console.log(props.kurssi.nimi)
    return (
    <div><h1>{props.kurssi.nimi}</h1></div>
        )
}

const Sisalto = (props) =>{
    
    return (
    <div>
        {props.osat.map((osa) => 
        <Osa key={osa.nimi} osa={osa}/>
         )}
    </div>
    )
  }

const Osa = (props) => {
   
     return (
     <div>{props.osa.nimi}  {props.osa.tehtavia}</div>
     )
    }
    

const Yhteensa = (props) => {

    let yht = 0
    props.osat.map(p => yht=yht+p.tehtavia);
 
     return (
         <div>Yhteensä: {yht}</div>
     );
} 


const App = () => {
     const kurssi = { 
     nimi: 'Half Stack -sovelluskehitys',
    osat: [
    {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    },
    {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    },
    {
        nimi: 'Komponenttien tila',
        tehtavia: 15
    }
    ]
}
    
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto  osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'))
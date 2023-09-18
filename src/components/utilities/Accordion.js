import React, {useState} from 'react'
import { experience } from './experience'

export default function Accordion({title}) {

    const [clicked, setClicked] = useState(false);

    const toggle = (idx) => {
        if (clicked === idx) {
            return setClicked(null);
        }
        setClicked(idx);
    }

  return (
    <div className='experience-container'>
        <h3>{title}</h3>
    {
        experience.map((item, index) => {
            return (
                <div className='accordion-container' key={index}>
                    <div className='wrap' onClick={()=> toggle(index)}>
                        <h2>{item.shortTitle}</h2>
                        <h2>{item.startDate} - {item.endDate}</h2>
                        <span>{clicked === index ?  <span className="material-icons">remove</span> : <span className="material-icons">add</span> }</span>
                    </div>
                    {
                        clicked === index && <div className='dropdown appear'>
                        <h3>{item.company}</h3>
                        <h4>{item.title}</h4>
                        <ul>
                            {item.accomplishments.map((accomplishment, itemIndex) => {
                                return (
                                    <li key={itemIndex}>{accomplishment}</li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    }
                    
                </div>
            )
        })
    }
    </div>
  )
}

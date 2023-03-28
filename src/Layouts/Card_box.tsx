import React from 'react';
import { Card } from 'antd';
import Car from '../interface/extentedInterface';



export interface CarsProp{
    Cars: Car[];
}



const Card_box = ({Cars}:CarsProp) =>{

    return(
    <div className='grid-3'>
        {Cars.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.nickname} bordered={false} style={{textAlign:"center", width: 300 }} >
            <img src={card.photo} alt="image" style={{
                width: 300
            }} />
            <p> Engine : {card.engine} </p>
            <p> Year :  {card.year}</p>
            <p> Miles : {card.miles}</p>
            <p> Origin : {card.origin}</p>
            <p> Color : {card.color}</p>
        </Card>
         </div>
        ))}
        
    </div>
        
    )
}

export default  Card_box;

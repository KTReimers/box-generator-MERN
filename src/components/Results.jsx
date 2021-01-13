import React, {useState} from 'react';
import styles from './boxStyle.module.css';

const Results = props =>{
    const boxStyle = {
        display: 'inline-block',
        width: '100px',
        height: '100px',
        marginLeft: '20px',
        backgroundColor: 'item.colorInput'
    }

    return(
        <>
            <h1>Here are all the colors</h1>
            {
                props.allColors.map((item)=>{
                    return <div className={styles.newbox} style={{backgroundColor: item.colorInput}}>
                        <div>{item.colorInput}</div>
                    </div>
                })
            }
        </>
    );
}
export default Results;
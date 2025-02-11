import React from 'react'
import data from "../../data/data"
import Table from "react-bootstrap/Table"
const Table1 = () => {
  return (
    <div>
        <Table bordered hover>
           <thead>
           <tr>
                <th>s.no</th>
                <th>pro_Name</th>
                <th>pro_Price</th>
                <th>Pro_Image</th>
            </tr>
           </thead>
           <tbody>
              {data.map(item=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                            <img src={item.image} alt="" width={100}/>
                        </td>
                    </tr>
                )
              })}
           </tbody>

        </Table>
    </div>
  )
}

export default Table1
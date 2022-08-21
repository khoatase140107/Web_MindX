import React from "react";
import  {PieChart, Pie, Legend, Tooltip, Cell, Label} from "recharts";
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data01 = [{name: 'Group A', value: 5}, {name: 'Group B', value: 4},
                 {name: 'Group C', value: 1}, {name: 'Group D', value: 1},{name: 'Group E', value: 20}]
function Chart(props) {
  return (
    <PieChart width={800} height={400}>
       <Pie 
       data={data01} 
       cx={300}
       cy={150} 
       innerRadius={60}
       outerRadius={70} 
       fill="#8884d8"
       paddingAngle={2}
       >
       <Label 
       value="6" position="centerBottom"  className='label-top' fontSize='27px'
       />
       <Label 
       value="tasks left" position="centerTop" className='label'
       />
         {
           data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
         }
       </Pie>
       <Tooltip/>
      </PieChart>
  );
}

export default Chart;

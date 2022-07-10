import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    (<SparklineComponent id={id} height={height} width={width} dataSource={data} xName='xval' yName='yval' type={type} lineWidth={1} fill={color} border={{color:currentColor,width:2}} valueType='Numeric' tooltipSettings={{visible:true,format:'${xval} : data ${yval}',trackLineSettings:{visible:true}}}>
      <Inject services={[SparklineTooltip]}/>
</SparklineComponent>)
  )
}

export default SparkLine
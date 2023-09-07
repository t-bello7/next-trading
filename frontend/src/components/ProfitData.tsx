import { Col, Row, Statistic } from 'antd';
import { useWebSocket } from '@/hooks/useWebSocket';
const TextData  = ({name}: any) => (
    <div className='text-black text-sm dark:text-white'>
        {name}
    </div>
)
const ProfitData = () => {
    // const { data } = useWebSocket('streamCandles')
    // console.log(data)
    // if (!data) {
        return <div> Loading </div>
    // }

    // return (  
    // <div className='hidden p-5 md:block h-[10vh] bg-lightGray dark:bg-darkBlack rounded'>
    //     <Row gutter={16}>
    //         <Col span={3}>
    //         <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title ={<TextData name="Balance" />} value={data.balance} suffix={<TextData name="USD" />} />
    //         </Col>
    //         <Col span={3}>
    //         <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Account Value" />} value={93} suffix={<TextData name="USD" />} />
    //         </Col>
    //         <Col span={3}>
    //         <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Margin"/>} value={data.margin} suffix={<TextData name="USD" />} />
    //         </Col>
    //         <Col span={3}>
    //         <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Free Margin"/>} value={data.marginFree} suffix={<TextData name="USD" />} />
    //         </Col>
    //         <Col span={3}>
    //         <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Margin Level" />} value={data.marginLevel} suffix={<TextData name="%" />} />
    //         </Col>
    //         <Col span={3}>
    //         <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Equity"/>} value={data.equity}  />
    //         </Col>
    //         <Col span={6}>
    //             {/* <div> </div> */}
    //         </Col>
    //     </Row>
    // </div>
    // )

}

export default ProfitData;
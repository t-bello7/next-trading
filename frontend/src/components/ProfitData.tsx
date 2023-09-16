import { Col, Row, Statistic } from 'antd';
import { useWebSocket } from '@/hooks/useWebSocket';
const TextData  = ({name}: any) => (
    <div className='text-black text-sm dark:text-white'>
        {name}
    </div>
)
const ProfitData = () => {
    const { returnData } = useWebSocket('getMarginLevel');

    if (returnData === undefined) return <div> loading </div>
    return (  
    <div className='hidden p-5 md:block h-[10vh] bg-lightGray dark:bg-darkBlack rounded'>
        <Row gutter={16}>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title ={<TextData name="Balance" />} value={returnData.balance} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Account Value" />} value={93} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Margin"/>} value={returnData.margin} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Free Margin"/>} value={returnData.margin_free} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Margin Level" />} value={returnData.margin_level} suffix={<TextData name="%" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title={<TextData name="Equity"/>} value={returnData.equity}  />
            </Col>
            <Col span={6}>
                {/* <div> </div> */}
            </Col>
        </Row>
    </div>
    )

}

export default ProfitData;
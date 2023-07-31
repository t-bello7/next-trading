import { Col, Row, Statistic } from 'antd';

const TextData  = ({name}: any) => (
    <div className='text-black text-sm dark:text-white'>
        {name}
    </div>
)
const ProfitData = () => {
    return (  
    <div className='h-[10vh] bg-lightGray dark:bg-darkBlack rounded'>
        <Row gutter={16}>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title ={<TextData name="Balance" />} value={138} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title="Account Value" value={93} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title="Margin" value={93} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title="Free Margin" value={1333.3} suffix={<TextData name="USD" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title="Margin Level" value={93} suffix={<TextData name="%" />} />
            </Col>
            <Col span={3}>
            <Statistic className="[&_.ant-statistic-content-value]:text-sm [&_.ant-statistic-content-value]:dark:text-white [&_.ant-statistic-content-value]:text-black" title="Leverage" value={1}  />
            </Col>
            <Col span={6}>
                <div> hello</div>
            </Col>
        </Row>
    </div>
    )

}

export default ProfitData;
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Col, Row, Typography } from 'antd';

export function AccountInfo(): JSX.Element {
    return (
        <div>
            <Row className='HomePage-Container'>
                <Col flex={1} className='HomePage-Avatar'>
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<AntDesignOutlined />}
                    />
                </Col>
                <Col flex={5}>
                    <Typography.Title editable level={2} className="HomePage-AccountInfo">
                        Name
                    </Typography.Title>
                </Col>
            </Row>
        </div>
    )
}
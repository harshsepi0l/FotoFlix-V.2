import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Col, Row } from 'antd';

export function AccountInfo(): JSX.Element {
    return (
        <div>

            <Row>
                <Col flex={1}>
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<AntDesignOutlined />}
                    />
                </Col>
                <Col flex={2}>3 / 4</Col>
            </Row>
        </div>
    )
}
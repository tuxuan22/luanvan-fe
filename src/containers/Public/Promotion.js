import React from 'react'
import { Container, Button, Card } from 'react-bootstrap'

const Promotion = () => {
    return (

        <div>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Các ưu đãi hấp dẫn</h3>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ backgroundSize: 'cover', backgroundPosition: 'center', width: '286px', height: '150px' }} src='https://cdn3.ivivu.com/2016/12/khuyen-mai-Vanila-Air-ivivu-1.png' />
                    <Card.Body>
                        <Card.Title>Mùa hè sẽ rực rỡ hơn bao giờ hết</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ backgroundSize: 'cover', backgroundPosition: 'center', width: '286px', height: '150px' }} src='https://www.vietnamairlines.com/~/media/524A81539BE34F748EF7726FC66AC8E2.ashx' />
                    <Card.Body>
                        <Card.Title>Ưu đãi lớn, sẵn sàng chào hè</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ width: '288px', height: '150px' }} src='https://vegiagoc.com/Upload/images/Bamboo-Airways-tung%20-ve-khuyen-mai-sieu-re-chi-16700d-11.png' />
                    <Card.Body>
                        <Card.Title>Săn vé máy bay giá rẻ chỉ 16.700đ từ Bamboo Airways</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
            </Container>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Các tour du lịch</h3>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ backgroundSize: 'cover', backgroundPosition: 'center', width: '286px', height: '150px' }} src='https://www.tugo.com.vn/wp-content/uploads/Voucher-815x459.jpg' />
                    <Card.Body>
                        <Card.Title>Giảm ngay cho khách hàng sử dụng Code</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ backgroundSize: 'cover', backgroundPosition: 'center', width: '286px', height: '150px' }} src='https://vinpearllandphuquoc.com/wp-content/uploads/2022/06/Anh-1-Vinpearl-Discovery-Coastalland-Ph%C3%BA-Qu%E1%BB%91c.jpg' />
                    <Card.Body>
                        <Card.Title>Tour Vinpearl Discovery Phú Quốc</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ width: '288px', height: '150px' }} src='https://revoucher.vn/storage/san-pham/Tour-Ha-Noi---Ha-Giang---Lung-Cu---Song-Nho-Que-4N3D---VMB-Khu-Hoi/Tour-Ha-Noi---Ha-Giang---Lung-Cu---Song-Nho-Que-4N3D---VMB-Khu-Hoi-sm.webp' />
                    <Card.Body>
                        <Card.Title>Tour Đà Nẵng - Hội An - Bà Nà</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
            </Container>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Từ đối tác</h3>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ backgroundSize: 'cover', backgroundPosition: 'center', width: '286px', height: '150px' }} src='https://cdn3.ivivu.com/2016/12/khuyen-mai-Vanila-Air-ivivu-1.png' />
                    <Card.Body>
                        <Card.Title>Mùa hè sẽ rực rỡ hơn bao giờ hết</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ backgroundSize: 'cover', backgroundPosition: 'center', width: '286px', height: '150px' }} src='https://www.vietnamairlines.com/~/media/524A81539BE34F748EF7726FC66AC8E2.ashx' />
                    <Card.Body>
                        <Card.Title>Ưu đãi lớn, sẵn sàng chào hè</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '18rem', margin: '10px' }}>
                    <Card.Img variant='top' style={{ width: '288px', height: '150px' }} src='https://vegiagoc.com/Upload/images/Bamboo-Airways-tung%20-ve-khuyen-mai-sieu-re-chi-16700d-11.png' />
                    <Card.Body>
                        <Card.Title>Săn vé máy bay giá rẻ chỉ 16.700đ từ Bamboo Airways</Card.Title>

                        <Button variant='primary'>Xem thêm</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Promotion
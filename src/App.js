import React, { Component } from 'react';
import './App.css'
import styled from 'styled-components'
import * as type from './data'
// ui
import Title from './ui/Title'
import TitleBold from './ui/TitleBold'
import TitleIn from './ui/TitleIn'
import Audio from './ui/Audio'
import CustomerThink from './ui/CustomerThink'
import Benifit from './ui/Benifit'
import ImageSigle from './ui/ImageSingle'
import Iwant from './ui/Iwant'
import CountDown from './ui/CountDown'
// img
import ic_6 from './img/6.jpg'
import ic_4 from './img/4.png'
import ic_9 from './img/9.jpg'
import ic_22 from './img/22.jpg'
import ic_33 from './img/33.png'
import ic_a from './img/a.jpg'
import ic_77 from './img/77.jpg'
const Bound = styled.div`
    display:flex;
    flex-direction:column;
    /* height:100%; */
    /* min-width: 1024px; */
    margin: 0 auto;
    span {
        color:rgb(255, 120, 0);
    }
    p{
        font-size: 20px;
        font-weight: 900;
    }
    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .line{
        border: 1px solid #dbd9d9;
        margin: 10px 0;
    }
    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid red;
    border-radius: 20px;
    }
    .main-title{
        font-size: 24px;
        font-weight: 900;
        font-family: inherit;
        text-transform: uppercase;
        line-height: 30px;
        letter-spacing: 1px;
    }
`
class App extends Component {
    toBottom = () => {
        var elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
    }
    render() {
        return (
            <Bound>
                <h1 className='main-title'>
                    Chiếc USB này chứa những quyển sách vĩ đại về kinh doanh giúp đạt được giấc mơ làm giàu của bất kì ai may mắn sở hữu nó
                    <span> 80 audiobooks kinh điển nhất do tạp chí New York Times bình chọn. </span>
                </h1>
                <ul>
                    <li>
                        <p>
                            <span>18 cuốn sách </span>
                            hay nhất về
                           <span> TƯ DUY KINH DOANH </span>
                            khác biệt của người thành công
                       </p>
                    </li>
                    <li>
                        <p>
                            <span> 19 cuốn sách </span>
                            19 cuốn sách bán chạy nhất về làm chủ và đạt được thịnh vượng
                           <span>TÀI CHÍNH </span>
                            từ các doanh nhân và nhà đầu tư sừng sỏ
                       </p>
                    </li>
                    <li>
                        <p>
                            <span> 8 cuốn sách </span>
                            tiêu biểu VỀ
                            <span> MARKETING & SALES </span>
                            , giúp bán được nhiều hàng, tạo dựng thương hiệu lớn
                       </p>
                    </li>
                    <li>
                        <p>
                            <span>14 cuốn sách </span>
                            kinh điển VỀ
                             <span> QUẢN TRỊ </span>
                            , giúp bạn quản lý thật tốt công việc kinh doanh của mình
                       </p>
                    </li>
                    <li>
                        <p>
                            <span> 7 câu chuyện </span>
                            truyền cảm hứng từ các tập đoàn lớn và doanh nhân thành công nhất
                   </p>
                    </li>
                </ul>
                <div className='line'></div>
                <h3>CÓ GÌ TRONG USB SÁCH NÓI NÀY ?</h3>
                <ImageSigle imgLink={ic_6} />
                <Title number={18}
                    title={"CUỐN SÁCH VỀ TƯ DUY KINH DOANH "}
                />
                <div className='line'></div>
                <div className='block'>
                    <ul>
                        {type.bussiness.map((item, index) => {
                            return <li key={index}>
                                <p>{index + 1}. {item.book} <span>{item.author}</span></p>
                            </li>
                        })}
                    </ul>
                </div>
                <Iwant toBottom={this.toBottom} />
                <Title number={19}
                    title={"SÁCH NÓI VỀ CHỦ ĐỀ TÀI CHÍNH"}
                />
                <div className='line'></div>
                <div className='block'>
                    <ul>
                        {type.final.map((item, index) => {
                            return <li key={index}>
                                <p>{index + 1}. {item.book} <span>{item.author}</span></p>
                            </li>
                        })}
                    </ul>
                </div>
                <ImageSigle imgLink={ic_4} />
                <Title number={8}
                    title={"SÁCH NÓI VỀ MARKETING & SALES"}
                />
                <div className='line'></div>
                <CountDown time={5400} />
                <div className='block'>
                    <ul>
                        {type.marheting.map((item, index) => {
                            return <li key={index}>
                                <p>{index + 1}. {item.book} <span>{item.author}</span></p>
                            </li>
                        })}
                    </ul>
                </div>
                <Title number={14}
                    title={"SÁCH NÓI VỀ QUẢN TRỊ HAY NHẤT"}
                />
                <div className='line'></div>
                <div className='block'>
                    <ul>
                        {type.manager.map((item, index) => {
                            return <li key={index}>
                                <p>{index + 1}. {item.book} <span>{item.author}</span></p>
                            </li>
                        })}
                    </ul>
                </div>
                <ImageSigle imgLink={ic_9} />
                <Title number={16}
                    title={"SÁCH LỜI KHUYÊN KINH DOANH​"}
                />
                <div className='line'></div>
                <div className='block'>
                    <ul>
                        {type.advanceBussiness.map((item, index) => {
                            return <li key={index}>
                                <p>{index + 1}. {item.book} <span>{item.author}</span></p>
                            </li>
                        })}
                    </ul>
                </div>
                <Title number={7}
                    title={"CÂU CHUYỆN KINH DOANH CẢM HỨNG​"}
                />
                <div className='line'></div>
                <div className='block'>
                    <ul>
                        {type.emotion.map((item, index) => {
                            return <li key={index}>
                                <p>{index + 1}. {item.book} <span>{item.author}</span></p>
                            </li>
                        })}
                    </ul>
                </div>
                <TitleBold
                    title={'Hãy gọi: 0332 138 583 để mua USB ngay!!!'}
                    sub={"NGHE THỬ SÁCH NÓI "} />
                <ImageSigle imgLink={ic_22} />
                <Audio
                    title={"CHA GIÀU - CHA NGHÈO"}
                    link={'https://168trends.com/wp-content/uploads/2019/09/USB-Sách-Nói-Tủ-sách-Kinh-doanh-làm-giàu-hay-nhất-mọi-thời-đại-Usb-sách-nói.mp3'}
                />
                <Audio
                    title={"NGƯỜI GIÀU CÓ NHẤT THÀNH BABYLON"}
                    link={'https://168trends.com/wp-content/uploads/2019/09/USB-Sách-Nói-Tủ-sách-Kinh-doanh-làm-giàu-hay-nhất-mọi-thời-đại-Usb-sách-nói_2.mp3'}
                />
                <TitleIn
                    title={'Cảm nhận khách hàng'}
                    sub={'Ý kiến khách hàng đã mua và nghe USB sách nói của chúng tôi'}
                />
                <CustomerThink
                    people={'Anh Đặng Văn Nam'}
                    content={'Tôi rất thích đọc sách, mỗi ngày nhưng công việc quá nhiều tôi chưa thể sắp xếp được thời gian đọc sách của mình. Thời gian rảnh của tôi là lúc tập thể dục vào buổi sáng sớm, bởi tôi quan niệm nếu không có sức khỏe thì chẳng làm được gì. Cuối cùng tôi cũng tìm ra giải pháp để có thể đọc sách mỗi ngày, Thậm chí tôi còn tăng nhiều lần khả năng đọc sách của mình, dó chính là thay bằng đọc tôi chuyển sang nghe Audio book lúc tập thể dục nó đúng là giải pháp tuyệt vời đối với tôi'}
                />
                <ImageSigle imgLink={ic_33} />
                <TitleBold
                    title={'TẠI SAO CHỌN USB SÁCH NÓI KINH DOANH - LÀM GIÀU ?'}
                />
                <Benifit
                    title={'TẬN DỤNG THỜI GIAN RẢNH RỖI'}
                    content={'Hàng ngày, chúng ta có ít nhất 2 giờ đồng hồ cho những khoảng thời gian “chết” và lãng phí: khi di chuyển, khi ngồi rảnh, khi chờ đi ngủ, khi thức dậy. Nếu tranh thủ nghe ngấm những bài học thành công, bạn đã hơn hẳn ít nhất 90% số người xung quanh và có nhiều hơn 80% cơ hội thành đạt vượt xa họ'}
                />
                <Benifit
                    title={' NGƯỜI THÀNH ĐẠT KHUYÊN ĐỌC'}
                    content={'Bộ sách được viết bởi những người thành công nhất thế giới như Dale Carnegie, Robert Kyosaki, Anthony Robbins , được những người thành đạt và giàu có nhất thế giới như Bill Gates, JackMa… khuyên đọc. Nghe những người tài giỏi và giàu có nhất chia sẻ hàng ngày giúp bạn mở rộng nhận thức, thay đổi tư duy, tay trắng làm nên…'}
                />
                <Iwant toBottom={this.toBottom} />
                <Benifit
                    title={'TẬP TRUNG HƠN ĐỌC SÁCH GIẤY'}
                    content={'Khi đeo tai nghe, ta thường tập trung hoàn toàn.Do vậy sẽ không bị xao nhãng, buồn ngủ, mệt mỏi như khi đọc sách'}
                />
                <ImageSigle imgLink={ic_a} />
                <Benifit
                    title={'TIẾT KIỆM THỜI GIAN'}
                    content={'Bạn đang quá bận rộn hàng ngày và không có đủ thời gian thì đây là giải pháp hoàn hảo khi có chuyên gia tìm hiểu và đọc sách thay bạn. Tận dụng thời gian rảnh của bạn, thời gian "chết" của bạn không bị lãng phí khi đi lại, di chuyển, khi ngồi chờ, khi đi ngủ, khi thức dậy... nghe audio tập trung hơn đọc sách giấy.'}
                />
                <Benifit
                    title={'TÍNH ỨNG DỤNG CAO'}
                    content={'95% kiến thức được học trong các khóa học không bao giờ được áp dụng - Bạn chỉ nghe để mát-xa não và rồi... lãng quên! 80% số sách bạn mua không bao giờ được đọc hết... và để mờ bụi! Kiến thức trong chiếc USB đã được chắt lọc tinh luyện có tính ứng dụng cao vào thực tế. Khi bạn nghe audio hàng ngày, thấy điều gì hay áp dụng ngay vào cuộc sống.'}
                />
                <Benifit
                    title={'ĐẦU TƯ CÓ LÃI'}
                    content={'"Xét cho cùng, có một khoản đầu tư có thể thay thế tất cả khoản đầu tư khác: Đó là đầu tư vào bản thân. Không ai có thể lấy đi năng lực của bạn.Bạn sẽ có một cuộc sống đáng mơ ước hơn, không chỉ là về lượng tiền kiếm được mà còn là niềm vui trong cuộc sống. Vì thế, hãy đầu tư vào bản thân.Chiếc USB này sẽ là khoản đầu tư có lãi nhất trong suốt cuộc đời của bạn!'}
                />
                <Benifit
                    title={'NGẮN GỌN & DỄ HIỂU'}
                    content={'Chỉ với số tiền rất nhỏ mà có thể được sở hữu gần 100 cuốn sách best sellers của mọi thời đại (tổng trị giá trên Amazon là gần 1000 USD) (và có thêm 1 chiếc USB vô cùng hữu dụng để phục vụ cho công việc), một sự đầu tư quá xứng đáng'}
                />
                  <ImageSigle imgLink={ic_77} />
                <TitleIn
                    title={'Cảm nhận khách hàng'}
                    sub={'Ý kiến khách hàng đã mua và nghe USB sách nói của chúng tôi'}
                />
                <CustomerThink
                    people={'Chị Nguyễn Thị Thanh Hà'}
                    content={'Trước đây mỗi lần ra quyết định trong công việc kinh doanh của mình, tôi đều rất trần trừ, phải so đo tính toán rất nhiều lần rồi mới ra quyết định. Từ khi nghe audio book tôi đã tích lũy được rất nhiều kinh nghiệm và áp dụng được nhiều trong công việc kinh doanh. Đặc biệt sự quyết đoán trong công việc của tôi đã được cải thiện rõ rệt.'}
                />
                <div className='footer' id="content">
                    <p>Hotline: 0332 138 583</p>
                    <p>Đ/c: Số 71, Đa Sỹ, Kiến Hưng, Hà Đông, Hà Nội</p>
                    <h4>HÃY MUA NGAY BỘ SÁCH SỐ 1 THẾ GIỚI VÀ LẮNG NGHE CÁC CÂU CHUYỆN THÀNH CÔNG HÀNG NGÀY.</h4>
                    <h4> TƯƠNG LAI ĐANG HOÀN TOÀN Ở TRONG TAY BẠN!</h4>
                    <h5> THỜI ĐIỂM BẠN RA QUYẾT ĐỊNH.</h5>
                    <h5>LÀ LÚC VẬN MỆNH CỦA BẠN ĐƯỢC HÌNH THÀNH!</h5>
                    
                </div>
                <h1>Copyright © 2019: USB sách nói - Bí Quyết Thành Công</h1>
            </Bound>
        );
    }
}

export default App;

import React, { Component } from 'react'

export default class Promotion extends Component {
    render() {
        return (
            <div className='container'>
                <nav className=' promotion-title'>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-movie-tab" data-toggle="tab" href="#nav-movie" role="tab" aria-controls="nav-movie" aria-selected="true">Movie 24H</a>
                        <a className="nav-item nav-link" id="nav-review-tab" data-toggle="tab" href="#nav-review" role="tab" aria-controls="nav-review" aria-selected="false">Review</a>
                        <a className="nav-item nav-link" id="nav-promotion-tab" data-toggle="tab" href="#nav-promotion" role="tab" aria-controls="nav-promotion" aria-selected="false">Promotion</a>
                    </div>

                </nav>
                <div className="tab-content container" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-movie" role="tabpanel" aria-labelledby="nav-movie-tab">
                        <div className='row'>
                        <div className='col-6'>
                            <div className='thumbnail'>
                                <a href='https://123phim.vn/goc-dien-anh/7803-4-su-khac-biet-thu-vi-giua-ban-dien-anh-va-nguyen-tac-goc-cua-doctor-sleep'>
                                    <img className='img-fluid' src='./img/4-su-khac-biet-thu-vi-giua-ban-dien-anh-va-nguyen-tac-goc-cua-doctor-sleep-15738102352882.jpg' />
                                </a>
                            </div>
                            <a href='https://123phim.vn/goc-dien-anh/7803-4-su-khac-biet-thu-vi-giua-ban-dien-anh-va-nguyen-tac-goc-cua-doctor-sleep'>
                                <p>4 sự khác biệt thú vị giữa bản điện ảnh và nguyên tác gốc của Doctor Sleep</p>
                            </a>
                            <p>Mike Flanagan đã thay đổi kịch bản so với tiểu thuyết gốc, nhưng vì sao "cha đẻ" lại vô vùng thích thú, hào hứng Doctor Sleep?</p>
                        </div>
                        <div className='col-6'>
                            <div className='thumbnail'>
                                <a href='https://123phim.vn/goc-dien-anh/7799-dau-nam-2020-ju-on-san-sang-chao-don-ban-tai-phong-chieu-viet'>
                                    <img src='./img/dau-nam-2020-ju-on-san-sang-chao-don-ban-tai-phong-chieu-viet-15723562360234.jpg' />
                                </a>
                            </div>
                            <a href='https://123phim.vn/goc-dien-anh/7799-dau-nam-2020-ju-on-san-sang-chao-don-ban-tai-phong-chieu-viet'>
                                <p>Đầu năm 2020, Ju-On sẵn sàng chào đón bạn tại phòng chiếu Việt</p>
                            </a>
                            <p className='description'>Xem trailer mà gai hết người thật sự.</p>
                        </div>
                        <div className='row container promotion-more-info'>
                            <div className='col-4'>
                                <div className='thumbnail'>
                                    <a href="https://123phim.vn/goc-dien-anh/7794-bac-kim-thang-va-nhung-chi-tiet-dat-gia-trong-trailer-cuoi-cung">
                                        <img className='img-fluid' src="./img/eb43fee011ec1fb7e9ab514b4f38cb99.jpg" alt="" />
                                    </a>
                                </div>
                                <a href='https://123phim.vn/goc-dien-anh/7794-bac-kim-thang-va-nhung-chi-tiet-dat-gia-trong-trailer-cuoi-cung'>
                                    <p>Bắc Kim Thang và những chi tiết đắt giá trong trailer cuối cùng</p>
                                </a>
                                <p>Xem xong trailer này, có ai tiếc thay thân phận của Hai Lầm hay không?</p>
                            </div>
                            <div className='col-4'>
                                <div className='thumbnail'>
                                    <a href="https://123phim.vn/goc-dien-anh/7788-sau-10-ngay-khoi-chieu-joker-da-thu-ve-gan-60-ty-dong">
                                        <img className='img-fluid' src="./img/e88783518d5cadbd285b9f59ffe64d2c.jpg" alt="" />
                                    </a>
                                </div>
                                <a href='https://123phim.vn/goc-dien-anh/7788-sau-10-ngay-khoi-chieu-joker-da-thu-ve-gan-60-ty-dong'>
                                    <p>Sau 10 ngày khởi chiếu, Joker đã thu về gần 60 tỷ đồng</p>
                                </a>
                                <p>Dù đã bước sang đến tuần thứ 2 nhưng Joker vẫn chưa có dấu hiệu hạ nhiệt tại phòng chiếu Việt.</p>
                            </div>
                            <div className='col-4 side-info'>
                                <ul>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/goc-dien-anh/7787-vi-sao-joker-la-ke-pha-n-die-n-duo-c-yeu-thi-ch-nha-t">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/vi-sao-joker-la-ke-pha-n-die-n-duo-c-yeu-thi-ch-nha-t-15710479210371.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/goc-dien-anh/7787-vi-sao-joker-la-ke-pha-n-die-n-duo-c-yeu-thi-ch-nha-t">
                                            <p>Vì sao Joker là kẻ phản diện được yêu thích nhất?</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/goc-dien-anh/7784-ed-sheeran-lo-lem-lily-james-va-nhieu-sao-lon-cung-gop-mat-trong-phim-ca-nhac-yesterday">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/b3106edaf174fc6f1c9976b0e9eca940.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/goc-dien-anh/7784-ed-sheeran-lo-lem-lily-james-va-nhieu-sao-lon-cung-gop-mat-trong-phim-ca-nhac-yesterday">
                                            <p>Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt trong phim ca nhạc Yesterday</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/goc-dien-anh/7783-vuot-ai-kiem-quyet-that-son-tam-linh-chinh-thuc-tan-cong-phong-ve-viet">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/vuot-ai-kiem-quyet-that-son-tam-linh-chinh-thuc-tan-cong-phong-ve-viet-15688605409009.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/goc-dien-anh/7783-vuot-ai-kiem-quyet-that-son-tam-linh-chinh-thuc-tan-cong-phong-ve-viet">
                                            <p>Vượt ải kiểm quyệt, Thất Sơn Tâm Linh chính thức tấn công phòng vé Việt</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/goc-dien-anh/7782-khong-pho-truong-cau-ky-nhung-loi-tu-biet-lai-dang-lam-mua-lam-gio-tai-cac-lhp-trong-nam-nay">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/khong-pho-truong-cau-ky-nhung-loi-tu-biet-lai-lam-mua-lam-gio-tai-cac-lhp-nam-nay-15687978421102.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/goc-dien-anh/7782-khong-pho-truong-cau-ky-nhung-loi-tu-biet-lai-dang-lam-mua-lam-gio-tai-cac-lhp-trong-nam-nay">
                                            <p>Không phô trương, cầu kỳ nhưng Lời Từ Biệt lại đang 'làm mưa làm gió' tại các LHP trong năm nay</p>
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className=" tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                        <div className='row'>
                        <div className='col-6'>
                            <div className='thumbnail'>
                                <a href='https://123phim.vn/review/7808-ford-v-ferrari-tuyet-tac-ve-lich-su-cua-mon-the-thao-toc-do'>
                                    <img className='img-fluid' src='./img/ford-v-ferrari-tuyet-tac-ve-lich-su-cua-mon-the-thao-toc-do-15750174492320.jpg' />
                                </a>
                            </div>
                            <a href='https://123phim.vn/review/7808-ford-v-ferrari-tuyet-tac-ve-lich-su-cua-mon-the-thao-toc-do'>
                                <p>Ford v Ferrari - Tuyệt tác về lịch sử của môn thể thao tốc độ</p>
                            </a>
                            <p>Trái với quan niệm phim tiểu sử thể thao thường khô khan, Ford v Ferrari đã mang đến một câu chuyện hấp dẫn về lịch sử của ngành công nghiệp ô tô và những đường đua kịch tính.</p>
                        </div>
                        <div className='col-6'>
                            <div className='thumbnail'>
                                <a href='https://123phim.vn/review/7807-anh-trai-yeu-quai-phim-remake-xuat-sac-nhat-cua-viet-nam-la-day-chu-dau-xa'>
                                    <img src='./img/anh-trai-yeu-quai-phim-remake-xuat-sac-nhat-cua-viet-nam-la-day-chu-dau-xa-15749114677716.jpg' />
                                </a>
                            </div>
                            <a href='https://123phim.vn/review/7807-anh-trai-yeu-quai-phim-remake-xuat-sac-nhat-cua-viet-nam-la-day-chu-dau-xa'>
                                <p>Anh Trai Yêu Quái - Phim remake xuất sắc nhất của Việt Nam là đây chứ đâu xa!!!</p>
                            </a>
                            <p className='description'>Tuy là remake nhung đạo diễn Vũ Ngọc Phượng đã có nhiều sự thay đổi hợp lí giúp Anh Trai Yêu Quái cảm xúc và gần gũi với văn hóa Việt Nam hơn.

</p>
                        </div>
                        <div className='row container promotion-more-info'>
                            <div className='col-4'>
                                <div className='thumbnail'>
                                    <a href="https://123phim.vn/review/7805-frozen-ii-hau-truyen-hoanh-trang-va-dang-yeu-cua-nu-hoang-bang-gia">
                                        <img className='img-fluid' src="./img/frozen-ii-hau-truyen-hoanh-trang-va-dang-yeu-cua-nu-hoang-bang-gia-15743965987220.jpg" alt="" />
                                    </a>
                                </div>
                                <a href='https://123phim.vn/review/7805-frozen-ii-hau-truyen-hoanh-trang-va-dang-yeu-cua-nu-hoang-bang-gia'>
                                    <p>Frozen II - Hậu truyện hoành tráng và đáng yêu của Nữ Hoàng Băng Giá</p>
                                </a>
                                <p>So với phần đầu tiên, Frozen II có cốt truyện và phần hình ảnh hoành tráng hơn. Tuy nhiên, âm nhạc và thông điệp lại tỏ ra thiếu tương xứng.</p>
                            </div>
                            <div className='col-4'>
                                <div className='thumbnail'>
                                    <a href="https://123phim.vn/review/7804-hoa-hau-giang-ho-the-gioi-nhan-sac-hoa-ra-cung-drama-the-day">
                                        <img className='img-fluid' src="./img/hoa-hau-giang-ho-the-gioi-nhan-sac-hoa-ra-cung-drama-the-day-15739771420382.jpg" alt="" />
                                    </a>
                                </div>
                                <a href='https://123phim.vn/review/7804-hoa-hau-giang-ho-the-gioi-nhan-sac-hoa-ra-cung-drama-the-day'>
                                    <p>Hoa Hậu Giang Hồ - Thế giới nhan sắc hóa ra cũng drama thế đấy !!</p>
                                </a>
                                <p>Tuy còn nhiều thiếu sót trong kịch bản, Hoa Hậu Giang Hồ vẫn đủ mức giải trí khi bóc những drama phía sau các cuộc thi nhan sắc.
                                </p>
                            </div>
                            <div className='col-4 side-info'>
                                <ul>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/review/7802-phap-su-mu-ai-chet-gio-tay-phim-tru-ta-hai-huoc-va-day-y-nghia-cua-huynh-lap">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/phap-su-mu-ai-chet-gio-tay-phim-tru-ta-hai-huoc-va-day-y-nghia-cua-huynh-lap-15732194560612.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/review/7802-phap-su-mu-ai-chet-gio-tay-phim-tru-ta-hai-huoc-va-day-y-nghia-cua-huynh-lap">
                                            <p>Pháp Sư Mù: Ai Chết Giơ Tay - Phim 'trừ tà' hài hước và đầy ý nghĩa của Huỳnh Lập</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/review/7800-terminator-dark-fate-phim-hanh-dong-nghet-tho-toi-muc-can-thuoc-tro-tim">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/terminator-dark-fate-phim-hanh-dong-nghet-tho-toi-muc-can-thuoc-tro-tim-15726001115600.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/review/7800-terminator-dark-fate-phim-hanh-dong-nghet-tho-toi-muc-can-thuoc-tro-tim">
                                            <p>Terminator: Dark Fate - Phim hành động nghẹt thở tới mức cần thuốc trợ tim</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/review/7798-zombieland-double-tap-tan-the-chua-bao-gio-vui-den-the">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/zombieland-double-tap-tan-the-chua-bao-gio-vui-den-the-15723530366137.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/review/7798-zombieland-double-tap-tan-the-chua-bao-gio-vui-den-the">
                                            <p>Zombieland: Double Tap - Tận thế chưa bao giờ vui đến thế !!</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/review/7796-bac-kim-thang-phim-kinh-di-tam-ly-an-tuong-cua-dien-anh-viet">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/bac-kim-thang-phim-kinh-di-tam-ly-an-tuong-cua-dien-anh-viet-15720776719956.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/review/7796-bac-kim-thang-phim-kinh-di-tam-ly-an-tuong-cua-dien-anh-viet">
                                            <p>Bắc Kim Thang - Phim kinh dị, tâm lý ấn tượng của điện ảnh Việt</p>
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="  tab-pane fade" id="nav-promotion" role="tabpanel" aria-labelledby="nav-promotion-tab">
                        <div className='row'>
                        <div className='col-6'>
                            <div className='thumbnail'>
                                <a href='https://123phim.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai'>
                                    <img className='img-fluid' src='./img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg' />
                                </a>
                            </div>
                            <a href='https://123phim.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai'>
                                <p>[123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái</p>
                            </a>
                            <p>Từ giờ đến 05.12.2019, chỉ cần lần đầu mua vé trên 123Phim, chọn thanh toán bằng ZaloPay hoặc mục Vé Phim trên ZaloPay, bạn có thể đặt ngay vé phim Anh Trai Yêu Quái với giá chỉ 11k/vé.</p>
                        </div>
                        <div className='col-6'>
                            <div className='thumbnail'>
                                <a href='https://123phim.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay'>
                                    <img src='./img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439150313.jpg' />
                                </a>
                            </div>
                            <a href='https://123phim.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay'>
                                <p>[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay</p>
                            </a>
                            <p className='description'>123Phim đồng hành cùng phim Việt - Giảm ngay 30k mỗi giao dịch khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay trên ứng dụng 123Phim.</p>
                        </div>
                        <div className='row container promotion-more-info'>
                            <div className='col-4'>
                                <div className='thumbnail'>
                                    <a href="https://123phim.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu">
                                        <img className='img-fluid' src="./img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106171102.jpg" alt="" />
                                    </a>
                                </div>
                                <a href='https://123phim.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu'>
                                    <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
                                </a>
                                <p>Chỉ với một cành hoa hồng vào ngày 20.10 cũng sẽ đủ để cho người phụ nữ của bạn cảm thấy hạnh phúc.
                                </p>
                            </div>
                            <div className='col-4'>
                                <div className='thumbnail'>
                                    <a href="https://123phim.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang">
                                        <img className='img-fluid' src="./img/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg" alt="" />
                                    </a>
                                </div>
                                <a href='https://123phim.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang'>
                                    <p>[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang</p>
                                </a>
                                <p>123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.</p>
                            </div>
                            <div className='col-4 side-info'>
                                <ul>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/khuyen-mai/7774-sinh-nhat-mega-gs">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/sinh-nhat-mega-gs-15663931822487.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/khuyen-mai/7774-sinh-nhat-mega-gs">
                                            <p>Sinh Nhật Mega GS</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583510978777.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua">
                                            <p>[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160085058.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang">
                                            <p>[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng</p>
                                        </a>
                                    </li>
                                    <li>
                                        <div style={{ display: 'inline' }}>
                                            <a href="https://123phim.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve">
                                                <img width='50px' style={{ display: 'inline' }} src="./img/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg" alt="" />
                                            </a>
                                        </div>
                                        <a href="https://123phim.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve">
                                            <p>Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé</p>
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

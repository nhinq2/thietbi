<?php

use App\Models\Page;
use Illuminate\Database\Seeder;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Banner trang chủ
        Page::create([
            "title"      => "BANNER HOME",
            "summary"    => "",
            "content"    => "",
            "image_link" => "bg_hinh.png",
            "type"       => "banner-home",
        ]);

        //Vì sao chọn luật OPIC?
        Page::create([
            "title"      => "DỊCH VỤ",
            "summary"    => "CHUYÊN NGHIỆP",
            "content"    => "Các luật sư uy tín nhất hiện nay, chuyên nghiệp, luôn luôn sẵn sàng Tư vấn luật, bảo vệ quyền lợi khách hàng. Tư vấn luật: Hôn nhân, Đất đai, Dân sự, Hình sự, Thuế, Lao động, Doanh nghiệp.",
            "image_link" => "icon1.png",
            "type"       => "visao",
        ]);

        Page::create([
            "title"      => "GIẢI PHÁP",
            "summary"    => "THÔNG MINH",
            "content"    => "Các luật sư uy tín nhất hiện nay, chuyên nghiệp, luôn luôn sẵn sàng Tư vấn luật, bảo vệ quyền lợi khách hàng. Tư vấn luật: Hôn nhân, Đất đai, Dân sự, Hình sự, Thuế, Lao động, Doanh nghiệp.",
            "image_link" => "icon2.png",
            "type"       => "visao",
        ]);

        Page::create([
            "title"      => "TIẾT KIỆM",
            "summary"    => "CHI PHÍ",
            "content"    => "Các luật sư uy tín nhất hiện nay, chuyên nghiệp, luôn luôn sẵn sàng Tư vấn luật, bảo vệ quyền lợi khách hàng. Tư vấn luật: Hôn nhân, Đất đai, Dân sự, Hình sự, Thuế, Lao động, Doanh nghiệp.",
            "image_link" => "icon3.png",
            "type"       => "visao",
        ]);

        Page::create([
            "title"      => "TỐI ƯU",
            "summary"    => "HIỆU QUẢ",
            "content"    => "Các luật sư uy tín nhất hiện nay, chuyên nghiệp, luôn luôn sẵn sàng Tư vấn luật, bảo vệ quyền lợi khách hàng. Tư vấn luật: Hôn nhân, Đất đai, Dân sự, Hình sự, Thuế, Lao động, Doanh nghiệp.",
            "image_link" => "icon4.png",
            "type"       => "visao",
        ]);

        //Lĩnh vực hoạt động
        Page::create([
            "title"          => "Tư vấn pháp lý thường xuyên",
            "image_link"     => "lv1.png",
            "summary"        => "Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu",
            "content"        => "Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu. Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu",
            "background_url" => "img1.jpg",
            "is_front"       => 0,
            "type"           => "linhvuc",
        ]);

        Page::create([
            "title"          => "Dịch vụ pháp lý doanh nghiệp",
            "image_link"     => "lv2.jpg",
            "summary"        => "Với đội ngũ luật sư giỏi, năng động, đa lĩnh vực đã được nhiều doanh nghiệp trong nước và doanh nghiệp có vốn đầu tư ngoài lựa chọn và coi là 'Điểm tựa pháp lý' của mình.",
            "content"        => "Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu. Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu",
            "background_url" => "img1.jpg",
            "is_front"       => 0,
            "type"           => "linhvuc",
        ]);

        Page::create([
            "title"          => "Đăng ký nhãn hiệu",
            "image_link"     => "lv3.jpg",
            "summary"        => "Đăng ký nhãn hiệu hàng hóa hoặc đăng ký nhãn hiệu độc quyền là việc cấp bách và vô cùng quan trọng đối với chủ sở hữu nhãn hiệu để bảo vệ được tài sản sở hữu trí tuệ cho doanh nghiệp.",
            "content"        => "Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu. Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu",
            "background_url" => "img1.jpg",
            "is_front"       => 0,
            "type"           => "linhvuc",
        ]);

        Page::create([
            "title"          => "Giải quyết tranh chấp tranh tụng – thu hồi nợ",
            "image_link"     => "lv3.jpg",
            "summary"        => "Dịch vụ luật sư khởi kiện đòi nợ/thu hồi nợ hợp pháp thuộc gói dịch vụ luật sư trong lĩnh vực Dân sự mà Công ty Luật Opic cung cấp cho cá nhân, tổ chức, doanh nghiệp trong phạm vi cả nước.",
            "content"        => "Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu. Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu",
            "background_url" => "img1.jpg",
            "is_front"       => 0,
            "type"           => "linhvuc",
        ]);

        Page::create([
            "title"          => "Thành lập doanh nghiệp vốn đầu tư nước ngoài",
            "image_link"     => "lv4.jpg",
            "summary"        => "Thủ tục thành lập mới công ty có từ 1% đến 100% vốn đầu tư nước ngoài ... Chúng tôi hướng dẫn chi tiết thủ tục thành lập doanh nghiệp có vốn đầu tư, tục sau thành lập công ty, dịch vụ tư vấn pháp luật thuế – kế toán,...",
            "content"        => "Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu. Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu",
            "background_url" => "img1.jpg",
            "is_front"       => 0,
            "type"           => "linhvuc",
        ]);

        Page::create([
            "title"          => "Tư vấn pháp luật hình sự dân sự - hôn nhân gia đình",
            "image_link"     => "lv5.jpg",
            "summary"        => "Là một trong những dịch vụ pháp lý uy tín hàng đầu của Opic. Chúng tôi tư vấn và giải đáp mọi vướng mắc trong lĩnh vực hôn nhân gia đình linh hoạt, Tiết kiệm thời gian, công sức và chi phí đi lại.",
            "content"        => "Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu. Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu Cung câp thông tin về các quy định của pháp luật mà ảnh hưởng đến quyền và lợi ích hợp pháp của người được tư vấn. Đưa ra những giải pháp cho một công việc, hành vi cụ thể. Định hướng đến giải pháp tối ưu",
            "background_url" => "img1.jpg",
            "is_front"       => 0,
            "type"           => "linhvuc",
        ]);

        //Khách hàng
        Page::create([
            "title"      => "ANH HÀ NGUYỄN",
            "image_link" => "av.jpg",
            "summary"    => "Ngô Gia Tự - Long Biên - Hà Nội",
            "content"    => "Sau 3 tháng làm việc với Opic, được các bạn tư vấn về các hợp đồng và phương thức thành lập doanh nghiệp vốn nước ngoài, tôi cảm thấy rất hài lòng. Dịch vụ tốt, các bạn cũng rất tận tình, chuyên nghiệp và thái độ vui vẻ. Chúc Opic càng ngày càng phát triển hơn nữa.",
            "type"       => "khachhang",
        ]);

        Page::create([
            "title"      => "CHỊ HÀ NGUYỄN",
            "image_link" => "av2.jpg",
            "summary"    => "Ngô Gia Tự - Long Biên - Hà Nội",
            "content"    => "Sau 3 tháng làm việc với Opic, được các bạn tư vấn về các hợp đồng và phương thức thành lập doanh nghiệp vốn nước ngoài, tôi cảm thấy rất hài lòng. Dịch vụ tốt, các bạn cũng rất tận tình, chuyên nghiệp và thái độ vui vẻ. Chúc Opic càng ngày càng phát triển hơn nữa.",
            "type"       => "khachhang",
        ]);

        Page::create([
            "title"      => "ANH HÀ NGUYỄN",
            "image_link" => "av.jpg",
            "summary"    => "Ngô Gia Tự - Long Biên - Hà Nội",
            "content"    => "Sau 3 tháng làm việc với Opic, được các bạn tư vấn về các hợp đồng và phương thức thành lập doanh nghiệp vốn nước ngoài, tôi cảm thấy rất hài lòng. Dịch vụ tốt, các bạn cũng rất tận tình, chuyên nghiệp và thái độ vui vẻ. Chúc Opic càng ngày càng phát triển hơn nữa.",
            "type"       => "khachhang",
        ]);

        //Luật sư và cộng sự
        Page::create([
            "title"      => "Luật sư Nguyễn Phó Dũng",
            "image_link" => "people-1.jpg",
            "summary"    => "Giám Đốc điều hành",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);

        Page::create([
            "title"      => "Tiến sĩ Lê Hồng Sơn",
            "image_link" => "people-2.jpg",
            "summary"    => "...",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);

        Page::create([
            "title"      => "Đàm Lệ Quyên",
            "image_link" => "people-3.jpg",
            "summary"    => "Phó Giám Đốc",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);

        Page::create([
            "title"      => "Nguyễn Hồng Nhung",
            "image_link" => "people-4.jpg",
            "summary"    => "Chuyên viên Pháp lý",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);

        Page::create([
            "title"      => "Nguyễn Thị Thúy Hà",
            "image_link" => "people-5.jpg",
            "summary"    => "Chuyên viên Pháp lý",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);

        Page::create([
            "title"      => "Phạm Bạch Tuyết",
            "image_link" => "people-6.jpg",
            "summary"    => "Chuyên viên Pháp lý",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);

        Page::create([
            "title"      => "Phạm Thị Dung",
            "image_link" => "people-7.jpg",
            "summary"    => "Chuyên viên Pháp lý",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);

        Page::create([
            "title"      => "Vũ Thùy Trang",
            "image_link" => "people-8.jpg",
            "summary"    => "Chuyên viên Pháp lý",
            "content"    => "Kinh nghiệm 5 năm trong các vấn đề tư vấn doanh nghiệp, giúp giải quyết nhanh chóng các vấn đề tồn đọng.",
            "is_front"   => 0,
            "type"       => "luatsu",
        ]);
    }
}

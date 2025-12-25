document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const startBtn = document.getElementById('start-btn');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('bg-music');
    const card = document.querySelector('.card');

    // Giả lập thời gian tải (3 giây)
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        startBtn.style.display = 'block'; // Hiện nút bắt đầu
    }, 3000);

    // --- PHẦN ĐÃ SỬA ---
    // Khi bấm nút Start
    startBtn.addEventListener('click', () => {
        
        // 1. PHÁT NHẠC NGAY LẬP TỨC (Không được chờ đợi)
        // Đây là "giấy phép" để trình duyệt cho phép phát nhạc
        if (music) {
            music.play().then(() => {
                console.log("Nhạc đã phát!");
            }).catch(error => {
                console.log("Lỗi phát nhạc: ", error);
            });
        }

        // 2. Sau đó mới làm hiệu ứng mờ màn hình
        loadingScreen.style.opacity = '0'; // Mờ dần

        // 3. Đợi 1 giây cho mờ hẳn rồi mới ẩn và hiện quà
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Ẩn hẳn loading
            mainContent.classList.remove('hidden'); // Hiện nội dung chính
            createSnow(); // Bắt đầu tạo tuyết
        }, 1000);
    });
    // ------------------

    // Hiệu ứng mở thiệp khi click vào thiệp
    card.addEventListener('click', () => {
        card.classList.toggle('open');
    });

    // Hàm tạo tuyết rơi
    function createSnow() {
        const snowContainer = document.querySelector('.snow-container');
        setInterval(() => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            
            // Random vị trí bắt đầu
            snowflake.style.left = Math.random() * 100 + 'vw';
            
            // Random kích thước tuyết
            const size = Math.random() * 10 + 5; 
            snowflake.style.width = size + 'px';
            snowflake.style.height = size + 'px';
            
            // Random tốc độ rơi
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            
            snowContainer.appendChild(snowflake);

            // Xóa tuyết sau khi rơi xong để nhẹ máy
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }, 100); // Cứ 0.1s tạo 1 bông tuyết
    }
});
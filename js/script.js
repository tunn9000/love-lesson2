    document.addEventListener('DOMContentLoaded', function() {
        let tempdata = {
            "clickCount": 0
        }

        const heart = document.querySelector("#solid-heart");
        const heart_container = document.querySelector(".heart-container");
        const msg_container = document.querySelector("#message-container");
        const msg_element = document.querySelector("#message");
        const md = window.markdownit({html: true});

        function loadFile(md, filename) {
            fetch(filename)
                .then(response => response.text())
                .then(data => {
                    msg_element.innerHTML = md.render(data);
                })
                .catch(error => {
                    msg_element.innerHTML = `<p>An error occurred while fetching the content of ${filename}</p>`;
                });
        }

        heart.addEventListener("click", function() {
            tempdata.clickCount++;

            if (tempdata.clickCount === 1) {
                loadFile(md, "message.txt"); // โหลด "message.txt" เมื่อคลิกครั้งแรก
            } else if (tempdata.clickCount === 2) {
                loadFile(md, "002.txt"); // โหลด "002.txt" เมื่อคลิกครั้งที่สอง
            } else if (tempdata.clickCount === 3) {
                loadFile(md, "003.txt"); // โหลด "003.txt" เมื่อคลิกครั้งที่สาม
            } else if (tempdata.clickCount === 4) {
                loadFile(md, "004.txt");
            } else if (tempdata.clickCount === 5) {
                
                msg_element.innerHTML = `
                <video controls autoplay>
                    <source src="done.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            // ไม่ต้องแสดง container ข้อความอื่น ๆ
            msg_container.style.display = "none";
            // ไม่ต้องปรับขนาด container ให้สูงขึ้น
            // ไม่ต้องปรับ margin-top ของ container หัวใจ
            // ไม่ต้องปรับความสูงของ container ข้อความ
            return; // ออกจากฟังก์ชันทันทีหลังจากเปิดวิดีโอ
                playVideo();
            }
            

            msg_container.style.display = "block";
            heart_container.style.marginTop = "-1.5%";

            const auto_css_height = msg_container.scrollHeight + 100; // 20 extra padding
            msg_container.style.height = auto_css_height + "px";
        });
    })
    function playVideo() {
        const videoContainer = document.createElement("div");
        videoContainer.innerHTML = `
            <video controls autoplay>
                <source src="done.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        
        // เพิ่มไฟล์วิดีโอลงในตำแหน่งที่ต้องการให้แสดง
        document.body.appendChild(videoContainer);
    }

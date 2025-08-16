 let videosData = [];
        const container = document.getElementById('buttonsContainer');
        const iframe = document.getElementById('mainVideo');
        const titleEl = document.getElementById('videoTitle');
        const descEl = document.getElementById('videoDesc');
        const searchInput = document.getElementById('search');

        function renderButtons(list) {
            container.innerHTML = '';
            list.forEach((item) => {
                const btn = document.createElement('button');
                btn.className = 'btn';
                btn.type = 'button';
                btn.dataset.originalIndex = item.__originalIndex;

                const safeButtonText = document.createElement('span');
                safeButtonText.className = 'small-title';
                safeButtonText.textContent = item.buttonText || item.buttonText || '';

                // const safeSmallDesc = document.createElement('span');
                // safeSmallDesc.className = 'small-desc';
                // safeSmallDesc.textContent = item.description ? item.description.slice(0, 60) + (item.description.length > 60 ? '…' : '') : '';

                btn.appendChild(safeButtonText);
                container.appendChild(btn);
            });
        }

        function changeVideoByIndex(index) {
            const video = videosData[index];
            if (!video) return;
            iframe.src = video.url;
            titleEl.textContent = video.title || '';
            descEl.textContent = video.description || '';
            Array.from(container.children).forEach(btn => {
                btn.classList.toggle('active', btn.dataset.originalIndex == index);
            });
        }

        container.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn');
            if (!btn) return;
            const orig = parseInt(btn.dataset.originalIndex, 10);
            if (Number.isFinite(orig)) changeVideoByIndex(orig);
        });

        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.trim().toLowerCase();
            if (!q) {
                renderButtons(videosData.map((it, idx) => ({ ...it, __originalIndex: idx })));
                return;
            }
            const filtered = videosData
                .map((it, idx) => ({ ...it, __originalIndex: idx }))
                .filter(item =>
                    (item.buttonText && item.buttonText.toLowerCase().includes(q)) ||
                    (item.title && item.title.toLowerCase().includes(q)) ||
                    (item.description && item.description.toLowerCase().includes(q))
                );
            renderButtons(filtered);
        });

        // تحميل البيانات من ملف JSON وتصفية Excel فقط
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                // تصفية الفئة Excel فقط
                videosData = data.filter(item => item.category && item.category.toLowerCase() === 'word');
                const prepared = videosData.map((it, idx) => ({ ...it, __originalIndex: idx }));
                renderButtons(prepared);
                if (videosData.length > 0) changeVideoByIndex(0);
            })
            .catch(err => console.error('خطأ في تحميل JSON:', err));
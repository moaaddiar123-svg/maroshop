// data.js

const categories = [
    { id: 'all', name: 'الرئيسية' },
    { id: 'كهربائية', name: 'أجهزة كهربائية' },
    { id: 'ملابس', name: 'ملابس' },
    { id: 'جوالات', name: 'جوالات وملحقاتها' },
    { id: 'أثاث', name: 'أثاث وتخزين' },
    { id: 'رياضة', name: 'رياضة' }
];

const productsData = [
    // --- كهربائية (6 منتجات) ---
    { id: 1, name: 'ماكينة قهوة فاخرة', price: 12500, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1574227492706-f4254bc76df8?w=600', desc: 'ماكينة قهوة احترافية مع ضغط عالي وتصميم أنيق.' },
    { id: 2, name: 'خلاط كهربائي قوي', price: 5900, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600', desc: 'خلاط متعدد الاستخدامات بقوة 1000 واط.' },
    { id: 3, name: 'مكواة بخار سريعة', price: 3500, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600', desc: 'مكواة ملابس بخار مع قاعدة ستانلس ستيل.' },
    { id: 4, name: 'مروحة سقف كبيرة', price: 8500, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1563170401-fceabf33d5cb?w=600', desc: 'مروحة سقف عصرية مع إضاءة LED و3 سرعات.' },
    { id: 5, name: 'مدفأة كهربائية معترضة', price: 12000, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600', desc: 'مدفأة كهربائية بتصميم ناري واقعي وترموستات.' },
    { id: 6, name: 'ميكروويف رقمي', price: 18500, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600', desc: 'ميكروويف رقمي 20 لتر مع شواية ووظائف متعددة.' },

    // --- ملابس (6 منتجات) ---
    { id: 7, name: 'جاكيتة رجالي صيفي', price: 4500, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1521572163474-6864f9a17cc?w=600', desc: 'جاكيتة خفيفة ومريحة مناسبة للخروجات.' },
    { id: 8, name: 'تيشيرت رياضي قطن', price: 2900, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1594938298601-c71485980c4a?w=600', desc: 'تيشيرت قطن 100% يمتص العرق.' },
    { id: 9, name: 'بنطال جينز كلاسيك', price: 5500, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600', desc: 'بنطال جينز أزرق كلاسيك بقطع مريح.' },
    { id: 10, name: 'حذاء رياضي مريح', price: 8000, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600', desc: 'حذاء رياضي بنعل طبي مريح للمشي.' },
    { id: 11, name: 'حقيبة ظهر للسفر', price: 6200, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600', desc: 'حقيبة ظهر للسفر والعمل، مقاومة للماء.' },
    { id: 12, name: 'ساعة يد كاجوال', price: 3500, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600', desc: 'ساعة يد أنيقة بجلد طبيعي ومقاومة للماء.' },

    // --- جوالات (6 منتجات) ---
    { id: 13, name: 'هاتف ذكي 5G', price: 55000, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1511703855734-44950d4e75e?w=600', desc: 'هاتف ذكي بكاميرا 108 ميجابيكسل وذاكرة 256 جيجا.' },
    { id: 14, name: 'سماعات بلوتوث', price: 3200, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1592899637677-27d4dd8023ba?w=600', desc: 'سماعات لاسلكية مع عزل ضوضاء وميكروفون.' },
    { id: 15, name: 'ساعة ذكية رياضية', price: 9500, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600', desc: 'ساعة ذكية تتبع النشاط البدني والصحي.' },
    { id: 16, name: 'شاحن سريع 20W', price: 1500, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600', desc: 'شاحن سريع 20 وات متوافق مع جميع الهواتف.' },
    { id: 17, name: 'بانك طاقة 10000mAh', price: 4000, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600', desc: 'بنك طاقة بسعة 10000 ميلي أمبير وشحن سريع.' },
    { id: 18, name: 'كفر حماية للهاتف', price: 1200, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600', desc: 'كفر حماية مضاد للصدمات مع دعم للمغناطيس.' },

    // --- أثاث (6 منتجات) ---
    { id: 19, name: 'كرسي مكتبي مريح', price: 9500, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1505693314120-0d1db561277f?w=600', desc: 'كرسي مريح مع دعم للعمود الفقري للجلوس الطويل.' },
    { id: 20, name: 'طاولة خشبية عصرية', price: 8500, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1532372320572-c4df21d637d2?w=600', desc: 'طاولة خشبية أنيقة للصالة أو غرفة الطعام.' },
    { id: 21, name: 'كنبة زاوية مودرن', price: 65000, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', desc: 'كنبة زاوية مودرن بقماش فاخر ولون رمادي.' },
    { id: 22, name: 'رف كتب معدني', price: 7000, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600', desc: 'رف كتب معدني بـ 5 طوابق، سهل التجميع.' },
    { id: 23, name: 'سرير مزدوج مع مرتبة', price: 45000, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1505693416388-b034675ad366?w=600', desc: 'سرير مزدوج مع مرتبة مريحة وتصميم أنيق.' },
    { id: 24, name: 'خزانة أطباق زجاج', price: 22000, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1556909220-2748a99d47e9?w=600', desc: 'خزانة أطباق زجاجية أنيقة مع إضاءة داخلية.' },

    // --- رياضة (6 منتجات) ---
    { id: 25, name: 'شريط مقاومة', price: 12000, cat: 'رياضة', img: 'https://www.nedshoop.com/web/image/product.product/775/image_1024/bande%20de%20Resistance%20%28copie%29?unique=4848a2f', desc: 'طقم دمبلز قابل لتغيير الوزن من 2 كيلو إلى 20 كيلو.' },
    { id: 26, name: 'سجادة يوغا احترافية', price: 2500, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600', desc: 'سجادة يوغا سميكة ومضادة للانزلاق.' },
    { id: 27, name: 'كرة قدم احترافية', price: 3200, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=600', desc: 'كرة قدم بحجم 5 ومادة عالية الجودة.' },
    { id: 28, name: 'حقيبة رياضية كبيرة', price: 4800, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600', desc: 'حقيبة رياضية كبيرة مع جيوب متعددة للأحذية.' },
    { id: 29, name: 'زجاجة ماء رياضية', price: 1200, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600', desc: 'زجاجة ماء رياضية ستانلس سعة 750 مل.' },
    { id: 30, name: 'حبل القفز', price: 1800, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600', desc: 'حبل قفز مقاوم للتمدد، طول 3 أمتار.' },
];

// منطق السلة (Cart Logic) - لا تغيير هنا
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('maroCart')) || [];
    const product = productsData.find(p => p.id === productId);
    
    if (!product) return;
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    localStorage.setItem('maroCart', JSON.stringify(cart));
    updateCartCount();
    alert('تمت الإضافة للسلة!');
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('maroCart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('maroCart', JSON.stringify(cart));
    location.reload(); 
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('maroCart')) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cart-count');
    if(badge) {
        badge.innerText = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

document.addEventListener('DOMContentLoaded', updateCartCount);


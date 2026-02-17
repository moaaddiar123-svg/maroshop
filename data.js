// data.js

// قائمة الأقسام (Categories)
const categories = [
    { id: 'all', name: 'الرئيسية' },
    { id: 'كهربائية', name: 'أجهزة منزلية و كهربائية' },
    { id: 'ملابس', name: 'ملابس' },
    { id: 'جوالات', name: 'جوالات وملحقاتها' },
    { id: 'أثاث', name: 'أثاث وتخزين' },
    { id: 'رياضة', name: 'رياضة' }
];

// قائمة المنتجات (Products)
// ملاحظة: تأكد أن حقل cat يطابق id واحد من الأقسام بالضبط
const productsData = [
    // --- كهربائية ---
    { id: 1, name: 'مفرمة طعام كهربائية متعددة الوظائف', price: 2400, cat: 'كهربائية', img: 'https://www.nedshoop.com/web/image/product.product/804/image_1024/Electric%20Food%20Chopper%20Multifunction%20%28copie%29?unique=aa29207', desc: ' تصميم  مريح سهل التنظيف ولا يؤذي اليدين يتضمن ملعقة مسطحة و يكشط الطعام بسهولة   المواد: ABS + PP + AS + PC + فولاذ مقاوم للصدأ  الحجم: حوالي 18.5 × 13.1 × 93.8 سم / 7.28 × 5.16 × 3.68 بوصة سعة البطارية: 1200 مللي أمبير' },
    { id: 2, name: 'مبراة سكاكين', price: 900, cat: 'كهربائية', img: 'https://www.nedshoop.com/web/image/product.product/811/image_1024/Sharpener%20Aiguiseur%20De%20Couteaux%20%28copie%29?unique=b146e7a', desc: 'هذه أداة شحذ سكاكين عملية 3 في 1 لشحذ سكاكين المطبخ الباهتة. تحتوي على 3 فتحات (للسيراميك، والخشن، والناعم) لشحذ سكاكين الفولاذ المقاوم للصدأ  والسيراميك' },
    { id: 3, name: 'موزع ورق', price: 1500, cat: 'كهربائية', img: 'https://www.nedshoop.com/web/image/product.product/622/image_1024/Distributeur%20Papier%20%28copie%29?unique=9667536', desc: ' حامل ثلاثي العجلات مزود بمنزلقين من الألومنيوم لتقطيع الطعام وغشاء شفاف. بالإضافة إلى حجرة تخزين إضافية للأغراض مثل التوابل أو القطع الصغيرة' },
    { id: 4, name: 'مفرمة كهربائية صغيرة لاسلكية ', price: 1400, cat: 'كهربائية', img: 'https://www.nedshoop.com/web/image/product.product/632/image_1024/Mini%20Hachoir%20Electrique%20Sans%20Fil%20%28copie%29?unique=0ad32d8', desc: ' مفرمة اللحم مزودة بمكبس سهل الاستخدام و بضغطة زر بسيطة ستنجز المهمة باحترافية. أداة عالية الجودة مصنوعة من الفولاذ المقاوم للصدأ تتيح لك الفرم في ثوانٍ.' },
    { id: 5, name: 'Panineuse بانينوز', price: 5300, cat: 'كهربائية', img: 'https://www.nedshoop.com/web/image/product.product/768/image_1024/Panineuse%20%28copie%29?unique=79952b5', desc: 'ألواح قوية غير لاصقة لسهولة التنظيف لها مؤشرات ضوئية لانخفاض الطاقة  سهلة  التشغيل و تحكم تلقائي في درجة الحرارة  بمساحة تخزين صغيرة و قواعد مانعة للانزلاق / سعة الطاقة 1500 واط ( ماركة أورفيك )' },

    // --- ملابس ---
    { id: 6, name: 'جاكيتة رجالي صيفي', price: 4500, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1521572163474-6864f9a17cc?w=600', desc: 'جاكيتة خفيفة ومريحة مناسبة للفصل الدافئ.' },
    { id: 7, name: 'تيشيرت رياضي قطن', price: 2900, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1594938298601-c71485980c4a?w=600', desc: 'تيشيرت قطن 100% يمتص العرق.' },
    
    // --- جوالات ---
    { id: 8, name: 'هاتف ذكي 5G', price: 55000, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1511703855734-44950d4e75e?w=600', desc: 'هاتف بكاميرا 108 ميجابيكسل وشاشة AMOLED.' },
    { id: 9, name: 'سماعات بلوتوث', price: 3200, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1592899637677-27d4dd8023ba?w=600', desc: 'سماعات لاسلكية مع عزل ضوضاء وميكروفون عالي الجودة.' },
    
    // --- أثاث ---
    { id: 10, name: 'كرسي مكتبي مريح', price: 9500, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1505693314120-0d1db561277f?w=600', desc: 'كرسي مريح مع دعم للعمود الفقري للجلوس الطويل.' },
    { id: 11, name: 'طاولة خشبية عصرية', price: 8500, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1532372320572-c4df21d637d2?w=600', desc: 'طاولة خشبية أنيقة للصالة أو غرفة الطعام.' },
    
    // --- رياضة ---
    { id: 12, name: 'طقم دمبلز منزلي', price: 12000, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1588376527901-6c2890747867?w=600', desc: 'طقم دمبلز قابل لتغيير الوزن من 2 كيلو إلى 20 كيلو.' },
    { id: 13, name: 'سجادة يوغا', price: 2500, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600', desc: 'سجادة يوغا سميكة ومضادة للانزلاق.' },
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








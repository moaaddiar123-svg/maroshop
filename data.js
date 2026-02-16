// data.js

// 1. البيانات الأساسية
const categories = [
    { id: 'all', name: 'الرئيسية' },
    { id: 'كهربائية', name: 'أجهزة كهربائية' },
    { id: 'ملابس', name: 'ملابس' },
    { id: 'جوالات', name: 'جوالات' },
    { id: 'أثاث', name: 'أثاث' },
    { id: 'رياضة', name: 'رياضة' }
];

const productsData = [
    // --- كهربائية ---
    { id: 1, name: 'ماكينة قهوة فاخرة', price: 12500, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1574227492706-f4254bc76df8?w=600', desc: 'ماكينة قهوة احترافية مع ضغط عالي.' },
    { id: 2, name: 'خلاط كهربائي متعدد', price: 5900, cat: 'كهربائية', img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600', desc: 'خلاط قوي 1000 واط.' },
    
    // --- ملابس ---
    { id: 3, name: 'جاكيتة رجالي صيفي', price: 4500, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1521572163474-6864f9a17cc?w=600', desc: 'جاكيتة خفيفة ومريحة.' },
    { id: 4, name: 'تيشيرت رياضي قطن', price: 2900, cat: 'ملابس', img: 'https://images.unsplash.com/photo-1594938298601-c71485980c4a?w=600', desc: 'تيشيرت قطن 100%.' },
    
    // --- جوالات ---
    { id: 5, name: 'هاتف ذكي 5G', price: 55000, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1511703855734-44950d4e75e?w=600', desc: 'هاتف بكاميرا 108 ميجابيكسل.' },
    { id: 6, name: 'سماعات بلوتوث', price: 3200, cat: 'جوالات', img: 'https://images.unsplash.com/photo-1592899637677-27d4dd8023ba?w=600', desc: 'سماعات لاسلكية مع عزل ضوضاء.' },
    
    // --- أثاث ---
    { id: 7, name: 'كرسي مكتبي مريح', price: 9500, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1505693314120-0d1db561277f?w=600', desc: 'كرسي مريح للجلوس الطويل.' },
    { id: 8, name: 'طاولة خشبية عصرية', price: 8500, cat: 'أثاث', img: 'https://images.unsplash.com/photo-1532372320572-c4df21d637d2?w=600', desc: 'طاولة خشبية أنيقة.' },
    
    // --- رياضة ---
    { id: 9, name: 'طقم دمبلز منزلي', price: 12000, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1588376527901-6c2890747867?w=600', desc: 'طقم دمبلز قابل لتغيير الوزن.' },
    { id: 10, name: 'سجادة يوغا', price: 2500, cat: 'رياضة', img: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600', desc: 'سجادة يوغا سميكة ومضادة للانزلاق.' },
];

// 2. منطق السلة (Cart Logic)

// إضافة منتج للسلة وحفظه في المتصفح
function addToCart(productId) {
    // جلب السلة الحالية
    let cart = JSON.parse(localStorage.getItem('maroCart')) || [];
    
    // البحث عن المنتج
    const product = productsData.find(p => p.id === productId);
    
    if (!product) return;

    // التحقق هل المنتج موجود مسبقاً؟
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    // حفظ السلة مرة أخرى
    localStorage.setItem('maroCart', JSON.stringify(cart));
    
    // تحديث العداد
    updateCartCount();
    
    // تنبيه بسيط
    alert('تمت الإضافة للسلة!');
}

// حذف منتج من السلة
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('maroCart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('maroCart', JSON.stringify(cart));
    // إعادة تحميل الصفحة لتحديث العرض
    location.reload(); 
}

// تحديث الرقم الصغير على أيقونة السلة
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('maroCart')) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    
    // البحث عن العنصر الذي يحمل id cart-count
    const badge = document.getElementById('cart-count');
    if(badge) {
        badge.innerText = count;
        // إظهاره أو إخفاؤه
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// عند تحميل أي صفحة، قم بتحديث عداد السلة تلقائياً
document.addEventListener('DOMContentLoaded', updateCartCount);

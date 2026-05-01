import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageCircle, ChevronDown, X, User, Instagram } from 'lucide-react';

type Language = 'EN' | 'TH';

interface TranslationStrings {
  navLogo: string;
  heroHeadline: string;
  heroSub: string;
  howItWorksTitle: string;
  howItWorksSteps: { title: string; desc: string }[];
  inspirationTitle: string;
  inspirationLabels: { travel: string; family: string; pets: string; passion: string };
  footerBrand: string;
  footerContact: string;
  brandStoryQuote: string;
  contactTitle: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  footerPrivacy: string;
  footerTerms: string;
  privacyPolicyTitle: string;
  privacyPolicy: { title: string; body: string }[];
  termsTitle: string;
  termsOfService: { title: string; body: string }[];
}

const translations: Record<Language, TranslationStrings> = {
  EN: {
    navLogo: 'MemoTile',
    heroHeadline: 'Moments you love, now on your wall.',
    heroSub: 'Turn your favorite photos into 4K Premium Gallery Quality 20x20cm tiles in seconds. No nails, no damage.',
    howItWorksTitle: 'How It Works',
    howItWorksSteps: [
      { title: 'Step 1: Select Photos', desc: 'Choose your best memories directly from your phone gallery.' },
      { title: 'Step 2: Edit & Crop', desc: 'Perfectly fit your photos to our standard 20x20cm premium tiles.' },
      { title: 'Step 3: Stick \'em up', desc: 'Peel, stick, and restick. No tools or nails required.' },
    ],
    inspirationTitle: 'Get Inspired',
    inspirationLabels: { travel: 'Travel', family: 'Family', pets: 'Pets', passion: 'Passion (Fandom)' },
    footerBrand: 'MemoTile - High-quality photo tiles that stick to your life.',
    footerContact: 'Contact Us',
    brandStoryQuote: 'Countless beautiful photos are frozen inside your gallery app, slowly being forgotten. MemoTile brings those precious memories out — alive on your wall and present in your everyday life. The most perfect gift for you and the ones you love.',
    contactTitle: 'Get in Touch',
    faqTitle: 'Frequently Asked Questions',
    faqItems: [
      { q: 'What size are the frames?', a: 'Our frames are borderless square tiles, 20 × 20 cm.' },
      { q: 'Will it damage my wall?', a: 'No — the frames are designed to be removable and will not damage most wall surfaces when used correctly.' },
      { q: 'How long does shipping take?', a: 'Our frames are custom-made and typically ship within 5 days. Times may vary slightly based on production volume and location.' },
      { q: 'What if a frame falls off the wall?', a: 'MEMOTILE frames are designed to be removed and reattached multiple times. If you experience adhesion issues, please contact customer support.' },
      { q: 'What if my image file is low resolution?', a: 'MEMOTILE is known for print quality. If you receive a damaged item or experience a quality issue, please contact customer support.' },
      { q: 'Can I modify my order after placing it?', a: 'You may modify your order until the printing process begins. Once printed, changes or cancellations are not possible as it is a custom product.' },
    ],
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
    privacyPolicyTitle: 'Privacy Policy',
    privacyPolicy: [
      { title: '1. Personal Data Collected', body: 'We collect your name, address, email, phone number, and payment information when you place an order. We may also collect image files you upload to create your tiles.' },
      { title: '2. How We Collect Data', body: 'Data is collected directly from you when you use our app or website, place an order, or contact our support team.' },
      { title: '3. Purpose of Use', body: 'Your data is used to process and fulfill orders, communicate about your order, improve our services, and comply with legal obligations.' },
      { title: '4. Disclosure of Data', body: 'We share your data with trusted delivery partners and payment processors as required. We do not sell your personal data to third parties.' },
      { title: '5. Data Security', body: 'We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.' },
      { title: '6. Data Retention', body: 'We retain your data as long as necessary to provide services and meet legal requirements, typically no longer than 3 years after your last transaction.' },
      { title: '7. Your Rights', body: 'You have the right to access, correct, or delete your personal data. Contact us at official@memotile.com to exercise these rights.' },
      { title: '8. Cookies', body: 'Our website uses cookies to enhance your experience. You may disable cookies in your browser settings, though some features may be affected.' },
      { title: '9. Policy Changes', body: 'We may update this policy periodically. Significant changes will be communicated via email or a prominent notice on our website.' },
      { title: '10. Contact', body: 'For privacy inquiries, contact us at official@memotile.com or Line: @memotile.' },
      { title: '11. Consent', body: 'By using our services, you consent to the collection and use of your information as described in this Privacy Policy.' },
    ],
    termsTitle: 'Terms of Service',
    termsOfService: [
      { title: '1. Service Description', body: 'MemoTile provides custom photo tile printing and delivery. Users may upload photos to create 20×20cm borderless wall tiles.' },
      { title: '2. Account Registration', body: 'You may be required to create an account to place an order. You are responsible for maintaining the confidentiality of your credentials.' },
      { title: '3. Acceptable Use', body: 'You agree not to upload illegal, offensive, or copyright-infringing content. MemoTile reserves the right to refuse orders violating these guidelines.' },
      { title: '4. Intellectual Property', body: 'You retain ownership of your photos. By uploading, you grant MemoTile a limited license to reproduce images solely to fulfill your order.' },
      { title: '5. Orders & Payment', body: 'Prices are listed in Thai Baht (THB). Orders are confirmed upon successful payment. We accept major credit cards and local payment methods.' },
      { title: '6. Order Cancellation', body: 'Orders may be cancelled before printing begins. Once printing has started, cancellation is not possible due to the custom nature of the product.' },
      { title: '7. Shipping', body: 'Custom orders typically ship within 5 business days. Delivery times vary by location. International shipping is available to select regions.' },
      { title: '8. Returns & Refunds', body: 'We accept returns or offer reprints for defective or damaged items. Contact support within 7 days of receipt. Custom products are non-refundable unless defective.' },
      { title: '9. Liability', body: 'MemoTile is not liable for any indirect, incidental, or consequential damages arising from the use of our services.' },
      { title: '10. Disclaimer', body: 'Our services are provided "as is." We do not guarantee uninterrupted or error-free service and are not liable for delays caused by third-party carriers.' },
      { title: '11. Governing Law', body: 'These terms are governed by the laws of the Kingdom of Thailand. Any disputes shall be resolved in Thai courts.' },
      { title: '12. Dispute Resolution', body: 'In the event of a dispute, please contact us first at official@memotile.com so we may resolve the issue amicably.' },
      { title: '13. Changes to Terms', body: 'We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance.' },
      { title: '14. Termination', body: 'MemoTile may suspend or terminate your account if you violate these terms. You may also discontinue use at any time.' },
      { title: '15. Contact', body: 'For questions about these terms, contact us at official@memotile.com or Line: @memotile.' },
    ],
  },
  TH: {
    navLogo: 'MemoTile',
    heroHeadline: 'ช่วงเวลาที่คุณรัก บนผนังของคุณ',
    heroSub: 'เปลี่ยนรูปภาพโปรดของคุณเป็นกรอบรูป 4K ระดับพรีเมียมขนาด 20x20 ซม. ในไม่กี่วินาที ไม่ต้องเจาะผนัง ไม่ทิ้งรอย',
    howItWorksTitle: 'ขั้นตอนการจัดวาง',
    howItWorksSteps: [
      { title: 'Step 1: เลือกรูปภาพ', desc: 'เลือกความทรงจำที่ดีที่สุดจากแกลเลอรีในโทรศัพท์ของคุณ' },
      { title: 'Step 2: ปรับแต่งและครอบตัด', desc: 'ปรับแต่งรูปภาพของคุณให้พอดีกับกรอบรูปพรีเมียมขนาด 20x20 ซม.' },
      { title: 'Step 3: ลอกแล้วแปะเลย', desc: 'ลอก แปะ และเปลี่ยนตำแหน่งได้ตามต้องการ ไม่ต้องใช้เครื่องมือหรือเจาะผนัง' },
    ],
    inspirationTitle: 'แรงบันดาลใจ',
    inspirationLabels: { travel: 'ท่องเที่ยว', family: 'ครอบครัว', pets: 'สัตว์เลี้ยง', passion: 'ความชอบ (แฟนดอม)' },
    footerBrand: 'MemoTile - กรอบรูปคุณภาพสูงที่ติดแน่นไปกับชีวิตของคุณ',
    footerContact: 'ติดต่อเรา',
    brandStoryQuote: 'รูปภาพสวยงามมากมายถูกแช่แข็งอยู่ในแกลเลอรีของคุณ ค่อยๆ ลืมเลือนไป MemoTile นำความทรงจำอันล้ำค่าเหล่านั้นออกมา — มีชีวิตบนผนังของคุณและอยู่ในชีวิตประจำวันของคุณ ของขวัญที่สมบูรณ์แบบที่สุดสำหรับคุณและคนที่คุณรัก',
    contactTitle: 'ติดต่อเรา',
    faqTitle: 'คำถามที่พบบ่อย',
    faqItems: [
      { q: 'กรอบรูปมีขนาดเท่าไหร่?', a: 'กรอบรูปของเราเป็นทรงจัตุรัสแบบไร้ขอบ ขนาด 20 × 20 ซม.' },
      { q: 'ติดแล้วจะทำให้ผนังเสียไหม?', a: 'ไม่เสีย — กรอบรูปถูกออกแบบมาให้ลอกออกได้ และไม่ทำลายพื้นผิวผนังส่วนใหญ่เมื่อใช้งานอย่างถูกต้อง' },
      { q: 'การจัดส่งใช้เวลานานแค่ไหน?', a: 'กรอบรูปของเราสั่งทำพิเศษ และโดยปกติจะจัดส่งภายใน 5 วัน ระยะเวลาอาจแตกต่างกันเล็กน้อยตามปริมาณการผลิตและพื้นที่' },
      { q: 'ถ้ากรอบรูปหลุดจากผนังต้องทำอย่างไร?', a: 'กรอบรูป MEMOTILE ออกแบบมาให้ถอดและติดใหม่ได้หลายครั้ง หากคุณพบปัญหาในการยึดเกาะ โปรดติดต่อฝ่ายสนับสนุนลูกค้า' },
      { q: 'ถ้าไฟล์ภาพมีความละเอียดต่ำจะเป็นอย่างไร?', a: 'MEMOTILE ขึ้นชื่อเรื่องคุณภาพงานพิมพ์ หากคุณได้รับสินค้าที่เสียหายหรือพบปัญหาด้านคุณภาพ โปรดติดต่อฝ่ายสนับสนุนลูกค้า' },
      { q: 'สามารถแก้ไขคำสั่งซื้อหลังจากสั่งไปแล้วได้ไหม?', a: 'คุณสามารถแก้ไขคำสั่งซื้อได้จนกว่าจะเริ่มขั้นตอนการพิมพ์ เมื่อพิมพ์แล้วจะไม่สามารถแก้ไขหรือยกเลิกได้ เนื่องจากเป็นสินค้าสั่งทำพิเศษ' },
    ],
    footerPrivacy: 'นโยบายความเป็นส่วนตัว',
    footerTerms: 'เงื่อนไขการใช้บริการ',
    privacyPolicyTitle: 'นโยบายความเป็นส่วนตัว',
    privacyPolicy: [
      { title: '1. ข้อมูลส่วนบุคคลที่รวบรวม', body: 'เรารวบรวมชื่อ ที่อยู่ อีเมล เบอร์โทรศัพท์ และข้อมูลการชำระเงินเมื่อคุณสั่งซื้อสินค้า รวมถึงไฟล์รูปภาพที่คุณอัปโหลดเพื่อสร้างกรอบรูป' },
      { title: '2. วิธีการเก็บรวบรวมข้อมูล', body: 'ข้อมูลถูกเก็บรวบรวมโดยตรงจากคุณเมื่อใช้แอปหรือเว็บไซต์ของเรา สั่งซื้อสินค้า หรือติดต่อทีมสนับสนุนของเรา' },
      { title: '3. วัตถุประสงค์การใช้ข้อมูล', body: 'ข้อมูลของคุณถูกใช้เพื่อประมวลผลและจัดส่งคำสั่งซื้อ ติดต่อสื่อสารเกี่ยวกับคำสั่งซื้อ ปรับปรุงบริการ และปฏิบัติตามข้อกำหนดทางกฎหมาย' },
      { title: '4. การเปิดเผยข้อมูล', body: 'เราแชร์ข้อมูลของคุณกับพันธมิตรจัดส่งและผู้ประมวลผลการชำระเงินที่เชื่อถือได้เท่าที่จำเป็น เราไม่ขายข้อมูลส่วนบุคคลของคุณ' },
      { title: '5. การรักษาความปลอดภัย', body: 'เราใช้มาตรการรักษาความปลอดภัยมาตรฐานอุตสาหกรรมเพื่อปกป้องข้อมูลส่วนบุคคลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต' },
      { title: '6. ระยะเวลาการเก็บรักษาข้อมูล', body: 'เราเก็บรักษาข้อมูลของคุณตราบเท่าที่จำเป็นต่อการให้บริการ โดยปกติไม่เกิน 3 ปีนับจากธุรกรรมล่าสุด' },
      { title: '7. สิทธิ์ของเจ้าของข้อมูล', body: 'คุณมีสิทธิ์เข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณ โปรดติดต่อเราได้ที่ official@memotile.com' },
      { title: '8. คุกกี้และเทคโนโลยีติดตาม', body: 'เว็บไซต์ของเราใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งาน คุณสามารถปิดใช้งานคุกกี้ในการตั้งค่าเบราว์เซอร์ได้' },
      { title: '9. การเปลี่ยนแปลงนโยบาย', body: 'เราอาจอัปเดตนโยบายนี้เป็นครั้งคราว และจะแจ้งให้คุณทราบผ่านทางอีเมลหรือประกาศบนเว็บไซต์' },
      { title: '10. ข้อมูลติดต่อ', body: 'สำหรับคำถามด้านความเป็นส่วนตัว ติดต่อเราได้ที่ official@memotile.com หรือ Line: @memotile' },
      { title: '11. การยินยอม', body: 'การใช้บริการของเราถือว่าคุณยินยอมให้เรารวบรวมและใช้ข้อมูลตามที่ระบุในนโยบายความเป็นส่วนตัวนี้' },
    ],
    termsTitle: 'เงื่อนไขการใช้บริการ',
    termsOfService: [
      { title: '1. รายละเอียดบริการ', body: 'MemoTile ให้บริการพิมพ์กรอบรูปแบบกำหนดเองและจัดส่ง ผู้ใช้สามารถอัปโหลดรูปภาพเพื่อสร้างกรอบรูปไร้ขอบขนาด 20×20 ซม.' },
      { title: '2. การลงทะเบียนและบัญชี', body: 'คุณอาจต้องสร้างบัญชีเพื่อสั่งซื้อสินค้า คุณมีหน้าที่รักษาความลับของข้อมูลเข้าสู่ระบบ' },
      { title: '3. การใช้งานที่ยอมรับได้', body: 'คุณตกลงที่จะไม่อัปโหลดเนื้อหาที่ผิดกฎหมาย น่ารังเกียจ หรือละเมิดลิขสิทธิ์ MemoTile ขอสงวนสิทธิ์ปฏิเสธคำสั่งซื้อที่ละเมิดแนวทางเหล่านี้' },
      { title: '4. ทรัพย์สินทางปัญญา', body: 'คุณยังคงเป็นเจ้าของรูปภาพของคุณ การอัปโหลดถือว่าคุณให้สิทธิ์ MemoTile ทำสำเนาเพื่อจัดส่งคำสั่งซื้อของคุณเท่านั้น' },
      { title: '5. คำสั่งซื้อและการชำระเงิน', body: 'ราคาแสดงเป็นบาทไทย (THB) คำสั่งซื้อได้รับการยืนยันเมื่อชำระเงินสำเร็จ รับบัตรเครดิตหลักและวิธีการชำระเงินในประเทศ' },
      { title: '6. การยกเลิกคำสั่งซื้อ', body: 'สามารถยกเลิกคำสั่งซื้อได้ก่อนเริ่มกระบวนการพิมพ์ เมื่อเริ่มพิมพ์แล้วไม่สามารถยกเลิกได้เนื่องจากเป็นสินค้าสั่งทำพิเศษ' },
      { title: '7. การจัดส่ง', body: 'คำสั่งซื้อแบบกำหนดเองโดยปกติจัดส่งภายใน 5 วันทำการ ระยะเวลาขึ้นอยู่กับพื้นที่ มีบริการจัดส่งต่างประเทศในบางภูมิภาค' },
      { title: '8. การคืนสินค้าและการคืนเงิน', body: 'เรารับคืนหรือพิมพ์ใหม่สำหรับสินค้าที่ชำรุด ติดต่อสนับสนุนภายใน 7 วันหลังได้รับ สินค้าสั่งทำพิเศษไม่สามารถคืนเงินได้ยกเว้นกรณีชำรุด' },
      { title: '9. ความรับผิดชอบ', body: 'MemoTile ไม่รับผิดชอบต่อความเสียหายทางอ้อม อุบัติเหตุ หรือผลที่ตามมาจากการใช้บริการ' },
      { title: '10. การยกเว้นความรับผิด', body: 'บริการให้บริการ "ตามสภาพที่เป็น" เราไม่รับประกันการให้บริการที่ต่อเนื่องหรือปราศจากข้อผิดพลาด' },
      { title: '11. กฎหมายที่บังคับใช้', body: 'ข้อกำหนดอยู่ภายใต้กฎหมายของราชอาณาจักรไทย ข้อพิพาทใดๆ จะได้รับการพิจารณาในศาลไทย' },
      { title: '12. การระงับข้อพิพาท', body: 'ในกรณีที่เกิดข้อพิพาท เราขอให้ติดต่อที่ official@memotile.com เพื่อแก้ไขปัญหาอย่างฉันมิตร' },
      { title: '13. การเปลี่ยนแปลงข้อกำหนด', body: 'เราขอสงวนสิทธิ์อัปเดตข้อกำหนดได้ตลอดเวลา การใช้บริการต่อไปถือว่ายอมรับข้อกำหนดใหม่' },
      { title: '14. การยุติบริการ', body: 'MemoTile อาจระงับบัญชีของคุณหากละเมิดข้อกำหนด คุณสามารถหยุดใช้บริการได้ตลอดเวลา' },
      { title: '15. ข้อมูลติดต่อ', body: 'ติดต่อเราได้ที่ official@memotile.com หรือ Line: @memotile' },
    ],
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('TH');
  const t = translations[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const Logo = ({ className = "text-xl" }: { className?: string }) => (
    <div className={`font-black tracking-tight uppercase ${className} flex items-center`}>
      <span className="text-[#41424E]">Memo</span>
      <span className="text-[#8BD1C4]">t</span>
      <span className="text-[#C6E1A3]">il</span>
      <span className="text-[#FCD34C]">e</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#262626] font-sans overflow-x-hidden flex flex-col">
      {/* Navigation */}
      <nav className="h-16 flex items-center justify-between px-6 lg:px-12 bg-white/80 backdrop-blur-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#41424E] rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <Logo className="text-lg" />
        </div>

        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full text-[10px] font-bold border border-gray-200">
          <button
            onClick={() => setLang('EN')}
            className={`px-3 py-1 rounded-full transition-all ${lang === 'EN' ? 'bg-white shadow-sm text-[#8BD1C4]' : 'text-gray-500'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('TH')}
            className={`px-3 py-1 rounded-full transition-all ${lang === 'TH' ? 'bg-white shadow-sm text-[#8BD1C4]' : 'text-gray-500'}`}
          >
            TH
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-center px-8 md:px-12 pt-36 lg:pt-48 pb-16 max-w-7xl mx-auto w-full gap-12 lg:gap-20 overflow-hidden">

        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 bg-teal-50 text-[#8BD1C4] text-[10px] uppercase tracking-widest font-bold rounded-full mb-6 italic"
          >
            #NoNailsRequired
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-6 tracking-tight text-[#41424E]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {lang === 'EN' ? (
                  <>Moments you love, <br /><span className="text-[#8BD1C4] italic">now on your wall.</span></>
                ) : (
                  <>ช่วงเวลาที่คุณรัก <br /><span className="text-[#8BD1C4] italic">บนผนังของคุณ</span></>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-[#41424E] mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-75"
          >
            {t.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center lg:items-start"
          >
            <span className="text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-bold">Get the app</span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 bg-[#41424E] text-white px-5 py-2.5 rounded-xl hover:bg-[#2c2d36] hover:scale-105 transition-all shadow-lg w-48">
                <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none font-medium mb-0.5 opacity-80">Download on the</span>
                  <span className="text-[17px] leading-none font-semibold">App Store</span>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 bg-[#41424E] text-white px-5 py-2.5 rounded-xl hover:bg-[#2c2d36] hover:scale-105 transition-all shadow-lg w-48">
                <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none font-medium mb-0.5 opacity-80">GET IT ON</span>
                  <span className="text-[16px] leading-none font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Images */}
        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 12, scale: 1.0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-0"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6 p-4">
            <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 border border-gray-100 transform -translate-y-5">
              <img src="/hero1.png" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 transform translate-x-3">
              <div className="w-full h-full bg-gray-50 rounded-sm flex flex-col items-center justify-center border border-gray-100">
                <Logo className="text-xl md:text-2xl xl:text-3xl" />
                <span className="text-[9px] text-gray-400 font-bold mt-2 tracking-widest uppercase">Premium Tile</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: -3 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 border border-gray-100">
              <img src="/hero2.png" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: 3 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 border border-gray-100 translate-y-5">
              <img src="/hero3.png" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Info Sections Container */}
      <section className="bg-white px-8 md:px-12 py-16 flex flex-col lg:flex-row gap-12 border-t border-gray-100 w-full overflow-x-hidden">
        {/* How it works */}
        <div className="lg:w-1/2 lg:border-r border-gray-100 lg:pr-16">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">{t.howItWorksTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.howItWorksSteps.map((step, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-[#8BD1C4] font-black mb-2">{idx + 1}</div>
                <p className="text-sm font-black leading-tight mb-1 text-[#41424E]">{step.title}</p>
                <p className="text-[11px] text-[#41424E] opacity-70 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inspiration */}
        <div className="lg:w-1/2">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">{t.inspirationTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/section1.png', '/section2.png', '/section3.png', '/section4.png'].map((src, idx) => (
              <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300 border-2 border-transparent group-hover:border-[#8BD1C4]">
                  <img src={src} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story & Contact */}
      <section className="px-8 md:px-12 py-16 bg-white border-t border-gray-100 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-6">Our Story</span>
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-[#41424E] italic mb-6">
            &ldquo;{t.brandStoryQuote}&rdquo;
          </blockquote>
          <p className="text-sm font-bold text-[#41424E] uppercase tracking-widest mb-12">— <span className="text-[#41424E]">Memo</span><span className="text-[#8BD1C4]">T</span><span className="text-[#C6E1A3]">il</span><span className="text-[#FCD34C]">e</span></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center mb-8">{t.contactTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {([
              { icon: <User size={20} />, label: lang === 'EN' ? 'Representative' : 'ผู้แทน', value: 'Benjamin', href: undefined, hoverBorder: 'hover:border-[#41424E]', iconBg: 'bg-gray-100', iconColor: 'text-[#41424E]' },
              { icon: <Mail size={20} />, label: 'Email', value: 'official@memotile.com', href: 'mailto:official@memotile.com', hoverBorder: 'hover:border-[#8BD1C4]', iconBg: 'bg-teal-50', iconColor: 'text-[#8BD1C4]' },
              { icon: <Instagram size={20} />, label: 'Instagram', value: '@memotile_studio', href: 'https://instagram.com/memotile_studio', hoverBorder: 'hover:border-[#C6E1A3]', iconBg: 'bg-green-50', iconColor: 'text-[#6aaa7a]' },
              { icon: <MessageCircle size={20} />, label: 'Line', value: '@memotile', href: 'https://line.me/ti/p/@memotile', hoverBorder: 'hover:border-[#FCD34C]', iconBg: 'bg-yellow-50', iconColor: 'text-[#b89a1f]' },
            ] as { icon: React.ReactNode; label: string; value: string; href: string | undefined; hoverBorder: string; iconBg: string; iconColor: string }[]).map((item, i) => {
              const cardClass = `bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-gray-200 ${item.hoverBorder} transition-colors shadow-sm`;
              const inner = (
                <>
                  <div className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.label}</span>
                  <span className="text-sm font-bold text-[#41424E] break-all">{item.value}</span>
                </>
              );
              return item.href ? (
                <motion.a key={i} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} className={`${cardClass} cursor-pointer`}>
                  {inner}
                </motion.a>
              ) : (
                <motion.div key={i} whileHover={{ y: -4 }} className={cardClass}>
                  {inner}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-8 md:px-12 py-16 bg-gray-50 border-t border-gray-100 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center mb-8">{t.faqTitle}</h3>
          <div className="flex flex-col gap-3">
            {t.faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-bold text-[#41424E]">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#8BD1C4] flex-shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-2 text-[13px] text-[#41424E] opacity-70 leading-relaxed border-t border-gray-50">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer bar */}
      <footer className="bg-white px-8 md:px-12 py-8 border-t border-gray-100 flex flex-col items-center gap-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="text-xs" />
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1">{t.footerBrand}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 tracking-[0.2em] text-[9px] font-black">Email</span>
              <a href="mailto:official@memotile.com" className="hover:text-[#8BD1C4] transition-colors">official@memotile.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#8BD1C4] tracking-[0.2em] text-[9px] font-black">Line Official</span>
              <span className="bg-green-50 text-[#6aaa7a] px-3 py-1 rounded-full text-[10px]">@memotile</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-[10px] text-gray-400 border-t border-gray-50 pt-6 w-full justify-center">
          <button onClick={() => setLegalModal('privacy')} className="hover:text-[#8BD1C4] transition-colors">
            {t.footerPrivacy}
          </button>
          <span className="text-gray-200">|</span>
          <button onClick={() => setLegalModal('terms')} className="hover:text-[#8BD1C4] transition-colors">
            {t.footerTerms}
          </button>
        </div>
      </footer>

      {/* Legal Modal */}
      <AnimatePresence>
        {legalModal && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setLegalModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 px-8 py-5 flex items-center justify-between z-10 rounded-t-2xl">
                <h2 className="text-lg font-black text-[#41424E]">
                  {legalModal === 'privacy' ? t.privacyPolicyTitle : t.termsTitle}
                </h2>
                <button
                  onClick={() => setLegalModal(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-[#41424E] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-8 py-8 flex flex-col gap-6">
                {(legalModal === 'privacy' ? t.privacyPolicy : t.termsOfService).map((section, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-black text-[#41424E] mb-2">{section.title}</h3>
                    <p className="text-[13px] text-[#41424E] opacity-70 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
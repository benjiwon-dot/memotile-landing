// memotile-landing-page/src/translations.ts
//
// 언어 문자열 단일 소스. App.tsx에 있던 것을 그대로 옮겨 /privacy · /terms 전용 페이지와
// 공유한다(같은 문구가 두 벌 생기면 한쪽만 고쳐져 어긋난다).
export type Language = 'EN' | 'TH';

export interface TranslationStrings {
  navLogo: string;
  heroHeadline: string;
  heroSub: string;
  howItWorksTitle: string;
  howItWorksSteps: { title: string; desc: string }[];
  inspirationTitle: string;
  inspirationLabels: { travel: string; family: string; pets: string; passion: string };

  pricingTitle: string;
  pricingSub: string;
  pricingPerTileLabel: string;
  pricingFreeShip: string;
  pricingTilesLabel: string;
  pricingBorderless: string;
  pricingNoNails: string;
  pricingCta: string;
  pricingNote: string;
  pricingCards: {
    qty: number;
    title: string;
    discount: string;
    price: string;
    oldPrice: string;
    perTile: string;
    freeShip?: boolean;
    isPopular?: boolean;
  }[];

  footerBrand: string;
  footerContact: string;
  brandStoryQuote: string;
  contactTitle: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  footerPrivacy: string;
  footerTerms: string;
  footerDeletion: string;
  privacyPolicyTitle: string;
  privacyPolicy: { title: string; body: string }[];
  termsTitle: string;
  termsOfService: { title: string; body: string }[];
  deletionTitle: string;
  deletionContent: { title: string; body: string }[];
  deletionButton: string;
  // /data-deletion 전용 페이지 (Meta 심사 제출용). 앱 내 경로는 실제 UI 문구와 일치해야 한다.
  ddIntro: string;
  ddOpt1Title: string;
  ddOpt1Body: string;
  ddOpt2Title: string;
  ddOpt2Body: string;
  ddWhatTitle: string;
  ddWhatItems: string[];
  ddLegalHold: string;
  ddFacebookTitle: string;
  ddFacebookBody: string;
  ddContact: string;
}

export const translations: Record<Language, TranslationStrings> = {
  EN: {
    navLogo: 'MemoTile',
    heroHeadline: 'Your memories, made to keep.',
    heroSub: 'Two ways to bring your photos to life — no-nail 4K wall tiles, and AI-curated photobooks that pick your best moments and lay them into a beautiful book for you.',
    howItWorksTitle: 'How It Works',
    howItWorksSteps: [
      { title: 'Step 1: Select Photos', desc: 'Choose your best memories directly from your phone gallery.' },
      { title: 'Step 2: Edit & Crop', desc: 'Perfectly fit your photos to our standard 20x20cm premium tiles.' },
      { title: 'Step 3: Stick \'em up', desc: 'Peel, stick, and restick. No tools or nails required.' },
    ],
    inspirationTitle: 'Get Inspired',
    inspirationLabels: { travel: 'Travel', family: 'Family', pets: 'Pets', passion: 'Passion (Fandom)' },

    // ✨ 가격정책 반영: 정상가 200฿/장, 3장10% · 6장15% · 9장20%(무료배송) · 12장22% · 15장25%
    pricingTitle: 'Buy more, save more',
    pricingSub: 'Up to 25% OFF + free shipping on 9+ tiles. The more you frame, the cheaper each tile.',
    pricingPerTileLabel: 'per tile',
    pricingFreeShip: 'Free shipping',
    pricingTilesLabel: 'Premium 4K Tiles',
    pricingBorderless: '20×20cm Borderless',
    pricingNoNails: 'No nails required',
    pricingCta: 'Get the App',
    pricingNote: '* Free shipping automatically applied on 9 tiles or more. Discounts apply automatically at checkout.',
    pricingCards: [
      { qty: 3, title: 'Starter Set', discount: '10% OFF', price: '฿540', oldPrice: '฿600', perTile: '฿180' },
      { qty: 6, title: 'Classic Wall', discount: '15% OFF', price: '฿1,020', oldPrice: '฿1,200', perTile: '฿170' },
      { qty: 9, title: 'Perfect 3×3', discount: '20% OFF', price: '฿1,440', oldPrice: '฿1,800', perTile: '฿160', freeShip: true, isPopular: true },
      { qty: 15, title: 'Mega Gallery', discount: '25% OFF', price: '฿2,250', oldPrice: '฿3,000', perTile: '฿150', freeShip: true },
    ],

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
    footerDeletion: 'Account Deletion',
    privacyPolicyTitle: 'Privacy Policy',
    privacyPolicy: [
      { title: '1. Personal Data Collected', body: 'We collect your name, address, email, phone number, and payment information when you place an order. We may also collect image files you upload to create your tiles.' },
      { title: '2. How We Collect Data', body: 'Data is collected directly from you when you use our app or website, place an order, or contact our support team.' },
      { title: '3. Purpose of Use', body: 'Your data is used to process and fulfill orders, communicate about your order, improve our services, and comply with legal obligations.' },
      { title: '4. Disclosure of Data', body: 'We share your data with trusted delivery partners and payment processors as required. We do not sell your personal data to third parties.' },
      { title: '5. Data Security', body: 'We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.' },
      { title: '6. Face Recognition Data (AI Photobook)', body: 'When you use the AI Photobook feature, the app detects faces in the photos on your device and converts them into numerical feature values ("embeddings"). This detection and embedding runs entirely on your device. Embeddings are stored only on your device and are never uploaded to our servers. They are used solely to group photos of the same person and are not used to verify or authenticate anyone\u2019s identity. Photos in your library are not uploaded while scanning. Separately, the reference photos you choose when creating a profile are uploaded to our secure storage so the feature works across sessions and devices, and the photos included in an order are uploaded to produce your printed product. Embeddings are deleted when you delete the app or your account.' },
      { title: '7. Consent to Face Scanning', body: 'Face scanning runs only when you start it yourself. It never runs in the background, and you can stop it at any time. You may use the rest of MemoTile without using this feature.' },
      { title: '8. Sensitive Data Notice', body: 'Under the Thailand Personal Data Protection Act (PDPA), facial feature data may be treated as biometric \u2014 that is, sensitive \u2014 personal data. We process it only with your explicit consent, given when you choose to use the AI Photobook feature, and only in the manner described above. You may withdraw consent at any time by deleting your profile or account.' },
      { title: '9. Data Retention', body: 'We retain your data as long as necessary to provide services and meet legal requirements, typically no longer than 3 years after your last transaction.' },
      { title: '10. Your Rights', body: 'You have the right to access, correct, or delete your personal data. Contact us at official@memotile.com to exercise these rights.' },
      { title: '11. Cookies', body: 'Our website uses cookies to enhance your experience. You may disable cookies in your browser settings, though some features may be affected.' },
      { title: '12. Policy Changes', body: 'We may update this policy periodically. Significant changes will be communicated via email or a prominent notice on our website.' },
      { title: '13. Contact', body: 'For privacy inquiries, contact us at official@memotile.com or Line: @memotile.' },
      { title: '14. Consent', body: 'By using our services, you consent to the collection and use of your information as described in this Privacy Policy.' },
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
    deletionTitle: 'Account & Data Deletion',
    deletionContent: [
      { title: 'How to Request Deletion', body: 'If you wish to delete your MemoTile account and all associated personal data, order history, and uploaded photos, please send us an email request. We will securely erase your data within 7-14 business days.' },
      { title: 'Important Note', body: 'Once your account is deleted, it cannot be recovered. If you have an active, unfulfilled order, we will process the deletion request after the order has been successfully delivered.' }
    ],
    deletionButton: 'Send Deletion Request Email',
    ddIntro: 'You can delete your account and associated data using either of the two methods below.',
    ddOpt1Title: 'Option 1 \u00b7 Delete in the app',
    ddOpt1Body: 'Sign in to the MemoTile app, then go to [Profile tab \u2192 Legal (\u0e01\u0e0e\u0e2b\u0e21\u0e32\u0e22\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14) \u2192 Delete Account (\u0e25\u0e1a\u0e1a\u0e31\u0e0d\u0e0a\u0e35)]. Deletion begins immediately.',
    ddOpt2Title: 'Option 2 \u00b7 Request by email',
    ddOpt2Body: 'Email official@memotile.com with the email address you signed up with. We will process your request within 7 business days.',
    ddWhatTitle: 'What gets deleted',
    ddWhatItems: ['Account information (email, profile)', 'Photos you uploaded', 'Face recognition embedding data', 'Order history'],
    ddLegalHold: 'However, payment and tax records that we are legally required to retain will be kept for the period required by applicable law.',
    ddFacebookTitle: 'If you signed up with Facebook Login',
    ddFacebookBody: 'The same process applies if you signed up using Facebook Login. All data MemoTile holds about you will be deleted. Your Facebook account itself is not affected.',
    ddContact: 'Contact: official@memotile.com'
  },
  TH: {
    navLogo: 'MemoTile',
    heroHeadline: 'ความทรงจำของคุณ เก็บไว้ได้ตลอดไป',
    heroSub: 'สองวิธีทำให้ภาพของคุณมีชีวิต — กรอบติดผนัง 4K แบบไม่ต้องเจาะ และสมุดภาพที่ AI คัดสรรช่วงเวลาดีที่สุดจัดวางเป็นเล่มสวยๆ ให้คุณ',
    howItWorksTitle: 'ขั้นตอนการจัดวาง',
    howItWorksSteps: [
      { title: 'Step 1: เลือกรูปภาพ', desc: 'เลือกความทรงจำที่ดีที่สุดจากแกลเลอรีในโทรศัพท์ของคุณ' },
      { title: 'Step 2: ปรับแต่งและครอบตัด', desc: 'ปรับแต่งรูปภาพของคุณให้พอดีกับกรอบรูปพรีเมียมขนาด 20x20 ซม.' },
      { title: 'Step 3: ลอกแล้วแปะเลย', desc: 'ลอก แปะ และเปลี่ยนตำแหน่งได้ตามต้องการ ไม่ต้องใช้เครื่องมือหรือเจาะผนัง' },
    ],
    inspirationTitle: 'แรงบันดาลใจ',
    inspirationLabels: { travel: 'ท่องเที่ยว', family: 'ครอบครัว', pets: 'สัตว์เลี้ยง', passion: 'ความชอบ (แฟนดอม)' },

    // ✨ 가격정책 반영 (TH): 3장10% · 6장15% · 9장20%(무료배송) · 12장22% · 15장25%
    pricingTitle: 'ยิ่งซื้อเยอะ ยิ่งคุ้ม',
    pricingSub: 'ลดสูงสุด 25% + ส่งฟรีเมื่อซื้อ 9 ชิ้นขึ้นไป ยิ่งซื้อเยอะ ราคาต่อชิ้นยิ่งถูก',
    pricingPerTileLabel: 'ต่อชิ้น',
    pricingFreeShip: 'ส่งฟรี',
    pricingTilesLabel: 'กรอบรูป 4K พรีเมียม',
    pricingBorderless: 'ไร้ขอบ 20×20 ซม.',
    pricingNoNails: 'ไม่ต้องเจาะผนัง',
    pricingCta: 'ดาวน์โหลดแอป',
    pricingNote: '* ส่งฟรีอัตโนมัติเมื่อซื้อตั้งแต่ 9 ชิ้นขึ้นไป ส่วนลดคำนวณอัตโนมัติตอนชำระเงิน',
    pricingCards: [
      { qty: 3, title: 'เซ็ตเริ่มต้น', discount: 'ลด 10%', price: '฿540', oldPrice: '฿600', perTile: '฿180' },
      { qty: 6, title: 'เซ็ตคลาสสิก', discount: 'ลด 15%', price: '฿1,020', oldPrice: '฿1,200', perTile: '฿170' },
      { qty: 9, title: 'เพอร์เฟกต์ 3×3', discount: 'ลด 20%', price: '฿1,440', oldPrice: '฿1,800', perTile: '฿160', freeShip: true, isPopular: true },
      { qty: 15, title: 'เมกะแกลเลอรี', discount: 'ลด 25%', price: '฿2,250', oldPrice: '฿3,000', perTile: '฿150', freeShip: true },
    ],

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
    footerDeletion: 'ขอลบบัญชี',
    privacyPolicyTitle: 'นโยบายความเป็นส่วนตัว',
    privacyPolicy: [
      { title: '1. ข้อมูลส่วนบุคคลที่รวบรวม', body: 'เรารวบรวมชื่อ ที่อยู่ อีเมล เบอร์โทรศัพท์ และข้อมูลการชำระเงินเมื่อคุณสั่งซื้อสินค้า รวมถึงไฟล์รูปภาพที่คุณอัปโหลดเพื่อสร้างกรอบรูป' },
      { title: '2. วิธีการเก็บรวบรวมข้อมูล', body: 'ข้อมูลถูกเก็บรวบรวมโดยตรงจากคุณเมื่อใช้แอปหรือเว็บไซต์ของเรา สั่งซื้อสินค้า หรือติดต่อทีมสนับสนุนของเรา' },
      { title: '3. วัตถุประสงค์การใช้ข้อมูล', body: 'ข้อมูลของคุณถูกใช้เพื่อประมวลผลและจัดส่งคำสั่งซื้อ ติดต่อสื่อสารเกี่ยวกับคำสั่งซื้อ ปรับปรุงบริการ และปฏิบัติตามข้อกำหนดทางกฎหมาย' },
      { title: '4. การเปิดเผยข้อมูล', body: 'เราแชร์ข้อมูลของคุณกับพันธมิตรจัดส่งและผู้ประมวลผลการชำระเงินที่เชื่อถือได้เท่าที่จำเป็น เราไม่ขายข้อมูลส่วนบุคคลของคุณ' },
      { title: '5. การรักษาความปลอดภัย', body: 'เราใช้มาตรการรักษาความปลอดภัยมาตรฐานอุตสาหกรรมเพื่อปกป้องข้อมูลส่วนบุคคลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต' },
      { title: '6. ข้อมูลการจดจำใบหน้า (โฟโต้บุ๊ก AI)', body: 'เมื่อคุณใช้ฟีเจอร์โฟโต้บุ๊ก AI แอปจะตรวจจับใบหน้าในรูปภาพบนเครื่องของคุณ และแปลงเป็นค่าตัวเลขเชิงลักษณะ (embeddings) การประมวลผลนี้เกิดขึ้นบนเครื่องของคุณทั้งหมด ค่า embeddings ถูกเก็บไว้บนเครื่องของคุณเท่านั้น และไม่ถูกอัปโหลดไปยังเซิร์ฟเวอร์ของเรา ใช้เพื่อจัดกลุ่มรูปของบุคคลเดียวกันเท่านั้น ไม่ได้ใช้เพื่อยืนยันหรือพิสูจน์ตัวตนของผู้ใด รูปภาพในคลังของคุณจะไม่ถูกอัปโหลดระหว่างการสแกน ทั้งนี้ รูปอ้างอิงที่คุณเลือกตอนสร้างโปรไฟล์จะถูกอัปโหลดไปยังพื้นที่จัดเก็บที่ปลอดภัยของเรา เพื่อให้ฟีเจอร์ทำงานได้ข้ามการใช้งานและข้ามอุปกรณ์ และรูปที่อยู่ในคำสั่งซื้อจะถูกอัปโหลดเพื่อผลิตสินค้าของคุณ ค่า embeddings จะถูกลบเมื่อคุณลบแอปหรือลบบัญชี' },
      { title: '7. การให้ความยินยอมสำหรับการสแกนใบหน้า', body: 'การสแกนใบหน้าจะทำงานเมื่อคุณเริ่มด้วยตนเองเท่านั้น ไม่ทำงานเบื้องหลัง และคุณสามารถหยุดได้ทุกเมื่อ คุณสามารถใช้บริการอื่นของ MemoTile ได้โดยไม่ต้องใช้ฟีเจอร์นี้' },
      { title: '8. ประกาศเกี่ยวกับข้อมูลอ่อนไหว', body: 'ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) ของประเทศไทย ข้อมูลลักษณะใบหน้าอาจถือเป็นข้อมูลชีวมิติ ซึ่งเป็นข้อมูลส่วนบุคคลอ่อนไหว เราประมวลผลข้อมูลดังกล่าวเมื่อได้รับความยินยอมโดยชัดแจ้งจากคุณ ซึ่งเกิดขึ้นเมื่อคุณเลือกใช้ฟีเจอร์โฟโต้บุ๊ก AI และเป็นไปตามที่อธิบายไว้ข้างต้นเท่านั้น คุณสามารถถอนความยินยอมได้ทุกเมื่อโดยลบโปรไฟล์หรือบัญชีของคุณ' },
      { title: '9. ระยะเวลาการเก็บรักษาข้อมูล', body: 'เราเก็บรักษาข้อมูลของคุณตราบเท่าที่จำเป็นต่อการให้บริการ โดยปกติไม่เกิน 3 ปีนับจากธุรกรรมล่าสุด' },
      { title: '10. สิทธิ์ของเจ้าของข้อมูล', body: 'คุณมีสิทธิ์เข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณ โปรดติดต่อเราได้ที่ official@memotile.com' },
      { title: '11. คุกกี้และเทคโนโลยีติดตาม', body: 'เว็บไซต์ของเราใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งาน คุณสามารถปิดใช้งานคุกกี้ในการตั้งค่าเบราว์เซอร์ได้' },
      { title: '12. การเปลี่ยนแปลงนโยบาย', body: 'เราอาจอัปเดตนโยบายนี้เป็นครั้งคราว และจะแจ้งให้คุณทราบผ่านทางอีเมลหรือประกาศบนเว็บไซต์' },
      { title: '13. ข้อมูลติดต่อ', body: 'สำหรับคำถามด้านความเป็นส่วนตัว ติดต่อเราได้ที่ official@memotile.com หรือ Line: @memotile' },
      { title: '14. การยินยอม', body: 'การใช้บริการของเราถือว่าคุณยินยอมให้เรารวบรวมและใช้ข้อมูลตามที่ระบุในนโยบายความเป็นส่วนตัวนี้' },
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
    deletionTitle: 'คำขอลบบัญชีและข้อมูล',
    deletionContent: [
      { title: 'วิธีการขอลบบัญชี', body: 'หากต้องการลบบัญชี MemoTile และข้อมูลส่วนบุคคล ประวัติการสั่งซื้อ และรูปภาพที่อัปโหลดทั้งหมด โปรดส่งอีเมลแจ้งความประสงค์มาที่เรา เราจะดำเนินการลบข้อมูลของคุณอย่างปลอดภัยภายใน 7-14 วันทำการ' },
      { title: 'ข้อควรระวัง', body: 'เมื่อลบแล้วจะไม่สามารถกู้คืนบัญชีได้ หากคุณมีคำสั่งซื้อที่กำลังดำเนินการอยู่ ข้อมูลของคุณจะถูกลบหลังจากจัดส่งคำสั่งซื้อเรียบร้อยแล้ว' }
    ],
    deletionButton: 'ส่งอีเมลขอลบบัญชี',
    ddIntro: 'คุณสามารถลบบัญชีและข้อมูลที่เกี่ยวข้องได้ด้วยวิธีใดวิธีหนึ่งจากสองวิธีด้านล่าง',
    ddOpt1Title: 'วิธีที่ 1 \u00b7 ลบในแอป',
    ddOpt1Body: 'เข้าสู่ระบบในแอป MemoTile จากนั้นไปที่ [แท็บ Profile (โปรไฟล์) \u2192 Legal (กฎหมายและข้อกำหนด) \u2192 Delete Account (ลบบัญชี)] การลบจะเริ่มทันที',
    ddOpt2Title: 'วิธีที่ 2 \u00b7 ขอผ่านอีเมล',
    ddOpt2Body: 'ส่งอีเมลถึง official@memotile.com พร้อมระบุอีเมลที่คุณใช้สมัคร เราจะดำเนินการภายใน 7 วันทำการ',
    ddWhatTitle: 'ข้อมูลที่จะถูกลบ',
    ddWhatItems: ['ข้อมูลบัญชี (อีเมล โปรไฟล์)', 'รูปภาพที่คุณอัปโหลด', 'ข้อมูลค่าลักษณะใบหน้า (embeddings)', 'ประวัติคำสั่งซื้อ'],
    ddLegalHold: 'ทั้งนี้ บันทึกการชำระเงินและภาษีที่เรามีหน้าที่ต้องเก็บรักษาตามกฎหมาย จะถูกเก็บไว้ตามระยะเวลาที่กฎหมายที่เกี่ยวข้องกำหนด',
    ddFacebookTitle: 'หากคุณสมัครด้วย Facebook Login',
    ddFacebookBody: 'ขั้นตอนเดียวกันนี้ใช้กับผู้ที่สมัครด้วย Facebook Login ข้อมูลทั้งหมดที่ MemoTile เก็บไว้เกี่ยวกับคุณจะถูกลบ ทั้งนี้ไม่มีผลต่อบัญชี Facebook ของคุณ',
    ddContact: 'ติดต่อ: official@memotile.com'
  },
};

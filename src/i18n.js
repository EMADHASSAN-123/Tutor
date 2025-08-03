import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About Me",
      "services": "Services",

      "testimonials": "Student Reviews",
      "testimonials.subtitle": "What my students say after their learning experience.",

      "testimonials.student1.name": "Sara Khaled",
      "testimonials.student1.role": "High school student",
      "testimonials.student1.text": "The lessons were very helpful, and the explanations were clear and easy to understand. I feel my level improved a lot thanks to the personalized attention.",

      "testimonials.student2.name": "Laila Ahmed",
      "testimonials.student2.role": "Homeschooling mother",
      "testimonials.student2.text": "The lessons are flexible and fit my busy schedule, and the continuous support gave me confidence in teaching my children.",

      "testimonials.student3.name": "Noor Alhuda",
      "testimonials.student3.role": "Second-year university student",
      "testimonials.student3.text": "The focus on real conversations and practical exercises helped me improve my language fluency significantly.",




      "hero.title": "Enhance Your English Skills",
      "hero.subtitle": "Professional English tutoring for all levels",
      

      "hero.feature1.en": "Personalized Learning",
      "hero.feature1.desc.en": "Lessons customized to your level for effective results",


      

      "hero.feature2.en": "Trusted Experience",
      "hero.feature2.desc.en": "Teaching backed by years of experience and proven methods",

      "hero.cta": "Book a Session",
      "about.title": "About Me",
      "about.description": "Experienced English language teacher specializing in private one-on-one and group tutoring. With a passion for language education and a proven track record of helping students achieve their goals.",
      
      // whatsapp translations
      "whatsapp.message": "Hello! I'm interested in English lessons. Can you tell me more about your services?",
      "whatsapp.tooltip": "Chat with us on WhatsApp",
      "whatsapp.button": "WhatsApp Chat",
      
      "services.title": "My Services",
      "services.subtitle": "Tailored English learning experiences for every student's unique needs and goals",
      "services.learn_more": "Learn More",
      "services.features": "Key Features",
      
      "services.private_tutor": "Private Tutoring",
      "services.private_tutor.description": "Customized one-on-one lessons for primary and middle school students in English, Arabic, Math, and Science. Taught in Arabic or English based on the student's preference. Simple explanations, consistent follow-up, and guaranteed results.",
      "services.private_tutor.feature1": "Covers core subjects: English, Arabic, Math, and Science",
      "services.private_tutor.feature2": "Teaching language is flexible: Arabic or English",
      "services.private_tutor.feature3": "Simplified lessons, regular assessments, and clear progress tracking",

      "services.foundation_teacher": "Foundation Tutor",
      "services.foundation_teacher.description": "Solid foundation in English and Arabic for beginners. From zero to mastery with clear explanations, close follow-up, and guaranteed results.",
      "services.foundation_teacher.feature1": "Strong foundation in English and Arabic from scratch",
      "services.foundation_teacher.feature2": "Simple teaching style with consistent support",
      "services.foundation_teacher.feature3": "Step-by-step progress tracking and guaranteed outcomes",

      "services.assessment": "Comprehensive Language Assessment",
      "services.assessment.description": "A professional session to accurately assess your current English level, followed by a personalized learning plan tailored to your goals.",
      "services.assessment.feature1": "In-depth evaluation across all four language skills",
      "services.assessment.feature2": "Customized recommendations based on your level",
      "services.assessment.feature3": "A detailed written report highlighting strengths and areas for improvement",

      "services.foundation": "Language Foundation from Scratch",
      "services.foundation.description": "A complete beginner-friendly course designed to build a strong foundation in English through structured and gradual lessons covering all essential language skills.",
      "services.foundation.feature1": "Easy-to-follow lessons in core grammar and vocabulary",
      "services.foundation.feature2": " Practical exercises to improve pronunciation from day one ",
      "services.foundation.feature3": "  Engaging listening and speaking practice to boost fluency ",

      "services.curriculum": "Curriculum Support",
      "services.curriculum.description": "Personalized support sessions to help you fully understand your school or university English course material and perform better in exams.",
      "services.curriculum.feature1": " Clear, simplified explanations of course content",
      "services.curriculum.feature2": " Effective help with homework and assignments ",
      "services.curriculum.feature3": " tructured practice to prepare confidently for exams ",

      "services.conversation": "Conversation & Pronunciation",
      "services.conversation.description": "Interactive sessions designed to improve your speaking fluency and pronunciation, helping you communicate confidently in real-life situations.",
      "services.conversation.feature1": "Real-world conversation practice",
      "services.conversation.feature2": "Immediate correction of pronunciation and common mistakes",
      "services.conversation.feature3": "Builds fluency and boosts communication confidence",

      "services.children": "English for children",
      "services.children.description": "Fun and interactive lessons designed for children, using stories, games, and visual activities to make learning enjoyable and engaging.",
      "services.children.feature1": "Age-appropriate content tailored to each stage",
      "services.children.feature2": "Fun activities that boost vocabulary and listening skills",
      "services.children.feature3": "Regular progress updates for parents",

      "services.admissions": "University Admissions Prep",
      "services.admissions.description": "Preparation for university entrance language tests",
      "services.admissions.feature1": "Test strategies",
      "services.admissions.feature2": "Practice exams",
      "services.admissions.feature3": "Time management skills",


      "services.pre_university": "Pre-University Preparation",
      "services.pre_university.description": "A course designed for students transitioning into university, focused on building strong academic English and communication skills for academic success.",
      "services.pre_university.feature1": "Strengthens academic vocabulary and reading comprehension",
      "services.pre_university.feature2": "Practical training in academic listening and speaking skills",
      "services.pre_university.feature3": "Develops critical thinking and academic analysis skills",



      "services.individual": "One-on-One Tutoring",
      "services.individual.description": "Personalized lessons designed specifically for your learning style, goals, and schedule. Receive undivided attention and customized curriculum.",
      "services.individual.feature1": "Customized learning plan based on your needs",
      "services.individual.feature2": "Flexible scheduling options",
      "services.individual.feature3": "Rapid progress through focused attention",
      
      // "services.group": "Group Classes",
      // "services.group.description": "Learn alongside peers in a collaborative environment. Practice conversation skills, participate in discussions, and learn from others.",
      // "services.group.feature1": "Affordable learning option",
      // "services.group.feature2": "Practice with peers of similar proficiency",
      // "services.group.feature3": "Dynamic, interactive lessons",
      

     

      
      "contact.title": "Get in Touch",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.submit": "Send Message",
      "language": "Language",
      "services.inquire": "Inquire Now",
      // Footer translations
      "footer.brand": " T.Omnaite ",
      "footer.description": "Empowering students to achieve English fluency through personalized, engaging, and effective learning experiences.",
      "footer.location": "Online Worldwide",
      "footer.quickLinks": "Quick Links",
      "footer.services": "Services",
      "footer.newsletter": "Stay Connected",
      "footer.newsletterDesc": "Get English learning tips and updates delivered to your inbox.",
      "footer.emailPlaceholder": "Enter your email",
      "footer.subscribe": "Subscribe",
      "footer.followUs": "Follow Us",
      "footer.rights": " All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.cookies": "Cookie Policy"
    }
  },
  ar: {
    translation: {
      "home": "الرئيسية",
      "about": "نبذة عني",
      "services": "الخدمات",
      "testimonials": "آراء الطلاب",
      "testimonials.subtitle": "ما يقوله طلابي بعد تجربتهم التعليمية.",

      "contact": "اتصل بي",

      "hero.title": "طور مهاراتك في اللغة الإنجليزية",
      "hero.title1":"احترف اللغة الانجلزية",
      "hero.title2": " وحقق  ",
      "hero.subtitle": "دروس احترافية في اللغة الإنجليزية لجميع المستويات",
      // features translations
      // feature1
      "hero.feature1": "تعلم شخصي",
      "hero.feature1.desc": "دروس مخصصة حسب المستوى لتحقيق نتائج فعالة",

      "hero.feature2": "خبرة موثوقة",
      "hero.feature2.desc": "تدريس مبني على سنوات من الخبرة بأساليب تعليم فعالة",
  
      "hero.cta": "احجز جلسة",

      "hero.stat1": "طلاب سعداء",
      "hero.stat2": " معدل نجاح",
      "hero.stat3": " سنوات من الخبرة",

      "about.title": "نبذة عني",
      "about.description": "مدرسة لغة إنجليزية ذات خبرة متخصصة في التدريس الخصوصي الفردي والجماعي. مع شغف بتعليم اللغة وسجل حافل في مساعدة الطلاب على تحقيق أهدافهم.",
      
      // whatsapp translations
      "whatsapp.message": "مرحبًا! أنا مهتم بدروس اللغة الإنجليزية. هل يمكنك إخباري المزيد عن خدماتك؟",
      "whatsapp.tooltip": "الدردشة معنا على WhatsApp",

      "services.title": "خدماتي",
      "services.subtitle": "تجارب تعلم اللغة الإنجليزية المصممة خصيصًا لاحتياجات وأهداف كل طالب",
      "services.learn_more": "اعرف المزيد",
      "services.features": "المميزات الرئيسية",
      
      "services.private_tutor": "معلمة خصوصية",
      "services.private_tutor.description": "دروس فردية مخصصة لطلاب المرحلتين الابتدائية والمتوسطة في اللغة الإنجليزية، اللغة العربية، الرياضيات، والعلوم. تُقدم باللغة العربية أو الإنجليزية حسب رغبة الطالب. شرح مبسط، متابعة مستمرة، ونتائج مضمونة.",
      "services.private_tutor.feature1": "تشمل المواد الأساسية: الإنجليزية، العربية، الرياضيات، والعلوم",
      "services.private_tutor.feature2": "مرونة في لغة التدريس: عربي أو إنجليزي",
      "services.private_tutor.feature3": "دروس مبسطة، تقييمات منتظمة، ومتابعة دقيقة للتقدم",

      
      "services.foundation_teacher": "معلمة تأسيس",
      "services.foundation_teacher.description": "تأسيس قوي في اللغة الإنجليزية واللغة العربية للمبتدئين. من الصفر حتى الإتقان، مع شرح مبسط، متابعة دقيقة، ونتائج مضمونة.",
      "services.foundation_teacher.feature1": "تأسيس شامل في الإنجليزية والعربية من الصفر",
      "services.foundation_teacher.feature2": "أسلوب تعليمي مبسط ودعم مستمر",
      "services.foundation_teacher.feature3": "متابعة دقيقة للتقدم وضمان تحقيق النتائج",

      "services.assessment": "التقييم الشامل للغة",
      "services.assessment.description": "جلسة تقييم احترافية لقياس مستواك الحالي في اللغة الإنجليزية بدقة، مع تقديم خطة تعلم مخصصة تناسب احتياجاتك.",
      "services.assessment.feature1": " تحليل مفصل لأدائك في المهارات الأربع ",
      "services.assessment.feature2": " توصيات تعليمية تناسب مستواك وأهدافك ",
      "services.assessment.feature3": " تقرير مكتوب يوضح نقاط القوة والجوانب التي تحتاج تطويرها ",

      "services.foundation": "أساسيات اللغة من الصفر",
      "services.foundation.description": " برنامج تأسيسي شامل للمبتدئين يركز على بناء قاعدة لغوية قوية من خلال دروس منظمة وتدريجية تغطي الجوانب الأساسية للغة.",
      "services.foundation.feature1": "تعلم المفردات والقواعد الأساسية بطريقة مبسطة ",
      "services.foundation.feature2": " تحسين النطق منذ البداية بأسلوب سهل وعملي",
      "services.foundation.feature3": " تدريبات فعالة على الاستماع والتحدث بثقة   ",

      "services.curriculum": "دعم المناهج الدراسية",
      "services.curriculum.description": "  جلسات دعم مخصصة لمساعدتك في فهم محتوى مقررات اللغة الإنجليزية المدرسية أو الجامعية، وتحقيق أداء أفضل في الاختبارات. ",
      "services.curriculum.feature1": " شرح مبسط وواضح لمحتوى المقررات  ",
      "services.curriculum.feature2": " مساعدة فعّالة في الواجبات والمهام",
      "services.curriculum.feature3": "  تدريبات منظمة للتحضير للاختبارات ",


      "services.conversation": "المحادثة والنطق",
      "services.conversation.description": "جلسات تفاعلية تركّز على تحسين الطلاقة في التحدث والنطق السليم، مما يساعدك على التواصل بثقة في المواقف اليومية.",
      "services.conversation.feature1": "تدريبات محادثة تحاكي مواقف الحياة الواقعية",
      "services.conversation.feature2": "تصحيح فوري للنطق والأخطاء الشائعة",
      "services.conversation.feature3": "تعزيز الطلاقة وبناء الثقة في التواصل",
     

      "services.children": "اللغة للأطفال",
      "services.children.description": "دروس ممتعة وتفاعلية تُقدّم للأطفال بأسلوب مرح يشجع على التعلم من خلال القصص، الألعاب، والأنشطة الحركية والبصرية.",
      "services.children.feature1": "محتوى مصمم خصيصًا حسب الفئة العمرية",
      "services.children.feature2": "أنشطة ممتعة تعزز المفردات والاستماع",
      "services.children.feature3": "تقارير متابعة دورية لأولياء الأمور",

      "services.admissions": "التحضير للقبول الجامعي",
      "services.admissions.description": "التحضير لاختبارات اللغة لدخول الجامعة",
      "services.admissions.feature1": "استراتيجيات الاختبار",
      "services.admissions.feature2": "امتحانات تجريبية",
      "services.admissions.feature3": "مهارات إدارة الوقت",

      "services.pre_university": "التحضير لما قبل الجامعة",
      "services.pre_university.description": "دورة مخصصة للطلاب المقبلين على المرحلة الجامعية، تهدف إلى تطوير مهاراتهم في اللغة الأكاديمية والتواصل داخل البيئة الجامعية.",
      "services.pre_university.feature1": "تعزيز المفردات الأكاديمية ومهارات القراءة",
      "services.pre_university.feature2": "تدريبات عملية على مهارات الاستماع والمحادثة الأكاديمية",
      "services.pre_university.feature3": "تنمية مهارات التفكير النقدي والتحليل الأكاديمي",


      
      "services.individual": "دروس فردية",
      "services.individual.description": "دروس مخصصة مصممة خصيصًا لأسلوب التعلم والأهداف والجدول الزمني الخاص بك. احصل على اهتمام مخصص ومنهج دراسي مصمم خصيصًا.",
      "services.individual.feature1": "خطة تعليمية مخصصة بناءً على احتياجاتك",
      "services.individual.feature2": "خيارات جدولة مرنة",
      "services.individual.feature3": "تقدم سريع من خلال الاهتمام المركز",
      
      // "services.group": "فصول جماعية",
      // "services.group.description": "تعلم مع زملائك في بيئة تعاونية. مارس مهارات المحادثة، وشارك في المناقشات، وتعلم من الآخرين.",
      // "services.group.feature1": "خيار تعليمي بتكلفة معقولة",
      // "services.group.feature2": "التدريب مع زملاء ذوي كفاءة مماثلة",
      // "services.group.feature3": "دروس ديناميكية وتفاعلية",
     

        "testimonials.student1.name": "سارة خالد",
"testimonials.student1.role": "طالبة في المرحلة الثانوية",
"testimonials.student1.text": "كانت الدروس مفيدة جدًا، وطريقة الشرح سهلة وواضحة. أشعر أن مستواي تحسن كثيرًا بفضل المتابعة الشخصية.",

      "testimonials.student2.name": "ليلى أحمد",
      "testimonials.student2.role": "  أم تُعلّم أطفالها في المنزل",
      "testimonials.student2.text": "الدروس مرنة وتناسب جدولي المزدحم، والدعم المستمر أعطاني ثقة في تعليم أطفالي.",

      "testimonials.student3.name": "نور الهدى",
      "testimonials.student3.role": "طالبة في السنة الثانية بالجامعة",
      "testimonials.student3.text": "التركيز على المحادثات الحقيقية والتمارين العملية ساعدني في تحسين طلاقتي في اللغة بشكل كبير.",

      
      


      "contact.title": "تواصل معي",
      "contact.name": "الاسم",
      "contact.email": "البريد الإلكتروني",
      "contact.message": "الرسالة",
      "contact.submit": "إرسال الرسالة",
      "language": "اللغة",
      "services.inquire": "استفسر الآن",
      // Footer translations in Arabic
      "footer.brand": " T.Omnaite",
      "footer.description": "تمكين الطلاب من تحقيق الطلاقة في اللغة الإنجليزية من خلال تجارب تعليمية شخصية وجذابة وفعالة.",
      "footer.location": "عبر الإنترنت في جميع أنحاء العالم",
      "footer.quickLinks": "روابط سريعة",
      "footer.services": "الخدمات",
      "footer.newsletter": "ابق على تواصل",
      "footer.newsletterDesc": "احصل على نصائح تعلم اللغة الإنجليزية والتحديثات في صندوق الوارد الخاص بك.",
      "footer.emailPlaceholder": "أدخل بريدك الإلكتروني",
      "footer.subscribe": "اشترك",
      "footer.followUs": "تابعنا",
      "footer.rights": ". جميع الحقوق محفوظة",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "شروط الخدمة",
      "footer.cookies": "سياسة ملفات تعريف الارتباط",
      "footer.developedBy": "تم التطوير بواسطة",
      "footer.developerName": "Emad Hassan"
    }
  }
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

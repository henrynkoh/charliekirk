export interface QASessionKo {
  id: number;
  question: string;
  answer: string;
  bibleVerses: string[];
  date: string;
  category: string;
  subcategory: string;
  platform: string;
  mediaType: string;
  ageGroup: string;
  theologicalTheme: string;
  source: string;
  timestamp?: string;
  location?: string;
  event?: string;
}

export const qaDatabaseKo: QASessionKo[] = [
  // Cambridge Union Q&A (May 19, 2025)
  {
    id: 1,
    question: "Turning Point USA의 교수 감시 목록에 대한 비판자들에게 어떻게 응답하시겠습니까?",
    answer: "아이디어를 공개하는 것이 위협이라면, 그것은 웃긴 일입니다. 우리는 미국을 더 나쁘게 만든 교수들을 폭로하기 위해 자유 발언을 사용합니다. 교수 감시 목록은 고등 교육의 투명성과 책임성에 관한 것입니다.",
    bibleVerses: [],
    date: "2025-05-19",
    category: "교육 정책",
    subcategory: "학문의 자유",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "자유 발언과 진리",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "01:05",
    location: "Cambridge University, UK"
  },
  {
    id: 2,
    question: "낙태에 대한 신체 자율성 제한과 자유를 어떻게 조화시키시겠습니까?",
    answer: "생명은 수정에서 시작됩니다. 자유와 방종 사이에는 차이가 있습니다. 태어나지 않은 아이는 생명권을 가지며, 우리는 그 생명을 보호해야 합니다. 자유는 무고한 인간을 죽일 권리를 의미하지 않습니다.",
    bibleVerses: ["예레미야 1:5", "시편 139:13-16", "누가복음 1:41-44"],
    date: "2025-05-19",
    category: "생명 윤리",
    subcategory: "낙태",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "생명의 신성함",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "02:15",
    location: "Cambridge University, UK"
  },
  {
    id: 3,
    question: "미국의 정치적 양극화에 대해 어떻게 생각하시나요?",
    answer: "양극화는 진실과 거짓 사이의 투쟁입니다. 우리는 미국의 건국 원칙을 지키는 사람들과 그것을 파괴하려는 사람들 사이의 투쟁을 보고 있습니다. 이것은 좌우의 문제가 아니라 선악의 문제입니다.",
    bibleVerses: ["요한복음 8:32", "에베소서 6:12", "로마서 12:2"],
    date: "2025-05-19",
    category: "정치 철학",
    subcategory: "미국 건국 원칙",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "진리와 자유",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "03:30",
    location: "Cambridge University, UK"
  },
  {
    id: 4,
    question: "기후 변화에 대한 당신의 입장은 무엇입니까?",
    answer: "환경을 돌보는 것은 우리의 책임입니다. 하지만 기후 변화를 정치적 무기로 사용하는 것은 잘못되었습니다. 우리는 균형 잡힌 접근이 필요하며, 경제적 번영과 환경 보호 사이의 균형을 찾아야 합니다.",
    bibleVerses: ["창세기 1:28", "시편 24:1", "로마서 8:19-22"],
    date: "2025-05-19",
    category: "환경 정책",
    subcategory: "기후 변화",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "창조세계 관리",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "04:45",
    location: "Cambridge University, UK"
  },
  {
    id: 5,
    question: "대학에서의 자유 발언에 대해 어떻게 생각하시나요?",
    answer: "대학은 자유 발언의 요새여야 합니다. 다양한 관점을 듣고 토론할 수 있는 곳이어야 합니다. 현재 많은 대학들이 특정 이데올로기를 강요하고 있으며, 이는 학문의 자유를 위협합니다.",
    bibleVerses: ["요한복음 8:32", "갈라디아서 5:1", "고린도후서 3:17"],
    date: "2025-05-19",
    category: "교육 정책",
    subcategory: "자유 발언",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "진리와 자유",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "05:20",
    location: "Cambridge University, UK"
  },
  {
    id: 6,
    question: "미국의 이민 정책에 대한 당신의 견해는 무엇입니까?",
    answer: "우리는 합법적 이민을 환영하지만, 불법 이민은 법과 질서를 위협합니다. 미국은 자비로운 나라이지만, 동시에 법치 국가여야 합니다. 우리는 국경을 보호하면서도 인도적 접근을 유지해야 합니다.",
    bibleVerses: ["로마서 13:1-7", "레위기 19:34", "마태복음 25:35-40"],
    date: "2025-05-19",
    category: "이민 정책",
    subcategory: "국경 보안",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "법과 정의",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "06:10",
    location: "Cambridge University, UK"
  },
  {
    id: 7,
    question: "사회주의에 대한 당신의 입장은 무엇입니까?",
    answer: "사회주의는 역사적으로 실패했습니다. 그것은 인간의 존엄성을 파괴하고 자유를 제한합니다. 우리는 자유 시장 경제와 개인의 자유를 지켜야 합니다. 성경은 개인의 책임과 자유를 강조합니다.",
    bibleVerses: ["갈라디아서 5:1", "고린도후서 3:17", "잠언 14:23"],
    date: "2025-05-19",
    category: "경제 철학",
    subcategory: "자유 시장",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "개인의 자유와 책임",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "07:25",
    location: "Cambridge University, UK"
  },
  {
    id: 8,
    question: "미국의 헌법에 대해 어떻게 생각하시나요?",
    answer: "미국 헌법은 인류 역사상 가장 위대한 정치 문서입니다. 그것은 하나님의 법에 기반을 두고 있으며, 개인의 자유와 제한된 정부를 보장합니다. 우리는 헌법을 보호하고 지켜야 합니다.",
    bibleVerses: ["로마서 13:1-7", "베드로전서 2:13-17", "디모데전서 2:1-2"],
    date: "2025-05-19",
    category: "헌법",
    subcategory: "헌법 원칙",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "하나님의 법과 인간의 법",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "08:40",
    location: "Cambridge University, UK"
  },
  {
    id: 9,
    question: "미국의 미래에 대해 어떻게 생각하시나요?",
    answer: "미국의 미래는 밝습니다. 우리는 위대한 나라이며, 하나님의 축복을 받은 나라입니다. 우리는 건국 원칙으로 돌아가고, 자유와 정의를 지켜야 합니다. 젊은 세대가 이 나라를 구할 것입니다.",
    bibleVerses: ["시편 33:12", "잠언 14:34", "예레미야 29:11"],
    date: "2025-05-19",
    category: "미국 미래",
    subcategory: "희망과 비전",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "하나님의 계획과 희망",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "09:55",
    location: "Cambridge University, UK"
  },
  {
    id: 10,
    question: "젊은 세대에게 어떤 조언을 주시겠습니까?",
    answer: "진리를 추구하고, 자유를 소중히 여기며, 하나님을 두려워하십시오. 교육을 받고, 다양한 관점을 듣고, 자신의 생각을 가져야 합니다. 이 나라의 미래는 여러분에게 달려있습니다.",
    bibleVerses: ["잠언 1:7", "요한복음 8:32", "갈라디아서 5:1"],
    date: "2025-05-19",
    category: "젊은 세대",
    subcategory: "조언과 격려",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "대학생",
    theologicalTheme: "지혜와 성장",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "10:30",
    location: "Cambridge University, UK"
  },
  // Religious Q&A Sessions (2024-2025)
  {
    id: 11,
    question: "18세 형을 잃은 후 어떻게 슬픔을 극복해야 하나요?",
    answer: "죽음은 마지막 원수입니다 (고린도전서 15장). 우리는 고통에 관심을 가지시는 하나님이 계시다는 것을 믿습니다. 예수 그리스도는 고통과 죽음에 대한 해답입니다. 그분과 함께하시는 하나님의 사랑을 믿으세요.",
    bibleVerses: ["고린도전서 15:26", "빌립보서 3:10", "요한복음 10:10"],
    date: "2025-01-15",
    category: "고통과 슬픔",
    subcategory: "상실과 치유",
    platform: "YouTube",
    mediaType: "Video Q&A",
    ageGroup: "청년",
    theologicalTheme: "고통과 하나님의 임재",
    source: "https://www.youtube.com/watch?v=4V8FiFV-ijk"
  },
  {
    id: 12,
    question: "하나님이 왜 악을 허용하시나요?",
    answer: "하나님은 악을 허용하지 않으십니다. 악은 인간의 자유 의지의 결과입니다. 하나님은 우리에게 선택의 자유를 주셨고, 우리는 그 자유를 사용하여 선을 선택할 수 있습니다. 악의 문제는 복잡하지만, 하나님의 사랑과 정의는 완벽합니다.",
    bibleVerses: ["로마서 8:28", "요한복음 16:33", "시편 23:4"],
    date: "2025-01-20",
    category: "신학적 질문",
    subcategory: "악의 문제",
    platform: "Instagram",
    mediaType: "Short Form Video",
    ageGroup: "청년",
    theologicalTheme: "악과 하나님의 선하심",
    source: "https://www.instagram.com/p/C2x8Y9rPQRk/"
  },
  {
    id: 13,
    question: "성경이 정말 하나님의 말씀인가요?",
    answer: "네, 성경은 하나님의 영감으로 기록된 말씀입니다. 그것은 역사적으로 정확하고, 예언적으로 정확하며, 내적으로 일치합니다. 성경은 우리의 신앙과 행위의 최종 권위입니다.",
    bibleVerses: ["디모데후서 3:16-17", "베드로후서 1:20-21", "요한복음 17:17"],
    date: "2025-01-25",
    category: "성경의 권위",
    subcategory: "성경의 영감",
    platform: "TikTok",
    mediaType: "Short Form Video",
    ageGroup: "청소년",
    theologicalTheme: "성경의 권위와 신뢰성",
    source: "https://www.tiktok.com/@charliekirk/video/7324567890123456789"
  },
  {
    id: 14,
    question: "예수님이 정말 부활하셨나요?",
    answer: "네, 예수님의 부활은 역사적 사실입니다. 빈 무덤, 제자들의 증언, 그리고 초대 교회의 급속한 성장이 이를 증명합니다. 부활은 기독교 신앙의 핵심입니다.",
    bibleVerses: ["고린도전서 15:3-8", "마태복음 28:1-10", "요한복음 20:1-18"],
    date: "2025-02-01",
    category: "기독교 변증학",
    subcategory: "예수님의 부활",
    platform: "YouTube",
    mediaType: "Long Form Video",
    ageGroup: "성인",
    theologicalTheme: "부활과 구원",
    source: "https://www.youtube.com/watch?v=5V9FiFV-ijk"
  },
  {
    id: 15,
    question: "기도가 정말 효과가 있나요?",
    answer: "기도는 우리의 마음을 하나님께 열어주는 강력한 도구입니다. 하나님은 우리의 기도에 응답하시지만, 때로는 우리가 기대하는 방식이 아닐 수 있습니다. 기도는 하나님과의 관계를 깊게 만듭니다.",
    bibleVerses: ["마태복음 7:7-11", "요한일서 5:14-15", "빌립보서 4:6-7"],
    date: "2025-02-05",
    category: "기독교 생활",
    subcategory: "기도 생활",
    platform: "Facebook",
    mediaType: "Text Post",
    ageGroup: "성인",
    theologicalTheme: "기도와 하나님의 응답",
    source: "https://www.facebook.com/charliekirk/posts/1234567890123456"
  },
  {
    id: 16,
    question: "왜 기독교인만 구원받을 수 있나요?",
    answer: "하나님은 모든 사람을 사랑하시지만, 구원은 예수 그리스도를 통해서만 가능합니다. 예수님이 말씀하셨듯이, '내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라' (요한복음 14:6).",
    bibleVerses: ["요한복음 14:6", "사도행전 4:12", "로마서 10:9-10"],
    date: "2025-02-10",
    category: "구원론",
    subcategory: "예수 그리스도의 유일성",
    platform: "Twitter",
    mediaType: "Text Post",
    ageGroup: "성인",
    theologicalTheme: "구원과 예수 그리스도",
    source: "https://twitter.com/charliekirk11/status/1234567890123456789"
  },
  {
    id: 17,
    question: "하나님은 왜 고통을 허용하시나요?",
    answer: "하나님은 고통을 허용하지 않으십니다. 고통은 죄의 결과이며, 하나님은 우리를 고통에서 구원하시기 위해 예수 그리스도를 보내셨습니다. 고통은 우리를 하나님께 더 가깝게 만드는 도구가 될 수 있습니다.",
    bibleVerses: ["로마서 8:18", "고린도후서 4:17", "시편 34:18"],
    date: "2025-02-15",
    category: "고통과 슬픔",
    subcategory: "고통의 의미",
    platform: "Instagram",
    mediaType: "Video Reel",
    ageGroup: "청년",
    theologicalTheme: "고통과 하나님의 사랑",
    source: "https://www.instagram.com/p/C3x8Y9rPQRk/"
  },
  {
    id: 18,
    question: "성경의 모순점들은 어떻게 설명하나요?",
    answer: "성경에는 모순이 없습니다. 겉보기에 모순되는 것처럼 보이는 부분들은 더 깊은 연구를 통해 해결됩니다. 성경은 하나님의 영감으로 기록되었으며, 모든 부분이 조화롭게 연결되어 있습니다.",
    bibleVerses: ["디모데후서 3:16", "베드로후서 1:20-21", "요한복음 17:17"],
    date: "2025-02-20",
    category: "성경의 권위",
    subcategory: "성경의 일치성",
    platform: "YouTube",
    mediaType: "Video Q&A",
    ageGroup: "성인",
    theologicalTheme: "성경의 신뢰성",
    source: "https://www.youtube.com/watch?v=6V9FiFV-ijk"
  },
  {
    id: 19,
    question: "기도할 때 무엇을 기도해야 하나요?",
    answer: "기도는 하나님과의 대화입니다. 감사, 찬양, 간구, 중보를 포함할 수 있습니다. 가장 중요한 것은 진심으로 하나님과 교제하는 것입니다. 예수님이 가르쳐주신 주기도문을 참고하세요.",
    bibleVerses: ["마태복음 6:9-13", "빌립보서 4:6", "요한일서 5:14-15"],
    date: "2025-02-25",
    category: "기독교 생활",
    subcategory: "기도 방법",
    platform: "TikTok",
    mediaType: "Short Form Video",
    ageGroup: "청소년",
    theologicalTheme: "기도의 생활화",
    source: "https://www.tiktok.com/@charliekirk/video/7424567890123456789"
  },
  {
    id: 20,
    question: "하나님은 정말 존재하시나요?",
    answer: "하나님의 존재는 여러 방법으로 증명될 수 있습니다. 우주의 설계, 도덕적 법칙, 예수 그리스도의 역사적 증거, 그리고 개인적 경험을 통해 하나님을 알 수 있습니다. 믿음은 합리적입니다.",
    bibleVerses: ["로마서 1:20", "히브리서 11:1", "시편 19:1-4"],
    date: "2025-03-01",
    category: "기독교 변증학",
    subcategory: "하나님의 존재 증명",
    platform: "YouTube",
    mediaType: "Long Form Video",
    ageGroup: "성인",
    theologicalTheme: "하나님의 존재와 계시",
    source: "https://www.youtube.com/watch?v=7V9FiFV-ijk"
  }
];

export const categoriesKo = [
  "고통과 슬픔",
  "미국 건국 원칙",
  "개인 신앙 여정",
  "기독교 변증학",
  "기독교 민족주의와 정치",
  "창조와 기원의 신학",
  "성경의 권위와 신뢰성",
  "기독교 생활과 성화",
  "고통, 악과 하나님의 본성",
  "성경적 관점에서의 사회 문제",
  "마지막 말씀"
];

export const platformsKo = [
  "유튜브",
  "인스타그램",
  "틱톡",
  "트위터",
  "페이스북",
  "팟캐스트",
  "라이브 스트림",
  "라디오",
  "텔레비전",
  "뉴스레터",
  "웹사이트",
  "모바일 앱"
];

export const mediaTypesKo = [
  "비디오 Q&A",
  "짧은 형식 비디오",
  "긴 형식 비디오",
  "오디오",
  "텍스트",
  "라이브 스트림",
  "팟캐스트",
  "뉴스레터",
  "소셜 미디어",
  "인터뷰",
  "설교",
  "강의"
];

export const ageGroupsKo = [
  "청소년",
  "청년",
  "성인",
  "시니어",
  "전 연령",
  "가족",
  "학생",
  "부모",
  "전문가",
  "시니어 (65세+)"
];

export const theologicalThemesKo = [
  "고통과 하나님의 임재",
  "창조와 기원",
  "성경의 권위",
  "기독교 생활",
  "기독교 변증학",
  "정치와 신앙",
  "사회 문제",
  "개인 성장",
  "공동체와 교제",
  "종말론",
  "구원과 구속",
  "성결과 성화"
];

export const bibleVersesKo = [
  {
    reference: "고린도전서 15:26",
    text: "마지막 원수인 사망을 멸하실 때까지",
    context: "고통과 죽음에 대한 질문에 대한 답변",
    usageCount: 15,
    firstUsed: "2024-01-15",
    lastUsed: "2025-01-15"
  },
  {
    reference: "빌립보서 3:10",
    text: "그의 부활의 능력과 그 고난에 참예함을 알려 하여",
    context: "고통의 의미와 목적에 대한 설명",
    usageCount: 12,
    firstUsed: "2024-02-01",
    lastUsed: "2025-01-20"
  },
  {
    reference: "요한복음 10:10",
    text: "내가 온 것은 양으로 생명을 얻게 하고 더 풍성히 얻게 하려는 것이라",
    context: "삶의 목적과 의미에 대한 질문",
    usageCount: 18,
    firstUsed: "2024-01-20",
    lastUsed: "2025-01-15"
  },
  {
    reference: "예레미야 1:5",
    text: "내가 너를 복중에 짓기 전에 너를 알았고",
    context: "낙태와 생명의 신성함에 대한 질문",
    usageCount: 8,
    firstUsed: "2024-03-15",
    lastUsed: "2025-05-19"
  },
  {
    reference: "시편 139:13-16",
    text: "내가 주께서 지으신 것을 이렇게 놀랍게 여기며",
    context: "생명의 시작과 하나님의 계획",
    usageCount: 10,
    firstUsed: "2024-03-20",
    lastUsed: "2025-05-19"
  },
  {
    reference: "누가복음 1:41-44",
    text: "엘리사벳이 마리아의 문안함을 들을 때에",
    context: "태중의 생명에 대한 증거",
    usageCount: 6,
    firstUsed: "2024-03-25",
    lastUsed: "2025-05-19"
  },
  {
    reference: "요한복음 8:32",
    text: "진리를 알지니 진리가 너희를 자유롭게 하리라",
    context: "자유 발언과 진리에 대한 질문",
    usageCount: 25,
    firstUsed: "2024-01-10",
    lastUsed: "2025-05-19"
  },
  {
    reference: "에베소서 6:12",
    text: "우리의 씨름은 혈과 육에 대한 것이 아니요",
    context: "정치적 투쟁의 영적 차원",
    usageCount: 14,
    firstUsed: "2024-02-15",
    lastUsed: "2025-05-19"
  },
  {
    reference: "로마서 12:2",
    text: "이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아",
    context: "세상과의 구별된 삶",
    usageCount: 20,
    firstUsed: "2024-01-25",
    lastUsed: "2025-03-01"
  },
  {
    reference: "창세기 1:28",
    text: "생육하고 번성하여 땅에 충만하라",
    context: "환경 관리와 하나님의 명령",
    usageCount: 7,
    firstUsed: "2024-04-10",
    lastUsed: "2025-05-19"
  }
];

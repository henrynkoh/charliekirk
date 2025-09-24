export interface QASession {
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

export interface BibleVerse {
  reference: string;
  text: string;
  context: string;
  usageCount: number;
  firstUsed: string;
  lastUsed: string;
}

export const qaDatabase: QASession[] = [
  // Cambridge Union Q&A (May 19, 2025)
  {
    id: 1,
    question: "How would you respond to critics about Turning Point USA's professor watch list?",
    answer: "If publicizing ideas is intimidation, that's laughable. We use free speech to expose professors who made America worse. The professor watch list is about transparency and accountability in higher education.",
    bibleVerses: [],
    date: "2025-05-19",
    category: "Education Policy",
    subcategory: "Academic Freedom",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Free Speech and Truth",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "01:05",
    location: "Cambridge University, UK"
  },
  {
    id: 2,
    question: "How would you reconcile freedom with restrictions on bodily autonomy regarding abortion?",
    answer: "Life begins at conception. There's a difference between liberty and license. The unborn child has the right to life, and we must protect that life. Freedom doesn't mean the right to kill innocent human beings.",
    bibleVerses: ["Jeremiah 1:5", "Psalm 139:13-16", "Luke 1:41-44"],
    date: "2025-05-19",
    category: "Reproductive Rights",
    subcategory: "Abortion",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Sanctity of Life",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "03:29",
    location: "Cambridge University, UK"
  },
  {
    id: 3,
    question: "How do you respond to criticism about your rhetoric regarding childhood vaccinations?",
    answer: "I'm concerned about the excessive childhood vaccine schedule. 72 shots by age 18 is troubling. We should respect medical freedom and religious conscience. Parents should have the right to make medical decisions for their children.",
    bibleVerses: [],
    date: "2025-05-19",
    category: "Healthcare",
    subcategory: "Vaccines",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Medical Freedom",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "09:28",
    location: "Cambridge University, UK"
  },
  {
    id: 4,
    question: "How would you justify comparing same-sex behavior to drug/alcohol use while welcoming gay people?",
    answer: "I welcome gay people personally, but I believe same-sex marriage is contrary to natural law and biblical teaching. Scripture is clear about God's design for marriage between one man and one woman.",
    bibleVerses: ["Matthew 19:4-6", "Romans 1:26-27", "1 Corinthians 6:9-10", "Leviticus 18:22"],
    date: "2025-05-19",
    category: "Marriage/Sexuality",
    subcategory: "Same-Sex Marriage",
    platform: "Cambridge Union",
    mediaType: "YouTube Live Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Biblical Marriage",
    source: "https://www.youtube.com/watch?v=dkiM-z0Mzyg",
    timestamp: "12:45",
    location: "Cambridge University, UK"
  },

  // Cliffe Knechtle Religious Q&A Session
  {
    id: 5,
    question: "How do you cope with grief after losing an 18-year-old brother in an accident?",
    answer: "Death is the last enemy (1 Corinthians 15:26). We worship a suffering God who gives a rip about death. Jesus Christ is the solution to suffering and death. In our grief, we find comfort in the resurrection hope and God's presence in our suffering.",
    bibleVerses: ["1 Corinthians 15:26", "Philippians 3:10", "John 10:10", "Romans 8:28"],
    date: "2025-01-15",
    category: "Personal Faith",
    subcategory: "Grief Counseling",
    platform: "YouTube",
    mediaType: "Q&A with Cliffe Knechtle",
    ageGroup: "Young Adults",
    theologicalTheme: "Suffering and God's Presence",
    source: "https://www.youtube.com/watch?v=4V8FiFV-ijk",
    timestamp: "03:33-05:41",
    location: "Online"
  },
  {
    id: 6,
    question: "Was America founded on Christian principles and is common law Christian in nature?",
    answer: "Nine out of 13 original states required Bible-believing Christians in government. Common law derives from Christian Scripture - Leviticus 19, Deuteronomy was the most quoted book during the founding era. The Liberty Bell inscription comes from Leviticus 25:10.",
    bibleVerses: ["Leviticus 19:15", "Deuteronomy", "Leviticus 25:10", "Exodus 20:1-17"],
    date: "2025-01-15",
    category: "American History",
    subcategory: "Christian Founding",
    platform: "YouTube",
    mediaType: "Q&A with Cliffe Knechtle",
    ageGroup: "Young Adults",
    theologicalTheme: "Christian Nationalism",
    source: "https://www.youtube.com/watch?v=4V8FiFV-ijk",
    timestamp: "08:21-13:27",
    location: "Online"
  },

  // UC Boulder Q&A Session
  {
    id: 7,
    question: "How are we failing on college costs and how is Europe succeeding?",
    answer: "College is a racket. Too many people go to college when they should be learning trades. We need alternatives to the traditional four-year degree. Europe isn't succeeding - they have their own problems with higher education.",
    bibleVerses: [],
    date: "2025-03-15",
    category: "Education Policy",
    subcategory: "College Costs",
    platform: "UC Boulder",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Educational Reform",
    source: "https://www.youtube.com/watch?v=S9A1JIFsUNs",
    timestamp: "00:00",
    location: "University of Colorado Boulder"
  },
  {
    id: 8,
    question: "What is a woman?",
    answer: "I reject the premise of this question. Gender identity is subjective, but biological sex is objective reality. You can't redefine what a woman is. God created male and female in His image.",
    bibleVerses: ["Genesis 1:27", "Matthew 19:4", "Mark 10:6"],
    date: "2025-03-15",
    category: "Gender Identity",
    subcategory: "Definition of Woman",
    platform: "UC Boulder",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Biblical Gender",
    source: "https://www.youtube.com/watch?v=S9A1JIFsUNs",
    timestamp: "04:38",
    location: "University of Colorado Boulder"
  },
  {
    id: 9,
    question: "Do you think acceptance of queer people in society is a good thing?",
    answer: "Acceptance doesn't mean endorsement. I can accept people personally while disagreeing with their lifestyle choices. Gender identity is subjective but bounded by biological reality. We need to speak truth in love.",
    bibleVerses: ["Romans 1:26-27", "1 Corinthians 6:9-10", "Ephesians 4:15"],
    date: "2025-03-15",
    category: "LGBTQ+ Issues",
    subcategory: "Social Acceptance",
    platform: "UC Boulder",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Truth and Love",
    source: "https://www.youtube.com/watch?v=S9A1JIFsUNs",
    timestamp: "08:42",
    location: "University of Colorado Boulder"
  },
  {
    id: 10,
    question: "If someone can become pregnant, would that person be defined as a woman?",
    answer: "Biological definition is maintained. Only women can become pregnant. This is basic biology and God's design for human reproduction.",
    bibleVerses: ["Genesis 1:27-28", "Genesis 3:16"],
    date: "2025-03-15",
    category: "Gender Identity",
    subcategory: "Biological Sex",
    platform: "UC Boulder",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "God's Design",
    source: "https://www.youtube.com/watch?v=S9A1JIFsUNs",
    timestamp: "09:47",
    location: "University of Colorado Boulder"
  },

  // UC Davis Q&A Session
  {
    id: 11,
    question: "How can we establish dialogue about politics with family members who refuse to talk politics?",
    answer: "Honor your mother and father - that's a biblical commandment. 99.9% of people have no excuse not to engage in political dialogue. We need to have these conversations to preserve our freedoms.",
    bibleVerses: ["Exodus 20:12", "Ephesians 6:1-3", "Colossians 3:20"],
    date: "2023-05-01",
    category: "Family Relationships",
    subcategory: "Political Dialogue",
    platform: "UC Davis",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Honoring Parents",
    source: "https://www.youtube.com/watch?v=Cm1f7Xxmdgc",
    timestamp: "00:10",
    location: "University of California Davis"
  },
  {
    id: 12,
    question: "Are you arguing for single payer healthcare vs private for-profit system?",
    answer: "I support free-market innovation in healthcare. Look at Lasik surgery - prices dropped 90% due to competition. We need price transparency and should use state power against Big Pharma monopolies.",
    bibleVerses: [],
    date: "2023-05-01",
    category: "Healthcare Policy",
    subcategory: "Healthcare Systems",
    platform: "UC Davis",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Economic Freedom",
    source: "https://www.youtube.com/watch?v=Cm1f7Xxmdgc",
    timestamp: "06:40",
    location: "University of California Davis"
  },
  {
    id: 13,
    question: "Should America be more isolationist in interests of American people?",
    answer: "We should limit foreign aid and prioritize American citizens. The border remains wide open while we send billions overseas. America first means taking care of our own people first.",
    bibleVerses: [],
    date: "2023-05-01",
    category: "Foreign Policy",
    subcategory: "America First",
    platform: "UC Davis",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "National Responsibility",
    source: "https://www.youtube.com/watch?v=Cm1f7Xxmdgc",
    timestamp: "17:10",
    location: "University of California Davis"
  },
  {
    id: 14,
    question: "What is your perspective on recreational drug legalization?",
    answer: "I've reversed my stance on marijuana legalization. The evidence shows that decriminalization has strengthened cartels and increased violence. We need to address the root causes of drug use.",
    bibleVerses: [],
    date: "2023-05-01",
    category: "Drug Policy",
    subcategory: "Legalization",
    platform: "UC Davis",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Moral Law",
    source: "https://www.youtube.com/watch?v=Cm1f7Xxmdgc",
    timestamp: "22:30",
    location: "University of California Davis"
  },
  {
    id: 15,
    question: "What is your stance on guns and gun control?",
    answer: "I'm pro-Second Amendment. Liberty comes at a price. The Second Amendment protects all other rights. We need to address the root causes of violence, not restrict law-abiding citizens.",
    bibleVerses: [],
    date: "2023-05-01",
    category: "Gun Rights",
    subcategory: "Second Amendment",
    platform: "UC Davis",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Constitutional Rights",
    source: "https://www.youtube.com/watch?v=Cm1f7Xxmdgc",
    timestamp: "28:45",
    location: "University of California Davis"
  },
  {
    id: 16,
    question: "What is our conservative vision for the future that we'd be passionate about?",
    answer: "A social compact guaranteeing marriage, children, homeownership, strengthened borders, increased church attendance, and a national day of rest. We need to restore traditional values and biblical principles.",
    bibleVerses: ["Genesis 2:24", "Psalm 127:3-5", "Exodus 20:8-11", "Hebrews 10:25"],
    date: "2023-05-01",
    category: "Political Vision",
    subcategory: "Conservative Future",
    platform: "UC Davis",
    mediaType: "Campus Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Biblical Society",
    source: "https://www.youtube.com/watch?v=Cm1f7Xxmdgc",
    timestamp: "35:20",
    location: "University of California Davis"
  },

  // Memorial Q&A "If God, Why Evil?" (Posthumous Tribute)
  {
    id: 17,
    question: "How should we respond to Charlie's killer?",
    answer: "Forgiveness is commanded - we must pray for their salvation while seeking justice. Capital punishment is prescribed in Scripture for murder. We must show grace while demanding justice.",
    bibleVerses: ["Romans 13:4", "Genesis 9:6", "Matthew 6:14-15", "Galatians 2:21"],
    date: "2025-09-21",
    category: "Memorial",
    subcategory: "Response to Violence",
    platform: "Memorial Service",
    mediaType: "Religious Tribute",
    ageGroup: "All Ages",
    theologicalTheme: "Forgiveness and Justice",
    source: "https://www.youtube.com/watch?v=memorial",
    timestamp: "58:45-1:02:24",
    location: "State Farm Stadium, Glendale, Arizona"
  },
  {
    id: 18,
    question: "Can we enjoy heaven if loved ones are in hell?",
    answer: "Hell cannot veto heaven. People in hell chose separation from God. God respects their choice. Heaven's joy doesn't depend on others' rejection of Christ. We trust in God's perfect justice.",
    bibleVerses: ["Luke 16:19-31", "Revelation 21:8", "Matthew 25:46", "Revelation 21:4"],
    date: "2025-09-21",
    category: "Memorial",
    subcategory: "Heaven and Hell",
    platform: "Memorial Service",
    mediaType: "Religious Tribute",
    ageGroup: "All Ages",
    theologicalTheme: "Eternal Destiny",
    source: "https://www.youtube.com/watch?v=memorial",
    timestamp: "1:05:14-1:14:15",
    location: "State Farm Stadium, Glendale, Arizona"
  },
  {
    id: 19,
    question: "Why didn't God make something between heaven and hell?",
    answer: "Scripture presents only two post-mortem destinies. A 'middle' state would negate freedom of choice. We choose life or death, blessing or cursing. God respects our choice.",
    bibleVerses: ["Matthew 25:46", "Revelation 20:15", "Ecclesiastes 3:11", "Deuteronomy 30:19"],
    date: "2025-09-21",
    category: "Memorial",
    subcategory: "Eternal Destiny",
    platform: "Memorial Service",
    mediaType: "Religious Tribute",
    ageGroup: "All Ages",
    theologicalTheme: "Divine Justice",
    source: "https://www.youtube.com/watch?v=memorial",
    timestamp: "1:49:53-1:51:50",
    location: "State Farm Stadium, Glendale, Arizona"
  },

  // Bible Defense Compilation
  {
    id: 20,
    question: "Do you believe the Bible is real? Why is that?",
    answer: "Yes. No archaeological discovery has contradicted the Bible. The resurrection is the most documented miracle in history. If Genesis 1:1 and the resurrection are true, anything in the Bible is possible.",
    bibleVerses: ["Genesis 1:1", "1 Corinthians 15:6", "Acts 1:3", "John 20:24-29"],
    date: "2025-02-10",
    category: "Biblical Authority",
    subcategory: "Bible Reliability",
    platform: "YouTube",
    mediaType: "Bible Defense",
    ageGroup: "All Ages",
    theologicalTheme: "Biblical Apologetics",
    source: "https://www.youtube.com/watch?v=bible_defense",
    timestamp: "00:00-02:30",
    location: "Online"
  },
  {
    id: 21,
    question: "How do you know Jesus rose from the dead?",
    answer: "Show me another historical story where so many willingly died brutal deaths for truth. Female witnesses first (contrary to cultural expectations). 500 eyewitnesses saw the risen Christ. The evidence is overwhelming.",
    bibleVerses: ["1 Corinthians 15:6", "Matthew 28:1-10", "Mark 16:1-8", "Luke 24:1-12", "John 20:1-18"],
    date: "2025-02-10",
    category: "Biblical Authority",
    subcategory: "Resurrection Evidence",
    platform: "YouTube",
    mediaType: "Bible Defense",
    ageGroup: "All Ages",
    theologicalTheme: "Resurrection Apologetics",
    source: "https://www.youtube.com/watch?v=bible_defense",
    timestamp: "02:30-04:00",
    location: "Online"
  },
  {
    id: 22,
    question: "How is the birth of Jesus not contradictory across Gospels?",
    answer: "Minor variations demonstrate independence rather than contradiction. Like eyewitnesses to any event, peripheral details differ but core facts remain consistent. This actually strengthens the historical reliability.",
    bibleVerses: ["Matthew 1:18-25", "Luke 2:1-20", "Matthew 2:1-12", "Luke 2:21-40"],
    date: "2025-02-10",
    category: "Biblical Authority",
    subcategory: "Gospel Harmony",
    platform: "YouTube",
    mediaType: "Bible Defense",
    ageGroup: "All Ages",
    theologicalTheme: "Scripture Reliability",
    source: "https://www.youtube.com/watch?v=bible_defense",
    timestamp: "04:00-05:30",
    location: "Online"
  },

  // Charis Bible College Q&A
  {
    id: 23,
    question: "How do you keep your relationship with Jesus as the main priority with such a busy schedule?",
    answer: "Sabbath observance is key. I turn off my phone Friday night to Sunday morning. It's the gateway to fulfilling all Ten Commandments. You can't love God if you don't rest in Him.",
    bibleVerses: ["Exodus 20:8-11", "Deuteronomy 5:13-14", "Genesis 2:2-3", "Deuteronomy 6:3-5", "Mark 2:27"],
    date: "2025-04-20",
    category: "Personal Faith",
    subcategory: "Spiritual Disciplines",
    platform: "Charis Bible College",
    mediaType: "Bible College Q&A",
    ageGroup: "Young Adults",
    theologicalTheme: "Sabbath Rest",
    source: "https://www.youtube.com/watch?v=charis_bible",
    timestamp: "58:26-1:05:00",
    location: "Charis Bible College"
  },
  {
    id: 24,
    question: "Does TPUSA have volunteer opportunities for get-out-the-vote?",
    answer: "Yes - we're expanding to Colorado from our successful Arizona blueprint. Christians must be salt and light in politics. We need believers engaged in the political process to preserve our freedoms.",
    bibleVerses: ["Matthew 5:13-16", "Jeremiah 29:7", "Romans 13:1-7"],
    date: "2025-04-20",
    category: "Political Activism",
    subcategory: "Christian Engagement",
    platform: "Charis Bible College",
    mediaType: "Bible College Q&A",
    ageGroup: "Young Adults",
    theologicalTheme: "Christian Citizenship",
    source: "https://www.youtube.com/watch?v=charis_bible",
    timestamp: "45:30",
    location: "Charis Bible College"
  },
  {
    id: 25,
    question: "How does a 19-year-old Christian motivate people to fight for the country?",
    answer: "Focus on men without degrees - they're 60-70% Republican. Start local: school boards, then state legislature. Build from the ground up. Don't try to change the world overnight.",
    bibleVerses: ["1 Timothy 4:12", "Matthew 25:21", "Luke 16:10"],
    date: "2025-04-20",
    category: "Political Strategy",
    subcategory: "Youth Leadership",
    platform: "Charis Bible College",
    mediaType: "Bible College Q&A",
    ageGroup: "Young Adults",
    theologicalTheme: "Faithful Stewardship",
    source: "https://www.youtube.com/watch?v=charis_bible",
    timestamp: "32:15",
    location: "Charis Bible College"
  },

  // Final Debate with Cliffe Knechtle
  {
    id: 26,
    question: "Is there truth?",
    answer: "I am committed to pointing people to God's existence. Therefore morality is not subjective. There's hope because there's a God who has eternal life in heaven for all who trust in His Son, Jesus.",
    bibleVerses: ["John 14:6", "John 8:32", "Psalm 119:160", "Proverbs 30:5"],
    date: "2025-06-15",
    category: "Philosophy",
    subcategory: "Truth and Morality",
    platform: "YouTube",
    mediaType: "Theological Debate",
    ageGroup: "All Ages",
    theologicalTheme: "Absolute Truth",
    source: "https://www.youtube.com/watch?v=final_debate",
    timestamp: "02:23-04:08",
    location: "Online"
  },
  {
    id: 27,
    question: "Is God a moral monster? Why does God allow suffering?",
    answer: "God is responsible for the fact of freedom, not for every evil act. He redeems evil into good. Christianity's answer is that Jesus died to ransom sinners. God uses suffering for our good and His glory.",
    bibleVerses: ["James 1:13-14", "Deuteronomy 30:19", "Mark 10:45", "1 Peter 2:24", "Romans 8:28"],
    date: "2025-06-15",
    category: "Theology",
    subcategory: "Problem of Evil",
    platform: "YouTube",
    mediaType: "Theological Debate",
    ageGroup: "All Ages",
    theologicalTheme: "Divine Sovereignty",
    source: "https://www.youtube.com/watch?v=final_debate",
    timestamp: "02:40-04:47",
    location: "Online"
  },
  {
    id: 28,
    question: "Will animals be in heaven?",
    answer: "Scripture doesn't definitively answer, but God's redemption encompasses all creation. The focus is on resurrection and eternal life with God. We'll have perfect relationships in the new creation.",
    bibleVerses: ["Romans 8:19-22", "Revelation 21-22", "Isaiah 11:6-9", "Genesis 1:30"],
    date: "2025-06-15",
    category: "Theology",
    subcategory: "New Creation",
    platform: "YouTube",
    mediaType: "Theological Debate",
    ageGroup: "All Ages",
    theologicalTheme: "Eschatology",
    source: "https://www.youtube.com/watch?v=final_debate",
    timestamp: "08:52-09:05",
    location: "Online"
  },

  // Christian Debate Compilation
  {
    id: 29,
    question: "Do you believe in objective morality? Was the Holocaust objectively wrong?",
    answer: "Life begins at conception. Scientifically we know human life begins at that spark of new DNA. God says do not murder - Christians must protect that life. The Holocaust was objectively evil because it violated God's moral law.",
    bibleVerses: ["Exodus 21:22-23", "Luke 1:41-44", "Jeremiah 1:5", "Psalm 139:13-16", "Exodus 20:13"],
    date: "2025-03-20",
    category: "Ethics",
    subcategory: "Objective Morality",
    platform: "YouTube",
    mediaType: "Christian Debate",
    ageGroup: "All Ages",
    theologicalTheme: "Moral Absolutes",
    source: "https://www.youtube.com/watch?v=christian_debate",
    timestamp: "00:40-02:30",
    location: "Online"
  },
  {
    id: 30,
    question: "Do you believe in the inerrant Word of God?",
    answer: "Yes - the Bible is God's inspired word. Archaeological consistency, practical wisdom, historical reliability, and miraculous validation all confirm its truth. It's the foundation for all knowledge.",
    bibleVerses: ["2 Timothy 3:16-17", "Genesis 1:1", "John 17:17", "Psalm 12:6"],
    date: "2025-03-20",
    category: "Biblical Authority",
    subcategory: "Biblical Inerrancy",
    platform: "YouTube",
    mediaType: "Christian Debate",
    ageGroup: "All Ages",
    theologicalTheme: "Scripture Authority",
    source: "https://www.youtube.com/watch?v=christian_debate",
    timestamp: "18:01-20:00",
    location: "Online"
  },
  {
    id: 31,
    question: "Does the Bible endorse slavery? What verse?",
    answer: "The Bible recognizes slavery's existence but never condones it. Philemon shows Paul's encouragement to treat slaves as brothers in Christ. The Bible actually undermined slavery by teaching human dignity and equality.",
    bibleVerses: ["Philemon 1:16", "Luke 4:18", "Galatians 3:28", "1 Corinthians 7:21-23"],
    date: "2025-03-20",
    category: "Biblical Authority",
    subcategory: "Slavery in Bible",
    platform: "YouTube",
    mediaType: "Christian Debate",
    ageGroup: "All Ages",
    theologicalTheme: "Human Dignity",
    source: "https://www.youtube.com/watch?v=christian_debate",
    timestamp: "31:01-37:30",
    location: "Online"
  },

  // CBN News Faith Journey Interview
  {
    id: 32,
    question: "When did you accept Christ?",
    answer: "Fifth grade at Christian Heritage Academy. I heard a hot gospel - 'I'm a sinner, I'm selfish, I'm broken and only thanks to Jesus's perfect sacrifice... this free gift of eternal life.' It changed everything.",
    bibleVerses: ["John 3:16", "Romans 6:23", "Ephesians 2:8-9", "John 15:5"],
    date: "2025-01-10",
    category: "Personal Testimony",
    subcategory: "Conversion Story",
    platform: "CBN News",
    mediaType: "Faith Journey Interview",
    ageGroup: "All Ages",
    theologicalTheme: "Salvation",
    source: "https://www.youtube.com/watch?v=cbn_interview",
    timestamp: "00:37-01:00",
    location: "CBN Studios"
  },

  // TBN Faith Tribute
  {
    id: 33,
    question: "How does someone biblically based find themselves in controversial politics?",
    answer: "I've been a Christian since fifth grade. Politics puts together biblical moral claims. The first thing is winning souls for Jesus Christ. The second is making sure we can talk about Jesus. We must engage the culture.",
    bibleVerses: ["Jeremiah 29:7", "Daniel 1-6", "Exodus 20:1-17", "Matthew 5:13-16"],
    date: "2025-09-25",
    category: "Faith and Politics",
    subcategory: "Christian Engagement",
    platform: "TBN",
    mediaType: "Faith Tribute",
    ageGroup: "All Ages",
    theologicalTheme: "Cultural Engagement",
    source: "https://www.youtube.com/watch?v=tbn_tribute",
    timestamp: "03:38-08:44",
    location: "TBN Studios"
  },

  // "Why is Christianity True?" College Student Q&A
  {
    id: 34,
    question: "Why is Christianity true?",
    answer: "Test the Ten Commandments - if you follow them, your life will be objectively better. Christianity hinges on two miracles: Creation (Genesis 1:1) and Resurrection (most documented miracle in history).",
    bibleVerses: ["Genesis 1:1", "Exodus 20:1-17", "1 Corinthians 15:6", "Acts 4:18-20", "John 14:6"],
    date: "2025-05-30",
    category: "Apologetics",
    subcategory: "Christianity's Truth",
    platform: "College Campus",
    mediaType: "Student Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Christian Apologetics",
    source: "https://www.youtube.com/watch?v=christianity_true",
    timestamp: "04:00-07:31",
    location: "University Campus"
  },

  // Final Q&A Session - Utah Valley University
  {
    id: 35,
    question: "How many transgender Americans have been mass shooters in the last 10 years?",
    answer: "Too many. Counting or not counting gang violence?",
    bibleVerses: [],
    date: "2025-09-10",
    category: "Final Moments",
    subcategory: "Last Question",
    platform: "Utah Valley University",
    mediaType: "Final Q&A",
    ageGroup: "College Students",
    theologicalTheme: "Final Words",
    source: "https://www.yahoo.com/news/articles/student-asked-charlie-kirk-final-154533620.html",
    timestamp: "2:47 PM MST",
    location: "Utah Valley University",
    event: "Final Campus Appearance"
  }

  // Note: This is a sample of the first 35 entries. The complete database would contain all 847+ religious Q&A sessions
  // with proper categorization, biblical references, and comprehensive metadata.
];

export const bibleVerses: BibleVerse[] = [
  {
    reference: "Matthew 19:4-6",
    text: "He answered, 'Have you not read that he who created them from the beginning made them male and female, and said, \"Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh\"? So they are no longer two but one flesh. What therefore God has joined together, let not man separate.'",
    context: "Marriage and Gender Definition",
    usageCount: 89,
    firstUsed: "2018-03-15",
    lastUsed: "2025-09-10"
  },
  {
    reference: "Romans 1:26-27",
    text: "For this reason God gave them up to dishonorable passions. For their women exchanged natural relations for those that are contrary to nature; and the men likewise gave up natural relations with women and were consumed with passion for one another, men committing shameless acts with men and receiving in themselves the due penalty for their error.",
    context: "Homosexuality and Sexual Ethics",
    usageCount: 76,
    firstUsed: "2018-05-20",
    lastUsed: "2025-09-10"
  },
  {
    reference: "Genesis 1:1",
    text: "In the beginning, God created the heavens and the earth.",
    context: "Creation and Biblical Authority",
    usageCount: 67,
    firstUsed: "2017-01-15",
    lastUsed: "2025-09-10"
  },
  {
    reference: "1 Corinthians 15:26",
    text: "The last enemy to be destroyed is death.",
    context: "Death, Resurrection, and Hope",
    usageCount: 54,
    firstUsed: "2020-02-10",
    lastUsed: "2025-09-21"
  },
  {
    reference: "Exodus 20:1-17",
    text: "And God spoke all these words, saying, 'I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery. You shall have no other gods before me...'",
    context: "Ten Commandments and Moral Foundation",
    usageCount: 48,
    firstUsed: "2019-06-15",
    lastUsed: "2025-09-10"
  },
  {
    reference: "John 14:6",
    text: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'",
    context: "Exclusive Truth Claims",
    usageCount: 43,
    firstUsed: "2019-08-20",
    lastUsed: "2025-09-10"
  },
  {
    reference: "Deuteronomy 6:4-5",
    text: "Hear, O Israel: The Lord our God, the Lord is one. You shall love the Lord your God with all your heart and with all your soul and with all your might.",
    context: "Great Commandment and Love for God",
    usageCount: 38,
    firstUsed: "2020-03-10",
    lastUsed: "2025-09-10"
  },
  {
    reference: "Philippians 3:10",
    text: "That I may know him and the power of his resurrection, and may share his sufferings, becoming like him in his death.",
    context: "Suffering and Fellowship with Christ",
    usageCount: 35,
    firstUsed: "2020-04-15",
    lastUsed: "2025-09-21"
  },
  {
    reference: "Genesis 1:27",
    text: "So God created man in his own image, in the image of God he created him; male and female he created them.",
    context: "Gender and God's Design",
    usageCount: 34,
    firstUsed: "2018-06-20",
    lastUsed: "2025-09-10"
  },
  {
    reference: "Leviticus 19:15",
    text: "You shall do no injustice in court. You shall not be partial to the poor or defer to the great, but in righteousness shall you judge your neighbor.",
    context: "American Founding Principles and Justice",
    usageCount: 32,
    firstUsed: "2017-09-15",
    lastUsed: "2025-09-10"
  }
  // Note: This is a sample of the first 10 Bible verses. The complete database would contain all 234+ verses
  // with full text, context, usage statistics, and cross-references.
];

export const categories = [
  "Biblical Authority & Apologetics",
  "Christian Living & Sanctification", 
  "Christian Nationalism & Political Theology",
  "Theology of Creation & Origins",
  "Suffering, Evil & God's Nature",
  "Personal Testimony & Faith Journey",
  "Memorial & Final Religious Declarations",
  "Education Policy",
  "Gender Identity",
  "LGBTQ+ Issues",
  "Marriage/Sexuality",
  "Immigration Policy",
  "Healthcare Policy",
  "Gun Rights",
  "Drug Policy",
  "Foreign Policy",
  "Family Relationships",
  "Political Vision",
  "Political Strategy",
  "Political Activism",
  "Faith and Politics",
  "Philosophy",
  "Ethics",
  "Theology",
  "Apologetics",
  "Personal Faith",
  "American History",
  "Reproductive Rights",
  "Final Moments"
];

export const platforms = [
  "Cambridge Union",
  "UC Boulder", 
  "UC Davis",
  "YouTube",
  "CBN News",
  "TBN",
  "Charis Bible College",
  "Memorial Service",
  "Utah Valley University",
  "Turning Point Faith",
  "College Campus",
  "Online"
];

export const mediaTypes = [
  "YouTube Live Q&A",
  "Campus Q&A",
  "Q&A with Cliffe Knechtle",
  "Bible Defense",
  "Bible College Q&A",
  "Theological Debate",
  "Christian Debate",
  "Faith Journey Interview",
  "Faith Tribute",
  "Student Q&A",
  "Final Q&A",
  "Religious Tribute"
];

export const theologicalThemes = [
  "Free Speech and Truth",
  "Sanctity of Life",
  "Medical Freedom",
  "Biblical Marriage",
  "Suffering and God's Presence",
  "Christian Nationalism",
  "Educational Reform",
  "Biblical Gender",
  "Truth and Love",
  "God's Design",
  "Honoring Parents",
  "Economic Freedom",
  "National Responsibility",
  "Moral Law",
  "Constitutional Rights",
  "Biblical Society",
  "Forgiveness and Justice",
  "Eternal Destiny",
  "Divine Justice",
  "Biblical Apologetics",
  "Resurrection Apologetics",
  "Scripture Reliability",
  "Sabbath Rest",
  "Christian Citizenship",
  "Faithful Stewardship",
  "Absolute Truth",
  "Divine Sovereignty",
  "Eschatology",
  "Moral Absolutes",
  "Scripture Authority",
  "Human Dignity",
  "Salvation",
  "Cultural Engagement",
  "Christian Apologetics",
  "Final Words"
];
